import { useThemeEngine } from '../../theme/useThemeEngine.tsx'

export function ThemePreviewSwatch() {
  const { state } = useThemeEngine()

  return (
    <div className="rounded-[var(--radius-lg)] border border-white/10 bg-night-900/70 p-5">
      <p className="prompt-block">Live preview</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-[var(--radius-md)] border border-white/10 bg-night-950/70 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Palette</p>
          <div className="mt-3 flex gap-2">
            {[state.tokens.accent1, state.tokens.accent2, state.tokens.accent3].map((color) => (
              <div
                key={color}
                className="h-10 w-10 rounded-full border border-white/10"
                style={{ backgroundColor: `rgb(${color})` }}
                aria-label={`Color ${color}`}
              />
            ))}
          </div>
        </div>
        <div className="rounded-[var(--radius-md)] border border-white/10 bg-night-950/70 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Gradient</p>
          <div
            className="mt-3 h-16 rounded-[var(--radius-md)] border border-white/10"
            style={{
              background:
                'radial-gradient(circle at 10% 20%, rgb(var(--gradient-1) / 0.7), transparent 55%), radial-gradient(circle at 90% 20%, rgb(var(--gradient-2) / 0.7), transparent 55%), radial-gradient(circle at 50% 80%, rgb(var(--gradient-3) / 0.7), transparent 55%)',
            }}
            aria-hidden
          />
        </div>
      </div>
      <div className="mt-4 grid gap-2 text-xs text-slate-400">
        <div className="flex items-center justify-between">
          <span>Glow</span>
          <span>{state.tokens.glowStrength.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Grid opacity</span>
          <span>{state.tokens.gridOpacity.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Radius</span>
          <span>{state.tokens.radius.lg}px</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Motion</span>
          <span>{state.tokens.motionIntensity.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}
