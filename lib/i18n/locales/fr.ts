// locales/fr.ts — CostLens French catalog (mirrors en.ts shape).
// Terms: Générer une politique / politique de confidentialité (iubenda FR);
// responsable du traitement / sous-traitant / traitement (RGPD Art.4).

import type { Messages } from '../types'

const fr = {
  meta: {
    title: 'CostLens · Voir où les agents IA dépensent',
    description:
      'Attribuer le coût d\'inférence LLM et agentcost à l\'agent, la fonctionnalité et l\'utilisateur qui le déclenche — avec des garde-fous budgétaires.',
  },
  common: {
    appName: 'CostLens',
    tagline: 'Voyez exactement où vos agents AI dépensent de l\'argent',
    microSaas: 'Micro SaaS',
    menu: 'Menu',
  },
  nav: {
    backToHub: 'Retour au hub',
    home: 'Accueil',
    features: 'Fonctionnalités',
    useCases: 'Cas d’usage',
    integrations: 'Intégrations',
    howItWorks: 'Comment ça marche',
    studio: 'Studio',
    security: 'Sécurité',
    pricing: 'Tarifs',
    blog: 'Blog',
    faq: 'FAQ',
    feedback: 'Feedback',
    support: 'Support',
    signIn: 'Connexion',
    subscribe: 'S’abonner',
    getStarted: 'Commencer',
  },
  hero: {
    badge: 'Micro SaaS',
    title: 'Transformer la politique d’entreprise en règles appliquées par agents',
    subtitle:
      'Rejoignez les concepteurs qui utilisent CostLens. Gratuit à essayer — pas de carte nécessaire.',
    keyTakeaways: 'Points clés',
    takeaway1: 'Attribution du coût de token par agent, fonctionnalité et utilisateur.',
    takeaway2: 'Garde-fous budgétaires par agent avec avertissements précoces.',
    takeaway3: 'Honnêteté : prise en charge de décision FinOps — pas un certificat de facturation ou de garantie de coût.',
    ctaPrimary: 'S’abonner',
    ctaSecondary: 'Voir la démo',
    note: 'Sans carte bancaire · Résiliation à tout moment',
    playDemo: 'Lancer la démo ▶',
    walkthrough: 'Cliquez pour la visite guidée',
  },
  stats: {
    builders: 'Builders',
    avgRating: 'Note moyenne',
    uptime: 'Disponibilité',
    timeToValue: 'Délai de valeur',
  },
  pricing: {
    heading: 'Des offres simples qui évoluent',
    monthly: 'Mensuel',
    yearly: 'Annuel',
    perMonth: '/mois',
    mostPopular: 'Le plus populaire',
    getPro: 'Obtenir Pro',
    orYearly: 'Ou payer à l’année — ${{amount}}/mois',
    custom: 'Sur mesure',
    contactSales: 'Contacter les ventes',
    configureByok: 'Configurer BYOK',
    getStarted: 'Commencer',
    freeForever: 'gratuit pour toujours',
    billedMonthly: 'facturé mensuellement',
    save: 'économiser',
    freeFeat1: 'Exécutions IA limitées (10/jour · 50/mois)',
    freeFeat2: 'Démo Studio (sans frais LLM supplémentaires)',
    proFeat1: 'IA incluse : 300 générations/mois · usage équitable (gpt-4o-mini)',
    proFeat2: 'Pas d’abonnement ChatGPT séparé requis',
    proFeat3: 'Support prioritaire · 2 mois offerts en annuel',
    entFeat1: 'Sièges équipe · accès API (feuille de route)',
    entFeat2: 'BYOK optionnel (votre clé OpenAI)',
  },
  faq: {
    title: 'Vos questions, nos réponses',
    geoTitle: 'CostLens — questions fréquentes',
    items: [
      {
        q: 'Que suit CostLens?',
        a: 'Le coût d\'inférence du LLM et de l\'agent attribué aux agents, fonctionnalités et utilisateurs - avec des garde-fous budgétaires. Support de décision, et non certificat de facturation.',
      },
      {
        q: 'Est-ce un avis juridique ou une certification ?',
        a: 'Non. Les sorties sont une aide à la décision. Faites-les revoir par un conseil et les propriétaires du risque avant production. Nous ne revendiquons aucune certification ISO, CMP ou régulateur.',
      },
      {
        q: 'Puis-je résilier à tout moment ?',
        a: 'Oui. Les offres en libre-service se résilient à tout moment ; l’accès continue jusqu’à la fin de la période.',
      },
      {
        q: 'Faut-il une carte bancaire pour commencer ?',
        a: 'Non. Inscrivez-vous par e-mail ou utilisez le mode Démo du studio, puis passez à une offre supérieure quand vous êtes prêt.',
      },
      {
        q: 'Ai-je besoin de mon propre abonnement ChatGPT / OpenAI ?',
        a: 'Non pour Free/Pro. Les exécutions IA sont incluses (usage équitable) via notre clé plateforme. Enterprise peut apporter sa propre clé OpenAI (BYOK) sur /settings (clé côté serveur uniquement).',
      },
      {
        q: 'Qu’est-ce que l’usage équitable / si je touche la limite IA ?',
        a: 'Pro inclut environ 300 générations IA/mois (et un plafond quotidien) sur gpt-4o-mini. En cas de limite, Studio renvoie un résultat mock/démo jusqu’au reset — ou passez à une offre supérieure / BYOK Enterprise.',
      },
      {
        q: 'Le paiement est-il sécurisé ?',
        a: 'Les paiements sont traités par Waffo Pancake (commerçant responsable).',
      },
      {
        q: 'Que se passe-t-il après le paiement ?',
        a: 'Vous recevez une confirmation d’accès ; l’exécution est suivie via webhook et journaux de commande.',
      },
    ],
  
    geoItems: [
      { q: 'Quels signaux?', a: 'Utilisation de jetons cartographiée à l\'agent, à la fonctionnalité et à l\'utilisateur.' },
      { q: 'Remplace-t-il votre facture?', a: 'Non. Attribution de prise de décision - pas de garantie de facturation.' },
      { q: 'Alertes de budget?', a: 'Gardiens par agent avec avertissements précoces avant que les boucles n\'épuisent les dépenses.' },
      { q: 'Démo vs live?', a: 'La démo est étiquetée ; le récit en direct nécessite une clé IA configurée.' },
      { q: 'Pour qui est-ce?', a: 'Équipes de plateforme et FinOps qui expédient des piles multi-agents.' },
      { q: 'Sources principales?', a: 'Notes de pratique d\'attribution de jetons LLM FinOps.' },
    ],
},
  footer: {
    product: 'Produit',
    company: 'Entreprise',
    resources: 'Ressources',
    legal: 'Mentions légales',
    about: 'À propos',
    contact: 'Contact',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    refund: 'Remboursement',
    support: 'Support',
    feedback: 'Feedback',
    rights: 'Tous droits réservés.',
    partOfFleet: 'Fait partie de la flotte LX AI Micro-SaaS.',
  },
  signup: {
    title: 'Commencez plus intelligemment dès aujourd’hui',
    subtitle: 'Rejoignez les builders qui utilisent CostLens. Essai gratuit — sans carte.',
    emailPlaceholder: 'Entrez votre e-mail',
    saving: 'Enregistrement…',
    cta: 'Commencer',
    trust: 'Fiable · Résiliation à tout moment',
  },
  feedback: {
    open: 'Feedback',
    title: 'Envoyer un feedback',
    blurb: 'Dites-nous ce qui a fonctionné, ce qui a cassé, ou ce que vous voulez ensuite.',
    fullPage: 'Préférez une page entière ?',
    openPage: 'Ouvrir /feedback',
    close: 'Fermer le feedback',
    helpful: 'Ce résultat vous a-t-il été utile ?',
    yes: 'Oui',
    no: 'Non',
    thanks: 'Merci pour votre feedback.',
    commentPlaceholder: 'Commentaire d’une ligne (optionnel)',
    generalTitle: 'Feedback général',
    generalSub: 'Dites-nous ce que vous en pensez',
    generalPh: 'Qu’avez-vous aimé, détesté ou remarqué ?',
    ideaTitle: 'J’ai une idée',
    ideaSub: 'Suggérer une fonctionnalité ou une amélioration',
    ideaPh: 'Décrivez votre idée et le problème qu’elle résoudrait…',
    issueTitle: 'J’ai trouvé un problème',
    issueSub: 'Signaler un bug ou un incident',
    issuePh: 'Que s’est-il passé, qu’attendiez-vous, et comment reproduire ?',
    submit: 'Envoyer le feedback',
    submitting: 'Envoi…',
    done: 'Merci — feedback reçu.',
    emailOptional: 'E-mail (optionnel)',
    category: 'Catégorie',
    yourFeedback: 'Votre feedback',
    attachment: 'Pièce jointe (optionnel)',

    back: '← Retour au type de feedback',
    pickTitle: 'Quel feedback avez-vous ?',
    pickSub: 'Choisissez une option. Détails et catégorie au prochain étape.',
    thanksTitle: 'Merci pour votre feedback !',
    thanksBody: 'Nous l’avons reçu et l’équipe répondra bientôt. Vous pouvez renvoyer à tout moment.',
    submitAnother: 'Envoyer un autre',
    detailed: 'Feedback détaillé',
    send: 'Envoyer',
    sending: 'Envoi...',
    thanksInline: 'Merci — enregistré. Nous lisons chaque retour.',
    errorInline: 'Envoi impossible pour le moment. Utilisez le bouton Feedback ou /feedback.',
    inlineCommentPh: 'Une ligne : que faut-il améliorer ? (optionnel)',
  },
  legal: {
    privacyPolicy: 'Politique de confidentialité',
    generatePolicy: 'Générer une politique',
    controller: 'Responsable du traitement',
    processor: 'Sous-traitant',
    processing: 'Traitement',
    personalData: 'Données personnelles',
    dataSubject: 'Personne concernée',
    dpo: 'Délégué à la protection des données',
    checklist: 'Checklist de conformité',
    policyChecks: 'Contrôles de politique',
    encodePolicy: 'Encoder votre politique',
    definitionTitle: 'CostLens — définition',
    whatItIs: 'De quoi il s’agit',
    whatNotTitle: 'Ce que ce n’est PAS',
    whatNot1: 'Ni un cabinet d’avocats, ni une plateforme GRC, ni un organisme de certification ISO.',
    whatNot2: 'Aucune garantie que les politiques rédigées satisferont chaque régulateur ou auditeur.',
    whatNot3: 'Pas un avis juridique — faites revoir les packs de politique agents à enjeux élevés par un conseil.',
    rolesHint:
      'Lorsque les packs mentionnent des rôles privacy, nous utilisons les libellés RGPD art. 4 : responsable du traitement et sous-traitant (aide à la décision uniquement).',
  },
  benchmark: {
    frameworksEyebrow: 'Cartographie des cadres',
    frameworksTitle: 'Lois complexes. Packs de politique simples.',
    frameworksNote:
      'Thèmes d’aide à la décision — pas une certification, un badge CMP, ni un avis juridique.',
    fw1: 'Règlement UE sur l’IA',
    fw2: 'NIST AI RMF',
    fw3: 'OWASP LLM Top 10',
    fw4: 'Rôles RGPD art. 4',
    painEyebrow: 'Pourquoi les factures d\'agent surprennent',
    painTitle: 'Les agents bouclent. Les budgets disparaissent.',
    pain1Title: 'Nouvelles règles, nouveau risque',
    pain1Body: 'Chaque mise à jour réglementaire peut désynchroniser outils d’agents, classes de données et escalades.',
    pain2Title: 'Docs vs runtime',
    pain2Body: 'Quand le PDF vit à part du runtime agent, les angles morts apparaissent en production.',
    pain3Title: 'Réécritures manuelles',
    pain3Body: 'Éditer des checklists à la main pour chaque domaine consomme le temps eng. et conformité.',
    pain4Title: 'Problèmes après mise en prod',
    pain4Body: 'Les écarts surgissent souvent après un audit, un incident ou un questionnaire client.',
    getEyebrow: 'Ce que vous obtenez',
    getTitle: 'Ingestion. Attribution. Protection.',
    getLead:
      'Prise en charge décisionnelle FinOps — pas un certificat de facturation.',
    get1Title: 'Contrôles de politique',
    get1Body: 'Règles condition + action qu’un runtime agent peut évaluer.',
    get2Title: 'Checklist de conformité',
    get2Body: 'Devoirs lisibles pour que les owners voient les écarts avant le go-live.',
    get3Title: 'Mapping règlement UE sur l’IA',
    get3Body: 'Pointeurs thématiques pour obligations à haut risque — pas une certification de conformité.',
    get4Title: 'Règles exportables',
    get4Body: 'Sortie structurée à brancher dans des garde-fous ou un middleware.',
    featuresEyebrow: 'Pourquoi CostLens',
    featuresTitle: 'Tout ce dont vous avez besoin pour les FinOps d\'agent',
    featuresBlurb: 'Conçu pour les équipes de plateforme qui ont besoin de clarté de dépenses sans surestimation.',
    howTitle: 'CostLens — Fonctionnement',
    how1Title: 'Coller',
    how1Body: 'Collez le texte de la politique et choisissez le domaine.',
    how2Title: 'Encoder',
    how2Body: 'Générez des vérifications appelables par agent et une liste d\'erreurs de validation.',
    how3Title: 'Faire respecter',
    how3Body: 'Connectez les règles à votre runtime d\'agent ; gardez les humains pour les exceptions.',
    allPlansTitle: 'Tous les plans payants incluent',
    allPlans1: 'Studio policy-to-rules',
    allPlans2: 'Export de la checklist de conformité',
    allPlans3: 'Mapping thématique au règlement UE sur l’IA (aide à la décision)',
    allPlans4: 'Support e-mail sur les plans payants — pas d’add-ons cachés pour le studio de base',
    honestyTitle: 'Limites honnêtes',
    honestyLead:
      'CostLens attribue les dépenses. Pas de certificat de facturation ou de garantie de coût.',
    ctaStudio: 'Ouvrir le studio',
  },
  home: {
    whyEyebrow: 'Pourquoi {{name}}',
    featuresHeading: 'Tout ce dont vous avez besoin pour l\'attribution de jetons',
    featuresCardBlurb: 'Conçu pour les grands livres et les garde-fous sans garanties de facturation.',
    howHeading: 'De l\'exécution à la transparence des dépenses en 3 étapes',
    how1Title: 'Coller la politique',
    how1Desc: 'Jetons + ids d\'agentcost.',
    how2Title: 'Compiler les règles',
    how2Desc: 'Lignes de ledger Waffo pour BYOK avec LLM et CostLens.',
    how3Title: 'Appliquer',
    how3Desc: 'FinOps possède l\'action.',
    studioEyebrow: 'Studio en direct',
    studioHeading: 'Essayez sur cette page',
    studioWatchDemo: 'Voir la démo',
    studioOrRun: 'ou lancez un contrôle ci-dessous.',
    studioFormTitle: 'Vérification de la politique d\'agent',
    demoMode: 'Mode démo (pas d’IA live)',
    socialHeading: 'Fait confiance par les ingénieurs de conformité',
    quickAnswers: 'Réponses rapides',
    howCompares: 'Comparaison',
    dimension: 'Dimension',
    manual: 'Manuel',
    whenNotToUse: 'Quand ne pas l’utiliser :',
    peopleAlsoSearch: 'Recherches associées',
    socialNote: 'Les preuves sociales utilisent des modèles jusqu\'à ce que des témoignages réels et consentis existent. Fait confiance par [X]+ équipes de conformité et de plateformes d\'agents.',





































































































































    leadsInbox: "Boîte leads (CRUD démo)",
    filterEmail: "Filtrer l'e-mail…",
    allPlans: "Tous les forfaits",
    noLeads: "Aucun lead — envoyez le formulaire d'inscription.",
    colEmail: "E-mail",
    colPlan: "Forfait",
    colSource: "Source",
    delete: "Supprimer",
    deleteLeadTitle: "Supprimer le lead",
    deleteLeadWarn: "Cette action est irréversible.",
    deleteLeadBody: "Supprimer ce lead ? L'e-mail sera retiré définitivement de vos contacts.",
    cancel: "Annuler",
    relatedReading: "Lectures associées",
    productTour: "Visite produit",
    productDemo: "DÉMO PRODUIT",
    stepOf: "étape {{n}}/{{total}}",
    replay: "Rejouer",
    tryStudio: "Essayer le studio",
    leadsCount: "{{n}} leads",
    leadsFiltered: "{{n}} filtrés",
    geoCmpDim: "Dimension",
    geoCmpManual: "Manuel",
    geoCmp1Dim: "Vitesse",
    geoCmp1Manual: "Heures à jours",
    geoCmp1Tool: "Minutes par exécution",
    geoCmp2Dim: "Cohérence",
    geoCmp2Manual: "Varie selon la personne",
    geoCmp2Tool: "Même jeu de règles à chaque fois",
    geoCmp3Dim: "Sortie",
    geoCmp3Manual: "Texte libre",
    geoCmp3Tool: "Résultat structuré et exportable",
    geoCmp4Dim: "Idéal pour",
    geoCmp4Manual: "Validation finale",
    geoCmp4Tool: "Aide à la décision de premier passage",
    related1Title: "Enveloppe IA vs fossé",
    related1Desc: "l'application de la politique comme un fossé durable.",
    related2Title: "liste de contrôle de conformité au EU AI Act",
    related2Desc: "mapper les devoirs des agents aux thèmes de l'Acte",
    related3Title: "lancement de Wave 1",
    related3Desc: "CostLens est fourni avec le cluster de gouvernance",
    feat1: "Politique vers règles",
    feat2: "Liste de contrôle de conformité",
    feat3: "cartographie EU AI Act",
    feat4: "Règles exportables",
    geoQa1: "Politique vers règles",
    geoQa2: "Liste de contrôle de conformité",
    geoQa3: "cartographie EU AI Act",
    geoQa4: "Règles exportables",
    geoQa5: "Les tarifs commencent à $0 (Free).",
    geoLt1: "Qu'est-ce qu'CostLens ?",
    geoLt2: "Comment fonctionne CostLens ?",
    geoLt3: "Combien coûte CostLens ?",
    geoLt4: "CostLens est-il gratuit ?",
    geoLt5: "CostLens vs faire cela manuellement",
    geoWhenNot: "Utilisez plutôt une revue humaine qualifiée — c'est une aide à la rédaction. Les politiques doivent être examinées par votre conseiller juridique et les responsables des risques.",
    demo1Title: "Bienvenue sur {{name}}",
    demo1Detail: "Une visite guidée de 60 secondes montrant comment {{name}} transforme les politiques en contrôles d'agent.",
    demo2Title: "Ouvrez le studio en direct",
    demo2Detail: "Collez le texte de la politique et choisissez un domaine.",
    demo3Title: "Cliquez sur Generate checks",
    demo3Detail: "Alimenté par la conversion politique en règles et les listes de contrôle de conformité.",
    demo4Title: "Aperçu des contrôles de politique",
    demo4Detail: "Exemple de sortie du pipeline basé sur des règles de ce produit :",
    demo4DetailEmpty: "Vos contrôles de politique apparaissent ici — copiez ou affinez.",
    demo5Title: "À vous de jouer",
    demo5Detail: "Essayez le studio en direct, ou commencez avec {{name}}.",
  },
  chat: {
    typing: 'L’assistant écrit…',
    placeholder: 'Posez votre question… (Entrée pour envoyer)',
    send: 'Envoyer',
    openAria: 'Ouvrir l’assistant IA',
    openTitle: 'Demander à notre assistant IA',
    closeAria: 'Fermer',
    escalated: 'Nous vous avons mis en relation avec un humain. Nous suivrons par e-mail.',
    s1: 'Que fait cet outil ?',
    s2: 'Combien ça coûte ?',
    s3: 'Y a-t-il une offre gratuite ?',
  },
  pages: {
    howTitle: 'CostLens — Comment ça marche',
    howDesc: 'Comment CostLens fonctionne en trois étapes.',
    howEyebrow: 'Comment ça marche',
    howH1: 'De l’entrée au résultat en 3 étapes',
    how1Title: 'Coller',
    how1Body: 'Collez le texte de politique et choisissez le domaine.',
    how2Title: 'Encoder',
    how2Body: 'Générez des contrôles appelables par agent et une checklist de conformité.',
    how3Title: 'Appliquer',
    how3Body: 'Branchez les règles dans le runtime agent ; gardez des humains pour les exceptions.',
    subscribe: 'S’abonner',
    ucTitle: 'CostLens — Cas d’usage',
    ucDesc: 'Comment CostLens aide les équipes conformité et plateformes d’agents.',
    ucEyebrow: 'Cas d’usage',
    ucH1: 'Conçu pour la conformité et les plateformes d’agents',
    ucIntro: 'Choisissez votre segment pour voir les workflows qui comptent le plus.',
    uc1Title: 'Politiques finance',
    uc1Pain: 'Remboursements et approbations doivent être vérifiables par machine.',
    uc1Help: 'Extraire conditions + actions que les agents peuvent évaluer.',
    uc2Title: 'Politiques RH / sécurité',
    uc2Pain: 'Besoin de checklists appelables par agent.',
    uc2Help: 'Le sélecteur de domaine focalise l’extraction.',
    uc3Title: 'Fonctions IA UE',
    uc3Pain: 'Mapper les règles à haut risque aux thèmes du règlement IA.',
    uc3Help: 'Mapping d’aide à la décision uniquement.',
    uc4Title: 'Équipes plateforme',
    uc4Pain: 'Les PDF de politique n’atteignent jamais le runtime.',
    uc4Help: 'Règles exportables pour outils d’agent.',
    painLabel: 'Douleur :',
    helpLabel: 'Comment CostLens aide :',
    ucRefs: 'Références: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    intTitle: 'CostLens — Intégrations',
    intDesc: 'Cibles d’export, API et options BYOK d’CostLens.',
    intEyebrow: 'Intégrations',
    intH1: 'Branchez-vous à votre stack',
    intIntro: 'Seules des intégrations honnêtes sont listées. Nous ne publions pas de connecteurs non livrés.',
    int1Title: 'Règles exportables',
    int1Body: 'Export JSON/checklist pour outils d’agent.',
    int2Title: 'API',
    int2Body: 'Régénérer lorsque les politiques changent.',
    int3Title: 'Cartographie règlement IA UE',
    int3Body: 'Repères pour thèmes à haut risque.',
    int4Title: 'BYOK',
    int4Body: 'Clés côté serveur lorsqu’offertes.',
    intHonesty: 'Note d’honnêteté : l’application runtime est le travail de votre système ; nous générons des contrôles candidats.',
    secTitle: 'CostLens — Sécurité & conformité',
    secDesc: 'Comment CostLens traite vos données et sa posture de conformité honnête.',
    secEyebrow: 'Sécurité & conformité',
    secH1: 'Vos données, notre posture',
    secIntro: 'CostLens traite les entrées que vous soumettez pour analyse. Cette page dit clairement ce que nous traitons et ce que nous ne revendiquons pas.',
    secHandleH2: 'Ce que nous traitons',
    secHandleBody: 'texte de politique d’entreprise et sélections de domaine utilisés pour générer des contrôles exécutables par agent.',
    secDataH2: 'Engagements de traitement des données',
    secData1: 'Les soumissions passent dans le pipeline produit et ne sont conservées que le temps nécessaire à votre journal d’audit (offres payantes) ou jusqu’à suppression de l’exécution.',
    secData2: 'Nous appliquons des contrôles d’accès cohérents avec le RGPD Art. 32 lorsque des données personnelles sont traitées.',
    secData3: 'Les clés BYOK (Enterprise), lorsqu’offertes, sont stockées côté serveur uniquement et jamais exposées au navigateur.',
    secHonesty: 'Règle d’honnêteté : CostLens transforme le texte de politique en règles candidates. Nous ne garantissons pas une application correcte, une couverture à 100 %, ni que les agents ne manqueront jamais une violation.',
    secPostureH2: 'Notre posture de conformité',
    secPosture1: 'CostLens est une aide à la décision, pas un cabinet d’avocats, une clinique ou un auditeur certifié.',
    secPosture2: 'Pour un avis engageant, consultez un professionnel qualifié du domaine.',
    secSubH2: 'Sous-traitants & paiements',
    secSub1: 'Les paiements sont traités par Waffo Pancake (merchant of record).',
    secSub2: 'Voir Privacy et Terms pour les conditions complètes.',
    secRefs: 'Références: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    backHome: 'Retour à l’accueil',
  },
  blog: {
    metaTitle: 'CostLens — Blog',
    metaDesc: 'Articles de définition sur l\'attribution du coût des jetons d\'agent.',
    glanceTitle: 'Que contient ce produit en un coup d’œil ?',
    glance1: 'Définition en langage clair, FAQ et références pour les moteurs de réponse',
    glance2: '3 étapes de workflow révisables (entrée → générer → revoir)',
    glance3: 'Sortie d’aide à la décision — vous restez dans la boucle ; pas de comptes utilisateurs inventés',
    eyebrow: 'Blog · GEO',
    h1: 'Voyez où les agents IA dépensent de l\'argent',
    lead: 'Grand livre par agent, garde-fous budgétaires et alertes — avant qu\'une boucle n\'épuise les dépenses.',
    targetQuery: 'Requête cible :',
    guidesTitle: 'Quels deep-dives GEO lire en premier ?',
    guidesLead: 'Explications détaillées sur l\'attribution de jetons et les garde-fous FinOps.',
    footerNote: 'Publier + syndiquer selon gtm-launch (IH + index GEO). Chaque billet porte 3 refs autorisées.',
    post1Title: 'Attribution du coût de token d\'agent AI (2026) avec Waffo et BYOK sur CostLens',
    post1Desc: 'Comment attribuer le coût d\'inférence à l\'agent et à la fonctionnalité qui l\'a dépensé.',
    post2Title: 'Garde-fous de budget FinOps pour les agents LLM (2026)',
    post2Desc: 'Garde-fous de budget qui détectent les boucles d\'agents défectueux tôt.',
    readI18n: 'Lire la version multilingue',
    readEnHtml: 'Lire l’article anglais complet',
    pillarSlug: 'ai-agent-token-cost-attribution-2026',
    pillarEyebrow: 'par CostLens (LX AI)',
    pillarH1: 'Fonctionnement de CostLens',
    pillarLead: 'Ingestion des signaux de dépense. Attribution. Alertes.',
    pillarH2a: 'Ce qu’un pack de politique contient',
    pillarPa1: 'Un pack est un ensemble de règles condition+action extraites du texte de politique, plus une checklist qui mappe les règles à haut risque aux attentes de supervision et de journalisation. Les agents évaluent à l’exécution ; les humains gèrent les exceptions.',
    pillarH2b: 'Alignement NIST AI RMF',
    pillarPb1: 'Govern : propriété des politiques qui lient les agents. Map : inventaire des outils et données. Measure : journaliser les décisions de politique. Manage : escalader quand une règle bloque ou qu’une approbation humaine est requise.',
    pillarH2c: 'Points de contact du règlement IA UE',
    pillarPc1: 'Pour les usages à haut risque Annexe III, des devoirs du déployeur comme Art. 9 et Art. 14 peuvent être étayés par des contrôles de politique — ils ne remplacent pas l’évaluation de conformité.',
    pillarH2d: 'Limite d’honnêteté',
    pillarPd1: 'CostLens rédige des règles candidates. Le câblage, la qualité d’application et la conformité juridique restent votre responsabilité. Pas de claim garantie / 100 % / never-miss.',
    pillarDisclaimer: 'Aide à la décision uniquement — pas un avis juridique ni un certificat de conformité.',
    pillarFaq1Q: 'Un pack de politique certifie-t-il la conformité au règlement IA UE ?',
    pillarFaq1A: 'Non. Il aide à étayer des contrôles ; la conformité reste la responsabilité de l’organisation déployante sur l’ensemble du système.',
    pillarFaq2Q: 'Quel lien avec NIST AI RMF ?',
    pillarFaq2A: 'Les fonctions RMF fournissent un vocabulaire de gouvernance et de mesure ; les packs opérationnalisent des contrôles que les agents peuvent appeler dans ces fonctions.',
    pillar2Slug: 'allowed-tools-vs-open-ended-agents-2026',
    pillar2Eyebrow: 'Conception de garde-fous',
    pillar2H1: 'Outils autorisés vs agents ouverts',
    pillar2Lead: 'Pourquoi les allow-lists échouent fermées plus sûrement que les agents ouverts — et comment les policy packs encodent ces limites en contrôles runtime.',
    pillar2H2a: 'Les agents ouverts amplifient le blast radius',
    pillar2Pa1: 'Choix d’outils non borné + mémoire longue : une injection de prompt peut chaîner e-mail, code et exfiltration.',
    pillar2H2b: 'Allow-lists en deny-by-default',
    pillar2Pb1: 'Énumérez outils, arguments et destinations permis. Le reste échoue fermé — aligné NIST AI RMF Govern/Map.',
    pillar2H2c: 'Encoder la politique en contrôles',
    pillar2Pc1: 'Transformer la prose en contrôles appelables : portée d’outils, classes de données, propriétaires d’escalade et champs d’audit.',
    pillar2H2d: 'Quand l’ouverture reste pertinente',
    pillar2Pd1: 'Les sandboxes de recherche sans credentials de production peuvent élargir les outils — isolés des chemins de données clients.',
    pillar2Disclaimer: 'Brouillons d’aide à la décision. Pas un conseil juridique ni une certification.',
    pillar2Faq1Q: 'Une allow-list suffit-elle ?',
    pillar2Faq1A: 'Non. Ajoutez validation d’arguments, approbation humaine pour actions irréversibles, et journalisation.',
    pillar2Faq2Q: 'Lien avec NIST AI RMF ?',
    pillar2Faq2A: 'Les allow-lists soutiennent Govern et Map : définir usage prévu et contrôles avant Measure/Manage en production.',
    pillar2Back: 'Retour au blog',
    pillarBack: 'Retour au blog',
    card1Title: 'Qu\'est-ce que l\'attribution de coût d\'agent ?',
    card1Body: 'Mappez les jetons à l\'agent, la fonctionnalité et l\'utilisateur qui les ont dépensés — pas une prophétie de facturation.',
    card2Title: 'Limites de budget',
    card2Body: 'Avertissements précoces lorsque une boucle d\'agent brûle le budget.',
  },
} as const

export default fr as unknown as Messages
