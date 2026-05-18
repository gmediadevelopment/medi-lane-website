import './MatchReport.css'

interface Dimension {
  label: string
  pct: number
  color: 'green' | 'yellow' | 'red'
}

interface Flag {
  color: 'green' | 'yellow' | 'red'
  label: string
  text: string
}

interface FullReportProps {
  docId?: string
  docTitle?: string
  candidate?: { initials: string; name: string; meta: string }
  passText?: string
  dimensions?: Dimension[]
  flags?: Flag[]
  verbleibPct?: number
  signature?: string
  rotate?: boolean
}

const DEFAULT_DIMENSIONS: Dimension[] = [
  { label: 'Fachliche Passung', pct: 94, color: 'green' },
  { label: 'Dienstplan', pct: 92, color: 'green' },
  { label: 'Team & Kultur', pct: 88, color: 'green' },
  { label: 'Belastung', pct: 86, color: 'green' },
  { label: 'Einarbeitung', pct: 64, color: 'yellow' },
  { label: 'Führung', pct: 78, color: 'green' },
]

const DEFAULT_FLAGS: Flag[] = [
  {
    color: 'green',
    label: 'Stark',
    text: 'Wechselmotiv „planbare Wochenenden" deckt sich mit Hauspolitik (3 Wochen Vorlauf).',
  },
  {
    color: 'yellow',
    label: 'Klären',
    text: 'Einarbeitung: Pflegekraft erwartet festen Mentor in Woche 1–4. Hausstruktur sieht rotierende Buddy-Logik vor — vor Start vereinbaren.',
  },
  {
    color: 'green',
    label: 'Stark',
    text: 'Belastungsgrenze (keine Tourendienste) deckt sich mit Stellenprofil Wohnbereich 2.',
  },
]

export function MatchReport({
  docId = 'Match-Bericht · MB-2026-0418',
  docTitle = 'Caritas-Haus Lindenweg · Wohnbereich 2',
  candidate = {
    initials: 'SK',
    name: 'S. K. · Examinierte Pflegefachkraft',
    meta: '9 J. Erfahrung · Wohnbereich · Anreise 18 Min · Wunsch 32 h',
  },
  passText = 'S. K. passt fachlich und kulturell sehr gut auf WB 2. Dienstplanwünsche decken sich mit der realen Planungslogik des Hauses (3 Wochen Vorlauf, planbare Wochenenden). Risiko nur bei der Einarbeitung — siehe Hinweis unten.',
  dimensions = DEFAULT_DIMENSIONS,
  flags = DEFAULT_FLAGS,
  verbleibPct = 87,
  signature = 'Bericht freigegeben · PB · 18.05.2026',
  rotate = true,
}: FullReportProps) {
  return (
    <div
      className={`report ${rotate ? 'report--rotate' : ''}`}
      aria-label="Match-Bericht Beispiel"
    >
      <div className="report__header">
        <div className="report__header-left">
          <span className="report__doc-id">{docId}</span>
          <span className="report__doc-title">{docTitle}</span>
        </div>
        <span className="report__stamp">
          <span className="dot" />Starker Match
        </span>
      </div>

      <div className="report__body">
        <div className="report__row">
          <span className="report__row-label">Kandidat</span>
          <div className="report__row-content">
            <div className="report__candidate">
              <div className="report__avatar">{candidate.initials}</div>
              <div className="report__candidate-info">
                <span className="report__candidate-name">{candidate.name}</span>
                <span className="report__candidate-meta">{candidate.meta}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="report__row">
          <span className="report__row-label">Passung</span>
          <div className="report__row-content">
            <p className="report__pass">
              <strong>{passText.split('.')[0]}.</strong>{' '}
              {passText.split('.').slice(1).join('.').trim()}
            </p>
          </div>
        </div>

        <div className="report__row">
          <span className="report__row-label">Dimensionen</span>
          <div className="report__row-content">
            <div className="report__dims">
              {dimensions.map(d => (
                <div key={d.label} className="report__dim">
                  <span className="report__dim-label">{d.label}</span>
                  <span className="report__dim-bar">
                    <span
                      className={`report__dim-fill report__dim-fill--${d.color}`}
                      style={{ width: `${d.pct}%` }}
                    />
                  </span>
                  <span className="report__dim-score">{d.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="report__row">
          <span className="report__row-label">Hinweise</span>
          <div className="report__row-content">
            <div className="report__flags">
              {flags.map((f, i) => (
                <div key={i} className={`report__flag report__flag--${f.color}`}>
                  <span className="report__flag-dot" />
                  <span className="report__flag-text">
                    <strong>{f.label}</strong> — {f.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="report__footer">
        <div className="report__verbleib">
          <span className="report__verbleib-pct">{verbleibPct}%</span>
          <span className="report__verbleib-label">Verbleibshypothese · 180 Tage</span>
        </div>
        <span className="report__sig">{signature}</span>
      </div>
    </div>
  )
}

interface MiniReportProps {
  docId?: string
  candidate?: { initials: string; name: string; meta: string }
  dimensions?: Dimension[]
  verbleibPct?: number
}

const MINI_DEFAULT_DIMENSIONS: Dimension[] = [
  { label: 'Dienstplan', pct: 92, color: 'green' },
  { label: 'Team & Kultur', pct: 88, color: 'green' },
  { label: 'Einarbeitung', pct: 64, color: 'yellow' },
  { label: 'Belastung', pct: 86, color: 'green' },
]

export function MiniMatchReport({
  docId = 'Match-Bericht · MB-2026-0418',
  candidate = {
    initials: 'SK',
    name: 'S. K. · Examinierte Pflegefachkraft',
    meta: '9 Jahre Erfahrung · Wohnbereich · Tegel',
  },
  dimensions = MINI_DEFAULT_DIMENSIONS,
  verbleibPct = 87,
}: MiniReportProps) {
  return (
    <div className="mini-report">
      <div className="mini-report__head">
        <span className="report__doc-id">{docId}</span>
        <span className="report__stamp">
          <span className="dot" />Starker Match
        </span>
      </div>
      <div className="mini-report__candidate">
        <div className="mini-report__avatar">{candidate.initials}</div>
        <div className="mini-report__candidate-info">
          <span className="report__candidate-name">{candidate.name}</span>
          <span className="report__candidate-meta">{candidate.meta}</span>
        </div>
      </div>

      <div className="mini-report__dims">
        {dimensions.map(d => (
          <div key={d.label} className="report__dim">
            <span className="report__dim-label">{d.label}</span>
            <span className="report__dim-bar">
              <span
                className={`report__dim-fill report__dim-fill--${d.color}`}
                style={{ width: `${d.pct}%` }}
              />
            </span>
            <span className="report__dim-score">{d.pct}</span>
          </div>
        ))}
      </div>

      <div className="mini-report__footer">
        <span className="report__verbleib-label">Verbleibshypothese · 180 Tage</span>
        <span className="mini-report__pct">{verbleibPct}%</span>
      </div>
    </div>
  )
}
