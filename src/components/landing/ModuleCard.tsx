import { motion, useReducedMotion } from 'framer-motion'
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

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6 * intensity,
              rotateX: 1.5 * intensity,
              rotateY: -1.2 * intensity,
            }
      }
      transition={{ duration: 0.4 + 0.2 * intensity, ease: 'easeOut' }}
      className={cn(
        'rounded-[var(--radius-lg)] border border-white/10 bg-night-900/70 p-6 shadow-card transition focus-within:border-[rgb(var(--accent-1)/0.5)]',
        highlighted && 'border-[rgb(var(--accent-1)/0.6)] bg-night-900/80 shadow-[0_0_40px_rgb(var(--accent-1)/0.2)]',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-white">{module.name}</p>
          <p className="mt-2 text-xs text-slate-400">{module.oneLiner}</p>
        </div>
        <span
          className={cn(
            'rounded-full border px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em]',
            statusClass[module.status],
          )}
        >
          {statusLabel[module.status]}
        </span>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Pill className="border-white/20 bg-white/5 text-slate-200">{pillarLabel[module.pillar]}</Pill>
        <Pill className="border-white/10 bg-white/5 text-slate-300">{module.tags[0]}</Pill>
      </div>
      <div className="mt-4 grid gap-2 text-xs text-slate-400">
        {module.highlights.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-1)/0.9)]" />
            {item}
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <Link
          href={module.repoUrl}
          target="_blank"
          rel="noreferrer"
          className={cn(
            'rounded-[var(--radius-pill)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]',
            badgeVariant[module.status] === 'primary' &&
              'bg-[rgb(var(--accent-1)/0.9)] text-night-950 shadow-[0_0_30px_rgb(var(--accent-1)/var(--glow-strength))]',
            badgeVariant[module.status] === 'outline' &&
              'border border-[rgb(var(--accent-1)/0.3)] bg-white/5 text-white',
            badgeVariant[module.status] === 'ghost' && 'bg-white/5 text-slate-200',
          )}
        >
          Repo
        </Link>
        <Link
          href={module.demoUrl ?? '#'}
          target="_blank"
          rel="noreferrer"
          className="rounded-[var(--radius-pill)] border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200"
        >
          Demo
        </Link>
      </div>
    </motion.article>
  )
}
