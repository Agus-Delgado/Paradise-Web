import { useState } from 'react'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { Link } from '../ui/Link'

export function CreatorSection() {
  const [imageError, setImageError] = useState(false)

  return (
    <Section id="creador" className="py-16">
      <Container>
        <Card className="relative overflow-hidden p-7">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[rgb(var(--p-accent-rgb)/0.12)] via-transparent to-[rgb(var(--p-accent2-rgb)/0.1)]" />
          <div className="relative z-10 grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div className="flex items-center justify-center md:justify-start">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[36px] bg-[rgb(var(--p-accent-rgb)/0.2)] blur-2xl" aria-hidden />
                <div className="relative h-56 w-56 overflow-hidden rounded-[32px] border border-[rgb(var(--p-accent-rgb)/0.35)] shadow-[0_18px_40px_-28px_rgba(124,58,237,0.6)] md:h-60 md:w-60">
                  {!imageError ? (
                    <img
                      src="/IMG/foto.jpeg"
                      alt="Agustin Delgado"
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Creador</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white md:text-3xl">
                Creado por Agustin Delgado
              </h3>
              <p className="p-text-muted mt-3 max-w-xl text-sm leading-relaxed md:text-base">
                Construyo sistemas modulares, AI-first y orientados a producto, pensados para mostrar valor
                rapido con demos claras y ejecutables.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="https://www.linkedin.com/in/agustin-delgado-data98615190/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-btn-primary rounded-[var(--radius-pill)] px-5 py-2 text-sm font-semibold"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/Agus-Delgado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-btn-secondary rounded-[var(--radius-pill)] px-5 py-2 text-sm font-semibold"
                >
                  GitHub
                </Link>
                <Link
                  href="mailto:augusto.delgado00@hotmail.com"
                  className="p-btn-secondary rounded-[var(--radius-pill)] px-5 py-2 text-sm font-semibold"
                >
                  Email
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  )
}
