import { useState } from 'react'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { Link } from '../ui/Link'

export function CreatorSection() {
  const [imageError, setImageError] = useState(false)

  return (
    <Section id="creador" className="py-18 md:py-24">
      <Container>
        <Card className="relative overflow-hidden p-7 md:p-8">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[rgb(var(--p-accent-rgb)/0.12)] via-transparent to-[rgb(var(--p-accent2-rgb)/0.1)]" />
          <div className="grid gap-7 md:grid-cols-[0.88fr_1.12fr] md:items-center">
            <div className="flex items-center justify-center md:justify-start">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[36px] bg-[rgb(var(--p-accent-rgb)/0.2)] blur-2xl" aria-hidden />
                <div className="relative h-60 w-60 overflow-hidden rounded-[32px] border border-[rgb(var(--p-accent-rgb)/0.35)] shadow-[0_18px_40px_-28px_rgba(124,58,237,0.6)] md:h-72 md:w-72">
                  {!imageError ? (
                    <img
                      src="/IMG/foto.jpeg"
                      alt="Agustin Delgado, impulso inicial de Paradise"
                      loading="lazy"
                      onError={() => setImageError(true)}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[rgb(var(--p-accent-rgb)/0.18)]">
                      <span className="text-2xl font-semibold text-white">AD</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-semibold text-white md:text-4xl">
                La visión detrás de Paradise
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
                Una visión inicial que apunta a evolucionar como ecosistema: abierto a más módulos, voces y dominios
                sumándose sobre el mismo núcleo, sin perder identidad.
              </p>
              <p className="p-text-muted mt-4 max-w-2xl text-sm leading-relaxed md:text-base">
                Paradise parte de acercar datos, producto e inteligencia artificial aplicada en experiencias modulares y
                demos que vuelvan legible lo complejo para negocio y técnica — con sistemas evolutivos y una narrativa
                clara.
              </p>
              <p className="p-text-muted mt-3 max-w-2xl text-sm leading-relaxed md:text-base">
                El horizonte es colectivo: construir capas que crezcan con coherencia visual y conceptual, y dejar
                espacio para que el proyecto se expanda más allá de una sola línea de trabajo.
              </p>
              <p className="mt-4 max-w-2xl text-sm text-slate-400">
                Impulso inicial: <span className="text-slate-300">Agustin Delgado</span>
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="https://www.linkedin.com/in/agustin-delgado-data98615190/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-btn-primary rounded-[var(--radius-pill)] px-5 py-2 text-sm font-semibold"
                >
                  Ver LinkedIn
                </Link>
                <Link
                  href="https://github.com/Agus-Delgado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-btn-secondary rounded-[var(--radius-pill)] px-5 py-2 text-sm font-semibold"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  )
}
