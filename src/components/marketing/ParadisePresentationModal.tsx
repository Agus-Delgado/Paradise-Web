import { useEffect, useId, useRef } from 'react'
import { X } from 'lucide-react'
import { PARADISE_INTRO_VIDEO_PATH } from '../../constants/paradiseIntro'
import { cn } from '../ui/cn'

type ParadisePresentationModalProps = {
  open: boolean
  onClose: () => void
  closeLabel: string
  dialogLabel: string
}

export function ParadisePresentationModal({ open, onClose, closeLabel, dialogLabel }: ParadisePresentationModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const titleId = useId()

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      const video = videoRef.current
      if (video) {
        video.pause()
        video.currentTime = 0
      }
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[rgb(3,4,8)]/92 p-4 backdrop-blur-md sm:p-6"
    >
      <h2 id={titleId} className="sr-only">
        {dialogLabel}
      </h2>

      <div className="relative flex w-full max-w-[min(100%,1200px)] flex-1 flex-col items-center justify-center gap-4 sm:gap-5">
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className={cn(
            'absolute right-0 top-0 z-10 inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-[var(--p-border-strong)] bg-white/[0.08] text-white shadow-lg transition hover:bg-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--p-accent-rgb)/0.85)] sm:-right-1 sm:-top-1',
          )}
        >
          <X className="h-5 w-5" aria-hidden />
        </button>

        <div className="mt-10 w-full max-h-[min(78dvh,820px)] flex-1 overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-black/60 shadow-[0_32px_120px_-48px_rgba(124,58,237,0.55)] sm:mt-0 sm:max-h-[min(82dvh,860px)]">
          <video
            ref={videoRef}
            controls
            playsInline
            preload="metadata"
            className="max-h-[min(78dvh,820px)] w-full object-contain sm:max-h-[min(82dvh,860px)]"
          >
            <source src={PARADISE_INTRO_VIDEO_PATH} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}
