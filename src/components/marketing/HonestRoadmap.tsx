import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'

type RoadmapColumn = {
  title: string
  description: string
  items: readonly string[]
}

export function HonestRoadmap({
  title,
  subtitle,
  columns,
}: {
  title: string
  subtitle: string
  columns: readonly RoadmapColumn[]
}) {
  const reduceMotion = useReducedMotion() ?? false
  return (
    <Section id="roadmap" className="py-18 md:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="prompt-block">Roadmap honesto</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
          <p className="p-text-muted mt-4 text-sm leading-relaxed md:text-base">{subtitle}</p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {columns.map((column, idx) => (
            <motion.div
              key={column.title}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.24, delay: idx * 0.04 }}
            >
              <Card className="h-full p-6">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-400">Estado</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{column.title}</h3>
                <p className="p-text-muted mt-3 text-sm leading-relaxed">{column.description}</p>
                <ul className="mt-5 grid gap-3 text-sm text-slate-200">
                  {column.items.map((item) => (
                    <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[rgb(var(--p-accent-rgb)/0.75)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
