import type { AnchorHTMLAttributes } from 'react'
import { cn } from './cn'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  muted?: boolean
}

export function Link({ className, muted = false, ...props }: LinkProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[rgb(var(--accent-2)/0.9)]',
        muted && 'text-slate-300 hover:text-white',
        className,
      )}
      {...props}
    />
  )
}
