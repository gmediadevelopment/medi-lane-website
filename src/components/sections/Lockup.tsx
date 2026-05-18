import './Lockup.css'

interface LockupProps {
  size?: number
  inverse?: boolean
  withClaim?: boolean
  withDot?: boolean
  className?: string
}

export function Logomark({
  size = 38,
  inverse = false,
  withDot = true,
}: Pick<LockupProps, 'size' | 'inverse' | 'withDot'>) {
  const tile = inverse ? '#FFFFFF' : '#0F172A'
  const stroke = inverse ? '#0F172A' : '#FFFFFF'
  const dotSize = Math.max(3, size * 0.085)

  return (
    <span
      className="logomark"
      style={{ width: size, height: size, background: tile }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 70" className="logomark__svg">
        <path
          d="M6 66 L 6 22 A 22 22 0 0 1 50 22 L 50 66"
          fill="none"
          stroke={stroke}
          strokeWidth="9"
          strokeLinecap="square"
        />
        <path
          d="M50 66 L 50 22 A 22 22 0 0 1 94 22 L 94 66"
          fill="none"
          stroke={stroke}
          strokeWidth="9"
          strokeLinecap="square"
        />
      </svg>
      {withDot && (
        <span
          className="logomark__dot"
          style={{ width: dotSize, height: dotSize }}
        />
      )}
    </span>
  )
}

interface LockupComponentProps extends LockupProps {
  onClick?: (e: React.MouseEvent) => void
  as?: 'span' | 'a'
  href?: string
}

export default function Lockup({
  size = 38,
  inverse = false,
  withClaim = true,
  withDot = true,
  className = '',
  onClick,
  as = 'a',
  href = '/',
}: LockupComponentProps) {
  const wordColor = inverse ? '#FFFFFF' : '#0F172A'
  const claimColor = inverse ? '#94A3B8' : '#64748B'

  const Inner = (
    <>
      <Logomark size={size} inverse={inverse} withDot={withDot} />
      <span className="lockup__text">
        <span className="lockup__word" style={{ color: wordColor }}>
          Medilane
        </span>
        {withClaim && (
          <span className="lockup__claim" style={{ color: claimColor }}>
            Pflege mit Zukunft
          </span>
        )}
      </span>
    </>
  )

  if (as === 'span') {
    return <span className={`lockup ${className}`}>{Inner}</span>
  }

  return (
    <a
      className={`lockup ${className}`}
      href={href}
      onClick={onClick}
      aria-label="Medilane Startseite"
    >
      {Inner}
    </a>
  )
}
