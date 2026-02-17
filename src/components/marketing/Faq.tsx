import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'

export function Faq({ title, items }: { title: string; items: ReadonlyArray<{ q: string; a: string }> }) {
  return (
    <Section id="faq" className="py-16">
      <Container>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <Card key={item.q} className="p-6">
              <p className="text-base font-semibold text-white">{item.q}</p>
              <p className="p-text-muted mt-3 text-sm leading-relaxed">{item.a}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
