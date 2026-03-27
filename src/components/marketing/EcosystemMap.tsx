import { motion, useReducedMotion } from 'framer-motion'
import { Cpu, Orbit, Route, Users, GraduationCap, Sparkles } from 'lucide-react'
import { Section } from '../ui/Section'
import { cn } from '../ui/cn'

type EcosystemCategory = {
  id: string
  title: string
  description: string
  modules: readonly string[]
}

const iconMap = {
  core: Sparkles,
  control: Orbit,
  operations: Route,
  community: Users,
  education: GraduationCap,
  verticals: Cpu,
} as const

export function EcosystemMap({
  title,
  subtitle,
  categories,
}: {
  title: string
  subtitle: string
  categories: readonly EcosystemCategory[]
}) {
  const reduceMotion = useReducedMotion() ?? false
  return (
    <Section id="ecosistema" className="py-16 sm:py-20 md:py-24">
        <div className="max-w-3xl">
          <p className="prompt-block">Arquitectura visible</p>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">{title}</h2>
          <p className="p-text-muted mt-4 text-sm leading-relaxed md:text-base">{subtitle}</p>
        </div>

        <div className="ecosystem-grid mt-8 grid gap-3.5 sm:mt-10 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, idx) => {
            const Icon = iconMap[category.id as keyof typeof iconMap] ?? Cpu
            const isCore = category.id === 'core' || category.id === 'control'
            return (
              <motion.article
                key={category.id}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.24, delay: idx * 0.03 }}
                className={cn(
                  'p-card relative overflow-hidden rounded-[24px] p-4 sm:rounded-[30px] sm:p-6',
                  isCore && 'border-[rgb(var(--p-accent-rgb)/0.24)] shadow-[0_0_36px_-24px_var(--p-glow)]',
                )}
              >
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent sm:inset-x-6" />
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-400">{isCore ? 'Capa central' : 'Dominio'}</p>
                    <h3 className="mt-2.5 text-[1.03rem] font-semibold text-white sm:mt-3 sm:text-lg">{category.title}</h3>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[rgb(var(--p-accent-rgb)/0.92)] sm:h-11 sm:w-11 sm:rounded-2xl">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <p className="p-text-muted mt-4 text-sm leading-relaxed">{category.description}</p>
                <div className="mt-4 grid gap-2.5 sm:mt-5 sm:gap-3">
                  {category.modules.map((module) => (
                    <div key={module} className="rounded-xl border border-white/10 bg-white/[0.035] px-3.5 py-2.5 text-sm text-slate-200 sm:rounded-2xl sm:px-4 sm:py-3">
                      {module}
                    </div>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
    </Section>
  )
}
