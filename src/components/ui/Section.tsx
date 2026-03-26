import type { ReactNode } from 'react'
import { Container } from './Container'
import { cn } from './cn'

type SectionProps = {
  id?: string
  kicker?: string
  title?: string
  description?: string
  children?: ReactNode
  className?: string
}

export function Section({ id, kicker, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-[var(--header-offset)] py-12 sm:py-14 md:py-20', className)}>
      <Container>
        {(kicker || title || description) && (
          <div className="mb-7 max-w-[65ch] sm:mb-8">
            {kicker && <p className="prompt-block">{kicker}</p>}
            {title && (
              <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-[0.98rem] leading-relaxed text-slate-300/90 sm:text-base md:text-lg">{description}</p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}
