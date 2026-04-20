import { useState, type FormEvent } from 'react'
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { supabase } from '../../lib/supabase'
import { trackEvent } from '../../lib/tracking'
import './ContactForm.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    einrichtung: '',
    nachricht: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const { error } = await supabase
        .from('website_kontakt_anfragen')
        .insert([{
          name: formData.name,
          email: formData.email,
          telefon: formData.telefon || null,
          einrichtung: formData.einrichtung,
          nachricht: formData.nachricht,
        }])

      if (error) throw error

      trackEvent('contact_form_submit', { source: 'arbeitgeber_page' })
      setStatus('success')
      setFormData({ name: '', email: '', telefon: '', einrichtung: '', nachricht: '' })
    } catch (err: unknown) {
      console.error('Contact form error:', err)
      setErrorMessage('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-success">
        <CheckCircle size={48} className="success-icon" />
        <h3>Vielen Dank für Ihre Anfrage!</h3>
        <p>Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
        <button className="btn btn--secondary btn--sm" onClick={() => setStatus('idle')}>
          Weitere Nachricht senden
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-name">Name *</label>
          <input
            type="text"
            id="contact-name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ihr Name"
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

      <div className="form-group">
        <label htmlFor="contact-nachricht">Nachricht *</label>
        <textarea
          id="contact-nachricht"
          value={formData.nachricht}
          onChange={e => setFormData({ ...formData, nachricht: e.target.value })}
          placeholder="Beschreiben Sie kurz Ihren Bedarf..."
          rows={4}
          required
        />
      </div>

      {status === 'error' && (
        <div className="form-error">
          <AlertCircle size={16} />
          {errorMessage}
        </div>
      )}

      <button type="submit" className="btn btn--primary" disabled={status === 'loading'} id="contact-submit">
        {status === 'loading' ? (
          <><Loader size={18} className="spin" /> Wird gesendet...</>
        ) : (
          <><Send size={18} /> Anfrage senden</>
        )}
      </button>
    </form>
  )
}
