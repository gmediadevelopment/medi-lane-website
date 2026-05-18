import type { ReactNode } from 'react'

export type ArticleCategory =
  | 'einrichtungen'
  | 'pflegekraefte'
  | 'bindung'
  | 'recruiting'
  | 'wechsel'

export interface ArticleMeta {
  slug: string
  title: string
  description: string
  category: ArticleCategory
  audience: 'einrichtungen' | 'pflegekraefte' | 'beide'
  readingMinutes: number
  publishedAt: string
  body: () => ReactNode
}

export const CATEGORY_LABEL: Record<ArticleCategory, string> = {
  einrichtungen: 'Für Einrichtungen',
  pflegekraefte: 'Für Pflegekräfte',
  bindung: 'Personalbindung',
  recruiting: 'Recruiting',
  wechsel: 'Jobwechsel',
}
