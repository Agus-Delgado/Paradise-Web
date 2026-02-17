import { useMemo, useState } from 'react'
import type { ModuleItem } from '../../data/modules'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { cn } from '../ui/cn'
import { ModuleCard } from '../landing/ModuleCard'

type UseCase = {
  key: string
  label: string
  problem: string
  outcome: string
  tags: ReadonlyArray<string>
}

export function UseCaseTabs({
  title,
  subtitle,
  cases,
  modules,
  onSelectTags,
}: {
  title: string
  subtitle: string
  cases: ReadonlyArray<UseCase>
  modules: ModuleItem[]
  onSelectTags?: (tags: ReadonlyArray<string>) => void
}) {
  const [active, setActive] = useState(cases[0]?.key ?? 'ops')

  const activeCase = useMemo(() => cases.find((c) => c.key === active) ?? cases[0], [active, cases])

  const recommended = useMemo(() => {
    if (!activeCase) return []
    return modules
      .filter((m) => m.tags.some((t) => activeCase.tags.includes(t)))
      .slice(0, 2)
  }, [modules, activeCase])

  return (
    <Section id="casos" className="py-16">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
              <p className="p-text-muted mt-3 text-sm leading-relaxed md:text-base">{subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {cases.map((c) => {
              const isActive = c.key === active
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setActive(c.key)}
                  className={cn(
                      'p-chip rounded-[var(--radius-pill)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]',
                      isActive && 'p-chip-active',
                  )}
                >
                  {c.label}
                </button>
              )
            })}
          </div>
        </div>

        {activeCase ? (
          <div className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Problema</p>
              <p className="mt-2 text-base font-semibold text-white">{activeCase.problem}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Entrega</p>
                <p className="p-text-muted mt-2 text-sm leading-relaxed">{activeCase.outcome}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    onSelectTags?.([...activeCase.tags])
                    const target = document.getElementById('modulos')
                    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                >
                  Ver módulos sugeridos
                </Button>
              </div>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              {recommended.map((m) => (
                <ModuleCard key={m.id} module={m} highlightTags={[...activeCase.tags]} compact />
              ))}
              {recommended.length === 0 ? (
                <Card className="p-6 md:col-span-2">
                    <p className="p-text-muted text-sm">
                    No encontramos módulos con esos tags todavía. Podés explorar el catálogo completo.
                  </p>
                </Card>
              ) : null}
            </div>
          </div>
        ) : null}
      </Container>
    </Section>
  )
}
