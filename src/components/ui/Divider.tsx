import type { HTMLAttributes } from 'react'
import { cn } from './cn'

export function Divider({ className, ...props }: HTMLAttributes<HTMLHRElement>) {
  return <hr className={cn('border-[rgb(var(--accent-1)/0.18)]', className)} {...props} />
}
