export interface InputField {
  key: string
  label: string
  type: 'input' | 'text' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "CostLens",
  slug: "agentcost",
  productId: "PROD_3S65alCRekKskhNZ7sQHC4",
  priceMonthly: 49,
  yearlyProductId: "PROD_0KaoONF9pyEHo8eltoK1pN",
  priceYearly: 490,
  checkoutUrl: "/api/checkout",
  tagline: "See exactly where your AI agents spend money",
  description: "CostLens attributes LLM and agent inference cost to the agent, feature, and user that triggered it - with a running ledger, per-agent budget guardrails, and early-warning alerts before a loop drains the budget.",
  toolTitle: "Attribute your agent cost",
  resultLabel: "Cost attribution",
  ctaLabel: "Analyze spend",
  definitionLead: `CostLens is a cost-observability tool for AI agents and LLM workflows that attributes spend per run, per tool, and per model, so teams can find the workflows burning the most token budget.`,
  geoLongTail: [
    "what is CostLens",
    "how does CostLens work",
    "how much does CostLens cost",
    "is CostLens free",
    "CostLens vs doing it manually",
  ],
  geoQuickAnswer: [
    "Cost by agent / feature / user",
    "Budget guardrails",
    "Early-warning alerts",
    "Audit-ready ledger",
    "Pricing starts at $0 (Free).",
  ],
  geoComparison: {
    vsManual: [
      ["Speed", "Minutes per run", "Hours to days"],
      ["Consistency", "Same ruleset every run", "Varies by person"],
      ["Output", "Structured, exportable result", "Free-form"],
      ["Best for", "First-pass decision-support", "Final sign-off"],
    ],
    whenNotToUse: "When you need a certified or attested result rather than decision-support.",
  },
  geoFaq: [
    { q: "What does CostLens measure?", a: "Token and API spend per run, tool call, and model, with a daily fair-use cap and anomaly flags." },
    { q: "Does it need my own OpenAI key?", a: "Free and Pro use the platform key; Enterprise can bring your own key (BYOK) kept server-side." },
    { q: "How are costs attributed?", a: "Each run carries a runId; spend is rolled up by runId, tool, and model." },
    { q: "Can I set a budget alert?", a: "Enterprise supports caps; Pro surfaces HTTP 429 when fair-use limits are hit." },
    { q: "Which models are supported?", a: "Any OpenAI-compatible endpoint configured via OPENAI_BASE_URL." },
    { q: "Is it real-time?", a: "Near-real-time; dashboards refresh per run." }
  ,
  { q: "Which countries and regions can I use CostLens in?", a: "As a cloud web app, CostLens is reachable from any country with internet access; there is no region lock by default. Payment availability via our merchant of record (Waffo Pancake) may vary by processor and region." },
  { q: "Is CostLens GDPR and privacy compliant?", a: "Your inputs are used only to generate your output and are never sold. Retention, sub-processors, and your rights are described on our Privacy page; Enterprise plans can include a DPA and NDA on request." },
  { q: "What languages does CostLens support?", a: "The interface and generated results are in English. You can paste input in other major languages wherever the underlying model understands them." }],

  steps: ['Ingest spend log', 'Attribute cost', 'Guardrail report'],
  features: [
  "Cost by agent / feature / user",
  "Budget guardrails",
  "Early-warning alerts",
  "Audit-ready ledger"
],
  inputs: [
  {
    "key": "agent_description",
    "label": "Describe your agents and tools",
    "type": "textarea",
    "placeholder": "e.g. A support agent (email+API) and a research agent (web+browser)"
  },
  {
    "key": "spend_data",
    "label": "Paste a sample spend log (agent, feature, user, tokens) or describe usage",
    "type": "textarea",
    "placeholder": "support-agent, summarize, user-12, 42000 tokens\nresearch-agent, browse, user-04, 180000 tokens"
  },
  {
    "key": "focus",
    "label": "Attribution focus",
    "type": "select",
    "options": [
      "By agent",
      "By feature",
      "By user"
    ]
  }
] as InputField[],
  systemPrompt: "You are a FinOps analyst for AI agent teams. Given agent descriptions, a spend sample, and a focus dimension, produce a cost-attribution breakdown: rank the top cost drivers along the chosen dimension, recommend a per-agent budget guardrail, and define one early-warning rule that catches a runaway loop before it drains the budget. Be concrete with numbers from the sample.\n\nCAPABILITY ALIGNMENT (must match declared product features): Deliver the following so the output is consistent with what we promote — Audit-ready ledger.",
  pricing: [
    {
      "tier": "Free",
      "price": "$0",
      "desc": "1 workflow run / day · watermarked export"
    },
    {
      "tier": "Pro",
      "price": "$49/mo",
      "desc": "300 workflow runs / mo · audit log · export"
    },
    {
      "tier": "Enterprise",
      "price": "Custom",
      "desc": "SSO-ready · BYOK · higher caps · shared rulesets"
    }
  ],
  mock: (inputs: Record<string, string>): string => {
  const desc = (inputs['agent_description'] || '').trim()
  const data = (inputs['spend_data'] || inputs['text'] || inputs['topic'] || '').trim()
  const focus = inputs['focus'] || 'By agent'
  if (!data) return 'Paste a sample spend log (agent, feature, user, tokens) to see the attribution breakdown.'
  const lines = data.split(/\n/).map(s => s.trim()).filter(Boolean)
  const buckets: Record<string, number> = {}
  lines.forEach(l => {
    const parts = l.split(',')
    let key = 'unknown'
    if (focus === 'By agent') key = (parts[0] || 'agent').trim()
    else if (focus === 'By feature') key = (parts[1] || 'feature').trim()
    else key = (parts[2] || 'user').trim()
    const tok = parseInt((parts[3] || '0').replace(/[^0-9]/g, ''), 10) || 0
    buckets[key] = (buckets[key] || 0) + tok
  })
  const ranked = Object.keys(buckets).sort((a, b) => buckets[b] - buckets[a])
  let out = 'COST ATTRIBUTION (' + focus + ')\n\n'
  ranked.forEach(k => { out += '  ' + k + ': ' + buckets[k].toLocaleString() + ' tokens\n' })
  const top = ranked[0] || 'n/a'
  out += '\nTOP DRIVER: ' + top + '\n'
  out += 'GUARDRAIL: cap ' + top + ' at ~' + Math.round((buckets[top] || 0) * 1.5).toLocaleString() + ' tokens/run\n'
  out += 'EARLY-WARNING: alert if any single run exceeds 3x the median run cost\n\n'
  out += '--- (Mock attribution. Pro adds a running ledger, live guardrails, and alerts.)'
  return out
}
}
