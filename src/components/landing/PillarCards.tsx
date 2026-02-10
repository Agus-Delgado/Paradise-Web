import { motion, useReducedMotion } from 'framer-motion'
import { Blocks, Radar, ShieldCheck, Sparkles, Workflow } from 'lucide-react'
import { cn } from '../ui/cn'

const pillars = [
  {
    title: 'Coordination Fabric',
    description: 'Orquestacion de agentes, humanos y sistemas en una sola capa.',
    icon: Workflow,
  },
  {
    title: 'Promptable UI',
    description: 'Interfaces que responden a lenguaje natural y contexto vivo.',
    icon: Sparkles,
  },
  {
    title: 'Trust by Design',
    description: 'Seguridad, auditoria y compliance en cada flujo.',
    icon: ShieldCheck,
  },
  {
    title: 'Modular Ecosystem',
    description: 'Bloques interoperables con contratos claros.',
    icon: Blocks,
  },
  {
    title: 'Signal Observability',
    description: 'Trazas y telemetria para decisiones confiables.',
    icon: Radar,
  },
]

export function PillarCards() {
  const reduceMotion = useReducedMotion() ?? false

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {pillars.map((pillar) => {
        const Icon = pillar.icon
        return (
          <motion.div
            key={pillar.title}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={cn(
              'rounded-[var(--radius-lg)] border border-white/10 bg-night-900/70 p-6 shadow-card',
            )}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-white/10 text-[rgb(var(--accent-1)/0.9)]">
                <Icon size={18} />
              </span>
              <p className="text-sm font-semibold text-white">{pillar.title}</p>
            </div>
            <p className="mt-3 text-xs text-slate-400">{pillar.description}</p>
          </motion.div>
        )
      })}
    </div>
  )
}
