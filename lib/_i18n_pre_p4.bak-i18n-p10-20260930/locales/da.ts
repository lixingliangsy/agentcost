// locales/da.ts — CostLens full main-path catalog (batch2)
// Batch2 full main-path translations 2026-09-29. Shape mirrors en.ts.

import type { Messages } from '../types'

const da = {
  meta: {
    title: 'CostLens · Gør virksomhedspolitikker til agent-håndhævede regler',
    description: 'CostLens læser din virksomhedspolitiktekst og genererer agent-kaldbare politiktjek plus en compliance-tjekliste, knyttet til forpligtelser under EU AI Act — så politik bliver eksekverbar, ikke bare en PDF.',
  },
  common: {
    appName: 'CostLens',
    tagline: 'Gør virksomhedspolitikker til agent-håndhævede regler',
    microSaas: 'Micro SaaS',
    menu: 'Menu',
  },
  nav: {
    backToHub: 'Tilbage til hub',
    home: 'Hjem',
    features: 'Funktioner',
    useCases: 'Brugsscenarier',
    integrations: 'Integrationer',
    howItWorks: 'Sådan virker det',
    studio: 'Studio',
    security: 'Sikkerhed',
    pricing: 'Priser',
    blog: 'Blog',
    faq: 'FAQ',
    feedback: 'Feedback',
    support: 'Support',
    signIn: 'Log ind',
    subscribe: 'Abonner',
    getStarted: 'Kom i gang',
  },
  hero: {
    badge: 'Micro SaaS',
    title: 'Gør virksomhedspolitikker til agent-håndhævede regler',
    subtitle: 'CostLens læser din virksomhedspolitiktekst og genererer agent-kaldbare politiktjek plus en compliance-tjekliste, knyttet til forpligtelser under EU AI Act — så politik bliver eksekverbar, ikke bare en PDF.',
    keyTakeaways: 'Vigtigste pointer',
    takeaway1: 'Gør virksomhedspolitikker til agent-håndhævede regler — uden kode.',
    takeaway2: 'Gelændere kobles til agent-workflows og fejler lukket ved overtrædelser.',
    takeaway3: 'Kom i gang; Pro fra 29 $/md.',
    ctaPrimary: 'Abonner',
    ctaSecondary: 'Se demo',
    note: 'Intet kreditkort krævet · Opsig når som helst',
    playDemo: 'Afspil demo ▶',
    walkthrough: 'Klik for at se gennemgangen',
  },
  stats: {
    builders: 'Buildere',
    avgRating: 'Gns. rating',
    uptime: 'Oppetid',
    timeToValue: 'Tid til værdi',
  },
  pricing: {
    heading: 'Enkle planer der skalerer',
    monthly: 'Månedlig',
    yearly: 'Årlig',
    perMonth: '/md',
    mostPopular: 'Mest populær',
    getPro: 'Få Pro',
    orYearly: 'Eller betal årligt — ${{amount}}/md',
    custom: 'Tilpasset',
    contactSales: 'Kontakt salg',
    configureByok: 'Konfigurer BYOK',
    getStarted: 'Kom i gang',
    freeForever: 'gratis for altid',
    billedMonthly: 'faktureret månedligt',
    save: 'spar',
    freeFeat1: 'Begrænsede daglige AI-kørsler (10/dag · 50/md)',
    freeFeat2: 'Studio-demo (ingen ekstra LLM-gebyr)',
    proFeat1: 'AI inkluderet: 300 gens/md · fair use (gpt-4o-mini)',
    proFeat2: 'Intet separat ChatGPT-abonnement nødvendigt',
    proFeat3: 'Priority support · 2 måneder gratis ved årlig',
    entFeat1: 'Team-pladser · API-adgang (roadmap)',
    entFeat2: 'Valgfri BYOK (din OpenAI-nøgle)',
  },
  faq: {
    title: 'Dine spørgsmål — besvaret',
    geoTitle: 'CostLens — ofte stillede spørgsmål',
    items: [
      {
        q: 'Hvad genererer CostLens?',
        a: 'Agent-kaldbare politiktjek, en compliance-tjekliste og tema-mapping til EU AI Act, som du kan eksportere — workflow ligner en politikgenerator (indsæt → generér → gennemgå), men rettet mod agent-gelændere frem for en offentlig privatlivsside.',
      },
      {
        q: 'Er dette juridisk rådgivning eller en certificering?',
        a: 'Nej. Output er beslutningsstøtte-udkast. Få counsel og risikoejere til at gennemgå før produktion. Vi hævder ikke ISO-, CMP- eller tilsynscertificering.',
      },
      {
        q: 'Kan jeg opsige når som helst?',
        a: 'Ja. Self-serve-planer kan opsiges når som helst; adgangen fortsætter til periodens slut.',
      },
      {
        q: 'Skal jeg bruge kreditkort for at starte?',
        a: 'Nej. Start med e-mail-tilmelding eller Demo-tilstand i studio, og opgrader når du er klar.',
      },
      {
        q: 'Skal jeg have mit eget ChatGPT-/OpenAI-abonnement?',
        a: 'Nej for Free/Pro. AI-kørsler er inkluderet i din plan (fair use) via vores platformsnøgle. Enterprise kan valgfrit medbringe egen OpenAI-nøgle (BYOK) — konfigurer under /settings (nøglen forbliver kun på serversiden).',
      },
      {
        q: 'Hvad er Fair Use / hvad hvis jeg rammer AI-loftet?',
        a: 'Pro inkluderer ca. 300 AI-genereringer/md (plus et dagligt loft) på gpt-4o-mini. Hvis du rammer fair-use-loftet, returnerer Studio et mock/demo-resultat indtil daglig eller månedlig reset — eller opgrader / brug Enterprise BYOK til højere volumen.',
      },
      {
        q: 'Er checkout sikkert?',
        a: 'Betalinger behandles af Waffo Pancake (merchant of record).',
      },
      {
        q: 'Hvad sker der efter jeg betaler?',
        a: 'Du modtager adgangsbekræftelse; opfyldelse spores via webhook + ordrelogs.',
      },
    ],
  
    geoItems: [
      {
        q: 'Hvad producerer CostLens?',
        a: 'Et struktureret politikudkast om værktøjer, datahåndtering og eskaleringsstier, du kan redigere.',
      },
      {
        q: 'Er det juridisk rådgivning?',
        a: 'Nej. Det er udkastshjælp. Politikker skal reviewes af counsel og risk owners.',
      },
      {
        q: 'Hvordan virker demotilstand?',
        a: 'Slå Demo til uden live AI; live-tilstand kræver en konfigureret nøgle.',
      },
      {
        q: 'Mapper det til EU AI Act?',
        a: 'Narrativer kan referere governance-temaer; det certificerer ikke Act-overensstemmelse.',
      },
      {
        q: 'Kan politikker versionsstyres?',
        a: 'Kørsler gemmer rulesetVersion og runId til ændringssporing.',
      },
      {
        q: 'Hvem bør bruge det?',
        a: 'Platform- og compliance-ingeniører der definerer agent-guardrails før produktion.',
      },
      {
        q: 'I hvilke lande/regioner?',
        a: 'Globalt tilgængelig; Waffo Pancake-betalinger kan variere regionalt.',
      },
      {
        q: 'GDPR-/privacy-compliant?',
        a: 'Input genererer kun dit output og sælges aldrig. Se Privacy; Enterprise kan inkludere DPA/NDA.',
      },
      {
        q: 'Hvilke sprog?',
        a: 'UI’en dækker ti locales. Udkast følger UI-sproget når live AI er konfigureret.',
      },
    ],
},
  footer: {
    product: 'Produkt',
    company: 'Virksomhed',
    resources: 'Ressourcer',
    legal: 'Juridisk',
    about: 'Om os',
    contact: 'Kontakt',
    privacy: 'Privatliv',
    terms: 'Vilkår',
    refund: 'Refusion',
    support: 'Support',
    feedback: 'Feedback',
    rights: 'Alle rettigheder forbeholdes.',
    partOfFleet: 'Del af LX AI Micro-SaaS-flåden.',
  },
  signup: {
    title: 'Start smartere i dag',
    subtitle: 'Tilslut dig buildere der bruger CostLens. Gratis at prøve — intet kort nødvendigt.',
    emailPlaceholder: 'Indtast din e-mail',
    saving: 'Gemmer…',
    cta: 'Kom i gang',
    trust: 'Betroet · Opsig når som helst',
  },
  feedback: {
    open: 'Feedback',
    title: 'Indsend feedback',
    blurb: 'Fortæl os hvad der virkede, hvad der brød, eller hvad du ønsker næste.',
    fullPage: 'Foretrækker du en fuld side?',
    openPage: 'Åbn /feedback',
    close: 'Luk feedback',
    helpful: 'Var dette resultat nyttigt?',
    yes: 'Ja',
    no: 'Nej',
    thanks: 'Tak for feedbacken.',
    commentPlaceholder: 'Valgfri en-linjes kommentar',
    generalTitle: 'Generel feedback',
    generalSub: 'Fortæl os hvad du synes',
    generalPh: 'Hvad kunne du lide, ikke lide, eller bemærke under brugen?',
    ideaTitle: 'Jeg har en idé',
    ideaSub: 'Foreslå en funktion eller forbedring',
    ideaPh: 'Beskriv din idé og det problem den ville løse…',
    issueTitle: 'Jeg fandt et problem',
    issueSub: 'Rapportér en fejl eller et problem',
    issuePh: 'Hvad skete der, hvad forventede du, og hvordan kan vi genskabe det?',
    submit: 'Send feedback',
    submitting: 'Sender…',
    done: 'Tak — feedback modtaget.',
    emailOptional: 'E-mail (valgfri)',
    category: 'Kategori',
    yourFeedback: 'Din feedback',
    attachment: 'Vedhæftning (valgfri)',

    back: '← Tilbage til feedbacktype',
    pickTitle: 'Hvilken feedback har du?',
    pickSub: 'Vælg én for at starte. Du kan tilføje detaljer og en præcis kategori i næste trin.',
    thanksTitle: 'Tak for din feedback!',
    thanksBody: 'Vi har modtaget den, og vores team følger snart op. Du er velkommen til at sende igen når som helst.',
    submitAnother: 'Send en mere',
    detailed: 'Detaljeret feedback',
    send: 'Send',
    sending: 'Sender...',
    thanksInline: 'Tak - registreret. Vi læser hver eneste.',
    errorInline: 'Kunne ikke sende lige nu. Brug Feedback-knappen eller /feedback.',
    inlineCommentPh: 'Én linje: hvad bør vi forbedre? (valgfri)',
  },
  legal: {
    privacyPolicy: 'Privatlivspolitik',
    generatePolicy: 'Generér politik',
    controller: 'Dataansvarlig',
    processor: 'Databehandler',
    processing: 'Behandling',
    personalData: 'Personoplysninger',
    dataSubject: 'Registreret',
    dpo: 'Databeskyttelsesrådgiver',
    checklist: 'Compliance-tjekliste',
    policyChecks: 'Politiktjek',
    encodePolicy: 'Kod din politik',
    definitionTitle: 'CostLens — definition',
    whatItIs: 'Hvad det er',
    whatNotTitle: 'Hvad dette IKKE er',
    whatNot1: 'Ikke et advokatfirma, GRC-platform eller ISO-certificeringsorgan.',
    whatNot2: 'Ikke en garanti for, at udkastede politikker tilfredsstiller enhver tilsynsmyndighed eller revisor.',
    whatNot3: 'Ikke juridisk rådgivning — få counsel til at gennemgå højrisiko agent-politikpakker.',
    rolesHint: 'Når pakker nævner privatlivsroller, bruger vi GDPR Art.4-betegnelser: Dataansvarlig og Databehandler (kun beslutningsstøtte).',
  },
  benchmark: {
    frameworksEyebrow: 'Framework-mapping',
    frameworksTitle: 'Komplekse love. Enkle politikpakker.',
    frameworksNote: 'Beslutningsstøtte-temaer — ikke en certificering, CMP-badge eller juridisk vurdering.',
    fw1: 'EU AI Act',
    fw2: 'NIST AI RMF',
    fw3: 'OWASP LLM Top 10',
    fw4: 'GDPR Art.4-roller',
    painEyebrow: 'Hvorfor pakker går i stå',
    painTitle: 'Politikker ændrer sig. Agent-gab dukker sent op.',
    pain1Title: 'Nye regler, ny risiko',
    pain1Body: 'Hver regulatorisk opdatering kan efterlade agentværktøjer, dataklasser og eskaleringsstier ude af sync.',
    pain2Title: 'Docs vs runtime',
    pain2Body: 'Når PDF’en lever adskilt fra agent-runtime, viser blinde vinkler sig i produktion.',
    pain3Title: 'Manuelle omskrivninger',
    pain3Body: 'Håndredigering af tjeklister for hvert domæne dræner stille engineering- og compliancetid.',
    pain4Title: 'Problemer efter ship',
    pain4Body: 'Gab viser sig ofte først efter en revision, hændelse eller kundequestionnaire.',
    getEyebrow: 'Hvad du får',
    getTitle: 'Indsæt. Generér. Eksportér.',
    getLead: 'Generator-agtige leverancer til agent-governance — gennemgå med counsel før produktion.',
    get1Title: 'Politiktjek',
    get1Body: 'Betingelse + handlingsregler som en agent-runtime kan evaluere.',
    get2Title: 'Compliance-tjekliste',
    get2Body: 'Menneskelæsbare pligter, så ejere ser gab før go-live.',
    get3Title: 'EU AI Act-mapping',
    get3Body: 'Temapegepinde for højrisiko-forpligtelser — ikke overensstemmelsescertificering.',
    get4Title: 'Eksporterbare regler',
    get4Body: 'Struktureret output du kan koble til gelændere eller middleware.',
    featuresEyebrow: 'Hvorfor CostLens',
    featuresTitle: 'Alt du behøver for at kode politikpakker',
    featuresBlurb: 'Bygget til platform- og compliance-teams der har brug for håndhævelige tjek uden stejl læringskurve.',
    howTitle: 'Fra politiktekst til håndhævelige tjek i 3 trin',
    how1Title: 'Indsæt',
    how1Body: 'Indsæt virksomhedspolitiktekst og vælg et domæne (Finance, HR, Safety, General).',
    how2Title: 'Generér',
    how2Body: 'Opret agent-kaldbare tjek plus en compliance-tjekliste og framework-temaer.',
    how3Title: 'Kobling',
    how3Body: 'Eksportér regler ind i din agent-runtime; behold mennesker til undtagelser og juridisk gennemgang.',
    allPlansTitle: 'Alle betalte planer inkluderer',
    allPlans1: 'Politik-til-regler studio',
    allPlans2: 'Eksport af compliance-tjekliste',
    allPlans3: 'EU AI Act-temamapping (beslutningsstøtte)',
    allPlans4: 'E-mail-support på betalte planer — ingen skjulte tillæg til kernestudio',
    honestyTitle: 'Ærlige grænser',
    honestyLead: 'Ligesom en professionel politikgenerator er CostLens en udkastshjælp: tilpas, gennemgå og opdater med din counsel.',
    ctaStudio: 'Åbn studio',
  },
  home: {
    whyEyebrow: 'Hvorfor {{name}}',
    featuresHeading: 'Alt du behøver for at håndhæve agentpolitik',
    featuresCardBlurb: 'Bygget til compliance- og platform-engineers der har brug for håndhævelige agentregler uden stejl læringskurve.',
    howHeading: 'Fra politiktekst til håndhævelige regler i 3 trin',
    how1Title: 'Indsæt politik',
    how1Desc: 'Drop virksomhedspolitik, tool-allowlists eller agent-runbooks ind.',
    how2Title: 'Kompilér regler',
    how2Desc: 'Deterministiske tjek plus modelassisterede politikpakker.',
    how3Title: 'Håndhæv',
    how3Desc: 'Eksportér agentklare regler med citater og et audit-spor.',
    studioEyebrow: 'Live-studio',
    studioHeading: 'Prøv det på denne side',
    studioWatchDemo: 'Se demo',
    studioOrRun: 'eller kør et check nedenfor.',
    studioFormTitle: 'Agentpolitik-tjek',
    demoMode: 'Demo-tilstand (ikke live AI)',
    socialHeading: 'Betroet af compliance-engineers',
    socialNote: 'Social proof bruger skabeloner indtil ægte, samtykkede testimonials findes. Betroet af [X]+ compliance- og agentplatform-teams.',
    quickAnswers: 'Hurtige svar',
    howCompares: 'Sammenligning',
    dimension: 'Dimension',
    manual: 'Manuel',
    whenNotToUse: 'Hvornår du ikke bør bruge:',
    peopleAlsoSearch: 'Folk søger også',





































































































































    leadsInbox: "Leads-indbakke (demo-CRUD)",
    filterEmail: "Filtrer e-mail…",
    allPlans: "Alle planer",
    noLeads: "Ingen leads endnu — indsend tilmeldingsformularen.",
    colEmail: "E-mail",
    colPlan: "Plan",
    colSource: "Kilde",
    delete: "Slet",
    deleteLeadTitle: "Slet lead",
    deleteLeadWarn: "Denne handling kan ikke fortrydes.",
    deleteLeadBody: "Slet denne lead? E-mailen fjernes permanent fra dine kontakter.",
    cancel: "Annuller",
    relatedReading: "Relateret læsning",
    productTour: "Produktrundvisning",
    productDemo: "PRODUKTDEMO",
    stepOf: "trin {{n}}/{{total}}",
    replay: "Afspil igen",
    tryStudio: "Prøv studio",
    leadsCount: "{{n}} leads",
    leadsFiltered: "{{n}} filtreret",
    geoCmpDim: "Dimension",
    geoCmpManual: "Manuel",
    geoCmp1Dim: "Hastighed",
    geoCmp1Manual: "Timer til dage",
    geoCmp1Tool: "Minutter pr. kørsel",
    geoCmp2Dim: "Konsistens",
    geoCmp2Manual: "Varierer pr. person",
    geoCmp2Tool: "Samme regelsæt hver gang",
    geoCmp3Dim: "Output",
    geoCmp3Manual: "Fritekst",
    geoCmp3Tool: "Struktureret, eksporterbart resultat",
    geoCmp4Dim: "Bedst til",
    geoCmp4Manual: "Endelig godkendelse",
    geoCmp4Tool: "Første beslutningsstøtte",
    related1Title: "AI-indpakning vs grav",
    related1Desc: "politikoverholdelse som en varig grav.",
    related2Title: "EU AI Act overholdelsestjekliste",
    related2Desc: "kortlæg agenters pligter til aktens temaer.",
    related3Title: "Wave 1 lancering",
    related3Desc: "CostLens leveres sammen med styringsklyngen.",
    feat1: "Politik-til-regler",
    feat2: "Overholdelsestjekliste",
    feat3: "EU AI Act kortlægning",
    feat4: "Eksportable regler",
    geoQa1: "Politik-til-regler",
    geoQa2: "Overholdelsestjekliste",
    geoQa3: "EU AI Act kortlægning",
    geoQa4: "Eksportable regler",
    geoQa5: "Prisen starter ved $0 (Free).",
    geoLt1: "hvad er CostLens",
    geoLt2: "hvordan fungerer CostLens",
    geoLt3: "hvor meget koster CostLens",
    geoLt4: "er CostLens free",
    geoLt5: "CostLens vs at gøre det manuelt",
    geoWhenNot: "Brug kvalificeret menneskelig gennemgang i stedet — det er en udarbejdelseshjælp. Politikker skal gennemgås af din juridiske rådgiver og risikoejere.",
    demo1Title: "Velkommen til {{name}}",
    demo1Detail: "En 60-sekunders rundvisning i, hvordan {{name}} omdanner politik til agentkontroller.",
    demo2Title: "Åbn live-studiet",
    demo2Detail: "Indsæt politiktekst og vælg et domæne.",
    demo3Title: "Klik Generate checks",
    demo3Detail: "Drevet af Politik-til-regler og overholdelsestjeklister.",
    demo4Title: "Politiktjek forhåndsvisning",
    demo4Detail: "Eksempeloutput fra dette produkts regelbaserede pipeline:",
    demo4DetailEmpty: "Dine politikttjek vises her — kopier eller forbedr.",
    demo5Title: "Din tur",
    demo5Detail: "Prøv live-studiet, eller kom i gang med {{name}}.",
  },
  chat: {
    typing: 'Assistenten skriver…',
    placeholder: 'Skriv dit spørgsmål… (Enter for at sende)',
    send: 'Send',
    openAria: 'Åbn AI-assistent',
    openTitle: 'Spørg vores AI-assistent',
    closeAria: 'Luk',
    escalated: 'Vi har forbundet dig med en menneskelig agent. Vi følger op på e-mail.',
    s1: 'Hvad gør dette værktøj?',
    s2: 'Hvad koster det?',
    s3: 'Findes der en gratis plan?',
  },
  pages: {
    howTitle: 'CostLens — Sådan virker det',
    howDesc: 'Sådan virker CostLens i tre trin.',
    howEyebrow: 'Sådan virker det',
    howH1: 'Fra input til resultat i 3 trin',
    how1Title: 'Indsæt',
    how1Body: 'Indsæt policy-tekst og vælg domæne.',
    how2Title: 'Kodér',
    how2Body: 'Generér agent-kaldbare checks og en compliance-checkliste.',
    how3Title: 'Håndhæv',
    how3Body: 'Sæt regler ind i agent-runtime; behold mennesker til undtagelser.',
    subscribe: 'Abonnér',
    ucTitle: 'CostLens — Brugsscenarier',
    ucDesc: 'Hvordan CostLens hjælper compliance- og agentplatform-teams.',
    ucEyebrow: 'Brugsscenarier',
    ucH1: 'Bygget til compliance- og agentplatform-teams',
    ucIntro: 'Vælg dit segment for at se de workflows, der betyder mest.',
    uc1Title: 'Finance-policies',
    uc1Pain: 'Refunderinger og godkendelser skal være maskincheckbare.',
    uc1Help: 'Udtræk betingelser + handlinger, agents kan evaluere.',
    uc2Title: 'HR-/sikkerhedspolitikker',
    uc2Pain: 'Har brug for checklister, agents kan kalde.',
    uc2Help: 'Domænevælger fokuserer udtrækningen.',
    uc3Title: 'EU AI-funktioner',
    uc3Pain: 'Map højrisiko-regler til AI Act-temaer.',
    uc3Help: 'Kun beslutningsstøtte-mapping.',
    uc4Title: 'Platform-teams',
    uc4Pain: 'Policy-PDF’er når aldrig runtime.',
    uc4Help: 'Eksporterbare regler til agent-værktøjer.',
    painLabel: 'Smerte:',
    helpLabel: 'Sådan hjælper CostLens:',
    ucRefs: 'Kilder: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    intTitle: 'CostLens — Integrationer',
    intDesc: 'CostLens-eksportmål, API og BYOK-muligheder.',
    intEyebrow: 'Integrationer',
    intH1: 'Sæt ind i din stak',
    intIntro: 'Kun ærlige integrationer er listet. Vi annoncerer ikke connectorer, der endnu ikke er leveret.',
    int1Title: 'Eksporterbare regler',
    int1Body: 'JSON/checkliste-eksport til agent-værktøjer.',
    int2Title: 'API',
    int2Body: 'Regenerér når policies ændrer sig.',
    int3Title: 'EU AI Act-mapping',
    int3Body: 'Pegere til højrisiko-temaer.',
    int4Title: 'BYOK',
    int4Body: 'Server-side nøgler når tilbudt.',
    intHonesty: 'Ærlighedsnote: Runtime-håndhævelse er dit systems job; vi genererer kandidat-checks.',
    secTitle: 'CostLens — Sikkerhed & compliance',
    secDesc: 'Hvordan CostLens håndterer dine data og dens ærlige compliance-holdning.',
    secEyebrow: 'Sikkerhed & compliance',
    secH1: 'Dine data, vores holdning',
    secIntro: 'CostLens behandler de inputs, du indsender til analyse. Denne side siger klart, hvad vi håndterer, og hvad vi ikke påstår.',
    secHandleH2: 'Hvad vi håndterer',
    secHandleBody: 'virksomhedspolicy-tekst og domænevalg brugt til at generere agent-håndhævelige checks.',
    secDataH2: 'Forpligtelser for databehandling',
    secData1: 'Indsendelser kører produktpipelinen og gemmes kun så længe dit audit-log kræver (betalte tiers), eller indtil du sletter kørslen.',
    secData2: 'Vi anvender adgangskontroller i overensstemmelse med GDPR Art. 32, hvor persondata behandles.',
    secData3: 'BYOK-nøgler (Enterprise), når tilbudt, gemmes kun server-side og eksponeres aldrig i browseren.',
    secHonesty: 'Ærlighedsregel: CostLens gør policy-tekst til kandidatregler. Vi garanterer ikke korrekt håndhævelse, 100 % dækning eller at agents aldrig misser en overtrædelse.',
    secPostureH2: 'Vores compliance-holdning',
    secPosture1: 'CostLens er beslutningsstøtte, ikke et advokatfirma, klinik eller certificeret revisor.',
    secPosture2: 'For bindende rådgivning: konsulter en kvalificeret fagperson i det relevante domæne.',
    secSubH2: 'Underleverandører & betalinger',
    secSub1: 'Betalinger behandles af Waffo Pancake (merchant of record).',
    secSub2: 'Se Privacy og Terms for fulde vilkår.',
    secRefs: 'Kilder: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    backHome: 'Tilbage til forsiden',
  },
  blog: {
    metaTitle: 'CostLens — Blog',
    metaDesc: 'Definitionelle og how-to-indlæg om policy-as-code, agent-håndhævede regler, EU AI Act-mapping og compliance-checklister.',
    glanceTitle: 'Hvad indeholder dette produkt i overblik?',
    glance1: 'Definition på hverdagssprog, FAQ og referencer til answer engines',
    glance2: '3 gennemgåelige workflow-trin (input → generér → review)',
    glance3: 'Beslutningsstøtte-output — du forbliver i loopet; ingen opdigtede brugerantal',
    eyebrow: 'Blog · GEO',
    h1: 'Policy-as-code forklaret',
    lead: 'Tag ejerskab over definitionsspørgsmålene, før teams gør en virksomhedspolicy til noget, en agent faktisk håndhæver.',
    targetQuery: 'Målforespørgsel:',
    guidesTitle: 'Hvilke GEO deep-dives bør du læse først?',
    guidesLead: 'Lange, citerede forklaringer. Hver har 3+ autoritative EU AI Act-/AI-governance-kilder og en beslutningsstøtte-disclaimer.',
    footerNote: 'Publish + syndicate per gtm-launch (IH + GEO-indekser). Hvert indlæg har 3 autoritative refs.',
    post1Title: 'AI-agent-policy-packs og NIST AI RMF',
    post1Desc: 'Hvordan policy-packs mapper til NIST AI RMF-funktioner og EU AI Act-temaer — beslutningsstøtte, ikke et certifikat.',
    post2Title: 'Tilladte værktøjer vs. åbne agents',
    post2Desc: 'Hvorfor begrænsning af agent-værktøjsadgang er en kontrol, ikke en feature-toggle — med ærlighedsregler for åbne agents.',
    readI18n: 'Læs flersproget version',
    readEnHtml: 'Læs fuld engelsk artikel',
    pillarSlug: 'ai-agent-policy-packs-nist-rmf-2026',
    pillarEyebrow: 'af CostLens (LX AI)',
    pillarH1: 'AI-agent-policy-packs og NIST AI RMF',
    pillarLead: 'Policy-packs gør virksomhedsregler til agent-kaldbare checks. Mappet til NIST AI RMF-funktioner og EU AI Act-temaer er de beslutningsstøtte — ikke et overensstemmelsescertifikat.',
    pillarH2a: 'Hvad et policy-pack indeholder',
    pillarPa1: 'Et pack er et sæt betingelse+handling-regler udtrukket fra policy-tekst plus en checkliste, der mapper højrisiko-regler til tilsyns- og logforventninger. Agents evaluerer ved runtime; mennesker håndterer undtagelser.',
    pillarH2b: 'NIST AI RMF-alignment',
    pillarPb1: 'Govern: ejerskab af hvilke policies der binder agents. Map: inventar over værktøjer og data. Measure: log policy-beslutninger. Manage: eskalér når en regel blokerer eller human approval kræves.',
    pillarH2c: 'EU AI Act-berøringspunkter',
    pillarPc1: 'For bilag III højrisiko-brug kan deployer-pligter som Art. 9 og Art. 14 understøttes af policy-checks — de erstatter ikke overensstemmelsesvurdering.',
    pillarH2d: 'Ærlighedsgrænse',
    pillarPd1: 'CostLens udarbejder kandidatregler. Ledningsføring, håndhævelseskvalitet og juridisk overensstemmelse er stadig dit ansvar. Ingen claim om garanti / 100 % / never-miss.',
    pillarDisclaimer: 'Kun beslutningsstøtte — ikke juridisk rådgivning og ikke et overensstemmelsescertifikat.',
    pillarFaq1Q: 'Certificerer et policy-pack EU AI Act-overensstemmelse?',
    pillarFaq1A: 'Nej. Det hjælper med at dokumentere kontroller; overensstemmelse forbliver den deployende organisations ansvar på tværs af hele systemet.',
    pillarFaq2Q: 'Hvordan hænger NIST AI RMF sammen?',
    pillarFaq2A: 'RMF-funktioner giver ordforråd for governance og måling; packs operationaliserer checks, agents kan kalde inden for disse funktioner.',
    pillar2Slug: 'allowed-tools-vs-open-ended-agents-2026',
    pillar2Eyebrow: 'Guardrail-design',
    pillar2H1: 'Tilladte værktøjer vs åbne agenter',
    pillar2Lead: 'Hvorfor allow-lists fail-closed mere sikkert end åbne agenter — og hvordan policy packs koder grænserne som runtime-checks.',
    pillar2H2a: 'Åbne agenter forstørrer blast radius',
    pillar2Pa1: 'Ubegrænset værktøjsvalg plus lang hukommelse: én prompt injection kan kæde e-mail, kode og dataexfil.',
    pillar2H2b: 'Allow-lists som default-deny',
    pillar2Pb1: 'Oplist tilladte værktøjer, argumenter og destinationer. Alt andet fail-closed — i tråd med NIST AI RMF Govern/Map.',
    pillar2H2c: 'Kodér politik som checks',
    pillar2Pc1: 'Gør prosa til kaldbare checks: værktøjsscope, dataklasser, eskalerings-owners og auditfelter.',
    pillar2H2d: 'Hvornår åbenhed stadig passer',
    pillar2Pd1: 'Research-sandboxes uden produktionscredentials må bruge bredere værktøjer — isoleret fra kundedata-stier.',
    pillar2Disclaimer: 'Beslutningsstøtte-udkast. Ikke juridisk rådgivning eller certificering.',
    pillar2Faq1Q: 'Er en allow-list nok?',
    pillar2Faq1A: 'Nej. Kombinér med argumentvalidering, menneskelig godkendelse af irreversible handlinger og logging.',
    pillar2Faq2Q: 'Relation til NIST AI RMF?',
    pillar2Faq2A: 'Allow-lists understøtter Govern og Map: definér tilsigtet brug og kontroller før Measure/Manage i produktion.',
    pillar2Back: 'Tilbage til blog',
    pillarBack: 'Tilbage til bloggen',
    card1Title: 'Hvad er policy-as-code?',
    card1Body: 'Policy-as-code udtrykker en virksomhedspolicy som maskincheckbare regler, en agent evaluerer ved runtime — fx hvis refund > $50 så kræv manager_approval. Beslutningsstøtte, ikke en juridisk vurdering eller et compliance-certifikat.',
    card2Title: 'Gør virksomhedspolicy til agent-håndhævede regler',
    card2Body: 'Udtræk hver policy-sætning som betingelse + handling, map højrisiko-regler til EU AI Act-temaer (Art. 9, 14, 26), og eksportér en regelfil, agenten evaluerer ved hver kørsel. Reglerne er en visning af dine pligter, ikke en overensstemmelsesgaranti.',
  },
} as const

export default da as unknown as Messages
