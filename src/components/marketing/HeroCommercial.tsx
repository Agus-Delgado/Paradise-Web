import type { CSSProperties } from 'react'
import { useCallback, useRef, useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Badge } from '../ui/Badge'
import { Container } from '../ui/Container'
import { Link } from '../ui/Link'
import { Pill } from '../ui/Pill'
import { HeroAurora } from '../landing/HeroAurora'
import { ManifestoVideoModal } from './ManifestoVideoModal'

type HeroCommercialProps = {
  kicker: string
  title: string
  description: string
  ctas: {
    primary: { label: string; href: string }
    secondary: { label: string }
  }
  proof: ReadonlyArray<string>
  heroSignals: readonly string[]
  heroModules: readonly string[]
  heroArtifact: string
}

export function HeroCommercial({
  kicker,
  title,
  description,
  ctas,
  proof,
  heroSignals,
  heroModules,
  heroArtifact,
}: HeroCommercialProps) {
  const [openVideo, setOpenVideo] = useState(false)
  const manifestBtnRef = useRef<HTMLButtonElement>(null)

  const closeManifest = useCallback(() => {
    setOpenVideo(false)
    queueMicrotask(() => manifestBtnRef.current?.focus())
  }, [])

  const isExternalHref = (href: string) => /^https?:\/\//i.test(href)
  const primaryExternal = isExternalHref(ctas.primary.href)

  return (
    <>
      <HeroAurora id="solucion" className="pt-20" style={{ '--grid-opacity': 0.035, '--glow-strength': 0.22 } as CSSProperties}>
        <Container className="scroll-mt-[var(--header-offset)] pb-12 md:pt-8 md:pb-16">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="max-w-[60ch]">
              <Badge>{kicker}</Badge>
              <h1 className="mt-6 max-w-[13ch] font-display text-[2.45rem] font-bold leading-[1.04] tracking-tight text-white md:text-[3.45rem] xl:text-[4.1rem]">
                {title}
              </h1>
              <p className="p-text-muted mt-5 max-w-[58ch] text-[1.02rem] leading-relaxed md:text-[1.12rem]">{description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={ctas.primary.href}
                  target={primaryExternal ? '_blank' : undefined}
                  rel={primaryExternal ? 'noopener noreferrer' : undefined}
                  className="p-btn-primary rounded-[var(--radius-pill)] px-6 py-3 text-sm font-semibold"
                >
                  {ctas.primary.label}
                </Link>
                <button
                  ref={manifestBtnRef}
                  type="button"
                  onClick={() => setOpenVideo(true)}
                  aria-haspopup="dialog"
                  aria-expanded={openVideo}
                  className="p-btn-secondary inline-flex rounded-[var(--radius-pill)] px-6 py-3 text-sm font-semibold"
                >
                  {ctas.secondary.label}
                </button>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {proof.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>

            <div className="hero-scene p-card relative overflow-hidden rounded-[34px] p-5 md:p-6">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="grid gap-4 md:grid-cols-[0.86fr_1.14fr]">
                <div className="space-y-3">
                  <p className="text-center text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[rgb(var(--accent-1)/0.86)]">Señales</p>
                  {heroSignals.map((signal) => (
                    <div key={signal} className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-slate-200">
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="rounded-[28px] border border-[rgb(var(--p-accent-rgb)/0.28)] bg-[radial-gradient(circle_at_top,rgb(var(--p-accent-rgb)/0.18),transparent_68%),rgba(255,255,255,0.05)] p-5 shadow-[0_0_48px_-26px_var(--p-glow)]">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[rgb(var(--accent-2)/0.9)]">Paradise core</p>
                        <p className="mt-2 text-lg font-semibold text-white">Coordina qué entra, qué módulo toca y qué sale listo.</p>
                      </div>
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[rgb(var(--accent-2)/0.95)]">
                        <Sparkles className="h-5 w-5" />
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    {heroModules.map((module) => (
                      <div key={module} className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-slate-200">
                        {module}
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[28px] border border-emerald-400/30 bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(255,255,255,0.03))] p-5 shadow-[0_0_36px_-24px_rgba(16,185,129,0.55)]">
                    <div className="flex items-center gap-3 text-sm font-semibold text-white">
                      <ArrowRight className="h-4 w-4 text-emerald-300" />
                      {heroArtifact}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </HeroAurora>

      <ManifestoVideoModal open={openVideo} onClose={closeManifest} />
    </>
  )
}
