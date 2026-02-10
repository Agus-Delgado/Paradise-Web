import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'
import { createThemeTokens, hashString } from './themeEngine'
import type { ThemeState, ThemeTokens } from './themeTypes'

type ThemeContextValue = {
  state: ThemeState
  setPrompt: (value: string) => void
  randomize: () => void
  style: Record<string, string>
}

const DEFAULT_PROMPT = 'calm aurora network'
const STORAGE_KEY = 'paradise-theme-prompt'
const RANDOMIZE_KEY = 'paradise-theme-randomize'
const THEME_TRANSITION_CLASS = 'theme-transition'
const TRANSITION_MS = 240

const fallbackTokens: ThemeTokens = {
  accent1: '93 230 255',
  accent2: '110 231 183',
  accent3: '245 158 11',
  gradient1: '93 230 255',
  gradient2: '110 231 183',
  gradient3: '245 158 11',
  glowStrength: 0.4,
  gridOpacity: 0.08,
  radius: {
    sm: 12,
    md: 18,
    lg: 28,
    pill: 999,
  },
  motionIntensity: 0.7,
}

const ThemeContext = createContext<ThemeContextValue>({
  state: { prompt: DEFAULT_PROMPT, seed: hashString(DEFAULT_PROMPT), tokens: fallbackTokens },
  setPrompt: () => undefined,
  randomize: () => undefined,
  style: {},
})

const vibeSamples = [
  'calm aurora grid',
  'bold neon signals',
  'solar systems',
  'mint protocol mesh',
  'ice quiet routing',
  'vivid pulse matrix',
]

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function pick<T>(rng: () => number, items: T[]) {
  return items[Math.floor(rng() * items.length)]
}

export function useThemeEngineState() {
  const reduceMotion = useReducedMotion() ?? false
  const [prompt, setPromptState] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_PROMPT
    return window.localStorage.getItem(STORAGE_KEY) ?? DEFAULT_PROMPT
  })
  const [randomizeIndex, setRandomizeIndex] = useState(() => {
    if (typeof window === 'undefined') return 0
    const stored = window.localStorage.getItem(RANDOMIZE_KEY)
    const parsed = stored ? Number.parseInt(stored, 10) : 0
    return Number.isNaN(parsed) ? 0 : parsed
  })
  const transitionTimeout = useRef<number | null>(null)

  const tokens = useMemo(() => createThemeTokens(prompt, reduceMotion), [prompt, reduceMotion])
  const seed = useMemo(() => hashString(prompt || DEFAULT_PROMPT), [prompt])

  const style = useMemo<Record<string, string>>(
    () => ({
      '--accent-1': tokens.accent1,
      '--accent-2': tokens.accent2,
      '--accent-3': tokens.accent3,
      '--gradient-1': tokens.gradient1,
      '--gradient-2': tokens.gradient2,
      '--gradient-3': tokens.gradient3,
      '--glow-strength': `${tokens.glowStrength}`,
      '--grid-opacity': `${tokens.gridOpacity}`,
      '--radius-sm': `${tokens.radius.sm}px`,
      '--radius-md': `${tokens.radius.md}px`,
      '--radius-lg': `${tokens.radius.lg}px`,
      '--radius-pill': `${tokens.radius.pill}px`,
      '--motion-intensity': `${tokens.motionIntensity}`,
    }),
    [tokens],
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, prompt)
    }
  }, [prompt])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(RANDOMIZE_KEY, `${randomizeIndex}`)
    }
  }, [randomizeIndex])

  useEffect(() => {
    if (typeof document === 'undefined') return

    const root = document.documentElement
    Object.entries(style).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })

    return () => {
      Object.keys(style).forEach((key) => {
        root.style.removeProperty(key)
      })
    }
  }, [style])

  useEffect(() => {
    return () => {
      if (transitionTimeout.current !== null) {
        window.clearTimeout(transitionTimeout.current)
      }
    }
  }, [])

  const triggerTransition = useCallback(() => {
    if (typeof document === 'undefined' || reduceMotion) return
    const root = document.documentElement
    root.classList.add(THEME_TRANSITION_CLASS)
    if (transitionTimeout.current !== null) {
      window.clearTimeout(transitionTimeout.current)
    }
    transitionTimeout.current = window.setTimeout(() => {
      root.classList.remove(THEME_TRANSITION_CLASS)
    }, TRANSITION_MS)
  }, [reduceMotion])

  const setPrompt = useCallback((value: string) => {
    triggerTransition()
    setPromptState(value)
  }, [triggerTransition])

  const randomize = useCallback(() => {
    triggerTransition()
    const seed = hashString(prompt || DEFAULT_PROMPT) + randomizeIndex + 1
    const rng = mulberry32(seed)
    let next = pick(rng, vibeSamples)
    if (next === prompt && vibeSamples.length > 1) {
      const currentIndex = vibeSamples.indexOf(next)
      next = vibeSamples[(currentIndex + 1) % vibeSamples.length]
    }
    setPromptState(next)
    setRandomizeIndex((current) => current + 1)
  }, [prompt, randomizeIndex, triggerTransition])

  return {
    state: { prompt, seed, tokens },
    setPrompt,
    randomize,
    style,
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const value = useThemeEngineState()

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useThemeEngine() {
  return useContext(ThemeContext)
}
