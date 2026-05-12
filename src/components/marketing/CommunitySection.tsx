import { useEffect, useState, type FormEvent } from 'react'
import type { CommunityMarketingCopy } from '../../content/marketingCopy'
import type { Locale } from '../../content/localization'
import type { CommunitySignal } from '../../data/communitySignals'
import {
  areCommunityGoogleFormsConfigured,
  COMMUNITY_FOOTPRINT_FORM_RESPONSE_URL,
  COMMUNITY_SURVEY_FORM_RESPONSE_URL,
  communityFootprintEntryIds,
  communitySurveyEntryIds,
  FOOTPRINT_CONSENT_SUBMIT_VALUE,
  SURVEY_CONSENT_SUBMIT_VALUE,
} from '../../constants/communityGoogleForms'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { cn } from '../ui/cn'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'

const inputClass =
  'mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-[rgb(var(--p-accent-rgb)/0.45)]'

const labelClass = 'block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400'

type CommunitySectionProps = {
  copy: CommunityMarketingCopy
  locale: Locale
  signals: readonly CommunitySignal[]
}

function handleDisabledFormSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

const formsInactiveFormClass =
  'pointer-events-none cursor-default [&_label]:cursor-default [&_input]:cursor-not-allowed [&_textarea]:cursor-not-allowed [&_button]:cursor-not-allowed'

const STORAGE_FOOTPRINT_SUBMITTED = 'paradise.community.footprintSubmitted'
const STORAGE_SURVEY_SUBMITTED = 'paradise.community.surveySubmitted'

function readSubmittedFlag(key: string): boolean {
  try {
    if (typeof window === 'undefined') return false
    return window.localStorage.getItem(key) === 'true'
  } catch {
    return false
  }
}

function writeSubmittedFlag(key: string): void {
  try {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(key, 'true')
  } catch {
    // Storage unavailable or quota exceeded — submission still proceeds when applicable.
  }
}

export function CommunitySection({ copy, locale, signals }: CommunitySectionProps) {
  const formsReady = areCommunityGoogleFormsConfigured()
  const [footprintLocked, setFootprintLocked] = useState(false)
  const [surveyLocked, setSurveyLocked] = useState(false)
  const [footprintFreshSuccess, setFootprintFreshSuccess] = useState(false)
  const [surveyFreshSuccess, setSurveyFreshSuccess] = useState(false)

  useEffect(() => {
    setFootprintLocked(readSubmittedFlag(STORAGE_FOOTPRINT_SUBMITTED))
    setSurveyLocked(readSubmittedFlag(STORAGE_SURVEY_SUBMITTED))
    setFootprintFreshSuccess(false)
    setSurveyFreshSuccess(false)
  }, [locale])

  const footprintInactive = !formsReady || footprintLocked
  const surveyInactive = !formsReady || surveyLocked

  return (
    <Section id="comunidad" className="relative py-16 sm:py-20 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[rgb(var(--p-accent-rgb)/0.06)] via-transparent to-[rgb(var(--p-accent2-rgb)/0.05)]"
        aria-hidden
      />
      <Container>
        <iframe name="community-footprint-frame" title="Community footprint form target" className="hidden" tabIndex={-1} />
        <iframe name="community-survey-frame" title="Community survey form target" className="hidden" tabIndex={-1} />
        <header className="max-w-[65ch] space-y-4">
          <p className="prompt-block">{copy.kicker}</p>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">{copy.title}</h2>
          <p className="text-[0.98rem] leading-relaxed text-slate-300/95 sm:text-base">{copy.intro}</p>
        </header>

        {!formsReady ? (
          <p
            className="mt-6 max-w-[65ch] rounded-2xl border border-amber-400/25 bg-amber-400/[0.08] px-4 py-3 text-sm leading-relaxed text-amber-100/95"
            role="status"
          >
            {copy.formsNotConfiguredNotice}
          </p>
        ) : null}

        <div className="mt-10 space-y-6">
          <h3 className="font-display text-lg font-semibold text-white sm:text-xl">{copy.signalsHeading}</h3>
          {signals.length === 0 ? (
            <Card className="max-w-lg border border-white/10 bg-white/[0.025] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm sm:px-5 sm:py-5">
              <p className="text-sm font-semibold text-slate-200">{copy.signalsEmptyTitle}</p>
              {copy.signalsEmptyBody.trim() ? (
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{copy.signalsEmptyBody}</p>
              ) : null}
            </Card>
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {signals.map((s) => (
                <li key={s.id}>
                  <Card className="h-full border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-500">{s.date}</p>
                    <p className="mt-2 font-display text-base font-semibold text-white">{s.name}</p>
                    <p className="mt-1 text-xs font-medium text-[rgb(var(--p-accent-rgb)/0.95)]">{s.area}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300/95">{s.message}</p>
                  </Card>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-14 flex flex-col gap-10 lg:gap-12">
          <Card
            className={cn(
              'relative overflow-hidden border border-white/10 bg-white/[0.03] p-5 shadow-[0_24px_80px_-48px_rgba(124,58,237,0.35)] sm:p-7 md:p-8',
              !formsReady && 'opacity-[0.78]',
            )}
          >
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgb(var(--p-accent-rgb)/0.12)] via-transparent to-transparent"
              aria-hidden
            />
            <div className="relative space-y-5">
              <div>
                <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{copy.footprint.title}</h3>
                <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-slate-300/95 sm:text-base">{copy.footprint.body}</p>
              </div>
              <form
                className={cn('space-y-4', footprintInactive && formsInactiveFormClass)}
                method="post"
                action={formsReady ? COMMUNITY_FOOTPRINT_FORM_RESPONSE_URL : '#'}
                target={formsReady ? 'community-footprint-frame' : undefined}
                onSubmit={(e) => {
                  if (!formsReady) {
                    handleDisabledFormSubmit(e)
                    return
                  }
                  if (footprintLocked) {
                    e.preventDefault()
                    return
                  }
                  writeSubmittedFlag(STORAGE_FOOTPRINT_SUBMITTED)
                  setFootprintFreshSuccess(true)
                  setTimeout(() => {
                    setFootprintLocked(true)
                  }, 0)
                }}
              >
                <input type="hidden" name={communityFootprintEntryIds.locale} value={locale} />
                <div>
                  <label className={labelClass} htmlFor="community-alias">
                    {copy.footprint.aliasLabel}
                  </label>
                  <input
                    id="community-alias"
                    className={inputClass}
                    name={communityFootprintEntryIds.alias}
                    type="text"
                    autoComplete="nickname"
                    placeholder={copy.footprint.aliasPlaceholder}
                    required={formsReady && !footprintLocked}
                    disabled={footprintInactive}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="community-area">
                    {copy.footprint.areaLabel}
                  </label>
                  <select
                    id="community-area"
                    className={cn(
                      inputClass,
                      'appearance-none bg-white/[0.06] text-slate-100 border-white/10 focus:border-violet-300/50 focus:ring-violet-300/20',
                    )}
                    name={communityFootprintEntryIds.area}
                    autoComplete="off"
                    required={formsReady && !footprintLocked}
                    disabled={footprintInactive}
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-slate-900 text-slate-400">
                      {copy.footprint.areaPlaceholder}
                    </option>
                    {copy.footprint.areaOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-slate-900 text-slate-100">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="community-message">
                    {copy.footprint.messageLabel}
                  </label>
                  <textarea
                    id="community-message"
                    className={cn(inputClass, 'min-h-[120px] resize-y')}
                    name={communityFootprintEntryIds.message}
                    placeholder={copy.footprint.messagePlaceholder}
                    required={formsReady && !footprintLocked}
                    disabled={footprintInactive}
                    rows={4}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="community-email">
                    {copy.footprint.emailLabel}
                  </label>
                  <input
                    id="community-email"
                    className={inputClass}
                    name={communityFootprintEntryIds.email}
                    type="email"
                    autoComplete="email"
                    placeholder={copy.footprint.emailPlaceholder}
                    disabled={footprintInactive}
                  />
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{copy.footprint.emailHint}</p>
                </div>
                <div className="flex items-start gap-3 pt-1">
                  <input
                    id="community-consent"
                    className="mt-1 h-4 w-4 shrink-0 rounded border border-white/20 bg-white/[0.06] text-[rgb(var(--p-accent-rgb))] focus:ring-[rgb(var(--p-accent-rgb)/0.5)]"
                    name={communityFootprintEntryIds.consent}
                    type="checkbox"
                    value={FOOTPRINT_CONSENT_SUBMIT_VALUE}
                    required={formsReady && !footprintLocked}
                    disabled={footprintInactive}
                  />
                  <label htmlFor="community-consent" className="text-sm leading-relaxed text-slate-300/95">
                    {copy.footprint.consentLabel}
                  </label>
                </div>
                <Button type="submit" size="md" className="mt-2" disabled={footprintInactive}>
                  {copy.footprint.submit}
                </Button>
                {footprintLocked ? (
                  <p className="mt-3 text-sm leading-relaxed text-emerald-200/95" role="status">
                    {footprintFreshSuccess ? copy.footprintSuccessMessage : copy.footprintAlreadySubmittedMessage}
                  </p>
                ) : null}
              </form>
            </div>
          </Card>

          <Card
            className={cn(
              'relative overflow-hidden border border-white/10 bg-white/[0.03] p-5 shadow-[0_24px_80px_-48px_rgba(59,130,246,0.22)] sm:p-7 md:p-8',
              !formsReady && 'opacity-[0.78]',
            )}
          >
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/[0.08] via-transparent to-[rgb(var(--p-accent2-rgb)/0.1)]"
              aria-hidden
            />
            <div className="relative space-y-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{copy.survey.title}</h3>
                <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-slate-300/95 sm:text-base">{copy.survey.body}</p>
              </div>
              <form
                className={cn('space-y-6', surveyInactive && formsInactiveFormClass)}
                method="post"
                action={formsReady ? COMMUNITY_SURVEY_FORM_RESPONSE_URL : '#'}
                target={formsReady ? 'community-survey-frame' : undefined}
                onSubmit={(e) => {
                  if (!formsReady) {
                    handleDisabledFormSubmit(e)
                    return
                  }
                  if (surveyLocked) {
                    e.preventDefault()
                    return
                  }
                  writeSubmittedFlag(STORAGE_SURVEY_SUBMITTED)
                  setSurveyFreshSuccess(true)
                  setTimeout(() => {
                    setSurveyLocked(true)
                  }, 0)
                }}
              >
                <input type="hidden" name={communitySurveyEntryIds.locale} value={locale} />

                <fieldset className="space-y-2 border-0 p-0">
                  <legend className={cn(labelClass, 'mb-0')}>{copy.survey.q1.legend}</legend>
                  <div className="mt-2 flex flex-col gap-2.5">
                    {copy.survey.q1.options.map((opt) => (
                      <label
                        key={opt}
                        className={cn(
                          'flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-slate-200 transition hover:border-white/15',
                          formsReady && !surveyLocked ? 'cursor-pointer' : 'cursor-default',
                        )}
                      >
                        <input
                          type="radio"
                          name={communitySurveyEntryIds.q1}
                          value={opt}
                          required={formsReady && !surveyLocked}
                          disabled={surveyInactive}
                          className="h-4 w-4 shrink-0 border-white/20 bg-white/[0.06] text-[rgb(var(--p-accent-rgb))]"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label className={labelClass} htmlFor="survey-q2">
                    {copy.survey.q2.legend}
                  </label>
                  <textarea
                    id="survey-q2"
                    className={cn(inputClass, 'min-h-[88px] resize-y')}
                    name={communitySurveyEntryIds.q2}
                    placeholder={copy.survey.q2.placeholder}
                    required={formsReady && !surveyLocked}
                    disabled={surveyInactive}
                    rows={3}
                  />
                </div>

                <fieldset className="space-y-2 border-0 p-0">
                  <legend className={cn(labelClass, 'mb-0')}>{copy.survey.q3.legend}</legend>
                  <div className="mt-2 flex flex-col gap-2.5">
                    {copy.survey.q3.options.map((opt) => (
                      <label
                        key={opt}
                        className={cn(
                          'flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-slate-200 transition hover:border-white/15',
                          formsReady && !surveyLocked ? 'cursor-pointer' : 'cursor-default',
                        )}
                      >
                        <input
                          type="radio"
                          name={communitySurveyEntryIds.q3}
                          value={opt}
                          required={formsReady && !surveyLocked}
                          disabled={surveyInactive}
                          className="h-4 w-4 shrink-0 border-white/20 bg-white/[0.06] text-[rgb(var(--p-accent-rgb))]"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label className={labelClass} htmlFor="survey-q4">
                    {copy.survey.q4.legend}
                  </label>
                  <textarea
                    id="survey-q4"
                    className={cn(inputClass, 'min-h-[88px] resize-y')}
                    name={communitySurveyEntryIds.q4}
                    placeholder={copy.survey.q4.placeholder}
                    required={formsReady && !surveyLocked}
                    disabled={surveyInactive}
                    rows={3}
                  />
                </div>

                <fieldset className="space-y-2 border-0 p-0">
                  <legend className={cn(labelClass, 'mb-0')}>{copy.survey.q5.legend}</legend>
                  <div className="mt-2 flex flex-col gap-2.5">
                    {copy.survey.q5.options.map((opt) => (
                      <label
                        key={opt}
                        className={cn(
                          'flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-slate-200 transition hover:border-white/15',
                          formsReady && !surveyLocked ? 'cursor-pointer' : 'cursor-default',
                        )}
                      >
                        <input
                          type="radio"
                          name={communitySurveyEntryIds.q5}
                          value={opt}
                          required={formsReady && !surveyLocked}
                          disabled={surveyInactive}
                          className="h-4 w-4 shrink-0 border-white/20 bg-white/[0.06] text-[rgb(var(--p-accent-rgb))]"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="space-y-2 border-0 p-0">
                  <legend className={cn(labelClass, 'mb-0')}>{copy.survey.q6.legend}</legend>
                  <div className="mt-2 flex flex-col gap-2.5">
                    {copy.survey.q6.options.map((opt) => (
                      <label
                        key={opt}
                        className={cn(
                          'flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-slate-200 transition hover:border-white/15',
                          formsReady && !surveyLocked ? 'cursor-pointer' : 'cursor-default',
                        )}
                      >
                        <input
                          type="radio"
                          name={communitySurveyEntryIds.q6}
                          value={opt}
                          required={formsReady && !surveyLocked}
                          disabled={surveyInactive}
                          className="h-4 w-4 shrink-0 border-white/20 bg-white/[0.06] text-[rgb(var(--p-accent-rgb))]"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="space-y-2 border-0 p-0">
                  <legend className={cn(labelClass, 'mb-0')}>{copy.survey.q7.legend}</legend>
                  <div className="mt-2 flex flex-col gap-2.5">
                    {copy.survey.q7.options.map((opt) => (
                      <label
                        key={opt}
                        className={cn(
                          'flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-slate-200 transition hover:border-white/15',
                          formsReady && !surveyLocked ? 'cursor-pointer' : 'cursor-default',
                        )}
                      >
                        <input
                          type="radio"
                          name={communitySurveyEntryIds.q7}
                          value={opt}
                          required={formsReady && !surveyLocked}
                          disabled={surveyInactive}
                          className="h-4 w-4 shrink-0 border-white/20 bg-white/[0.06] text-[rgb(var(--p-accent-rgb))]"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="space-y-2 border-0 p-0">
                  <legend className={cn(labelClass, 'mb-0')}>{copy.survey.q8.legend}</legend>
                  <div className="mt-2 flex flex-col gap-2.5">
                    {copy.survey.q8.options.map((opt) => (
                      <label
                        key={opt}
                        className={cn(
                          'flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-slate-200 transition hover:border-white/15',
                          formsReady && !surveyLocked ? 'cursor-pointer' : 'cursor-default',
                        )}
                      >
                        <input
                          type="radio"
                          name={communitySurveyEntryIds.q8}
                          value={opt}
                          required={formsReady && !surveyLocked}
                          disabled={surveyInactive}
                          className="h-4 w-4 shrink-0 border-white/20 bg-white/[0.06] text-[rgb(var(--p-accent-rgb))]"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label className={labelClass} htmlFor="survey-q9">
                    {copy.survey.q9.legend}
                  </label>
                  <textarea
                    id="survey-q9"
                    className={cn(inputClass, 'min-h-[88px] resize-y')}
                    name={communitySurveyEntryIds.q9}
                    placeholder={copy.survey.q9.placeholder}
                    disabled={surveyInactive}
                    rows={3}
                  />
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <input
                    id="survey-consent"
                    className="mt-1 h-4 w-4 shrink-0 rounded border border-white/20 bg-white/[0.06] text-[rgb(var(--p-accent-rgb))] focus:ring-[rgb(var(--p-accent-rgb)/0.5)]"
                    name={communitySurveyEntryIds.consent}
                    type="checkbox"
                    value={SURVEY_CONSENT_SUBMIT_VALUE}
                    required={formsReady && !surveyLocked}
                    disabled={surveyInactive}
                  />
                  <label htmlFor="survey-consent" className="text-sm leading-relaxed text-slate-300/95">
                    {copy.survey.consentLabel}
                  </label>
                </div>

                <Button type="submit" size="md" className="mt-1" disabled={surveyInactive}>
                  {copy.survey.submit}
                </Button>
                {surveyLocked ? (
                  <p className="mt-3 text-sm leading-relaxed text-emerald-200/95" role="status">
                    {surveyFreshSuccess ? copy.surveySuccessMessage : copy.surveyAlreadySubmittedMessage}
                  </p>
                ) : null}
              </form>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  )
}
