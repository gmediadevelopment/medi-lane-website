import {
  ArrowRight, Shield, Clock, Heart, Target, Handshake, ShieldCheck, Briefcase,
  AlertTriangle, CalendarX, UserX, BatteryLow, Timer, HeartCrack,
  Search, ClipboardList, CheckCircle, Users
} from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'
import FAQAccordion from '../components/ui/FAQAccordion'
import { getFunnelUrl } from '../lib/tracking'
import teamImage from '../assets/team-caring.png'
import './PflegekraeftePage.css'

const painPoints = [
  { icon: <CalendarX size={24} />, title: 'Chaotische Dienstpläne', desc: 'Ständige Änderungen, kaum Planbarkeit.' },
  { icon: <AlertTriangle size={24} />, title: 'Zu viele Einspringdienste', desc: 'Dauerhaft erreichbar, kein Ausgleich.' },
  { icon: <UserX size={24} />, title: 'Schlechte Führung', desc: 'Kein Verständnis, kein Rückhalt von oben.' },
  { icon: <Users size={24} />, title: 'Teamprobleme', desc: 'Konflikte, Unterbesetzung, schlechte Stimmung.' },
  { icon: <BatteryLow size={24} />, title: 'Überlastung', desc: 'Körperlich und mental am Limit.' },
  { icon: <Timer size={24} />, title: 'Zu wenig Zeit', desc: 'Keine Zeit für Patienten und Bewohner.' },
  { icon: <HeartCrack size={24} />, title: 'Fehlende Wertschätzung', desc: 'Engagement wird nicht gesehen.' },
  { icon: <ArrowRight size={24} />, title: 'Wiederholte Fehlwechsel', desc: 'Neuer Job, gleiche Probleme.' },
]

const usps = [
  { icon: <Handshake size={24} />, title: 'Wechselbegleitung', desc: 'Nicht nur ein Job-Link, sondern echte Begleitung beim Übergang in Ihren neuen Job.' },
  { icon: <ShieldCheck size={24} />, title: 'Diskret & unverbindlich', desc: 'Orientieren Sie sich frei, ohne sich festlegen zu müssen. Ihr Arbeitgeber erfährt nichts.' },
  { icon: <ClipboardList size={24} />, title: 'Wechselprofil statt CV', desc: 'Wünsche, No-Gos und Prioritäten zählen — nicht nur Ihr Lebenslauf und Ihr Berufstitel.' },
  { icon: <Target size={24} />, title: 'Passung vor Geschwindigkeit', desc: 'Ziel ist nicht der schnellste Wechsel, sondern ein wirklich sinnvoller Wechsel.' },
  { icon: <Shield size={24} />, title: 'Weniger Fehlwechsel', desc: 'Durch die tiefere Erfassung Ihrer Wechselmotive sinkt das Risiko, wieder falsch zu landen.' },
  { icon: <Briefcase size={24} />, title: 'Echte Arbeitsrealität', desc: 'Dienstplan, Team, Führung, Arbeitsweg und Arbeitsmodell werden ernst genommen.' },
]

const steps = [
  { num: '1', icon: <ClipboardList size={28} />, title: 'Wechselprofil anlegen', desc: 'Geben Sie berufliche Daten, Wünsche, Prioritäten und Wechselgründe an.' },
  { num: '2', icon: <Search size={28} />, title: 'Profilanalyse', desc: 'Ihr Profil wird strukturiert ausgewertet: Qualifikation, Region, Schichtwünsche, No-Gos.' },
  { num: '3', icon: <Target size={28} />, title: 'Matching', desc: 'Abgleich mit offenen Stellen und passenden Arbeitgebern.' },
  { num: '4', icon: <CheckCircle size={28} />, title: 'Vorauswahl', desc: 'Nur passende Optionen, keine beliebige Jobflut.' },
  { num: '5', icon: <Handshake size={28} />, title: 'Begleitung', desc: 'Wir begleiten Sie, bis klar ist, welcher Arbeitgeber wirklich passt.' },
]

const faqItems = [
  { question: 'Ist der Service kostenlos für mich?', answer: 'Ja, für Pflegekräfte ist Medi-Lane vollständig kostenlos. Wir finanzieren uns über den Arbeitgeber bei erfolgreicher Vermittlung.' },
  { question: 'Muss ich dafür meinen aktuellen Job kündigen?', answer: 'Nein. Sie erstellen zunächst nur Ihr Wechselprofil. Ein tatsächlicher Wechsel findet nur statt, wenn Sie sich aktiv dafür entscheiden.' },
  { question: 'Erfährt mein Arbeitgeber davon?', answer: 'Nein. Ihr Profil wird anonymisiert und erst nach Ihrer ausdrücklichen Zustimmung an einen Arbeitgeber weitergegeben.' },
  { question: 'Wie lange dauert es, bis ich Angebote bekomme?', answer: 'In der Regel erhalten Sie innerhalb von 48 Stunden eine erste Rückmeldung mit passenden Optionen.' },
  { question: 'Was, wenn ich noch unsicher bin?', answer: 'Kein Problem. Viele Pflegekräfte nutzen das Wechselprofil zur Orientierung. Es gibt keinen Druck und keine Verpflichtung.' },
  { question: 'Welche Bereiche deckt ihr ab?', answer: 'Stationäre Pflege, ambulante Pflege, Klinik, außerklinische Intensivpflege und betreutes Wohnen. Mehr Bereiche kommen laufend dazu.' },
]

export default function PflegekraeftePage() {
  return (
    <div className="nurse-page">
      {/* ======== HERO ======== */}
      <section className="nurse-hero">
        <div className="hero-bg">
          <div className="hero-gradient" />
          <div className="hero-mesh" />
        </div>
        <div className="container nurse-hero-inner">
          <div className="nurse-hero-content">
            <span className="section-badge">Für Pflegekräfte</span>
            <h1 className="hero-title">
              Nicht einfach wechseln.<br />
              <span className="gradient-text">Besser wechseln.</span>
            </h1>
            <p className="hero-subtitle">
              Finden Sie einen Pflegejob, der nicht nur fachlich, sondern auch menschlich 
              und organisatorisch zu Ihnen passt. Diskret, kostenlos und mit persönlicher Begleitung.
            </p>
            <div className="hero-actions">
              <a href={getFunnelUrl('website', 'organic', 'nurse_hero')} className="btn btn--primary btn--lg" id="nurse-hero-cta">
                Wechselprofil erstellen — kostenlos
                <ArrowRight size={20} />
              </a>
            </div>
            <div className="hero-trust">
              <div className="trust-item"><Shield size={16} /><span>DSGVO-konform</span></div>
              <div className="trust-dot" />
              <div className="trust-item"><Clock size={16} /><span>3 Min. Aufwand</span></div>
              <div className="trust-dot" />
              <div className="trust-item"><Heart size={16} /><span>100% kostenlos</span></div>
            </div>
          </div>
          <div className="nurse-hero-image">
            <img src={teamImage} alt="Pflegeteam im Gespräch" />
          </div>
        </div>
      </section>

      {/* ======== PAIN POINTS ======== */}
      <section className="section" id="probleme">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Kennen Sie das?</span>
              <h2 className="section-title">Viele Pflegekräfte wollen nicht raus aus der Pflege —<br />sondern raus aus <span className="gradient-text">ihrem aktuellen Setting</span>.</h2>
            </div>
          </ScrollReveal>

          <div className="pain-grid">
            {painPoints.map((p, i) => (
              <ScrollReveal key={i} delay={(i % 4) + 1}>
                <div className="pain-card">
                  <div className="pain-icon">{p.icon}</div>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="pain-result">
              <p>
                Das Ergebnis: Viele wechseln den Arbeitgeber, landen aber wieder in ähnlichen Strukturen —
                weil sie nur auf offene Stellen schauen und nicht auf die <strong>tatsächliche Passung</strong>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======== WECHSELPROFIL ======== */}
      <section className="section section--alt" id="wechselprofil">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Unser Ansatz</span>
              <h2 className="section-title">Ihr <span className="gradient-text">Wechselprofil</span> — mehr als ein Lebenslauf</h2>
              <p className="section-subtitle">
                Wir erfassen nicht nur Qualifikationen, sondern Ihre echte Arbeitsrealität. 
                Damit Sie einen Job finden, der wirklich zu Ihnen passt.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="profile-features">
              {['Wechselgründe', 'No-Gos', 'Wünsche an Führung & Team', 'Bevorzugte Arbeitsmodelle', 'Gewünschte Bereiche', 'Schichtwünsche', 'Regionale Vorstellungen', 'Prioritäten (Gehalt, Dienstplan, Arbeitsweg...)'].map((item, i) => (
                <div className="profile-tag" key={i}>
                  <CheckCircle size={16} />
                  {item}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======== USPs ======== */}
      <section className="section" id="vorteile">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Ihre Vorteile</span>
              <h2 className="section-title">Warum Pflegekräfte <span className="gradient-text">Medi-Lane</span> wählen</h2>
            </div>
          </ScrollReveal>

          <div className="grid-3 benefits-cards">
            {usps.map((usp, i) => (
              <ScrollReveal key={i} delay={i % 3 + 1}>
                <div className="benefit-card">
                  <div className="benefit-icon-wrap">{usp.icon}</div>
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
              <span className="section-badge">Der Ablauf</span>
              <h2 className="section-title">In 5 Schritten zum <span className="gradient-text">passenden Job</span></h2>
            </div>
          </ScrollReveal>

          <div className="process-timeline">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i + 1}>
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <span className="timeline-num">{step.num}</span>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-icon">{step.icon}</div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="steps-cta" style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
              <a href={getFunnelUrl('website', 'organic', 'nurse_steps')} className="btn btn--primary btn--lg" id="nurse-steps-cta">
                Jetzt starten — kostenlos <ArrowRight size={20} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======== FAQ ======== */}
      <section className="section" id="faq">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Häufige Fragen</span>
              <h2 className="section-title">Ihre Fragen — <span className="gradient-text">unsere Antworten</span></h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ======== FINAL CTA ======== */}
      <section className="section final-cta-section">
        <div className="container">
          <ScrollReveal>
            <div className="final-cta-box">
              <h2>Sie verdienen einen Job,<br />der zu Ihrem Leben passt.</h2>
              <p>
                Erstellen Sie jetzt Ihr Wechselprofil und finden Sie den Pflegejob, 
                der nicht nur fachlich, sondern auch menschlich und organisatorisch zu Ihnen passt.
              </p>
              <a href={getFunnelUrl('website', 'organic', 'nurse_final')} className="btn btn--white btn--lg" id="nurse-final-cta">
                Wechselprofil erstellen <ArrowRight size={20} />
              </a>
              <span className="final-cta-note">Kostenlos · Diskret · Unverbindlich</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
