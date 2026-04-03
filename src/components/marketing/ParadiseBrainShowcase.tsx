import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Brain, FileSearch, Layers3, Lightbulb, MessageSquare, Route, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { ShowcaseTrace } from '../../data/showcaseTraces'
import { showcaseTraces } from '../../data/showcaseTraces'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { cn } from '../ui/cn'
import { getSiteCopy, type Locale } from '../../content/localization'

const DEFAULT_TRACE_KEY = 'health'

export function ParadiseBrainShowcase({ traces = showcaseTraces, locale = 'es' }: { traces?: readonly ShowcaseTrace[]; locale?: Locale }) {
  const reduceMotion = useReducedMotion() ?? false
  const [active, setActive] = useState(DEFAULT_TRACE_KEY)
  const trace = useMemo(() => traces.find((t) => t.key === active) ?? traces[0], [active, traces])
  const copy = getSiteCopy(locale).brain
  const [s1, s2, s3, s4, s5, s6, s7] = copy.sections

  if (!trace) return null

  return (
    <Section id="como-piensa" className="py-16 sm:py-20 md:py-24">
      <div className="max-w-3xl">
        <p className="prompt-block">{copy.eyebrow}</p>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">{copy.title}</h2>
        <p className="p-text-muted mt-4 text-sm leading-relaxed md:text-base">{copy.subtitle}</p>
      </div>

      <div className="mt-7 flex flex-wrap gap-2 sm:mt-8">
        {traces.map((t) => (
          <Button key={t.key} variant={t.key === active ? 'primary' : 'outline'} size="sm" onClick={() => setActive(t.key)} className={cn(t.key === active && 'shadow-[0_0_24px_-14px_var(--p-glow)]')}>
            {t.label}
          </Button>
        ))}
      </div>

      <Card className="demo-shell mt-7 overflow-hidden p-0 sm:mt-8">
        <div className="border-b border-white/10 px-4 py-3.5 text-sm text-slate-300 sm:px-5 sm:py-4 md:px-6">
          <span className="font-semibold text-white">{trace.label}</span>
        </div>

        <div className="divide-y divide-white/10">
          <AnimatePresence mode="wait">
            <motion.div key={trace.key} initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="space-y-0">
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-white"><MessageSquare className="h-4 w-4 text-[rgb(var(--p-accent-rgb)/0.95)]" />1. {s1}</div>
                <p className="mt-3 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm leading-relaxed text-slate-200 sm:rounded-2xl sm:px-4 sm:py-3">&ldquo;{trace.request}&rdquo;</p>
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-white"><Brain className="h-4 w-4 text-[rgb(var(--p-accent-rgb)/0.95)]" />2. {s2}</div>
                <p className="p-text-muted mt-3 text-sm leading-relaxed">{trace.executiveConclusion}</p>
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-white"><FileSearch className="h-4 w-4 text-[rgb(var(--p-accent-rgb)/0.95)]" />3. {s3}</div>
                <div className="mt-3 flex flex-wrap gap-2">{trace.determinantSignals.map((s) => <span key={s.label} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs leading-relaxed text-slate-200"><span className="font-medium text-slate-400">{s.label}:</span> {s.value}</span>)}</div>
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-white"><Route className="h-4 w-4 text-[rgb(var(--p-accent-rgb)/0.95)]" />4. {s4}</div>
                <div className="mt-3 flex flex-wrap gap-2"><span className="rounded-full border border-[rgb(var(--p-accent-rgb)/0.4)] bg-[rgb(var(--p-accent-rgb)/0.12)] px-4 py-2 text-sm font-semibold text-white">{trace.routing.primary}</span>{trace.routing.secondary ? <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">{trace.routing.secondary}</span> : null}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">{trace.routing.reasons.map((r) => <li key={r} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[rgb(var(--p-accent-rgb)/0.7)]" />{r}</li>)}</ul>
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-white"><Layers3 className="h-4 w-4 text-[rgb(var(--p-accent-rgb)/0.95)]" />5. {s5}</div>
                <div className="mt-3 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                  {trace.context.goals?.length ? <div><span className="text-xs uppercase tracking-wider text-slate-500">{copy.labels.goals}</span><ul className="mt-1 space-y-1">{trace.context.goals.map((g) => <li key={g}>• {g}</li>)}</ul></div> : null}
                  {trace.context.priorities?.length ? <div><span className="text-xs uppercase tracking-wider text-slate-500">{copy.labels.priorities}</span><ul className="mt-1 space-y-1">{trace.context.priorities.map((p) => <li key={p}>• {p}</li>)}</ul></div> : null}
                  {trace.context.repeatedProblems?.length ? <div><span className="text-xs uppercase tracking-wider text-slate-500">{copy.labels.repeatedProblems}</span><ul className="mt-1 space-y-1">{trace.context.repeatedProblems.map((p) => <li key={p}>• {p}</li>)}</ul></div> : null}
                  {trace.context.matches?.length ? <div><span className="text-xs uppercase tracking-wider text-slate-500">{copy.labels.matches}</span><ul className="mt-1 space-y-1">{trace.context.matches.map((m) => <li key={m}>• {m}</li>)}</ul></div> : null}
                  {trace.context.workflows?.length ? <div className="sm:col-span-2"><span className="text-xs uppercase tracking-wider text-slate-500">{copy.labels.workflows}</span><ul className="mt-1 space-y-1">{trace.context.workflows.map((w) => <li key={w}>• {w}</li>)}</ul></div> : null}
                </div>
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-white"><Lightbulb className="h-4 w-4 text-[rgb(var(--p-accent-rgb)/0.95)]" />6. {s6}</div>
                <p className="p-text-muted mt-3 text-sm leading-relaxed">{trace.knowledge.summary}</p>
                <div className="mt-4 space-y-3"><div><span className="text-xs uppercase tracking-wider text-slate-500">rules</span><ul className="mt-1 space-y-1 text-sm text-slate-300">{trace.knowledge.rules.map((r) => <li key={r}>• {r}</li>)}</ul></div><div><span className="text-xs uppercase tracking-wider text-slate-500">{copy.labels.metrics}</span><p className="mt-1 text-sm text-slate-400">{trace.knowledge.metrics.join(', ')}</p></div></div>
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-white"><Sparkles className="h-4 w-4 text-emerald-400" />7. {s7}</div>
                <div className="artifact-card mt-3 rounded-[16px] border border-emerald-400/25 bg-[linear-gradient(180deg,rgba(16,185,129,0.06),rgba(255,255,255,0.02))] p-4 sm:rounded-[20px] sm:p-5"><p className="text-sm font-medium leading-relaxed text-white">{trace.response.summary}</p><ul className="mt-4 space-y-2 text-sm text-slate-300">{trace.response.why.map((w) => <li key={w} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400/80" />{w}</li>)}</ul><div className="mt-4 flex flex-wrap gap-2">{trace.response.nextSteps.map((s) => <span key={s} className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">{s}</span>)}</div><p className="p-text-muted mt-4 text-sm italic">{trace.response.followUp}</p></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Card>
    </Section>
  )
}
