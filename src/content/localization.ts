import { marketingCopy as marketingCopyEs } from './marketingCopy'
import { modules as modulesEs, statusLabel as statusLabelEs, pillarLabel as pillarLabelEs, type ModuleItem, type Status, type Pillar } from '../data/modules'
import { moduleDetails as moduleDetailsEs, type ModuleDetail } from '../data/moduleDetails'
import { showcaseTraces as showcaseTracesEs, type ShowcaseTrace } from '../data/showcaseTraces'

export type Locale = 'es' | 'en'

export const defaultLocale: Locale = 'es'
export const localeOptions: ReadonlyArray<{ value: Locale; label: string; shortLabel: string }> = [
  { value: 'es', label: 'Español', shortLabel: 'ES' },
  { value: 'en', label: 'English', shortLabel: 'EN' },
] as const

export const marketingCopyEn = {
  nav: [
    { label: 'Solution', href: '#solucion' },
    { label: 'Demo', href: '#demo' },
    { label: 'How it thinks', href: '#como-piensa' },
    { label: 'How it works', href: '#como-funciona' },
    { label: 'Ecosystem', href: '#ecosistema' },
    { label: 'Use cases', href: '#casos' },
    { label: 'Modules', href: '#modulos' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contacto' },
  ],
  hero: {
    kicker: 'Paradise Web',
    title: 'Do you believe in paradise?',
    description: 'Paradise is an evolving ecosystem designed to connect vision, intelligence, and execution.',
    ctas: {
      primary: { label: 'Explore Paradise', href: '#ecosistema' },
      secondary: { label: 'Watch introduction' },
    },
    proof: ['visual', 'modular', 'evolving', 'demo-ready'],
    heroSignals: ['broken SLA alert', 'club brief', 'course schedule', 'ops queue'],
    heroModules: ['Paradise-AI', 'Nimbus', 'ClubNet', 'RouteOps'],
    heroArtifact: 'Artifact ready · executive brief / export / documentation',
  },
  trustStrip: ['modular', 'demo-first', 'evolving', 'adaptable by domain'],
  demo: {
    title: 'See Paradise in action',
    subtitle:
      'The demo shows the heart of the ecosystem: signals come in, Paradise decides which layer participates, and leaves behind an artifact ready to use, share, or explain.',
    scenarios: [
      {
        key: 'health',
        label: 'Healthcare',
        intro: 'Clinical operations: schedule, appointments, cancellations, and patient experience in one console.',
        signals: ['cancelled appointment', 'patient rescheduled', 'clinic schedule'],
        modules: ['Paradise-AI', 'Paradise Atria', 'Nexus'],
        artifactType: 'clinical summary',
        artifactTitle: 'Schedule status and next actions',
        artifactBody: ['cancellations: 2 pending reassignment', 'schedule: tomorrow has 3 open slots', 'next step: notify patients + optimize slots'],
      },
      {
        key: 'ops',
        label: 'Operations',
        intro: 'Operational triage with priority, context, and an executable deliverable.',
        signals: ['P1/P2 alert queue', 'SLA deviation', 'incomplete handoff'],
        modules: ['Paradise-AI', 'AtlasOps', 'AI Delivery Copilot'],
        artifactType: 'ops brief',
        artifactTitle: 'Actionable shift summary',
        artifactBody: ['impact: high', 'priority: resolve P1 incidents', 'next step: assign owner + send handoff'],
      },
      {
        key: 'community',
        label: 'Club / Community',
        intro: 'A clearer experience to coordinate the club, schedule, resources, and communication.',
        signals: ['irregular attendance', 'coordination message', 'pending resource'],
        modules: ['Paradise-AI', 'ClubNet', 'Nexus'],
        artifactType: 'community brief',
        artifactTitle: 'Club status + next moves',
        artifactBody: ['focus: attendance and communication', 'risk: low participation in two groups', 'output: shareable brief + simple export'],
      },
      {
        key: 'education',
        label: 'Education',
        intro: 'Organize courses, communication, and follow-up without losing context.',
        signals: ['course agenda', 'student update', 'pending material'],
        modules: ['Paradise-AI', 'Aulora', 'Nexus'],
        artifactType: 'academic summary',
        artifactTitle: 'Course view ready to share',
        artifactBody: ['status: weekly follow-up is clear', 'blocker: scattered resources', 'output: agenda + alerts + exportable summary'],
      },
      {
        key: 'logistics',
        label: 'Logistics',
        intro: 'Routes, dispatch, and operational events turned into a readable flow.',
        signals: ['route deviation', 'dispatch queue', 'delivery at risk'],
        modules: ['RouteOps', 'AI Delivery Copilot', 'Paradise Nimbus'],
        artifactType: 'dispatch pack',
        artifactTitle: 'Operational handoff pack',
        artifactBody: ['critical deviation: route 3', 'action: reassign + notify', 'artifact: export with priority and ownership'],
      },
      {
        key: 'nimbus',
        label: 'Nimbus',
        intro: 'The cross-cutting layer that connects modules without turning the system into monolithic soup.',
        signals: ['module event', 'artifact publish', 'health snapshot'],
        modules: ['Paradise Nimbus', 'Paradise-AI', 'Showcase'],
        artifactType: 'versioned artifact',
        artifactTitle: 'Ecosystem snapshot',
        artifactBody: ['registry updated', 'event log: 3 new signals', 'output: snapshot ready for inspection'],
      },
    ],
  },
  how: {
    title: 'How Paradise works',
    steps: [
      { title: 'You start from a clear signal', body: 'It can come from operations, community, a course, a route, or a mocked flow for demo purposes.' },
      { title: 'Paradise decides which layer is involved', body: 'The orchestration makes it visible which module enters, why it enters, and what the next reasonable step is.' },
      { title: 'The result does not stay abstract', body: 'It produces a concrete artifact: a brief, export, summary, handoff, or documentation ready to circulate.' },
    ],
    technicalToggle: {
      title: 'It also has a technical reading',
      body: 'If you want to go one level deeper, Paradise relies on contracts, decoupled modules, artifacts, and events so it can grow without becoming an unreadable monster.',
      cta: 'See technical view',
    },
  },
  ecosystem: {
    title: 'A modular ecosystem with a center and layers',
    subtitle:
      'Paradise is conceived as a system with a visible core, a cross-cutting layer, and verticals that can grow without losing identity.',
    categories: [
      {
        id: 'core',
        title: 'Core / AI',
        description: 'The interface that translates signals into decisions, narrative, and artifacts ready to move work forward.',
        modules: ['Paradise-AI', 'Paradise Nexus'],
      },
      {
        id: 'control',
        title: 'Control Plane',
        description: 'Nimbus coordinates registry, events, and artifacts to connect modules without hammering them together.',
        modules: ['Paradise Nimbus', 'Paradise Showcase'],
      },
      {
        id: 'operations',
        title: 'Operations',
        description: 'Consoles, triage, handoffs, and operational decisions with visible context.',
        modules: ['Paradise AtlasOps', 'Paradise RouteOps', 'Paradise QC Sentinel'],
      },
      {
        id: 'community',
        title: 'Community / Experience',
        description: 'Spaces where coordination is also relationship, schedule, and experience.',
        modules: ['Paradise ClubNet', 'Paradise Atria', 'AI Delivery Copilot'],
      },
      {
        id: 'education',
        title: 'Knowledge / Education',
        description: 'Paradise also reduces complexity when courses, resources, memory, and follow-up are involved.',
        modules: ['Paradise Aulora', 'Paradise ModelArc'],
      },
      {
        id: 'verticals',
        title: 'Evolving verticals',
        description: 'Modules and experiences that can grow by domain without breaking the ecosystem’s cross-cutting logic.',
        modules: ['The Velvet', 'Paradise Atria', 'new verticals'],
      },
    ],
  },
  useCases: {
    title: 'Featured solutions',
    subtitle: 'Choose a front and Paradise updates the suggested module view to show how that case would be turned into product.',
    cases: [
      {
        key: 'ops' as const,
        label: 'Operations',
        problem: 'Too many signals and too little clarity about impact, ownership, and the next move.',
        outcome: 'Triage, visible priority, actionable artifact, and a clear handoff.',
        tags: ['ops', 'alerts', 'triage', 'routing', 'signals'],
        recommendedModuleId: 'atlasops',
      },
      {
        key: 'community' as const,
        label: 'Community',
        problem: 'Clubs and community spaces become chaotic when scheduling, follow-up, and communication live separately.',
        outcome: 'A clearer experience to coordinate community, schedule, and resources.',
        tags: ['sports', 'community', 'operations', 'demo'],
        recommendedModuleId: 'paradise-clubnet',
      },
      {
        key: 'education' as const,
        label: 'Education',
        problem: 'Courses, follow-up, and communication often end up scattered across too many tools.',
        outcome: 'A more legible console for courses, updates, and materials.',
        tags: ['education', 'community', 'knowledge', 'coordination'],
        recommendedModuleId: 'paradise-aulora',
      },
      {
        key: 'logistics' as const,
        label: 'Logistics',
        problem: 'Routes, queues, and handoffs become opaque very quickly as volume rises.',
        outcome: 'Operational flow and dispatch with visible priority, detail, and ownership.',
        tags: ['logistics', 'delivery', 'routing', 'ops'],
        recommendedModuleId: 'paradise-routeops',
      },
      {
        key: 'nimbus' as const,
        label: 'Nimbus',
        problem: 'You want to connect modules without blowing up the architecture every time a new case appears.',
        outcome: 'Registry, events, and artifacts as an evolving foundation.',
        tags: ['cloud', 'registry', 'events', 'artifacts'],
        recommendedModuleId: 'paradise-nimbus',
      },
      {
        key: 'health' as const,
        label: 'Healthcare',
        problem: 'Scheduling, appointments, cancellations, and patient experience are scattered across systems that do not talk to each other.',
        outcome: 'A clear console for clinical operations, appointment follow-up, and practice experience.',
        tags: ['health', 'clinical', 'scheduling', 'patient-experience', 'operations'],
        recommendedModuleId: 'paradise-atria',
      },
      {
        key: 'pulse' as const,
        label: 'Pulse',
        problem: 'Operational signals get lost in the noise: there is not enough quick visibility into overall state and activity monitoring.',
        outcome: 'Anomaly detection with impact-based prioritization and before/after context to decide what matters.',
        tags: ['anomalies', 'detection', 'risk', 'signals'],
        recommendedModuleId: 'pulse',
      },
      {
        key: 'qc-sentinel' as const,
        label: 'QC Sentinel',
        problem: 'Quality control without clear validation: deviations are detected late and alerts do not arrive on time.',
        outcome: 'A quality workbench with traceability, automatic checks, and batch decisions ready for compliance.',
        tags: ['labs', 'quality', 'audit', 'compliance'],
        recommendedModuleId: 'paradise-qc-sentinel',
      },
      {
        key: 'vault' as const,
        label: 'Vault',
        problem: 'Schemas, contracts, and definitions are scattered, with no visible traceability or data governance for the team.',
        outcome: 'A data room for technical documentation, contracts, and browsable schemas in one place.',
        tags: ['knowledge', 'contracts', 'artifacts', 'docs'],
        recommendedModuleId: 'paradise-vault',
      },
      {
        key: 'velvet' as const,
        label: 'The Velvet',
        problem: 'Nightlife operations are fragmented: bookings, staff, and customer experience live in disconnected systems.',
        outcome: 'A unified operational console for entry, security, staff, and the active night close.',
        tags: ['community', 'operations', 'events', 'nightlife'],
        recommendedModuleId: 'the-velvet',
      },
      {
        key: 'orbit' as const,
        label: 'Orbit',
        problem: 'Cross-functional coordination is opaque: multi-front tracking and orchestration lack central visibility.',
        outcome: 'Registry and discovery to explore modules, health, and ecosystem activity in real time.',
        tags: ['ecosystem', 'registry', 'discovery', 'events'],
        recommendedModuleId: 'paradise-orbit',
      },
      {
        key: 'relay' as const,
        label: 'Relay',
        problem: 'Integrations and automations are configured manually: events and system connections are fragile.',
        outcome: 'An integrations hub for webhooks, email, Slack, and event replay with delivery traceability.',
        tags: ['integrations', 'events', 'webhooks', 'delivery'],
        recommendedModuleId: 'paradise-relay',
      },
      {
        key: 'meter' as const,
        label: 'Meter',
        problem: 'Usage and activity measurement are invisible: there is no visibility into system behavior or plan limits.',
        outcome: 'Billing and usage analytics to understand consumption, adoption, and the current plan per tenant.',
        tags: ['billing', 'usage', 'events', 'saas'],
        recommendedModuleId: 'paradise-meter',
      },
    ],
  },
  featured: {
    title: 'Modules that already show the direction',
    subtitle: 'The selection below adapts to the case chosen above and expands the most relevant module with a more concrete commercial reading.',
  },
  roadmap: {
    title: 'A real base today, a clear evolution tomorrow',
    subtitle:
      'Paradise is not presented as a finished empire. It is presented as a serious ecosystem: already demoable, still growing, and moving in a concrete direction.',
    columns: [
      {
        title: 'Available today',
        description: 'Landing, local demos, visible modules, and a navigable coordination narrative already in place.',
        items: ['Clear commercial experience', 'Navigable modules', 'Mock-first demos and guided flows'],
      },
      {
        title: 'Evolving',
        description: 'Richer connections between modules, better artifacts, and deeper coordination layers.',
        items: ['More interactions between modules', 'More immersive UX by vertical', 'Richer and more consistent artifacts'],
      },
      {
        title: 'Next step',
        description: 'A stronger Nimbus, a stronger central AI, and vertical growth without losing legibility.',
        items: ['Cloud-first control plane', 'Paradise AI as the cross-cutting voice', 'More demo-ready verticals'],
      },
    ],
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        q: 'Is Paradise already a closed product?',
        a: 'No. Today it is a demoable and evolving modular ecosystem. The website shows the direction, logic, and experience that can already be explored.',
      },
      {
        q: 'Do I need to be technical to understand it?',
        a: 'No. The landing is meant to show Paradise in a way that is understandable for business, operations, and technical audiences without hiding complexity behind marketing smoke.',
      },
      {
        q: 'Is Nimbus already fully implemented?',
        a: 'No. Nimbus appears as the evolving structural layer for registry, events, and artifacts, not as an inflated promise that magically solves everything already.',
      },
      {
        q: 'What value does the demo show today?',
        a: 'It shows how a signal enters, how Paradise routes it, and what artifact it leaves ready. That is the heart of the system.',
      },
      {
        q: 'Can Paradise grow by domain without rebuilding the whole thing?',
        a: 'That is the idea. The ecosystem is designed to add verticals and modules without losing the cross-cutting logic or breaking the product identity.',
      },
      {
        q: 'Is this intended only as a portfolio?',
        a: 'No. The landing also works as product-direction proof: it shows how Paradise could be presented, sold, and evolved in front of clients, partners, or recruiters.',
      },
    ],
  },
  contact: {
    title: 'Contact',
    body: 'If you want to review Paradise, tour the demo, or talk about how to land a vertical, this is the entry point.',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/agustin-delgado-data98615190/' },
      { label: 'Email', href: 'mailto:augusto.delgado00@hotmail.com' },
    ],
  },
} as const

export const siteCopy = {
  es: {
    brandSubtitle: 'Ecosistema evolutivo',
    introButton: 'Intro',
    languageLabel: 'Idioma',
    skipToContent: 'Saltar al contenido',
    featuredModules: {
      problem: 'Problema que resuelve',
      forWho: 'Para quién sirve',
      howItWorks: 'Cómo trabaja',
      outputs: 'Lo que entrega',
      whyItMatters: 'Por qué importa dentro de Paradise',
      suggestedButton: 'Ver módulos sugeridos',
      noModules: 'No encontramos módulos con esos tags todavía. Podés explorar el catálogo completo.',
      recommendedModule: 'Módulo recomendado',
      repo: 'Repo',
      demo: 'Demo',
      docs: 'Docs',
    },
    moduleCard: { repo: 'Repo', demo: 'Demo', docs: 'Docs' },
    useCases: { eyebrow: 'Casos / soluciones', problem: 'Problema', expectedOutcome: 'Resultado esperado', suggestedButton: 'Ver módulos sugeridos', recommendedModule: 'Módulo recomendado', noModules: 'No encontramos módulos con esos tags todavía. Podés explorar el catálogo completo.' },
    ecosystem: { eyebrow: 'Arquitectura visible', centralLayer: 'Capa central', domain: 'Dominio' },
    demo: { eyebrow: 'Demostración guiada', signals: 'Señales / Inputs', orchestration: 'Orquestación Paradise', activeFlow: 'flujo activo', artifact: 'Artifact / Resultado', ready: 'listo', paradiseHeadline: 'Coordina, clasifica y decide el siguiente paso' },
    brain: {
      eyebrow: 'Explainability',
      title: 'Cómo piensa Paradise IA',
      subtitle: 'Una demo curada que muestra cómo Paradise interpreta un pedido, detecta señales, recomienda módulos y genera una respuesta guiada. Sin debug crudo: producto explicable.',
      sections: ['Tu pedido', 'Qué detectó Paradise', 'Conclusión ejecutiva', 'Cómo enruta', 'Contexto que usa', 'Conocimiento relevante', 'Respuesta generada'],
      labels: { goals: 'objetivos', priorities: 'prioridades', repeatedProblems: 'problemas repetidos', workflows: 'flujos', matches: 'matches', metrics: 'métricas' },
    },
    howItWorks: { technicalSummaryLabel: 'Vista técnica (resumen)', technicalSummary: ['modules: piezas desacopladas, cada una con propósito claro', 'contracts: schemas / types como interfaz entre módulos', 'artifacts: outputs versionados (exports, docs, snapshots)', 'events: señales estructuradas para coordinación y audit', 'mock-first: demo local antes de cloud'] },
    roadmap: { eyebrow: 'Roadmap honesto', state: 'Estado' },
    creator: {
      title: 'La visión detrás de Paradise',
      p1: 'Una visión inicial que apunta a evolucionar como ecosistema: abierto a más módulos, voces y dominios sumándose sobre el mismo núcleo, sin perder identidad.',
      p2: 'Paradise nace como una forma de pensar productos y sistemas con una lógica más clara, visual y explicable. La búsqueda es construir experiencias, módulos y demos que vuelvan legible lo complejo para negocio y técnica — con sistemas evolutivos y una narrativa que no esconda cómo funciona el producto.',
      p3: 'La idea no es concentrar todo en una sola cara, sino dar un impulso inicial y dejar espacio para que el proyecto se expanda más allá de una sola línea de trabajo.',
      impulse: 'Impulso inicial:',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      imageAlt: 'Agustin Delgado, impulso inicial de Paradise',
    },
    footer: {
      legal: 'Legal',
      legalBody: '© {year} Paradise — Licenciado bajo MIT para el código. Marca y contenido reservados.',
      createdBy: 'Creado por Agustín Delgado.',
      legalLink: 'Aviso legal',
      privacyLink: 'Privacidad',
      contactLink: 'Contacto',
      legalTitle: 'Aviso legal',
      legalP1: 'El contenido, diseño, textos y componentes visuales de este sitio son propiedad de Paradise y/o su creador y están protegidos por derechos de autor.',
      legalP2: 'Queda prohibida su reproducción total o parcial sin autorización expresa.',
      legalP3: 'Paradise es un proyecto en evolución; las funcionalidades y módulos pueden cambiar sin previo aviso.',
      privacyTitle: 'Privacidad',
      privacyP1: 'Este sitio no recolecta datos personales de forma directa.',
      privacyP2: 'Si se incluyen métricas/analytics en el futuro, se informará aquí.',
      privacyP3: 'Para contacto: augusto.delgado00@hotmail.com.',
      trademarks: 'Los nombres \"Paradise\" y los nombres de sus módulos pueden considerarse marcas o identificadores del proyecto.',
    },
    introGate: { title: 'Bienvenido a Paradise', button: 'Entrar a Paradise', videoLabel: 'Video manifiesto de Paradise', dialogLabel: 'Intro de Paradise', buttonAria: 'Reproducir mensaje de bienvenida y entrar a Paradise' },
  },
  en: {
    brandSubtitle: 'Evolving ecosystem',
    introButton: 'Intro',
    languageLabel: 'Language',
    skipToContent: 'Skip to content',
    featuredModules: {
      problem: 'Problem it solves',
      forWho: 'Who it is for',
      howItWorks: 'How it works',
      outputs: 'What it delivers',
      whyItMatters: 'Why it matters inside Paradise',
      suggestedButton: 'See suggested modules',
      noModules: 'We have not found modules for those tags yet. You can explore the full catalog.',
      recommendedModule: 'Recommended module',
      repo: 'Repo',
      demo: 'Demo',
      docs: 'Docs',
    },
    moduleCard: { repo: 'Repo', demo: 'Demo', docs: 'Docs' },
    useCases: { eyebrow: 'Use cases / solutions', problem: 'Problem', expectedOutcome: 'Expected outcome', suggestedButton: 'See suggested modules', recommendedModule: 'Recommended module', noModules: 'We have not found modules for those tags yet. You can explore the full catalog.' },
    ecosystem: { eyebrow: 'Visible architecture', centralLayer: 'Central layer', domain: 'Domain' },
    demo: { eyebrow: 'Guided demo', signals: 'Signals / Inputs', orchestration: 'Paradise orchestration', activeFlow: 'active flow', artifact: 'Artifact / Result', ready: 'ready', paradiseHeadline: 'Coordinates, classifies, and decides the next step' },
    brain: {
      eyebrow: 'Explainability',
      title: 'How Paradise AI thinks',
      subtitle: 'A curated demo that shows how Paradise interprets a request, detects signals, recommends modules, and generates a guided response. No raw debug: explainable product.',
      sections: ['Your request', 'What Paradise detected', 'Executive conclusion', 'How it routes', 'Context it uses', 'Relevant knowledge', 'Generated response'],
      labels: { goals: 'goals', priorities: 'priorities', repeatedProblems: 'repeated problems', workflows: 'workflows', matches: 'matches', metrics: 'metrics' },
    },
    howItWorks: { technicalSummaryLabel: 'Technical view (summary)', technicalSummary: ['modules: decoupled pieces, each with a clear purpose', 'contracts: schemas / types as the interface between modules', 'artifacts: versioned outputs (exports, docs, snapshots)', 'events: structured signals for coordination and audit', 'mock-first: local demo before cloud'] },
    roadmap: { eyebrow: 'Honest roadmap', state: 'State' },
    creator: {
      title: 'The vision behind Paradise',
      p1: 'An initial vision aimed at evolving as an ecosystem: open to more modules, voices, and domains joining the same core without losing identity.',
      p2: 'Paradise was born as a way of thinking about products and systems with clearer, more visual, and more explainable logic. The goal is to build experiences, modules, and demos that make complexity legible for both business and technical audiences — with evolving systems and a narrative that does not hide how the product works.',
      p3: 'The point is not to concentrate everything on a single face, but to provide an initial push and leave room for the project to expand beyond a single line of work.',
      impulse: 'Initial impulse:',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      imageAlt: 'Agustin Delgado, initial impulse behind Paradise',
    },
    footer: {
      legal: 'Legal',
      legalBody: '© {year} Paradise — Licensed under MIT for the code. Brand and content reserved.',
      createdBy: 'Created by Agustín Delgado.',
      legalLink: 'Legal notice',
      privacyLink: 'Privacy',
      contactLink: 'Contact',
      legalTitle: 'Legal notice',
      legalP1: 'The content, design, text, and visual components of this site are the property of Paradise and/or its creator and are protected by copyright.',
      legalP2: 'Total or partial reproduction without express authorization is prohibited.',
      legalP3: 'Paradise is an evolving project; features and modules may change without prior notice.',
      privacyTitle: 'Privacy',
      privacyP1: 'This site does not directly collect personal data.',
      privacyP2: 'If metrics or analytics are included in the future, that will be stated here.',
      privacyP3: 'For contact: augusto.delgado00@hotmail.com.',
      trademarks: 'The name \"Paradise\" and the names of its modules may be considered trademarks or identifiers of the project.',
    },
    introGate: { title: 'Welcome to Paradise', button: 'Enter Paradise', videoLabel: 'Paradise manifesto video', dialogLabel: 'Paradise intro', buttonAria: 'Play welcome message and enter Paradise' },
  },
} as const

const modulesEn: ModuleItem[] = modulesEs.map((module) => ({
  ...module,
  oneLiner: ({
    atlasops: 'Ops intelligence for fast decision-making',
    pulse: 'Anomaly detection with impact-based prioritization',
    nexus: 'Knowledge and context for teams',
    modelarc: 'Semantic modeling for BI (Power BI)',
    'paradise-ai': 'Copilot to navigate modules and deliver briefs',
    'delivery-copilot': 'Handoffs and deliverables for execution',
    showcase: 'End-to-end demo of the Paradise flow',
    'paradise-clubnet': 'Portal for clubs: sport, community, and management in one place',
    'paradise-aulora': 'Campus console for schools: order, follow-up, and communication',
    'paradise-atria': 'Clinical operations console: scheduling, patients, and practice experience',
    'paradise-routeops': 'Logistics console: routes, SLA, and prioritized ops queue',
    'paradise-qc-sentinel': 'Quality workbench: intake, checks, audit, and batch decision',
    'paradise-vault': 'Data room for visible schemas, contracts, and technical documentation',
    'the-velvet': 'Nightlife console for entry, security, staff, and operational close',
    'paradise-orbit': 'Registry and discovery to explore modules, health, and ecosystem activity',
    'paradise-relay': 'Integrations hub for webhooks, email, Slack, and event replay',
    'paradise-meter': 'Billing and usage analytics to understand tenant consumption and limits',
    'paradise-nimbus': 'Cloud-first control plane: registry, events, and artifacts to connect modules',
  } as Record<string, string>)[module.id] ?? module.oneLiner,
  highlights: ({
    atlasops: ['executive KPIs', 'actionable alerts', 'operational playbooks'],
    pulse: ['robust detection', 'severity/risk', 'before/after context'],
    nexus: ['semantic map', 'decision memory', 'knowledge routing'],
    modelarc: ['semantic layer', 'data contracts', 'bridge to Power BI'],
    'paradise-ai': ['clear briefs', 'explainable routing', 'exportable artifacts'],
    'delivery-copilot': ['handoff packs', 'status sync', 'clear ownership'],
    showcase: ['full flow', 'artifacts (alerts/export/docs)', 'guided tour'],
    'paradise-clubnet': ['club dashboard', 'health + training + attendance', 'exports + docs to share'],
    'paradise-aulora': ['launcher by school/role/course', 'course alerts + agenda', 'follow-up and export report'],
    'paradise-atria': ['clinical schedule', 'appointments and cancellations', 'patient experience'],
    'paradise-routeops': ['dispatch + alert queue', 'triage (P1/P2/P3) + detail', 'actions and handoff'],
    'paradise-qc-sentinel': ['chain of custody', 'batch summary + decision', 'deviations & CAPA + export'],
    'paradise-vault': ['document browser', 'JSON/Markdown viewer', 'quick links to contracts'],
    'the-velvet': ['control room', 'check-ins + incidents', 'nightly close report'],
    'paradise-orbit': ['module registry', 'ecosystem stats', 'event stream'],
    'paradise-relay': ['integration toggles', 'event replay', 'deliveries tracking'],
    'paradise-meter': ['usage gauge', 'event breakdown', 'plan tracking'],
    'paradise-nimbus': ['module registry', 'event log + jobs', 'health/observability'],
  } as Record<string, string[]>)[module.id] ?? module.highlights,
}))

const moduleDetailsEn: Record<string, ModuleDetail> = {
  'paradise-ai': {
    problem: 'As the ecosystem grows, finding the right module and turning a need into an executable plan becomes confusing.',
    forWho: 'Teams that need guidance, module discovery, and a clear way to turn questions into action.',
    howItWorks: ['Receives a natural-language request plus optional context such as goals, constraints, and tags.', 'Routes the need with rules and scoring to recommend the best-fit modules.', 'Returns a guided response with a runbook, rationale, and exportable markdown artifacts.'],
    outputs: ['explainable recommendation', 'structured runbook', 'dialogue and brief export'],
    differentiator: 'It does not behave like a generic chatbot: it acts as the voice of the ecosystem and a bridge to concrete modules.',
    statusNote: 'MVP under active development, mock-first and prepared to grow toward generative responses with BYOK.',
  },
  'paradise-nimbus': {
    problem: 'Without a cross-cutting layer, every app solves discovery, events, artifacts, and jobs on its own.',
    forWho: 'Teams that want to add modules without turning Paradise into an opaque monolith.',
    howItWorks: ['Centralizes module registry, event log, artifacts, and operational jobs in a mock-first API.', 'Exposes unified contracts and endpoints so each app can publish status, outputs, and events.', 'Serves as the control-plane foundation for observability, coordination, and cloud-first evolution.'],
    outputs: ['module registry', 'event log', 'versioned artifacts', 'health snapshots and jobs'],
    differentiator: 'It makes cross-cutting coordination visible without forcing hard coupling between modules.',
    statusNote: 'Strong, well-defined idea; today it works as the structural direction of the ecosystem.',
  },
  'paradise-clubnet': {
    problem: 'In clubs and sports communities, health, attendance, training, and organization often live across disconnected tools.',
    forWho: 'Clubs, academies, and sports communities that need order, visibility, and a better member experience.',
    howItWorks: ['Organizes views by role, sport, and operating context.', 'Brings together attendance, health, schedules, lineups, and communication in one console.', 'Makes the state of groups visible and leaves exports ready to share.'],
    outputs: ['club dashboard', 'attendance and training overview', 'shareable brief/export'],
    differentiator: 'It does not stop at admin work: it blends coordination, experience, and sports identity in a single product layer.',
    statusNote: 'One of the strongest current landing demos, with room to grow by sport and club type.',
  },
  'paradise-aulora': {
    problem: 'Courses, materials, updates, and follow-up often end up scattered across too many tools and channels.',
    forWho: 'Schools, programs, and training spaces that need a clearer experience for coordination and learning follow-up.',
    howItWorks: ['Launches contextual views by school, role, and course.', 'Connects agenda, alerts, materials, and follow-up in one flow.', 'Produces summaries and exports that can circulate without losing context.'],
    outputs: ['course overview', 'agenda and alert panel', 'exportable academic summary'],
    differentiator: 'It turns educational coordination into a legible product layer instead of yet another pile of tabs and spreadsheets.',
    statusNote: 'MVP with a strong narrative inside the ecosystem and a good fit for demoing knowledge + coordination.',
  },
  'paradise-atria': {
    problem: 'Schedules, appointments, cancellations, and patient experience are split across systems that do not talk to one another.',
    forWho: 'Clinics and practices that need visibility into operations, reassignment, and patient experience.',
    howItWorks: ['Centralizes schedules, patients, and appointments in a single console.', 'Highlights cancellations, open slots, and operational priorities.', 'Makes it easier to coordinate follow-up and actions with the front desk or medical staff.'],
    outputs: ['clinical schedule view', 'cancellation queue', 'patient-experience summary'],
    differentiator: 'It treats clinical operations as a product experience, not as fragmented software screens.',
    statusNote: 'Promising MVP for the healthcare vertical, especially strong for operational storytelling.',
  },
  'paradise-routeops': {
    problem: 'As logistics volume grows, route deviations, dispatch queues, and handoffs quickly become unreadable.',
    forWho: 'Ops and logistics teams that need clear triage, visible priorities, and traceable handoffs.',
    howItWorks: ['Displays route, queue, and SLA status in one operational console.', 'Prioritizes incidents with triage logic and context per event.', 'Prepares handoff actions and exportable operational packs.'],
    outputs: ['dispatch queue', 'route incident detail', 'handoff/export pack'],
    differentiator: 'It makes logistics operations legible and actionable instead of leaving them buried in dashboards and messaging threads.',
    statusNote: 'Solid for demoing operations + orchestration in a concrete vertical.',
  },
  'paradise-qc-sentinel': {
    problem: 'Quality control without clear validations means deviations are found too late and alerts do not reach the right people in time.',
    forWho: 'Lab and QA environments that need traceability, checks, and clearer decision support.',
    howItWorks: ['Tracks intake, checks, audit signals, and batch decisions in one workbench.', 'Keeps chain of custody and deviations visible with context.', 'Generates exports ready for compliance and follow-up.'],
    outputs: ['quality workbench', 'batch decision summary', 'audit/compliance export'],
    differentiator: 'It turns compliance-heavy workflows into a product experience with operational clarity.',
    statusNote: 'Strong emerging vertical for demonstrating auditable flows and traceability.',
  },
  'paradise-vault': {
    problem: 'Schemas, contracts, and technical definitions are scattered, with no visible traceability for the team.',
    forWho: 'Teams that need a browsable and visible layer for documentation, contracts, and artifacts.',
    howItWorks: ['Organizes documentation, contracts, and technical artifacts in a single data room.', 'Lets people browse and inspect structured content without leaving the product context.', 'Makes key technical references visible through quick links and viewers.'],
    outputs: ['documentation hub', 'schema/contract viewer', 'artifact navigation'],
    differentiator: 'It makes technical knowledge tangible and explorable instead of leaving it buried in repos and docs folders.',
    statusNote: 'Very useful as a supporting module to show ecosystem maturity and governance.',
  },
  'the-velvet': {
    problem: 'Nightlife operations are fragmented: bookings, door control, security, staff, and customer experience live in disconnected systems.',
    forWho: 'Venues and nightlife operations that need one operational view for the active night.',
    howItWorks: ['Coordinates entry, incidents, staff, and operational signals in a single console.', 'Makes the night state visible in real time.', 'Supports operational close with a nightly summary and handoff-ready information.'],
    outputs: ['night control room', 'incident and staff tracking', 'nightly close summary'],
    differentiator: 'It gives nightlife a distinct product identity instead of forcing generic ops tooling into a very specific domain.',
    statusNote: 'Strong vertical idea with brand personality and room for richer experience design.',
  },
  'paradise-orbit': {
    problem: 'Cross-cutting coordination becomes opaque when there is no central place to explore modules, activity, and ecosystem state.',
    forWho: 'People who need visibility into the ecosystem as a whole, not only into one module at a time.',
    howItWorks: ['Surfaces a registry view for modules, states, and activity.', 'Shows ecosystem statistics and event flow in one place.', 'Acts as a discovery layer for the growing product landscape.'],
    outputs: ['registry view', 'ecosystem stats', 'activity/event stream'],
    differentiator: 'It turns ecosystem visibility into a product capability instead of a back-office diagram.',
    statusNote: 'Very good platform-facing piece to communicate breadth without losing orientation.',
  },
  'paradise-relay': {
    problem: 'External integrations are fragile when events, deliveries, and automations are configured manually.',
    forWho: 'Teams that need a visible integration layer for webhooks, email, Slack, and event replay.',
    howItWorks: ['Tracks integrations and delivery flows from one hub.', 'Lets you inspect replay and delivery behavior with better traceability.', 'Helps modules connect outward without hiding what is happening.'],
    outputs: ['integration hub', 'replay controls', 'delivery tracking'],
    differentiator: 'It gives integrations a product-grade layer instead of leaving them as invisible plumbing.',
    statusNote: 'Useful platform module for showing operational maturity and ecosystem connectivity.',
  },
  'paradise-meter': {
    problem: 'Usage, activity, and plan limits remain invisible, so product consumption becomes guesswork.',
    forWho: 'Multi-tenant scenarios where it is useful to understand usage, adoption, and current plan by client.',
    howItWorks: ['Counts tenant events and computes key usage metrics.', 'Compares consumption against plan limits and makes overuse risk visible.', 'Summarizes activity by event type to read both usage and value.'],
    outputs: ['usage gauge', 'tenant metrics', 'event breakdown', 'plan status'],
    differentiator: 'It makes billing and usage visible without turning them into forgotten gray back-office screens.',
    statusNote: 'Secondary, but useful for showing SaaS-platform maturity.',
  },
  'delivery-copilot': {
    problem: 'A messy brief usually turns into inconsistent deliverables, a weak backlog, and unclear handoffs.',
    forWho: 'Delivery leads, PMs, and teams that need to turn diffuse context into execution artifacts.',
    howItWorks: ['Receives an unstructured project brief and transforms it into a PRD, backlog, QA pack, or risk report.', 'Validates outputs with schema and repair loops to preserve consistency.', 'Allows local demo mode to show value without depending on credentials or backend.'],
    outputs: ['PRD', 'backlog', 'QA pack', 'risk matrix', 'executive summary'],
    differentiator: 'It grounds the AI promise in concrete, exportable deliverables for real work.',
    statusNote: 'Secondary on the landing, but very strong as an artifact-centered demo piece.',
  },
  atlasops: {
    problem: 'When operations speed up, signals, ownership, and urgency become hard to read in scattered dashboards and chat threads.',
    forWho: 'Ops teams that need visible priorities, clearer coordination, and action-ready outputs.',
    howItWorks: ['Brings KPIs, alerts, and operational playbooks into one view.', 'Prioritizes what matters by impact and urgency.', 'Leaves behind clear deliverables for handoff and follow-up.'],
    outputs: ['executive KPIs', 'alert queue', 'actionable ops brief'],
    differentiator: 'It makes operational decision-making clearer instead of adding more monitoring noise.',
    statusNote: 'One of the clearest modules for showing immediate business and ops value.',
  },
  pulse: {
    problem: 'Anomalies are often detected too late or without enough context to understand what actually matters.',
    forWho: 'Teams that need fast signal detection with business-oriented prioritization.',
    howItWorks: ['Detects anomalous behavior and scores impact/risk.', 'Adds before/after context so deviations are not isolated data points.', 'Helps teams focus on what deserves attention first.'],
    outputs: ['anomaly detection panel', 'impact/risk scoring', 'contextual signal summary'],
    differentiator: 'It avoids raw anomaly hype by tying detection to prioritization and decision support.',
    statusNote: 'Good analytical module to demonstrate signal intelligence in a practical way.',
  },
}

const showcaseTracesEn: ShowcaseTrace[] = [
  {
    key: 'health',
    label: 'Healthcare / Paradise Atria',
    request: 'I need to see the status of tomorrow’s schedule. There were cancellations and I want to know which slots are open for rescheduling.',
    executiveConclusion: 'Request for visibility into the clinical schedule, cancellations, and slot availability. Domain: practice operations and patient experience.',
    determinantSignals: [
      { label: 'domain', value: 'healthcare / clinic' },
      { label: 'main entity', value: 'schedule and appointments' },
      { label: 'action', value: 'reschedule + visualize availability' },
      { label: 'context', value: 'cancellations, slots' },
    ],
    routing: {
      primary: 'Paradise Atria',
      secondary: 'Paradise Nexus',
      reasons: ['Atria is specialized in clinical operations, schedules, and appointments.', 'Cancellations and slot management are core to the module.', 'Nexus contributes historical context and memory of similar decisions.'],
    },
    context: {
      goals: ['Schedule visibility', 'Optimize open slots', 'Reduce no-shows'],
      priorities: ['Next-day status', 'Fast reassignment'],
      repeatedProblems: ['Cancellations left unreassigned', 'Slots left empty'],
      workflows: ['Schedule review', 'Rescheduling', 'Patient notification'],
    },
    knowledge: {
      summary: 'Atria handles clinical scheduling, appointments, cancellations, and patient flow. It combines operational visibility with practice experience.',
      rules: ['Centralized schedule by clinic and practitioner.', 'Cancellations automatically generate freed slots.', 'Rescheduling prioritizes urgency and availability.'],
      metrics: ['available slots', 'pending cancellations', 'occupancy by day'],
    },
    response: {
      summary: 'I recommend opening Paradise Atria to review tomorrow’s schedule status. There you will have a view of cancellations, freed slots, and availability by clinic.',
      why: ['Atria is designed for exactly this case: schedule + cancellations + slots.', 'The console shows what is free and what needs reassignment.', 'You can export a summary to share with the front desk or physicians.'],
      nextSteps: ['Open Atria and filter by tomorrow.', 'Review the cancellation queue and freed slots.', 'Reschedule or notify according to priority.'],
      followUp: 'If you want, I can prepare a brief with the schedule summary and suggested actions for the shift.',
    },
  },
  {
    key: 'community',
    label: 'Community / Paradise ClubNet',
    request: 'The club has coordination problems: attendance is irregular, messages get lost, and we do not really know the status of the groups. What can we use?',
    executiveConclusion: 'Coordination request for a club or community: attendance, communication, and group status. Domain: community / sports.',
    determinantSignals: [
      { label: 'domain', value: 'club / community' },
      { label: 'main entity', value: 'groups and members' },
      { label: 'problems', value: 'irregular attendance, scattered communication' },
      { label: 'need', value: 'visibility and coordination' },
    ],
    routing: {
      primary: 'Paradise ClubNet',
      secondary: 'Paradise Nexus',
      reasons: ['ClubNet is designed for clubs and sports communities.', 'It centralizes attendance, communication, and group status.', 'Nexus contributes coordination memory and decision context.'],
    },
    context: {
      goals: ['Improve attendance', 'Centralize communication', 'Visible group status'],
      priorities: ['Do not lose messages', 'See who participates', 'Early alerts'],
      repeatedProblems: ['Low attendance in some groups', 'Messages split across multiple channels'],
      workflows: ['Attendance follow-up', 'Coordination', 'Shareable exports'],
    },
    knowledge: {
      summary: 'ClubNet brings together the club dashboard, directory, health, training, attendance, and lineup. It allows views to be personalized by role and context.',
      rules: ['Unified dashboard for admin, members, and viewers.', 'Attendance and risks visible by group.', 'Shareable exports and reports.'],
      metrics: ['attendance by group', 'participation', 'low-participation risks'],
    },
    response: {
      summary: 'Paradise ClubNet is a direct fit: it centralizes attendance, communication, and group status in one console. You avoid scattered messages and gain clear visibility.',
      why: ['ClubNet is built for clubs and sports communities.', 'It brings together irregular attendance, communications, and group status.', 'You can export a brief to share with the board or coaches.'],
      nextSteps: ['Set up ClubNet with the club groups.', 'Centralize communications and attendance.', 'Review the dashboard and act on low-participation groups.'],
      followUp: 'Do you want me to prepare a club status brief with the groups at risk and the suggested next actions?',
    },
  },
  {
    key: 'ops',
    label: 'Operations / AtlasOps',
    request: 'We have an alert queue, a critical SLA deviation, and handoffs getting lost. We need triage and something actionable.',
    executiveConclusion: 'Operational triage request: alerts, SLA, and handoffs. Domain: operations, prioritization, and guided response.',
    determinantSignals: [
      { label: 'domain', value: 'operations' },
      { label: 'main entity', value: 'alerts and SLA' },
      { label: 'problem', value: 'incomplete handoffs, critical deviations' },
      { label: 'need', value: 'triage + action' },
    ],
    routing: {
      primary: 'Paradise AtlasOps',
      secondary: 'AI Delivery Copilot',
      reasons: ['AtlasOps handles operational KPIs, alerts, and playbooks.', 'The alert queue and P1/P2/P3 triage are core to it.', 'Delivery Copilot generates structured, exportable handoffs.'],
    },
    context: {
      goals: ['Clear triage', 'Respond to SLA deviations', 'Stop losing handoffs'],
      priorities: ['P1 first', 'Context per alert', 'Visible ownership'],
      repeatedProblems: ['Alerts without owners', 'Incomplete handoffs', 'Deviations that escalate too late'],
      workflows: ['Alert queue', 'Severity triage', 'Structured handoff'],
    },
    knowledge: {
      summary: 'AtlasOps monitors operational metrics, detects anomalies, and organizes the alert queue with context. It suggests playbooks and executive reports.',
      rules: ['Alerts classified by severity and impact.', 'Suggested playbooks by incident type.', 'Exportable reports for briefings.'],
      metrics: ['open alerts', 'SLA at risk', 'pending handoffs'],
    },
    response: {
      summary: 'AtlasOps is the right module: alert queue with triage, context by incident, and playbooks. Delivery Copilot builds the structured handoff so it does not get lost.',
      why: ['AtlasOps is designed for operational triage and SLA deviations.', 'The prioritized queue and context keep alerts from getting lost.', 'Delivery Copilot generates clear, exportable handoffs.'],
      nextSteps: ['Open AtlasOps and review the P1/P2/P3 queue.', 'Assign an owner to each critical alert.', 'Generate the handoff with Delivery Copilot and circulate it.'],
      followUp: 'Do you want an operational brief for the shift with priorities and the next step for the team?',
    },
  },
]

const statusLabelEn: Record<Status, string> = { active: 'Active', mvp: 'MVP', idea: 'Idea', demo: 'Demo' }
const pillarLabelEn: Record<Pillar, string> = { ops: 'Operations', anomalies: 'Anomalies', knowledge: 'Knowledge', modeling: 'Modeling', copilot: 'Copilot', delivery: 'Delivery', ecosystem: 'Ecosystem' }

export function getMarketingCopy(locale: Locale) {
  return locale === 'en' ? marketingCopyEn : marketingCopyEs
}
export function getSiteCopy(locale: Locale) {
  return siteCopy[locale]
}
export function getModules(locale: Locale) {
  return locale === 'en' ? modulesEn : modulesEs
}
export function getModuleDetails(locale: Locale) {
  return locale === 'en' ? moduleDetailsEn : moduleDetailsEs
}
export function getShowcaseTraces(locale: Locale) {
  return locale === 'en' ? showcaseTracesEn : showcaseTracesEs
}
export function getStatusLabel(locale: Locale) {
  return locale === 'en' ? statusLabelEn : statusLabelEs
}
export function getPillarLabel(locale: Locale) {
  return locale === 'en' ? pillarLabelEn : pillarLabelEs
}
