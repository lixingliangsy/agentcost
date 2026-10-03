// lib/pipeline.ts — L1 multi-step workflow ownership for agentcost (Agent FinOps).
// Each step carries a runId and the intermediate state is durable in .data/runs.
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

export type StepId = 'ingest' | 'attribution' | 'report'

export const STEP_ORDER: StepId[] = ['ingest', 'attribution', 'report']
export const STEP_TOTAL = STEP_ORDER.length

export const STEP_LABELS: Record<StepId, string> = {
  ingest: "Step 1/3 · Ingest spend log",
  attribution: "Step 2/3 · Attribute cost drivers",
  report: "Step 3/3 · FinOps guardrail report",
}

export function getStepLabel(step: StepId): string {
  return STEP_LABELS[step] || String(step)
}

export function getNextStep(step: StepId): StepId | null {
  const i = STEP_ORDER.indexOf(step)
  return i >= 0 && i < STEP_ORDER.length - 1 ? STEP_ORDER[i + 1] : null
}

export interface RunState {
  runId: string
  slug: string
  createdAt: string
  updatedAt: string
  status: 'running' | 'awaiting_confirm' | 'done' | 'error'
  rulesetVersion?: string
  step: StepId
  inputs: Record<string, string>
  artifacts: Partial<Record<StepId, any>>
  asset?: any
}

const DATA_DIR = path.join(process.cwd(), '.data', 'runs')
function fileFor(slug: string) {
  return path.join(DATA_DIR, `${slug}.jsonl`)
}

export function createRun(slug: string, inputs: Record<string, string>): RunState {
  const now = new Date().toISOString()
  return {
    runId: crypto.randomUUID(),
    slug,
    createdAt: now,
    updatedAt: now,
    status: 'running',
    step: STEP_ORDER[0],
    inputs,
    artifacts: {},
  }
}

export function loadRun(slug: string, runId?: string): RunState | null {
  if (!runId) return null
  try {
    if (!fs.existsSync(fileFor(slug))) return null
    const lines = fs.readFileSync(fileFor(slug), 'utf-8').split('\n').filter(Boolean)
    for (let i = lines.length - 1; i >= 0; i--) {
      const r = JSON.parse(lines[i])
      if (r.runId === runId) return r as RunState
    }
  } catch {
    /* ignore */
  }
  return null
}

export function saveRun(run: RunState): RunState {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true })
    fs.appendFileSync(fileFor(run.slug), JSON.stringify(run) + '\n')
  } catch {
    /* non-fatal: still returns run for in-memory use */
  }
  return run
}

export function nextStep(run: RunState, _action: 'next' | 'confirm' | 'reject' = 'next'): RunState {
  const next = getNextStep(run.step)
  const now = new Date().toISOString()
  if (!next) return { ...run, status: 'done', updatedAt: now }
  return { ...run, step: next, status: 'running', updatedAt: now }
}

export function finalizeRun(run: RunState): RunState {
  return { ...run, status: 'done', updatedAt: new Date().toISOString() }
}

export function ensureStepState(run: RunState, step: StepId): RunState {
  if (run.step !== step) return { ...run, step, updatedAt: new Date().toISOString() }
  return run
}

export function appendSection(run: RunState, step: StepId, value: any): RunState {
  return { ...run, artifacts: { ...run.artifacts, [step]: value }, updatedAt: new Date().toISOString() }
}

/** Alias for batch DoD parity with createRun/saveRun/completeRun */
export const completeRun = finalizeRun
