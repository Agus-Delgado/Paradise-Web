import { motion, useReducedMotion } from 'framer-motion'
import { FileText, Github, MonitorPlay } from 'lucide-react'
import type { ModuleItem } from '../../data/modules'
import { pillarLabel, statusLabel } from '../../data/modules'
import { Pill } from '../ui/Pill'
import { cn } from '../ui/cn'
import { useThemeEngine } from '../../theme/useThemeEngine'
import { Link } from '../ui/Link'

type ModuleCardProps = {
  module: ModuleItem
  highlighted?: boolean
  highlightTags?: string[]
  compact?: boolean
  variant?: 'default' | 'featured'
  hideFooter?: boolean
  /** Override the pillar label (e.g. "Módulo recomendado" in Soluciones destacadas) */
  pillarLabelOverride?: string
}

const statusClass: Record<ModuleItem['status'], string> = {
  active: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200',
  mvp: 'border-sky-400/40 bg-sky-400/10 text-sky-200',
  idea: 'border-slate-400/40 bg-white/5 text-slate-300',
  demo: 'border-amber-400/40 bg-amber-400/10 text-amber-200',
}

function isHighlightedByTags(module: ModuleItem, tags?: string[]) {
  if (!tags?.length) return false
  return module.tags.some((t) => tags.includes(t))
}

export function ModuleCard({ module, highlighted, highlightTags, compact, variant = 'default', hideFooter, pillarLabelOverride }: ModuleCardProps) {
  const reduceMotion = useReducedMotion() ?? false
  const { state } = useThemeEngine()
  const intensity = state.tokens.motionIntensity

  const computedHighlighted = highlighted ?? isHighlightedByTags(module, highlightTags)
  const featured = variant === 'featured'
  const maxLen = compact ? 110 : featured ? 180 : 140
  const oneLiner = module.oneLiner.length > maxLen ? `${module.oneLiner.slice(0, maxLen - 3)}...` : module.oneLiner
  const highlights = module.highlights.slice(0, compact ? 2 : featured ? 4 : 3)
  const specTags = module.tags.length ? module.tags : []

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.3 + 0.15 * intensity, ease: 'easeOut' }}
      className={cn(
        'p-card rounded-[var(--radius-lg)] transition focus-within:border-[rgb(var(--p-accent-rgb)/0.6)]',
        compact ? 'p-5' : featured ? 'p-7' : 'p-6',
        featured && 'border-[rgb(var(--p-accent-rgb)/0.22)] bg-[radial-gradient(circle_at_top,rgb(var(--p-accent-rgb)/0.14),transparent_62%),rgba(255,255,255,0.06)]',
        computedHighlighted && 'border-[rgb(var(--p-accent-rgb)/0.55)] shadow-[0_0_32px_rgba(124,58,237,0.18)]',
      )}
    >
      <header className="flex items-start justify-between gap-3">
        <Pill className="border-white/20 bg-white/5 text-slate-200">{pillarLabelOverride ?? pillarLabel[module.pillar]}</Pill>
        <span
          className={cn(
            'rounded-full border px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em]',
            statusClass[module.status],
          )}
        >
          {statusLabel[module.status]}
        </span>
      </header>

      <div className="mt-4">
        <p className={cn('font-semibold text-white', featured ? 'text-xl' : 'text-base')}>{module.name}</p>
        <p className="p-text-muted mt-2 text-sm leading-relaxed">{oneLiner}</p>

        {highlights.length ? (
          <ul className={cn('p-text-muted mt-4 grid gap-2 text-xs', compact ? 'max-w-none' : 'max-w-[56ch]')}>
            {highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[rgb(var(--p-accent-rgb)/0.7)]" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {!compact && specTags.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {specTags.slice(0, featured ? 6 : 5).map((tag) => {
              const emphasized = highlightTags?.includes(tag)
              return (
                <Pill key={tag} className={cn(emphasized && 'p-chip-active')}>
                  {tag}
                </Pill>
              )
            })}
          </div>
        ) : null}
      </div>

      {!hideFooter ? <footer className={cn('mt-6 flex flex-wrap gap-3', compact && 'mt-5')}>
        {module.repoUrl && module.repoUrl !== '#' ? (
          <Link href={module.repoUrl} muted className="p-btn-secondary inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-4 py-2 text-xs font-semibold">
            <Github className="h-4 w-4" />
            Repo
          </Link>
        ) : null}

        {module.demoUrl && module.demoUrl !== '#' ? (
          <Link href={module.demoUrl} muted className="p-btn-secondary inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-4 py-2 text-xs font-semibold">
            <MonitorPlay className="h-4 w-4" />
            Demo
          </Link>
        ) : null}

        {module.docsUrl && module.docsUrl !== '#' ? (
          <Link href={module.docsUrl} muted className="p-btn-secondary inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-4 py-2 text-xs font-semibold">
            <FileText className="h-4 w-4" />
            Docs
          </Link>
        ) : null}
      </footer> : null}
    </motion.article>
  )
}
