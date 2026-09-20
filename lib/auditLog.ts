import fs from 'fs'
import path from 'path'

export function audit(event: string, meta: Record<string, unknown> = {}) {
  const dir = path.join(process.cwd(), '.data', 'audit')
  try { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }) } catch (e) { /* read-only FS (serverless): best effort */ }
  const line = { ts: new Date().toISOString(), event, ...meta }
  try { fs.appendFileSync(path.join(dir, 'audit.jsonl'), JSON.stringify(line) + '\n', 'utf8') } catch (e) { /* read-only FS (serverless): best effort */ }
}

export type AuditEventInput = {
  slug: string
  runId: string
  step?: string
  mode?: 'demo' | 'live'
  ok?: boolean
  source?: string
  error?: string
  meta?: Record<string, unknown>
}

/**
 * Append-then-forget audit row for a tool run (L4 trust & accountability trail).
 * Best-effort only: the serverless filesystem is read-only, so any failure must
 * NOT break the request path.
 */
export async function writeAudit(e: AuditEventInput): Promise<void> {
  try {
    const dir = path.join(process.cwd(), '.data', 'audit')
    fs.mkdirSync(dir, { recursive: true })
    const row = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      ts: new Date().toISOString(),
      ...e,
    }
    fs.appendFileSync(path.join(dir, `${new Date().toISOString().slice(0, 10)}.jsonl`), JSON.stringify(row) + '\n', 'utf8')
  } catch (e) { /* read-only FS (serverless): best effort */ }
}
