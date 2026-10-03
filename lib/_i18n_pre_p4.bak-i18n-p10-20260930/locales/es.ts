// locales/es.ts — CostLens full main-path catalog (batch2)
// Batch2 full main-path translations 2026-09-29. Shape mirrors en.ts.

import type { Messages } from '../types'

const es = {
  meta: {
    title: 'CostLens · Convierte la política de empresa en reglas aplicadas por agentes',
    description: 'CostLens lee el texto de tu política de empresa y genera comprobaciones invocables por agentes más una checklist de cumplimiento, mapeada a obligaciones del AI Act de la UE — para que la política sea ejecutable, no solo un PDF.',
  },
  common: {
    appName: 'CostLens',
    tagline: 'Convierte la política de empresa en reglas aplicadas por agentes',
    microSaas: 'Micro SaaS',
    menu: 'Menú',
  },
  nav: {
    backToHub: 'Volver al hub',
    home: 'Inicio',
    features: 'Funciones',
    useCases: 'Casos de uso',
    integrations: 'Integraciones',
    howItWorks: 'Cómo funciona',
    studio: 'Studio',
    security: 'Seguridad',
    pricing: 'Precios',
    blog: 'Blog',
    faq: 'FAQ',
    feedback: 'Feedback',
    support: 'Soporte',
    signIn: 'Iniciar sesión',
    subscribe: 'Suscribirse',
    getStarted: 'Empezar',
  },
  hero: {
    badge: 'Micro SaaS',
    title: 'Convierte la política de empresa en reglas aplicadas por agentes',
    subtitle: 'CostLens lee el texto de tu política de empresa y genera comprobaciones invocables por agentes más una checklist de cumplimiento, mapeada a obligaciones del AI Act de la UE — para que la política sea ejecutable, no solo un PDF.',
    keyTakeaways: 'Puntos clave',
    takeaway1: 'Convierte la política de empresa en reglas aplicadas por agentes — sin código.',
    takeaway2: 'Las barreras se unen a los flujos del agente y fallan en cerrado ante violaciones.',
    takeaway3: 'Empieza; Pro desde 29 $/mes.',
    ctaPrimary: 'Suscribirse',
    ctaSecondary: 'Ver demo',
    note: 'Sin tarjeta de crédito · Cancela cuando quieras',
    playDemo: 'Reproducir demo ▶',
    walkthrough: 'Haz clic para ver el recorrido',
  },
  stats: {
    builders: 'Builders',
    avgRating: 'Valoración media',
    uptime: 'Disponibilidad',
    timeToValue: 'Tiempo hasta valor',
  },
  pricing: {
    heading: 'Planes simples que escalan',
    monthly: 'Mensual',
    yearly: 'Anual',
    perMonth: '/mes',
    mostPopular: 'Más popular',
    getPro: 'Obtener Pro',
    orYearly: 'O paga anual — ${{amount}}/mes',
    custom: 'Personalizado',
    contactSales: 'Contactar ventas',
    configureByok: 'Configurar BYOK',
    getStarted: 'Empezar',
    freeForever: 'gratis para siempre',
    billedMonthly: 'facturado mensualmente',
    save: 'ahorra',
    freeFeat1: 'Ejecuciones diarias de IA limitadas (10/día · 50/mes)',
    freeFeat2: 'Demo de Studio (sin cargo extra de LLM)',
    proFeat1: 'IA incluida: 300 gens/mes · fair use (gpt-4o-mini)',
    proFeat2: 'No se requiere suscripción separada a ChatGPT',
    proFeat3: 'Soporte prioritario · 2 meses gratis con anual',
    entFeat1: 'Asientos de equipo · Acceso API (roadmap)',
    entFeat2: 'BYOK opcional (tu clave OpenAI)',
  },
  faq: {
    title: 'Tus preguntas, respondidas',
    geoTitle: 'CostLens — preguntas frecuentes',
    items: [
      {
        q: '¿Qué genera CostLens?',
        a: 'Comprobaciones de política invocables por agentes, una checklist de cumplimiento y un mapeo temático del AI Act de la UE que puedes exportar — flujo similar a un generador de políticas (pegar → generar → revisar), pero orientado a barreras de agentes en lugar de una página pública de privacidad.',
      },
      {
        q: '¿Es asesoramiento jurídico o una certificación?',
        a: 'No. Los resultados son borradores de apoyo a la decisión. Haz que counsel y responsables de riesgo revisen antes de producción. No reclamamos certificación ISO, CMP ni de regulador.',
      },
      {
        q: '¿Puedo cancelar en cualquier momento?',
        a: 'Sí. Los planes self-serve se cancelan cuando quieras; el acceso continúa hasta el fin del periodo.',
      },
      {
        q: '¿Necesito tarjeta de crédito para empezar?',
        a: 'No. Empieza con registro por email o modo Demo en el studio, y mejora cuando estés listo.',
      },
      {
        q: '¿Necesito mi propia suscripción a ChatGPT / OpenAI?',
        a: 'No para Free/Pro. Las ejecuciones de IA están incluidas en tu plan (fair use) con nuestra clave de plataforma. Enterprise puede opcionalmente traer su propia clave OpenAI (BYOK) — configúrala en /settings (la clave permanece solo en el servidor).',
      },
      {
        q: '¿Qué es Fair Use / qué pasa si alcanzo el límite de IA?',
        a: 'Pro incluye unas 300 generaciones de IA/mes (y un tope diario) en gpt-4o-mini. Si alcanzas el límite fair use, Studio devuelve un resultado mock/demo hasta el reinicio diario o mensual — o mejora / usa Enterprise BYOK para mayor volumen.',
      },
      {
        q: '¿Es seguro el checkout?',
        a: 'Los pagos los procesa Waffo Pancake (merchant of record).',
      },
      {
        q: '¿Qué ocurre después de pagar?',
        a: 'Recibes confirmación de acceso; el cumplimiento se rastrea vía webhook + registros de pedido.',
      },
    ],
  
    geoItems: [
      {
        q: '¿Qué produce CostLens?',
        a: 'Un borrador de política estructurado sobre herramientas, datos y rutas de escalado editable.',
      },
      {
        q: '¿Es consejo legal?',
        a: 'No. Es ayuda de redacción. Las políticas deben ser revisadas por su consejo y risk owners.',
      },
      {
        q: '¿Cómo funciona el modo Demo?',
        a: 'Active Demo sin IA en vivo; el modo en vivo necesita una clave configurada.',
      },
      {
        q: '¿Mapea el AI Act UE?',
        a: 'Los narrativos pueden citar temas de gobernanza; no certifica conformidad.',
      },
      {
        q: '¿Se pueden versionar políticas?',
        a: 'Las ejecuciones guardan rulesetVersion y runId para seguimiento de cambios.',
      },
      {
        q: '¿Quién debería usarlo?',
        a: 'Ingenieros de plataforma y cumplimiento que definen guardrails antes de producción.',
      },
      {
        q: '¿En qué países/regiones?',
        a: 'Accesible mundialmente; pagos Waffo Pancake pueden variar por región.',
      },
      {
        q: '¿Cumple GDPR/privacidad?',
        a: 'Las entradas solo generan su salida y nunca se venden. Ver Privacy; Enterprise puede incluir DPA/NDA.',
      },
      {
        q: '¿Qué idiomas admite?',
        a: 'La UI cubre diez locales. Los borradores siguen el idioma de la UI si hay IA en vivo.',
      },
    ],
},
  footer: {
    product: 'Producto',
    company: 'Empresa',
    resources: 'Recursos',
    legal: 'Legal',
    about: 'Acerca de',
    contact: 'Contacto',
    privacy: 'Privacidad',
    terms: 'Términos',
    refund: 'Reembolso',
    support: 'Soporte',
    feedback: 'Feedback',
    rights: 'Todos los derechos reservados.',
    partOfFleet: 'Parte de la flota LX AI Micro-SaaS.',
  },
  signup: {
    title: 'Empieza con más inteligencia hoy',
    subtitle: 'Únete a builders que usan CostLens. Prueba gratis — sin tarjeta.',
    emailPlaceholder: 'Introduce tu email',
    saving: 'Guardando…',
    cta: 'Empezar',
    trust: 'De confianza · Cancela cuando quieras',
  },
  feedback: {
    open: 'Feedback',
    title: 'Enviar feedback',
    blurb: 'Cuéntanos qué funcionó, qué falló o qué quieres a continuación.',
    fullPage: '¿Prefieres una página completa?',
    openPage: 'Abrir /feedback',
    close: 'Cerrar feedback',
    helpful: '¿Te resultó útil este resultado?',
    yes: 'Sí',
    no: 'No',
    thanks: 'Gracias por el feedback.',
    commentPlaceholder: 'Comentario opcional de una línea',
    generalTitle: 'Feedback general',
    generalSub: 'Cuéntanos qué piensas',
    generalPh: '¿Qué te gustó, qué no, o qué notaste al usar el producto?',
    ideaTitle: 'Tengo una idea',
    ideaSub: 'Sugiere una función o mejora',
    ideaPh: 'Describe tu idea y el problema que resolvería…',
    issueTitle: 'Encontré un problema',
    issueSub: 'Reporta un bug o incidencia',
    issuePh: '¿Qué ocurrió, qué esperabas y cómo podemos reproducirlo?',
    submit: 'Enviar feedback',
    submitting: 'Enviando…',
    done: 'Gracias — feedback recibido.',
    emailOptional: 'Email (opcional)',
    category: 'Categoría',
    yourFeedback: 'Tu feedback',
    attachment: 'Adjunto (opcional)',

    back: '← Volver al tipo de feedback',
    pickTitle: '¿Qué feedback tienes?',
    pickSub: 'Elige uno para empezar. Puedes añadir detalles y una categoría precisa en el siguiente paso.',
    thanksTitle: '¡Gracias por tu feedback!',
    thanksBody: 'Lo hemos recibido y nuestro equipo hará seguimiento pronto. Puedes enviar de nuevo cuando quieras.',
    submitAnother: 'Enviar otro',
    detailed: 'Feedback detallado',
    send: 'Enviar',
    sending: 'Enviando...',
    thanksInline: 'Gracias - registrado. Leemos cada uno.',
    errorInline: 'No se pudo enviar ahora. Usa el botón Feedback o /feedback.',
    inlineCommentPh: 'Una línea: ¿qué debemos mejorar? (opcional)',
  },
  legal: {
    privacyPolicy: 'Política de privacidad',
    generatePolicy: 'Generar política',
    controller: 'Responsable',
    processor: 'Encargado',
    processing: 'Tratamiento',
    personalData: 'Datos personales',
    dataSubject: 'Interesado',
    dpo: 'Delegado de protección de datos',
    checklist: 'Checklist de cumplimiento',
    policyChecks: 'Comprobaciones de política',
    encodePolicy: 'Codifica tu política',
    definitionTitle: 'CostLens — definición',
    whatItIs: 'Qué es',
    whatNotTitle: 'Qué NO es',
    whatNot1: 'No es un bufete, plataforma GRC ni organismo de certificación ISO.',
    whatNot2: 'No garantiza que las políticas redactadas satisfagan a todo regulador o auditor.',
    whatNot3: 'No es asesoramiento jurídico — haz revisar los packs de política de agentes de alto riesgo con counsel.',
    rolesHint: 'Cuando los packs mencionan roles de privacidad, usamos etiquetas del GDPR Art.4: Responsable y Encargado (solo apoyo a la decisión).',
  },
  benchmark: {
    frameworksEyebrow: 'Mapeo de marcos',
    frameworksTitle: 'Leyes complejas. Packs de política simples.',
    frameworksNote: 'Temas de apoyo a la decisión — no una certificación, insignia CMP ni dictamen jurídico.',
    fw1: 'EU AI Act',
    fw2: 'NIST AI RMF',
    fw3: 'OWASP LLM Top 10',
    fw4: 'Roles GDPR Art.4',
    painEyebrow: 'Por qué se atascan los packs',
    painTitle: 'Las políticas cambian. Las brechas del agente aparecen tarde.',
    pain1Title: 'Nuevas reglas, nuevo riesgo',
    pain1Body: 'Cada actualización regulatoria puede dejar herramientas del agente, clases de datos y rutas de escalado desincronizadas.',
    pain2Title: 'Docs vs runtime',
    pain2Body: 'Cuando el PDF vive aparte del runtime del agente, los puntos ciegos aparecen en producción.',
    pain3Title: 'Reescrituras manuales',
    pain3Body: 'Editar a mano checklists por cada dominio drena en silencio el tiempo de ingeniería y cumplimiento.',
    pain4Title: 'Problemas tras el lanzamiento',
    pain4Body: 'Las brechas suelen surgir solo tras una auditoría, incidente o cuestionario de cliente.',
    getEyebrow: 'Qué obtienes',
    getTitle: 'Pegar. Generar. Exportar.',
    getLead: 'Entregables al estilo generador para gobernanza de agentes — revisa con counsel antes de producción.',
    get1Title: 'Comprobaciones de política',
    get1Body: 'Reglas condición + acción que un runtime de agente puede evaluar.',
    get2Title: 'Checklist de cumplimiento',
    get2Body: 'Deberes legibles para que los responsables vean brechas antes del go-live.',
    get3Title: 'Mapeo AI Act UE',
    get3Body: 'Punteros temáticos para obligaciones de alto riesgo — no certificación de conformidad.',
    get4Title: 'Reglas exportables',
    get4Body: 'Salida estructurada que puedes conectar a barreras o middleware.',
    featuresEyebrow: 'Por qué CostLens',
    featuresTitle: 'Todo lo necesario para codificar packs de política',
    featuresBlurb: 'Para equipos de plataforma y cumplimiento que necesitan comprobaciones aplicables sin curva de aprendizaje.',
    howTitle: 'Del texto de política a comprobaciones aplicables en 3 pasos',
    how1Title: 'Pegar',
    how1Body: 'Pega el texto de política de empresa y elige un dominio (Finance, HR, Safety, General).',
    how2Title: 'Generar',
    how2Body: 'Crea comprobaciones invocables por agentes más checklist de cumplimiento y temas de marco.',
    how3Title: 'Conectar',
    how3Body: 'Exporta reglas a tu runtime de agente; mantén humanos para excepciones y revisión legal.',
    allPlansTitle: 'Todos los planes de pago incluyen',
    allPlans1: 'Studio de política a reglas',
    allPlans2: 'Exportación de checklist de cumplimiento',
    allPlans3: 'Mapeo temático AI Act UE (apoyo a la decisión)',
    allPlans4: 'Soporte por email en planes de pago — sin extras ocultos para el uso central del studio',
    honestyTitle: 'Límites honestos',
    honestyLead: 'Como un generador profesional de políticas, CostLens es una ayuda de redacción: personaliza, revisa y actualiza con tu counsel.',
    ctaStudio: 'Abrir studio',
  },
  home: {
    whyEyebrow: 'Por qué {{name}}',
    featuresHeading: 'Todo lo necesario para aplicar la política del agente',
    featuresCardBlurb: 'Para ingenieros de cumplimiento y plataforma que necesitan reglas de agente aplicables sin curva de aprendizaje.',
    howHeading: 'Del texto de política a reglas aplicables en 3 pasos',
    how1Title: 'Pegar política',
    how1Desc: 'Introduce política de empresa, listas de herramientas permitidas o runbooks de agente.',
    how2Title: 'Compilar reglas',
    how2Desc: 'Comprobaciones deterministas más packs de política asistidos por modelo.',
    how3Title: 'Aplicar',
    how3Desc: 'Exporta reglas listas para el agente con citas y una pista de auditoría.',
    studioEyebrow: 'Studio en vivo',
    studioHeading: 'Pruébalo en esta página',
    studioWatchDemo: 'Ver demo',
    studioOrRun: 'o ejecuta un control abajo.',
    studioFormTitle: 'Comprobación de política de agente',
    demoMode: 'Modo demo (sin IA en vivo)',
    socialHeading: 'La confianza de ingenieros de cumplimiento',
    socialNote: 'La prueba social usa plantillas hasta que existan testimonios reales y consentidos. De confianza para [X]+ equipos de cumplimiento y plataformas de agentes.',
    quickAnswers: 'Respuestas rápidas',
    howCompares: 'Comparación',
    dimension: 'Dimensión',
    manual: 'Manual',
    whenNotToUse: 'Cuándo no usarlo:',
    peopleAlsoSearch: 'La gente también busca',





































































































































    leadsInbox: "Bandeja de leads (CRUD demo)",
    filterEmail: "Filtrar email…",
    allPlans: "Todos los planes",
    noLeads: "Aún no hay leads — envía el formulario de registro.",
    colEmail: "Email",
    colPlan: "Plan",
    colSource: "Fuente",
    delete: "Eliminar",
    deleteLeadTitle: "Eliminar lead",
    deleteLeadWarn: "Esta acción no se puede deshacer.",
    deleteLeadBody: "¿Eliminar este lead? Su email se quitará permanentemente de tus contactos.",
    cancel: "Cancelar",
    relatedReading: "Lecturas relacionadas",
    productTour: "Tour del producto",
    productDemo: "DEMO DEL PRODUCTO",
    stepOf: "paso {{n}}/{{total}}",
    replay: "Repetir",
    tryStudio: "Probar estudio",
    leadsCount: "{{n}} leads",
    leadsFiltered: "{{n}} filtrados",
    geoCmpDim: "Dimensión",
    geoCmpManual: "Manual",
    geoCmp1Dim: "Velocidad",
    geoCmp1Manual: "Horas a días",
    geoCmp1Tool: "Minutos por ejecución",
    geoCmp2Dim: "Consistencia",
    geoCmp2Manual: "Varía según la persona",
    geoCmp2Tool: "Mismo conjunto de reglas cada vez",
    geoCmp3Dim: "Salida",
    geoCmp3Manual: "Texto libre",
    geoCmp3Tool: "Resultado estructurado y exportable",
    geoCmp4Dim: "Mejor para",
    geoCmp4Manual: "Aprobación final",
    geoCmp4Tool: "Apoyo a la decisión de primer paso",
    related1Title: "AI wrapper vs moat",
    related1Desc: "la aplicación de políticas como un foso duradero.",
    related2Title: "EU AI Act validation error list",
    related2Desc: "mapear las funciones de los agentes a los temas del Act.",
    related3Title: "Lanzamiento de Wave 1",
    related3Desc: "CostLens se envía con el clúster de gobernanza.",
    feat1: "De política a reglas",
    feat2: "Lista de verificación de cumplimiento",
    feat3: "Mapeo del EU AI Act",
    feat4: "Reglas exportables",
    geoQa1: "De política a reglas",
    geoQa2: "Lista de verificación de cumplimiento",
    geoQa3: "Mapeo del EU AI Act",
    geoQa4: "Reglas exportables",
    geoQa5: "Los precios comienzan en $0 (Free).",
    geoLt1: "¿Qué es CostLens?",
    geoLt2: "¿Cómo funciona CostLens?",
    geoLt3: "¿Cuánto cuesta CostLens?",
    geoLt4: "¿Es CostLens Free?",
    geoLt5: "CostLens vs hacerlo manualmente",
    geoWhenNot: "Utilice una revisión humana calificada en su lugar — es una ayuda para la redacción. Las políticas deben ser revisadas por su asesor legal y los propietarios de riesgos.",
    demo1Title: "Bienvenido a {{name}}",
    demo1Detail: "Un recorrido de 60 segundos sobre cómo {{name}} convierte las políticas en verificaciones de agentes.",
    demo2Title: "Abrir el estudio en vivo",
    demo2Detail: "Pegue el texto de la política y elija un dominio.",
    demo3Title: "Haga clic en Generate checks",
    demo3Detail: "Impulsado por de política a reglas y listas de verificación de cumplimiento.",
    demo4Title: "Vista previa de las verificaciones de políticas",
    demo4Detail: "Ejemplo de salida de la canalización basada en reglas de este producto:",
    demo4DetailEmpty: "Sus verificaciones de políticas aparecen aquí — copie o refine.",
    demo5Title: "Tu turno",
    demo5Detail: "Pruebe el estudio en vivo, o comience con {{name}}.",
  },
  chat: {
    typing: 'El asistente está escribiendo…',
    placeholder: 'Escribe tu pregunta… (Enter para enviar)',
    send: 'Enviar',
    openAria: 'Abrir asistente de IA',
    openTitle: 'Pregunta a nuestro asistente de IA',
    closeAria: 'Cerrar',
    escalated: 'Te hemos conectado con un agente humano. Seguiremos por email.',
    s1: '¿Qué hace esta herramienta?',
    s2: '¿Cuánto cuesta?',
    s3: '¿Hay un plan gratuito?',
  },
  pages: {
    howTitle: 'CostLens — Cómo funciona',
    howDesc: 'Cómo funciona CostLens en tres pasos.',
    howEyebrow: 'Cómo funciona',
    howH1: 'De la entrada al resultado en 3 pasos',
    how1Title: 'Pegar',
    how1Body: 'Pegue el texto de la política y elija el dominio.',
    how2Title: 'Codificar',
    how2Body: 'Genere comprobaciones invocables por el agente y una checklist de cumplimiento.',
    how3Title: 'Aplicar',
    how3Body: 'Conecte las reglas al runtime del agente; reserve humanos para excepciones.',
    subscribe: 'Suscribirse',
    ucTitle: 'CostLens — Casos de uso',
    ucDesc: 'Cómo CostLens ayuda a equipos de cumplimiento y plataformas de agentes.',
    ucEyebrow: 'Casos de uso',
    ucH1: 'Hecho para cumplimiento y plataformas de agentes',
    ucIntro: 'Elija su segmento para ver los flujos que más importan.',
    uc1Title: 'Políticas financieras',
    uc1Pain: 'Los reembolsos y aprobaciones deben ser comprobables por máquina.',
    uc1Help: 'Extraer condiciones + acciones que los agentes puedan evaluar.',
    uc2Title: 'Políticas de RR. HH. / seguridad',
    uc2Pain: 'Necesitan checklists que los agentes puedan llamar.',
    uc2Help: 'El selector de dominio enfoca la extracción.',
    uc3Title: 'Funciones de IA de la UE',
    uc3Pain: 'Mapear reglas de alto riesgo a temas del Reglamento de IA.',
    uc3Help: 'Solo mapeo de apoyo a la decisión.',
    uc4Title: 'Equipos de plataforma',
    uc4Pain: 'Los PDF de política nunca llegan al runtime.',
    uc4Help: 'Reglas exportables para herramientas de agente.',
    painLabel: 'Dolor:',
    helpLabel: 'Cómo ayuda CostLens:',
    ucRefs: 'Referencias: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    intTitle: 'CostLens — Integraciones',
    intDesc: 'Destinos de exportación, API y opciones BYOK de CostLens.',
    intEyebrow: 'Integraciones',
    intH1: 'Conéctese a su stack',
    intIntro: 'Solo se listan integraciones honestas. No anunciamos conectores aún no entregados.',
    int1Title: 'Reglas exportables',
    int1Body: 'Exportación JSON/checklist para herramientas de agente.',
    int2Title: 'API',
    int2Body: 'Regenerar cuando cambien las políticas.',
    int3Title: 'Mapeo del Reglamento de IA de la UE',
    int3Body: 'Punteros para temas de alto riesgo.',
    int4Title: 'BYOK',
    int4Body: 'Claves solo en el servidor cuando se ofrecen.',
    intHonesty: 'Nota de honestidad: la aplicación en runtime es trabajo de su sistema; nosotros generamos comprobaciones candidatas.',
    secTitle: 'CostLens — Seguridad y cumplimiento',
    secDesc: 'Cómo CostLens trata sus datos y su postura de cumplimiento honesta.',
    secEyebrow: 'Seguridad y cumplimiento',
    secH1: 'Sus datos, nuestra postura',
    secIntro: 'CostLens procesa las entradas que envía para análisis. Esta página dice con claridad qué tratamos y qué no reivindicamos.',
    secHandleH2: 'Qué tratamos',
    secHandleBody: 'texto de política de la empresa y selecciones de dominio usados para generar comprobaciones ejecutables por el agente.',
    secDataH2: 'Compromisos de tratamiento de datos',
    secData1: 'Los envíos pasan por el pipeline del producto y se retienen solo el tiempo necesario para su registro de auditoría (planes de pago) o hasta que elimine la ejecución.',
    secData2: 'Aplicamos controles de acceso coherentes con el RGPD Art. 32 cuando se tratan datos personales.',
    secData3: 'Las claves BYOK (Enterprise), cuando se ofrecen, se almacenan solo en el servidor y nunca se exponen al navegador.',
    secHonesty: 'Regla de honestidad: CostLens convierte el texto de política en reglas candidatas. No garantizamos aplicación correcta, cobertura al 100% ni que los agentes nunca dejen pasar una violación.',
    secPostureH2: 'Nuestra postura de cumplimiento',
    secPosture1: 'CostLens es apoyo a la decisión, no un bufete, clínica ni auditor certificado.',
    secPosture2: 'Para un consejo vinculante, consulte a un profesional cualificado del dominio.',
    secSubH2: 'Subencargados y pagos',
    secSub1: 'Los pagos los procesa Waffo Pancake (merchant of record).',
    secSub2: 'Consulte Privacy y Terms para las condiciones completas.',
    secRefs: 'Referencias: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    backHome: 'Volver al inicio',
  },
  blog: {
    metaTitle: 'CostLens — Blog',
    metaDesc: 'Artículos definicionales y prácticos sobre policy-as-code, reglas aplicadas por agentes, mapeo del Reglamento de IA de la UE y checklists de cumplimiento.',
    glanceTitle: '¿Qué incluye este producto de un vistazo?',
    glance1: 'Definición en lenguaje claro, FAQ y referencias para motores de respuesta',
    glance2: '3 pasos de flujo revisables (entrada → generar → revisar)',
    glance3: 'Salida de apoyo a la decisión — usted permanece en el bucle; sin recuentos de usuarios inventados',
    eyebrow: 'Blog · GEO',
    h1: 'Policy-as-code, explicado',
    lead: 'Domine las preguntas definicionales antes de convertir una política de empresa en algo que un agente realmente aplique.',
    targetQuery: 'Consulta objetivo:',
    guidesTitle: '¿Qué deep-dives GEO leer primero?',
    guidesLead: 'Explicaciones largas y citadas. Cada una aporta 3+ fuentes autorizadas del Reglamento de IA de la UE / gobernanza de IA y un aviso de apoyo a la decisión.',
    footerNote: 'Publicar + sindicar según gtm-launch (IH + índices GEO). Cada entrada lleva 3 refs autorizadas.',
    post1Title: 'Paquetes de política de agentes de IA y NIST AI RMF',
    post1Desc: 'Cómo los paquetes de política se mapean a las funciones NIST AI RMF y a los temas del Reglamento de IA de la UE — apoyo a la decisión, no un certificado.',
    post2Title: 'Herramientas permitidas vs agentes abiertos',
    post2Desc: 'Por qué restringir el acceso a herramientas es un control, no un interruptor de función — con reglas de honestidad para agentes abiertos.',
    readI18n: 'Leer versión multilingüe',
    readEnHtml: 'Leer artículo completo en inglés',
    pillarSlug: 'ai-agent-policy-packs-nist-rmf-2026',
    pillarEyebrow: 'por CostLens (LX AI)',
    pillarH1: 'Paquetes de política de agentes de IA y NIST AI RMF',
    pillarLead: 'Los paquetes de política convierten reglas de empresa en comprobaciones invocables por el agente. Alineados con las funciones NIST AI RMF y los temas del Reglamento de IA de la UE, son apoyo a la decisión — no un certificado de conformidad.',
    pillarH2a: 'Qué contiene un paquete de política',
    pillarPa1: 'Un paquete es un conjunto de reglas condición+acción extraídas del texto de política, más una checklist que mapea reglas de alto riesgo a expectativas de supervisión y registro. Los agentes evalúan en runtime; los humanos gestionan excepciones.',
    pillarH2b: 'Alineación con NIST AI RMF',
    pillarPb1: 'Govern: propiedad de qué políticas deben vincular a los agentes. Map: inventario de herramientas y datos. Measure: registrar decisiones de política. Manage: escalar cuando una regla bloquea o se requiere aprobación humana.',
    pillarH2c: 'Puntos de contacto del Reglamento de IA de la UE',
    pillarPc1: 'Para usos de alto riesgo del Anexo III, deberes del desplegador como Art. 9 y Art. 14 pueden evidenciarse con comprobaciones de política — no sustituyen la evaluación de conformidad.',
    pillarH2d: 'Límite de honestidad',
    pillarPd1: 'CostLens redacta reglas candidatas. El cableado, la calidad de aplicación y la conformidad legal siguen siendo su responsabilidad. Sin claim de garantía / 100% / never-miss.',
    pillarDisclaimer: 'Solo apoyo a la decisión — no es asesoramiento jurídico ni un certificado de conformidad.',
    pillarFaq1Q: '¿Un paquete de política certifica la conformidad con el Reglamento de IA de la UE?',
    pillarFaq1A: 'No. Ayuda a evidenciar controles; la conformidad sigue siendo responsabilidad de la organización que despliega sobre el sistema completo.',
    pillarFaq2Q: '¿Cómo se relaciona con NIST AI RMF?',
    pillarFaq2A: 'Las funciones RMF dan vocabulario de gobernanza y medición; los paquetes operacionalizan comprobaciones que los agentes pueden llamar dentro de esas funciones.',
    pillar2Slug: 'allowed-tools-vs-open-ended-agents-2026',
    pillar2Eyebrow: 'Diseño de guardrails',
    pillar2H1: 'Herramientas permitidas vs agentes abiertos',
    pillar2Lead: 'Por qué las allow-lists fallan cerradas con más seguridad que los agentes abiertos — y cómo los policy packs codifican esos límites en checks en runtime.',
    pillar2H2a: 'Los agentes abiertos amplían el blast radius',
    pillar2Pa1: 'Elección de herramientas sin límite + memoria larga: una inyección de prompt puede encadenar email, código y exfiltración.',
    pillar2H2b: 'Allow-lists como deny-by-default',
    pillar2Pb1: 'Enumere herramientas, argumentos y destinos permitidos. El resto falla cerrado — alineado con NIST AI RMF Govern/Map.',
    pillar2H2c: 'Codificar la política como checks',
    pillar2Pc1: 'Convierta prosa en checks invocables: alcance de herramientas, clases de datos, owners de escalado y campos de auditoría.',
    pillar2H2d: 'Cuándo sigue cabiendo lo abierto',
    pillar2Pd1: 'Sandboxes de investigación sin credenciales de producción pueden ampliar herramientas — aisladas de rutas de datos de clientes.',
    pillar2Disclaimer: 'Borradores de apoyo a decisiones. No es consejo legal ni certificación.',
    pillar2Faq1Q: '¿Basta una allow-list?',
    pillar2Faq1A: 'No. Añada validación de argumentos, aprobación humana para acciones irreversibles y logging.',
    pillar2Faq2Q: '¿Relación con NIST AI RMF?',
    pillar2Faq2A: 'Las allow-lists sostienen Govern y Map: definir uso previsto y controles antes de Measure/Manage en producción.',
    pillar2Back: 'Volver al blog',
    pillarBack: 'Volver al blog',
    card1Title: '¿Qué es policy-as-code?',
    card1Body: 'Policy-as-code expresa una política de empresa como reglas comprobables por máquina que un agente evalúa en runtime — por ejemplo, si reembolso > $50 entonces exigir manager_approval. Es apoyo a la decisión, no una opinión jurídica ni un certificado.',
    card2Title: 'Convertir la política de empresa en reglas aplicadas por el agente',
    card2Body: 'Extraiga cada frase como condición + acción, mapee las reglas de alto riesgo a temas del Reglamento de IA de la UE (Art. 9, 14, 26) y exporte un archivo de reglas que el agente evalúa en cada ejecución. Las reglas son una vista de sus obligaciones, no una garantía de conformidad.',
  },
} as const

export default es as unknown as Messages
