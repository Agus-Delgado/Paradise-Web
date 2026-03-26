import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'

export function Faq({ title, items }: { title: string; items: ReadonlyArray<{ q: string; a: string }> }) {
  return (
    <Section id="faq" className="py-14 sm:py-16">
      <Container>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">{title}</h2>
        <div className="mt-7 grid gap-3.5 sm:mt-10 sm:gap-4 md:grid-cols-2">
          {items.map((item) => (
            <Card key={item.q} className="p-4 sm:p-6">
              <p className="text-[0.98rem] font-semibold text-white sm:text-base">{item.q}</p>
              <p className="p-text-muted mt-3 text-sm leading-relaxed">{item.a}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
