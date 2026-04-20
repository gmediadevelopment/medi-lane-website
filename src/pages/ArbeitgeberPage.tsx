import {
  ArrowRight, UserCheck, TrendingUp, Target, Search, CheckCircle, Users,
  XCircle, Building2, ClipboardList, Handshake, BarChart3
} from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'
import ContactForm from '../components/ui/ContactForm'
import './ArbeitgeberPage.css'

const problems = [
  'Viele Bewerbungen, aber wenig echte Fits',
  'Hoher Streuverlust im Recruiting',
  'Kandidaten springen ab oder bleiben nur kurz',
  'Hohe Frühfluktuation',
  'Stellen werden immer wieder neu besetzt',
  'Zeitverlust durch unpassende Gespräche',
]

const usps = [
  { icon: <UserCheck size={24} />, title: 'Vorqualifizierte Wechselprofile', desc: 'Keine beliebigen Kandidaten, sondern Profile mit echter Passungslogik — fachlich und menschlich.' },
  { icon: <TrendingUp size={24} />, title: 'Fokus auf langfristige Besetzung', desc: 'Unser Modell ist auf geringere Fluktuation und bessere Bindung ausgerichtet.' },
  { icon: <Target size={24} />, title: 'Weniger Recruiting-Streuverlust', desc: 'Unpassende Kandidaten und unnötige Interviews werden von Anfang an reduziert.' },
  { icon: <Search size={24} />, title: 'Verständnis für echte Wechselmotive', desc: 'Wir wissen nicht nur, wer sucht — sondern auch warum. Das macht den Unterschied.' },
  { icon: <BarChart3 size={24} />, title: 'Bessere Trefferquote', desc: 'Nicht nur fachliche Qualifikation, sondern auch Rahmenbedingungen und kulturelle Passung werden berücksichtigt.' },
  { icon: <Users size={24} />, title: 'Persönlicher Recruiting-Partner', desc: 'Aktive Begleitung und direkte Ansprache statt anonyme Plattform.' },
]

const steps = [
  { num: '1', icon: <ClipboardList size={28} />, title: 'Bedarf verstehen', desc: 'Wir erfassen nicht nur die offene Stelle, sondern die tatsächlichen Rahmenbedingungen Ihrer Einrichtung.' },
  { num: '2', icon: <UserCheck size={28} />, title: 'Passendes Wechselprofil vorstellen', desc: 'Sie erhalten Profile von Pflegekräften, die fachlich und von ihren Erwartungen her zu Ihnen passen.' },
  { num: '3', icon: <Handshake size={28} />, title: 'Gespräch & Abgleich', desc: 'Nur sinnvolle Matches werden weiterverfolgt — kein Zeitverlust durch unpassende Gespräche.' },
  { num: '4', icon: <CheckCircle size={28} />, title: 'Besetzung mit höherer Passung', desc: 'Ziel ist eine Besetzung, die nicht nur kurzfristig funktioniert, sondern langfristig hält.' },
]

export default function ArbeitgeberPage() {
  return (
    <div className="employer-page">
      {/* ======== HERO ======== */}
      <section className="employer-hero">
        <div className="hero-bg">
          <div className="employer-hero-gradient" />
          <div className="hero-mesh" />
        </div>
        <div className="container employer-hero-inner">
          <div className="employer-hero-content">
            <span className="section-badge section-badge--amber">Für Arbeitgeber</span>
            <h1 className="hero-title">
              Weniger Fluktuation<br />
              beginnt mit <span className="gradient-text--amber">besserer Passung</span>.
            </h1>
            <p className="hero-subtitle">
              Wir vermitteln keine Masse, sondern wechselbereite Pflegekräfte mit klaren 
              Erwartungen und echter Passung zu Ihrer Einrichtung.
            </p>
            <div className="hero-actions">
              <a href="#kontakt" className="btn btn--accent btn--lg" id="employer-hero-cta">
                <Building2 size={20} />
                Kontakt aufnehmen
              </a>
              <a href="#vorteile" className="btn btn--secondary btn--lg">
                Ihre Vorteile entdecken
              </a>
            </div>
          </div>

          <div className="employer-hero-stats">
            <div className="stat-card">
              <span className="stat-num">48h</span>
              <span className="stat-label">Erste Rückmeldung</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">100%</span>
              <span className="stat-label">Vorqualifizierte Profile</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">0€</span>
              <span className="stat-label">Vorabkosten</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======== PROBLEM ======== */}
      <section className="section" id="problem">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge section-badge--amber">Die Realität</span>
              <h2 className="section-title">Arbeitgeber haben kein Recruiting-Problem —<br />sondern ein <span className="gradient-text--amber">Passungsproblem</span>.</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="employer-problems">
              {problems.map((p, i) => (
                <div className="employer-problem-item" key={i}>
                  <XCircle size={20} />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="problem-bottom">
              <p>
                Klassische Vermittler liefern Profile — aber selten echte Passung. 
                Das Ergebnis: Endlose Besetzungszyklen und steigende Kosten.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======== APPROACH ======== */}
      <section className="section section--alt" id="ansatz">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge section-badge--amber">Unser Ansatz</span>
              <h2 className="section-title"><span className="gradient-text--amber">Wechselprofile</span> statt Bewerbungsmasse</h2>
              <p className="section-subtitle">
                Wir denken Vermittlung anders: Nicht „Qualifikation + freie Stelle = passt schon", 
                sondern tiefes Matching auf Basis von echten Wechselmotiven.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="approach-comparison">
              <div className="approach-col approach-col--old">
                <h3><XCircle size={20} /> Klassisch denken</h3>
                <ol>
                  <li>Offene Stelle</li>
                  <li>Kandidat mit passender Qualifikation</li>
                  <li>Vorstellung</li>
                  <li>Abschluss</li>
                </ol>
              </div>
              <div className="approach-divider">
                <span>vs.</span>
              </div>
              <div className="approach-col approach-col--new">
                <h3><CheckCircle size={20} /> Medi-Lane denkt</h3>
                <ol>
                  <li>Warum will die Pflegekraft wechseln?</li>
                  <li>Was braucht sie wirklich?</li>
                  <li>Was darf sich nicht wiederholen?</li>
                  <li>Welcher Arbeitgeber kann das bieten?</li>
                  <li>Wie hoch ist die Wahrscheinlichkeit für langfristigen Fit?</li>
                </ol>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======== USPs ======== */}
      <section className="section" id="vorteile">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge section-badge--amber">Ihre Vorteile</span>
              <h2 className="section-title">Warum Einrichtungen auf <span className="gradient-text--amber">Medi-Lane</span> setzen</h2>
            </div>
          </ScrollReveal>

          <div className="grid-3 benefits-cards">
            {usps.map((usp, i) => (
              <ScrollReveal key={i} delay={i % 3 + 1}>
                <div className="benefit-card">
                  <div className="benefit-icon-wrap benefit-icon-wrap--amber">{usp.icon}</div>
                  <h3>{usp.title}</h3>
                  <p>{usp.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======== ABLAUF ======== */}
      <section className="section section--alt" id="ablauf">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge section-badge--amber">Der Ablauf</span>
              <h2 className="section-title">So finden wir die <span className="gradient-text--amber">richtige Pflegekraft</span> für Sie</h2>
            </div>
          </ScrollReveal>

          <div className="employer-steps">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i + 1}>
                <div className="employer-step">
                  <div className="employer-step-num">{step.num}</div>
                  <div className="employer-step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CONTACT FORM ======== */}
      <section className="section" id="kontakt">
        <div className="container">
          <div className="contact-split">
            <ScrollReveal>
              <div className="contact-info">
                <span className="section-badge section-badge--amber">Kontakt</span>
                <h2 className="section-title" style={{ textAlign: 'left' }}>Sprechen Sie mit uns über Ihren <span className="gradient-text--amber">Bedarf</span></h2>
                <p className="contact-desc">
                  Ob einzelne Stellen oder langfristiger Recruiting-Partner — wir freuen uns auf den Austausch. 
                  Beschreiben Sie kurz Ihren Bedarf, wir melden uns innerhalb von 24 Stunden.
                </p>
                <ul className="contact-checklist">
                  <li><CheckCircle size={18} /> Unverbindliche Erstberatung</li>
                  <li><CheckCircle size={18} /> Keine Vorabkosten</li>
                  <li><CheckCircle size={18} /> Persönlicher Ansprechpartner</li>
                  <li><CheckCircle size={18} /> Rückmeldung in 24 Stunden</li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="contact-form-wrapper">
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ======== FINAL CTA ======== */}
      <section className="section final-cta-section">
        <div className="container">
          <ScrollReveal>
            <div className="final-cta-box final-cta-box--amber">
              <h2>Bereit für bessere Besetzungen?</h2>
              <p>
                Lernen Sie unser Matching-Modell kennen und gewinnen Sie Pflegekräfte, 
                die wirklich in Ihre Einrichtung passen.
              </p>
              <a href="#kontakt" className="btn btn--white btn--lg" id="employer-final-cta">
                Jetzt Kontakt aufnehmen <ArrowRight size={20} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
