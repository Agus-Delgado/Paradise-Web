import { cn } from '../ui/cn'
import { BRANDING } from '../../constants/branding'

const srcByVariant = {
  onDark: BRANDING.logoLight,
  onLight: BRANDING.logoDark,
  onBlack: BRANDING.logoLightOnBlack,
} as const

export type ParadiseMarkVariant = keyof typeof srcByVariant

type ParadiseMarkProps = {
  variant: ParadiseMarkVariant
  className?: string
  /** Tailwind height utilities; width follows intrinsic aspect ratio. */
  heightClass?: string
  maxWidthClass?: string
  /** Decorative when redundant visible text (e.g. header title) is present. */
  decorative?: boolean
}

export function ParadiseMark({
  variant,
  className,
  heightClass = 'h-8 sm:h-9',
  maxWidthClass = 'max-w-[min(132px,38vw)] sm:max-w-[148px]',
  decorative = true,
}: ParadiseMarkProps) {
  return (
    <img
      src={srcByVariant[variant]}
      alt={decorative ? '' : 'Paradise'}
      width={160}
      height={40}
      decoding="async"
      className={cn('w-auto shrink-0 object-contain', heightClass, maxWidthClass, className)}
      {...(decorative ? { 'aria-hidden': true } : {})}
    />
  )
}
