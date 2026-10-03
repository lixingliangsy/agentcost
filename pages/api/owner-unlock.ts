// pages/api/owner-unlock.ts  (fleet template, 2026-09-28)
// Owner 全功能解锁：签发 HMAC 签名的 enterprise 级 entitlement cookie，有效期 365 天。
// 签发门禁：OWNER_UNLOCK_SECRET（server-only，绝不下发前端）+ email === lixingliangsy@163.com。
// 签名：AI_ENTITLEMENT_SECRET。失败一律 403/400/503，绝不静默放行（fail-closed）。
import type { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'

const OWNER_EMAIL = 'lixingliangsy@163.com'
const COOKIE_NAME = 'ai_entitlement'
const TTL_MS = 365 * 24 * 60 * 60 * 1000

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'method_not_allowed' })
  }
  const signSecret = process.env.AI_ENTITLEMENT_SECRET
  const unlockSecret = process.env.OWNER_UNLOCK_SECRET
  if (!signSecret || !unlockSecret) {
    return res.status(503).json({ ok: false, error: 'owner_unlock_not_configured' })
  }
  const body = (req.body || {}) as { email?: unknown; secret?: unknown }
  if (typeof body.email !== 'string' || typeof body.secret !== 'string') {
    return res.status(400).json({ ok: false, error: 'bad_request' })
  }
  // email 明文比对（非密钥，无需 timing-safe）；secret 长度先比再用 timing-safe
  if (body.email !== OWNER_EMAIL) {
    return res.status(403).json({ ok: false, error: 'forbidden' })
  }
  let secretOk = false
  try {
    secretOk =
      body.secret.length === unlockSecret.length &&
      crypto.timingSafeEqual(Buffer.from(body.secret), Buffer.from(unlockSecret))
  } catch {
    secretOk = false
  }
  if (!secretOk) {
    return res.status(403).json({ ok: false, error: 'forbidden' })
  }
  const exp = Date.now() + TTL_MS
  const payload = `enterprise:${exp}`
  const sig = crypto.createHmac('sha256', signSecret).update(payload).digest('hex')
  const token = `${payload}:${sig}`
  res.setHeader(
    'Set-Cookie',
    `${COOKIE_NAME}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${Math.floor(TTL_MS / 1000)}`,
  )
  return res.status(200).json({ ok: true, plan: 'enterprise', exp })
}
