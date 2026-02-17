import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'

type Outcome = { title: string; body: string }

export function OutcomesGrid({ title, items }: { title: string; items: ReadonlyArray<Outcome> }) {
  return (
    <Section id="outcomes" className="py-16">
      <Container>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <Card key={item.title} className="p-6">
              <p className="text-base font-semibold text-white">{item.title}</p>
              <p className="p-text-muted mt-3 text-sm leading-relaxed">{item.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
