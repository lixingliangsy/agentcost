// lib/i18n/detect.ts — locale detection for SSR and client.
//
// Priority: explicit cookie > browser Accept-Language > DEFAULT_LOCALE.
// Handles regional tags: pt-BR / pt-PT (plain `pt` → pt-BR). zh-* is opt-in (R40-ZH-OPTIN).

import { Lang, DEFAULT_LOCALE, LOCALES, COOKIE_NAME } from './config'

export function isValidLocale(v: unknown): v is Lang {
  return typeof v === 'string' && (LOCALES as string[]).includes(v)
}

function cookieLocale(cookie: string | undefined): Lang | null {
  if (!cookie) return null
  const m = cookie.match(new RegExp('(?:^|;\\s*)' + COOKIE_NAME + '=([^;]+)'))
  if (!m) return null
  let raw = m[1]
  try {
    raw = decodeURIComponent(raw)
  } catch {
    /* keep raw */
  }
  // Normalize via matchLangTag so pt-BR / pt_BR / PT-br / bare pt all resolve.
  // Strict includes() alone rejected underscore variants and older probe shapes.
  return matchLangTag(raw) ?? (isValidLocale(raw) ? raw : null)
}

/** Map an Accept-Language / navigator tag to a supported Lang. */
export function matchLangTag(tag: string): Lang | null {
  const code = tag.trim().toLowerCase().replace(/_/g, '-')
  if (!code) return null

  // Exact match against LOCALES (case-insensitive).
  const exact = LOCALES.find((l) => l.toLowerCase() === code)
  if (exact) return exact

  // Portuguese regions — distinguish BR vs PT; bare `pt` → Brazil (larger SaaS market).
  if (code === 'pt-br' || code === 'pt') return 'pt-BR'
  if (code === 'pt-pt') return 'pt-PT'

  // Chinese variants → zh.
  // R40-ZH-OPTIN: Chinese is opt-in only. Auto-detecting `zh` from a browser
  // Accept-Language header hijacked the first paint for zh-first browsers on an
  // English-first product. Chinese is reachable via `?lang=zh` or the locale
  // cookie; all other languages keep auto-detection unchanged.
  if (code === 'zh' || code.startsWith('zh-')) return null

  // Primary subtag only (de-DE → de, fr-CA → fr, …).
  const primary = code.split('-')[0]
  const byPrimary = LOCALES.find((l) => l.toLowerCase() === primary)
  if (byPrimary) return byPrimary

  return null
}

export function parseAcceptLanguage(header?: string | null): Lang | null {
  if (!header) return null
  const parts: { tag: string; q: number }[] = []
  for (const part of header.split(',')) {
    const [raw, ...params] = part.trim().split(';')
    let q = 1
    for (const p of params) {
      const m = p.trim().match(/^q=([0-9.]+)$/i)
      if (m) q = Number(m[1]) || 0
    }
    parts.push({ tag: raw.trim(), q })
  }
  parts.sort((a, b) => b.q - a.q)
  for (const { tag } of parts) {
    const hit = matchLangTag(tag)
    if (hit) return hit
  }
  return null
}

/** Server-side: call from _app.getInitialProps / _document.getInitialProps. */
export function detectLocaleFromReq(req?: {
  headers?: { cookie?: string; 'accept-language'?: string }
}): Lang {
  const locale =
    cookieLocale(req?.headers?.cookie) ?? parseAcceptLanguage(req?.headers?.['accept-language'])
  return locale ?? DEFAULT_LOCALE
}

/** Client-side: call on navigation (req is undefined). */
export function detectLocaleFromBrowser(): Lang {
  if (typeof document !== 'undefined') {
    const c = cookieLocale(document.cookie)
    if (c) return c
  }
  if (typeof navigator !== 'undefined') {
    const langs =
      Array.isArray(navigator.languages) && navigator.languages.length
        ? navigator.languages
        : [navigator.language]
    for (const l of langs) {
      const hit = matchLangTag(l)
      if (hit) return hit
    }
  }
  return DEFAULT_LOCALE
}
