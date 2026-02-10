import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { useThemeEngine } from '../../theme/useThemeEngine'
import { cn } from '../ui/cn'

type CommandAction = {
  id: string
  label: string
  group: 'Jump' | 'Theme' | 'Filters'
  keywords?: string[]
  onSelect: () => void
}

type CommandPaletteProps = {
  navItems: { label: string; href: string }[]
  onClearFilters?: () => void
}

const presets = [
  { label: 'Calm Aurora', prompt: 'calm aurora mesh' },
  { label: 'Neon Grid', prompt: 'neon grid signal' },
  { label: 'Paper Minimal', prompt: 'paper minimal' },
  { label: 'Terminal Noir', prompt: 'terminal noir' },
]

const focusableSelector =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

export function CommandPalette({ navItems, onClearFilters }: CommandPaletteProps) {
  const reduceMotion = useReducedMotion() ?? false
  const { setPrompt } = useThemeEngine()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const closePalette = useCallback(() => {
    setIsOpen(false)
    setQuery('')
  }, [])

  const scrollToSection = useCallback(
    (href: string) => {
      const id = href.replace('#', '')
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
      }
    },
    [reduceMotion],
  )

  const actions = useMemo<CommandAction[]>(() => {
    const jumpActions = navItems.map((item) => ({
      id: `jump-${item.href}`,
      label: `Jump to ${item.label}`,
      group: 'Jump' as const,
      keywords: [item.label, item.href.replace('#', '')],
      onSelect: () => scrollToSection(item.href),
    }))

    const themeActions = presets.map((preset) => ({
      id: `theme-${preset.label}`,
      label: `Set theme: ${preset.label}`,
      group: 'Theme' as const,
      keywords: [preset.label],
      onSelect: () => setPrompt(preset.prompt),
    }))

    const filterActions = onClearFilters
      ? [
          {
            id: 'clear-filters',
            label: 'Clear filters',
            group: 'Filters' as const,
            keywords: ['clear', 'filters'],
            onSelect: onClearFilters,
          },
        ]
      : []

    return [...jumpActions, ...themeActions, ...filterActions]
  }, [navItems, onClearFilters, scrollToSection, setPrompt])

  const filteredActions = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return actions
    return actions.filter((action) => {
      const haystack = `${action.label} ${action.keywords?.join(' ') ?? ''}`.toLowerCase()
      return haystack.includes(needle)
    })
  }, [actions, query])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setIsOpen((open) => !open)
      }

      if (event.key === 'Escape' && isOpen) {
        event.preventDefault()
        closePalette()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [closePalette, isOpen])

  useEffect(() => {
    if (!isOpen) return
    inputRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return
      const dialog = dialogRef.current
      if (!dialog) return

      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector))
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement

      if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleTab)
    return () => window.removeEventListener('keydown', handleTab)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
      <button
        type="button"
        className="absolute inset-0 bg-night-950/70"
        onClick={closePalette}
        aria-label="Close command palette"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className={cn(
          'relative w-full max-w-2xl overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-night-900/90 shadow-[0_40px_120px_-60px_rgba(59,130,246,0.5)] backdrop-blur',
          !reduceMotion && 'transition-transform duration-200',
        )}
      >
        <div className="border-b border-white/10 bg-night-950/70 px-5 py-4">
          <label className="prompt-block" htmlFor="commandPaletteInput">
            Command palette
          </label>
          <input
            id="commandPaletteInput"
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Type a command or search..."
            className="mt-3 w-full rounded-[var(--radius-md)] border border-white/10 bg-night-950/70 px-4 py-3 text-sm text-white shadow-inner focus:border-[rgb(var(--accent-1)/0.7)] focus:outline-none"
          />
        </div>
        <div className="max-h-[60vh] overflow-y-auto px-5 py-4">
          {filteredActions.length === 0 && (
            <p className="text-sm text-slate-400">No results.</p>
          )}
          <div className="grid gap-2">
            {filteredActions.map((action, index) => {
              const previous = filteredActions[index - 1]
              const showGroup = !previous || previous.group !== action.group
              return (
                <div key={action.id} className="grid gap-2">
                  {showGroup && (
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      {action.group}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      action.onSelect()
                      closePalette()
                    }}
                    className="flex w-full items-center justify-between rounded-[var(--radius-md)] border border-white/10 bg-night-950/60 px-4 py-3 text-left text-sm text-slate-200 transition hover:border-white/30 hover:bg-night-900/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--accent-1)/0.85)]"
                  >
                    <span>{action.label}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Enter</span>
                  </button>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 bg-night-950/70 px-5 py-3 text-xs text-slate-400">
          <span>Tip: Press Esc to close.</span>
          <span>Ctrl+K / Cmd+K</span>
        </div>
      </div>
    </div>
  )
}
