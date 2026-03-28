import type { CSSProperties } from 'react'
import { useCallback, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { ParadiseMark } from '../branding/ParadiseMark'
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
      <HeroAurora id="solucion" className="pt-16 sm:pt-20" style={{ '--grid-opacity': 0.035, '--glow-strength': 0.22 } as CSSProperties}>
        <Container className="scroll-mt-[var(--header-offset)] pb-10 sm:pb-12 md:pt-8 md:pb-16">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="max-w-[60ch]">
              <Badge>{kicker}</Badge>
              <h1 className="mt-5 max-w-[14ch] font-display text-[2rem] font-bold leading-[1.05] tracking-tight text-white sm:text-[2.45rem] md:mt-6 md:max-w-[13ch] md:text-[3.45rem] xl:text-[4.1rem]">
                {title}
              </h1>
              <p className="p-text-muted mt-4 max-w-[58ch] text-[0.97rem] leading-relaxed sm:mt-5 sm:text-[1.02rem] md:text-[1.12rem]">{description}</p>

              <div className="mt-7 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
                <Link
                  href={ctas.primary.href}
                  target={primaryExternal ? '_blank' : undefined}
                  rel={primaryExternal ? 'noopener noreferrer' : undefined}
                  className="p-btn-primary min-h-11 rounded-[var(--radius-pill)] px-5 py-2.5 text-sm font-semibold sm:px-6 sm:py-3"
                >
                  {ctas.primary.label}
                </Link>
                <button
                  ref={manifestBtnRef}
                  type="button"
                  onClick={() => setOpenVideo(true)}
                  aria-haspopup="dialog"
                  aria-expanded={openVideo}
                  className="p-btn-secondary inline-flex min-h-11 rounded-[var(--radius-pill)] px-5 py-2.5 text-sm font-semibold sm:px-6 sm:py-3"
                >
                  {ctas.secondary.label}
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                {proof.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>

            <div className="hero-scene p-card relative overflow-hidden rounded-[26px] p-4 sm:rounded-[30px] sm:p-5 md:rounded-[34px] md:p-6">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="grid gap-3.5 sm:gap-4 md:grid-cols-[0.86fr_1.14fr]">
                <div className="space-y-3">
                  <p className="text-center text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[rgb(var(--accent-1)/0.86)]">Señales</p>
                  {heroSignals.map((signal) => (
                    <div key={signal} className="rounded-xl border border-white/10 bg-white/[0.045] px-3.5 py-2.5 text-sm text-slate-200 sm:rounded-2xl sm:px-4 sm:py-3">
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="rounded-[22px] border border-[rgb(var(--p-accent-rgb)/0.28)] bg-[radial-gradient(circle_at_top,rgb(var(--p-accent-rgb)/0.18),transparent_68%),rgba(255,255,255,0.05)] p-4 shadow-[0_0_48px_-26px_var(--p-glow)] sm:rounded-[28px] sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[rgb(var(--accent-2)/0.9)]">Paradise core</p>
                        <p className="mt-2 text-base font-semibold text-white sm:text-lg">Coordina qué entra, qué módulo toca y qué sale listo.</p>
                      </div>
                      <ParadiseMark
                        variant="onDark"
                        decorative
                        heightClass="h-7 sm:h-8"
                        maxWidthClass="max-w-[104px] sm:max-w-[118px]"
                        className="object-right opacity-[0.96]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    {heroModules.map((module) => (
                    <div key={module} className="rounded-xl border border-white/10 bg-white/[0.035] px-3.5 py-2.5 text-sm text-slate-200 sm:rounded-2xl sm:px-4 sm:py-3">
                        {module}
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[22px] border border-emerald-400/30 bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(255,255,255,0.03))] p-4 shadow-[0_0_36px_-24px_rgba(16,185,129,0.55)] sm:rounded-[28px] sm:p-5">
                    <div className="flex items-start gap-2.5 text-sm font-semibold text-white sm:items-center sm:gap-3">
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
