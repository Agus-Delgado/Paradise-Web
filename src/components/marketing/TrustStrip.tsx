import { ShieldCheck, Sparkles, Workflow, Wrench } from 'lucide-react'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'

const iconMap = {
  modular: Workflow,
  'demo-first': Sparkles,
  evolutivo: Wrench,
  'adaptable por dominio': ShieldCheck,
} as const

export function TrustStrip({ items }: { items: readonly string[] }) {
  return (
    <Section className="pt-0 pb-10 md:pb-14">
      <Container>
        <div className="grid gap-3 md:grid-cols-4">
          {items.map((item) => {
            const Icon = iconMap[item as keyof typeof iconMap] ?? Sparkles
            return (
              <Card key={item} className="flex items-center gap-3 px-4 py-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[rgb(var(--p-accent-rgb)/0.95)]">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-slate-400">Paradise</p>
                  <p className="mt-1 text-sm font-semibold text-white">{item}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
