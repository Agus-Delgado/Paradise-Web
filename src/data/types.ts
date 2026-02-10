export type ModuleItem = {
  id: string
  name: string
  summary: string
  tags: string[]
  status: 'active' | 'alpha' | 'concept'
  signals: string[]
}
