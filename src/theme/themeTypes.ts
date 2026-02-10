export type ThemeTokens = {
  accent1: string
  accent2: string
  accent3: string
  gradient1: string
  gradient2: string
  gradient3: string
  glowStrength: number
  gridOpacity: number
  radius: {
    sm: number
    md: number
    lg: number
    pill: number
  }
  motionIntensity: number
}

export type ThemeState = {
  prompt: string
  seed: number
  tokens: ThemeTokens
}
