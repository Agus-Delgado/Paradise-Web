import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { Pill } from '../ui/Pill'

export function WhoUses({ title, items }: { title: string; items: ReadonlyArray<string> }) {
  return (
    <Section className="py-8">
      <Container className="rounded-[var(--radius-lg)] border border-white/10 bg-white/5 px-6 py-10">
        <h3 className="font-display text-2xl font-semibold text-white">{title}</h3>
        <div className="mt-5 flex flex-wrap gap-2">
          {items.map((item) => (
            <Pill key={item}>{item}</Pill>
          ))}
        </div>
      </Container>
    </Section>
  )
}
