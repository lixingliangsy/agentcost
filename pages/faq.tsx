import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import { PRODUCT } from '../lib/product'
import { useT } from '../lib/i18n/provider'

const SITE = `https://${PRODUCT.slug}.lxsaihub.com`

export default function FaqPage() {
  const { catalog } = useT()
  const items = (((catalog as any)?.faq?.items || []) as Array<{ q: string; a: string }>)
  const geo = (((catalog as any)?.faq?.geoItems || []) as Array<{ q: string; a: string }>)
  const all = [...items, ...geo].filter((x) => x && x.q && x.a)

  return (
    <Layout>
      <Head>
        <title>{`${PRODUCT.name} FAQ`}</title>
        <meta name="description" content={`Answers about ${PRODUCT.name}: what it does, how it works, pricing, and limits. ${PRODUCT.tagline}`} />
        <link rel="canonical" href={`${SITE}/faq`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: all.slice(0, 20).map((x) => ({
                '@type': 'Question',
                name: x.q,
                acceptedAnswer: { '@type': 'Answer', text: x.a },
              })),
            }),
          }}
        />
      </Head>
      <article className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">{PRODUCT.name} FAQ</h1>
        <p className="text-slate-600 mb-10">{PRODUCT.tagline}</p>
        <div className="space-y-3">
          {all.map((item) => (
            <details key={item.q} className="bg-white border border-slate-200 rounded-xl p-4">
              <summary className="font-bold cursor-pointer">{item.q}</summary>
              <p className="mt-2 text-slate-600 text-sm">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="/#pricing" className="inline-block px-8 py-3 rounded-full bg-indigo-600 text-white font-bold">
            {`See ${PRODUCT.name} pricing`}
          </a>
        </div>
      </article>
    </Layout>
  )
}
