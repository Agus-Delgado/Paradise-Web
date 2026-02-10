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
    oneLiner: 'Ops Intelligence',
    highlights: ['routing telemetry', 'ops playbooks', 'signal orchestration'],
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
    oneLiner: 'Anomaly Detection',
    highlights: ['alert fusion', 'pattern scans', 'impact scoring'],
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
    oneLiner: 'Knowledge Management',
    highlights: ['knowledge routing', 'semantic map', 'memory lanes'],
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
    oneLiner: 'Semantic Modeling (Power BI)',
    highlights: ['model vault', 'semantic layers', 'power bi bridge'],
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
    oneLiner: 'Ecosystem Copilot',
    highlights: ['copilot briefs', 'decision routing', 'explainable steps'],
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
    oneLiner: 'Delivery & Handoff',
    highlights: ['handoff packs', 'status sync', 'owner transitions'],
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
    oneLiner: 'Integradora del ecosistema',
    highlights: ['end-to-end flow', 'module stitching', 'live preview'],
    repoUrl: '#',
    demoUrl: '#',
    docsUrl: '#',
    tags: ['showcase', 'demo', 'ecosystem'],
  },
]

export const statusLabel: Record<Status, string> = {
  [Status.Active]: 'Active',
  [Status.Mvp]: 'MVP',
  [Status.Idea]: 'Idea',
  [Status.Demo]: 'Demo',
}

export const pillarLabel: Record<Pillar, string> = {
  [Pillar.Ops]: 'Ops Intelligence',
  [Pillar.Anomalies]: 'Anomaly Detection',
  [Pillar.Knowledge]: 'Knowledge Management',
  [Pillar.Modeling]: 'Semantic Modeling',
  [Pillar.Copilot]: 'Ecosystem Copilot',
  [Pillar.Delivery]: 'Delivery & Handoff',
  [Pillar.Ecosystem]: 'Ecosystem Integrations',
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
