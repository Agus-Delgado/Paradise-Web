import { useEffect, useMemo, useState } from 'react'
import type { ModuleItem } from '../../data/modules'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { cn } from '../ui/cn'
import { ModuleCard } from '../landing/ModuleCard'
import { getSiteCopy, type Locale } from '../../content/localization'

type UseCase = { key: string; label: string; problem: string; outcome: string; tags: ReadonlyArray<string>; recommendedModuleId?: string }

export function UseCaseTabs({ title, subtitle, cases, modules, onSelectTags, onSelectModuleId, locale = 'es' }: { title: string; subtitle: string; cases: ReadonlyArray<UseCase>; modules: ModuleItem[]; onSelectTags?: (tags: ReadonlyArray<string>) => void; onSelectModuleId?: (moduleId: string) => void; locale?: Locale }) {
  const [active, setActive] = useState(cases[0]?.key ?? 'ops')
  const activeCase = useMemo(() => cases.find((c) => c.key === active) ?? cases[0], [active, cases])
  const recommended = useMemo(() => {
    if (!activeCase) return []
    if (activeCase.recommendedModuleId) { const byId = modules.find((m) => m.id === activeCase.recommendedModuleId); if (byId) return [byId] }
    return modules.filter((m) => m.tags.some((t) => activeCase.tags.includes(t))).slice(0, 1)
  }, [modules, activeCase])
  useEffect(() => { if (activeCase) { onSelectTags?.([...activeCase.tags]); if (activeCase.recommendedModuleId) onSelectModuleId?.(activeCase.recommendedModuleId) } }, [activeCase, onSelectTags, onSelectModuleId])
  const heroModule = recommended[0]
  const labels = getSiteCopy(locale).useCases

  return (
    <Section id="casos" className="py-16 sm:py-20 md:py-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl"><p className="prompt-block">{labels.eyebrow}</p><h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">{title}</h2><p className="p-text-muted mt-3 text-sm leading-relaxed md:text-base">{subtitle}</p></div>
        <div className="flex flex-wrap gap-2 sm:gap-2.5">{cases.map((c) => <Button key={c.key} variant={c.key === active ? 'primary' : 'outline'} size="sm" onClick={() => setActive(c.key)} className={cn(c.key === active && 'shadow-[0_0_24px_-14px_var(--p-glow)]')}>{c.label}</Button>)}</div>
      </div>
      {activeCase ? (
        <div className="mt-7 grid gap-4 sm:mt-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-stretch">
          <Card className="flex h-full flex-col justify-between p-5 sm:p-6"><div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">{labels.problem}</p><p className="mt-2 max-w-[24ch] text-[1rem] font-semibold leading-relaxed text-white sm:text-[1.08rem]">{activeCase.problem}</p><p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">{labels.expectedOutcome}</p><p className="p-text-muted mt-2 max-w-[42ch] text-sm leading-relaxed">{activeCase.outcome}</p><div className="mt-5 flex flex-wrap gap-2 sm:mt-6">{activeCase.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-200">{tag}</span>)}</div></div><div className="mt-6 flex flex-wrap gap-2"><Button variant="outline" onClick={() => { onSelectTags?.([...activeCase.tags]); if (activeCase.recommendedModuleId) onSelectModuleId?.(activeCase.recommendedModuleId); document.getElementById('modulos')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}>{labels.suggestedButton}</Button></div></Card>
          {heroModule ? <ModuleCard module={heroModule} highlightTags={[...activeCase.tags]} variant="featured" pillarLabelOverride={labels.recommendedModule} locale={locale} /> : <Card className="p-6"><p className="p-text-muted text-sm">{labels.noModules}</p></Card>}
        </div>
      ) : null}
    </Section>
  )
}
