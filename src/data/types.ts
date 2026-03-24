/**
 * Tipos alternativos para modules.json. No usados por la landing principal, que utiliza modules.ts.
 */
export type ModuleItem = {
  id: string
  name: string
  summary: string
  tags: string[]
  status: 'active' | 'alpha' | 'concept'
  signals: string[]
}
