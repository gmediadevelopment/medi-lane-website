import { CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react'
import './FoerderTable.css'

type FoerderStatus = 'foerderfaehig' | 'foerdernah' | 'kritisch' | 'neutral'

interface FoerderRow {
  label: string
  status: FoerderStatus
  note?: string
}

interface FoerderTableProps {
  rows: FoerderRow[]
}

const STATUS_META: Record<
  FoerderStatus,
  { label: string; className: string; Icon: typeof CheckCircle }
> = {
  foerderfaehig: {
    label: 'Potenziell förderfähig',
    className: 'foerder-status--good',
    Icon: CheckCircle,
  },
  foerdernah: {
    label: 'Fördernah / Einzelfall',
    className: 'foerder-status--warn',
    Icon: AlertTriangle,
  },
  kritisch: {
    label: 'Eher nicht förderfähig',
    className: 'foerder-status--bad',
    Icon: XCircle,
  },
  neutral: {
    label: 'Hinweis',
    className: 'foerder-status--neutral',
    Icon: Info,
  },
}

export default function FoerderTable({ rows }: FoerderTableProps) {
  return (
    <div className="foerder-table">
      <div className="foerder-header">
        <span>Leistungsbereich</span>
        <span>Förderlogische Einordnung</span>
      </div>
      {rows.map((row, i) => {
        const meta = STATUS_META[row.status]
        const { Icon } = meta
        return (
          <div className="foerder-row" key={i}>
            <div className="foerder-label">
              <span className="foerder-label-text">{row.label}</span>
              {row.note && <span className="foerder-note">{row.note}</span>}
            </div>
            <div className={`foerder-status ${meta.className}`}>
              <Icon size={16} />
              <span>{meta.label}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
