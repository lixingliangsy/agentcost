// stub — regenerate after blog-full filled
import type { Lang } from './config'
import type { BlogFullArticle } from './blogFull'
import { getBlogFull } from './blogFull'
const CATALOG: Record<string, Partial<Record<Lang, BlogFullArticle>>> = {}
export const BLOG_FULL_SLUGS = Object.keys(CATALOG)
export function loadBlogFull(slug: string, locale: Lang): BlogFullArticle | null {
  return getBlogFull(CATALOG, slug, locale)
}
