import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../ui/cn'

type HeroAuroraProps = ComponentPropsWithoutRef<'section'> & {
  children: ReactNode
}

const noiseSvg =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/></filter><rect width='120' height='120' filter='url(%23n)' opacity='0.25'/></svg>"

export function HeroAurora({ children, className, ...props }: HeroAuroraProps) {
  return (
    <section className={cn('relative overflow-hidden', className)} {...props}>
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            opacity: 'var(--glow-strength)',
            background:
              'radial-gradient(circle at 20% 10%, rgb(var(--gradient-1) / 0.35), transparent 55%), radial-gradient(circle at 80% 15%, rgb(var(--gradient-2) / 0.25), transparent 50%), radial-gradient(circle at 50% 85%, rgb(var(--gradient-3) / 0.25), transparent 55%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148, 163, 184, var(--grid-opacity)) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, var(--grid-opacity)) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(circle at top, rgba(0, 0, 0, 0.8), transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("${noiseSvg}")`,
            backgroundRepeat: 'repeat',
            mixBlendMode: 'soft-light',
          }}
        />
      </div>
      <div className="relative">{children}</div>
    </section>
  )
}
