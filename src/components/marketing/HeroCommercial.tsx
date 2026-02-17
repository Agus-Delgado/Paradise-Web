import type { CSSProperties } from 'react'
import { Badge } from '../ui/Badge'
import { Container } from '../ui/Container'
import { Link } from '../ui/Link'
import { Pill } from '../ui/Pill'
import { HeroAurora } from '../landing/HeroAurora'

type HeroCommercialProps = {
  kicker: string
  title: string
  description: string
  ctas: {
    primary: { label: string; href: string }
    secondary: { label: string; href: string }
  }
  proof: ReadonlyArray<string>
}

export function HeroCommercial({ kicker, title, description, ctas, proof }: HeroCommercialProps) {
  const isExternalHref = (href: string) => /^https?:\/\//i.test(href)
  const secondaryExternal = isExternalHref(ctas.secondary.href)

  return (
    <HeroAurora className="pt-20" style={{ '--grid-opacity': 0.035, '--glow-strength': 0.22 } as CSSProperties}>
      <Container id="solucion" className="scroll-mt-[var(--header-offset)] pb-14 md:pt-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-[65ch]">
            <Badge>{kicker}</Badge>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight text-white md:text-6xl">
              {title}
            </h1>
            <p className="p-text-muted mt-5 text-base leading-relaxed md:text-lg">{description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={ctas.primary.href}
                className="p-btn-primary rounded-[var(--radius-pill)] px-6 py-3 text-sm font-semibold"
              >
                {ctas.primary.label}
              </Link>
              <Link
                href={ctas.secondary.href}
                target={secondaryExternal ? '_blank' : undefined}
                rel={secondaryExternal ? 'noopener noreferrer' : undefined}
                className="p-btn-secondary rounded-[var(--radius-pill)] px-6 py-3 text-sm font-semibold"
              >
                {ctas.secondary.label}
              </Link>
            </div>
          </div>

          <div className="p-card rounded-[var(--radius-lg)] p-6">
            <p className="text-sm font-semibold text-white">Señales → orden → acción</p>
            <p className="p-text-muted mt-2 text-sm leading-relaxed">
              Un producto pensado para explicar el “qué” y el “por qué” en lenguaje claro, sin perder rigor.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {proof.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>

            <div className="p-card mt-6 rounded-[var(--radius-md)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Ideal para</p>
              <p className="mt-2 text-sm text-slate-200">Demos, POCs y presentaciones a stakeholders no técnicos.</p>
            </div>
          </div>
        </div>
      </Container>
    </HeroAurora>
  )
}
