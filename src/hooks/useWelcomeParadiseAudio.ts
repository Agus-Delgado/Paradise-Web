import { useCallback, useEffect, useRef, useState } from 'react'

type UseWelcomeParadiseAudioOptions = {
  /** Called when playback finishes, fails after a play attempt, or `play()` rejects. Not called for preload/load errors before play. */
  onPlaybackFinished?: () => void
}

type UseWelcomeParadiseAudioResult = {
  isPlaying: boolean
  playWelcome: () => void
}

export function useWelcomeParadiseAudio(
  src: string,
  options?: UseWelcomeParadiseAudioOptions,
): UseWelcomeParadiseAudioResult {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const finishRef = useRef(options?.onPlaybackFinished)
  const playbackStartedRef = useRef(false)

  finishRef.current = options?.onPlaybackFinished

  const notifyFinished = useCallback(() => {
    finishRef.current?.()
  }, [])

  useEffect(() => {
    const audio = new Audio(src)
    audio.preload = 'auto'
    audioRef.current = audio

    const onEnded = () => {
      setIsPlaying(false)
      playbackStartedRef.current = false
      notifyFinished()
    }

    const onError = () => {
      setIsPlaying(false)
      if (playbackStartedRef.current) {
        playbackStartedRef.current = false
        notifyFinished()
      }
    }

    audio.addEventListener('ended', onEnded)
    audio.addEventListener('error', onError)

    return () => {
      audio.pause()
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('error', onError)
      audioRef.current = null
    }
  }, [src, notifyFinished])

  const playWelcome = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    playbackStartedRef.current = true
    setIsPlaying(true)

    audio.pause()
    try {
      audio.currentTime = 0
    } catch {
      /* seek can fail before metadata is ready */
    }

    void audio.play().catch(() => {
      playbackStartedRef.current = false
      setIsPlaying(false)
      notifyFinished()
    })
  }, [notifyFinished])

  return { isPlaying, playWelcome }
}
