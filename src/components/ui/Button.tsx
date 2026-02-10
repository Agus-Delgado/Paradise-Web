import type { ButtonHTMLAttributes } from 'react'
import { cn } from './cn'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const variants = {
  primary:
    'bg-[rgb(var(--accent-1)/0.9)] text-night-950 shadow-[0_0_40px_rgb(var(--accent-1)/var(--glow-strength))] hover:bg-[rgb(var(--accent-1)/1)]',
  outline:
    'border border-[rgb(var(--accent-1)/0.25)] bg-white/5 text-white hover:border-[rgb(var(--accent-1)/0.5)]',
  ghost: 'bg-transparent text-slate-200 hover:bg-white/5',
}

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-sm',
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-1)/0.7)]',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}
