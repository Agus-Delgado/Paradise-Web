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
    <section id={id} className={cn('py-12 md:py-16', className)}>
      <Container>
        {(kicker || title || description) && (
          <div className="mb-8 max-w-2xl">
            {kicker && <p className="prompt-block">{kicker}</p>}
            {title && (
              <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">{title}</h2>
            )}
            {description && <p className="mt-3 text-sm text-slate-300">{description}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}
