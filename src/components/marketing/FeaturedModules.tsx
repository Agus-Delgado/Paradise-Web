import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, CheckCircle2, Layers3, Sparkles } from 'lucide-react'
import type { ModuleItem } from '../../data/modules'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { ModuleCard } from '../landing/ModuleCard'
import { Card } from '../ui/Card'
import { Link } from '../ui/Link'
import { Pill } from '../ui/Pill'
import { moduleDetails } from '../../data/moduleDetails'
import { statusLabel } from '../../data/modules'
import { cn } from '../ui/cn'

const priorityOrder = [
  'paradise-ai',
  'paradise-nimbus',
  'paradise-clubnet',
  'paradise-aulora',
  'paradise-atria',
  'atlasops',
  'paradise-routeops',
  'pulse',
  'paradise-qc-sentinel',
  'paradise-vault',
  'the-velvet',
  'paradise-orbit',
  'paradise-relay',
  'paradise-meter',
  'delivery-copilot',
] as const

function priorityIndex(id: string) {
  const idx = priorityOrder.indexOf(id as (typeof priorityOrder)[number])
  return idx === -1 ? 999 : idx
}

export function FeaturedModules({
  title,
  subtitle,
  items,
  allModules,
  highlightTags,
  preferredModuleId,
}: {
  title: string
  subtitle: string
  items: ModuleItem[]
  allModules: ModuleItem[]
  highlightTags?: string[]
  preferredModuleId?: string
}) {
  const availableModules = useMemo(() => {
    const curated = allModules
      .filter((module) => priorityIndex(module.id) < 999)
      .sort((a, b) => priorityIndex(a.id) - priorityIndex(b.id))
    return curated.length ? curated : items
  }, [allModules, items])

  const suggestedModule = useMemo(() => {
    if (preferredModuleId) {
      const byId = availableModules.find((m) => m.id === preferredModuleId)
      if (byId) return byId
    }
    if (highlightTags?.length) {
      return availableModules.find((module) => module.tags.some((tag) => highlightTags.includes(tag))) ?? availableModules[0]
    }
    return availableModules[0]
  }, [availableModules, highlightTags, preferredModuleId])

  const [selectedId, setSelectedId] = useState<string>(suggestedModule?.id ?? availableModules[0]?.id ?? '')

  useEffect(() => {
    if (suggestedModule?.id) {
      setSelectedId(suggestedModule.id)
    }
  }, [suggestedModule?.id])

  const selectedModule = availableModules.find((module) => module.id === selectedId) ?? availableModules[0]
  const detail = selectedModule ? moduleDetails[selectedModule.id] : undefined

  return (
    <Section id="modulos" className="py-18 md:py-24">
      <Container>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
        <p className="p-text-muted mt-3 max-w-3xl text-sm leading-relaxed md:text-base">{subtitle}</p>

        <div className="mt-10 grid gap-5 xl:grid-cols-[1.04fr_0.96fr] xl:items-start">
          {selectedModule && detail ? (
            <Card className="p-7 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <Pill>{selectedModule.name}</Pill>
                    <Pill className="p-chip-active">{statusLabel[selectedModule.status]}</Pill>
                  </div>
                  <h3 className="mt-4 max-w-[18ch] text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {selectedModule.oneLiner}
                  </h3>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-[rgb(var(--accent-2)/0.92)]">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">Problema que resuelve</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-100">{detail.problem}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">Para quién sirve</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-100">{detail.forWho}</p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-3xl border border-[rgb(var(--p-accent-rgb)/0.16)] bg-[radial-gradient(circle_at_top,rgb(var(--p-accent-rgb)/0.14),transparent_70%),rgba(255,255,255,0.04)] p-5">
                  <div className="flex items-center gap-2 text-white">
                    <Layers3 className="h-4 w-4 text-[rgb(var(--accent-2)/0.9)]" />
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-300">Cómo trabaja</p>
                  </div>
                  <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-slate-100">
                    {detail.howItWorks.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[rgb(var(--p-accent-rgb)/0.8)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-emerald-400/18 bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(255,255,255,0.03))] p-5">
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-200">Lo que entrega</p>
                  </div>
                  <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-slate-100">
                    {detail.outputs.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">Por qué importa dentro de Paradise</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-100">{detail.differentiator}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">{detail.statusNote}</p>
              </div>

              {selectedModule.tags.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {selectedModule.tags.map((tag) => (
                    <Pill key={tag} className={cn(highlightTags?.includes(tag) && 'p-chip-active')}>
                      {tag}
                    </Pill>
                  ))}
                </div>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-3">
                {selectedModule.repoUrl && selectedModule.repoUrl !== '#' ? (
                  <Link href={selectedModule.repoUrl} muted className="p-btn-secondary rounded-[var(--radius-pill)] px-5 py-3 text-sm font-semibold">
                    Repo
                  </Link>
                ) : null}
                {selectedModule.demoUrl && selectedModule.demoUrl !== '#' ? (
                  <Link href={selectedModule.demoUrl} muted className="p-btn-secondary rounded-[var(--radius-pill)] px-5 py-3 text-sm font-semibold">
                    Demo
                  </Link>
                ) : null}
                {selectedModule.docsUrl && selectedModule.docsUrl !== '#' ? (
                  <Link href={selectedModule.docsUrl} muted className="p-btn-secondary rounded-[var(--radius-pill)] px-5 py-3 text-sm font-semibold">
                    Docs
                  </Link>
                ) : null}
              </div>
            </Card>
          ) : selectedModule && !detail ? (
            <Card className="flex flex-col gap-5 p-7 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <Pill>{selectedModule.name}</Pill>
                    <Pill className="p-chip-active">{statusLabel[selectedModule.status]}</Pill>
                  </div>
                  <h3 className="mt-4 max-w-[18ch] text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {selectedModule.oneLiner}
                  </h3>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-[rgb(var(--accent-2)/0.92)]">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
              {selectedModule.highlights.length ? (
                <ul className="p-text-muted grid gap-2 text-sm">
                  {selectedModule.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[rgb(var(--p-accent-rgb)/0.7)]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <p className="p-text-muted rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm italic">
                Detalle en preparación.
              </p>
              {selectedModule.tags.length ? (
                <div className="flex flex-wrap gap-2">
                  {selectedModule.tags.map((tag) => (
                    <Pill key={tag} className={cn(highlightTags?.includes(tag) && 'p-chip-active')}>
                      {tag}
                    </Pill>
                  ))}
                </div>
              ) : null}
              <div className="flex flex-wrap gap-3">
                {selectedModule.repoUrl && selectedModule.repoUrl !== '#' ? (
                  <Link href={selectedModule.repoUrl} muted className="p-btn-secondary rounded-[var(--radius-pill)] px-5 py-3 text-sm font-semibold">
                    Repo
                  </Link>
                ) : null}
                {selectedModule.demoUrl && selectedModule.demoUrl !== '#' ? (
                  <Link href={selectedModule.demoUrl} muted className="p-btn-secondary rounded-[var(--radius-pill)] px-5 py-3 text-sm font-semibold">
                    Demo
                  </Link>
                ) : null}
                {selectedModule.docsUrl && selectedModule.docsUrl !== '#' ? (
                  <Link href={selectedModule.docsUrl} muted className="p-btn-secondary rounded-[var(--radius-pill)] px-5 py-3 text-sm font-semibold">
                    Docs
                  </Link>
                ) : null}
              </div>
            </Card>
          ) : null}

          <div className="grid gap-4 md:grid-cols-2">
            {availableModules.map((module) => (
              <button
                key={module.id}
                type="button"
                onClick={() => setSelectedId(module.id)}
                className="text-left"
                aria-pressed={module.id === selectedId}
              >
                <ModuleCard
                  module={module}
                  highlightTags={highlightTags ?? []}
                  compact
                  hideFooter
                  highlighted={module.id === selectedId || module.tags.some((tag) => highlightTags?.includes(tag))}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
          <ArrowRight className="h-4 w-4 text-[rgb(var(--accent-2)/0.9)]" />
          Elegí cualquier módulo para ver una lectura más detallada de qué resuelve, cómo opera y qué entrega.
        </div>
      </Container>
    </Section>
  )
}
