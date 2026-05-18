interface AvailabilityBarProps {
  label?: string
  className?: string
  style?: React.CSSProperties
}

export default function AvailabilityBar({
  label = 'Aktiv vermittelnd · NRW · Berlin · München · Hamburg',
  className = '',
  style,
}: AvailabilityBarProps) {
  return (
    <span className={`avail-bar ${className}`} style={style}>
      <span className="dot" />
      <span>{label}</span>
    </span>
  )
}
