import { useMemo, useState } from 'react'
import type { ModuleItem, Pillar, Status } from '../../data/modules'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { ModuleCard } from '../landing/ModuleCard'
import { cn } from '../ui/cn'
import { pillarLabel, statusLabel } from '../../data/modules'

export function FullCatalog({
  title,
  subtitle,
  toggleLabel,
  hideLabel,
  searchPlaceholder,
  filtersLabel,
  clearLabel,
  modules,
  selectedTags,
  onClearSelectedTags,
}: {
  title: string
  subtitle: string
  toggleLabel: string
  hideLabel: string
  searchPlaceholder: string
  filtersLabel: string
  clearLabel: string
  modules: ModuleItem[]
  selectedTags: string[]
  onClearSelectedTags?: () => void
}) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [pillar, setPillar] = useState<Pillar | 'all'>('all')
  const [status, setStatus] = useState<Status | 'all'>('all')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return modules.filter((m) => {
      if (pillar !== 'all' && m.pillar !== pillar) return false
      if (status !== 'all' && m.status !== status) return false
      if (selectedTags.length && !m.tags.some((t) => selectedTags.includes(t))) return false
      if (!q) return true
      const hay = `${m.name} ${m.oneLiner} ${m.tags.join(' ')}`.toLowerCase()
      return hay.includes(q)
    })
  }, [modules, query, pillar, status, selectedTags])

  const clear = () => {
    setQuery('')
    setPillar('all')
    setStatus('all')
    onClearSelectedTags?.()
  }

  return (
    <Section className="py-16">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
            <p className="p-text-muted mt-3 text-sm leading-relaxed md:text-base">{subtitle}</p>
          </div>
          <div className="flex w-full flex-col items-start gap-4 md:w-auto md:items-end">
            {selectedTags.length ? (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
                  Sugeridos
                </span>
                {selectedTags.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="p-chip rounded-[var(--radius-pill)] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em]"
                  >
                    {t}
                  </span>
                ))}
                <button
                  type="button"
                  onClick={() => onClearSelectedTags?.()}
                  className="rounded-[var(--radius-pill)] px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--p-accent-rgb)/0.8)]"
                >
                  Limpiar sugerencias
                </button>
              </div>
            ) : null}

            <Button
              variant="primary"
              onClick={() => setOpen((v) => !v)}
              className="rounded-[var(--radius-pill)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em]"
            >
              {open ? hideLabel : toggleLabel}
            </Button>
          </div>
        </div>

        {open ? (
          <Card className="mt-8 p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full rounded-[var(--radius-md)] border border-[var(--p-border)] bg-night-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--p-accent-rgb)/0.45)] md:max-w-md"
              />

              <div className="flex flex-wrap gap-2">
                <Button variant="ghost" onClick={() => setShowFilters((v) => !v)}>
                  {filtersLabel}
                </Button>
                <Button variant="ghost" onClick={clear}>
                  {clearLabel}
                </Button>
              </div>
            </div>

            {showFilters ? (
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="p-card rounded-[var(--radius-md)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Pillar</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(['all', 'ops', 'anomalies', 'knowledge', 'modeling', 'copilot', 'delivery', 'ecosystem'] as const).map(
                      (p) => {
                        const active = pillar === p
                        const label = p === 'all' ? 'Todos' : pillarLabel[p as Pillar]
                        return (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setPillar(p as any)}
                            className={cn(
                              'p-chip rounded-[var(--radius-pill)] px-3 py-2 text-xs font-semibold',
                              active && 'p-chip-active',
                            )}
                          >
                            {label}
                          </button>
                        )
                      },
                    )}
                  </div>
                </div>

                <div className="p-card rounded-[var(--radius-md)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Estado</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(['all', 'active', 'mvp', 'demo', 'idea'] as const).map((s) => {
                      const active = status === s
                      const label = s === 'all' ? 'Todos' : statusLabel[s as Status]
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setStatus(s as any)}
                          className={cn(
                              'p-chip rounded-[var(--radius-pill)] px-3 py-2 text-xs font-semibold',
                              active && 'p-chip-active',
                          )}
                        >
                          {label}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            ) : null}

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((m) => (
                <ModuleCard key={m.id} module={m} highlightTags={selectedTags} />
              ))}
              {filtered.length === 0 ? (
                <div className="p-card p-text-muted rounded-[var(--radius-md)] p-6 text-sm md:col-span-2 lg:col-span-3">
                  No hay resultados con esos filtros.
                </div>
              ) : null}
            </div>
          </Card>
        ) : null}
      </Container>
    </Section>
  )
}
