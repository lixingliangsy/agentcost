// lib/i18n/blogFull.ts — full-length multilingual pillar articles (Scheme B).
import type { Lang } from './config'

export type BlogFullArticle = {
  title: string
  eyebrow: string
  lead: string
  sections: Array<{ h2: string; paras: string[] }>
  faqs: Array<{ q: string; a: string }>
  disclaimer: string
  back: string
}

export function getBlogFull(
  catalog: Record<string, Partial<Record<Lang, BlogFullArticle>>>,
  slug: string,
  locale: Lang,
): BlogFullArticle | null {
  const entry = catalog[slug]
  if (!entry) return null
  return entry[locale] || entry.en || null
}
