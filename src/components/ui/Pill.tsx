import type { HTMLAttributes } from 'react'
import { cn } from './cn'

export function Pill({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'p-chip inline-flex items-center rounded-[var(--radius-pill)] px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em]',
        className,
      )}
      {...props}
    />
  )
}
