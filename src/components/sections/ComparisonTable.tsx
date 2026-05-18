import { CheckCircle, XCircle } from 'lucide-react'
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
  classicHeader = 'Klassisch',
  medilaneHeader = 'Medi-Lane',
}: ComparisonTableProps) {
  return (
    <div className="comparison-wrapper">
      <div className="comparison-table">
        <div className="comp-header">
          <div className="comp-cell comp-label"></div>
          <div className="comp-cell comp-old">{classicHeader}</div>
          <div className="comp-cell comp-new">{medilaneHeader}</div>
        </div>
        {rows.map((row, i) => (
          <div className="comp-row" key={i}>
            <div className="comp-cell comp-label">{row.label}</div>
            <div className="comp-cell comp-old">
              <XCircle size={16} className="comp-icon comp-icon--no" />
              {row.classic}
            </div>
            <div className="comp-cell comp-new">
              <CheckCircle size={16} className="comp-icon comp-icon--yes" />
              {row.medilane}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
