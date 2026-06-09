import { useEffect, useState, type FormEvent } from 'react'
import {
  ArrowLeft, ArrowRight, CheckCircle, Loader, AlertCircle, Send,
} from 'lucide-react'
import { trackEvent, trackConversion, captureUtmParams } from '../../lib/tracking'
import { NO_GO_OPTIONS } from './Wechselwuensche'
import './WechselwuenscheForm.css'

const TOTAL_STEPS = 6

const STEP_LABELS = [
  'Situation',
  'Wünsche',
  'No-Gos',
  'Was suchst du',
  'Qualifikation',
  'Kontakt',
]

const SITUATION_OPTIONS = [
  'Ich möchte aktiv wechseln',
  'Ich bin offen für passende Angebote',
  'Ich bin unzufrieden, aber noch unsicher',
  'Ich möchte mich erstmal unverbindlich orientieren',
]

const VERBESSERUNG_OPTIONS = [
  'Dienstplan und Planbarkeit',
  'Gehalt',
  'Team und Arbeitsklima',
  'Führung und Kommunikation',
  'Arbeitsbelastung',
  'Arbeitsweg',
  'Arbeitszeiten',
  'Fachbereich',
  'Entwicklungsmöglichkeiten',
  'Vereinbarkeit mit Familie und Privatleben',
]

const BEREICH_OPTIONS = [
  'Stationäre Altenpflege',
  'Ambulant',
  'Klinik',
  'Reha',
  'Intensiv',
  'Psychiatrie',
  'Verwaltung',
]

const QUALI_OPTIONS = [
  'Pflegefachkraft (examiniert)',
  'Pflegehelfer/in',
  'Altenpfleger/in',
  'Gesundheits- und Krankenpfleger/in',
  'Anderes',
]

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const CONTACT_EMAIL = 'info@medi-lane.de'

interface FormData {
  situation: string
  verbesserung: string[]
  nogos: string[]
  arbeitszeit: '' | 'vollzeit' | 'teilzeit' | 'minijob' | 'egal'
  stundenwunsch: string
  bereich: string[]
  region: string
  wechselzeitpunkt: string
  qualifikation: string
  weiterbildung: string
  berufsjahre: string
  name: string
  email: string
  telefon: string
  kontaktart: 'email' | 'telefon' | 'beides'
  kontaktzeit: string
  ausschluss: string
}

const INITIAL: FormData = {
  situation: '',
  verbesserung: [],
  nogos: [],
  arbeitszeit: '',
  stundenwunsch: '',
  bereich: [],
  region: '',
  wechselzeitpunkt: '',
  qualifikation: '',
  weiterbildung: '',
  berufsjahre: '',
  name: '',
  email: '',
  telefon: '',
  kontaktart: 'email',
  kontaktzeit: '',
  ausschluss: '',
}

interface WechselwuenscheFormProps {
  preselectedNoGos: string[]
}

export default function WechselwuenscheForm({ preselectedNoGos }: WechselwuenscheFormProps) {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormData>(INITIAL)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [utm, setUtm] = useState<Record<string, string>>({})

  // Capture UTM on mount + sync no-go preselection
  useEffect(() => {
    setUtm(captureUtmParams())
  }, [])

  useEffect(() => {
    if (preselectedNoGos.length > 0 && data.nogos.length === 0) {
      setData(prev => ({ ...prev, nogos: preselectedNoGos }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preselectedNoGos])

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData(prev => ({ ...prev, [key]: value }))
  }

  const toggleMulti = (key: 'verbesserung' | 'nogos' | 'bereich', value: string) => {
    setData(prev => {
      const current = prev[key]
      return {
        ...prev,
        [key]: current.includes(value)
          ? current.filter(v => v !== value)
          : [...current, value],
      }
    })
  }

  const canAdvance = (): boolean => {
    switch (step) {
      case 0: return data.situation !== ''
      case 1: return data.verbesserung.length > 0
      case 2: return data.nogos.length > 0
      case 3: return data.arbeitszeit !== '' && data.region.trim() !== '' && data.wechselzeitpunkt !== ''
      case 4: return data.qualifikation !== ''
      case 5: return data.name.trim() !== '' && (data.email.trim() !== '' || data.telefon.trim() !== '')
      default: return false
    }
  }

  const next = () => {
    if (!canAdvance()) return
    trackEvent('lp_step_completed', { step: step + 1 })
    if (step < TOTAL_STEPS - 1) {
      setStep(step + 1)
      window.scrollTo({ top: document.getElementById('formular')?.offsetTop ?? 0, behavior: 'smooth' })
    }
  }

  const back = () => {
    if (step > 0) setStep(step - 1)
  }

  const buildMailtoFallback = (): string => {
    const lines = [
      `Wechselwünsche-Lead (LP /lp/wechselwuensche)`,
      ``,
      `Situation: ${data.situation}`,
      `Verbesserungswünsche: ${data.verbesserung.join(', ')}`,
      `No-Gos: ${data.nogos.join(', ')}`,
      ``,
      `Arbeitszeit: ${data.arbeitszeit}`,
      data.stundenwunsch && `Stunden: ${data.stundenwunsch}`,
      `Bereich: ${data.bereich.join(', ')}`,
      `Region: ${data.region}`,
      `Wechselzeitpunkt: ${data.wechselzeitpunkt}`,
      ``,
      `Qualifikation: ${data.qualifikation}`,
      data.weiterbildung && `Weiterbildung: ${data.weiterbildung}`,
      data.berufsjahre && `Berufsjahre: ${data.berufsjahre}`,
      ``,
      `Name: ${data.name}`,
      data.email && `E-Mail: ${data.email}`,
      data.telefon && `Telefon: ${data.telefon}`,
      `Bevorzugte Kontaktart: ${data.kontaktart}`,
      data.kontaktzeit && `Bester Kontakt-Zeitpunkt: ${data.kontaktzeit}`,
      data.ausschluss && `Auszuschließen: ${data.ausschluss}`,
    ].filter(Boolean).join('\n')

    const subject = `Wechselwünsche-Lead via LP — ${data.name}`
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (!canAdvance()) return

    trackEvent('lp_step_completed', { step: TOTAL_STEPS })

    if (!accessKey) {
      trackEvent('lp_form_mailto_fallback')
      window.location.href = buildMailtoFallback()
      return
    }

    setStatus('loading')
    const payload: Record<string, string | number | undefined> = {
      access_key: accessKey,
      subject: `Wechselwünsche-Lead via LP — ${data.name}`,
      from_name: 'Medilane Landingpage',
      botcheck: '',
      anfrage_typ: 'pflegekraft_lp',
      quelle: 'lp_wechselwuensche',
      situation: data.situation,
      verbesserung: data.verbesserung.join(' · '),
      nogos: data.nogos.join(' · '),
      arbeitszeit: data.arbeitszeit,
      stundenwunsch: data.stundenwunsch || undefined,
      bereich: data.bereich.join(' · ') || undefined,
      region: data.region,
      wechselzeitpunkt: data.wechselzeitpunkt,
      qualifikation: data.qualifikation,
      weiterbildung: data.weiterbildung || undefined,
      berufsjahre: data.berufsjahre || undefined,
      name: data.name,
      email: data.email || undefined,
      telefon: data.telefon || undefined,
      kontaktart: data.kontaktart,
      kontaktzeit: data.kontaktzeit || undefined,
      ausschluss: data.ausschluss || undefined,
      ...utm,
    }

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (!res.ok || !json.success) throw new Error(json.message || 'submission_failed')

      trackEvent('lp_form_submit', {
        nogo_count: data.nogos.length,
        verbesserung_count: data.verbesserung.length,
      })
      trackConversion()
      setStatus('success')
    } catch (err: unknown) {
      console.error('LP form submit error:', err)
      setErrorMessage(
        'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuche es erneut oder schreib direkt an info@medi-lane.de.'
      )
      setStatus('error')
    }
  }

  /* =================== Success Screen =================== */
  if (status === 'success') {
    return (
      <div className="wlpf-success">
        <div className="wlpf-success__icon">
          <CheckCircle size={40} />
        </div>
        <h3>Danke. Wir haben deine Wünsche.</h3>
        <p>
          Wir gleichen sie jetzt mit unseren Mandaten ab und melden uns innerhalb von 1–2
          Werktagen vertraulich. Falls dir noch etwas Wichtiges einfällt: einfach kurze
          Antwort auf unsere Mail.
        </p>
      </div>
    )
  }

  /* =================== Form Steps =================== */
  return (
    <form className="wlpf" onSubmit={submit}>
      {/* Progress */}
      <div className="wlpf-progress">
        <div className="wlpf-progress__meta">
          <span className="wlpf-progress__step">Schritt {step + 1} von {TOTAL_STEPS}</span>
          <span className="wlpf-progress__label">{STEP_LABELS[step]}</span>
        </div>
        <div className="wlpf-progress__bar">
          <div
            className="wlpf-progress__bar-fill"
            style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
          />
        </div>
      </div>

      {/* =================== STEP 1 — Situation =================== */}
      {step === 0 && (
        <div className="wlpf-step">
          <h3 className="wlpf-question">Was beschreibt deine aktuelle Situation am besten?</h3>
          <div className="wlpf-options">
            {SITUATION_OPTIONS.map(opt => (
              <button
                key={opt}
                type="button"
                className={`wlpf-option ${data.situation === opt ? 'wlpf-option--selected' : ''}`}
                onClick={() => update('situation', opt)}
              >
                <span className="wlpf-option__radio" />
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* =================== STEP 2 — Verbesserung =================== */}
      {step === 1 && (
        <div className="wlpf-step">
          <h3 className="wlpf-question">Was sollte sich beim nächsten Job verbessern?</h3>
          <p className="wlpf-hint">Mehrfachauswahl möglich. Wähle, was dir wirklich wichtig ist.</p>
          <div className="wlpf-chips">
            {VERBESSERUNG_OPTIONS.map(opt => {
              const active = data.verbesserung.includes(opt)
              return (
                <button
                  key={opt}
                  type="button"
                  className={`wlpf-chip ${active ? 'wlpf-chip--active' : ''}`}
                  onClick={() => toggleMulti('verbesserung', opt)}
                >
                  {active ? <CheckCircle size={14} /> : null}
                  {opt}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* =================== STEP 3 — No-Gos =================== */}
      {step === 2 && (
        <div className="wlpf-step">
          <h3 className="wlpf-question">Was darf sich nicht wiederholen?</h3>
          <p className="wlpf-hint">
            {preselectedNoGos.length > 0
              ? `Wir haben deine ${preselectedNoGos.length} Auswahl aus der Pillen-Sektion oben vorbelegt. Ergänze oder ändere frei.`
              : 'Mehrfachauswahl möglich. Was darf in der neuen Stelle keinesfalls wieder vorkommen?'}
          </p>
          <div className="wlpf-chips">
            {NO_GO_OPTIONS.map(opt => {
              const active = data.nogos.includes(opt)
              return (
                <button
                  key={opt}
                  type="button"
                  className={`wlpf-chip ${active ? 'wlpf-chip--active' : ''}`}
                  onClick={() => toggleMulti('nogos', opt)}
                >
                  {active ? <CheckCircle size={14} /> : null}
                  {opt}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* =================== STEP 4 — Konkret =================== */}
      {step === 3 && (
        <div className="wlpf-step">
          <h3 className="wlpf-question">Was suchst du konkret?</h3>

          <div className="wlpf-field">
            <label>Arbeitszeit</label>
            <div className="wlpf-options wlpf-options--row">
              {(['vollzeit', 'teilzeit', 'minijob', 'egal'] as const).map(opt => (
                <button
                  key={opt}
                  type="button"
                  className={`wlpf-option wlpf-option--compact ${data.arbeitszeit === opt ? 'wlpf-option--selected' : ''}`}
                  onClick={() => update('arbeitszeit', opt)}
                >
                  <span className="wlpf-option__radio" />
                  {opt === 'minijob' ? 'Minijob' : opt.charAt(0).toUpperCase() + opt.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="wlpf-field">
            <label htmlFor="wlpf-stunden">Stunden / Woche (optional)</label>
            <input
              id="wlpf-stunden"
              type="text"
              placeholder="z. B. 30"
              value={data.stundenwunsch}
              onChange={e => update('stundenwunsch', e.target.value)}
              inputMode="numeric"
            />
          </div>

          <div className="wlpf-field">
            <label>Welche Bereiche kommen für dich infrage?</label>
            <p className="wlpf-hint">Mehrfachauswahl, optional.</p>
            <div className="wlpf-chips">
              {BEREICH_OPTIONS.map(opt => {
                const active = data.bereich.includes(opt)
                return (
                  <button
                    key={opt}
                    type="button"
                    className={`wlpf-chip ${active ? 'wlpf-chip--active' : ''}`}
                    onClick={() => toggleMulti('bereich', opt)}
                  >
                    {active ? <CheckCircle size={14} /> : null}
                    {opt}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="wlpf-row">
            <div className="wlpf-field">
              <label htmlFor="wlpf-region">Region oder Ort *</label>
              <input
                id="wlpf-region"
                type="text"
                placeholder="z. B. Köln, Münster, NRW"
                value={data.region}
                onChange={e => update('region', e.target.value)}
                required
              />
            </div>

            <div className="wlpf-field">
              <label htmlFor="wlpf-zeitpunkt">Ab wann wechselbereit *</label>
              <select
                id="wlpf-zeitpunkt"
                value={data.wechselzeitpunkt}
                onChange={e => update('wechselzeitpunkt', e.target.value)}
                required
              >
                <option value="">Bitte wählen</option>
                <option value="zeitnah">Möglichst zeitnah</option>
                <option value="1-3-monate">In 1–3 Monaten</option>
                <option value="3-6-monate">In 3–6 Monaten</option>
                <option value="orientieren">Erstmal orientieren</option>
              </select>
            </div>
          </div>

          <div className="wlpf-field">
            <label htmlFor="wlpf-ausschluss">Möchtest du Einrichtungen oder Träger ausschließen? (optional)</label>
            <input
              id="wlpf-ausschluss"
              type="text"
              placeholder="z. B. ehemaliger Arbeitgeber, bestimmte Ketten"
              value={data.ausschluss}
              onChange={e => update('ausschluss', e.target.value)}
            />
          </div>
        </div>
      )}

      {/* =================== STEP 5 — Qualifikation =================== */}
      {step === 4 && (
        <div className="wlpf-step">
          <h3 className="wlpf-question">Was ist deine Qualifikation?</h3>

          <div className="wlpf-field">
            <div className="wlpf-options">
              {QUALI_OPTIONS.map(opt => (
                <button
                  key={opt}
                  type="button"
                  className={`wlpf-option ${data.qualifikation === opt ? 'wlpf-option--selected' : ''}`}
                  onClick={() => update('qualifikation', opt)}
                >
                  <span className="wlpf-option__radio" />
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="wlpf-row">
            <div className="wlpf-field">
              <label htmlFor="wlpf-weiterbildung">Fachweiterbildung (optional)</label>
              <input
                id="wlpf-weiterbildung"
                type="text"
                placeholder="z. B. Intensiv, Wundmanagement"
                value={data.weiterbildung}
                onChange={e => update('weiterbildung', e.target.value)}
              />
            </div>

            <div className="wlpf-field">
              <label htmlFor="wlpf-jahre">Berufsjahre</label>
              <select
                id="wlpf-jahre"
                value={data.berufsjahre}
                onChange={e => update('berufsjahre', e.target.value)}
              >
                <option value="">Bitte wählen</option>
                <option value="0-2">0–2 Jahre</option>
                <option value="3-5">3–5 Jahre</option>
                <option value="6-10">6–10 Jahre</option>
                <option value="10+">10+ Jahre</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* =================== STEP 6 — Kontaktdaten =================== */}
      {step === 5 && (
        <div className="wlpf-step">
          <h3 className="wlpf-question">Wie können wir dich erreichen?</h3>
          <p className="wlpf-hint">
            Wir nutzen deine Daten ausschließlich, um dich vertraulich zu kontaktieren — und
            geben sie nicht an Einrichtungen weiter, ohne dass du zustimmst.
          </p>

          <div className="wlpf-field">
            <label htmlFor="wlpf-name">Vor- und Nachname *</label>
            <input
              id="wlpf-name"
              type="text"
              placeholder="Dein Name"
              value={data.name}
              onChange={e => update('name', e.target.value)}
              required
            />
          </div>

          <div className="wlpf-row">
            <div className="wlpf-field">
              <label htmlFor="wlpf-email">E-Mail</label>
              <input
                id="wlpf-email"
                type="email"
                placeholder="deine@email.de"
                value={data.email}
                onChange={e => update('email', e.target.value)}
              />
            </div>
            <div className="wlpf-field">
              <label htmlFor="wlpf-telefon">Telefon</label>
              <input
                id="wlpf-telefon"
                type="tel"
                placeholder="+49 ..."
                value={data.telefon}
                onChange={e => update('telefon', e.target.value)}
              />
            </div>
          </div>
          <p className="wlpf-hint wlpf-hint--small">
            Mindestens eine Kontaktmöglichkeit angeben (E-Mail oder Telefon).
          </p>

          <div className="wlpf-row">
            <div className="wlpf-field">
              <label htmlFor="wlpf-kontaktart">Bevorzugte Kontaktart</label>
              <select
                id="wlpf-kontaktart"
                value={data.kontaktart}
                onChange={e => update('kontaktart', e.target.value as FormData['kontaktart'])}
              >
                <option value="email">E-Mail</option>
                <option value="telefon">Telefon</option>
                <option value="beides">Beides ist okay</option>
              </select>
            </div>
            <div className="wlpf-field">
              <label htmlFor="wlpf-zeit">Bester Zeitpunkt für Kontakt (optional)</label>
              <input
                id="wlpf-zeit"
                type="text"
                placeholder="z. B. werktags ab 16 Uhr"
                value={data.kontaktzeit}
                onChange={e => update('kontaktzeit', e.target.value)}
              />
            </div>
          </div>

          <p className="wlpf-consent">
            Mit dem Absenden bestätigst du, dass wir dich vertraulich zu deinem Wechselwunsch
            kontaktieren dürfen. Weitergabe an Einrichtungen nur nach deiner ausdrücklichen
            Zustimmung. Details siehe <a href="/datenschutz" target="_blank" rel="noopener">Datenschutz</a>.
          </p>
        </div>
      )}

      {/* =================== Error =================== */}
      {status === 'error' && (
        <div className="wlpf-error">
          <AlertCircle size={16} />
          {errorMessage}
        </div>
      )}

      {/* =================== Navigation =================== */}
      <div className="wlpf-nav">
        {step > 0 ? (
          <button type="button" className="btn btn--ghost btn--lg" onClick={back}>
            <ArrowLeft size={18} />
            Zurück
          </button>
        ) : (
          <span />
        )}

        {step < TOTAL_STEPS - 1 ? (
          <button
            type="button"
            className="btn btn--primary btn--lg"
            onClick={next}
            disabled={!canAdvance()}
          >
            Weiter
            <ArrowRight size={18} />
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn--primary btn--lg"
            disabled={!canAdvance() || status === 'loading'}
          >
            {status === 'loading' ? (
              <>
                <Loader size={18} className="spin" /> Wird gesendet ...
              </>
            ) : (
              <>
                <Send size={18} />
                Meine Wechselwünsche absenden
              </>
            )}
          </button>
        )}
      </div>
    </form>
  )
}
