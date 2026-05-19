import type { ReactNode } from 'react'
import ScrollReveal from '../ui/ScrollReveal'
import './Pillars.css'

interface Pillar {
  number?: string
  icon?: ReactNode
  title: string
  subtitle?: string
  description: string
  bullets?: string[]
}

interface PillarsProps {
  pillars: Pillar[]
}

export default function Pillars({ pillars }: PillarsProps) {
  return (
    <div className={`pillars pillars--count-${pillars.length}`}>
      {pillars.map((p, i) => (
        <ScrollReveal key={i} delay={i + 1}>
          <div className="pillar-card">
            {p.number && <div className="pillar-number">{p.number}</div>}
            {p.icon && <div className="pillar-icon">{p.icon}</div>}
            {p.subtitle && <span className="pillar-subtitle">{p.subtitle}</span>}
            <h3 className="pillar-title">{p.title}</h3>
            <p className="pillar-description">{p.description}</p>
            {p.bullets && p.bullets.length > 0 && (
              <ul className="pillar-bullets">
                {p.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}
