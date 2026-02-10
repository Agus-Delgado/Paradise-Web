import type { ComponentProps } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from './cn'
import { useThemeEngine } from '../../theme/useThemeEngine.tsx'

type CardProps = ComponentProps<typeof motion.div>

export function Card({ className, ...props }: CardProps) {
  const reduceMotion = useReducedMotion()
  const { state } = useThemeEngine()
  const intensity = state.tokens.motionIntensity
  const offset = 12 * intensity
  const scale = 1 - 0.02 * intensity

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: offset, scale }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: reduceMotion ? 0.01 : 0.4 + 0.3 * intensity, ease: 'easeOut' }}
      className={cn(
        'rounded-[var(--radius-lg)] border border-[rgb(var(--accent-1)/0.18)] bg-night-900/70 p-6 backdrop-blur-xl shadow-card',
        className,
      )}
      {...props}
    />
  )
}
