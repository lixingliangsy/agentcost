// locales/de.ts — CostLens German catalog (mirrors en.ts shape).
// Terms: Datenschutzerklärung / Richtlinie erstellen (Termly DE);
// Verantwortlicher / Auftragsverarbeiter / Verarbeitung (DSGVO Art.4).

import type { Messages } from '../types'

const de = {
  meta: {
    title: 'CostLens · Sehen, wohin KI-Agenten Geld ausgeben',
    description:
      'Attributieren Sie LLM und Agentinferenzkosten dem Agenten, der Funktion und dem Benutzer, der sie ausgelöst hat — mit Budget-Schutzschranken.',
  },
  common: {
    appName: 'CostLens',
    tagline: 'Sehen Sie genau, wo Ihre AI-Agents Geld ausgeben',
    microSaas: 'Micro SaaS',
    menu: 'Menü',
  },
  nav: {
    backToHub: 'Zurück zum Hub',
    home: 'Start',
    features: 'Funktionen',
    useCases: 'Anwendungsfälle',
    integrations: 'Integrationen',
    howItWorks: 'So funktioniert’s',
    studio: 'Studio',
    security: 'Sicherheit',
    pricing: 'Preise',
    blog: 'Blog',
    faq: 'FAQ',
    feedback: 'Feedback',
    support: 'Support',
    signIn: 'Anmelden',
    subscribe: 'Abonnieren',
    getStarted: 'Loslegen',
  },
  hero: {
    badge: 'Micro SaaS',
    title: 'Decision-support drafts — no performance guarantee',
    subtitle:
      'Join builders using CostLens. Jetzt starten — keine Karte erforderlich.',
    keyTakeaways: 'Kernaussagen',
    takeaway1: 'Tokenkostenattribuierung nach Agent, Funktion und Benutzer.',
    takeaway2: 'Pro-Agent-Budget-Schutzschranken mit frühzeitigen Warnungen.',
    takeaway3: 'Ehrlichkeit: FinOps Entscheidungsunterstützung — kein Abrechnungs- oder Kosten-Garantiezertifikat.',
    ctaPrimary: 'Abonnieren',
    ctaSecondary: 'Demo ansehen',
    note: 'Keine Kreditkarte nötig · Jederzeit kündbar',
    playDemo: 'Demo abspielen ▶',
    walkthrough: 'Klicken für den Rundgang',
  },
  stats: {
    builders: 'Builder',
    avgRating: 'Ø Bewertung',
    uptime: 'Verfügbarkeit',
    timeToValue: 'Zeit bis Nutzen',
  },
  pricing: {
    heading: 'Einfache Pläne, die mitwachsen',
    monthly: 'Monatlich',
    yearly: 'Jährlich',
    perMonth: '/Mon.',
    mostPopular: 'Am beliebtesten',
    getPro: 'Pro holen',
    orYearly: 'Oder jährlich — ${{amount}}/Mon.',
    custom: 'Individuell',
    contactSales: 'Vertrieb kontaktieren',
    configureByok: 'BYOK konfigurieren',
    getStarted: 'Loslegen',
    freeForever: 'dauerhaft kostenlos',
    billedMonthly: 'monatlich abgerechnet',
    save: 'sparen',
    freeFeat1: 'Begrenzte tägliche KI-Läufe (10/Tag · 50/Mon.)',
    freeFeat2: 'Studio-Demo (ohne extra LLM-Gebühr)',
    proFeat1: 'KI inklusive: 300 Generierungen/Mon. · Fair Use (gpt-4o-mini)',
    proFeat2: 'Kein separates ChatGPT-Abo nötig',
    proFeat3: 'Priority-Support · 2 Monate gratis bei Jahreszahlung',
    entFeat1: 'Team-Sitze · API-Zugang (Roadmap)',
    entFeat2: 'Optional BYOK (Ihr OpenAI-Schlüssel)',
  },
  faq: {
    title: 'Ihre Fragen — beantwortet',
    geoTitle: 'CostLens — häufig gestellte Fragen',
    items: [
      {
        q: 'Was verfolgt CostLens?',
        a: 'LLM- und Agenteninferenzkosten, die auf Agenten, Funktionen und Benutzer zurückzuführen sind - mit Budget-Schutzschranken. Entscheidungsunterstützung, kein Rechnungszertifikat.',
      },
      {
        q: 'Ist das Rechtsberatung oder eine Zertifizierung?',
        a: 'Nein. Ausgaben sind Entscheidungsunterstützung. Lassen Sie Counsel und Risikoeigner vor Produktion prüfen. Wir beanspruchen keine ISO-, CMP- oder Aufsichtszertifizierung.',
      },
      {
        q: 'Kann ich jederzeit kündigen?',
        a: 'Ja. Self-Serve-Pläne sind jederzeit kündbar; der Zugang bleibt bis Periodenende.',
      },
      {
        q: 'Brauche ich eine Kreditkarte zum Start?',
        a: 'Nein. Mit E-Mail starten oder Demo-Modus im Studio nutzen, später upgraden.',
      },
      {
        q: 'Brauche ich ein eigenes ChatGPT-/OpenAI-Abo?',
        a: 'Nein für Free/Pro. KI-Läufe sind im Plan (Fair Use) über unseren Plattform-Schlüssel enthalten. Enterprise kann optional den eigenen OpenAI-Schlüssel (BYOK) unter /settings hinterlegen (nur serverseitig).',
      },
      {
        q: 'Was ist Fair Use / was passiert bei KI-Limit?',
        a: 'Pro umfasst etwa 300 KI-Generierungen/Monat (plus Tagescap) auf gpt-4o-mini. Bei Limit liefert Studio Mock/Demo bis Reset — oder Upgrade / Enterprise-BYOK für höheres Volumen.',
      },
      {
        q: 'Ist der Checkout sicher?',
        a: 'Zahlungen laufen über Waffo Pancake (Merchant of Record).',
      },
      {
        q: 'Was passiert nach der Zahlung?',
        a: 'Sie erhalten eine Zugangsbestätigung; Erfüllung wird per Webhook und Auftragslog getrackt.',
      },
    ],
  
    geoItems: [
      { q: 'Welche Signale?', a: 'Token-Nutzung zugeordnet zu Agent, Funktion und Benutzer.' },
      { q: 'Ersetzt es Ihre Rechnung?', a: 'Nein. Entscheidungsunterstützungszuweisung — kein Rechnungsgarantie.' },
      { q: 'Budgetwarnungen?', a: 'Pro-Agent-Schutzbarrieren mit frühzeitigen Warnungen, bevor Schleifen den Aufwand verbrauchen.' },
      { q: 'Demo vs Live?', a: 'Demo ist beschriftet; Live-Erzählung benötigt einen konfigurierten KI-Schlüssel.' },
      { q: 'Für wen ist es?', a: 'Plattform- und FinOps-Teams, die Multi-Agent-Stacks ausliefern.' },
      { q: 'Primäre Quellen?', a: 'LLM FinOps / Token-Zuweisungspraxisnotizen.' },
    ],
},
  footer: {
    product: 'Produkt',
    company: 'Unternehmen',
    resources: 'Ressourcen',
    legal: 'Rechtliches',
    about: 'Über uns',
    contact: 'Kontakt',
    privacy: 'Datenschutz',
    terms: 'AGB',
    refund: 'Erstattung',
    support: 'Support',
    feedback: 'Feedback',
    rights: 'Alle Rechte vorbehalten.',
    partOfFleet: 'Teil der LX AI Micro-SaaS-Flotte.',
  },
  signup: {
    title: 'Heute smarter starten',
    subtitle: 'Teams nutzen CostLens. Kostenlos testen — ohne Karte.',
    emailPlaceholder: 'E-Mail eingeben',
    saving: 'Speichern…',
    cta: 'Loslegen',
    trust: 'Vertrauenswürdig · Jederzeit kündbar',
  },
  feedback: {
    open: 'Feedback',
    title: 'Feedback senden',
    blurb: 'Sagen Sie uns, was funktioniert hat, was kaputt war oder was Sie als Nächstes brauchen.',
    fullPage: 'Lieber eine ganze Seite?',
    openPage: '/feedback öffnen',
    close: 'Feedback schließen',
    helpful: 'War dieses Ergebnis hilfreich?',
    yes: 'Ja',
    no: 'Nein',
    thanks: 'Danke für Ihr Feedback.',
    commentPlaceholder: 'Optionaler Einzeiler',
    generalTitle: 'Allgemeines Feedback',
    generalSub: 'Sagen Sie uns Ihre Meinung',
    generalPh: 'Was hat Ihnen gefallen, missfallen oder ist aufgefallen?',
    ideaTitle: 'Ich habe eine Idee',
    ideaSub: 'Feature oder Verbesserung vorschlagen',
    ideaPh: 'Beschreiben Sie Ihre Idee und das Problem, das sie löst…',
    issueTitle: 'Ich habe ein Problem gefunden',
    issueSub: 'Bug oder Störung melden',
    issuePh: 'Was ist passiert, was erwartet, und wie reproduzieren?',
    submit: 'Feedback absenden',
    submitting: 'Senden…',
    done: 'Danke — Feedback erhalten.',
    emailOptional: 'E-Mail (optional)',
    category: 'Kategorie',
    yourFeedback: 'Ihr Feedback',
    attachment: 'Anhang (optional)',

    back: '← Zurück zur Feedback-Art',
    pickTitle: 'Welches Feedback haben Sie?',
    pickSub: 'Wählen Sie eine Option. Details und Kategorie folgen im nächsten Schritt.',
    thanksTitle: 'Danke für Ihr Feedback!',
    thanksBody: 'Wir haben es erhalten und melden uns bald. Sie können jederzeit erneut senden.',
    submitAnother: 'Weiteres absenden',
    detailed: 'Detailliertes Feedback',
    send: 'Senden',
    sending: 'Senden...',
    thanksInline: 'Danke — gespeichert. Wir lesen jedes Feedback.',
    errorInline: 'Senden gerade nicht möglich. Bitte Feedback-Button oder /feedback nutzen.',
    inlineCommentPh: 'Ein Zeile: was verbessern? (optional)',
  },
  legal: {
    privacyPolicy: 'Datenschutzerklärung',
    generatePolicy: 'Richtlinie erstellen',
    controller: 'Verantwortlicher',
    processor: 'Auftragsverarbeiter',
    processing: 'Verarbeitung',
    personalData: 'Personenbezogene Daten',
    dataSubject: 'Betroffene Person',
    dpo: 'Datenschutzbeauftragter',
    checklist: 'Compliance-Checkliste',
    policyChecks: 'Richtlinienprüfungen',
    encodePolicy: 'Richtlinie kodieren',
    definitionTitle: 'CostLens — Definition',
    whatItIs: 'Was es ist',
    whatNotTitle: 'Was das NICHT ist',
    whatNot1: 'Keine Kanzlei, keine GRC-Plattform und keine ISO-Zertifizierungsstelle.',
    whatNot2: 'Keine Garantie, dass entworfene Richtlinien jeden Aufsichts- oder Prüfer bestehen.',
    whatNot3: 'Keine Rechtsberatung — lassen Sie kritische Agent-Policy-Pakete von Counsel prüfen.',
    rolesHint:
      'Wenn Pakete Datenschutzrollen nennen, nutzen wir DSGVO-Art.-4-Begriffe: Verantwortlicher und Auftragsverarbeiter (nur Entscheidungsunterstützung).',
  },
  benchmark: {
    frameworksEyebrow: 'Rahmenwerk-Zuordnung',
    frameworksTitle: 'Komplexe Regeln. Einfache Policy-Pakete.',
    frameworksNote:
      'Themen zur Entscheidungsunterstützung — keine Zertifizierung, kein CMP-Badge und kein Rechtsgutachten.',
    fw1: 'EU-KI-Verordnung',
    fw2: 'NIST AI RMF',
    fw3: 'OWASP LLM Top 10',
    fw4: 'DSGVO Art.4 Rollen',
    painEyebrow: 'Warum Agentenrechnungen überraschen',
    painTitle: 'Agenten schleifen. Budgets verschwinden.',
    pain1Title: 'Neue Regeln, neues Risiko',
    pain1Body: 'Jedes regulatorische Update kann Agent-Tools, Datenklassen und Eskalationspfade aus dem Takt bringen.',
    pain2Title: 'Dokument vs. Runtime',
    pain2Body: 'Lebt das PDF getrennt vom Agenten-Runtime, entstehen Blindspots erst in Produktion.',
    pain3Title: 'Manuelle Umschreibungen',
    pain3Body: 'Checklisten von Hand für jede Domäne kosten Engineering- und Compliance-Zeit.',
    pain4Title: 'Probleme nach dem Go-live',
    pain4Body: 'Lücken fallen oft erst bei Audit, Vorfall oder Kundenfragebogen auf.',
    getEyebrow: 'Was Sie erhalten',
    getTitle: 'Ingestieren. Zuordnen. Schützen.',
    getLead:
      'Entscheidungsunterstützung FinOps — kein Abrechnungszertifikat.',
    get1Title: 'Richtlinienprüfungen',
    get1Body: 'Bedingung + Aktion-Regeln, die ein Agenten-Runtime auswerten kann.',
    get2Title: 'Compliance-Checkliste',
    get2Body: 'Menschenlesbare Pflichten, damit Owner Lücken vor dem Go-live sehen.',
    get3Title: 'EU-KI-Verordnung Mapping',
    get3Body: 'Themenhinweise zu Hochrisiko-Pflichten — keine Konformitätszertifizierung.',
    get4Title: 'Exportierbare Regeln',
    get4Body: 'Strukturierte Ausgabe zum Einbinden in Guardrails oder Middleware.',
    featuresEyebrow: 'Warum CostLens',
    featuresTitle: 'Alles, was Sie für Agenten-FinOps benötigen',
    featuresBlurb: 'Entwickelt für Plattform-Teams, die Ausgabenklarheit ohne Überbeanspruchung benötigen.',
    howTitle: 'CostLens — So funktioniert es',
    how1Title: 'Einsetzen von Waffo, BYOK und agentcost mit CostLens und FinOps für LLM',
    how1Body: 'Fügen Sie Richtlinientext ein und wählen Sie eine Domäne.',
    how2Title: 'Codieren',
    how2Body: 'Erstellen Sie agenten-aufrufbare Prüfungen und eine Validierungsfehlerliste.',
    how3Title: 'Durchsetzen',
    how3Body: 'Verbinden Sie Regeln mit der Laufzeit Ihres Agents; behalten Sie Menschen für Ausnahmen.',
    allPlansTitle: 'Alle bezahlten Pläne enthalten',
    allPlans1: 'Policy-to-Rules Studio',
    allPlans2: 'Export der Compliance-Checkliste',
    allPlans3: 'Themenmapping zur EU-KI-Verordnung (Entscheidungsunterstützung)',
    allPlans4: 'E-Mail-Support bei bezahlten Plänen — keine versteckten Add-ons fürs Kern-Studio',
    honestyTitle: 'Ehrliche Grenzen',
    honestyLead:
      'CostLens attribuiert Ausgaben. Kein Abrechnungs- oder Kosten-Zertifikat.',
    ctaStudio: 'Studio öffnen',
  },
  home: {
    whyEyebrow: 'Warum {{name}}',
    featuresHeading: 'Alles, was Sie für Token-Attribution benötigen',
    featuresCardBlurb: 'Erstellt für Ledger und Sicherheitsrail ohne Abrechnungsgarantien.',
    howHeading: 'Von Läufen zu Ausgabenklarheit in 3 Schritten',
    how1Title: 'Policy einfügen',
    how1Desc: 'Tokens + Agent-IDs.',
    how2Title: 'Regeln erzeugen',
    how2Desc: 'Ledger-Zeilen',
    how3Title: 'Durchsetzen',
    how3Desc: 'FinOps besitzt die Aktion.',
    studioEyebrow: 'Live-Studio',
    studioHeading: 'Direkt auf dieser Seite ausprobieren',
    studioWatchDemo: 'Demo ansehen',
    studioOrRun: 'oder unten einen Check ausführen.',
    studioFormTitle: 'Agent-Richtlinienprüfung',
    demoMode: 'Demo-Modus (keine Live-KI)',
    socialHeading: 'Vertrauen von Compliance-Ingenieuren',
    quickAnswers: 'Kurzantworten',
    howCompares: 'Vergleich',
    dimension: 'Dimension',
    manual: 'Manuell',
    whenNotToUse: 'Wann nicht nutzen:',
    peopleAlsoSearch: 'Weitere Suchen',
    socialNote: 'Soziales Beweis verwendet Vorlagen, bis reale, Zustimmungsbeweise existieren. Vertrauen von [X]+ Compliance- und Agent-Plattformteams.',





































































































































    leadsInbox: "Lead-Posteingang (Demo-CRUD)",
    filterEmail: "E-Mail filtern…",
    allPlans: "Alle Pläne",
    noLeads: "Noch keine Leads — senden Sie das Anmeldeformular.",
    colEmail: "E-Mail",
    colPlan: "Plan",
    colSource: "Quelle",
    delete: "Löschen",
    deleteLeadTitle: "Lead löschen",
    deleteLeadWarn: "Diese Aktion kann nicht rückgängig gemacht werden.",
    deleteLeadBody: "Diesen Lead wirklich löschen? Die E-Mail wird dauerhaft aus Ihren Kontakten entfernt.",
    cancel: "Abbrechen",
    relatedReading: "Weiterführende Artikel",
    productTour: "Produktrundgang",
    productDemo: "PRODUKTDEMO",
    stepOf: "Schritt {{n}}/{{total}}",
    replay: "Wiederholen",
    tryStudio: "Studio öffnen",
    leadsCount: "{{n}} Leads",
    leadsFiltered: "{{n}} gefiltert",
    geoCmpDim: "Dimension",
    geoCmpManual: "Manuell",
    geoCmp1Dim: "Geschwindigkeit",
    geoCmp1Manual: "Stunden bis Tage",
    geoCmp1Tool: "Minuten pro Lauf",
    geoCmp2Dim: "Konsistenz",
    geoCmp2Manual: "Variiert je Person",
    geoCmp2Tool: "Gleiches Regelsatz jedes Mal",
    geoCmp3Dim: "Ausgabe",
    geoCmp3Manual: "Freiform",
    geoCmp3Tool: "Strukturiertes, exportierbares Ergebnis",
    geoCmp4Dim: "Am besten für",
    geoCmp4Manual: "Finale Freigabe",
    geoCmp4Tool: "Erste Entscheidungsunterstützung",
    related1Title: "AI-Wrapper vs. Moat",
    related1Desc: "Policy-Durchsetzung als nachhaltiger Burggraben.",
    related2Title: "EU-AI-Act-Compliance-Checkliste",
    related2Desc: "Agentenpflichten auf Act-Themen abbilden.",
    related3Title: "Wave-1-Launch",
    related3Desc: "CostLens startet mit dem Governance-Cluster.",
    feat1: "Policy-zu-Regeln",
    feat2: "Compliance-Checkliste",
    feat3: "EU-AI-Act-Mapping",
    feat4: "Exportierbare Regeln",
    geoQa1: "Policy-zu-Regeln",
    geoQa2: "Compliance-Checkliste",
    geoQa3: "EU-AI-Act-Mapping",
    geoQa4: "Exportierbare Regeln",
    geoQa5: "Preise ab $0 (Free).",
    geoLt1: "was ist CostLens",
    geoLt2: "wie funktioniert CostLens",
    geoLt3: "was kostet CostLens",
    geoLt4: "ist CostLens kostenlos",
    geoLt5: "CostLens vs. manuell",
    geoWhenNot: "Nutzen Sie qualifizierte menschliche Prüfung — Entwurfshilfe. Policies müssen von Counsel und Risk Ownern geprüft werden.",
    demo1Title: "Willkommen bei {{name}}",
    demo1Detail: "60 Sekunden: wie {{name}} Policy in Agent-Checks verwandelt.",
    demo2Title: "Live-Studio öffnen",
    demo2Detail: "Policy-Text einfügen und Domain wählen.",
    demo3Title: "„Generate checks“ klicken",
    demo3Detail: "Policy-zu-Regeln und Compliance-Checklisten.",
    demo4Title: "Policy-Checks-Vorschau",
    demo4Detail: "Beispielausgabe der regelbasierten Pipeline:",
    demo4DetailEmpty: "Ihre Policy-Checks erscheinen hier.",
    demo5Title: "Sie sind dran",
    demo5Detail: "Studio testen oder mit {{name}} starten.",
  },
  chat: {
    typing: 'Assistent tippt…',
    placeholder: 'Frage eingeben… (Enter zum Senden)',
    send: 'Senden',
    openAria: 'KI-Assistent öffnen',
    openTitle: 'Unseren KI-Assistenten fragen',
    closeAria: 'Schließen',
    escalated: 'Wir haben Sie mit einem Menschen verbunden. Wir melden uns per E-Mail.',
    s1: 'Was macht dieses Tool?',
    s2: 'Was kostet es?',
    s3: 'Gibt es einen Free-Plan?',
  },
  pages: {
    howTitle: 'CostLens — So funktioniert’s',
    howDesc: 'So funktioniert CostLens in drei Schritten.',
    howEyebrow: 'So funktioniert’s',
    howH1: 'Vom Input zum Ergebnis in 3 Schritten',
    how1Title: 'Einfügen',
    how1Body: 'Policy-Text einfügen und Domäne wählen.',
    how2Title: 'Kodieren',
    how2Body: 'Agent-aufrufbare Checks und eine Compliance-Checkliste erzeugen.',
    how3Title: 'Durchsetzen',
    how3Body: 'Regeln in die Agent-Laufzeit einbinden; Menschen für Ausnahmen behalten.',
    subscribe: 'Abonnieren',
    ucTitle: 'CostLens — Anwendungsfälle',
    ucDesc: 'Wie CostLens Compliance- und Agent-Plattform-Teams hilft.',
    ucEyebrow: 'Anwendungsfälle',
    ucH1: 'Für Compliance- und Agent-Plattform-Teams gebaut',
    ucIntro: 'Wählen Sie Ihr Segment, um die wichtigsten Workflows zu sehen.',
    uc1Title: 'Finance-Policies',
    uc1Pain: 'Rückerstattungen und Freigaben müssen maschinenprüfbar sein.',
    uc1Help: 'Bedingungen + Aktionen extrahieren, die Agents auswerten können.',
    uc2Title: 'HR-/Safety-Policies',
    uc2Pain: 'Brauchen Checklisten, die Agents aufrufen können.',
    uc2Help: 'Domänenwahl fokussiert die Extraktion.',
    uc3Title: 'EU-KI-Features',
    uc3Pain: 'Hochrisiko-Regeln auf KI-Verordnungs-Themen mappen.',
    uc3Help: 'Nur Entscheidungshilfe-Mapping.',
    uc4Title: 'Plattform-Teams',
    uc4Pain: 'Policy-PDFs erreichen nie die Laufzeit.',
    uc4Help: 'Exportierbare Regeln für Agent-Tools.',
    painLabel: 'Schmerzpunkt:',
    helpLabel: 'So hilft CostLens:',
    ucRefs: 'Quellen: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    intTitle: 'CostLens — Integrationen',
    intDesc: 'Exportziele, API und BYOK-Optionen von CostLens.',
    intEyebrow: 'Integrationen',
    intH1: 'In Ihren Stack einbinden',
    intIntro: 'Nur ehrliche Integrationen. Wir bewerben keine noch nicht gelieferten Konnektoren.',
    int1Title: 'Exportierbare Regeln',
    int1Body: 'JSON-/Checklisten-Export für Agent-Tools.',
    int2Title: 'API',
    int2Body: 'Neu erzeugen, wenn sich Policies ändern.',
    int3Title: 'EU-KI-Verordnungs-Mapping',
    int3Body: 'Hinweise zu Hochrisiko-Themen.',
    int4Title: 'BYOK',
    int4Body: 'Schlüssel serverseitig, wenn angeboten.',
    intHonesty: 'Ehrlichkeitshinweis: Laufzeit-Enforcement ist Aufgabe Ihres Systems; wir erzeugen Kandidaten-Checks.',
    secTitle: 'CostLens — Sicherheit & Compliance',
    secDesc: 'Wie CostLens Ihre Daten verarbeitet und welche ehrliche Compliance-Haltung gilt.',
    secEyebrow: 'Sicherheit & Compliance',
    secH1: 'Ihre Daten, unsere Haltung',
    secIntro: 'CostLens verarbeitet die von Ihnen zur Analyse eingereichten Eingaben. Diese Seite sagt klar, was wir verarbeiten und was wir nicht behaupten.',
    secHandleH2: 'Was wir verarbeiten',
    secHandleBody: 'Unternehmens-Policy-Text und Domänenauswahl zur Erzeugung agent-durchsetzbarer Checks.',
    secDataH2: 'Zusagen zur Datenverarbeitung',
    secData1: 'Einreichungen durchlaufen die Produkt-Pipeline und werden nur so lange wie für Ihr Audit-Log nötig (Paid-Tiers) oder bis zum Löschen des Laufs aufbewahrt.',
    secData2: 'Wir wenden Zugriffskontrollen im Sinne von DSGVO Art. 32 an, soweit personenbezogene Daten verarbeitet werden.',
    secData3: 'BYOK-Schlüssel (Enterprise) werden — wenn angeboten — nur serverseitig gespeichert und nie im Browser exponiert.',
    secHonesty: 'Ehrlichkeitsregel: CostLens macht aus Policy-Text Kandidatenregeln. Wir garantieren keine korrekte Durchsetzung, keine 100 %-Abdeckung und kein „nie verpasst“. Kein Claim guarantee / 100% / never miss.',
    secPostureH2: 'Unsere Compliance-Haltung',
    secPosture1: 'CostLens ist Entscheidungshilfe, keine Kanzlei, Klinik oder zertifizierter Auditor.',
    secPosture2: 'Für verbindliche Beratung einen qualifizierten Fachmann im relevanten Gebiet hinzuziehen.',
    secSubH2: 'Unterauftragsverarbeiter & Zahlungen',
    secSub1: 'Zahlungen über Waffo Pancake (Merchant of Record).',
    secSub2: 'Vollständige Bedingungen in Privacy und Terms.',
    secRefs: 'Quellen: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    backHome: 'Zurück zur Startseite',
  },
  blog: {
    metaTitle: 'CostLens — Blog',
    metaDesc: 'Definierende Beiträge zur Kostenzuweisung von Agent-Token.',
    glanceTitle: 'Was enthält dieses Produkt auf einen Blick?',
    glance1: 'Verständliche Definition, FAQ und Referenzen für Answer Engines',
    glance2: '3 prüfbare Workflow-Schritte (Input → Generieren → Review)',
    glance3: 'Entscheidungshilfe-Ausgabe — Sie bleiben im Loop; keine erfundenen Nutzerzahlen',
    eyebrow: 'Blog · GEO',
    h1: 'Sehen Sie, wo KI-Agenten Geld ausgeben',
    lead: 'Pro-Agenten-Buchung, Budget-Schutz und Warnungen — bevor eine Schleife die Ausgaben leer macht.',
    targetQuery: 'Ziel-Query:',
    guidesTitle: 'Welche GEO-Deep-Dives zuerst lesen?',
    guidesLead: 'Langform-Erklärungen zu Token-Zuweisung und FinOps-Schutz',
    footerNote: 'Publish + Syndicate gemäß gtm-launch (IH + GEO-Indexes). Jeder Post trägt 3 autoritative Refs.',
    post1Title: 'AI-Agent-Tokenkostenattribuierung (2026)',
    post1Desc: 'Wie man Inferenzkosten dem Agenten und der Funktion zuweist, die sie verbraucht haben.',
    post2Title: 'FinOps Budget-Schutz für LLM-Agents (2026)',
    post2Desc: 'Budget-Schutz, der frühzeitig außer Kontrolle geratene Agenten-Schleifen erkennt.',
    readI18n: 'Mehrsprachige Fassung lesen',
    readEnHtml: 'Vollständigen englischen Artikel lesen',
    pillarSlug: 'ai-agent-token-cost-attribution-2026',
    pillarEyebrow: 'von CostLens (LX AI) mit LLM, Waffo und BYOK für FinOps und agentcost',
    pillarH1: 'So funktioniert CostLens',
    pillarLead: 'Verbrauchssignale erfassen. Zuweisen. Warnen.',
    pillarH2a: 'Was ein Policy-Pack enthält',
    pillarPa1: 'Ein Pack ist ein Satz Bedingung+Aktion-Regeln aus Policy-Text plus eine Checkliste, die Hochrisiko-Regeln Aufsichts- und Logging-Erwartungen zuordnet. Agents werten zur Laufzeit aus; Menschen behandeln Ausnahmen.',
    pillarH2b: 'NIST-AI-RMF-Ausrichtung',
    pillarPb1: 'Govern: Besitz darüber, welche Policies Agents binden. Map: Inventar der Tools und Daten. Measure: Policy-Entscheidungen loggen. Manage: Eskalation bei Block oder Human Approval.',
    pillarH2c: 'EU-KI-Verordnungs-Berührungspunkte',
    pillarPc1: 'Bei Anhang-III-Hochrisiko-Nutzungen können Deployer-Pflichten wie Art. 9 und Art. 14 durch Policy-Checks belegt werden — sie ersetzen keine Konformitätsbewertung.',
    pillarH2d: 'Ehrlichkeitsgrenze',
    pillarPd1: 'CostLens entwirft Kandidatenregeln. Verkabelung, Durchsetzungsqualität und rechtliche Konformität bleiben Ihre Verantwortung. Kein Claim auf Garantie, 100 % oder never-miss.',
    pillarDisclaimer: 'Nur Entscheidungshilfe — keine Rechtsberatung und kein Konformitätszertifikat.',
    pillarFaq1Q: 'Zertifiziert ein Policy-Pack die EU-KI-Verordnungs-Konformität?',
    pillarFaq1A: 'Nein. Es hilft, Kontrollen zu belegen; Konformität bleibt Verantwortung der deployenden Organisation über das Gesamtsystem.',
    pillarFaq2Q: 'Wie hängt NIST AI RMF zusammen?',
    pillarFaq2A: 'RMF-Funktionen liefern Vokabular für Governance und Messung; Policy-Packs operationalisieren Checks, die Agents in diesen Funktionen aufrufen können.',
    pillar2Slug: 'allowed-tools-vs-open-ended-agents-2026',
    pillar2Eyebrow: 'Guardrail-Design',
    pillar2H1: 'Erlaubte Tools vs. offene Agenten',
    pillar2Lead: 'Warum Allow-Lists sicherer fail-closed sind als offene Agenten — und wie Policy-Packs diese Grenzen als Runtime-Checks kodieren.',
    pillar2H2a: 'Offene Agenten vergrößern den Blast Radius',
    pillar2Pa1: 'Uneingeschränkte Tool-Wahl plus Langzeitgedächtnis: eine Prompt Injection kann E-Mail, Code und Datenexfil verketten.',
    pillar2H2b: 'Allow-Lists als Default-Deny',
    pillar2Pb1: 'Erlaubte Tools, Argumente und Ziele auflisten. Alles andere fail-closed — analog zu NIST AI RMF Govern/Map.',
    pillar2H2c: 'Policy als Checks kodieren',
    pillar2Pc1: 'Prosatext in agent-aufrufbare Checks: Tool-Scope, Datenklassen, Eskalations-Owner und Audit-Felder.',
    pillar2H2d: 'Wann Offenheit noch passt',
    pillar2Pd1: 'Research-Sandboxes ohne Produktions-Credentials dürfen breitere Tools nutzen — isoliert von Kundendatenpfaden.',
    pillar2Disclaimer: 'Entscheidungshilfe-Entwürfe. Keine Rechtsberatung und keine Zertifizierung.',
    pillar2Faq1Q: 'Reicht eine Allow-List?',
    pillar2Faq1A: 'Nein. Kombinieren Sie mit Argument-Validierung, menschlicher Freigabe für irreversible Aktionen und Logging.',
    pillar2Faq2Q: 'Bezug zu NIST AI RMF?',
    pillar2Faq2A: 'Allow-Lists stützen Govern und Map: beabsichtigte Nutzung und Kontrollen vor Measure/Manage in Produktion definieren.',
    pillar2Back: 'Zurück zum Blog',
    pillarBack: 'Zurück zum Blog',
    card1Title: 'Was ist Agent-Kosten-Zuweisung?',
    card1Body: 'Token auf den Agenten, die Funktion und den Benutzer zuweisen, der sie verbraucht hat — keine Abrechnungsprophezeiung.',
    card2Title: 'Budget-Schutzschranken',
    card2Body: 'Frühwarnungen, wenn eine Agenten-Schleife den Budgetverbrauch übersteigt.',
  },
} as const

export default de as unknown as Messages
