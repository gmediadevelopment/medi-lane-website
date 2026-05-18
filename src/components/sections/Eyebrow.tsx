import type { ReactNode } from 'react'

interface EyebrowProps {
  children: ReactNode
  withDot?: boolean
  className?: string
}

export default function Eyebrow({ children, withDot = true, className = '' }: EyebrowProps) {
  return (
    <span className={`eyebrow ${className}`}>
      {withDot && <span className="dot" />}
      {children}
    </span>
  )
}
