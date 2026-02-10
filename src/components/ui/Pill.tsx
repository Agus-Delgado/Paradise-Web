import type { HTMLAttributes } from 'react'
import { cn } from './cn'

export function Pill({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[var(--radius-pill)] border border-white/10 bg-white/5 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-slate-200',
        className,
      )}
      {...props}
    />
  )
}
