import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock, UserCheck, Building2 } from 'lucide-react'
import { getArticle, ARTICLES } from '../content/wissen'
import { CATEGORY_LABEL, type ArticleMeta } from '../content/wissen/types'
import StubPage from './StubPage'
import './Artikel.css'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

function pickRelated(current: ArticleMeta): ArticleMeta[] {
  return ARTICLES.filter(a => a.slug !== current.slug)
    .sort((a, b) => {
      const sameAudience = (x: ArticleMeta) => (x.audience === current.audience ? 0 : 1)
      return sameAudience(a) - sameAudience(b)
    })
    .slice(0, 2)
}

export default function Artikel() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticle(slug) : undefined

  if (!article) {
    return (
      <StubPage
        title="Artikel nicht gefunden"
        description="Dieser Artikel existiert nicht oder wurde verschoben. Vielleicht finden Sie das Thema in der Übersicht."
        badge="404"
      />
    )
  }

  const AudienceIcon = article.audience === 'pflegekraefte' ? UserCheck : Building2
  const Body = article.body
  const related = pickRelated(article)

  return (
    <article className="artikel-page">
      <header className="artikel-header">
        <div className="container container--narrow">
          <Link to="/wissen" className="artikel-back">
            <ArrowLeft size={16} />
            Zur Übersicht
          </Link>

          <div className="artikel-meta">
            <span className={`article-tag article-tag--${article.audience}`}>
              <AudienceIcon size={14} />
              {CATEGORY_LABEL[article.category]}
            </span>
            <span className="article-reading">
              <Clock size={14} /> {article.readingMinutes} Min. Lesezeit
            </span>
            <span className="article-date">{formatDate(article.publishedAt)}</span>
          </div>

          <h1 className="artikel-title">{article.title}</h1>
          <p className="artikel-description">{article.description}</p>
        </div>
      </header>

      <div className="container container--narrow">
        <div className="artikel-body">
          <Body />
        </div>
      </div>

      {related.length > 0 && (
        <section className="section section--alt artikel-related-section">
          <div className="container">
            <h2 className="artikel-related-title">Weitere Artikel zum Thema</h2>
            <div className="artikel-related-grid">
              {related.map(r => {
                const RIcon = r.audience === 'pflegekraefte' ? UserCheck : Building2
                return (
                  <Link key={r.slug} to={`/wissen/${r.slug}`} className="artikel-related-card">
                    <span className={`article-tag article-tag--${r.audience}`}>
                      <RIcon size={14} />
                      {CATEGORY_LABEL[r.category]}
                    </span>
                    <h3>{r.title}</h3>
                    <p>{r.description}</p>
                    <span className="article-card-link">
                      Weiterlesen <ArrowRight size={16} />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
