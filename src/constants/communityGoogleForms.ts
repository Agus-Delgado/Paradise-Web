/**
 * Google Forms: POST a `…/formResponse`.
 *
 * Sustituí `PEGAR_URL_AQUI` por el ID del formulario (segmento de la URL publicada)
 * y cada `entry.xxx` por el `entry.NNN…` real (HTML del form o enlace prellenado).
 */

export const COMMUNITY_FORM_ACTION_URL =
  'https://docs.google.com/forms/d/e/PEGAR_URL_AQUI/formResponse' as const

export const SURVEY_FORM_ACTION_URL =
  'https://docs.google.com/forms/d/e/PEGAR_URL_AQUI/formResponse' as const

export const COMMUNITY_FORM_FIELDS = {
  alias: 'entry.xxx',
  area: 'entry.xxx',
  message: 'entry.xxx',
  email: 'entry.xxx',
  consent: 'entry.xxx',
  locale: 'entry.xxx',
} as const

export const SURVEY_FORM_FIELDS = {
  believesInParadise: 'entry.xxx',
  paradiseImage: 'entry.xxx',
  brokenSystem: 'entry.xxx',
  improveWithTechnology: 'entry.xxx',
  humanAI: 'entry.xxx',
  aiConcern: 'entry.xxx',
  communityEvolution: 'entry.xxx',
  contribution: 'entry.xxx',
  finalMessage: 'entry.xxx',
  locale: 'entry.xxx',
} as const

/** Compatibilidad con [CommunitySection.tsx](src/components/marketing/CommunitySection.tsx) */
export const COMMUNITY_FOOTPRINT_FORM_RESPONSE_URL = COMMUNITY_FORM_ACTION_URL
export const COMMUNITY_SURVEY_FORM_RESPONSE_URL = SURVEY_FORM_ACTION_URL
export const communityFootprintEntryIds = COMMUNITY_FORM_FIELDS

export const communitySurveyEntryIds = {
  q1: SURVEY_FORM_FIELDS.believesInParadise,
  q2: SURVEY_FORM_FIELDS.paradiseImage,
  q3: SURVEY_FORM_FIELDS.brokenSystem,
  q4: SURVEY_FORM_FIELDS.improveWithTechnology,
  q5: SURVEY_FORM_FIELDS.humanAI,
  q6: SURVEY_FORM_FIELDS.aiConcern,
  q7: SURVEY_FORM_FIELDS.communityEvolution,
  q8: SURVEY_FORM_FIELDS.contribution,
  q9: SURVEY_FORM_FIELDS.finalMessage,
  locale: SURVEY_FORM_FIELDS.locale,
} as const

function isValidGoogleFormResponseUrl(url: string): boolean {
  if (!url.startsWith('https://docs.google.com/forms/d/e/')) return false
  if (!url.endsWith('/formResponse')) return false
  if (url.includes('PEGAR_URL') || url.includes('REEMPLAZAR')) return false
  const match = url.match(/\/d\/e\/([^/]+)\/formResponse$/)
  const id = match?.[1]
  if (!id || id.length < 10) return false
  return true
}

/** Los `entry.*` de Google son numéricos (`entry.1234567890`). */
function isValidEntryName(name: string): boolean {
  return /^entry\.\d+$/.test(name)
}

export function areCommunityGoogleFormsConfigured(): boolean {
  if (!isValidGoogleFormResponseUrl(COMMUNITY_FORM_ACTION_URL)) return false
  if (!isValidGoogleFormResponseUrl(SURVEY_FORM_ACTION_URL)) return false
  const entries = [...Object.values(COMMUNITY_FORM_FIELDS), ...Object.values(SURVEY_FORM_FIELDS)]
  return entries.every(isValidEntryName)
}
