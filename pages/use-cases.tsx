import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import { PRODUCT } from '../lib/product'

const segments = [
  {
    name: 'FinOps for AI',
    pain: 'LLM bills arrive as a single number — no visibility into what drove the cost or which agent is burning through the budget.',
    how: 'Break down costs by agent, feature, and user. Set budget alerts. Export to finance systems.',
  },
  {
    name: 'Agent Fleet Management',
    pain: '10+ agents running in production — no way to compare efficiency or identify optimization opportunities.',
    how: 'Rank agents by cost per task. See efficiency trends. Prioritize optimization work.',
  },
  {
    name: 'Usage-Based Billing',
    pain: 'Can\'t attribute agent costs to specific end-users for accurate pass-through billing.',
    how: 'Track spend per user. Generate invoices from the audit-ready ledger.',
  },
  {
    name: 'Runaway Loop Detection',
    pain: 'Agent loops burn through thousands of tokens — discovered only after the bill arrives.',
    how: 'Early-warning alerts catch unusual token consumption before budgets are breached.',
  },
]

export default function UseCasesPage() {
  return (
    <Layout>
      <Head>
        <title>{`${PRODUCT.name} — Use Cases`}</title>
        <meta name="description" content="How CostLens helps engineering, FinOps, and DevOps teams track and optimize AI agent spend." />
      </Head>
      <div className="max-w-4xl">
        <div className="text-xs font-bold tracking-widest uppercase text-indigo-600 mb-3">Use Cases</div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Built for teams shipping AI agents</h1>
        <p className="text-lg text-slate-600 mb-10">Pick your segment to see how CostLens solves your cost-tracking challenges.</p>

        <div className="space-y-5">
          {segments.map((s) => (
            <div key={s.name} className="rounded-2xl border border-slate-200 p-6 bg-white">
              <h2 className="text-xl font-bold mb-2 text-slate-900">{s.name}</h2>
              <p className="text-sm text-slate-600 mb-2"><span className="font-semibold text-slate-900">Pain: </span>{s.pain}</p>
              <p className="text-sm text-slate-600"><span className="font-semibold text-slate-900">How CostLens helps: </span>{s.how}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-8">ref: OWASP Top 10 for LLM Applications</p>
      </div>
    </Layout>
  )
}