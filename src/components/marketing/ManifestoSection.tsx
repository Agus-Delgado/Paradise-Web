import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import { cn } from '../ui/cn'

const YOUTUBE_EMBED_SRC = 'https://www.youtube.com/embed/utB2M-60RLU'

type ManifestoHighlight = { name: string; role: string }

type ManifestoSectionProps = {
  kicker: string
  title: string
  videoAriaLabel: string
  highlights: readonly ManifestoHighlight[]
  paragraphs: readonly string[]
}

export function ManifestoSection({ kicker, title, videoAriaLabel, highlights, paragraphs }: ManifestoSectionProps) {
  return (
    <section
      id="manifiesto"
      className={cn('scroll-mt-[var(--header-offset)] relative py-12 sm:py-14 md:py-20')}
      aria-labelledby="manifiesto-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[rgb(var(--p-accent2-rgb)/0.05)] via-transparent to-[rgb(var(--p-accent-rgb)/0.04)]"
        aria-hidden
      />
      <Container>
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] md:grid-rows-[auto_1fr] md:gap-x-10 md:gap-y-6 lg:gap-x-12">
          <header className="order-1 space-y-3 md:col-start-1 md:row-start-1">
            <p className="prompt-block">{kicker}</p>
            <h2
              id="manifiesto-heading"
              className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl"
            >
              {title}
            </h2>
          </header>

          <div className="order-2 md:col-start-2 md:row-span-2 md:row-start-1">
            <Card
              className={cn(
                'relative overflow-hidden border border-white/10 bg-white/[0.03] p-0 shadow-[0_24px_80px_-40px_rgba(124,58,237,0.45)]',
              )}
            >
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgb(var(--p-accent-rgb)/0.18)] via-transparent to-amber-400/[0.12]"
                aria-hidden
              />
              <div className="relative aspect-video w-full">
                <iframe
                  src={YOUTUBE_EMBED_SRC}
                  title={videoAriaLabel}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full rounded-[var(--radius-lg)]"
                  loading="lazy"
                />
              </div>
            </Card>
          </div>

          <div className="order-3 space-y-6 md:col-start-1 md:row-start-2 md:max-w-xl lg:max-w-none">
            <div className="space-y-4 text-[0.98rem] leading-relaxed text-slate-300/95 sm:text-base">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {highlights.map((h) => (
                <div
                  key={h.name}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm sm:px-4 sm:py-3"
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[rgb(var(--p-accent-rgb)/0.95)]">
                    {h.name}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-200/95">{h.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
