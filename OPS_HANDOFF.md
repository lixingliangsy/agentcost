# OPS_HANDOFF — CostLens (agentcost)

1. **Env** — on Vercel project `agentcost`: `OPENAI_API_KEY` / `OPENAI_BASE_URL` / `WAFFO_*` / `WAFFO_STORE_ID` / `ADMIN_EMAILS` / optional `NEXT_PUBLIC_CLARITY_ID` / ButtonDown if used
2. **DNS** — Cloudflare CNAME `agentcost` → `cname.vercel-dns.com` (proxied) → https://agentcost.lxsaihub.com
3. **SKUs** — monthly `PROD_3S65alCRekKskhNZ7sQHC4` · yearly `PROD_0KaoONF9pyEHo8eltoK1pN` · **$49 / $490**
4. **Real-card** — `/api/checkout?cycle=monthly|yearly` → TEST store → webhook idempotency
5. **Deploy** — **PENDING** (2026-09-26 Mode A). Do **not** mark READY until fleet probe passes. 6h automation picks up.

Smoke note: if local `next dev` crashes on cache, manually delete `.next` then retry (sandbox safe-delete pit).
