import {
  ArrowRight, UserCheck, TrendingUp, Target, Search, CheckCircle, Users,
  XCircle, Building2, ClipboardList, Handshake, BarChart3,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ui/ScrollReveal'
import ContactForm from '../components/ui/ContactForm'
import Eyebrow from '../components/sections/Eyebrow'
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
  { num: '01', icon: <ClipboardList size={24} />, title: 'Bedarf verstehen', desc: 'Wir erfassen nicht nur die offene Stelle, sondern die tatsächlichen Rahmenbedingungen deiner Einrichtung.' },
  { num: '02', icon: <UserCheck size={24} />, title: 'Passendes Profil vorstellen', desc: 'Du bekommst Pflegekräfte, die fachlich und von ihren Erwartungen her zu deinem Haus passen.' },
  { num: '03', icon: <Handshake size={24} />, title: 'Gespräch und Abgleich', desc: 'Nur sinnvolle Matches werden weiterverfolgt — kein Zeitverlust durch unpassende Gespräche.' },
  { num: '04', icon: <CheckCircle size={24} />, title: 'Besetzung mit Passung', desc: 'Ziel ist eine Besetzung, die nicht nur kurzfristig funktioniert, sondern langfristig hält.' },
]

export default function ArbeitgeberPage() {
  return (
    <div className="employer-page">
      {/* ======== HERO ======== */}
      <section className="employer-hero">
        <div className="employer-hero-gradient" />
        <div className="container employer-hero-inner">
          <div className="employer-hero-content">
            <Eyebrow>Für Einrichtungen</Eyebrow>
            <h1 className="employer-hero-title">
              Weniger Fluktuation beginnt mit{' '}
              <em>besserer Passung</em>.
            </h1>
            <p className="employer-hero-sub">
              Wir vermitteln keine Masse, sondern wechselbereite Pflegekräfte mit klaren
              Erwartungen und echter Passung zu deinem Haus. Diskret. Verbindlich. Auf Augenhöhe.
            </p>
            <div className="employer-hero-cta">
              <Link to="/kontakt?typ=einrichtung" className="btn btn--primary btn--lg">
                <Building2 size={20} />
                Erstgespräch vereinbaren
              </Link>
              <a href="#vorteile" className="btn btn--ghost btn--lg">
                Vorteile entdecken →
              </a>
            </div>
            <p className="employer-hero-note">15 Minuten · Diskret · Unverbindlich</p>
          </div>

          <div className="employer-hero-stats">
            <div className="stat-card">
              <span className="stat-num">48<em>h</em></span>
              <span className="stat-label">Erste Rückmeldung</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">100<em>%</em></span>
              <span className="stat-label">Vorqualifizierte Profile</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">0<em>€</em></span>
              <span className="stat-label">Vorabkosten</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======== PROBLEM ======== */}
      <section className="section" id="problem">
        <div className="container">
          <ScrollReveal>
            <div className="section__head">
              <Eyebrow>Die Realität</Eyebrow>
              <h2 className="section__title">
                Du hast kein Recruiting-Problem — du hast ein Passungsproblem.
              </h2>
              <p className="section__lead">
                Klassische Vermittler liefern Profile, aber selten echte Passung. Das Ergebnis:
                endlose Besetzungszyklen, steigende Kosten, frustrierte Stammteams.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="employer-problems">
              {problems.map((p, i) => (
                <div className="employer-problem-item" key={i}>
                  <XCircle size={18} />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======== APPROACH COMPARISON ======== */}
      <section className="section section--soft" id="ansatz">
        <div className="container">
          <ScrollReveal>
            <div className="section__head">
              <Eyebrow>Unser Ansatz</Eyebrow>
              <h2 className="section__title">
                Wechselprofile statt Bewerbungsmasse.
              </h2>
              <p className="section__lead">
                Nicht „Qualifikation + freie Stelle = passt schon", sondern tiefes Matching
                auf Basis echter Wechselmotive — auf beiden Seiten.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="approach-comparison">
              <div className="approach-col approach-col--old">
                <h3><XCircle size={16} /> Klassisch denken</h3>
                <ol>
                  <li>Offene Stelle</li>
                  <li>Kandidat mit passender Qualifikation</li>
                  <li>Vorstellung</li>
                  <li>Abschluss</li>
                </ol>
              </div>
              <div className="approach-divider"><span>vs.</span></div>
              <div className="approach-col approach-col--new">
                <h3><CheckCircle size={16} /> Medilane denkt</h3>
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
            <div className="section__head">
              <Eyebrow>Was du davon hast</Eyebrow>
              <h2 className="section__title">
                Warum Einrichtungen auf Medilane setzen.
              </h2>
            </div>
          </ScrollReveal>

          <div className="employer-usps">
            {usps.map((usp, i) => (
              <ScrollReveal key={i} delay={(i % 3) + 1}>
                <div className="employer-usp">
                  <div className="employer-usp-icon">{usp.icon}</div>
                  <h3>{usp.title}</h3>
                  <p>{usp.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======== ABLAUF ======== */}
      <section className="section section--soft" id="ablauf">
        <div className="container">
          <ScrollReveal>
            <div className="section__head">
              <Eyebrow>Der Ablauf</Eyebrow>
              <h2 className="section__title">
                So finden wir die richtige Pflegekraft für dich.
              </h2>
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
                <Eyebrow>Kontakt</Eyebrow>
                <h2 className="section__title" style={{ textAlign: 'left' }}>
                  Sprich mit uns über deinen Bedarf.
                </h2>
                <p className="contact-desc">
                  Ob einzelne Stellen oder langfristiger Recruiting-Partner — wir freuen uns auf
                  den Austausch. Beschreibe kurz deine Situation, wir melden uns innerhalb von 24
                  Stunden.
                </p>
                <ul className="contact-checklist">
                  <li><CheckCircle size={18} /> Unverbindliches Erstgespräch</li>
                  <li><CheckCircle size={18} /> Keine Vorabkosten</li>
                  <li><CheckCircle size={18} /> Persönlicher Ansprechpartner</li>
                  <li><CheckCircle size={18} /> Rückmeldung in 24 Stunden</li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="contact-form-wrapper">
                <ContactForm type="einrichtung" source="arbeitgeber-hub" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ======== FINAL CTA ======== */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="final-cta-box">
              <h2>Bereit für bessere Besetzungen?</h2>
              <p>
                Lerne unser Matching-Modell kennen und finde Pflegekräfte, die wirklich
                zu deinem Haus passen.
              </p>
              <a href="#kontakt" className="btn btn--inverse btn--lg">
                Jetzt Kontakt aufnehmen <ArrowRight size={20} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
