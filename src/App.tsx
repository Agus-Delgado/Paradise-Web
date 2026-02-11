import { type CSSProperties, useMemo, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { links, roadmap } from './data/content'
import {
  heroCopy,
  paradiseCoreCopy,
  pillarsCopy,
  principlesCopy,
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
    label: 'Operaciones',
    targetId: 'modules',
    tags: ['ops', 'routing', 'signals'],
  },
  {
    label: 'Anomalías',
    targetId: 'modules',
    tags: ['anomalies', 'risk'],
  },
  {
    label: 'Conocimiento',
    targetId: 'modules',
    tags: ['knowledge', 'memory'],
  },
  {
    label: 'Modelado',
    targetId: 'modules',
    tags: ['modeling', 'semantic'],
  },
  {
    label: 'Copiloto',
    targetId: 'showcase',
    tags: ['copilot', 'narrative'],
  },
]

const heroMeta = ['Costo cero', 'Mocks primero', 'Modular', 'Docs primero']
const showcaseSteps = ['Explorá capacidades', 'Abrí un módulo', 'Revisá entregables (alertas/export/docs)', 'Compartí / handoff']
const reviewFlowPrompt =
  'flujo sugerido (2 min): explorá capacidades -> abrí un módulo -> revisá entregables (alertas/export/docs) -> compartí / handoff'

function App() {
  const reduceMotion = useReducedMotion() ?? false
  const [moduleQuery, setModuleQuery] = useState('')
  const [selectedPillar, setSelectedPillar] = useState<Pillar | 'all'>('all')
  const [hoveredPillar, setHoveredPillar] = useState<Pillar | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<Status | 'all'>('all')
  const [routerSelection, setRouterSelection] = useState<string | null>(null)
  const [highlightTags, setHighlightTags] = useState<string[]>([])

  const activePillar = hoveredPillar ?? (selectedPillar === 'all' ? null : selectedPillar)

  const filteredModules = useMemo(() => {
    let list = modules
    if (activePillar) {
      list = filterByPillar(list, activePillar)
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
  }, [moduleQuery, activePillar, selectedStatus])

  const highlightedModules = useMemo(() => {
    const ids = new Set<string>()
    if (highlightTags.length) {
      modules
        .filter((module) => module.tags.some((tag) => highlightTags.includes(tag)))
        .forEach((module) => ids.add(module.id))
    }
    if (activePillar) {
      modules.filter((module) => module.pillar === activePillar).forEach((module) => ids.add(module.id))
    }
    return ids
  }, [highlightTags, activePillar])

  const suggestedModules = useMemo(() => {
    if (!highlightTags.length) return []
    return modules.filter((module) => module.tags.some((tag) => highlightTags.includes(tag))).slice(0, 2)
  }, [highlightTags])

  const navItems = [
    { label: 'Solución', href: '#about' },
    { label: 'Beneficios', href: '#principles' },
    { label: 'Capacidades', href: '#pillars' },
    { label: 'Soluciones', href: '#modules' },
    { label: 'Demo', href: '#showcase' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Contacto', href: '#contact' },
  ]

  const handleExplore = (chip: (typeof routerChips)[number]) => {
    setRouterSelection(chip.label)
    setHighlightTags(chip.tags)

    const target = document.getElementById(chip.targetId)
    if (target) {
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
    }
  }

  const handleClearFilters = () => {
    setSelectedPillar('all')
    setSelectedStatus('all')
    setModuleQuery('')
    setHoveredPillar(null)
  }

  const handleStartTour = () => {
    setSelectedPillar(Pillar.Ops)
    setHoveredPillar(null)
    const target = document.getElementById('modules')
    if (target) {
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
    }
  }

  return (
    <ThemeProvider>
      <PageShell navItems={navItems} onClearFilters={handleClearFilters}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 rounded-full bg-white px-4 py-2 text-sm font-semibold text-night-950 shadow"
        >
          Saltar al contenido
        </a>

        <div id="main" className="relative">
          <HeroAurora
            className="pt-20"
            style={{ '--grid-opacity': 0.04, '--glow-strength': 0.24 } as CSSProperties}
          >
            <Container id="hero" className="pb-16 md:pt-8">
              <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="max-w-[65ch]">
                  <Badge>{heroCopy.kicker}</Badge>
                  <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl">
                    {heroCopy.title}
                  </h1>
                  <p className="mt-5 text-base leading-relaxed text-slate-300/85 md:text-lg">
                    {heroCopy.description}
                  </p>
                  <p className="mt-3 text-sm font-medium tracking-wide text-slate-400 md:text-base">
                    {heroCopy.subclaim}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {toneTags.map((tag) => (
                      <Pill key={tag}>{tag}</Pill>
                    ))}
                  </div>
                  <div className="mt-10 flex flex-wrap gap-3">
                    <Link
                      href="#modules"
                      className="rounded-[var(--radius-pill)] bg-[rgb(var(--accent-1)/0.9)] px-6 py-3 text-sm font-semibold text-night-950 shadow-[0_0_40px_rgb(var(--accent-1)/var(--glow-strength))] transition hover:bg-[rgb(var(--accent-1)/1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--accent-1)/0.85)]"
                    >
                      {heroCopy.ctas.catalog}
                    </Link>
                    <Link
                      href="#showcase"
                      className="rounded-[var(--radius-pill)] border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--accent-1)/0.85)]"
                    >
                      {heroCopy.ctas.showcase}
                    </Link>
                    <Link
                      href="https://github.com/paradise-ecosystem"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-[var(--radius-pill)] border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--accent-1)/0.85)]"
                    >
                      {heroCopy.ctas.github}
                    </Link>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {heroMeta.map((item) => (
                      <Badge
                        key={item}
                        className="border-white/15 bg-white/5 px-3 py-1 text-[0.55rem] font-semibold tracking-[0.28em] text-slate-200"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="grid gap-6">
                  <PromptBlock
                    label="Prompt de terminal"
                    value="ruta: ops + anomalías → Paradise Pulse + AtlasOps; salida: brief de riesgo"
                  />
                  <PromptBlock
                    label="Brief del copiloto"
                    value="Resumí el cambio de señal y proponé un plan de ruteo determinístico."
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
                  <p className="prompt-block">Núcleo Paradise</p>
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

          <Section id="about" kicker="Qué es Paradise" title={whatIsCopy.title} description={whatIsCopy.description}>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[var(--radius-lg)] border border-white/10 bg-night-900/70 p-6">
                <p className="prompt-block">Qué es Paradise</p>
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
            kicker="Beneficios"
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
            kicker="Capacidades"
            title={pillarsCopy.title}
            description={pillarsCopy.description}
          >
            <PillarCards
              selectedPillar={selectedPillar}
              activePillar={activePillar}
              onSelect={(pillar) => setSelectedPillar(pillar)}
              onHover={setHoveredPillar}
            />
          </Section>

          <Section
            id="modules"
            kicker="Catálogo de módulos"
            title="Elegí el módulo correcto para tu caso."
            description="Filtrá por objetivo (operaciones, anomalías, conocimiento, delivery) y explorá qué entregables genera cada módulo."
          >
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="self-start rounded-[var(--radius-lg)] border border-white/10 bg-night-900/70 p-6 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-auto">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="min-w-[220px] flex-1">
                    <label className="prompt-block" htmlFor="moduleQuery">
                      Buscar módulos
                    </label>
                    <input
                      id="moduleQuery"
                      value={moduleQuery}
                      onChange={(event) => setModuleQuery(event.target.value)}
                      placeholder="Ej: operaciones, anomalías, mvp"
                      className="mt-3 w-full rounded-[var(--radius-md)] border border-white/10 bg-night-950/60 px-4 py-3 text-sm text-white shadow-inner transition focus:border-[rgb(var(--accent-1)/0.7)] focus:outline-none"
                    />
                  </div>
                  <div className="min-w-[220px]">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Filtros activos</p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {selectedPillar !== 'all' && (
                        <Pill className="border-white/20 bg-white/5 text-slate-200">
                          {pillarLabel[selectedPillar]}
                        </Pill>
                      )}
                      {selectedStatus !== 'all' && (
                        <Pill className="border-white/20 bg-white/5 text-slate-200">{statusLabel[selectedStatus]}</Pill>
                      )}
                      {moduleQuery.trim() !== '' && (
                        <Pill className="border-white/20 bg-white/5 text-slate-200">Búsqueda</Pill>
                      )}
                      {selectedPillar === 'all' && selectedStatus === 'all' && moduleQuery.trim() === '' && (
                        <span className="text-xs text-slate-400">Ninguno</span>
                      )}
                      <Button size="sm" variant="ghost" onClick={handleClearFilters}>
                        Limpiar
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Capacidad</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      variant={selectedPillar === 'all' ? 'outline' : 'ghost'}
                      onClick={() => setSelectedPillar('all')}
                    >
                      Todas
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
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Estado</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      variant={selectedStatus === 'all' ? 'outline' : 'ghost'}
                      onClick={() => setSelectedStatus('all')}
                    >
                      Todos
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
                {activePillar && (
                  <div className="flex flex-wrap items-center justify-between gap-3 rounded-[var(--radius-md)] border border-white/10 bg-night-950/60 px-4 py-3 text-xs text-slate-300">
                    <span>
                      Filtrado por: <span className="font-semibold text-white">{pillarLabel[activePillar]}</span>
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        setSelectedPillar('all')
                        setHoveredPillar(null)
                      }}
                    >
                      Limpiar
                    </Button>
                  </div>
                )}
                {filteredModules.map((module) => (
                  <ModuleCard
                    key={module.id}
                    module={module}
                    highlighted={highlightedModules.has(module.id)}
                  />
                ))}
                {filteredModules.length === 0 && (
                  <div className="rounded-[var(--radius-lg)] border border-dashed border-white/20 bg-night-900/40 p-6 text-sm text-slate-400">
                    No hay módulos que coincidan con este filtro.
                  </div>
                )}
              </div>
            </div>
          </Section>

          <Section
            id="showcase"
            kicker="Showcase"
            title="Paradise Showcase"
            description="Demo integradora del ecosistema en 2–3 minutos: señales → contexto → acción."
          >
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[var(--radius-lg)] border border-white/10 bg-night-900/70 p-6">
                <p className="prompt-block">Tour (2 min)</p>
                <h3 className="mt-3 text-lg font-semibold text-white">Recorrido rápido</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Un flujo simple para entender qué resuelve Paradise, qué módulos usar y qué entregables vas a obtener.
                </p>
                <ol className="mt-5 grid gap-3">
                  {showcaseSteps.map((step, index) => (
                    <li
                      key={step}
                      className="flex items-center gap-3 rounded-[var(--radius-md)] border border-white/10 bg-night-950/60 px-4 py-3 text-sm text-slate-200"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6">
                  <Button size="lg" variant="outline" onClick={handleStartTour}>
                    Empezar el tour
                  </Button>
                </div>
              </div>
              <PromptBlock label="Flujo sugerido (2 min)" value={reviewFlowPrompt} />
            </div>
          </Section>

          <Section id="roadmap" kicker="Hoja de ruta" title={roadmapCopy.title} description={roadmapCopy.description}>
            <TimelineRoadmap phases={roadmap} />
          </Section>

          <Section
            id="footer"
            kicker="Recursos"
            title="Links útiles"
            description="Repositorios, documentación y demos del ecosistema."
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

          <Section
            id="contact"
            kicker="Contacto"
            title="¿Querés ver Paradise en acción con tu caso?"
            description="Podemos armar una demo corta con tu dataset o un escenario tipo (ops/anomalías/knowledge)."
          >
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[var(--radius-lg)] border border-white/10 bg-night-900/70 p-6">
                <p className="prompt-block">Qué incluye</p>
                <div className="mt-4 grid gap-3 text-sm text-slate-300">
                  {[
                    {
                      title: 'Walkthrough de 15 minutos',
                      description: 'Tour guiado + Q&A para alinear objetivos y casos de uso.',
                    },
                    {
                      title: 'POC rápida (mock-first)',
                      description: 'Probamos flujos y entregables sin depender de integraciones complejas.',
                    },
                    {
                      title: 'Plan de activación por módulos',
                      description: 'Qué empezar, qué medir, y cómo escalar a medida que hay resultados.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[var(--radius-md)] border border-white/10 bg-night-950/60 p-3"
                    >
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-xs text-slate-400">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="mailto:hello@paradise.ecosystem?subject=Quiero%20una%20demo%20de%20Paradise"
                    className="rounded-[var(--radius-pill)] bg-[rgb(var(--accent-1)/0.9)] px-6 py-3 text-sm font-semibold text-night-950 shadow-[0_0_40px_rgb(var(--accent-1)/var(--glow-strength))] transition hover:bg-[rgb(var(--accent-1)/1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--accent-1)/0.85)]"
                  >
                    Solicitar demo
                  </Link>
                  <Link
                    href="#modules"
                    className="rounded-[var(--radius-pill)] border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--accent-1)/0.85)]"
                  >
                    Ver catálogo
                  </Link>
                </div>
                <p className="mt-4 text-xs text-slate-400">
                  También podés reemplazar este email por tu canal de contacto (form, calendario o WhatsApp).
                </p>
              </div>
              <PromptBlock
                label="Un pedido típico"
                value="Quiero reducir ruido de alertas y mejorar handoffs. Caso: caen transacciones / suben refunds. Necesito: alertas por severidad + playbooks + export para compartir."
              />
            </div>
          </Section>
        </div>
      </PageShell>
    </ThemeProvider>
  )
}

export default App
