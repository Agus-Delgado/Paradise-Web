import { Button } from '../ui/Button'
import { useThemeEngine } from '../../theme/useThemeEngine.tsx'

const suggestions = ['calm aurora', 'bold neon', 'solar systems', 'mint protocol', 'ice routing', 'vivid pulse']

export function ThemePromptBar() {
  const { state, setPrompt, randomize } = useThemeEngine()

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
          Randomize
        </Button>
      </div>
      <p id="themePromptHelp" className="mt-2 text-xs text-slate-400" aria-live="polite">
        Seed: {state.seed} · Ajusta el prompt para reconfigurar el sistema.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {suggestions.map((suggestion) => (
          <Button key={suggestion} size="sm" variant="ghost" onClick={() => setPrompt(suggestion)}>
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  )
}
