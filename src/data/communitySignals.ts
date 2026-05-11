export type CommunitySignal = {
  id: string
  name: string
  area: string
  message: string
  date: string
}

/** Señales aprobadas y curadas manualmente para mostrar en la web. */
export const communitySignals: readonly CommunitySignal[] = []
