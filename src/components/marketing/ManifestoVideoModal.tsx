import { useEffect, useRef } from 'react'

type ManifestoVideoModalProps = {
  open: boolean
  onClose: () => void
}

export function ManifestoVideoModal({ open, onClose }: ManifestoVideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    const video = videoRef.current
    if (video) {
      video.currentTime = 0
      void video.play().catch(() => {})
    }

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      if (video) {
        video.pause()
      }
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Introducción de Paradise"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 text-sm text-white/80 transition hover:text-white"
          aria-label="Cerrar introducción"
        >
          Cerrar ✕
        </button>

        <video
          ref={videoRef}
          controls
          playsInline
          className="w-full rounded-2xl bg-black shadow-2xl"
        >
          <source src="/videos/paradise-manifiesto.mp4" type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>
      </div>
    </div>
  )
}
