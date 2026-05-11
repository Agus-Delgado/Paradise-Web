/**
 * Google Forms: POST a `…/formResponse`.
 * Huella (COMMUNITY_*) y encuesta (SURVEY_*) son formularios distintos.
 */

export const COMMUNITY_FORM_ACTION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScNN9YVazc3mWMyCeUyrhW-AIM13nYPne5lRUvb1CY8o_Pk4Q/formResponse' as const

export const SURVEY_FORM_ACTION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSe_UuNGZmBnIQ68BPNPFDdLIuxp3Yh3s6yu1TfaNuOGFiFTrQ/formResponse' as const

export const COMMUNITY_FORM_FIELDS = {
  alias: 'entry.1784543284',
  area: 'entry.1031346334',
  message: 'entry.1233408418',
  email: 'entry.2129071006',
  consent: 'entry.1300059497',
  locale: 'entry.1691324414',
} as const

export const SURVEY_FORM_FIELDS = {
  believesInParadise: 'entry.1832451703',
  paradiseImage: 'entry.2137518931',
  brokenSystem: 'entry.1298865835',
  improveWithTechnology: 'entry.1835627347',
  humanAI: 'entry.870370718',
  aiConcern: 'entry.697423522',
  communityEvolution: 'entry.1390687222',
  contribution: 'entry.1756353386',
  finalMessage: 'entry.1924993680',
  consent: 'entry.1077709115',
  locale: 'entry.1925502822',
} as const

/** Valor exacto que debe enviarse al campo de consentimiento de la huella en Google Forms (español). */
export const FOOTPRINT_CONSENT_SUBMIT_VALUE =
  'Acepto que mi aporte pueda formar parte de Paradise.' as const

/** Valor exacto que debe enviarse al campo de consentimiento de la encuesta en Google Forms (español). */
export const SURVEY_CONSENT_SUBMIT_VALUE =
  'Acepto que mis respuestas puedan ser utilizadas como señales para ayudar a evolucionar Paradise.' as const

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
  consent: SURVEY_FORM_FIELDS.consent,
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
