// pages/api/checkout/session.ts — best-effort verification of a checkout session outcome.
//
// WHY: Waffo redirects the buyer here with `?session_id={SESSION_ID}` after payment
// (see pages/api/checkout.ts). Waffo exposes NO public "retrieve session by cs_ id" API,
// so verification is BEST-EFFORT: we read the store's most recent subscription orders via
// GraphQL and match by buyer email (or, when no email is supplied, by a short recency window).
//
// The AUTHORITATIVE provisioning trigger is the Waffo webhook (pages/api/webhooks/waffo),
// never this endpoint. Treat a positive result as UX only.
//
// Never import this module from client/browser code — lib/waffo holds the RSA private key.

import type { NextApiRequest, NextApiResponse } from 'next'
import { getWaffoClient } from '../../../lib/waffo'

const STORE_ID = process.env.WAFFO_STORE_ID || process.env.NEXT_PUBLIC_WAFFO_STORE_ID || ''
const IS_TEST = process.env.WAFFO_ENVIRONMENT === 'test'
const WINDOW_MS = 2 * 60 * 60 * 1000

interface Order {
  id?: string
  buyerEmail?: string | null
  status?: string
  currency?: string
  testMode?: boolean
  createdAt?: string
}

async function recentSubscriptionOrders(): Promise<Order[]> {
  const client = getWaffoClient()
  const query =
    'query($s:String!){ subscriptionOrders(storeId:$s, limit:20){ id buyerEmail status currency testMode createdAt } }'
  const res = await client.graphql.query<{ subscriptionOrders?: Order[] }>({ query, variables: { s: STORE_ID } })
  return (res && res.data && res.data.subscriptionOrders) || []
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'no-store, max-age=0')

  const sessionId = typeof req.query.session_id === 'string' ? req.query.session_id : ''
  const email = (typeof req.query.email === 'string' ? req.query.email : '').trim().toLowerCase()

  if (sessionId && !/^cs_[A-Za-z0-9-]+$/.test(sessionId)) {
    return res.status(400).json({ ok: false, verified: false, status: 'invalid_session' })
  }
  if (!STORE_ID) {
    return res.status(200).json({
      ok: true,
      verified: false,
      status: 'unconfigured',
      note: 'WAFFO_STORE_ID not set; rely on the receipt email / webhook.',
    })
  }

  try {
    const orders = await recentSubscriptionOrders()
    const recent = orders.filter((o) => {
      if (o.testMode !== undefined && o.testMode !== IS_TEST) return false
      if (!o.createdAt) return true
      const t = Date.parse(o.createdAt)
      return !Number.isFinite(t) || Date.now() - t <= WINDOW_MS
    })
    const pool = email ? recent.filter((o) => String(o.buyerEmail || '').toLowerCase() === email) : recent
    const hit = pool[0]
    return res.status(200).json({
      ok: true,
      verified: Boolean(hit),
      status: hit ? 'verified' : 'pending',
      sessionId: sessionId || undefined,
      matchedBy: hit ? (email ? 'buyer_email' : 'recency_window') : undefined,
      order: hit ? { id: hit.id, status: hit.status, currency: hit.currency, createdAt: hit.createdAt } : undefined,
      note: hit
        ? 'Best-effort match; the webhook remains the authoritative provisioning trigger.'
        : 'No matching order yet. Payment may take a moment to settle; check your receipt email.',
    })
  } catch (e: any) {
    console.warn('[checkout/session] verify failed:', (e && e.message) || e)
    return res.status(200).json({
      ok: true,
      verified: false,
      status: 'unavailable',
      note: 'Verification temporarily unavailable; rely on your receipt email.',
    })
  }
}
