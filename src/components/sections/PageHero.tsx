import type { ReactNode } from 'react'
import './PageHero.css'

interface PageHeroProps {
  badge?: string
  title: ReactNode
  subtitle?: ReactNode
  actions?: ReactNode
  variant?: 'primary' | 'amber' | 'dark'
  trust?: ReactNode
  meta?: ReactNode
}

export default function PageHero({
  badge,
  title,
  subtitle,
  actions,
  variant = 'primary',
  trust,
  meta,
}: PageHeroProps) {
  return (
    <section className={`page-hero page-hero--${variant}`}>
      <div className="page-hero-bg">
        <div className={`page-hero-gradient page-hero-gradient--${variant}`} />
        <div className="page-hero-mesh" />
      </div>
      <div className="container page-hero-inner">
        {badge && (
          <span className={`section-badge ${variant === 'amber' ? 'section-badge--amber' : ''}`}>
            {badge}
          </span>
        )}
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
        {actions && <div className="page-hero-actions">{actions}</div>}
        {trust && <div className="page-hero-trust">{trust}</div>}
        {meta && <div className="page-hero-meta">{meta}</div>}
      </div>
    </section>
  )
}
