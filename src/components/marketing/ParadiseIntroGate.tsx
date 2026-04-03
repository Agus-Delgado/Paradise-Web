import { useCallback, useEffect, useId, useRef, useState, type TransitionEvent } from 'react'
import { useReducedMotion } from 'framer-motion'
import { WELCOME_AUDIO_PUBLIC_PATH } from '../../constants/welcomeAudio'
import { PARADISE_INTRO_VIDEO_PATH } from '../../constants/paradiseIntro'
import { useWelcomeParadiseAudio } from '../../hooks/useWelcomeParadiseAudio'
import { ParadiseMark } from '../branding/ParadiseMark'
import { Button } from '../ui/Button'
import { cn } from '../ui/cn'

import { getSiteCopy, type Locale } from '../../content/localization'

type ParadiseIntroGateProps = {
  onDismissed: () => void
  locale?: Locale
}

export function ParadiseIntroGate({ onDismissed, locale = 'es' }: ParadiseIntroGateProps) {
  const copy = getSiteCopy(locale).introGate
  const reduceMotion = useReducedMotion() ?? false
  const fadeMs = reduceMotion ? 0 : 700
  const [exiting, setExiting] = useState(false)
  const dismissedRef = useRef(false)
  const supportId = useId()

  const safeDismiss = useCallback(() => {
    if (dismissedRef.current) return
    dismissedRef.current = true
    onDismissed()
  }, [onDismissed])

  const handlePlaybackFinished = useCallback(() => {
    setExiting(true)
  }, [])

  const { isPlaying, playWelcome } = useWelcomeParadiseAudio(WELCOME_AUDIO_PUBLIC_PATH, {
    onPlaybackFinished: handlePlaybackFinished,
  })

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  useEffect(() => {
    if (!exiting || !reduceMotion) return
    safeDismiss()
  }, [exiting, reduceMotion, safeDismiss])

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return
    if (!exiting || reduceMotion) return
    if (event.propertyName !== 'opacity') return
    safeDismiss()
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="paradise-intro-title"
      aria-describedby={supportId}
      className={cn(
        'fixed inset-0 z-[200] overflow-y-auto transition-opacity ease-out',
        exiting ? 'pointer-events-none opacity-0' : 'opacity-100',
      )}
      style={{ transitionDuration: `${fadeMs}ms` }}
      onTransitionEnd={handleTransitionEnd}
    >
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgb(45,35,95,0.2),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 bg-gradient-to-b from-black/85 via-black/90 to-[rgb(3,4,8)]/95"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 backdrop-blur-2xl backdrop-saturate-[0.75] [will-change:backdrop-filter] md:backdrop-blur-[44px]"
        aria-hidden
      />
      <div className="pointer-events-none fixed inset-0 bg-black/58" aria-hidden />

      <div className="relative flex min-h-full flex-col items-center justify-center px-5 py-12 sm:px-8">
        <p id="paradise-intro-title" className="sr-only">
          {copy.dialogLabel}
        </p>

        <div className="flex w-full max-w-4xl flex-col items-center">
          <div className="mb-5 flex w-full justify-center sm:mb-6 md:mb-7">
            <ParadiseMark
              variant="onBlack"
              decorative
              heightClass="h-11 sm:h-14 md:h-[4.25rem]"
              maxWidthClass="max-w-[min(280px,82vw)] sm:max-w-[300px] md:max-w-[320px]"
              className="object-center"
            />
          </div>

          <div
            className={cn(
              'relative w-full overflow-hidden rounded-2xl',
              'border border-white/[0.07] bg-black/35',
              'shadow-[0_48px_120px_-56px_rgba(0,0,0,0.92),0_0_0_1px_rgba(255,255,255,0.035)]',
            )}
          >
            <div className="relative aspect-video w-full">
              <video
                className="absolute inset-0 h-full w-full object-contain"
                autoPlay
                muted
                loop
                playsInline
                aria-label={copy.videoLabel}
              >
                <source src={PARADISE_INTRO_VIDEO_PATH} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="mt-10 flex w-full max-w-lg flex-col items-center gap-6 text-center">
            <p
              id={supportId}
              className="font-display text-[1.65rem] font-semibold leading-[1.12] tracking-[-0.02em] text-slate-100 sm:text-[1.95rem] md:text-[2.2rem]"
            >
              <span className="bg-gradient-to-r from-white via-slate-50 to-slate-400/95 bg-clip-text text-transparent">
                {copy.title}
              </span>
            </p>
            <Button
              type="button"
              variant="primary"
              size="lg"
              onClick={playWelcome}
              disabled={isPlaying || exiting}
              aria-busy={isPlaying}
              aria-label={copy.buttonAria}
              className="min-w-[220px] shadow-[0_22px_56px_-32px_var(--p-glow),0_0_0_1px_rgba(255,255,255,0.06)] disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {copy.button}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
