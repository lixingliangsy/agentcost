// lib/i18n/index.ts — translator core (zero dependencies, SSR-safe).
//
// Features:
//   - t(path, vars) resolves nested keys with an en fallback chain.
//   - {{var}}               interpolation
//   - {var, plural, one{} other{}}  ICU-style plural (Intl.PluralRules)
//   - {var, select, x{} other{}}    ICU-style select (gender/enum)
//   - # inside plural        localized number
//   - formatNumber/Currency/Date use Intl.* via LOCALE_META.intlLocale

import { Lang, DEFAULT_LOCALE, LOCALE_META } from './config'
import type { Messages } from './types'
import en from './locales/en'
import da from './locales/da'
import de from './locales/de'
import es from './locales/es'
import fr from './locales/fr'
import it from './locales/it'
import nl from './locales/nl'
import ptBR from './locales/pt-BR'
import ptPT from './locales/pt-PT'
import zh from './locales/zh'

const CATALOGS: Record<Lang, Messages> = {
  en,
  da,
  de,
  es,
  fr,
  it,
  nl,
  'pt-BR': ptBR,
  'pt-PT': ptPT,
  zh,
}

export interface TranslatorVars {
  [key: string]: string | number
}

export interface Translator {
  locale: Lang
  /** Raw catalog object — use for arrays/objects (FAQ lists, steps). */
  catalog: Messages
  t: (path: string, vars?: TranslatorVars) => string
  formatNumber: (value: number, opts?: Intl.NumberFormatOptions) => string
  formatCurrency: (value: number, currency?: string) => string
  formatDate: (value: Date | number, opts?: Intl.DateTimeFormatOptions) => string
}

function intlTag(locale: Lang): string {
  return LOCALE_META[locale]?.intlLocale ?? locale
}

export function getCatalog(locale: Lang): Messages {
  return CATALOGS[locale] || CATALOGS[DEFAULT_LOCALE]
}

function lookup(catalog: Messages, path: string): string | undefined {
  const parts = path.split('.')
  let node: string | Messages | undefined = catalog
  for (const p of parts) {
    if (node == null || typeof node === 'string') return undefined
    node = (node as Messages)[p]
  }
  return typeof node === 'string' ? node : undefined
}

function parseChoices(body: string): Record<string, string> {
  const out: Record<string, string> = {}
  const re = /((?:=\d+)|\w+)\s*\{([^{}]*)\}/g
  let m: RegExpExecArray | null
  while ((m = re.exec(body)) !== null) out[m[1]] = m[2]
  return out
}

function evalChoice(
  name: string,
  type: 'plural' | 'select',
  body: string,
  vars: TranslatorVars,
  locale: Lang,
): string {
  const val = vars[name]
  const choices = parseChoices(body)
  if (type === 'select') return choices[String(val)] ?? choices.other ?? ''
  const n = typeof val === 'number' ? val : Number(val)
  if (!Number.isNaN(n) && choices['=' + n] != null) return choices['=' + n]
  const cat = new Intl.PluralRules(intlTag(locale)).select(n)
  let chosen = choices[cat] ?? choices.other ?? ''
  if (chosen.includes('#')) {
    chosen = chosen.replace(/#/g, new Intl.NumberFormat(intlTag(locale)).format(n))
  }
  return chosen
}

function applyPluralSelect(msg: string, vars: TranslatorVars, locale: Lang): string {
  let out = ''
  let i = 0
  while (i < msg.length) {
    if (msg[i] === '{') {
      let depth = 0
      let j = i
      for (; j < msg.length; j++) {
        if (msg[j] === '{') depth++
        else if (msg[j] === '}') {
          depth--
          if (depth === 0) break
        }
      }
      const inner = msg.slice(i + 1, j)
      const m = inner.match(/^([a-zA-Z_][\w]*)\s*,\s*(plural|select)\s*,\s*([\s\S]*)$/)
      if (m) {
        out += evalChoice(m[1], m[2] as 'plural' | 'select', m[3], vars, locale)
      } else {
        out += msg.slice(i, j + 1)
      }
      i = j + 1
      continue
    }
    out += msg[i]
    i++
  }
  return out
}

function interpolate(msg: string, vars: TranslatorVars): string {
  return msg.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (match, k: string) => {
    const v = vars[k]
    return v == null ? match : String(v)
  })
}

export function createTranslator(locale: Lang): Translator {
  const target = getCatalog(locale)
  const tag = intlTag(locale)
  function t(path: string, vars: TranslatorVars = {}): string {
    const direct = lookup(target, path)
    const msg = direct != null ? direct : lookup(CATALOGS[DEFAULT_LOCALE], path)
    if (msg == null) return path
    return interpolate(applyPluralSelect(msg, vars, locale), vars)
  }
  return {
    locale,
    catalog: target,
    t,
    formatNumber: (value, opts) => new Intl.NumberFormat(tag, opts).format(value),
    formatCurrency: (value, currency = 'USD') =>
      new Intl.NumberFormat(tag, {
        style: 'currency',
        currency,
        maximumFractionDigits: 0,
      }).format(value),
    formatDate: (value, opts) => new Intl.DateTimeFormat(tag, opts).format(value),
  }
}
