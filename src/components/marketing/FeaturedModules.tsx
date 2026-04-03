import { useEffect, useMemo, useState } from 'react'
import { CheckCircle2, Layers3, Sparkles } from 'lucide-react'
import type { ModuleItem } from '../../data/modules'
import { Section } from '../ui/Section'
import { ModuleCard } from '../landing/ModuleCard'
import { Card } from '../ui/Card'
import { Link } from '../ui/Link'
import { Pill } from '../ui/Pill'
import { cn } from '../ui/cn'
import { getModuleDetails, getSiteCopy, getStatusLabel, type Locale } from '../../content/localization'

const priorityOrder = ['paradise-ai', 'paradise-nimbus', 'paradise-clubnet', 'paradise-aulora', 'paradise-atria', 'atlasops', 'paradise-routeops', 'pulse', 'paradise-qc-sentinel', 'paradise-vault', 'the-velvet', 'paradise-orbit', 'paradise-relay', 'paradise-meter', 'delivery-copilot'] as const
function priorityIndex(id: string) { const idx = priorityOrder.indexOf(id as (typeof priorityOrder)[number]); return idx === -1 ? 999 : idx }

export function FeaturedModules({ title, subtitle, items, allModules, highlightTags, preferredModuleId, locale = 'es' }: { title: string; subtitle: string; items: ModuleItem[]; allModules: ModuleItem[]; highlightTags?: string[]; preferredModuleId?: string; locale?: Locale }) {
  const availableModules = useMemo(() => {
    const curated = allModules.filter((module) => priorityIndex(module.id) < 999).sort((a, b) => priorityIndex(a.id) - priorityIndex(b.id))
    return curated.length ? curated : items
  }, [allModules, items])
  const suggestedModule = useMemo(() => {
    if (preferredModuleId) {
      const byId = availableModules.find((m) => m.id === preferredModuleId)
      if (byId) return byId
    }
    if (highlightTags?.length) return availableModules.find((module) => module.tags.some((tag) => highlightTags.includes(tag))) ?? availableModules[0]
    return availableModules[0]
  }, [availableModules, highlightTags, preferredModuleId])
  const [selectedId, setSelectedId] = useState<string>(suggestedModule?.id ?? availableModules[0]?.id ?? '')
  useEffect(() => { if (suggestedModule?.id) setSelectedId(suggestedModule.id) }, [suggestedModule?.id])
  const selectedModule = availableModules.find((module) => module.id === selectedId) ?? availableModules[0]
  const detail = selectedModule ? getModuleDetails(locale)[selectedModule.id] : undefined
  const labels = getSiteCopy(locale).featuredModules
  const statusLabel = getStatusLabel(locale)

  return (
    <Section id="modulos" className="py-16 sm:py-20 md:py-24">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">{title}</h2>
      <p className="p-text-muted mt-3 max-w-3xl text-sm leading-relaxed md:text-base">{subtitle}</p>
      <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 xl:grid-cols-[1.04fr_0.96fr] xl:items-start">
        {selectedModule && detail ? (
          <Card className="p-5 sm:p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex flex-wrap gap-2">
                  <Pill>{selectedModule.name}</Pill>
                  <Pill className="p-chip-active">{statusLabel[selectedModule.status]}</Pill>
                </div>
                <h3 className="mt-3 max-w-[18ch] text-[1.42rem] font-semibold tracking-tight text-white sm:mt-4 sm:text-2xl md:text-3xl">{selectedModule.oneLiner}</h3>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-[rgb(var(--accent-2)/0.92)] sm:rounded-2xl sm:p-3"><Sparkles className="h-5 w-5" /></div>
            </div>
            <div className="mt-6 grid gap-3.5 sm:mt-7 sm:gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:rounded-3xl sm:p-5"><p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">{labels.problem}</p><p className="mt-3 text-sm leading-relaxed text-slate-100">{detail.problem}</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:rounded-3xl sm:p-5"><p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">{labels.forWho}</p><p className="mt-3 text-sm leading-relaxed text-slate-100">{detail.forWho}</p></div>
            </div>
            <div className="mt-4 grid gap-3.5 sm:mt-5 sm:gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-[rgb(var(--p-accent-rgb)/0.16)] bg-[radial-gradient(circle_at_top,rgb(var(--p-accent-rgb)/0.14),transparent_70%),rgba(255,255,255,0.04)] p-4 sm:rounded-3xl sm:p-5">
                <div className="flex items-center gap-2 text-white"><Layers3 className="h-4 w-4 text-[rgb(var(--accent-2)/0.9)]" /><p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-300">{labels.howItWorks}</p></div>
                <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-slate-100">{detail.howItWorks.map((item) => <li key={item} className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[rgb(var(--p-accent-rgb)/0.8)]" /><span>{item}</span></li>)}</ul>
              </div>
              <div className="rounded-2xl border border-emerald-400/18 bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(255,255,255,0.03))] p-4 sm:rounded-3xl sm:p-5">
                <div className="flex items-center gap-2 text-white"><CheckCircle2 className="h-4 w-4 text-emerald-300" /><p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-200">{labels.outputs}</p></div>
                <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-slate-100">{detail.outputs.map((item) => <li key={item} className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-300" /><span>{item}</span></li>)}</ul>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:mt-5 sm:rounded-3xl sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">{labels.whyItMatters}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-100">{detail.differentiator}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{detail.statusNote}</p>
            </div>
            {selectedModule.tags.length ? <div className="mt-5 flex flex-wrap gap-2">{selectedModule.tags.map((tag) => <Pill key={tag} className={cn(highlightTags?.includes(tag) && 'p-chip-active')}>{tag}</Pill>)}</div> : null}
            <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
              {selectedModule.repoUrl && selectedModule.repoUrl !== '#' ? <Link href={selectedModule.repoUrl} muted className="p-btn-secondary rounded-[var(--radius-pill)] px-5 py-3 text-sm font-semibold">{labels.repo}</Link> : null}
              {selectedModule.demoUrl && selectedModule.demoUrl !== '#' ? <Link href={selectedModule.demoUrl} muted className="p-btn-secondary rounded-[var(--radius-pill)] px-5 py-3 text-sm font-semibold">{labels.demo}</Link> : null}
              {selectedModule.docsUrl && selectedModule.docsUrl !== '#' ? <Link href={selectedModule.docsUrl} muted className="p-btn-secondary rounded-[var(--radius-pill)] px-5 py-3 text-sm font-semibold">{labels.docs}</Link> : null}
            </div>
          </Card>
        ) : selectedModule ? (
          <Card className="flex flex-col gap-4 p-5 sm:gap-5 sm:p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3"><div><div className="flex flex-wrap gap-2"><Pill>{selectedModule.name}</Pill><Pill className="p-chip-active">{statusLabel[selectedModule.status]}</Pill></div><h3 className="mt-3 max-w-[18ch] text-[1.42rem] font-semibold tracking-tight text-white sm:mt-4 sm:text-2xl md:text-3xl">{selectedModule.oneLiner}</h3></div><div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-[rgb(var(--accent-2)/0.92)] sm:rounded-2xl sm:p-3"><Sparkles className="h-5 w-5" /></div></div>
            {selectedModule.highlights.length ? <ul className="p-text-muted grid gap-2 text-sm">{selectedModule.highlights.map((h) => <li key={h} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[rgb(var(--p-accent-rgb)/0.7)]" /><span>{h}</span></li>)}</ul> : null}
          </Card>
        ) : null}
        <div className="grid gap-3.5 sm:gap-4">{availableModules.map((module) => <button key={module.id} type="button" onClick={() => setSelectedId(module.id)} className="text-left"><ModuleCard module={module} compact highlighted={module.id === selectedModule?.id} highlightTags={highlightTags} hideFooter locale={locale} /></button>)}</div>
      </div>
    </Section>
  )
}
