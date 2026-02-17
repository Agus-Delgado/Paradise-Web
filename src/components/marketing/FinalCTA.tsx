import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { Link } from '../ui/Link'

export function FinalCTA({
  title,
  body,
  primary,
  secondary,
}: {
  title: string
  body: string
  primary: { label: string; href: string }
  secondary: { label: string; href: string }
}) {
  return (
    <Section className="py-16">
      <Container>
        <Card className="relative overflow-hidden p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--accent-1)/0.18)] via-transparent to-transparent" />
          <div className="relative max-w-3xl">
            <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">{title}</h3>
            <p className="p-text-muted mt-3 text-sm leading-relaxed md:text-base">{body}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={primary.href}
                className="p-btn-primary rounded-[var(--radius-pill)] px-6 py-3 text-sm font-semibold"
              >
                {primary.label}
              </Link>
              <Link
                href={secondary.href}
                className="p-btn-secondary rounded-[var(--radius-pill)] px-6 py-3 text-sm font-semibold"
              >
                {secondary.label}
              </Link>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  )
}
