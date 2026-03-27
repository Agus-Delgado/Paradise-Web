import { useState } from 'react'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { Divider } from '../ui/Divider'
import { PromptBlock } from '../landing/PromptBlock'
import { Button } from '../ui/Button'

type Step = { title: string; body: string }

export function HowItWorks({
  title,
  steps,
  technicalToggle,
}: {
  title: string
  steps: ReadonlyArray<Step>
  technicalToggle: { title: string; body: string; cta: string }
}) {
  const [open, setOpen] = useState(false)

  return (
    <Section id="como-funciona" className="py-16">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <Card key={s.title} className="p-6">
              <p className="text-base font-semibold text-white">{s.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300/85">{s.body}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Divider />
          <div className="mt-8 rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-base font-semibold text-white">{technicalToggle.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/80">{technicalToggle.body}</p>
              </div>
              <Button variant="outline" onClick={() => setOpen((v) => !v)}>
                {technicalToggle.cta}
              </Button>
            </div>

            {open ? (
              <div className="mt-6">
                                <PromptBlock
                  label="Vista técnica (resumen)"
                  value={[
                    'modules: piezas desacopladas, cada una con propósito claro',
                    'contracts: schemas / types como interfaz entre módulos',
                    'artifacts: outputs versionados (exports, docs, snapshots)',
                    'events: señales estructuradas para coordinación y audit',
                    'mock-first: demo local antes de cloud',
                  ].join('\\n')}
                />
              </div>
            ) : null}
          </div>
        </div>
    </Section>
  )
}
