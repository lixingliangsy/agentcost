import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'
import { useT } from '../../../lib/i18n/provider'
import { SITE_URL, type Lang } from '../../../lib/i18n/config'
import { loadBlogFull, BLOG_FULL_SLUGS } from '../../../lib/i18n/blogFullCatalog'

const DATES: Record<string, string> = {
  'ai-agent-token-cost-attribution-2026': '2026-09-16',
  'finops-budget-guardrails-for-llm-agents-2026': '2026-09-16',
}

export default function PillarReadPage() {
  const router = useRouter()
  const slug = String(router.query.slug || '')
  const { t, locale } = useT()
  const known = BLOG_FULL_SLUGS.includes(slug)
  const activeSlug = known ? slug : BLOG_FULL_SLUGS[0] || ''
  const article = activeSlug ? loadBlogFull(activeSlug, locale as Lang) : null

  if (slug && !known) {
    return (
      <Layout>
        <p className="text-slate-600">Not found.</p>
      </Layout>
    )
  }

  if (!article) {
    return (
      <Layout>
        <p className="text-slate-600">…</p>
      </Layout>
    )
  }

  const url = `${SITE_URL}/blog/read/${activeSlug}`
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.lead.slice(0, 300),
    inLanguage: locale,
    url,
    datePublished: DATES[activeSlug] || '2026-09-16',
  }
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale,
    mainEntity: (article.faqs || []).map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <Layout>
      <Head>
        <title>{article.title} — CostLens</title>
        <meta name="description" content={article.lead.slice(0, 160)} />
        <link rel="canonical" href={url} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
        {article.faqs?.length ? (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        ) : null}
      </Head>
      <article className="max-w-3xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-indigo-600">{article.eyebrow}</p>
        <h1 className="text-3xl font-bold text-slate-900 mt-2">{article.title}</h1>
        <p className="mt-4 text-slate-700 leading-relaxed whitespace-pre-wrap">{article.lead}</p>
        {article.sections.map((sec, i) => (
          <div key={i}>
            <h2 className="text-xl font-semibold mt-8 text-slate-900">{sec.h2}</h2>
            {sec.paras.map((p, j) => (
              <p key={j} className="mt-2 text-slate-700 leading-relaxed whitespace-pre-wrap">
                {p}
              </p>
            ))}
          </div>
        ))}
        {article.faqs?.length ? (
          <div className="mt-10 space-y-4">
            {article.faqs.map((f, i) => (
              <div key={i} className="rounded-lg border border-slate-200 p-4">
                <p className="font-semibold text-slate-900">{f.q}</p>
                <p className="mt-1 text-sm text-slate-600 whitespace-pre-wrap">{f.a}</p>
              </div>
            ))}
          </div>
        ) : null}
        <p className="text-xs text-slate-400 mt-8">{article.disclaimer}</p>
        <p className="mt-8 text-sm">
          <a href="/blog" className="text-indigo-600 hover:underline">
            &larr; {article.back}
          </a>
          {locale === 'en' ? (
            <>
              {' · '}
              <a href={`/blog/${activeSlug}.html`} className="text-indigo-600 hover:underline">
                {t('blog.readEnHtml')}
              </a>
            </>
          ) : null}
        </p>
      </article>
    </Layout>
  )
}
