// lib/rules/agent-finops.ts — L3 deterministic FinOps checklist for agentcost.
// Rule-based layer that runs on the model output. Rule IDs are referenced in reports.
// Web-grounded 2026-07-19 (FINOPS-07..12): FinOps Foundation "Token Economics: Managing AI
// Value in SaaS Model Token Costs" (finops.org/wg/token-economics-saas, CC BY 4.0, 2026-06-03).
export const RULESET_ID = 'agent-finops'
export const RULESET_VERSION = '2026-07-19'

export interface RuleResult {
  ruleId: string
  name: string
  passed: boolean
  message: string
  category: 'completeness' | 'attribution' | 'guardrail' | 'honesty'
  ref?: string
}

function has(text: string, re: RegExp): boolean {
  return re.test(text)
}

export function runAllRules(text: string): RuleResult[] {
  const t = String(text || '')
  const rules: RuleResult[] = [
    {
      ruleId: 'FINOPS-01',
      name: 'Spend log parsed',
      category: 'completeness',
      passed: has(t, /spend|cost|token|request|\$/i) && t.length > 60,
      message: 'Output references spend/cost signals.',
    },
    {
      ruleId: 'FINOPS-02',
      name: 'Top driver identified',
      category: 'attribution',
      passed: has(t, /top|driver|highest|largest|most expensive|leader/i),
      message: 'Output names a leading cost driver.',
    },
    {
      ruleId: 'FINOPS-03',
      name: 'Budget guardrail present',
      category: 'guardrail',
      passed: has(t, /budget|cap|threshold|limit|alert/i),
      message: 'Output proposes a budget/alert threshold.',
    },
    {
      ruleId: 'FINOPS-04',
      name: 'Attribution reconciles to total',
      category: 'attribution',
      passed: has(t, /total|sum|100%|share|%/i),
      message: 'Output includes totals or shares that reconcile to a whole.',
    },
    {
      ruleId: 'FINOPS-05',
      name: 'No fabricated savings promise',
      category: 'honesty',
      passed: !has(t, /(guarantee|guaranteed).*(save|cut|reduce|lower)|100%.*(reduce|save)|always catch/i),
      message: 'Output avoids promising guaranteed savings.',
    },
    {
      ruleId: 'FINOPS-06',
      name: 'Next action defined',
      category: 'completeness',
      passed: has(t, /next step|recommend|action|reallocate|set|configure/i),
      message: 'Output gives a concrete next action.',
    },
    {
      ruleId: 'FINOPS-07',
      name: 'Input/output token split disclosed',
      category: 'attribution',
      passed: has(t, /input.{0,12}token|output.{0,12}token|per[ .-]?token|1:3|1:5|token price|output (is|costs?).{0,12}(more|expensive)/i),
      message: 'Output separates input vs output token cost (output billed 1:3–1:5 of input).',
      ref: 'https://www.finops.org/wg/token-economics-saas/',
    },
    {
      ruleId: 'FINOPS-08',
      name: 'Context-window cost acknowledged',
      category: 'attribution',
      passed: has(t, /context window|multi-turn|conversation history|re-?send|recompute|prompt caching|cache/i),
      message: 'Output accounts for multi-turn context-window recompute cost.',
      ref: 'https://www.finops.org/wg/token-economics-saas/',
    },
    {
      ruleId: 'FINOPS-09',
      name: 'Cost attributed by workload/owner',
      category: 'attribution',
      passed: has(t, /owner|cost center|team|workload|attribution|tag|api key|per[ .-]?key/i),
      message: 'Output attributes spend to team/owner/cost-center (per-key governance).',
      ref: 'https://www.finops.org/wg/token-economics-saas/',
    },
    {
      ruleId: 'FINOPS-10',
      name: 'Surrounding RAG/vector cost recognized',
      category: 'attribution',
      passed: has(t, /vector|embedding|orchestrat|retrieval|rag|surrounding cost|40-60%|storage cost/i),
      message: 'Output notes surrounding cost (vector/embedding/orchestration = 40–60% of total).',
      ref: 'https://www.finops.org/wg/token-economics-saas/',
    },
    {
      ruleId: 'FINOPS-11',
      name: 'Budget baseline + alert thresholds',
      category: 'guardrail',
      passed: has(t, /baseline|80%|100%|110%|120%|alert|threshold|measure (for )?30-60|30-60 day/i),
      message: 'Output proposes baseline (30–60d) + budget 110–120% + alerts at 80%/100%.',
      ref: 'https://www.finops.org/wg/token-economics-saas/',
    },
    {
      ruleId: 'FINOPS-12',
      name: 'Unit economics tied to business',
      category: 'completeness',
      passed: has(t, /per (query|user|workflow|transaction|ticket)|cost per|unit economic|roi|business outcome/i),
      message: 'Output expresses cost per query/user/workflow/business transaction.',
      ref: 'https://www.finops.org/wg/token-economics-saas/',
    },
  ]
  return rules
}
