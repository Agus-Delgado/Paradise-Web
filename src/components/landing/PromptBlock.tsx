import { useState } from 'react'
import { Button } from '../ui/Button'
import { cn } from '../ui/cn'

type PromptBlockProps = {
  label?: string
  value: string
  className?: string
}

export function PromptBlock({ label = 'Prompt', value, className }: PromptBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(value)
      } else {
        const textarea = document.createElement('textarea')
        textarea.value = value
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        textarea.remove()
      }
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className={cn('rounded-[var(--radius-lg)] border border-white/10 bg-night-900/70 p-5', className)}>
      <div className="flex items-center justify-between gap-4">
        <p className="prompt-block">{label}</p>
        <Button size="sm" variant="outline" onClick={handleCopy} aria-live="polite">
          {copied ? 'Copied' : 'Copy'}
        </Button>
      </div>
      <div className="mt-4 rounded-[var(--radius-md)] border border-white/10 bg-night-950/70 px-4 py-3 text-sm text-slate-200">
        <code className="font-mono text-xs tracking-[0.08em]">{value}</code>
      </div>
    </div>
  )
}
