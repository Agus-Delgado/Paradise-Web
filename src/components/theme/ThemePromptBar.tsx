import { Button } from '../ui/Button'
import { useThemeEngine } from '../../theme/useThemeEngine.tsx'

const PRESET_STORAGE_KEY = 'paradise-theme-preset'

const presets = [
  { label: 'Calm Aurora', prompt: 'calm aurora mesh' },
  { label: 'Neon Grid', prompt: 'neon grid signal' },
  { label: 'Paper Minimal', prompt: 'paper minimal' },
  { label: 'Terminal Noir', prompt: 'terminal noir' },
]

export function ThemePromptBar() {
  const { state, setPrompt, randomize } = useThemeEngine()
  const activePreset = presets.find((preset) => preset.prompt === state.prompt)?.label

  const handlePreset = (preset: (typeof presets)[number]) => {
    setPrompt(preset.prompt)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(PRESET_STORAGE_KEY, preset.label)
    }
  }

  return (
    <div className="rounded-[var(--radius-lg)] border border-white/10 bg-night-900/70 p-5">
      <label htmlFor="themePrompt" className="prompt-block">
        Describe the vibe
      </label>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          id="themePrompt"
          value={state.prompt}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder="Ej: calm aurora mesh"
          className="w-full flex-1 rounded-[var(--radius-md)] border border-white/10 bg-night-950/70 px-4 py-3 text-sm text-white shadow-inner focus:border-[rgb(var(--accent-1)/0.7)] focus:outline-none"
          aria-describedby="themePromptHelp"
        />
        <Button type="button" onClick={randomize} variant="outline">
          Randomize (seeded)
        </Button>
      </div>
      <p className="mt-2 text-xs text-slate-400">No external AI calls. Deterministic theme engine.</p>
      <p id="themePromptHelp" className="mt-2 text-xs text-slate-400" aria-live="polite">
        Seed: {state.seed} · Ajusta el prompt para reconfigurar el sistema.
      </p>
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Theme presets">
        {presets.map((preset) => (
          <Button
            key={preset.label}
            size="sm"
            variant={activePreset === preset.label ? 'outline' : 'ghost'}
            onClick={() => handlePreset(preset)}
            aria-pressed={activePreset === preset.label}
            aria-label={`${preset.label} preset`}
          >
            {preset.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
