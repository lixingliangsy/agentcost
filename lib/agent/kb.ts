import type { KbEntry } from "../support-kit/types";
export type { KbEntry };

export const KB: KbEntry[] = [
  {
    id: "what",
    title: "What CostLens does",
    keywords: ["CostLens", "agentcost", "what", "product", "about", "See exactly where your AI agents spend money"],
    body: "See exactly where your AI agents spend money. CostLens attributes LLM and agent inference cost to the agent, feature, and user that triggered it - with a running ledger, per-agent budget guardrails, and early-warning alerts before a loop drains the budget.",
    source: "CostLens product definition",
    tags: [],
  },
  {
    id: "features",
    title: "CostLens features",
    keywords: ["features", "feature", "can", "does", "Cost by agent / feature / user", "Budget guardrails", "Early-warning alerts", "Audit-ready ledger"],
    body: "CostLens includes: Cost by agent / feature / user; Budget guardrails; Early-warning alerts; Audit-ready ledger. It does not add capabilities that are not listed here.",
    source: "CostLens feature list",
    tags: [],
  },
  {
    id: "pricing",
    title: "CostLens pricing",
    keywords: ["price", "pricing", "plan", "cost", "billing", "subscription", "monthly", "yearly"],
    body: "Listed prices for CostLens: $49/month and $490/year. Checkout uses the in-app checkout route. This assistant cannot change a subscription or issue a refund.",
    source: "CostLens pricing fields",
    tags: [],
  },
  {
    id: "howto",
    title: "How to use CostLens",
    keywords: ["how", "start", "use", "tool", "run", "Attribute your agent cost"],
    body: "Open CostLens and use Attribute your agent cost. The form asks for: Describe your agents and tools; Paste a sample spend log (agent, feature, user, tokens) or describe usage; Attribution focus.",
    source: "CostLens tool fields",
    tags: [],
  },
  {
    id: "faq-1",
    title: "What does CostLens measure?",
    keywords: ["What", "does", "CostLens", "measure?"],
    body: "Token and API spend per run, tool call, and model, with a daily fair-use cap and anomaly flags.",
    source: "CostLens FAQ",
    tags: [],
  },
  {
    id: "faq-2",
    title: "Does it need my own OpenAI key?",
    keywords: ["Does", "it", "need", "my", "own", "OpenAI"],
    body: "Free and Pro use the platform key; Enterprise can bring your own key (BYOK) kept server-side.",
    source: "CostLens FAQ",
    tags: [],
  },
  {
    id: "faq-3",
    title: "How are costs attributed?",
    keywords: ["How", "are", "costs", "attributed?"],
    body: "Each run carries a runId; spend is rolled up by runId, tool, and model.",
    source: "CostLens FAQ",
    tags: [],
  },
  {
    id: "honesty",
    title: "What this assistant will not claim",
    keywords: ["legal", "advice", "guarantee", "demo", "human", "refund", "support"],
    body: "Answers about CostLens are decision support only, not legal, tax, accessibility-certification, or compliance sign-off. This assistant does not invent integrations, SSO, CSV export, or Slack connections unless they are already in the product description. If live AI is unavailable, the product must not pretend a demo result is live. Say you want a human and leave an email if you need a person.",
    source: "CostLens support policy",
    tags: ["compliance"],
  },
];

function normalize(s: string): string {
  return (s || "").toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ");
}
function toWords(s: string): string[] {
  return normalize(s).split(/\s+/).map((w) => w.trim()).filter(Boolean);
}
function cjkBigrams(s: string): string[] {
  const grams: string[] = [];
  const han = /[\u4e00-\u9fff]/;
  for (const w of toWords(s)) {
    if (han.test(w) && w.length >= 2) {
      for (let i = 0; i < w.length - 1; i++) grams.push(w.slice(i, i + 2));
    }
  }
  return grams;
}
function scoreEntry(entry: KbEntry, query: string): number {
  const q = normalize(query);
  const qWords = new Set(toWords(q));
  const qGrams = new Set(cjkBigrams(q));
  let s = 0;
  for (const kw of entry.keywords) {
    const k = kw.toLowerCase();
    if (q.includes(k)) s += 3;
  }
  for (const tw of toWords(entry.title)) {
    if (qWords.has(tw)) s += 2;
  }
  const idx = normalize(entry.keywords.join(" ") + " " + entry.title + " " + entry.body.slice(0, 400));
  for (const g of qGrams) if (idx.includes(g)) s += 0.5;
  return s;
}

export interface RetrieveResult {
  entries: KbEntry[];
  topScore: number;
}

export function retrieve(query: string, topK = 4, entries: KbEntry[] = KB): RetrieveResult {
  const scored = entries
    .map((e) => ({ e, s: scoreEntry(e, query) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, topK);
  return { entries: scored.map((x) => x.e), topScore: scored.length ? scored[0].s : 0 };
}

export function isComplianceRelated(entries: KbEntry[]): boolean {
  return entries.some((e) => e.tags.includes("compliance"));
}
