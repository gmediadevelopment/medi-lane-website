import type { ReactNode } from 'react'
import ScrollReveal from '../ui/ScrollReveal'
import './ProcessTimeline.css'

interface TimelineStep {
  marker: string
  title: string
  description: string
  icon?: ReactNode
  bullets?: string[]
}

interface ProcessTimelineProps {
  steps: TimelineStep[]
  variant?: 'horizontal' | 'vertical'
}

export default function ProcessTimeline({
  steps,
  variant = 'vertical',
}: ProcessTimelineProps) {
  return (
    <div className={`process-timeline process-timeline--${variant}`}>
      {steps.map((step, i) => (
        <ScrollReveal key={i} delay={(i % 4) + 1}>
          <div className="timeline-step">
            <div className="timeline-marker-wrap">
              <div className="timeline-marker">{step.marker}</div>
              {i < steps.length - 1 && <div className="timeline-line" />}
            </div>
            <div className="timeline-content">
              {step.icon && <div className="timeline-icon">{step.icon}</div>}
              <h3 className="timeline-title">{step.title}</h3>
              <p className="timeline-description">{step.description}</p>
              {step.bullets && step.bullets.length > 0 && (
                <ul className="timeline-bullets">
                  {step.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}
