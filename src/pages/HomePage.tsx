import { Link } from 'react-router-dom'
import {
  ArrowRight, Shield, Clock, Heart, Target, Users, TrendingUp,
  CheckCircle, XCircle, UserCheck, Building2, Handshake, Search,
  CalendarCheck, Briefcase, ShieldCheck
} from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'
import FAQAccordion from '../components/ui/FAQAccordion'
import { getFunnelUrl } from '../lib/tracking'
import heroImage from '../assets/hero-nurse.png'
import matchingImage from '../assets/matching-visual.png'
import './HomePage.css'

const faqItems = [
  {
    question: 'Ist Medi-Lane kostenlos für Pflegekräfte?',
    answer: 'Ja, für Pflegekräfte ist unser Service vollständig kostenlos. Wir finanzieren uns über eine Vermittlungsgebühr, die der Arbeitgeber bei erfolgreicher Besetzung zahlt.',
  },
  {
    question: 'Muss ich aktiv auf Jobsuche sein?',
    answer: 'Nein. Viele Pflegekräfte erstellen ihr Wechselprofil, um sich unverbindlich zu orientieren. Sie müssen sich nicht sofort auf einen Wechsel festlegen.',
  },
  {
    question: 'Wie unterscheidet sich Medi-Lane von einer Jobbörse?',
    answer: 'Jobbörsen zeigen Ihnen offene Stellen. Wir erfassen ein vollständiges Wechselprofil — mit Ihren Wünschen, Prioritäten und No-Gos — und matchen Sie aktiv mit passenden Arbeitgebern. Das ist keine Stellensuche, sondern echte Wechselbegleitung.',
  },
  {
    question: 'Erfährt mein aktueller Arbeitgeber davon?',
    answer: 'Nein. Ihr Profil wird nur anonymisiert an potenzielle Arbeitgeber vorgestellt. Erst wenn Sie aktiv zustimmen, geben wir Ihre Kontaktdaten weiter.',
  },
  {
    question: 'Wie lange dauert es, bis ich Angebote erhalte?',
    answer: 'In der Regel erhalten Sie innerhalb von 48 Stunden eine erste Rückmeldung. Je nach Region und Fachbereich kann es schneller oder etwas länger dauern.',
  },
  {
    question: 'Welche Einrichtungen werden berücksichtigt?',
    answer: 'Wir arbeiten mit stationären Pflegeeinrichtungen, ambulanten Diensten, Kliniken, Intensivpflege-Anbietern und Einrichtungen für betreutes Wohnen zusammen.',
  },
  {
    question: 'Was macht Medi-Lane für Arbeitgeber?',
    answer: 'Wir liefern vorqualifizierte Wechselprofile von Pflegekräften mit klarer Passungslogik. Weniger Streuverlust, bessere Trefferquote und nachhaltigere Besetzungen.',
  },
]

export default function HomePage() {
  return (
    <div className="home-page">
      {/* ======== HERO ======== */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <div className="hero-gradient" />
          <div className="hero-mesh" />
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge animate-fadein">
              <span className="badge-pulse" />
              Neue Art der Pflegevermittlung
            </div>
            <h1 className="hero-title">
              Der passende Pflegejob<br />
              ist <span className="gradient-text">mehr als eine</span><br />
              offene Stelle.
            </h1>
            <p className="hero-subtitle">
              Wir begleiten Pflegekräfte diskret in den Job, der wirklich zu ihrem Leben passt — 
              und helfen Arbeitgebern, Fachkräfte mit echter Passung zu finden.
            </p>
            <div className="hero-actions">
              <a href={getFunnelUrl('website', 'organic', 'hero')} className="btn btn--primary btn--lg" id="hero-cta-funnel">
                <UserCheck size={20} />
                Wechselprofil erstellen
              </a>
              <Link to="/arbeitgeber" className="btn btn--secondary btn--lg" id="hero-cta-employer">
                <Building2 size={20} />
                Für Arbeitgeber
              </Link>
            </div>
            <div className="hero-trust">
              <div className="trust-item">
                <Shield size={16} />
                <span>DSGVO-konform</span>
              </div>
              <div className="trust-dot" />
              <div className="trust-item">
                <Clock size={16} />
                <span>3 Min. Aufwand</span>
              </div>
              <div className="trust-dot" />
              <div className="trust-item">
                <Heart size={16} />
                <span>100% kostenlos</span>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src={heroImage} alt="Freundliche Pflegekraft in moderner Einrichtung" className="hero-image" />
            <div className="hero-image-glow" />
          </div>
        </div>
      </section>

      {/* ======== PROBLEM ======== */}
      <section className="section section--alt" id="problem">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Das Problem</span>
              <h2 className="section-title">Warum einfach nur wechseln,<br />wenn man <span className="gradient-text">besser wechseln</span> kann?</h2>
            </div>
          </ScrollReveal>

          <div className="problem-grid">
            <ScrollReveal delay={1}>
              <div className="problem-card problem-card--nurse">
                <div className="problem-card-header">
                  <UserCheck size={24} />
                  <h3>Pflegekräfte</h3>
                </div>
                <ul className="problem-list">
                  <li><XCircle size={16} /> Zu viele Einspringdienste</li>
                  <li><XCircle size={16} /> Chaotische Dienstpläne</li>
                  <li><XCircle size={16} /> Fehlende Wertschätzung</li>
                  <li><XCircle size={16} /> Schlechte Führung</li>
                  <li><XCircle size={16} /> Wiederholte Fehlwechsel</li>
                  <li><XCircle size={16} /> Überlastung im Alltag</li>
                </ul>
                <p className="problem-result">
                  → Viele wechseln, landen aber wieder in ähnlichen Strukturen.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="problem-card problem-card--employer">
                <div className="problem-card-header">
                  <Building2 size={24} />
                  <h3>Arbeitgeber</h3>
                </div>
                <ul className="problem-list">
                  <li><XCircle size={16} /> Viele Bewerbungen, wenig Fit</li>
                  <li><XCircle size={16} /> Hoher Streuverlust</li>
                  <li><XCircle size={16} /> Kandidaten springen ab</li>
                  <li><XCircle size={16} /> Hohe Frühfluktuation</li>
                  <li><XCircle size={16} /> Stellen werden endlos neu besetzt</li>
                  <li><XCircle size={16} /> Zeitverlust durch unpassende Gespräche</li>
                </ul>
                <p className="problem-result">
                  → Klassische Vermittlung liefert Profile, aber keine Passung.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ======== APPROACH ======== */}
      <section className="section" id="ansatz">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Unser Ansatz</span>
              <h2 className="section-title">Keine Massenvermittlung.<br />Sondern <span className="gradient-text">echte Passung</span>.</h2>
              <p className="section-subtitle">
                Ein Matching-Modell, das Wechselgründe, Arbeitsrealität und echte Passung in den Mittelpunkt stellt.
              </p>
            </div>
          </ScrollReveal>

          <div className="approach-grid">
            <ScrollReveal delay={1}>
              <div className="approach-card">
                <div className="approach-icon">
                  <Handshake size={28} />
                </div>
                <h3>Wechselbegleitung</h3>
                <p>Wir begleiten nicht den schnellsten Wechsel, sondern den sinnvollsten. Mit Verständnis für Ihre Situation.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="approach-card">
                <div className="approach-icon">
                  <Target size={28} />
                </div>
                <h3>Echtes Matching</h3>
                <p>Nicht „Qualifikation + freie Stelle = passt". Sondern Wünsche, No-Gos und Rahmenbedingungen werden abgeglichen.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <div className="approach-card">
                <div className="approach-icon">
                  <TrendingUp size={28} />
                </div>
                <h3>Langfristiger Fit</h3>
                <p>Ziel ist nicht irgendein Wechsel, sondern einer, der langfristig funktioniert — für beide Seiten.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ======== HOW IT WORKS ======== */}
      <section className="section section--alt" id="so-funktionierts">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">So funktioniert's</span>
              <h2 className="section-title">In drei Schritten zum <span className="gradient-text">passenden Job</span></h2>
            </div>
          </ScrollReveal>

          <div className="steps-row">
            <ScrollReveal delay={1}>
              <div className="step-card">
                <div className="step-num">1</div>
                <div className="step-icon-wrap"><Search size={32} /></div>
                <h3>Wechselprofil anlegen</h3>
                <p>Geben Sie Ihre Qualifikation, Wünsche, Prioritäten und Wechselgründe an — in nur 3 Minuten.</p>
              </div>
            </ScrollReveal>
            <div className="step-connector"><ArrowRight size={24} /></div>
            <ScrollReveal delay={2}>
              <div className="step-card">
                <div className="step-num">2</div>
                <div className="step-icon-wrap"><Target size={32} /></div>
                <h3>Intelligentes Matching</h3>
                <p>Ihr Profil wird mit passenden Arbeitgebern abgeglichen — nicht nur fachlich, sondern ganzheitlich.</p>
              </div>
            </ScrollReveal>
            <div className="step-connector"><ArrowRight size={24} /></div>
            <ScrollReveal delay={3}>
              <div className="step-card">
                <div className="step-num">3</div>
                <div className="step-icon-wrap"><CalendarCheck size={32} /></div>
                <h3>Begleitung & Angebote</h3>
                <p>Sie erhalten passende Angebote und werden begleitet, bis der richtige Arbeitgeber gefunden ist.</p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="steps-cta">
              <a href={getFunnelUrl('website', 'organic', 'steps')} className="btn btn--primary btn--lg" id="steps-cta-funnel">
                Jetzt Wechselprofil erstellen — kostenlos
                <ArrowRight size={20} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======== FOR NURSES ======== */}
      <section className="section" id="fuer-pflegekraefte">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Für Pflegekräfte</span>
              <h2 className="section-title">Nicht einfach wechseln.<br /><span className="gradient-text">Besser wechseln.</span></h2>
              <p className="section-subtitle">Ihr nächster Job soll nicht nur fachlich, sondern auch menschlich und organisatorisch passen.</p>
            </div>
          </ScrollReveal>

          <div className="grid-3 benefits-cards">
            {[
              { icon: <Handshake size={24} />, title: 'Wechselbegleitung', desc: 'Nicht nur ein Job-Link, sondern echte Begleitung beim Übergang.' },
              { icon: <ShieldCheck size={24} />, title: '100% diskret', desc: 'Ihr Arbeitgeber erfährt nichts. Profil wird nur anonymisiert vorgestellt.' },
              { icon: <Target size={24} />, title: 'Wechselprofil statt CV', desc: 'Wünsche, No-Gos und Prioritäten zählen — nicht nur der Lebenslauf.' },
              { icon: <Heart size={24} />, title: 'Passung vor Speed', desc: 'Ziel ist nicht der schnellste Wechsel, sondern der sinnvollste.' },
              { icon: <Shield size={24} />, title: 'Weniger Fehlwechsel', desc: 'Durch tiefere Erfassung sinkt das Risiko, wieder falsch zu landen.' },
              { icon: <Briefcase size={24} />, title: 'Echte Arbeitsrealität', desc: 'Dienstplan, Führung, Team und Arbeitsweg werden ernst genommen.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i % 3 + 1}>
                <div className="benefit-card">
                  <div className="benefit-icon-wrap">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="section-bottom-cta">
              <Link to="/pflegekraefte" className="btn btn--secondary">
                Mehr erfahren <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======== FOR EMPLOYERS ======== */}
      <section className="section section--alt" id="fuer-arbeitgeber">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Für Arbeitgeber</span>
              <h2 className="section-title">Weniger Fluktuation durch<br /><span className="gradient-text">bessere Passung</span></h2>
              <p className="section-subtitle">Wir vermitteln keine Masse, sondern wechselbereite Pflegekräfte mit klaren Erwartungen und echter Passung.</p>
            </div>
          </ScrollReveal>

          <div className="grid-3 benefits-cards">
            {[
              { icon: <UserCheck size={24} />, title: 'Vorqualifizierte Profile', desc: 'Keine beliebigen Kandidaten, sondern Profile mit echter Passungslogik.' },
              { icon: <TrendingUp size={24} />, title: 'Langfristige Besetzung', desc: 'Das Modell ist auf geringere Fluktuation und bessere Bindung ausgerichtet.' },
              { icon: <Target size={24} />, title: 'Weniger Streuverlust', desc: 'Unpassende Kandidaten und unnötige Interviews werden reduziert.' },
              { icon: <Search size={24} />, title: 'Echte Wechselmotive', desc: 'Wir wissen nicht nur wer sucht, sondern auch warum.' },
              { icon: <CheckCircle size={24} />, title: 'Bessere Trefferquote', desc: 'Qualifikation + Rahmenbedingungen + kulturelle Passung.' },
              { icon: <Users size={24} />, title: 'Persönlicher Partner', desc: 'Aktive Begleitung und direkte Vermittlung statt nur Plattform.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i % 3 + 1}>
                <div className="benefit-card">
                  <div className="benefit-icon-wrap benefit-icon-wrap--amber">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="section-bottom-cta">
              <Link to="/arbeitgeber" className="btn btn--accent">
                Kontakt aufnehmen <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======== COMPARISON ======== */}
      <section className="section" id="unterschied">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Der Unterschied</span>
              <h2 className="section-title">Klassische Vermittlung vs. <span className="gradient-text">Medi-Lane</span></h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="comparison-wrapper">
              <div className="comparison-table">
                <div className="comp-header">
                  <div className="comp-cell comp-label"></div>
                  <div className="comp-cell comp-old">Klassisch</div>
                  <div className="comp-cell comp-new">Medi-Lane</div>
                </div>
                {[
                  ['Matching-Grundlage', 'Qualifikation + freie Stelle', 'Wechselprofil + echte Passung'],
                  ['Pflegekraft-Verständnis', 'Lebenslauf & Verfügbarkeit', 'Wünsche, No-Gos, Prioritäten'],
                  ['Vermittlungsart', 'Massenversand von Profilen', 'Gezielte Vorauswahl'],
                  ['Arbeitgeber-Info', 'Stellenanzeige', 'Intern bewertete Rahmenbedingungen'],
                  ['Ziel', 'Schnelle Besetzung', 'Langfristig passende Besetzung'],
                  ['Beziehung', 'Transaktional', 'Wechselbegleitung'],
                ].map(([label, old, medi], i) => (
                  <div className="comp-row" key={i}>
                    <div className="comp-cell comp-label">{label}</div>
                    <div className="comp-cell comp-old">
                      <XCircle size={16} className="comp-icon comp-icon--no" />
                      {old}
                    </div>
                    <div className="comp-cell comp-new">
                      <CheckCircle size={16} className="comp-icon comp-icon--yes" />
                      {medi}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======== MATCHING VISUAL ======== */}
      <section className="section section--alt">
        <div className="container">
          <div className="matching-split">
            <ScrollReveal>
              <div className="matching-text">
                <span className="section-badge">Unser Matching-Modell</span>
                <h2 className="section-title" style={{ textAlign: 'left' }}>Gute Vermittlung beginnt mit <span className="gradient-text">Verständnis</span></h2>
                <p className="matching-desc">
                  Wir erfassen nicht nur Qualifikationen und Verfügbarkeit, sondern ein vollständiges Wechselprofil. 
                  Darin werden Wechselgründe, No-Gos, bevorzugte Arbeitsmodelle, Schichtwünsche und Prioritäten berücksichtigt.
                </p>
                <ul className="matching-checklist">
                  <li><CheckCircle size={18} /> Warum will die Pflegekraft wechseln?</li>
                  <li><CheckCircle size={18} /> Was braucht sie wirklich?</li>
                  <li><CheckCircle size={18} /> Was darf sich nicht wiederholen?</li>
                  <li><CheckCircle size={18} /> Welcher Arbeitgeber passt tatsächlich?</li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="matching-image-wrapper">
                <img src={matchingImage} alt="Medi-Lane Matching-Modell Visualisierung" className="matching-image" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ======== FAQ ======== */}
      <section className="section" id="faq">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Häufige Fragen</span>
              <h2 className="section-title">Alles, was Sie <span className="gradient-text">wissen müssen</span></h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ======== FINAL CTA ======== */}
      <section className="section final-cta-section" id="start">
        <div className="container">
          <ScrollReveal>
            <div className="final-cta-box">
              <h2>Bereit für den Wechsel?</h2>
              <p>
                Erstellen Sie jetzt Ihr Wechselprofil und erhalten Sie passende Jobangebote —
                kostenlos, diskret und unverbindlich.
              </p>
              <a href={getFunnelUrl('website', 'organic', 'final_cta')} className="btn btn--white btn--lg" id="final-cta-funnel">
                Jetzt Wechselprofil erstellen
                <ArrowRight size={20} />
              </a>
              <span className="final-cta-note">Kein Account nötig · 3 Minuten · DSGVO-konform</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
