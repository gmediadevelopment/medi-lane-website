import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, BookOpen, UserCheck, Building2, Filter } from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import { ARTICLES } from '../content/wissen'
import { CATEGORY_LABEL, type ArticleMeta } from '../content/wissen/types'
import './Wissen.css'

type AudienceFilter = 'alle' | 'einrichtungen' | 'pflegekraefte'

const AUDIENCE_FILTERS: { id: AudienceFilter; label: string }[] = [
  { id: 'alle', label: 'Alle Artikel' },
  { id: 'einrichtungen', label: 'Für Einrichtungen' },
  { id: 'pflegekraefte', label: 'Für Pflegekräfte' },
]

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

function ArticleCard({ article }: { article: ArticleMeta }) {
  const AudienceIcon = article.audience === 'pflegekraefte' ? UserCheck : Building2
  return (
    <Link to={`/wissen/${article.slug}`} className="article-card">
      <div className="article-card-meta">
        <span className={`article-tag article-tag--${article.audience}`}>
          <AudienceIcon size={14} />
          {CATEGORY_LABEL[article.category]}
        </span>
        <span className="article-reading">
          <Clock size={14} /> {article.readingMinutes} Min.
        </span>
      </div>
      <h3 className="article-card-title">{article.title}</h3>
      <p className="article-card-desc">{article.description}</p>
      <div className="article-card-footer">
        <span className="article-date">{formatDate(article.publishedAt)}</span>
        <span className="article-card-link">
          Lesen <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  )
}

export default function Wissen() {
  const [filter, setFilter] = useState<AudienceFilter>('alle')

  const filtered = ARTICLES.filter(a => {
    if (filter === 'alle') return true
    return a.audience === filter
  })

  return (
    <div className="wissen-page">
      <PageHero
        badge="Wissen & Ratgeber"
        title={
          <>
            Was wir über Personalbindung,<br />
            Matching und{' '}
            <span className="gradient-text">Wechselbegleitung</span> lernen
          </>
        }
        subtitle="Konkrete Artikel zu den Themen, die in Pflegeeinrichtungen wirklich wehtun — und für Pflegekräfte, die einen Wechsel sauber vorbereiten wollen."
        actions={
          <a href="#articles" className="btn btn--primary btn--lg">
            <BookOpen size={20} />
            Artikel ansehen
          </a>
        }
      />

      {/* FILTER */}
      <section className="section" style={{ paddingTop: 0 }} id="articles">
        <div className="container">
          <div className="wissen-filter-bar">
            <div className="wissen-filter-label">
              <Filter size={16} />
              <span>Zielgruppe</span>
            </div>
            <div className="wissen-filters">
              {AUDIENCE_FILTERS.map(f => (
                <button
                  key={f.id}
                  className={`wissen-filter ${filter === f.id ? 'wissen-filter--active' : ''}`}
                  onClick={() => setFilter(f.id)}
                  aria-pressed={filter === f.id}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="wissen-empty">
              <p>Für diese Zielgruppe sind aktuell noch keine Artikel veröffentlicht.</p>
            </div>
          ) : (
            <div className="wissen-grid">
              {filtered.map((a, i) => (
                <ScrollReveal key={a.slug} delay={(i % 3) + 1}>
                  <ArticleCard article={a} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER / FINAL CTA */}
      <section className="section final-cta-section">
        <div className="container">
          <ScrollReveal>
            <div className="final-cta-box">
              <h2>Themenvorschlag? Schreiben Sie uns.</h2>
              <p>
                Wir bauen den Wissensbereich kontinuierlich aus. Wenn Ihnen ein Thema fehlt
                oder Sie ein konkretes Problem haben, das hier behandelt werden sollte —
                sagen Sie Bescheid.
              </p>
              <Link to="/kontakt" className="btn btn--white btn--lg">
                Themenvorschlag senden
                <ArrowRight size={20} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
