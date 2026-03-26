import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { Link } from '../ui/Link'

export function Contact({
  title,
  body,
  links,
}: {
  title: string
  body: string
  links: ReadonlyArray<{ label: string; href: string }>
}) {
  return (
    <Section id="contacto" className="py-14 sm:py-16">
      <Container>
        <Card className="p-5 sm:p-8">
          <h3 className="font-display text-[1.45rem] font-semibold text-white sm:text-2xl md:text-3xl">{title}</h3>
          <p className="p-text-muted mt-3 max-w-2xl text-sm leading-relaxed md:text-base">{body}</p>
          <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
            {links.map((l, index) => {
              const isPrimary = index === 0
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={l.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className={
                    isPrimary
                      ? 'p-btn-primary min-h-10 rounded-[var(--radius-pill)] px-5 py-2 text-sm font-semibold'
                      : 'p-btn-secondary min-h-10 rounded-[var(--radius-pill)] px-5 py-2 text-sm font-semibold'
                  }
                >
                  {l.label}
                </Link>
              )
            })}
          </div>
        </Card>
      </Container>
    </Section>
  )
}
