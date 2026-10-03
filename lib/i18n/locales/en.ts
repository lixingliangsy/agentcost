// locales/en.ts — CostLens REFERENCE catalog (shape authority).
// Terminology aligned with Termly/iubenda/OneTrust DE·FR UI + GDPR Art.4 (controller/processor).

import type { Messages } from '../types'

const en = {
  meta: {
    title: 'CostLens · See where AI agents spend money',
    description:
      'Attribute LLM and agent inference cost to the agent, feature, and user that triggered it — with budget guardrails.',
  },
  common: {
    appName: 'CostLens',
    tagline: 'See exactly where your AI agents spend money',
    microSaas: 'Micro SaaS',
    menu: 'Menu',
  },
  nav: {
    backToHub: 'Back to hub',
    home: 'Home',
    features: 'Features',
    useCases: 'Use cases',
    integrations: 'Integrations',
    howItWorks: 'How it works',
    studio: 'Studio',
    security: 'Security',
    pricing: 'Pricing',
    blog: 'Blog',
    faq: 'FAQ',
    feedback: 'Feedback',
    support: 'Support',
    signIn: 'Sign in',
    subscribe: 'Subscribe',
    getStarted: 'Try it on this page',
  },
  hero: {
    badge: 'Micro SaaS',
    title: 'Attribute agent spend before a loop drains the budget.',
    subtitle:
      'Per-agent ledger, budget guardrails, and alerts — so FinOps knows which agent burned tokens and why.',
    keyTakeaways: 'Key Takeaways',
    takeaway1: 'Token cost attribution by agent, feature, and user.',
    takeaway2: 'Per-agent budget guardrails with early warnings.',
    takeaway3: 'Honesty: FinOps decision-support — not a billing or cost-guarantee certificate.',
    ctaPrimary: 'Subscribe',
    ctaSecondary: 'Watch Demo',
    note: 'No credit card required · Cancel anytime',
    playDemo: 'Play demo ▶',
    walkthrough: 'Click to watch walkthrough',
  },
  stats: {
    builders: 'Builders',
    avgRating: 'Avg rating',
    uptime: 'Uptime',
    timeToValue: 'Time to value',
  },
  pricing: {
    heading: 'Simple plans that scale',
    monthly: 'Monthly',
    yearly: 'Annual',
    perMonth: '/mo',
    mostPopular: 'Most popular',
    getPro: 'Get Pro',
    orYearly: 'Or pay yearly — ${{amount}}/mo',
    custom: 'Custom',
    contactSales: 'Contact sales',
    configureByok: 'Configure BYOK',
    getStarted: 'Try it on this page',
    freeForever: 'free forever',
    billedMonthly: 'billed monthly',
    save: 'save',
    freeFeat1: 'Limited daily AI runs (10/day · 50/mo)',
    freeFeat2: 'Studio demo (no extra LLM fee)',
    proFeat1: 'AI included: 300 gens/mo · fair use (gpt-4o-mini)',
    proFeat2: 'No separate ChatGPT subscription required',
    proFeat3: 'Priority support · 2 months free with yearly',
    entFeat1: 'Team seats · API access (roadmap)',
    entFeat2: 'Optional BYOK (your OpenAI key)',
  },
  faq: {
    title: 'Your questions, answered',
    geoTitle: 'CostLens — frequently asked questions',
    items: [
      {
        q: 'What does CostLens track?', a: 'LLM and agent inference cost attributed to agents, features, and users — with budget guardrails. Decision-support, not a billing certificate.',
      },
      {
        q: 'Is this legal advice or a certification?',
        a: 'No. Outputs are decision-support drafts. Have counsel and risk owners review before production. We do not claim ISO, CMP, or regulator certification.',
      },
      {
        q: 'Can I cancel anytime?',
        a: 'Yes. Self-serve plans cancel anytime; access continues until period end.',
      },
      {
        q: 'Do I need a credit card to start?',
        a: 'No. Start with email signup or Demo mode in the studio, then upgrade when ready.',
      },
      {
        q: 'Do I need my own ChatGPT / OpenAI subscription?',
        a: 'No for Free/Pro. AI runs are included in your plan (fair use) via our platform key. Enterprise can optionally bring your own OpenAI key (BYOK) — configure it at /settings (key stays server-side only).',
      },
      {
        q: 'What is Fair Use / what if I hit the AI limit?',
        a: 'Pro includes about 300 AI generations/month (and a daily cap) on gpt-4o-mini. If you hit the fair-use limit, Studio returns a mock/demo result until the daily or monthly reset — or upgrade / use Enterprise BYOK for heavier volume.',
      },
      {
        q: 'Is checkout secure?',
        a: 'Payments are processed by Waffo Pancake (merchant of record).',
      },
      {
        q: 'What happens after I pay?',
        a: 'You receive access confirmation; fulfillment is tracked via webhook + order logs.',
      },
    ],
  
    geoItems: [
      { q: 'What signals?', a: 'Token usage mapped to agent, feature, and user.' },
      { q: 'Does it replace your bill?', a: 'No. Decision-support attribution — not a billing guarantee.' },
      { q: 'Budget alerts?', a: 'Per-agent guardrails with early warnings before loops drain spend.' },
      { q: 'Demo vs live?', a: 'Demo is labelled; live narrative needs a configured AI key.' },
      { q: 'Who is it for?', a: 'Platform and FinOps teams shipping multi-agent stacks.' },
      { q: 'Primary sources?', a: 'LLM FinOps / token attribution practice notes.' },
    ],
},
  footer: {
    product: 'Product',
    company: 'Company',
    resources: 'Resources',
    legal: 'Legal',
    about: 'About',
    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',
    refund: 'Refund',
    support: 'Support',
    feedback: 'Feedback',
    rights: 'All rights reserved.',
    partOfFleet: 'Part of the LX AI Micro-SaaS fleet.',
  },
  signup: {
    title: 'Start smarter today',
    subtitle: 'Join builders using CostLens. Free to try — no card needed.',
    emailPlaceholder: 'Enter your email',
    saving: 'Saving…',
    cta: 'Create my account',
    trust: 'Trusted · Cancel anytime',
  },
  feedback: {
    open: 'Feedback',
    title: 'Send feedback',
    blurb: 'Tell us what worked, what broke, or what you want next.',
    fullPage: 'Prefer a full page?',
    openPage: 'Open /feedback',
    close: 'Close feedback',
    helpful: 'Was this result helpful?',
    yes: 'Yes',
    no: 'No',
    thanks: 'Thanks for the feedback.',
    commentPlaceholder: 'Optional one-line comment',
    generalTitle: 'General Feedback',
    generalSub: 'Tell us what you think',
    generalPh: 'What did you like, dislike, or notice while using the product?',
    ideaTitle: 'I have an idea',
    ideaSub: 'Suggest a feature or improvement',
    ideaPh: 'Describe your idea and the problem it would solve…',
    issueTitle: 'I found an issue',
    issueSub: 'Report a bug or problem',
    issuePh: 'What happened, what did you expect, and how can we reproduce it?',
    submit: 'Submit feedback',
    submitting: 'Sending…',
    done: 'Thanks — feedback received.',
    emailOptional: 'Email (optional)',
    category: 'Category',
    yourFeedback: 'Your feedback',
    attachment: 'Attachment (optional)',

    back: '← Back to feedback type',
    pickTitle: 'What feedback do you have?',
    pickSub: 'Pick one to get started. You can add details and a precise category on the next step.',
    thanksTitle: 'Thanks for your feedback!',
    thanksBody: 'We have received it and our team will follow up soon. Feel free to submit again anytime.',
    submitAnother: 'Submit another',
    detailed: 'Detailed feedback',
    send: 'Send',
    sending: 'Sending...',
    thanksInline: 'Thanks - recorded. We read every one of these.',
    errorInline: 'Could not send just now. Please use the Feedback button or /feedback.',
    inlineCommentPh: 'One line: what should we improve? (optional)',
  },
  legal: {
    privacyPolicy: 'Privacy policy',
    generatePolicy: 'Generate policy',
    controller: 'Controller',
    processor: 'Processor',
    processing: 'Processing',
    personalData: 'Personal data',
    dataSubject: 'Data subject',
    dpo: 'Data protection officer',
    checklist: 'Compliance checklist',
    policyChecks: 'Policy checks',
    encodePolicy: 'Encode your policy',
    definitionTitle: 'CostLens — definition',
    whatItIs: 'What it is',
    whatNotTitle: 'What this is NOT',
    whatNot1: 'Not a law firm, GRC platform, or ISO certification body.',
    whatNot2: 'Not a guarantee that drafted policies will satisfy every regulator or auditor.',
    whatNot3: 'Not a payment processor, cloud bill, or cost guarantee.',
    rolesHint:
      'When packs mention privacy roles, we use GDPR Art.4 labels: Controller and Processor (decision-support only).',
  },
  // Generator-style IA inspired by iubenda/Termly patterns (structure only — original copy).
  benchmark: {
    frameworksEyebrow: 'Framework mapping',
    frameworksTitle: 'Attribute first. Guard next.',
    frameworksNote:
      'Decision-support themes — not a billing certificate.',
    fw1: 'Attribution',
    fw2: 'Budgets',
    fw3: 'Alerts',
    fw4: 'Human review',
    painEyebrow: 'Why agent bills surprise',
    painTitle: 'Agents loop. Budgets vanish.',
    pain1Title: 'Opaque spend',
    pain1Body: 'You see a total, not which agent.',
    pain2Title: 'Runaway loops',
    pain2Body: 'Retries burn tokens overnight.',
    pain3Title: 'Overclaim dashboards',
    pain3Body: 'Fake precision erodes FinOps trust.',
    pain4Title: 'Late alerts',
    pain4Body: 'You find out after the invoice.',
    getEyebrow: 'What you get',
    getTitle: 'Ingest. Attribute. Guard.',
    getLead:
      'Decision-support FinOps — not a billing certificate.',
    get1Title: 'Attribution',
    get1Body: 'Agent / feature / user mapping.',
    get2Title: 'Guardrails',
    get2Body: 'Per-agent budget warnings.',
    get3Title: 'Ledger',
    get3Body: 'Running spend visibility.',
    get4Title: 'Honest demo vs live',
    get4Body: 'Demo is labelled; live needs a configured key where applicable.',
    featuresEyebrow: 'Why CostLens',
    featuresTitle: 'Everything you need for agent FinOps',
    featuresBlurb: 'Built for platform teams who need spend clarity without overclaim.',
    howTitle: 'From runs to spend clarity in 3 steps',
    how1Title: 'Ingest',
    how1Body: 'Capture agent spend signals.',
    how2Title: 'Attribute',
    how2Body: 'Map cost to agent, feature, user.',
    how3Title: 'Guard',
    how3Body: 'Alert before loops drain budget.',
    allPlansTitle: 'All paid plans include',
    allPlans1: 'Cost studio',
    allPlans2: 'Budget guardrails',
    allPlans3: 'EU AI Act theme mapping (decision-support)',
    allPlans4: 'Email support on paid plans — no hidden add-ons for core studio use',
    honestyTitle: 'Honest boundaries',
    honestyLead:
      'CostLens attributes spend. No billing or cost-guarantee certificate.',
    ctaStudio: 'Open studio',
  },
  home: {
    whyEyebrow: 'Why {{name}}',
    featuresHeading: 'Everything you need for token attribution',
    featuresCardBlurb: 'Built for ledgers and guardrails without billing guarantees.',
    howHeading: 'From runs to spend clarity in 3 steps',
    how1Title: 'Paste policy',
    how1Desc: 'Tokens + agent ids.',
    how2Title: 'Compile rules',
    how2Desc: 'Ledger rows.',
    how3Title: 'Enforce',
    how3Desc: 'FinOps owns action.',
    studioEyebrow: 'Validate',
    studioHeading: 'Try it on this page',
    studioWatchDemo: 'Watch demo',
    studioOrRun: 'or run a check below.',
    studioFormTitle: 'Agent policy check',
    demoMode: 'Demo mode (not live AI)',
    socialHeading: 'Trusted by compliance engineers',
    socialNote: 'Social proof uses templates until real, consented testimonials exist. Trusted by [X]+ compliance and agent-platform teams.',
    quickAnswers: 'Quick answers',
    howCompares: 'How it compares',
    dimension: 'Dimension',
    manual: 'Manual',
    whenNotToUse: 'When not to use:',
    peopleAlsoSearch: 'People also search',





































































































































    leadsInbox: "Leads inbox (demo CRUD)",
    filterEmail: "Filter email…",
    allPlans: "All plans",
    noLeads: "No leads yet — submit the signup form.",
    colEmail: "Email",
    colPlan: "Plan",
    colSource: "Source",
    delete: "Delete",
    deleteLeadTitle: "Delete Lead",
    deleteLeadWarn: "This action cannot be undone.",
    deleteLeadBody: "Are you sure you want to delete this lead? Their email will be permanently removed from your contacts.",
    cancel: "Cancel",
    relatedReading: "Related reading",
    productTour: "Product tour",
    productDemo: "PRODUCT DEMO",
    stepOf: "step {{n}}/{{total}}",
    replay: "Replay",
    tryStudio: "Try studio",
    leadsCount: "{{n}} leads",
    leadsFiltered: "{{n}} filtered",
    geoCmpDim: "Dimension",
    geoCmpManual: "Manual",
    geoCmp1Dim: "Speed",
    geoCmp1Manual: "Hours to days",
    geoCmp1Tool: "Minutes per run",
    geoCmp2Dim: "Consistency",
    geoCmp2Manual: "Varies by person",
    geoCmp2Tool: "Same ruleset every run",
    geoCmp3Dim: "Output",
    geoCmp3Manual: "Free-form",
    geoCmp3Tool: "Structured, exportable result",
    geoCmp4Dim: "Best for",
    geoCmp4Manual: "Final sign-off",
    geoCmp4Tool: "First-pass decision-support",
    related1Title: "AI wrapper vs moat",
    related1Desc: "policy enforcement as a durable moat.",
    related2Title: "EU AI Act validation error list",
    related2Desc: "map agent duties to Act themes.",
    related3Title: "Wave 1 launch",
    related3Desc: "CostLens ships with the governance cluster.",
    feat1: "Policy-to-rules",
    feat2: "Compliance checklist",
    feat3: "EU AI Act mapping",
    feat4: "Exportable rules",
    geoQa1: "Policy-to-rules",
    geoQa2: "Compliance checklist",
    geoQa3: "EU AI Act mapping",
    geoQa4: "Exportable rules",
    geoQa5: "Pricing starts at $0 (Free).",
    geoLt1: "what is CostLens",
    geoLt2: "how does CostLens work",
    geoLt3: "how much does CostLens cost",
    geoLt4: "is CostLens free",
    geoLt5: "CostLens vs doing it manually",
    geoWhenNot: "Use qualified human review instead — it is a drafting aid. Policies must be reviewed by your counsel and risk owners.",
    demo1Title: "Welcome to {{name}}",
    demo1Detail: "A 60-second tour of how {{name}} turns policy into agent checks.",
    demo2Title: "Open the live studio",
    demo2Detail: "Paste policy text and choose a domain.",
    demo3Title: "Click Generate checks",
    demo3Detail: "Powered by policy-to-rules and validation error lists.",
    demo4Title: "Policy checks preview",
    demo4Detail: "Sample output from this product's rule-based pipeline:",
    demo4DetailEmpty: "Your policy checks appear here — copy or refine.",
    demo5Title: "Your turn",
    demo5Detail: "Try the live studio, or get started with {{name}}.",
  },
  chat: {
    typing: 'Assistant is typing…',
    placeholder: 'Type your question… (Enter to send)',
    send: 'Send',
    openAria: 'Open AI assistant',
    openTitle: 'Ask our AI assistant',
    closeAria: 'Close',
    escalated: 'We\'ve connected you with a human agent. We\'ll follow up by email.',
    s1: 'What does this tool do?',
    s2: 'How much does it cost?',
    s3: 'Is there a free plan?',
  },
  pages: {
    howTitle: 'CostLens — How it works',
    howDesc: 'How CostLens works in three steps.',
    howEyebrow: 'How it works',
    howH1: 'From input to result in 3 steps',
    how1Title: 'Paste',
    how1Body: 'Paste policy text and choose domain.',
    how2Title: 'Encode',
    how2Body: 'Generate agent-callable checks and a validation error list.',
    how3Title: 'Enforce',
    how3Body: 'Wire rules into your agent runtime; keep humans for exceptions.',
    subscribe: 'Subscribe',
    ucTitle: 'CostLens — Use Cases',
    ucDesc: 'How CostLens helps compliance and agent-platform teams.',
    ucEyebrow: 'Use Cases',
    ucH1: 'Built for compliance and agent-platform teams',
    ucIntro: 'Pick your segment to see the workflows that matter most.',
    uc1Title: 'Finance policies',
    uc1Pain: 'Refunds and approvals must be machine-checkable.',
    uc1Help: 'Extract conditions + actions agents can evaluate.',
    uc2Title: 'HR / safety policies',
    uc2Pain: 'Need checklists agents can call.',
    uc2Help: 'Domain selector focuses extraction.',
    uc3Title: 'EU AI features',
    uc3Pain: 'Map high-risk rules to AI Act themes.',
    uc3Help: 'Decision-support mapping only.',
    uc4Title: 'Platform teams',
    uc4Pain: 'Policy PDFs never reach runtime.',
    uc4Help: 'Exportable rules for agent tools.',
    painLabel: 'Pain:',
    helpLabel: 'How CostLens helps:',
    ucRefs: 'refs: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    intTitle: 'CostLens — Integrations',
    intDesc: 'CostLens export targets, API, and BYOK options.',
    intEyebrow: 'Integrations',
    intH1: 'Plug into your stack',
    intIntro: 'Only honest integrations are listed. We do not advertise connectors that are not yet shipped.',
    int1Title: 'Exportable rules',
    int1Body: 'JSON/checklist export for agent tools.',
    int2Title: 'API',
    int2Body: 'Regenerate when policies change.',
    int3Title: 'EU AI Act mapping',
    int3Body: 'Pointers for high-risk themes.',
    int4Title: 'BYOK',
    int4Body: 'Server-side keys when offered.',
    intHonesty: 'Honesty note: Runtime enforcement is your system’s job; we generate candidate checks.',
    secTitle: 'CostLens — Security & Compliance',
    secDesc: 'How CostLens handles your data and its honest compliance posture.',
    secEyebrow: 'Security & Compliance',
    secH1: 'Your data, our posture',
    secIntro: 'CostLens processes the inputs you submit for analysis. This page states, plainly, what we handle and what we do not claim.',
    secHandleH2: 'What we handle',
    secHandleBody: 'company policy text and domain selections used to generate agent-enforceable checks.',
    secDataH2: 'Data handling commitments',
    secData1: 'Submissions run the product pipeline and are retained only as long as needed for your audit log (paid tiers) or until you delete the run.',
    secData2: 'We apply access controls consistent with GDPR Art. 32 (security of processing) where personal data is processed.',
    secData3: 'BYOK keys (Enterprise), when offered, are stored server-side only and never exposed to the browser.',
    secHonesty: 'Honesty rule: CostLens turns policy text into candidate rules. We do not guarantee correct enforcement, 100% policy coverage, or that agents will never miss a violation. We do not claim guarantee / 100% / never miss.',
    secPostureH2: 'Our compliance posture',
    secPosture1: 'CostLens is decision-support, not a law firm, clinic, or certified auditor.',
    secPosture2: 'For binding advice, consult a qualified professional in the relevant domain.',
    secSubH2: 'Subprocessors & payments',
    secSub1: 'Payments are processed by Waffo Pancake (merchant of record).',
    secSub2: 'See Privacy and Terms for full terms.',
    secRefs: 'refs: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    backHome: 'Back to home',
  },
  blog: {
    metaTitle: 'CostLens — Blog',
    metaDesc: 'Definitional posts on agent token cost attribution.',
    glanceTitle: 'What does this product include at a glance?',
    glance1: 'Plain-language definition, FAQ, and references for answer engines',
    glance2: '3 reviewable workflow steps (input → generate → review)',
    glance3: 'Decision-support output — you stay in the loop; no fabricated user counts',
    eyebrow: 'Blog · GEO',
    h1: 'See where AI agents spend money',
    lead: 'Per-agent ledger, budget guardrails, and alerts — before a loop drains spend.',
    targetQuery: 'Target query:',
    guidesTitle: 'Which GEO deep-dives should you read first?',
    guidesLead: 'Long-form explainers on token attribution and FinOps guardrails.',
    footerNote: 'Publish + syndicate per gtm-launch (IH + GEO indexes). Each post carries 3 authoritative refs.',
    post1Title: 'AI agent token cost attribution (2026)',
    post1Desc: 'How to attribute inference cost to the agent and feature that spent it.',
    post2Title: 'FinOps budget guardrails for LLM agents (2026)',
    post2Desc: 'Budget guardrails that catch runaway agent loops early.',
    readI18n: 'Read multilingual version',
    readEnHtml: 'Read full English article',
    pillarSlug: 'ai-agent-token-cost-attribution-2026',
    pillarEyebrow: 'by CostLens (LX AI)',
    pillarH1: 'How CostLens works',
    pillarLead: 'Ingest spend signals. Attribute. Alert.',
    pillarH2a: 'What gets attributed',
    pillarPa1: 'Token spend by agent — decision-support only.',
    pillarH2b: 'Weak types and format gaps',
    pillarPb1: 'Using type string for everything hides integer/date/email issues. Prefer explicit types and formats; keep messages actionable with instancePath.',
    pillarH2c: 'additionalProperties surprises',
    pillarPc1: 'additionalProperties false only constrains undeclared keys in the same schema object — not nested oneOf branches. Document this for API consumers.',
    pillarH2d: 'Deterministic validation first',
    pillarPd1: 'Core checks should not depend on an LLM. Optional AI may explain errors; it must not invent validity.',
    pillarDisclaimer: 'Decision-support only — not a billing or cost guarantee.',
    pillarFaq1Q: 'Does CostLens replace your bill?',
    pillarFaq1A: 'No. Decision-support attribution — not a billing guarantee.',
    pillarFaq2Q: 'How does NIST AI RMF relate?',
    pillarFaq2A: 'RMF functions give a vocabulary for governance and measurement; policy packs operationalize checks agents can call inside those functions.',
    pillar2Slug: 'allowed-tools-vs-open-ended-agents-2026',
    pillar2Eyebrow: 'Guardrail design',
    pillar2H1: 'Allowed tools vs open-ended agents',
    pillar2Lead: 'Why allow-listed tools fail closed more safely than open-ended agents — and how policy packs encode those boundaries for runtime checks.',
    pillar2H2a: 'Open-ended agents amplify blast radius',
    pillar2Pa1: 'Unconstrained tool choice plus long memory means one prompt injection can chain email, code, and data exfil paths.',
    pillar2H2b: 'Allow-lists as default deny',
    pillar2Pb1: 'Enumerate permitted tools, arguments, and destinations. Anything else fails closed — matching NIST AI RMF Govern/Map habits.',
    pillar2H2c: 'Encoding policy as checks',
    pillar2Pc1: 'Turn prose policy into agent-callable checks: tool scope, data classes, escalation owners, and audit fields.',
    pillar2H2d: 'When open-ended still fits',
    pillar2Pd1: 'Research sandboxes with no production credentials may use broader tools — isolate them from customer data paths.',
    pillar2Disclaimer: 'Decision-support drafts. Not legal advice or certification.',
    pillar2Faq1Q: 'Is an allow-list enough?',
    pillar2Faq1A: 'No. Pair with argument validation, human approval for irreversible actions, and logging.',
    pillar2Faq2Q: 'How does this relate to NIST AI RMF?',
    pillar2Faq2A: 'Allow-lists support Govern and Map: define intended use and controls before Measure/Manage in production.',
    pillar2Back: 'Back to blog',
    pillarBack: 'Back to blog',
    card1Title: 'What is agent cost attribution?',
    card1Body: 'Map tokens to the agent, feature, and user that spent them — not a billing prophecy.',
    card2Title: 'Budget guardrails',
    card2Body: 'Early warnings when an agent loop burns budget.',
  },
} as const

export default en as unknown as Messages
