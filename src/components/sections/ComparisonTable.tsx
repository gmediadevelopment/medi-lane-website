import './ComparisonTable.css'

interface ComparisonRow {
  label: string
  classic: string
  medilane: string
}

interface ComparisonTableProps {
  rows: ComparisonRow[]
  classicHeader?: string
  medilaneHeader?: string
}

export default function ComparisonTable({
  rows,
  classicHeader = 'Klassische Vermittlung',
  medilaneHeader = 'Medilane PflegeMatch 180',
}: ComparisonTableProps) {
  return (
    <div className="compare">
      <div className="compare__head">
        <div className="compare__head-cell">&nbsp;</div>
        <div className="compare__head-cell">{classicHeader}</div>
        <div className="compare__head-cell compare__head-cell--brand">
          <span className="dot" />
          {medilaneHeader}
        </div>
      </div>
      {rows.map(row => (
        <div className="compare__row" key={row.label}>
          <div className="compare__cell compare__cell--label">{row.label}</div>
          <div className="compare__cell">{row.classic}</div>
          <div className="compare__cell compare__cell--brand">{row.medilane}</div>
        </div>
      ))}
    </div>
  )
}
