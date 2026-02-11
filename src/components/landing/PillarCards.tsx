import { motion, useReducedMotion } from 'framer-motion'
import { Blocks, Radar, ShieldCheck, Sparkles, Workflow } from 'lucide-react'
import type { Pillar } from '../../data/modules'
import { Pillar as PillarId, pillarLabel } from '../../data/modules'
import { cn } from '../ui/cn'

type PillarCardsProps = {
  selectedPillar: Pillar | 'all'
  activePillar: Pillar | null
  onSelect: (pillar: Pillar) => void
  onHover: (pillar: Pillar | null) => void
}

const pillars = [
  {
    id: PillarId.Ops,
    title: pillarLabel[PillarId.Ops],
    output: 'KPIs + Alertas + Runbooks',
    description: 'Routing operativo con señales claras y playbooks ejecutables.',
    icon: Workflow,
  },
  {
    id: PillarId.Anomalies,
    title: pillarLabel[PillarId.Anomalies],
    output: 'Anomalías + Señales + Riesgo',
    description: 'Detección temprana con scoring de impacto y contexto.',
    icon: Radar,
  },
  {
    id: PillarId.Knowledge,
    title: pillarLabel[PillarId.Knowledge],
    output: 'Contexto + Memoria + Conocimiento',
    description: 'Consolida fuentes y memoria para decisiones trazables.',
    icon: Sparkles,
  },
  {
    id: PillarId.Modeling,
    title: pillarLabel[PillarId.Modeling],
    output: 'Modelos semánticos + Puente BI',
    description: 'Capa semántica y contratos para data apps confiables.',
    icon: Blocks,
  },
  {
    id: PillarId.Copilot,
    title: pillarLabel[PillarId.Copilot],
    output: 'Briefs + Decisiones + Narrativas',
    description: 'Copiloto explicable para rutas, riesgos y pasos.',
    icon: ShieldCheck,
  },
  {
    id: PillarId.Delivery,
    title: pillarLabel[PillarId.Delivery],
    output: 'Handoffs + Estado + Responsables',
    description: 'Transiciones de entrega sin pérdida de contexto.',
    icon: Workflow,
  },
  {
    id: PillarId.Ecosystem,
    title: pillarLabel[PillarId.Ecosystem],
    output: 'Integraciones + Módulos + Demos',
    description: 'Conecta piezas y valida el flujo punta a punta.',
    icon: Blocks,
  },
]

export function PillarCards({ selectedPillar, activePillar, onSelect, onHover }: PillarCardsProps) {
  const reduceMotion = useReducedMotion() ?? false

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {pillars.map((pillar) => {
        const Icon = pillar.icon
        const isSelected = selectedPillar === pillar.id
        const isActive = activePillar === pillar.id
        return (
          <motion.button
            key={pillar.title}
            type="button"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={cn(
              'rounded-[var(--radius-lg)] border border-white/10 bg-night-900/70 p-6 text-left shadow-card transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-1)/0.6)]',
              isActive && 'border-[rgb(var(--accent-1)/0.5)] bg-night-900/80 shadow-[0_0_30px_rgb(var(--accent-1)/0.2)]',
            )}
            onClick={() => onSelect(pillar.id)}
            onMouseEnter={() => onHover(pillar.id)}
            onMouseLeave={() => onHover(null)}
            onFocus={() => onHover(pillar.id)}
            onBlur={() => onHover(null)}
            aria-pressed={isSelected}
            aria-label={`Capacidad: ${pillar.title}`}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-white/10 text-[rgb(var(--accent-1)/0.9)]">
                <Icon size={18} />
              </span>
              <p className="text-sm font-semibold text-white">{pillar.title}</p>
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
              {pillar.output}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">{pillar.description}</p>
          </motion.button>
        )
      })}
    </div>
  )
}
