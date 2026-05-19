import { useState, type FormEvent } from 'react'
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { trackEvent } from '../../lib/tracking'
import './ContactForm.css'

export type ContactFormType = 'einrichtung' | 'pflegekraft' | 'partner'

interface ContactFormProps {
  type?: ContactFormType
  source?: string
  submitLabel?: string
}

interface FormState {
  name: string
  email: string
  telefon: string
  nachricht: string
  einrichtung: string
  qualifikation: string
  region: string
  wechselzeitpunkt: string
  organisation: string
}

const EMPTY: FormState = {
  name: '',
  email: '',
  telefon: '',
  nachricht: '',
  einrichtung: '',
  qualifikation: '',
  region: '',
  wechselzeitpunkt: '',
  organisation: '',
}

const SUCCESS_COPY: Record<ContactFormType, { headline: string; body: string }> = {
  einrichtung: {
    headline: 'Vielen Dank für deine Anfrage!',
    body: 'Wir melden uns innerhalb von 24 Stunden bei dir, um ein erstes Gespräch zu vereinbaren.',
  },
  pflegekraft: {
    headline: 'Danke — wir melden uns bei dir.',
    body: 'Wir nehmen in Kürze unverbindlich Kontakt mit dir auf. Deine Angaben werden vertraulich behandelt.',
  },
  partner: {
    headline: 'Anfrage erhalten.',
    body: 'Wir melden uns mit Konzeptunterlagen und einem Terminvorschlag für ein Demo- oder Pilotgespräch.',
  },
}

const TYPE_LABEL: Record<ContactFormType, string> = {
  einrichtung: 'Pflegeeinrichtung',
  pflegekraft: 'Pflegekraft',
  partner: 'Förderer / Partner',
}

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const CONTACT_EMAIL = 'info@medi-lane.de'

function buildMailtoFallback(type: ContactFormType, data: FormState, source: string) {
  const subject = `Anfrage von ${TYPE_LABEL[type]} via medi-lane.de`
  const lines = [
    `Anfrage-Typ: ${TYPE_LABEL[type]}`,
    `Quelle: ${source}`,
    '',
    `Name: ${data.name}`,
    `E-Mail: ${data.email}`,
    data.telefon && `Telefon: ${data.telefon}`,
    type === 'einrichtung' && `Einrichtung: ${data.einrichtung}`,
    type === 'pflegekraft' && data.qualifikation && `Qualifikation: ${data.qualifikation}`,
    type === 'pflegekraft' && data.region && `Region: ${data.region}`,
    type === 'pflegekraft' && data.wechselzeitpunkt && `Wechselzeitpunkt: ${data.wechselzeitpunkt}`,
    type === 'partner' && `Organisation: ${data.organisation}`,
    '',
    'Nachricht:',
    data.nachricht,
  ]
    .filter(Boolean)
    .join('\n')

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`
}

export default function ContactForm({
  type = 'einrichtung',
  source = 'website',
  submitLabel,
}: ContactFormProps) {
  const [formData, setFormData] = useState(EMPTY)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Falls kein Web3Forms-Key konfiguriert ist: Mailto-Fallback, damit keine Lead verloren geht
    if (!accessKey) {
      const mailto = buildMailtoFallback(type, formData, source)
      trackEvent('contact_form_mailto_fallback', { source, type })
      window.location.href = mailto
      return
    }

    setStatus('loading')

    const payload: Record<string, string | undefined> = {
      access_key: accessKey,
      subject: `Anfrage von ${TYPE_LABEL[type]} via medi-lane.de`,
      from_name: 'Medilane Website',
      botcheck: '',
      anfrage_typ: TYPE_LABEL[type],
      quelle: source,
      name: formData.name,
      email: formData.email,
      telefon: formData.telefon || undefined,
      nachricht: formData.nachricht,
    }

    if (type === 'einrichtung') {
      payload.einrichtung = formData.einrichtung
    } else if (type === 'pflegekraft') {
      payload.qualifikation = formData.qualifikation || undefined
      payload.region = formData.region || undefined
      payload.wechselzeitpunkt = formData.wechselzeitpunkt || undefined
    } else if (type === 'partner') {
      payload.organisation = formData.organisation || undefined
    }

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Form submission failed')
      }

      trackEvent('contact_form_submit', { source, type })
      setStatus('success')
      setFormData(EMPTY)
    } catch (err: unknown) {
      console.error('Contact form error:', err)
      setErrorMessage(
        'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuche es erneut oder schreib direkt an info@medi-lane.de.'
      )
      setStatus('error')
    }
  }

  if (status === 'success') {
    const copy = SUCCESS_COPY[type]
    return (
      <div className="contact-success">
        <CheckCircle size={48} className="success-icon" />
        <h3>{copy.headline}</h3>
        <p>{copy.body}</p>
        <button className="btn btn--secondary btn--sm" onClick={() => setStatus('idle')}>
          Weitere Nachricht senden
        </button>
      </div>
    )
  }

  const buttonLabel =
    submitLabel ??
    (type === 'einrichtung'
      ? 'Erstgespräch anfragen'
      : type === 'pflegekraft'
        ? 'Unverbindlich anfragen'
        : 'Anfrage senden')

  return (
    <form className="contact-form" onSubmit={handleSubmit} id={`contact-form-${type}`}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-name">Name *</label>
          <input
            type="text"
            id="contact-name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            placeholder="Dein Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-email">E-Mail *</label>
          <input
            type="email"
            id="contact-email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            placeholder="ihre@email.de"
            required
          />
        </div>
      </div>

      {type === 'einrichtung' && (
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-einrichtung">Einrichtung *</label>
            <input
              type="text"
              id="contact-einrichtung"
              value={formData.einrichtung}
              onChange={e => setFormData({ ...formData, einrichtung: e.target.value })}
              placeholder="Name Ihrer Einrichtung"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-telefon">Telefon</label>
            <input
              type="tel"
              id="contact-telefon"
              value={formData.telefon}
              onChange={e => setFormData({ ...formData, telefon: e.target.value })}
              placeholder="+49 ..."
            />
          </div>
        </div>
      )}

      {type === 'pflegekraft' && (
        <>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-qualifikation">Qualifikation</label>
              <select
                id="contact-qualifikation"
                value={formData.qualifikation}
                onChange={e => setFormData({ ...formData, qualifikation: e.target.value })}
              >
                <option value="">Bitte wählen</option>
                <option value="Examinierte Pflegefachkraft">Examinierte Pflegefachkraft</option>
                <option value="Pflegefachassistenz">Pflegefachassistenz</option>
                <option value="Pflegehilfskraft">Pflegehilfskraft</option>
                <option value="Wiedereinsteiger">Wiedereinsteiger</option>
                <option value="Sonstiges">Sonstiges</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contact-region">Region</label>
              <input
                type="text"
                id="contact-region"
                value={formData.region}
                onChange={e => setFormData({ ...formData, region: e.target.value })}
                placeholder="z. B. Köln, Münster, NRW"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-zeitpunkt">Wechselzeitpunkt</label>
              <select
                id="contact-zeitpunkt"
                value={formData.wechselzeitpunkt}
                onChange={e => setFormData({ ...formData, wechselzeitpunkt: e.target.value })}
              >
                <option value="">Bitte wählen</option>
                <option value="Möglichst zeitnah">Möglichst zeitnah</option>
                <option value="In 1–3 Monaten">In 1–3 Monaten</option>
                <option value="In 3–6 Monaten">In 3–6 Monaten</option>
                <option value="Erstmal unverbindlich orientieren">Erstmal unverbindlich orientieren</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contact-telefon">Telefon</label>
              <input
                type="tel"
                id="contact-telefon"
                value={formData.telefon}
                onChange={e => setFormData({ ...formData, telefon: e.target.value })}
                placeholder="+49 ..."
              />
            </div>
          </div>
        </>
      )}

      {type === 'partner' && (
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-organisation">Organisation *</label>
            <input
              type="text"
              id="contact-organisation"
              value={formData.organisation}
              onChange={e => setFormData({ ...formData, organisation: e.target.value })}
              placeholder="Deine Organisation"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-telefon">Telefon</label>
            <input
              type="tel"
              id="contact-telefon"
              value={formData.telefon}
              onChange={e => setFormData({ ...formData, telefon: e.target.value })}
              placeholder="+49 ..."
            />
          </div>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="contact-nachricht">
          {type === 'pflegekraft' ? 'Worum geht es?' : 'Nachricht *'}
        </label>
        <textarea
          id="contact-nachricht"
          value={formData.nachricht}
          onChange={e => setFormData({ ...formData, nachricht: e.target.value })}
          placeholder={
            type === 'einrichtung'
              ? 'Beschreib kurz deinen Bedarf...'
              : type === 'pflegekraft'
                ? 'Was ist dir beim nächsten Job wichtig? Was darf sich nicht wiederholen?'
                : 'Beschreib dein Anliegen, Pilot- oder Förderkontext...'
          }
          rows={4}
          required={type !== 'pflegekraft'}
        />
      </div>

      <p className="form-consent">
        Mit dem Absenden bestätigst du, dass wir dich zur Bearbeitung deiner Anfrage kontaktieren dürfen.
        Details siehe <a href="/datenschutz">Datenschutz</a>.
      </p>

      {status === 'error' && (
        <div className="form-error">
          <AlertCircle size={16} />
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        className="btn btn--primary"
        disabled={status === 'loading'}
        id="contact-submit"
      >
        {status === 'loading' ? (
          <>
            <Loader size={18} className="spin" /> Wird gesendet...
          </>
        ) : (
          <>
            <Send size={18} /> {buttonLabel}
          </>
        )}
      </button>
    </form>
  )
}
