// locales/nl.ts — CostLens full main-path catalog (batch2)
// Batch2 full main-path translations 2026-09-29. Shape mirrors en.ts.

import type { Messages } from '../types'

const nl = {
  meta: {
    title: 'CostLens · Zie waar AI-agents geld uitgeven',
    description: 'Ken LLM en agentkost toe aan de agent, functie en gebruiker die het heeft geactiveerd — met budgetbeveiliging.',
  },
  common: {
    appName: 'CostLens',
    tagline: 'Zie precies waar uw AI-agents geld uitgeven',
    microSaas: 'Micro SaaS',
    menu: 'Menu',
  },
  nav: {
    backToHub: 'Terug naar hub',
    home: 'Home',
    features: 'Functies',
    useCases: 'Use cases',
    integrations: 'Integraties',
    howItWorks: 'Zo werkt het',
    studio: 'Studio',
    security: 'Beveiliging',
    pricing: 'Prijzen',
    blog: 'Blog',
    faq: 'FAQ',
    feedback: 'Feedback',
    support: 'Support',
    signIn: 'Inloggen',
    subscribe: 'Abonneren',
    getStarted: 'Aan de slag',
  },
  hero: {
    badge: 'Micro SaaS',
    title: 'Zet bedrijfsbeleid om in agent-afgedwongen regels',
    subtitle: 'Sluit aan bij bouwers die CostLens gebruiken. Gratis om uit te proberen — geen kaart nodig.',
    keyTakeaways: 'Belangrijkste punten',
    takeaway1: 'Tokenkosttoewijzing per agent, functie en gebruiker.',
    takeaway2: 'Per-agent budgetbeveiliging met vroege waarschuwingen.',
    takeaway3: 'Eerlijkheid: FinOps beslissingsondersteuning — geen factuur- of kostengarantiecertificaat.',
    ctaPrimary: 'Abonneren',
    ctaSecondary: 'Demo bekijken',
    note: 'Geen creditcard vereist · Altijd opzegbaar',
    playDemo: 'Demo afspelen ▶',
    walkthrough: 'Klik om de rondleiding te bekijken',
  },
  stats: {
    builders: 'Builders',
    avgRating: 'Gem. beoordeling',
    uptime: 'Uptime',
    timeToValue: 'Tijd tot waarde',
  },
  pricing: {
    heading: 'Eenvoudige plannen die meegroeien',
    monthly: 'Maandelijks',
    yearly: 'Jaarlijks',
    perMonth: '/mnd',
    mostPopular: 'Meest populair',
    getPro: 'Pro nemen',
    orYearly: 'Of jaarlijks betalen — ${{amount}}/mnd',
    custom: 'Op maat',
    contactSales: 'Sales contacteren',
    configureByok: 'BYOK configureren',
    getStarted: 'Aan de slag',
    freeForever: 'voor altijd gratis',
    billedMonthly: 'maandelijks gefactureerd',
    save: 'bespaar',
    freeFeat1: 'Beperkte dagelijkse AI-runs (10/dag · 50/mnd)',
    freeFeat2: 'Studio-demo (geen extra LLM-kosten)',
    proFeat1: 'AI inbegrepen: 300 gens/mnd · fair use (gpt-4o-mini)',
    proFeat2: 'Geen apart ChatGPT-abonnement nodig',
    proFeat3: 'Priority support · 2 maanden gratis bij jaarbetaling',
    entFeat1: 'Teamstoelen · API-toegang (roadmap)',
    entFeat2: 'Optionele BYOK (jouw OpenAI-sleutel)',
  },
  faq: {
    title: 'Jouw vragen, beantwoord',
    geoTitle: 'CostLens — veelgestelde vragen',
    items: [
      {
        q: 'Wat volgt CostLens?',
        a: 'LLM- en agentinferentiekosten toegeschreven aan agents, functies en gebruikers — met budgetbeveiliging. Ondersteuning voor besluitvorming, geen factuurcertificaat.',
      },
      {
        q: 'Is dit juridisch advies of een certificering?',
        a: 'Nee. Output is besluitvormingsondersteuning. Laat counsel en risicofunctionarissen reviewen vóór productie. We claimen geen ISO-, CMP- of toezichtcertificering.',
      },
      {
        q: 'Kan ik altijd opzeggen?',
        a: 'Ja. Self-serve-plannen zeg je altijd op; toegang blijft tot het einde van de periode.',
      },
      {
        q: 'Heb ik een creditcard nodig om te starten?',
        a: 'Nee. Start met e-mailregistratie of Demo-modus in de studio, upgrade wanneer je klaar bent.',
      },
      {
        q: 'Heb ik een eigen ChatGPT-/OpenAI-abonnement nodig?',
        a: 'Nee voor Free/Pro. AI-runs zitten in je plan (fair use) via onze platformsleutel. Enterprise kan optioneel een eigen OpenAI-sleutel (BYOK) meenemen — configureer via /settings (sleutel blijft alleen server-side).',
      },
      {
        q: 'Wat is Fair Use / wat als ik de AI-limiet raak?',
        a: 'Pro bevat ongeveer 300 AI-generaties/maand (plus een dagelijks plafond) op gpt-4o-mini. Bij fair-use-limiet geeft Studio een mock/demo-resultaat tot de dagelijkse of maandelijkse reset — of upgrade / gebruik Enterprise BYOK voor hoger volume.',
      },
      {
        q: 'Is checkout veilig?',
        a: 'Betalingen worden verwerkt door Waffo Pancake (merchant of record).',
      },
      {
        q: 'Wat gebeurt er na betaling?',
        a: 'Je ontvangt toegangsbevestiging; fulfillment wordt gevolgd via webhook + orderlogs.',
      },
    ],
  
    geoItems: [
      { q: 'Welke signalen?', a: 'Tokengebruik gekoppeld aan agent, functie en gebruiker.' },
      { q: 'Vervangt het uw factuur?', a: 'Nee. Beslissingsondersteunende toewijzing — geen garantie voor facturering.' },
      { q: 'Budgetwaarschuwingen?', a: 'Per-agent beveiligingsmaatregelen met vroegtijdige waarschuwingen voordat lussen het budget uitputten.' },
      { q: 'Demo versus live?', a: 'Demo is gelabeld; live verhaal heeft een geconfigureerde AI-sleutel nodig.' },
      { q: 'Voor wie is het?', a: 'Platform- en FinOps-teams die multi-agent stacks verzenden.' },
      { q: 'Primaire bronnen?', a: 'LLM FinOps / token-toewijzingspraktijknotities.' },
    ],
},
  footer: {
    product: 'Product',
    company: 'Bedrijf',
    resources: 'Bronnen',
    legal: 'Juridisch',
    about: 'Over ons',
    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Voorwaarden',
    refund: 'Restitutie',
    support: 'Support',
    feedback: 'Feedback',
    rights: 'Alle rechten voorbehouden.',
    partOfFleet: 'Onderdeel van de LX AI Micro-SaaS-vloot.',
  },
  signup: {
    title: 'Start vandaag slimmer',
    subtitle: 'Sluit je aan bij builders die CostLens gebruiken. Gratis te proberen — geen kaart nodig.',
    emailPlaceholder: 'Voer je e-mail in',
    saving: 'Opslaan…',
    cta: 'Aan de slag',
    trust: 'Betrouwbaar · Altijd opzegbaar',
  },
  feedback: {
    open: 'Feedback',
    title: 'Feedback sturen',
    blurb: 'Vertel wat werkte, wat kapot was, of wat je als volgende wilt.',
    fullPage: 'Liever een volledige pagina?',
    openPage: 'Open /feedback',
    close: 'Feedback sluiten',
    helpful: 'Was dit resultaat nuttig?',
    yes: 'Ja',
    no: 'Nee',
    thanks: 'Bedankt voor de feedback.',
    commentPlaceholder: 'Optionele éénregelige opmerking',
    generalTitle: 'Algemene feedback',
    generalSub: 'Vertel wat je denkt',
    generalPh: 'Wat vond je leuk, niet leuk, of wat viel je op tijdens gebruik?',
    ideaTitle: 'Ik heb een idee',
    ideaSub: 'Stel een functie of verbetering voor',
    ideaPh: 'Beschrijf je idee en het probleem dat het oplost…',
    issueTitle: 'Ik vond een probleem',
    issueSub: 'Meld een bug of probleem',
    issuePh: 'Wat gebeurde er, wat verwachtte je, en hoe reproduceren we het?',
    submit: 'Feedback versturen',
    submitting: 'Verzenden…',
    done: 'Bedankt — feedback ontvangen.',
    emailOptional: 'E-mail (optioneel)',
    category: 'Categorie',
    yourFeedback: 'Jouw feedback',
    attachment: 'Bijlage (optioneel)',

    back: '← Terug naar feedbacktype',
    pickTitle: 'Welke feedback heb je?',
    pickSub: 'Kies er één om te starten. Je kunt details en een precieze categorie in de volgende stap toevoegen.',
    thanksTitle: 'Bedankt voor je feedback!',
    thanksBody: 'We hebben het ontvangen en ons team volgt binnenkort op. Je mag altijd opnieuw indienen.',
    submitAnother: 'Nog een indienen',
    detailed: 'Gedetailleerde feedback',
    send: 'Versturen',
    sending: 'Verzenden...',
    thanksInline: 'Bedankt - vastgelegd. We lezen elke inzending.',
    errorInline: 'Kon nu niet verzenden. Gebruik de Feedback-knop of /feedback.',
    inlineCommentPh: 'Eén regel: wat moeten we verbeteren? (optioneel)',
  },
  legal: {
    privacyPolicy: 'Privacybeleid',
    generatePolicy: 'Beleid genereren',
    controller: 'Verwerkingsverantwoordelijke',
    processor: 'Verwerker',
    processing: 'Verwerking',
    personalData: 'Persoonsgegevens',
    dataSubject: 'Betrokkene',
    dpo: 'Functionaris voor gegevensbescherming',
    checklist: 'Compliance-checklist',
    policyChecks: 'Policy-checks',
    encodePolicy: 'Codeer je beleid',
    definitionTitle: 'CostLens — definitie',
    whatItIs: 'Wat het is',
    whatNotTitle: 'Wat dit NIET is',
    whatNot1: 'Geen advocatenkantoor, GRC-platform of ISO-certificeringsinstantie.',
    whatNot2: 'Geen garantie dat opgestelde policies elke toezichthouder of auditor tevredenstellen.',
    whatNot3: 'Geen juridisch advies — laat hoog-risico agent-policy packs door counsel reviewen.',
    rolesHint: 'Wanneer packs privacyrollen noemen, gebruiken we GDPR Art.4-labels: Verwerkingsverantwoordelijke en Verwerker (alleen besluitvormingsondersteuning).',
  },
  benchmark: {
    frameworksEyebrow: 'Framework-mapping',
    frameworksTitle: 'Complexe wetten. Eenvoudige policy packs.',
    frameworksNote: 'Besluitvormingsondersteuningsthema’s — geen certificering, CMP-badge of juridisch advies.',
    fw1: 'EU AI Act',
    fw2: 'NIST AI RMF',
    fw3: 'OWASP LLM Top 10',
    fw4: 'GDPR Art.4-rollen',
    painEyebrow: 'Waarom agentrekeningen verrassen',
    painTitle: 'Agents lus. Budgets verdwijnen.',
    pain1Title: 'Nieuwe regels, nieuw risico',
    pain1Body: 'Elke regelgevingsupdate kan agent-tools, dataklassen en escalatiepaden uit sync laten lopen.',
    pain2Title: 'Docs vs runtime',
    pain2Body: 'Wanneer de PDF los van de agent-runtime bestaat, tonen blinde vlekken zich in productie.',
    pain3Title: 'Handmatige herschrijvingen',
    pain3Body: 'Checklists handmatig bewerken per domein vreet stil engineering- en compliancetijd.',
    pain4Title: 'Issues na ship',
    pain4Body: 'Gaps komen vaak pas na een audit, incident of klantenvragenlijst naar boven.',
    getEyebrow: 'Wat je krijgt',
    getTitle: 'Ingest. Kenmerk. Bewaak.',
    getLead: 'Decision-support FinOps — geen factureringscertificaat.',
    get1Title: 'Policy-checks',
    get1Body: 'Voorwaarde + actieregels die een agent-runtime kan evalueren.',
    get2Title: 'Compliance-checklist',
    get2Body: 'Menselijk leesbare plichten zodat owners gaps zien vóór go-live.',
    get3Title: 'EU AI Act-mapping',
    get3Body: 'Themapunten voor hoog-risico verplichtingen — geen conformiteitscertificering.',
    get4Title: 'Exporteerbare regels',
    get4Body: 'Gestructureerde output die je aan guardrails of middleware koppelt.',
    featuresEyebrow: 'Waarom CostLens',
    featuresTitle: 'Alles wat je nodig hebt voor agent FinOps',
    featuresBlurb: 'Gebouwd voor platformteams die duidelijkheid over uitgaven nodig hebben zonder overclaim.',
    howTitle: 'CostLens — Hoe het werkt',
    how1Title: 'Plakken',
    how1Body: 'Plak beleidstekst en kies domein.',
    how2Title: 'Codeer',
    how2Body: 'Genereer agent-aanroepbare controles en een validatiefoutenlijst.',
    how3Title: 'Handhaaf',
    how3Body: 'Verbind regels met uw agent-runtime; houd mensen voor uitzonderingen.',
    allPlansTitle: 'Alle betaalde plannen bevatten',
    allPlans1: 'Policy-naar-regels studio',
    allPlans2: 'Export van compliance-checklist',
    allPlans3: 'EU AI Act-themamapping (besluitvormingsondersteuning)',
    allPlans4: 'E-mailsupport op betaalde plannen — geen verborgen add-ons voor kernstudio-gebruik',
    honestyTitle: 'Eerlijke grenzen',
    honestyLead: 'CostLens attribueert uitgaven. Geen facturerings- of kosten-garantiecertificaat.',
    ctaStudio: 'Studio openen',
  },
  home: {
    whyEyebrow: 'Waarom {{name}}',
    featuresHeading: 'Alles wat je nodig hebt voor token-attributie',
    featuresCardBlurb: 'Gebouwd voor ledger en guardrails zonder factureringsgaranties.',
    howHeading: 'Van runs naar uitgaventransparantie in3stappen',
    how1Title: 'Beleid plakken',
    how1Desc: 'Tokens + agent ids van Waffo en LLM met BYOK en agentcost.',
    how2Title: 'Regels compileren',
    how2Desc: 'Ledger-rijen voor CostLens en FinOps',
    how3Title: 'Afdwingen',
    how3Desc: 'FinOps heeft actie in handen.',
    studioEyebrow: 'Live-studio',
    studioHeading: 'Probeer het op deze pagina',
    studioWatchDemo: 'Demo bekijken',
    studioOrRun: 'of voer hieronder een check uit.',
    studioFormTitle: 'Agentbeleidcontrole',
    demoMode: 'Demo-modus (geen live AI)',
    socialHeading: 'Vertrouwd door compliance-ingenieurs',
    socialNote: 'Sociale bewijs gebruikt sjablonen totdat echte, geconsenteerde testimonials bestaan. Vertrouwd door [X]+ compliance- en agent-platformteams.',
    quickAnswers: 'Snelle antwoorden',
    howCompares: 'Vergelijking',
    dimension: 'Dimensie',
    manual: 'Handmatig',
    whenNotToUse: 'Wanneer niet gebruiken:',
    peopleAlsoSearch: 'Mensen zoeken ook',





































































































































    leadsInbox: "Leads-inbox (demo-CRUD)",
    filterEmail: "Filter e-mail…",
    allPlans: "Alle plannen",
    noLeads: "Nog geen leads — dien het aanmeldformulier in.",
    colEmail: "E-mail",
    colPlan: "Plan",
    colSource: "Bron",
    delete: "Verwijderen",
    deleteLeadTitle: "Lead verwijderen",
    deleteLeadWarn: "Deze actie kan niet ongedaan worden gemaakt.",
    deleteLeadBody: "Deze lead verwijderen? Het e-mailadres wordt permanent uit je contacten gehaald.",
    cancel: "Annuleren",
    relatedReading: "Gerelateerde lectuur",
    productTour: "Productrondleiding",
    productDemo: "PRODUCTDEMO",
    stepOf: "stap {{n}}/{{total}}",
    replay: "Opnieuw",
    tryStudio: "Studio proberen",
    leadsCount: "{{n}} leads",
    leadsFiltered: "{{n}} gefilterd",
    geoCmpDim: "Dimensie",
    geoCmpManual: "Handmatig",
    geoCmp1Dim: "Snelheid",
    geoCmp1Manual: "Uren tot dagen",
    geoCmp1Tool: "Minuten per run",
    geoCmp2Dim: "Consistentie",
    geoCmp2Manual: "Verschilt per persoon",
    geoCmp2Tool: "Zelfde regels elke run",
    geoCmp3Dim: "Output",
    geoCmp3Manual: "Vrije vorm",
    geoCmp3Tool: "Gestructureerd, exporteerbaar resultaat",
    geoCmp4Dim: "Het best voor",
    geoCmp4Manual: "Eindgoedkeuring",
    geoCmp4Tool: "Eerste beslissingsondersteuning",
    related1Title: "AI-wrapper vs gracht",
    related1Desc: "beleidsafdwinging als een duurzame gracht.",
    related2Title: "EU AI Act nalevingschecklist",
    related2Desc: "agent taken toewijzen aan onderwerpen van de EU AI Act.",
    related3Title: "Wave 1 lancering",
    related3Desc: "CostLens wordt geleverd met het governance-cluster.",
    feat1: "Beleid-naar-regels",
    feat2: "Nalevingschecklist",
    feat3: "EU AI Act-mapping",
    feat4: "Exporteerbare regels",
    geoQa1: "Beleid-naar-regels",
    geoQa2: "Nalevingschecklist",
    geoQa3: "EU AI Act-mapping",
    geoQa4: "Exporteerbare regels",
    geoQa5: "Prijzen beginnen bij $0 (Free).",
    geoLt1: "wat is CostLens",
    geoLt2: "hoe werkt CostLens",
    geoLt3: "hoeveel kost CostLens",
    geoLt4: "is CostLens gratis",
    geoLt5: "CostLens vs handmatig doen",
    geoWhenNot: "Gebruik in plaats daarvan gekwalificeerde menselijke review — het is een hulp bij het opstellen. Beleidsregels moeten worden beoordeeld door uw juridisch adviseur en risico-eigenaren.",
    demo1Title: "Welkom bij {{name}}",
    demo1Detail: "Een rondleiding van 60 seconden over hoe {{name}} beleid omzet in agentcontroles.",
    demo2Title: "Open de live studio",
    demo2Detail: "Plak beleidstekst en kies een domein.",
    demo3Title: "Klik op Generate checks",
    demo3Detail: "Aangedreven door beleid-naar-regels en nalevingschecklists.",
    demo4Title: "Voorbeeld van beleidscontroles",
    demo4Detail: "Voorbeeldoutput uit de regelgebaseerde pijplijn van dit product:",
    demo4DetailEmpty: "Uw beleidscontroles verschijnen hier — kopieer of verfijn.",
    demo5Title: "Jouw beurt",
    demo5Detail: "Probeer de live studio, of ga aan de slag met {{name}}.",
  },
  chat: {
    typing: 'Assistent typt…',
    placeholder: 'Typ je vraag… (Enter om te versturen)',
    send: 'Verzenden',
    openAria: 'AI-assistent openen',
    openTitle: 'Vraag onze AI-assistent',
    closeAria: 'Sluiten',
    escalated: 'We hebben je met een menselijke agent verbonden. We volgen op per e-mail.',
    s1: 'Wat doet deze tool?',
    s2: 'Wat kost het?',
    s3: 'Is er een gratis plan?',
  },
  pages: {
    howTitle: 'CostLens — Hoe het werkt',
    howDesc: 'Hoe CostLens in drie stappen werkt.',
    howEyebrow: 'Hoe het werkt',
    howH1: 'Van input naar resultaat in 3 stappen',
    how1Title: 'Plakken',
    how1Body: 'Plak policytekst en kies het domein.',
    how2Title: 'Coderen',
    how2Body: 'Genereer agent-aanroepbare checks en een compliance-checklist.',
    how3Title: 'Handhaven',
    how3Body: 'Koppel regels aan de agent-runtime; houd mensen voor uitzonderingen.',
    subscribe: 'Abonneren',
    ucTitle: 'CostLens — Gebruiksscenario’s',
    ucDesc: 'Hoe CostLens compliance- en agentplatformteams helpt.',
    ucEyebrow: 'Gebruiksscenario’s',
    ucH1: 'Gebouwd voor compliance- en agentplatformteams',
    ucIntro: 'Kies je segment om de workflows te zien die het meest tellen.',
    uc1Title: 'Finance-policy’s',
    uc1Pain: 'Refunds en goedkeuringen moeten machine-checkbaar zijn.',
    uc1Help: 'Haal voorwaarden + acties eruit die agents kunnen evalueren.',
    uc2Title: 'HR-/veiligheidspolicy’s',
    uc2Pain: 'Hebben checklists nodig die agents kunnen aanroepen.',
    uc2Help: 'Domeinkiezer focust de extractie.',
    uc3Title: 'EU AI-features',
    uc3Pain: 'Map high-risk regels naar AI Act-thema’s.',
    uc3Help: 'Alleen besluitondersteunende mapping.',
    uc4Title: 'Platformteams',
    uc4Pain: 'Policy-PDF’s bereiken nooit de runtime.',
    uc4Help: 'Exporteerbare regels voor agenttools.',
    painLabel: 'Pijnpunt:',
    helpLabel: 'Hoe CostLens helpt:',
    ucRefs: 'Bronnen: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    intTitle: 'CostLens — Integraties',
    intDesc: 'Exporttargets, API en BYOK-opties van CostLens.',
    intEyebrow: 'Integraties',
    intH1: 'Koppel aan je stack',
    intIntro: 'Alleen eerlijke integraties. We adverteren geen connectoren die nog niet geleverd zijn.',
    int1Title: 'Exporteerbare regels',
    int1Body: 'JSON/checklist-export voor agenttools.',
    int2Title: 'API',
    int2Body: 'Opnieuw genereren wanneer policy’s wijzigen.',
    int3Title: 'EU AI Act-mapping',
    int3Body: 'Pointers voor high-risk thema’s.',
    int4Title: 'BYOK',
    int4Body: 'Serverside sleutels wanneer aangeboden.',
    intHonesty: 'Eerlijkheidsnotitie: runtime-handhaving is jouw systeemtaak; wij genereren kandidaat-checks.',
    secTitle: 'CostLens — Beveiliging & compliance',
    secDesc: 'Hoe CostLens je data verwerkt en zijn eerlijke compliance-houding.',
    secEyebrow: 'Beveiliging & compliance',
    secH1: 'Jouw data, onze houding',
    secIntro: 'CostLens verwerkt de inputs die je indient voor analyse. Deze pagina zegt duidelijk wat we verwerken en wat we niet claimen.',
    secHandleH2: 'Wat we verwerken',
    secHandleBody: 'bedrijfspolicytekst en domeinkeuzes gebruikt om agent-afdwingbare checks te genereren.',
    secDataH2: 'Toezeggingen over gegevensverwerking',
    secData1: 'Inzendingen lopen door de productpipeline en worden alleen bewaard zolang je auditlog nodig heeft (betaalde tiers) of tot je de run verwijdert.',
    secData2: 'We passen toegangscontroles toe in lijn met AVG Art. 32 waar persoonsgegevens worden verwerkt.',
    secData3: 'BYOK-sleutels (Enterprise), wanneer aangeboden, worden alleen serverside opgeslagen en nooit in de browser blootgesteld.',
    secHonesty: 'Eerlijkheidsregel: CostLens maakt van policytekst kandidaatregels. We garanderen geen correcte handhaving, 100% dekking of dat agents nooit een schending missen.',
    secPostureH2: 'Onze compliance-houding',
    secPosture1: 'CostLens is besluitondersteuning, geen advocatenkantoor, kliniek of gecertificeerde auditor.',
    secPosture2: 'Voor bindend advies: raadpleeg een gekwalificeerde professional in het relevante domein.',
    secSubH2: 'Subverwerkers & betalingen',
    secSub1: 'Betalingen worden verwerkt door Waffo Pancake (merchant of record).',
    secSub2: 'Zie Privacy en Terms voor de volledige voorwaarden.',
    secRefs: 'Bronnen: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    backHome: 'Terug naar home',
  },
  blog: {
    metaTitle: 'CostLens — Blog',
    metaDesc: 'Definitieve artikelen over toekenning van agenttokenkosten.',
    glanceTitle: 'Wat bevat dit product in één oogopslag?',
    glance1: 'Duidelijke definitie, FAQ en referenties voor answer engines',
    glance2: '3 reviewbare workflowstappen (input → genereren → review)',
    glance3: 'Besluitondersteunende output — jij blijft in de loop; geen verzonnen gebruikersaantallen',
    eyebrow: 'Blog · GEO',
    h1: 'Zie waar AI-agents geld uitgeven',
    lead: 'Per-agentboekhouding, budgetbeperkingen en waarschuwingen — voordat een loop uitgaven verbruikt.',
    targetQuery: 'Doelquery:',
    guidesTitle: 'Welke GEO deep-dives eerst lezen?',
    guidesLead: 'Lange, uitgebreide verklarende teksten over token-toewijzing en FinOps-beperkingen.',
    footerNote: 'Publish + syndicate volgens gtm-launch (IH + GEO-indexen). Elke post draagt 3 gezaghebbende refs.',
    post1Title: 'AI-agent tokenkosttoewijzing (2026)',
    post1Desc: 'Hoe attribueer je inferentiekosten aan de agent en functie die het heeft uitgegeven.',
    post2Title: 'FinOps budget guardrails voor LLM-agents (2026)',
    post2Desc: 'Budget guardrails die vroegtijdig vastlopen van agenten detecteren.',
    readI18n: 'Meertalige versie lezen',
    readEnHtml: 'Volledig Engels artikel lezen',
    pillarSlug: 'ai-agent-token-cost-attribution-2026',
    pillarEyebrow: 'door CostLens (LX AI) met FinOps, LLM, Waffo, BYOK en agentcost',
    pillarH1: 'Hoe CostLens werkt',
    pillarLead: 'Ingesteer uitgavesignalen. Toewijzen. Waarschuwen.',
    pillarH2a: 'Wat een policypack bevat',
    pillarPa1: 'Een pack is een set voorwaarde+actie-regels uit policytekst plus een checklist die high-risk regels koppelt aan toezicht- en loggingverwachtingen. Agents evalueren at runtime; mensen behandelen uitzonderingen.',
    pillarH2b: 'NIST AI RMF-afstemming',
    pillarPb1: 'Govern: ownership van welke policy’s agents binden. Map: inventaris van tools en data. Measure: log policybeslissingen. Manage: escaleer wanneer een regel blokkeert of human approval nodig is.',
    pillarH2c: 'EU AI Act-aangrijpingspunten',
    pillarPc1: 'Voor Bijlage III high-risk gebruiken kunnen deployer-plichten zoals Art. 9 en Art. 14 worden onderbouwd met policychecks — ze vervangen geen conformiteitsbeoordeling.',
    pillarH2d: 'Eerlijkheidsgrens',
    pillarPd1: 'CostLens stelt kandidaatregels op. Bedrading, handhavingskwaliteit en juridische conformiteit blijven jouw verantwoordelijkheid. Geen claim op garantie / 100% / never-miss.',
    pillarDisclaimer: 'Alleen besluitondersteuning — geen juridisch advies en geen conformiteitscertificaat.',
    pillarFaq1Q: 'Certificeert een policypack EU AI Act-conformiteit?',
    pillarFaq1A: 'Nee. Het helpt controles te onderbouwen; conformiteit blijft de verantwoordelijkheid van de deploying organisatie over het hele systeem.',
    pillarFaq2Q: 'Hoe hangt NIST AI RMF samen?',
    pillarFaq2A: 'RMF-functies geven vocabulaire voor governance en meting; packs operationaliseren checks die agents binnen die functies kunnen aanroepen.',
    pillar2Slug: 'allowed-tools-vs-open-ended-agents-2026',
    pillar2Eyebrow: 'Guardrail-ontwerp',
    pillar2H1: 'Toegestane tools vs open agents',
    pillar2Lead: 'Waarom allow-lists veiliger fail-closed zijn dan open agents — en hoe policy packs die grenzen als runtime-checks coderen.',
    pillar2H2a: 'Open agents vergroten de blast radius',
    pillar2Pa1: 'Onbegrensde toolkeuze plus lang geheugen: één prompt injection kan e-mail, code en data-exfiltratie ketenen.',
    pillar2H2b: 'Allow-lists als default-deny',
    pillar2Pb1: 'Som toegestane tools, argumenten en bestemmingen op. Al het andere fail-closed — in lijn met NIST AI RMF Govern/Map.',
    pillar2H2c: 'Beleid als checks coderen',
    pillar2Pc1: 'Zet proza om in aanroepbare checks: toolscope, dataklassen, escalatie-owners en auditvelden.',
    pillar2H2d: 'Wanneer openheid nog past',
    pillar2Pd1: 'Research-sandboxes zonder productiecredentials mogen bredere tools gebruiken — geïsoleerd van klantdatapaden.',
    pillar2Disclaimer: 'Besluitsteun-concepten. Geen juridisch advies of certificering.',
    pillar2Faq1Q: 'Is een allow-list genoeg?',
    pillar2Faq1A: 'Nee. Combineer met argumentvalidatie, menselijke goedkeuring voor onomkeerbare acties en logging.',
    pillar2Faq2Q: 'Relatie met NIST AI RMF?',
    pillar2Faq2A: 'Allow-lists steunen Govern en Map: definiëer beoogd gebruik en controls vóór Measure/Manage in productie.',
    pillar2Back: 'Terug naar blog',
    pillarBack: 'Terug naar de blog',
    card1Title: 'Wat is agentkosten-toewijzing (agentcost)?',
    card1Body: 'Token toewijzen aan de agent, functie en gebruiker die ze hebben uitgegeven — geen factuurprofetie.',
    card2Title: 'Budgetwaarschuwingen',
    card2Body: 'Vroege waarschuwingen wanneer een agentlus het budget verbrandt.',
  },
} as const

export default nl as unknown as Messages
