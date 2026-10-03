/**
 * Non-en locale cookie → redirect English static blog HTML to /blog/read/[slug].
 */
import { NextRequest, NextResponse } from 'next/server'
import { COOKIE_NAME, DEFAULT_LOCALE, LOCALES, type Lang } from './lib/i18n/config'

const PILLAR_SLUGS = new Set([
  'ai-agent-token-cost-attribution-2026',
  'finops-budget-guardrails-for-llm-agents-2026',
])

function matchLocale(raw: string | undefined): Lang | null {
  if (!raw) return null
  let v = raw
  try {
    v = decodeURIComponent(raw)
  } catch {
    /* keep */
  }
  const exact = LOCALES.find((l) => l.toLowerCase() === v.trim().toLowerCase())
  if (exact) return exact
  const lower = v.trim().toLowerCase().replace(/_/g, '-')
  if (lower === 'pt' || lower === 'pt-br') return 'pt-BR'
  if (lower === 'pt-pt') return 'pt-PT'
  if (lower === 'zh' || lower.startsWith('zh-')) return 'zh'
  const primary = lower.split('-')[0]
  return LOCALES.find((l) => l.toLowerCase() === primary) || null
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const m = pathname.match(/^\/blog\/([a-z0-9-]+)\.html$/i)
  if (!m) return NextResponse.next()
  const slug = m[1]
  if (!PILLAR_SLUGS.has(slug)) return NextResponse.next()

  const cookieRaw = req.cookies.get(COOKIE_NAME)?.value
  const al = req.headers.get('accept-language') || ''
  const alPrimary = al.split(',')[0]?.trim()
  const locale = matchLocale(cookieRaw) || matchLocale(alPrimary) || DEFAULT_LOCALE
  if (locale === 'en') return NextResponse.next()

  const url = req.nextUrl.clone()
  url.pathname = `/blog/read/${slug}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/blog/:path*.html'],
}
