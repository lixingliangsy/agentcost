// locales/it.ts — CostLens full main-path catalog (batch2)
// Batch2 full main-path translations 2026-09-29. Shape mirrors en.ts.

import type { Messages } from '../types'

const it = {
  meta: {
    title: 'CostLens · Trasforma le policy aziendali in regole applicate dagli agent',
    description: 'CostLens legge il testo della policy aziendale e genera controlli invocabili dagli agent più una checklist di conformità, mappata agli obblighi dell’AI Act UE — così la policy diventa eseguibile, non solo un PDF.',
  },
  common: {
    appName: 'CostLens',
    tagline: 'Trasforma le policy aziendali in regole applicate dagli agent',
    microSaas: 'Micro SaaS',
    menu: 'Menu',
  },
  nav: {
    backToHub: 'Torna all’hub',
    home: 'Home',
    features: 'Funzionalità',
    useCases: 'Casi d’uso',
    integrations: 'Integrazioni',
    howItWorks: 'Come funziona',
    studio: 'Studio',
    security: 'Sicurezza',
    pricing: 'Prezzi',
    blog: 'Blog',
    faq: 'FAQ',
    feedback: 'Feedback',
    support: 'Supporto',
    signIn: 'Accedi',
    subscribe: 'Abbonati',
    getStarted: 'Inizia',
  },
  hero: {
    badge: 'Micro SaaS',
    title: 'Trasforma le policy aziendali in regole applicate dagli agent',
    subtitle: 'CostLens legge il testo della policy aziendale e genera controlli invocabili dagli agent più una checklist di conformità, mappata agli obblighi dell’AI Act UE — così la policy diventa eseguibile, non solo un PDF.',
    keyTakeaways: 'Punti chiave',
    takeaway1: 'Trasforma le policy aziendali in regole applicate dagli agent — senza codice.',
    takeaway2: 'Le guardrail si collegano ai workflow degli agent e falliscono in chiusura sulle violazioni.',
    takeaway3: 'Inizia; Pro da 29 $/mese.',
    ctaPrimary: 'Abbonati',
    ctaSecondary: 'Guarda la demo',
    note: 'Nessuna carta di credito · Disdici quando vuoi',
    playDemo: 'Riproduci demo ▶',
    walkthrough: 'Clicca per guardare il tour',
  },
  stats: {
    builders: 'Builder',
    avgRating: 'Valutazione media',
    uptime: 'Uptime',
    timeToValue: 'Tempo al valore',
  },
  pricing: {
    heading: 'Piani semplici che scalano',
    monthly: 'Mensile',
    yearly: 'Annuale',
    perMonth: '/mese',
    mostPopular: 'Più popolare',
    getPro: 'Ottieni Pro',
    orYearly: 'Oppure paga annualmente — ${{amount}}/mese',
    custom: 'Personalizzato',
    contactSales: 'Contatta le vendite',
    configureByok: 'Configura BYOK',
    getStarted: 'Inizia',
    freeForever: 'gratis per sempre',
    billedMonthly: 'fatturato mensilmente',
    save: 'risparmia',
    freeFeat1: 'Esecuzioni IA giornaliere limitate (10/giorno · 50/mese)',
    freeFeat2: 'Demo Studio (nessun costo LLM extra)',
    proFeat1: 'IA inclusa: 300 gen/mese · fair use (gpt-4o-mini)',
    proFeat2: 'Nessun abbonamento ChatGPT separato richiesto',
    proFeat3: 'Supporto prioritario · 2 mesi gratis con annuale',
    entFeat1: 'Posti team · Accesso API (roadmap)',
    entFeat2: 'BYOK opzionale (la tua chiave OpenAI)',
  },
  faq: {
    title: 'Le tue domande, con risposta',
    geoTitle: 'CostLens — domande frequenti',
    items: [
      {
        q: 'Cosa genera CostLens?',
        a: 'Controlli di policy invocabili dagli agent, una checklist di conformità e una mappatura tematica dell’AI Act UE esportabile — flusso simile a un generatore di policy (incolla → genera → revisiona), ma orientato alle guardrail degli agent invece che a una pagina privacy pubblica.',
      },
      {
        q: 'È consulenza legale o una certificazione?',
        a: 'No. Gli output sono bozze di supporto decisionale. Fai revisionare da counsel e risk owner prima della produzione. Non rivendichiamo certificazioni ISO, CMP o di autorità.',
      },
      {
        q: 'Posso disdire in qualsiasi momento?',
        a: 'Sì. I piani self-serve si disdicono quando vuoi; l’accesso continua fino a fine periodo.',
      },
      {
        q: 'Serve una carta di credito per iniziare?',
        a: 'No. Inizia con registrazione email o modalità Demo nello studio, poi fai upgrade quando sei pronto.',
      },
      {
        q: 'Mi serve un abbonamento ChatGPT / OpenAI personale?',
        a: 'No per Free/Pro. Le esecuzioni IA sono incluse nel piano (fair use) con la nostra chiave di piattaforma. Enterprise può opzionalmente portare la propria chiave OpenAI (BYOK) — configurala in /settings (la chiave resta solo lato server).',
      },
      {
        q: 'Cos’è il Fair Use / cosa succede se raggiungo il limite IA?',
        a: 'Pro include circa 300 generazioni IA/mese (più un tetto giornaliero) su gpt-4o-mini. Se raggiungi il limite fair use, Studio restituisce un risultato mock/demo fino al reset giornaliero o mensile — oppure upgrade / Enterprise BYOK per volumi maggiori.',
      },
      {
        q: 'Il checkout è sicuro?',
        a: 'I pagamenti sono elaborati da Waffo Pancake (merchant of record).',
      },
      {
        q: 'Cosa succede dopo il pagamento?',
        a: 'Ricevi conferma di accesso; l’erogazione è tracciata via webhook + log ordini.',
      },
    ],
  
    geoItems: [
      {
        q: 'Cosa produce CostLens?',
        a: 'Una bozza di policy strutturata su tool, dati e percorsi di escalation modificabile.',
      },
      {
        q: 'È consulenza legale?',
        a: 'No. È un aiuto alla redazione. Le policy devono essere riviste da counsel e risk owner.',
      },
      {
        q: 'Come funziona la modalità Demo?',
        a: 'Attiva Demo senza IA live; la modalità live richiede una chiave configurata.',
      },
      {
        q: 'Mappa l’AI Act UE?',
        a: 'I narrativi possono citare temi di governance; non certifica la conformità.',
      },
      {
        q: 'Le policy possono essere versionate?',
        a: 'Le run memorizzano rulesetVersion e runId per il tracking delle modifiche.',
      },
      {
        q: 'Chi dovrebbe usarlo?',
        a: 'Ingegneri di piattaforma e compliance che definiscono guardrail prima della produzione.',
      },
      {
        q: 'In quali paesi/regioni?',
        a: 'Raggiungibile a livello globale; i pagamenti Waffo Pancake possono variare per regione.',
      },
      {
        q: 'È conforme a GDPR/privacy?',
        a: 'Gli input generano solo il tuo output e non vengono mai venduti. Vedi Privacy; Enterprise può includere DPA/NDA.',
      },
      {
        q: 'Quali lingue supporta?',
        a: 'L’UI copre dieci locale. Le bozze seguono la lingua UI se l’IA live è configurata.',
      },
    ],
},
  footer: {
    product: 'Prodotto',
    company: 'Azienda',
    resources: 'Risorse',
    legal: 'Legale',
    about: 'Chi siamo',
    contact: 'Contatto',
    privacy: 'Privacy',
    terms: 'Termini',
    refund: 'Rimborso',
    support: 'Supporto',
    feedback: 'Feedback',
    rights: 'Tutti i diritti riservati.',
    partOfFleet: 'Parte della flotta LX AI Micro-SaaS.',
  },
  signup: {
    title: 'Inizia meglio oggi',
    subtitle: 'Unisciti ai builder che usano CostLens. Prova gratis — nessuna carta.',
    emailPlaceholder: 'Inserisci la tua email',
    saving: 'Salvataggio…',
    cta: 'Inizia',
    trust: 'Affidabile · Disdici quando vuoi',
  },
  feedback: {
    open: 'Feedback',
    title: 'Invia feedback',
    blurb: 'Dicci cosa ha funzionato, cosa si è rotto o cosa vuoi dopo.',
    fullPage: 'Preferisci una pagina intera?',
    openPage: 'Apri /feedback',
    close: 'Chiudi feedback',
    helpful: 'Questo risultato è stato utile?',
    yes: 'Sì',
    no: 'No',
    thanks: 'Grazie per il feedback.',
    commentPlaceholder: 'Commento opzionale di una riga',
    generalTitle: 'Feedback generale',
    generalSub: 'Dicci cosa ne pensi',
    generalPh: 'Cosa ti è piaciuto, non è piaciuto o hai notato usando il prodotto?',
    ideaTitle: 'Ho un’idea',
    ideaSub: 'Suggerisci una funzione o un miglioramento',
    ideaPh: 'Descrivi la tua idea e il problema che risolverebbe…',
    issueTitle: 'Ho trovato un problema',
    issueSub: 'Segnala un bug o un problema',
    issuePh: 'Cosa è successo, cosa ti aspettavi e come possiamo riprodurlo?',
    submit: 'Invia feedback',
    submitting: 'Invio…',
    done: 'Grazie — feedback ricevuto.',
    emailOptional: 'Email (opzionale)',
    category: 'Categoria',
    yourFeedback: 'Il tuo feedback',
    attachment: 'Allegato (opzionale)',

    back: '← Torna al tipo di feedback',
    pickTitle: 'Che feedback hai?',
    pickSub: 'Scegline uno per iniziare. Puoi aggiungere dettagli e una categoria precisa al passo successivo.',
    thanksTitle: 'Grazie per il feedback!',
    thanksBody: 'Lo abbiamo ricevuto e il team farà seguito a breve. Puoi inviare di nuovo quando vuoi.',
    submitAnother: 'Inviane un altro',
    detailed: 'Feedback dettagliato',
    send: 'Invia',
    sending: 'Invio...',
    thanksInline: 'Grazie - registrato. Leggiamo ognuno.',
    errorInline: 'Invio non riuscito ora. Usa il pulsante Feedback o /feedback.',
    inlineCommentPh: 'Una riga: cosa dovremmo migliorare? (opzionale)',
  },
  legal: {
    privacyPolicy: 'Informativa sulla privacy',
    generatePolicy: 'Genera policy',
    controller: 'Titolare',
    processor: 'Responsabile del trattamento',
    processing: 'Trattamento',
    personalData: 'Dati personali',
    dataSubject: 'Interessato',
    dpo: 'Responsabile della protezione dei dati',
    checklist: 'Checklist di conformità',
    policyChecks: 'Controlli di policy',
    encodePolicy: 'Codifica la tua policy',
    definitionTitle: 'CostLens — definizione',
    whatItIs: 'Cos’è',
    whatNotTitle: 'Cosa NON è',
    whatNot1: 'Non è uno studio legale, una piattaforma GRC né un organismo di certificazione ISO.',
    whatNot2: 'Non garantisce che le policy redatte soddisfino ogni autorità o auditor.',
    whatNot3: 'Non è consulenza legale — fai revisionare i pack di policy agent ad alto rischio dal counsel.',
    rolesHint: 'Quando i pack citano ruoli privacy, usiamo le etichette GDPR Art.4: Titolare e Responsabile del trattamento (solo supporto decisionale).',
  },
  benchmark: {
    frameworksEyebrow: 'Mappatura dei framework',
    frameworksTitle: 'Leggi complesse. Pack di policy semplici.',
    frameworksNote: 'Temi di supporto decisionale — non una certificazione, badge CMP o parere legale.',
    fw1: 'EU AI Act',
    fw2: 'NIST AI RMF',
    fw3: 'OWASP LLM Top 10',
    fw4: 'Ruoli GDPR Art.4',
    painEyebrow: 'Perché i pack si bloccano',
    painTitle: 'Le policy cambiano. I gap degli agent emergono tardi.',
    pain1Title: 'Nuove regole, nuovo rischio',
    pain1Body: 'Ogni aggiornamento normativo può lasciare strumenti agent, classi di dati e percorsi di escalation fuori sync.',
    pain2Title: 'Docs vs runtime',
    pain2Body: 'Quando il PDF vive separato dal runtime dell’agent, i punti ciechi emergono in produzione.',
    pain3Title: 'Riscritture manuali',
    pain3Body: 'Modificare a mano le checklist per ogni dominio consuma in silenzio tempo di engineering e conformità.',
    pain4Title: 'Problemi dopo il rilascio',
    pain4Body: 'I gap spesso emergono solo dopo un audit, un incidente o un questionario cliente.',
    getEyebrow: 'Cosa ottieni',
    getTitle: 'Incolla. Genera. Esporta.',
    getLead: 'Deliverable in stile generatore per la governance degli agent — revisiona con counsel prima della produzione.',
    get1Title: 'Controlli di policy',
    get1Body: 'Regole condizione + azione che un runtime agent può valutare.',
    get2Title: 'Checklist di conformità',
    get2Body: 'Doveri leggibili così i owner vedono i gap prima del go-live.',
    get3Title: 'Mappatura AI Act UE',
    get3Body: 'Puntatori tematici per obblighi ad alto rischio — non certificazione di conformità.',
    get4Title: 'Regole esportabili',
    get4Body: 'Output strutturato da collegare a guardrail o middleware.',
    featuresEyebrow: 'Perché CostLens',
    featuresTitle: 'Tutto il necessario per codificare pack di policy',
    featuresBlurb: 'Per team di piattaforma e conformità che servono controlli applicabili senza curva di apprendimento.',
    howTitle: 'Dal testo di policy a controlli applicabili in 3 passi',
    how1Title: 'Incolla',
    how1Body: 'Incolla il testo della policy aziendale e scegli un dominio (Finance, HR, Safety, General).',
    how2Title: 'Genera',
    how2Body: 'Crea controlli invocabili dagli agent più checklist di conformità e temi di framework.',
    how3Title: 'Collega',
    how3Body: 'Esporta le regole nel runtime dell’agent; tieni gli umani per eccezioni e revisione legale.',
    allPlansTitle: 'Tutti i piani a pagamento includono',
    allPlans1: 'Studio da policy a regole',
    allPlans2: 'Esportazione checklist di conformità',
    allPlans3: 'Mappatura tematica AI Act UE (supporto decisionale)',
    allPlans4: 'Supporto email sui piani a pagamento — nessun extra nascosto per l’uso core dello studio',
    honestyTitle: 'Limiti onesti',
    honestyLead: 'Come un generatore professionale di policy, CostLens è un aiuto di redazione: personalizza, revisiona e aggiorna con il tuo counsel.',
    ctaStudio: 'Apri studio',
  },
  home: {
    whyEyebrow: 'Perché {{name}}',
    featuresHeading: 'Tutto il necessario per applicare la policy degli agent',
    featuresCardBlurb: 'Per ingegneri di conformità e piattaforma che servono regole agent applicabili senza curva di apprendimento.',
    howHeading: 'Dal testo di policy a regole applicabili in 3 passi',
    how1Title: 'Incolla policy',
    how1Desc: 'Inserisci policy aziendale, allow-list di tool o runbook degli agent.',
    how2Title: 'Compila regole',
    how2Desc: 'Controlli deterministici più pack di policy assistiti da modello.',
    how3Title: 'Applica',
    how3Desc: 'Esporta regole pronte per l’agent con citazioni e audit trail.',
    studioEyebrow: 'Studio live',
    studioHeading: 'Provalo in questa pagina',
    studioWatchDemo: 'Guarda la demo',
    studioOrRun: 'oppure esegui un controllo qui sotto.',
    studioFormTitle: 'Controllo policy agent',
    demoMode: 'Modalità demo (non IA live)',
    socialHeading: 'Scelto dagli ingegneri di conformità',
    socialNote: 'La social proof usa modelli finché non esistono testimonianze reali e consensite. Di fiducia per [X]+ team di conformità e piattaforme agent.',
    quickAnswers: 'Risposte rapide',
    howCompares: 'Confronto',
    dimension: 'Dimensione',
    manual: 'Manuale',
    whenNotToUse: 'Quando non usarlo:',
    peopleAlsoSearch: 'Le persone cercano anche',





































































































































    leadsInbox: "Inbox lead (CRUD demo)",
    filterEmail: "Filtra email…",
    allPlans: "Tutti i piani",
    noLeads: "Nessun lead — invia il modulo di iscrizione.",
    colEmail: "Email",
    colPlan: "Piano",
    colSource: "Fonte",
    delete: "Elimina",
    deleteLeadTitle: "Elimina lead",
    deleteLeadWarn: "Questa azione non può essere annullata.",
    deleteLeadBody: "Eliminare questo lead? L'email sarà rimossa definitivamente dai contatti.",
    cancel: "Annulla",
    relatedReading: "Letture correlate",
    productTour: "Tour del prodotto",
    productDemo: "DEMO PRODOTTO",
    stepOf: "passo {{n}}/{{total}}",
    replay: "Ripeti",
    tryStudio: "Prova studio",
    leadsCount: "{{n}} lead",
    leadsFiltered: "{{n}} filtrati",
    geoCmpDim: "Dimensione",
    geoCmpManual: "Manuale",
    geoCmp1Dim: "Velocità",
    geoCmp1Manual: "Ore o giorni",
    geoCmp1Tool: "Minuti per esecuzione",
    geoCmp2Dim: "Coerenza",
    geoCmp2Manual: "Varia per persona",
    geoCmp2Tool: "Stesso set di regole ogni volta",
    geoCmp3Dim: "Output",
    geoCmp3Manual: "Testo libero",
    geoCmp3Tool: "Risultato strutturato ed esportabile",
    geoCmp4Dim: "Ideale per",
    geoCmp4Manual: "Approvazione finale",
    geoCmp4Tool: "Supporto decisionale di primo passaggio",
    related1Title: "AI wrapper vs fossato",
    related1Desc: "l'applicazione delle policy come un fossato durevole.",
    related2Title: "elenco di controllo per la conformità all'EU AI Act",
    related2Desc: "mappa i doveri degli agenti ai temi dell'Act.",
    related3Title: "lancio di Wave 1",
    related3Desc: "CostLens viene fornito con il cluster di governance.",
    feat1: "Policy-to-regole",
    feat2: "Elenco di controllo per la conformità",
    feat3: "Mappatura dell'EU AI Act",
    feat4: "Regole esportabili",
    geoQa1: "Policy-to-regole",
    geoQa2: "Elenco di controllo per la conformità",
    geoQa3: "Mappatura dell'EU AI Act",
    geoQa4: "Regole esportabili",
    geoQa5: "I prezzi partono da $0 (Gratuito).",
    geoLt1: "Cos'è CostLens",
    geoLt2: "Come funziona CostLens",
    geoLt3: "Quanto costa CostLens",
    geoLt4: "CostLens è gratuito",
    geoLt5: "CostLens vs farlo manualmente",
    geoWhenNot: "Utilizza invece una revisione umana qualificata — è un ausilio alla redazione. Le policy devono essere esaminate dal tuo consulente e dai responsabili del rischio.",
    demo1Title: "Benvenuto in {{name}}",
    demo1Detail: "Un tour di 60 secondi su come {{name}} trasforma le policy in controlli per gli agenti.",
    demo2Title: "Apri lo studio live",
    demo2Detail: "Incolla il testo della policy e scegli un dominio.",
    demo3Title: "Clicca su Genera controlli",
    demo3Detail: "Alimentato da policy-to-regole e elenchi di controllo per la conformità.",
    demo4Title: "Anteprima dei controlli delle policy",
    demo4Detail: "Esempio di output dalla pipeline basata su regole di questo prodotto:",
    demo4DetailEmpty: "I tuoi controlli delle policy appariranno qui — copia o raffina.",
    demo5Title: "Il tuo turno",
    demo5Detail: "Prova lo studio live, oppure inizia con {{name}}.",
  },
  chat: {
    typing: 'L’assistente sta scrivendo…',
    placeholder: 'Scrivi la tua domanda… (Invio per inviare)',
    send: 'Invia',
    openAria: 'Apri assistente IA',
    openTitle: 'Chiedi al nostro assistente IA',
    closeAria: 'Chiudi',
    escalated: 'Ti abbiamo collegato a un agente umano. Daremo seguito via email.',
    s1: 'Cosa fa questo strumento?',
    s2: 'Quanto costa?',
    s3: 'C’è un piano gratuito?',
  },
  pages: {
    howTitle: 'CostLens — Come funziona',
    howDesc: 'Come funziona CostLens in tre passaggi.',
    howEyebrow: 'Come funziona',
    howH1: 'Dall’input al risultato in 3 passaggi',
    how1Title: 'Incolla',
    how1Body: 'Incolla il testo della policy e scegli il dominio.',
    how2Title: 'Codifica',
    how2Body: 'Genera controlli richiamabili dall’agent e una checklist di conformità.',
    how3Title: 'Applica',
    how3Body: 'Collega le regole al runtime dell’agent; tieni gli umani per le eccezioni.',
    subscribe: 'Abbonati',
    ucTitle: 'CostLens — Casi d’uso',
    ucDesc: 'Come CostLens aiuta i team di conformità e le piattaforme agent.',
    ucEyebrow: 'Casi d’uso',
    ucH1: 'Pensato per conformità e piattaforme agent',
    ucIntro: 'Scegli il tuo segmento per vedere i workflow che contano di più.',
    uc1Title: 'Policy finanziarie',
    uc1Pain: 'Rimborsi e approvazioni devono essere verificabili dalla macchina.',
    uc1Help: 'Estrai condizioni + azioni che gli agent possono valutare.',
    uc2Title: 'Policy HR / safety',
    uc2Pain: 'Servono checklist richiamabili dagli agent.',
    uc2Help: 'Il selettore di dominio focalizza l’estrazione.',
    uc3Title: 'Funzioni IA UE',
    uc3Pain: 'Mappare regole ad alto rischio ai temi del regolamento IA.',
    uc3Help: 'Solo mapping di supporto decisionale.',
    uc4Title: 'Team di piattaforma',
    uc4Pain: 'I PDF di policy non raggiungono mai il runtime.',
    uc4Help: 'Regole esportabili per tool agent.',
    painLabel: 'Dolore:',
    helpLabel: 'Come aiuta CostLens:',
    ucRefs: 'Riferimenti: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    intTitle: 'CostLens — Integrazioni',
    intDesc: 'Destinazioni di export, API e opzioni BYOK di CostLens.',
    intEyebrow: 'Integrazioni',
    intH1: 'Collegati al tuo stack',
    intIntro: 'Solo integrazioni oneste. Non pubblicizziamo connettori non ancora spediti.',
    int1Title: 'Regole esportabili',
    int1Body: 'Export JSON/checklist per tool agent.',
    int2Title: 'API',
    int2Body: 'Rigenera quando le policy cambiano.',
    int3Title: 'Mapping regolamento IA UE',
    int3Body: 'Puntatori per temi ad alto rischio.',
    int4Title: 'BYOK',
    int4Body: 'Chiavi solo server-side quando offerte.',
    intHonesty: 'Nota di onestà: l’enforcement a runtime è compito del tuo sistema; noi generiamo controlli candidati.',
    secTitle: 'CostLens — Sicurezza e conformità',
    secDesc: 'Come CostLens tratta i tuoi dati e la sua postura di conformità onesta.',
    secEyebrow: 'Sicurezza e conformità',
    secH1: 'I tuoi dati, la nostra postura',
    secIntro: 'CostLens elabora gli input che invii per l’analisi. Questa pagina dice chiaramente cosa trattiamo e cosa non rivendichiamo.',
    secHandleH2: 'Cosa trattiamo',
    secHandleBody: 'testo di policy aziendale e selezioni di dominio usati per generare controlli eseguibili dall’agent.',
    secDataH2: 'Impegni sul trattamento dei dati',
    secData1: 'Gli invii passano nella pipeline prodotto e sono conservati solo quanto serve al tuo audit log (piani a pagamento) o fino all’eliminazione dell’esecuzione.',
    secData2: 'Applichiamo controlli di accesso coerenti con il GDPR Art. 32 quando si trattano dati personali.',
    secData3: 'Le chiavi BYOK (Enterprise), quando offerte, sono memorizzate solo server-side e mai esposte al browser.',
    secHonesty: 'Regola di onestà: CostLens trasforma il testo di policy in regole candidate. Non garantiamo enforcement corretto, copertura al 100% né che gli agent non perdano mai una violazione.',
    secPostureH2: 'La nostra postura di conformità',
    secPosture1: 'CostLens è supporto decisionale, non uno studio legale, una clinica o un auditor certificato.',
    secPosture2: 'Per un parere vincolante, consulta un professionista qualificato del dominio.',
    secSubH2: 'Subincaricatari e pagamenti',
    secSub1: 'I pagamenti sono elaborati da Waffo Pancake (merchant of record).',
    secSub2: 'Vedi Privacy e Terms per le condizioni complete.',
    secRefs: 'Riferimenti: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    backHome: 'Torna alla home',
  },
  blog: {
    metaTitle: 'CostLens — Blog',
    metaDesc: 'Post definizionali e how-to su policy-as-code, regole applicate dagli agent, mapping del regolamento IA UE e checklist di conformità.',
    glanceTitle: 'Cosa include questo prodotto a colpo d’occhio?',
    glance1: 'Definizione in linguaggio chiaro, FAQ e riferimenti per answer engine',
    glance2: '3 passaggi di workflow revisionabili (input → genera → review)',
    glance3: 'Output di supporto decisionale — resti nel loop; nessun conteggio utenti inventato',
    eyebrow: 'Blog · GEO',
    h1: 'Policy-as-code, spiegato',
    lead: 'Padroneggia le domande definitorie prima di trasformare una policy aziendale in qualcosa che un agent applica davvero.',
    targetQuery: 'Query target:',
    guidesTitle: 'Quali deep-dive GEO leggere per prime?',
    guidesLead: 'Spiegazioni lunghe e citate. Ognuna porta 3+ fonti autorevoli su regolamento IA UE / AI governance e un disclaimer di supporto decisionale.',
    footerNote: 'Publish + syndicate secondo gtm-launch (IH + indici GEO). Ogni post porta 3 ref autorevoli.',
    post1Title: 'Policy pack per agent IA e NIST AI RMF',
    post1Desc: 'Come i policy pack si mappano sulle funzioni NIST AI RMF e sui temi del regolamento IA UE — supporto decisionale, non un certificato.',
    post2Title: 'Tool consentiti vs agent aperti',
    post2Desc: 'Perché limitare l’accesso ai tool è un controllo, non un feature toggle — con regole di onestà per agent aperti.',
    readI18n: 'Leggi versione multilingue',
    readEnHtml: 'Leggi articolo inglese completo',
    pillarSlug: 'ai-agent-policy-packs-nist-rmf-2026',
    pillarEyebrow: 'di CostLens (LX AI)',
    pillarH1: 'Policy pack per agent IA e NIST AI RMF',
    pillarLead: 'I policy pack trasformano regole aziendali in controlli richiamabili dall’agent. Allineati alle funzioni NIST AI RMF e ai temi del regolamento IA UE, sono supporto decisionale — non un certificato di conformità.',
    pillarH2a: 'Cosa contiene un policy pack',
    pillarPa1: 'Un pack è un insieme di regole condizione+azione estratte dal testo di policy, più una checklist che mappa regole ad alto rischio su aspettative di supervisione e logging. Gli agent valutano a runtime; gli umani gestiscono le eccezioni.',
    pillarH2b: 'Allineamento NIST AI RMF',
    pillarPb1: 'Govern: ownership di quali policy devono vincolare gli agent. Map: inventario di tool e dati. Measure: registra le decisioni di policy. Manage: scala quando una regola blocca o serve human approval.',
    pillarH2c: 'Punti di contatto del regolamento IA UE',
    pillarPc1: 'Per usi ad alto rischio Allegato III, doveri del deployer come Art. 9 e Art. 14 possono essere evidenziabili con controlli di policy — non sostituiscono la valutazione di conformità.',
    pillarH2d: 'Confine di onestà',
    pillarPd1: 'CostLens redige regole candidate. Cablaggio, qualità di enforcement e conformità legale restano tua responsabilità. Nessun claim di garanzia / 100% / never-miss.',
    pillarDisclaimer: 'Solo supporto decisionale — non consulenza legale e non un certificato di conformità.',
    pillarFaq1Q: 'Un policy pack certifica la conformità al regolamento IA UE?',
    pillarFaq1A: 'No. Aiuta a evidenziare controlli; la conformità resta responsabilità dell’organizzazione che fa deploy sull’intero sistema.',
    pillarFaq2Q: 'Come si collega a NIST AI RMF?',
    pillarFaq2A: 'Le funzioni RMF danno un vocabolario di governance e misura; i pack operazionalizzano controlli che gli agent possono richiamare in quelle funzioni.',
    pillar2Slug: 'allowed-tools-vs-open-ended-agents-2026',
    pillar2Eyebrow: 'Design dei guardrail',
    pillar2H1: 'Tool consentiti vs agenti aperti',
    pillar2Lead: 'Perché le allow-list falliscono chiuse in modo più sicuro degli agenti aperti — e come i policy pack codificano quei limiti in check runtime.',
    pillar2H2a: 'Gli agenti aperti amplificano il blast radius',
    pillar2Pa1: 'Scelta tool illimitata + memoria lunga: un’iniezione di prompt può concatenare email, codice ed esfiltrazione.',
    pillar2H2b: 'Allow-list come deny-by-default',
    pillar2Pb1: 'Elenca tool, argomenti e destinazioni ammessi. Il resto fallisce chiuso — allineato a NIST AI RMF Govern/Map.',
    pillar2H2c: 'Codificare la policy come check',
    pillar2Pc1: 'Trasforma la prosa in check invocabili: scope tool, classi di dati, owner di escalation e campi di audit.',
    pillar2H2d: 'Quando l’apertura resta adatta',
    pillar2Pd1: 'Sandbox di ricerca senza credenziali di produzione possono allargare i tool — isolate dai percorsi dati cliente.',
    pillar2Disclaimer: 'Bozze di supporto decisionale. Non è consulenza legale né certificazione.',
    pillar2Faq1Q: 'Basta un’allow-list?',
    pillar2Faq1A: 'No. Abbina validazione argomenti, approvazione umana per azioni irreversibili e logging.',
    pillar2Faq2Q: 'Legame con NIST AI RMF?',
    pillar2Faq2A: 'Le allow-list supportano Govern e Map: definire uso previsto e controlli prima di Measure/Manage in produzione.',
    pillar2Back: 'Torna al blog',
    pillarBack: 'Torna al blog',
    card1Title: 'Che cos’è il policy-as-code?',
    card1Body: 'Il policy-as-code esprime una policy aziendale come regole verificabili dalla macchina che un agent valuta a runtime — ad es. se rimborso > $50 allora richiedi manager_approval. Supporto decisionale, non un parere legale né un certificato.',
    card2Title: 'Trasformare la policy aziendale in regole applicate dall’agent',
    card2Body: 'Estrai ogni frase come condizione + azione, mappa le regole ad alto rischio sui temi del regolamento IA UE (Art. 9, 14, 26) ed esporta un file di regole che l’agent valuta a ogni run. Le regole sono una vista dei tuoi obblighi, non una garanzia di conformità.',
  },
} as const

export default it as unknown as Messages
