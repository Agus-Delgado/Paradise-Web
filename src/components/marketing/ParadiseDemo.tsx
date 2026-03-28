import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'framer-motion'
import { FileText, Layers3, RadioTower } from 'lucide-react'
import { ParadiseMark } from '../branding/ParadiseMark'
import { useMemo, useState } from 'react'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { cn } from '../ui/cn'

type DemoScenario = {
  key: string
  label: string
  intro: string
  signals: readonly string[]
  modules: readonly string[]
  artifactTitle: string
  artifactType: string
  artifactBody: readonly string[]
}

export function ParadiseDemo({
  title,
  subtitle,
  scenarios,
}: {
  title: string
  subtitle: string
  scenarios: readonly DemoScenario[]
}) {
  const reduceMotion = useReducedMotion() ?? false
  const [active, setActive] = useState(scenarios[0]?.key ?? '')
  const activeScenario = useMemo(() => scenarios.find((s) => s.key === active) ?? scenarios[0], [active, scenarios])

  if (!activeScenario) return null

  return (
    <Section id="demo" className="py-16 sm:py-20 md:py-24">
        <div className="max-w-3xl">
          <p className="prompt-block">Demostración guiada</p>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">{title}</h2>
          <p className="p-text-muted mt-4 text-sm leading-relaxed md:text-base">{subtitle}</p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2 sm:mt-8">
          {scenarios.map((scenario) => (
            <Button
              key={scenario.key}
              variant={scenario.key === active ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActive(scenario.key)}
              className={cn(scenario.key === active && 'shadow-[0_0_24px_-14px_var(--p-glow)]')}
            >
              {scenario.label}
            </Button>
          ))}
        </div>

        <Card className="demo-shell mt-7 overflow-hidden p-0 sm:mt-8">
          <div className="border-b border-white/10 px-4 py-3.5 text-sm leading-relaxed text-slate-300 sm:px-5 sm:py-4 md:px-6">
            <span className="font-semibold text-white">{activeScenario.label}</span>
            <span className="mx-2 text-slate-500">·</span>
            {activeScenario.intro}
          </div>

          <LayoutGroup>
            <div className="grid gap-0 lg:grid-cols-[0.88fr_1.05fr_0.92fr]">
              <div className="border-b border-white/10 p-4 sm:p-5 lg:border-b-0 lg:border-r lg:border-white/10 lg:p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <RadioTower className="h-4 w-4 text-[rgb(var(--p-accent-rgb)/0.95)]" />
                  Señales / Inputs
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScenario.key + '-signals'}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                    className="mt-4 grid gap-2.5 sm:mt-5 sm:gap-3"
                  >
                    {activeScenario.signals.map((signal, idx) => (
                      <motion.div
                        key={signal}
                        initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.24, delay: idx * 0.05 }}
                        className="rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-slate-200 sm:rounded-2xl sm:px-4 sm:py-3"
                      >
                        {signal}
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="relative border-b border-white/10 p-4 sm:p-5 lg:border-b-0 lg:border-r lg:border-white/10 lg:p-6">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--p-accent-rgb)/0.48)] to-transparent" />
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Layers3 className="h-4 w-4 text-[rgb(var(--p-accent-rgb)/0.95)]" />
                  Orquestación Paradise
                </div>

                <div className="mt-5 grid gap-4 sm:mt-6 sm:gap-5">
                  <div className="relative overflow-hidden rounded-[20px] border border-[rgb(var(--p-accent-rgb)/0.28)] bg-[radial-gradient(circle_at_top,rgb(var(--p-accent-rgb)/0.2),transparent_65%),rgba(255,255,255,0.04)] px-4 py-4 shadow-[0_0_42px_-22px_var(--p-glow)] sm:rounded-[26px] sm:px-5 sm:py-5">
                    <motion.div
                      layoutId="paradise-core"
                      transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                      className="flex items-center justify-between gap-4"
                    >
                      <div className="min-w-0">
                        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[rgb(var(--accent-1)/0.82)]">Paradise</p>
                        <p className="mt-2 text-base font-semibold text-white sm:text-lg">Coordina, clasifica y decide el siguiente paso</p>
                      </div>
                      <ParadiseMark
                        variant="onDark"
                        decorative
                        heightClass="h-7 sm:h-8"
                        maxWidthClass="max-w-[104px] sm:max-w-[120px]"
                        className="object-right opacity-[0.96]"
                      />
                    </motion.div>
                    <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-slate-400">
                      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/25 to-white/5" />
                      flujo activo
                      <span className="h-px flex-1 bg-gradient-to-r from-white/5 via-white/25 to-transparent" />
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeScenario.key + '-modules'}
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                      transition={{ duration: 0.22 }}
                      className="grid gap-2.5 sm:gap-3 md:grid-cols-3"
                    >
                      {activeScenario.modules.map((module, idx) => (
                        <motion.div
                          key={module}
                          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: idx * 0.04 }}
                          className="relative rounded-xl border border-white/10 bg-white/[0.035] px-3.5 py-3.5 text-sm text-slate-200 sm:rounded-2xl sm:px-4 sm:py-4"
                        >
                          <span className="absolute -top-1.5 left-4 h-3 w-3 rounded-full bg-[rgb(var(--p-accent-rgb)/0.75)] shadow-[0_0_16px_-6px_var(--p-glow)]" />
                          <p className="pt-1">{module}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <FileText className="h-4 w-4 text-emerald-300" />
                  Artifact / Resultado
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScenario.key + '-artifact'}
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.98, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98, y: -6 }}
                    transition={{ duration: 0.26 }}
                    className="artifact-card mt-4 rounded-[20px] border border-emerald-400/30 bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(255,255,255,0.03))] p-4 shadow-[0_0_40px_-24px_rgba(16,185,129,0.6)] sm:mt-5 sm:rounded-[26px] sm:p-5"
                  >
                    <motion.div layoutId="artifact-panel" transition={{ type: 'spring', stiffness: 260, damping: 30 }}>
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-emerald-200/80">{activeScenario.artifactType}</p>
                          <p className="mt-2 text-base font-semibold text-white sm:text-lg">{activeScenario.artifactTitle}</p>
                        </div>
                        <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-emerald-100">
                          listo
                        </span>
                      </div>
                      <div className="mt-4 space-y-2.5 rounded-[16px] border border-white/10 bg-night-950/55 p-3.5 font-mono text-[0.75rem] leading-relaxed text-slate-300 sm:mt-5 sm:space-y-3 sm:rounded-[20px] sm:p-4 sm:text-[0.78rem]">
                        {activeScenario.artifactBody.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </LayoutGroup>
        </Card>
    </Section>
  )
}
