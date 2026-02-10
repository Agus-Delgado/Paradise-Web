import { motion, useReducedMotion } from 'framer-motion'

type RoadmapPhase = {
  phase: string
  horizon: string
  goals: string[]
}

type TimelineRoadmapProps = {
  phases: RoadmapPhase[]
}

export function TimelineRoadmap({ phases }: TimelineRoadmapProps) {
  const reduceMotion = useReducedMotion() ?? false

  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {phases.map((phase) => (
        <motion.div
          key={phase.phase}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="rounded-[var(--radius-lg)] border border-white/10 bg-night-900/70 p-6 shadow-card"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{phase.horizon}</p>
          <p className="mt-2 text-sm font-semibold text-white">{phase.phase}</p>
          <div className="mt-3 grid gap-2 text-xs text-slate-400">
            {phase.goals.map((goal) => (
              <div key={goal} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-1)/0.9)]" />
                {goal}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
