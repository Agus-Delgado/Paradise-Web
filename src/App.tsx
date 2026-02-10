import { useMemo, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { links, roadmap } from './data/content'
import {
  heroCopy,
  paradiseCoreCopy,
  pillarsCopy,
  principlesCopy,
  reviewFlowCopy,
  roadmapCopy,
  whatIsCopy,
} from './content/copy'
import { toneTags } from './data/tone'
import { Pillar, Status, filterByPillar, filterByStatus, modules, pillarLabel, statusLabel } from './data/modules'
import { PageShell } from './components/layout/PageShell'
import { Button } from './components/ui/Button'
import { Card } from './components/ui/Card'
import { Container } from './components/ui/Container'
import { Divider } from './components/ui/Divider'
import { Link } from './components/ui/Link'
import { Pill } from './components/ui/Pill'
import { Section } from './components/ui/Section'
import { Badge } from './components/ui/Badge'
import { ThemeProvider } from './theme/useThemeEngine.tsx'
import {
  HeroAurora,
  ModuleCard,
  PillarCards,
  PromptBlock,
  RouterPanel,
  TimelineRoadmap,
} from './components/landing'

const routerChips = [
  {
    label: 'Ops',
    targetId: 'modules',
    tags: ['ops', 'routing', 'signals'],
  },
  {
    label: 'Anomalies',
    targetId: 'modules',
    tags: ['anomalies', 'risk'],
  },
  {
    label: 'Knowledge',
    targetId: 'modules',
    tags: ['knowledge', 'memory'],
  },
  {
    label: 'Modeling',
    targetId: 'modules',
    tags: ['modeling', 'semantic'],
  },
  {
    label: 'Copilot',
    targetId: 'showcase',
    tags: ['copilot', 'narrative'],
  },
]

function App() {
  const reduceMotion = useReducedMotion() ?? false
  const [moduleQuery, setModuleQuery] = useState('')
  const [selectedPillar, setSelectedPillar] = useState<Pillar | 'all'>('all')
  const [selectedStatus, setSelectedStatus] = useState<Status | 'all'>('all')
  const [routerSelection, setRouterSelection] = useState<string | null>(null)
  const [highlightTags, setHighlightTags] = useState<string[]>([])

  const filteredModules = useMemo(() => {
    let list = modules
    if (selectedPillar !== 'all') {
      list = filterByPillar(list, selectedPillar)
    }
    if (selectedStatus !== 'all') {
      list = filterByStatus(list, selectedStatus)
    }
    const query = moduleQuery.trim().toLowerCase()
    if (!query) return list

    return list.filter((module) => {
      const haystack = `${module.name} ${module.oneLiner} ${module.tags.join(' ')}`.toLowerCase()
      return haystack.includes(query)
    })
  }, [moduleQuery, selectedPillar, selectedStatus])

  const highlightedModules = useMemo(() => {
    if (!highlightTags.length) return new Set<string>()
    return new Set(modules.filter((module) => module.tags.some((tag) => highlightTags.includes(tag))).map((m) => m.id))
  }, [highlightTags])

  const suggestedModules = useMemo(() => {
    if (!highlightTags.length) return []
    return modules.filter((module) => module.tags.some((tag) => highlightTags.includes(tag))).slice(0, 2)
  }, [highlightTags])

  const navItems = [
    { label: 'Hero', href: '#hero' },
    { label: 'What', href: '#what' },
    { label: 'Principles', href: '#principles' },
    { label: 'Pillars', href: '#pillars' },
    { label: 'Modules', href: '#modules' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Footer', href: '#footer' },
  ]

  const handleExplore = (chip: (typeof routerChips)[number]) => {
    setRouterSelection(chip.label)
    setHighlightTags(chip.tags)

    const target = document.getElementById(chip.targetId)
    if (target) {
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
    }
  }

  return (
    <ThemeProvider>
      <PageShell navItems={navItems}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 rounded-full bg-white px-4 py-2 text-sm font-semibold text-night-950 shadow"
        >
          Skip to content
        </a>

        <div id="main" className="relative">
          <HeroAurora className="pt-20">
            <Container id="hero" className="pb-16 md:pt-8">
              <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <Badge>{heroCopy.kicker}</Badge>
                  <h1 className="mt-6 font-display text-4xl font-semibold text-white md:text-5xl">
                    {heroCopy.title}
                  </h1>
                  <p className="mt-4 max-w-xl text-base text-slate-300 md:text-lg">{heroCopy.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {toneTags.map((tag) => (
                      <Pill key={tag}>{tag}</Pill>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="#modules"
                      className="rounded-[var(--radius-pill)] bg-[rgb(var(--accent-1)/0.9)] px-6 py-3 text-sm font-semibold text-night-950 shadow-[0_0_40px_rgb(var(--accent-1)/var(--glow-strength))] hover:bg-[rgb(var(--accent-1)/1)]"
                    >
                      {heroCopy.ctas.catalog}
                    </Link>
                    <Link
                      href="#showcase"
                      className="rounded-[var(--radius-pill)] border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-white/40"
                    >
                      {heroCopy.ctas.showcase}
                    </Link>
                    <Link
                      href="https://github.com/paradise-ecosystem"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-[var(--radius-pill)] border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-white/40"
                    >
                      {heroCopy.ctas.github}
                    </Link>
                  </div>
                </div>
                <div className="grid gap-6">
                  <PromptBlock
                    label="Terminal prompt"
                    value="route: ops anomaly > Paradise Pulse + AtlasOps; output: risk briefing"
                  />
                  <PromptBlock
                    label="Copilot brief"
                    value="Summarize the signal shift and propose a deterministic routing plan."
                  />
                </div>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <RouterPanel
                  chips={routerChips}
                  selected={routerSelection}
                  onSelect={handleExplore}
                  suggestions={suggestedModules}
                />
                <div className="rounded-[var(--radius-lg)] border border-white/10 bg-night-900/70 p-6">
                  <p className="prompt-block">Paradise Core</p>
                  <div className="mt-4 grid gap-3 text-sm text-slate-300">
                    {paradiseCoreCopy.items.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[var(--radius-md)] border border-white/10 bg-night-950/60 p-3"
                      >
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="mt-1 text-xs text-slate-400">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </HeroAurora>

          <Divider className="mx-auto max-w-6xl" />

          <Section id="what" kicker="What is Paradise" title={whatIsCopy.title} description={whatIsCopy.description}>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[var(--radius-lg)] border border-white/10 bg-night-900/70 p-6">
                <p className="prompt-block">What is Paradise</p>
                <div className="mt-4 space-y-3 text-sm text-slate-300">
                  {whatIsCopy.bullets.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[rgb(var(--accent-1)/0.9)]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[var(--radius-lg)] border border-white/10 bg-night-900/70 p-6">
                <p className="prompt-block">{paradiseCoreCopy.title}</p>
                <div className="mt-4 grid gap-3 text-sm text-slate-300">
                  {paradiseCoreCopy.items.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[var(--radius-md)] border border-white/10 bg-night-950/60 p-3"
                    >
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-xs text-slate-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          <Section
            id="principles"
            kicker="Principles"
            title={principlesCopy.title}
            description={principlesCopy.description}
          >
            <div className="grid gap-4 md:grid-cols-2">
              {principlesCopy.items.map((principle) => (
                <Card key={principle.title} className="border-white/10 bg-night-900/60">
                  <p className="text-sm font-semibold text-white">{principle.title}</p>
                  <p className="mt-2 text-xs text-slate-400">{principle.description}</p>
                </Card>
              ))}
            </div>
          </Section>

          <Section
            id="pillars"
            kicker="Pillars"
            title={pillarsCopy.title}
            description={pillarsCopy.description}
          >
            <PillarCards />
          </Section>

          <Section
            id="modules"
            kicker="Module Catalog"
            title="Catalogo de modulos filtrable."
            description="Busca por nombre, tag, pillar o estado. El router panel resalta modulos relevantes sin IA real."
          >
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[var(--radius-lg)] border border-white/10 bg-night-900/70 p-6">
                <label className="prompt-block" htmlFor="moduleQuery">
                  Filter modules
                </label>
                <input
                  id="moduleQuery"
                  value={moduleQuery}
                  onChange={(event) => setModuleQuery(event.target.value)}
                  placeholder="Ej: ops, knowledge, mvp"
                  className="mt-3 w-full rounded-[var(--radius-md)] border border-white/10 bg-night-950/60 px-4 py-3 text-sm text-white shadow-inner transition focus:border-[rgb(var(--accent-1)/0.7)] focus:outline-none"
                />
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Pillar</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      variant={selectedPillar === 'all' ? 'outline' : 'ghost'}
                      onClick={() => setSelectedPillar('all')}
                    >
                      All
                    </Button>
                    {Object.values(Pillar).map((pillar) => (
                      <Button
                        key={pillar}
                        size="sm"
                        variant={selectedPillar === pillar ? 'outline' : 'ghost'}
                        onClick={() => setSelectedPillar(pillar)}
                      >
                        {pillarLabel[pillar]}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Status</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      variant={selectedStatus === 'all' ? 'outline' : 'ghost'}
                      onClick={() => setSelectedStatus('all')}
                    >
                      All
                    </Button>
                    {Object.values(Status).map((status) => (
                      <Button
                        key={status}
                        size="sm"
                        variant={selectedStatus === status ? 'outline' : 'ghost'}
                        onClick={() => setSelectedStatus(status)}
                      >
                        {statusLabel[status]}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                {filteredModules.map((module) => (
                  <ModuleCard
                    key={module.id}
                    module={module}
                    highlighted={highlightedModules.has(module.id)}
                  />
                ))}
                {filteredModules.length === 0 && (
                  <div className="rounded-[var(--radius-lg)] border border-dashed border-white/20 bg-night-900/40 p-6 text-sm text-slate-400">
                    No modules match this filter yet. Ajusta el texto o prueba otro tag.
                  </div>
                )}
              </div>
            </div>
          </Section>

          <Section
            id="showcase"
            kicker="Showcase"
            title={reviewFlowCopy.title}
            description={reviewFlowCopy.description}
          >
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[var(--radius-lg)] border border-white/10 bg-night-900/70 p-6">
                <p className="prompt-block">Demo integradora</p>
                <h3 className="mt-3 text-lg font-semibold text-white">Paradise Flow Demo</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Simula un flujo completo: intake, routing, memoria y explicacion final. Todo local y determinista.
                </p>
                <div className="mt-4 grid gap-2 text-xs text-slate-400">
                  {[
                    'Entrada de requerimientos en lenguaje natural',
                    'Routing determinista por contexto',
                    'Memoria viva y trazas de auditoria',
                    'UI promptable para iterar decisiones',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-1)/0.9)]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[var(--radius-lg)] border border-white/10 bg-night-900/70 p-6">
                <p className="prompt-block">{reviewFlowCopy.title}</p>
                <div className="mt-4 grid gap-3">
                  {reviewFlowCopy.steps.map((step) => (
                    <div
                      key={step.title}
                      className="rounded-[var(--radius-md)] border border-white/10 bg-night-950/60 p-3"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-white">{step.title}</p>
                        <span className="text-xs text-slate-400">{step.time}</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-400">{step.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          <Section id="roadmap" kicker="Roadmap" title={roadmapCopy.title} description={roadmapCopy.description}>
            <TimelineRoadmap phases={roadmap} />
          </Section>

          <Section
            id="footer"
            kicker="Footer"
            title="Accesos directos del ecosistema."
            description="Estos links son placeholders. Reemplaza con URLs reales cuando el ecosistema este listo."
          >
            <div className="grid gap-4 md:grid-cols-3">
              {links.map((link) => (
                <div
                  key={link.label}
                  className="rounded-[var(--radius-lg)] border border-white/10 bg-night-900/70 p-6"
                >
                  <Link href={link.href} target="_blank" rel="noreferrer" className="text-base text-white">
                    {link.label}
                  </Link>
                  <p className="mt-2 text-xs text-slate-400">{link.note}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </PageShell>
    </ThemeProvider>
  )
}

export default App
