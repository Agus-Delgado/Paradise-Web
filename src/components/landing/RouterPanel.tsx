import type { ModuleItem } from '../../data/modules'
import { pillarLabel } from '../../data/modules'
import { Button } from '../ui/Button'
import { cn } from '../ui/cn'

type RouterChip = {
  label: string
  targetId: string
  tags: string[]
}

type RouterPanelProps = {
  chips: RouterChip[]
  selected: string | null
  onSelect: (chip: RouterChip) => void
  suggestions: ModuleItem[]
}

export function RouterPanel({ chips, selected, onSelect, suggestions }: RouterPanelProps) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-white/10 bg-night-900/70 p-6">
      <p className="prompt-block">Router panel</p>
      <h3 className="mt-3 text-lg font-semibold text-white">What do you want to explore?</h3>
      <p className="mt-2 text-sm text-slate-400">
        Selecciona una ruta y la interfaz resalta los modulos relevantes. Sin IA real, solo logica deterministica.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <Button
            key={chip.label}
            size="sm"
            variant={selected === chip.label ? 'outline' : 'ghost'}
            onClick={() => onSelect(chip)}
          >
            {chip.label}
          </Button>
        ))}
      </div>
      <div className="mt-5 rounded-[var(--radius-md)] border border-white/10 bg-night-950/60 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Recommended modules</p>
        {suggestions.length ? (
          <div className="mt-3 grid gap-2 text-sm text-slate-200">
            {suggestions.map((module) => (
              <div key={module.id} className="flex items-center justify-between">
                <span className="font-semibold text-white">{module.name}</span>
                <span className="text-xs text-slate-400">{pillarLabel[module.pillar]}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-xs text-slate-400">Elige un chip para sugerir modulos.</p>
        )}
      </div>
      <div
        className={cn(
          'mt-4 text-xs text-slate-400',
          selected ? 'opacity-100' : 'opacity-70',
        )}
        aria-live="polite"
      >
        {selected ? `Explorando: ${selected}.` : 'Selecciona un area para activar recomendaciones.'}
      </div>
    </div>
  )
}
