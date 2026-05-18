import probezeit from './probezeit-kuendigung'
import fehlbesetzungen from './fehlbesetzungen-vermeiden'
import zeitarbeit from './zeitarbeit-reduzieren'
import jobwechsel from './jobwechsel-worauf-achten'
import vorstellungsgespraech from './vorstellungsgespraech-fragen'
import type { ArticleMeta } from './types'

export const ARTICLES: ArticleMeta[] = [
  probezeit,
  fehlbesetzungen,
  zeitarbeit,
  jobwechsel,
  vorstellungsgespraech,
].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))

export function getArticle(slug: string): ArticleMeta | undefined {
  return ARTICLES.find(a => a.slug === slug)
}
