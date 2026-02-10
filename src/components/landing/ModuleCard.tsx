import { motion, useReducedMotion } from 'framer-motion'
import { FileText, Github, MonitorPlay } from 'lucide-react'
import type { ModuleItem } from '../../data/modules'
import { badgeVariant, pillarLabel, statusLabel } from '../../data/modules'
import { Pill } from '../ui/Pill'
import { cn } from '../ui/cn'
import { useThemeEngine } from '../../theme/useThemeEngine.tsx'
import { Link } from '../ui/Link'

type ModuleCardProps = {
  module: ModuleItem
  highlighted?: boolean
}

const statusClass: Record<ModuleItem['status'], string> = {
  active: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200',
  mvp: 'border-sky-400/40 bg-sky-400/10 text-sky-200',
  idea: 'border-slate-400/40 bg-white/5 text-slate-300',
  demo: 'border-amber-400/40 bg-amber-400/10 text-amber-200',
}

export function ModuleCard({ module, highlighted }: ModuleCardProps) {
  const reduceMotion = useReducedMotion() ?? false
  const { state } = useThemeEngine()
  const intensity = state.tokens.motionIntensity
  const oneLiner = module.oneLiner.length > 140 ? `${module.oneLiner.slice(0, 137)}...` : module.oneLiner
  const highlights = module.highlights.slice(0, 3)
  const specTags = module.tags.length ? module.tags : []

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -2,
            }
      }
      transition={{ duration: 0.3 + 0.15 * intensity, ease: 'easeOut' }}
      className={cn(
        'rounded-[var(--radius-lg)] border border-white/10 bg-night-900/70 p-6 shadow-card transition hover:shadow-[0_16px_40px_-28px_rgba(148,163,184,0.8)] focus-within:border-[rgb(var(--accent-1)/0.5)]',
        highlighted && 'border-[rgb(var(--accent-1)/0.55)] bg-night-900/80 shadow-[0_0_34px_rgb(var(--accent-1)/0.18)]',
      )}
    >
      <header className="flex items-start justify-between gap-3">
        <Pill className="border-white/20 bg-white/5 text-slate-200">{pillarLabel[module.pillar]}</Pill>
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
        <p className="text-base font-semibold text-white">{module.name}</p>
        <p className="mt-2 text-xs text-slate-400" title={module.oneLiner}>
          {oneLiner}
        </p>
      </div>
      <div className="mt-4 grid gap-2 text-xs text-slate-400">
        {highlights.map((item) => (
          <div key={item} className="flex items-center gap-2 truncate">
            <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-1)/0.9)]" />
            <span className="truncate">{item}</span>
          </div>
        ))}
      </div>
      {specTags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {specTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <footer className="mt-5 flex flex-wrap gap-2">
        <Link
          href={module.repoUrl}
          target="_blank"
          rel="noreferrer"
          className={cn(
            'inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--accent-1)/0.85)]',
            badgeVariant[module.status] === 'primary' &&
              'bg-[rgb(var(--accent-1)/0.9)] text-night-950 shadow-[0_0_30px_rgb(var(--accent-1)/var(--glow-strength))] hover:bg-[rgb(var(--accent-1)/1)]',
            badgeVariant[module.status] === 'outline' &&
              'border border-[rgb(var(--accent-1)/0.3)] bg-white/5 text-white hover:border-[rgb(var(--accent-1)/0.6)]',
            badgeVariant[module.status] === 'ghost' && 'border border-white/10 bg-white/5 text-slate-200 hover:border-white/30',
          )}
        >
          <Github size={14} />
          Repo
        </Link>
        {module.demoUrl && (
          <Link
            href={module.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--accent-1)/0.85)]"
          >
            <MonitorPlay size={14} />
            Demo
          </Link>
        )}
        {module.docsUrl && (
          <Link
            href={module.docsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--accent-1)/0.85)]"
          >
            <FileText size={14} />
            Docs
          </Link>
        )}
      </footer>
    </motion.article>
  )
}
