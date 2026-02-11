export const Pillar = {
  Ops: 'ops',
  Anomalies: 'anomalies',
  Knowledge: 'knowledge',
  Modeling: 'modeling',
  Copilot: 'copilot',
  Delivery: 'delivery',
  Ecosystem: 'ecosystem',
} as const

export type Pillar = (typeof Pillar)[keyof typeof Pillar]

export const Status = {
  Active: 'active',
  Mvp: 'mvp',
  Idea: 'idea',
  Demo: 'demo',
} as const

export type Status = (typeof Status)[keyof typeof Status]

export type ModuleItem = {
  id: string
  name: string
  pillar: Pillar
  status: Status
  oneLiner: string
  highlights: string[]
  repoUrl: string
  demoUrl?: string
  docsUrl?: string
  tags: string[]
}

export const modules: ModuleItem[] = [
  {
    id: 'atlasops',
    name: 'Paradise AtlasOps',
    pillar: Pillar.Ops,
    status: Status.Active,
    oneLiner: 'Ops Intelligence para tomar decisiones rápidas',
    highlights: ['KPIs ejecutivos', 'alertas accionables', 'playbooks operativos'],
    repoUrl: '#',
    demoUrl: '#',
    docsUrl: '#',
    tags: ['ops', 'routing', 'signals'],
  },
  {
    id: 'pulse',
    name: 'Paradise Pulse',
    pillar: Pillar.Anomalies,
    status: Status.Mvp,
    oneLiner: 'Detección de anomalías con priorización por impacto',
    highlights: ['detección robusta', 'severidad/riesgo', 'contexto antes/después'],
    repoUrl: '#',
    demoUrl: '#',
    docsUrl: '#',
    tags: ['anomalies', 'detection', 'risk'],
  },
  {
    id: 'nexus',
    name: 'Paradise Nexus',
    pillar: Pillar.Knowledge,
    status: Status.Mvp,
    oneLiner: 'Conocimiento y contexto para equipos',
    highlights: ['mapa semántico', 'memoria de decisiones', 'ruteo de conocimiento'],
    repoUrl: '#',
    demoUrl: '#',
    docsUrl: '#',
    tags: ['knowledge', 'memory', 'context'],
  },
  {
    id: 'modelarc',
    name: 'Paradise ModelArc',
    pillar: Pillar.Modeling,
    status: Status.Idea,
    oneLiner: 'Semantic Modeling para BI (Power BI)',
    highlights: ['semantic layer', 'contratos de datos', 'puente a Power BI'],
    repoUrl: '#',
    demoUrl: '#',
    docsUrl: '#',
    tags: ['modeling', 'semantic', 'power-bi'],
  },
  {
    id: 'paradise-ai',
    name: 'Paradise-AI',
    pillar: Pillar.Copilot,
    status: Status.Mvp,
    oneLiner: 'Copiloto para navegar módulos y entregar briefs',
    highlights: ['briefs claros', 'ruteo explicable', 'artefactos exportables'],
    repoUrl: '#',
    demoUrl: '#',
    docsUrl: '#',
    tags: ['copilot', 'narrative', 'routing'],
  },
  {
    id: 'delivery-copilot',
    name: 'AI Delivery Copilot',
    pillar: Pillar.Delivery,
    status: Status.Mvp,
    oneLiner: 'Handoffs y entregables para ejecución',
    highlights: ['packs de handoff', 'status sync', 'ownership claro'],
    repoUrl: '#',
    demoUrl: '#',
    docsUrl: '#',
    tags: ['delivery', 'handoff', 'ops'],
  },
  {
    id: 'showcase',
    name: 'Paradise Showcase',
    pillar: Pillar.Ecosystem,
    status: Status.Demo,
    oneLiner: 'Demo end-to-end del flujo Paradise',
    highlights: ['flujo completo', 'artefactos (alerts/export/docs)', 'tour guiado'],
    repoUrl: '#',
    demoUrl: '#',
    docsUrl: '#',
    tags: ['showcase', 'demo', 'ecosystem'],
  },
]

export const statusLabel: Record<Status, string> = {
  [Status.Active]: 'Activo',
  [Status.Mvp]: 'MVP',
  [Status.Idea]: 'Idea',
  [Status.Demo]: 'Demo',
}

export const pillarLabel: Record<Pillar, string> = {
  [Pillar.Ops]: 'Operaciones',
  [Pillar.Anomalies]: 'Anomalías',
  [Pillar.Knowledge]: 'Conocimiento',
  [Pillar.Modeling]: 'Modelado',
  [Pillar.Copilot]: 'Copiloto',
  [Pillar.Delivery]: 'Entrega',
  [Pillar.Ecosystem]: 'Ecosistema',
}

export const badgeVariant: Record<Status, 'primary' | 'outline' | 'ghost'> = {
  [Status.Active]: 'primary',
  [Status.Mvp]: 'outline',
  [Status.Idea]: 'ghost',
  [Status.Demo]: 'outline',
}

export const filterByPillar = (items: ModuleItem[], pillar: Pillar) =>
  items.filter((item) => item.pillar === pillar)

export const filterByStatus = (items: ModuleItem[], status: Status) =>
  items.filter((item) => item.status === status)
