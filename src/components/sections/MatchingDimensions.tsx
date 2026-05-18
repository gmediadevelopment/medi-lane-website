import type { ReactNode } from 'react'
import ScrollReveal from '../ui/ScrollReveal'
import './MatchingDimensions.css'

interface Dimension {
  icon: ReactNode
  title: string
  examples: string[]
}

interface MatchingDimensionsProps {
  dimensions: Dimension[]
}

export default function MatchingDimensions({ dimensions }: MatchingDimensionsProps) {
  return (
    <div className="matching-dimensions">
      {dimensions.map((d, i) => (
        <ScrollReveal key={i} delay={(i % 3) + 1}>
          <div className="dimension-card">
            <div className="dimension-icon">{d.icon}</div>
            <h3 className="dimension-title">{d.title}</h3>
            <ul className="dimension-examples">
              {d.examples.map((e, j) => (
                <li key={j}>{e}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}
