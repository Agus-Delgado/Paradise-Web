import type { ThemeTokens } from './themeTypes'

type Palette = {
  accent1: string
  accent2: string
  accent3: string
}

type KeywordBias = {
  keywords: string[]
  paletteIndex?: number
  glowStrength?: number
  gridOpacity?: number
  radiusShift?: number
  motionIntensity?: number
}

const palettes: Palette[] = [
  { accent1: '93 230 255', accent2: '110 231 183', accent3: '245 158 11' },
  { accent1: '129 140 248', accent2: '56 189 248', accent3: '236 72 153' },
  { accent1: '52 211 153', accent2: '14 165 233', accent3: '250 204 21' },
  { accent1: '248 113 113', accent2: '244 114 182', accent3: '99 102 241' },
  { accent1: '94 234 212', accent2: '34 197 94', accent3: '59 130 246' },
]

const gradientSets: Array<[string, string, string]> = [
  ['93 230 255', '110 231 183', '245 158 11'],
  ['129 140 248', '56 189 248', '236 72 153'],
  ['34 211 238', '56 189 248', '248 113 113'],
  ['250 204 21', '248 113 113', '129 140 248'],
]

const glowStrengths = [0.25, 0.35, 0.45, 0.6]
const gridOpacities = [0.04, 0.06, 0.08, 0.12]
const radii = [10, 12, 16, 20, 24, 28, 32]
const motionIntensities = [0.45, 0.6, 0.75, 0.9, 1]

const keywordBiases: KeywordBias[] = [
  { keywords: ['calm', 'quiet', 'soft', 'ambient'], glowStrength: 0.28, gridOpacity: 0.05, motionIntensity: 0.5 },
  { keywords: ['sharp', 'precise', 'edge'], radiusShift: -6, motionIntensity: 0.7 },
  { keywords: ['bold', 'vivid', 'neon'], glowStrength: 0.6, gridOpacity: 0.1, motionIntensity: 0.9 },
  { keywords: ['solar', 'warm', 'ember'], paletteIndex: 3, glowStrength: 0.55 },
  { keywords: ['ice', 'frost', 'cool'], paletteIndex: 1, glowStrength: 0.4 },
  { keywords: ['mint', 'leaf', 'forest'], paletteIndex: 4, glowStrength: 0.45 },
]

export function hashString(input: string) {
  let hash = 2166136261
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i)
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24)
  }
  return hash >>> 0
}

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

function resolveBias(prompt: string) {
  const lower = prompt.toLowerCase()
  return keywordBiases.find((bias) => bias.keywords.some((keyword) => lower.includes(keyword)))
}

export function createThemeTokens(prompt: string, reduceMotion: boolean): ThemeTokens {
  const seed = hashString(prompt || 'paradise')
  const rng = mulberry32(seed)
  const bias = resolveBias(prompt)

  const paletteIndex = bias?.paletteIndex ?? Math.floor(rng() * palettes.length)
  const palette = palettes[paletteIndex]
  const gradient = pick(rng, gradientSets)

  const baseRadius = pick(rng, radii)
  const radiusShift = bias?.radiusShift ?? 0
  const radiusLg = Math.max(12, baseRadius + radiusShift)

  const glowStrength = bias?.glowStrength ?? pick(rng, glowStrengths)
  const gridOpacity = bias?.gridOpacity ?? pick(rng, gridOpacities)
  const baseMotion = bias?.motionIntensity ?? pick(rng, motionIntensities)
  const motionIntensity = reduceMotion ? Math.min(0.35, baseMotion * 0.5) : baseMotion

  return {
    accent1: palette.accent1,
    accent2: palette.accent2,
    accent3: palette.accent3,
    gradient1: gradient[0],
    gradient2: gradient[1],
    gradient3: gradient[2],
    glowStrength,
    gridOpacity,
    radius: {
      sm: Math.max(8, radiusLg - 10),
      md: Math.max(10, radiusLg - 6),
      lg: radiusLg,
      pill: 999,
    },
    motionIntensity,
  }
}
