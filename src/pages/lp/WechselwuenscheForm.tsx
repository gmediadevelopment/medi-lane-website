import { useEffect, useState, useMemo, type FormEvent } from 'react'
import {
  ArrowLeft, ArrowRight, CheckCircle, Loader, AlertCircle, Send, Calendar,
} from 'lucide-react'
import { trackEvent, trackConversion, captureUtmParams } from '../../lib/tracking'
import './WechselwuenscheForm.css'

const TOTAL_STEPS = 5

const STEP_LABELS = [
  'Situation',
  'Was suchst du',
  'Qualifikation',
  'Kontakt',
  'Termin',
]

const SITUATION_OPTIONS = [
  'Ich möchte aktiv wechseln',
  'Ich bin offen für passende Angebote',
  'Ich bin unzufrieden, aber noch unsicher',
  'Ich möchte mich erstmal unverbindlich orientieren',
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

/* Pflegehelfer wird bewusst NICHT angeboten — Medilane vermittelt
   ausschließlich examinierte Fachkräfte. */
const QUALI_OPTIONS = [
  'Examinierte Pflegefachkraft',
  'Altenpfleger/in (examiniert)',
  'Gesundheits- und Krankenpfleger/in',
  'Andere examinierte Fachkraft',
]

const ZEITFENSTER_OPTIONS: Array<{ id: 'vormittag' | 'mittag' | 'nachmittag'; label: string; sub: string }> = [
  { id: 'vormittag',    label: 'Vormittag',    sub: '9–12 Uhr' },
  { id: 'mittag',       label: 'Mittag',       sub: '12–15 Uhr' },
  { id: 'nachmittag',   label: 'Nachmittag',   sub: '15–18 Uhr' },
]

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const CONTACT_EMAIL = 'info@medi-lane.de'

interface FormData {
  situation: string
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
  terminDatum: string
  terminZeitfenster: '' | 'vormittag' | 'mittag' | 'nachmittag'
  terminKommentar: string
  ausschluss: string
}

const INITIAL: FormData = {
  situation: '',
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
  terminDatum: '',
  terminZeitfenster: '',
  terminKommentar: '',
  ausschluss: '',
}

interface WechselwuenscheFormProps {
  /** No-Gos aus der Pill-Sektion oberhalb — werden im Lead mitgesendet,
      tauchen aber NICHT als eigener Form-Schritt auf. */
  preselectedNoGos: string[]
}

function formatDate(iso: string): string {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleDateString('de-DE', {
      weekday: 'short',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  } catch {
    return iso
  }
}

export default function WechselwuenscheForm({ preselectedNoGos }: WechselwuenscheFormProps) {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormData>(INITIAL)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [utm, setUtm] = useState<Record<string, string>>({})

  useEffect(() => {
    setUtm(captureUtmParams())
  }, [])

  const { minDate, maxDate } = useMemo(() => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)
    const in30 = new Date(today)
    in30.setDate(today.getDate() + 30)
    const fmt = (d: Date) => d.toISOString().slice(0, 10)
    return { minDate: fmt(tomorrow), maxDate: fmt(in30) }
  }, [])

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData(prev => ({ ...prev, [key]: value }))
  }

  const toggleBereich = (value: string) => {
    setData(prev => ({
      ...prev,
      bereich: prev.bereich.includes(value)
        ? prev.bereich.filter(v => v !== value)
        : [...prev.bereich, value],
    }))
  }

  const canAdvance = (): boolean => {
    switch (step) {
      case 0: return data.situation !== ''
      case 1: return data.arbeitszeit !== '' && data.region.trim() !== '' && data.wechselzeitpunkt !== ''
      case 2: return data.qualifikation !== ''
      case 3: return data.name.trim() !== '' && (data.email.trim() !== '' || data.telefon.trim() !== '')
      case 4: return data.terminDatum !== '' && data.terminZeitfenster !== ''
      default: return false
    }
  }

  const next = () => {
    if (!canAdvance()) return
    trackEvent('lp_step_completed', { step: step + 1 })
    if (step < TOTAL_STEPS - 1) {
      setStep(step + 1)
      requestAnimationFrame(() => {
        document.getElementById('formular')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }

  const back = () => {
    if (step > 0) setStep(step - 1)
  }

  const buildMailtoFallback = (): string => {
    const lines = [
      `Wechselwünsche-Lead (LP /lp/wechselwuensche)`,
      ``,
      `--- Terminwunsch ---`,
      `Datum: ${formatDate(data.terminDatum)}`,
      `Zeitfenster: ${data.terminZeitfenster}`,
      data.terminKommentar && `Hinweis: ${data.terminKommentar}`,
      ``,
      `--- Situation ---`,
      `Situation: ${data.situation}`,
      preselectedNoGos.length > 0 && `No-Gos (aus Pill-Sektion): ${preselectedNoGos.join(', ')}`,
      ``,
      `--- Was gesucht wird ---`,
      `Arbeitszeit: ${data.arbeitszeit}`,
      data.stundenwunsch && `Stunden: ${data.stundenwunsch}`,
      `Bereich: ${data.bereich.join(', ') || '—'}`,
      `Region: ${data.region}`,
      `Wechselzeitpunkt: ${data.wechselzeitpunkt}`,
      data.ausschluss && `Auszuschließen: ${data.ausschluss}`,
      ``,
      `--- Qualifikation ---`,
      `Qualifikation: ${data.qualifikation}`,
      data.weiterbildung && `Weiterbildung: ${data.weiterbildung}`,
      data.berufsjahre && `Berufsjahre: ${data.berufsjahre}`,
      ``,
      `--- Kontakt ---`,
      `Name: ${data.name}`,
      data.email && `E-Mail: ${data.email}`,
      data.telefon && `Telefon: ${data.telefon}`,
      `Bevorzugte Kontaktart: ${data.kontaktart}`,
    ].filter(Boolean).join('\n')

    const subject = `Termin ${formatDate(data.terminDatum)} ${data.terminZeitfenster} — Wechselwünsche-Lead ${data.name}`
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
      subject: `Termin ${formatDate(data.terminDatum)} ${data.terminZeitfenster} — ${data.name}`,
      from_name: 'Medilane Landingpage',
      botcheck: '',
      anfrage_typ: 'pflegekraft_lp',
      quelle: 'lp_wechselwuensche',

      termin_datum: data.terminDatum,
      termin_datum_formatiert: formatDate(data.terminDatum),
      termin_zeitfenster: data.terminZeitfenster,
      termin_kommentar: data.terminKommentar || undefined,

      situation: data.situation,
      nogos_aus_lp: preselectedNoGos.length > 0 ? preselectedNoGos.join(' · ') : undefined,
      arbeitszeit: data.arbeitszeit,
      stundenwunsch: data.stundenwunsch || undefined,
      bereich: data.bereich.join(' · ') || undefined,
      region: data.region,
      wechselzeitpunkt: data.wechselzeitpunkt,
      ausschluss: data.ausschluss || undefined,
      qualifikation: data.qualifikation,
      weiterbildung: data.weiterbildung || undefined,
      berufsjahre: data.berufsjahre || undefined,

      name: data.name,
      email: data.email || undefined,
      telefon: data.telefon || undefined,
      kontaktart: data.kontaktart,

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
        termin_zeitfenster: data.terminZeitfenster,
        nogo_count: preselectedNoGos.length,
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
        <h3>Termin gesichert. Wir melden uns.</h3>
        <p>
          Wir rufen dich am <strong>{formatDate(data.terminDatum)}</strong> im
          {' '}<strong>{ZEITFENSTER_OPTIONS.find(z => z.id === data.terminZeitfenster)?.label}</strong>
          {' '}vertraulich an. Falls dir bis dahin noch etwas einfällt: einfach kurze Antwort
          auf unsere Bestätigungsmail.
        </p>
      </div>
    )
  }

  /* =================== Form =================== */
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

      {/* =================== STEP 2 — Konkret =================== */}
      {step === 1 && (
        <div className="wlpf-step">
          <h3 className="wlpf-question">Was suchst du konkret?</h3>

          <div className="wlpf-field">
            <label>Arbeitszeit *</label>
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
            <label>Welche Bereiche kommen infrage? (optional)</label>
            <div className="wlpf-chips">
              {BEREICH_OPTIONS.map(opt => {
                const active = data.bereich.includes(opt)
                return (
                  <button
                    key={opt}
                    type="button"
                    className={`wlpf-chip ${active ? 'wlpf-chip--active' : ''}`}
                    onClick={() => toggleBereich(opt)}
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
            <label htmlFor="wlpf-ausschluss">Bestimmte Einrichtungen oder Träger ausschließen? (optional)</label>
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

      {/* =================== STEP 3 — Qualifikation (ohne Pflegehelfer) =================== */}
      {step === 2 && (
        <div className="wlpf-step">
          <h3 className="wlpf-question">Was ist deine Qualifikation?</h3>
          <p className="wlpf-hint">
            Wir vermitteln derzeit ausschließlich examinierte Pflegefachkräfte.
          </p>

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

      {/* =================== STEP 4 — Kontakt =================== */}
      {step === 3 && (
        <div className="wlpf-step">
          <h3 className="wlpf-question">Wie können wir dich erreichen?</h3>
          <p className="wlpf-hint">
            Im nächsten Schritt buchst du direkt einen Termin für einen vertraulichen Anruf
            durch uns. Deine Daten geben wir nicht weiter, ohne dass du zustimmst.
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
            Mindestens eine Kontaktmöglichkeit (E-Mail oder Telefon).
          </p>

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
        </div>
      )}

      {/* =================== STEP 5 — Termin =================== */}
      {step === 4 && (
        <div className="wlpf-step">
          <div className="wlpf-termin-head">
            <Calendar size={20} />
            <h3 className="wlpf-question">Wann sollen wir dich anrufen?</h3>
          </div>
          <p className="wlpf-hint">
            15 Minuten reichen für ein erstes Gespräch. Vertraulich, unverbindlich. Wenn der
            Wunschtermin nicht passt, schlagen wir kurz Alternativen vor.
          </p>

          <div className="wlpf-row">
            <div className="wlpf-field">
              <label htmlFor="wlpf-datum">Wunschdatum *</label>
              <input
                id="wlpf-datum"
                type="date"
                value={data.terminDatum}
                onChange={e => update('terminDatum', e.target.value)}
                min={minDate}
                max={maxDate}
                required
              />
            </div>
            <div className="wlpf-field">
              <label htmlFor="wlpf-kommentar">Hinweis (optional)</label>
              <input
                id="wlpf-kommentar"
                type="text"
                placeholder="z. B. nicht zwischen 13 und 14 Uhr"
                value={data.terminKommentar}
                onChange={e => update('terminKommentar', e.target.value)}
              />
            </div>
          </div>

          <div className="wlpf-field">
            <label>Zeitfenster *</label>
            <div className="wlpf-slot-grid">
              {ZEITFENSTER_OPTIONS.map(z => {
                const active = data.terminZeitfenster === z.id
                return (
                  <button
                    key={z.id}
                    type="button"
                    className={`wlpf-slot ${active ? 'wlpf-slot--active' : ''}`}
                    onClick={() => update('terminZeitfenster', z.id)}
                  >
                    <span className="wlpf-slot__label">{z.label}</span>
                    <span className="wlpf-slot__sub">{z.sub}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {data.terminDatum && data.terminZeitfenster && (
            <div className="wlpf-termin-preview">
              <CheckCircle size={16} />
              <span>
                Wir rufen dich am <strong>{formatDate(data.terminDatum)}</strong> im{' '}
                <strong>{ZEITFENSTER_OPTIONS.find(z => z.id === data.terminZeitfenster)?.label} ({ZEITFENSTER_OPTIONS.find(z => z.id === data.terminZeitfenster)?.sub})</strong> an.
              </span>
            </div>
          )}

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
                Jetzt besser wechseln
              </>
            )}
          </button>
        )}
      </div>
    </form>
  )
}
