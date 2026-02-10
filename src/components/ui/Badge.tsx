import type { HTMLAttributes } from 'react'
import { cn } from './cn'

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[var(--radius-pill)] border border-[rgb(var(--accent-2)/0.3)] bg-[rgb(var(--accent-2)/0.12)] px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-[rgb(var(--accent-2)/0.9)]',
        className,
      )}
      {...props}
    />
  )
}
