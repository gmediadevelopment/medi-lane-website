import { Link } from 'react-router-dom'
import {
  ArrowRight, Lock, Clock, Eye, MessagesSquare, Search,
  HandHeart, UserCheck, CheckCircle,
} from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import ContactForm from '../components/ui/ContactForm'
import ScrollReveal from '../components/ui/ScrollReveal'
import './ArbeitgeberFinden.css'

const trustSignals = [
  {
    icon: <Lock size={24} />,
    title: 'Vertraulich',
    desc: 'Ihre Daten gehen nicht an Ihren aktuellen Arbeitgeber. Weitergabe nur mit Ihrer Zustimmung.',
  },
  {
    icon: <Clock size={24} />,
    title: '3 Minuten Aufwand',
    desc: 'Das Profil ist bewusst schlank. Tiefe Klärung passiert im persönlichen Gespräch.',
  },
  {
    icon: <CheckCircle size={24} />,
    title: '100 % kostenlos',
    desc: 'Für Pflegekräfte fallen keine Kosten an. Wir werden von der Einrichtung bezahlt.',
  },
  {
    icon: <Eye size={24} />,
    title: 'Keine Profilflut',
    desc: 'Sie sehen nur Einrichtungen, die wir aktiv für Sie geprüft haben.',
  },
]

const nextSteps = [
  {
    nr: '1',
    title: 'Sie schicken Ihr Profil',
    desc: 'Wenige Felder, fünf Minuten. Wir bekommen den ersten Eindruck — fachlich und menschlich.',
  },
  {
    nr: '2',
    title: 'Wir melden uns vertraulich',
    desc: 'Innerhalb von 1–2 Werktagen, telefonisch oder per Mail — Sie entscheiden, wann es passt.',
  },
  {
    nr: '3',
    title: 'Wechselgespräch in Ruhe',
    desc: 'Wir gehen Ihre Wünsche, Belastungsgrenzen und No-Gos durch — ohne Druck und Verkaufsmodus.',
  },
  {
    nr: '4',
    title: 'Wenn passend: konkrete Einrichtung',
    desc: 'Sie sehen einen Vorschlag mit ehrlicher Einschätzung von Chancen und kritischen Punkten.',
  },
]

export default function ArbeitgeberFinden() {
  return (
    <div className="finden-page">
      <PageHero
        badge="Wechselprofil"
        title={
          <>
            Wir finden Pflegeeinrichtungen,<br />
            die zu Ihren{' '}
            <span className="gradient-text">Vorstellungen passen</span>
          </>
        }
        subtitle="Sagen Sie uns kurz, was Ihnen wichtig ist. Wir prüfen, welche Einrichtungen aus unseren Mandaten zu Ihnen passen könnten — und melden uns vertraulich innerhalb von 1–2 Werktagen."
        actions={
          <>
            <a href="#wechselprofil" className="btn btn--primary btn--lg">
              <UserCheck size={20} />
              Profil ausfüllen
            </a>
            <Link to="/wechselberatung" className="btn btn--secondary btn--lg">
              Vorher mehr erfahren
              <ArrowRight size={20} />
            </Link>
          </>
        }
        trust={
          <>
            <span className="trust-pill">
              <Lock size={16} /> Vertraulich
            </span>
            <span className="trust-pill">
              <CheckCircle size={16} /> Kostenlos
            </span>
            <span className="trust-pill">
              <Clock size={16} /> 3 Min.
            </span>
          </>
        }
      />

      {/* TRUST SIGNALS */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Was Sie erwartet</span>
              <h2 className="section-title">
                Wir machen das anders als{' '}
                <span className="gradient-text">die meisten Vermittler</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="trust-grid">
            {trustSignals.map((t, i) => (
              <ScrollReveal key={i} delay={(i % 4) + 1}>
                <div className="trust-card">
                  <div className="trust-icon">{t.icon}</div>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="section section--alt" id="wechselprofil">
        <div className="container">
          <div className="finden-form-split">
            <ScrollReveal>
              <div className="finden-form-info">
                <span className="section-badge">Ihr Wechselprofil</span>
                <h2 className="section-title" style={{ textAlign: 'left' }}>
                  Wir hören erst zu, bevor wir{' '}
                  <span className="gradient-text">irgendwen vorschlagen</span>
                </h2>
                <p className="finden-form-desc">
                  Die folgenden Angaben reichen uns für den ersten Eindruck. Alles weitere
                  besprechen wir persönlich — in dem Tempo, das für Sie passt.
                </p>

                <ul className="finden-form-bullets">
                  <li>
                    <MessagesSquare size={18} /> Sie entscheiden über Tempo und nächsten Schritt
                  </li>
                  <li>
                    <Lock size={18} /> Vertrauliche Behandlung, keine Profilweitergabe ohne Ihre Zustimmung
                  </li>
                  <li>
                    <Search size={18} /> Wir prüfen aktiv passende Einrichtungen — Sie filtern nicht selbst
                  </li>
                  <li>
                    <HandHeart size={18} /> 180-Tage-Begleitung auch nach dem Wechsel
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="finden-form-card">
                <ContactForm type="pflegekraft" source="arbeitgeber-finden" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Wie geht es weiter</span>
              <h2 className="section-title">
                Was nach dem Absenden{' '}
                <span className="gradient-text">passiert</span>
              </h2>
              <p className="section-subtitle">
                Vier Schritte, die wir transparent machen — damit Sie wissen, worauf Sie sich
                einlassen, bevor Sie senden.
              </p>
            </div>
          </ScrollReveal>

          <div className="next-steps">
            {nextSteps.map((s, i) => (
              <ScrollReveal key={i} delay={(i % 4) + 1}>
                <div className="next-step">
                  <div className="next-step-nr">{s.nr}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
