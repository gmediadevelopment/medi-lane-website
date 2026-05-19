import {
  ArrowRight, Shield, Clock, Heart, Target, Handshake, ShieldCheck, Briefcase,
  AlertTriangle, CalendarX, UserX, BatteryLow, Timer, HeartCrack,
  ClipboardList, CheckCircle, Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ui/ScrollReveal'
import FAQAccordion from '../components/ui/FAQAccordion'
import Eyebrow from '../components/sections/Eyebrow'
import { getFunnelUrl } from '../lib/tracking'
import teamImage from '../assets/team-caring.png'
import './PflegekraeftePage.css'

const painPoints = [
  { icon: <CalendarX size={20} />, title: 'Chaotische Dienstpläne', desc: 'Ständige Änderungen, kaum Planbarkeit.' },
  { icon: <AlertTriangle size={20} />, title: 'Zu viele Einspringdienste', desc: 'Dauerhaft erreichbar, kein Ausgleich.' },
  { icon: <UserX size={20} />, title: 'Schlechte Führung', desc: 'Kein Verständnis, kein Rückhalt von oben.' },
  { icon: <Users size={20} />, title: 'Teamprobleme', desc: 'Konflikte, Unterbesetzung, schlechte Stimmung.' },
  { icon: <BatteryLow size={20} />, title: 'Überlastung', desc: 'Körperlich und mental am Limit.' },
  { icon: <Timer size={20} />, title: 'Zu wenig Zeit', desc: 'Keine Zeit für Patienten und Bewohner.' },
  { icon: <HeartCrack size={20} />, title: 'Fehlende Wertschätzung', desc: 'Engagement wird nicht gesehen.' },
  { icon: <ArrowRight size={20} />, title: 'Wiederholte Fehlwechsel', desc: 'Neuer Job, gleiche Probleme.' },
]

const usps = [
  { icon: <Handshake size={22} />, title: 'Wechselbegleitung', desc: 'Nicht nur ein Job-Link, sondern echte Begleitung beim Übergang in deinen neuen Job.' },
  { icon: <ShieldCheck size={22} />, title: 'Diskret und unverbindlich', desc: 'Orientiere dich frei, ohne dich festlegen zu müssen. Dein Arbeitgeber erfährt nichts.' },
  { icon: <ClipboardList size={22} />, title: 'Wechselprofil statt CV', desc: 'Wünsche, No-Gos und Prioritäten zählen — nicht nur dein Lebenslauf und Berufstitel.' },
  { icon: <Target size={22} />, title: 'Passung vor Geschwindigkeit', desc: 'Ziel ist nicht der schnellste Wechsel, sondern ein wirklich sinnvoller.' },
  { icon: <Shield size={22} />, title: 'Weniger Fehlwechsel', desc: 'Durch die tiefere Erfassung deiner Wechselmotive sinkt das Risiko, wieder falsch zu landen.' },
  { icon: <Briefcase size={22} />, title: 'Echte Arbeitsrealität', desc: 'Dienstplan, Team, Führung, Arbeitsweg und Arbeitsmodell werden ernst genommen.' },
]

const steps = [
  { num: '01', title: 'Wechselprofil anlegen', desc: 'Berufliche Daten, Wünsche, Prioritäten und Wechselgründe. Drei Minuten.' },
  { num: '02', title: 'Profilanalyse', desc: 'Wir werten dein Profil strukturiert aus: Qualifikation, Region, Schichtwünsche, No-Gos.' },
  { num: '03', title: 'Matching', desc: 'Abgleich mit offenen Stellen und passenden Arbeitgebern auf sechs Dimensionen.' },
  { num: '04', title: 'Vorauswahl', desc: 'Du siehst nur Optionen, die wirklich zu dir passen — keine Jobflut.' },
  { num: '05', title: 'Begleitung', desc: 'Wir bleiben da, bis klar ist, welcher Arbeitgeber wirklich passt.' },
]

const profileItems = [
  'Wechselgründe',
  'No-Gos',
  'Wünsche an Führung und Team',
  'Bevorzugte Arbeitsmodelle',
  'Gewünschte Bereiche',
  'Schichtwünsche',
  'Regionale Vorstellungen',
  'Prioritäten (Gehalt, Dienstplan, Arbeitsweg)',
]

const faqItems = [
  { question: 'Ist der Service kostenlos für mich?', answer: 'Ja, für Pflegekräfte ist Medilane vollständig kostenlos. Wir finanzieren uns über den Arbeitgeber bei erfolgreicher Vermittlung.' },
  { question: 'Muss ich dafür meinen aktuellen Job kündigen?', answer: 'Nein. Du erstellst zunächst nur dein Wechselprofil. Ein tatsächlicher Wechsel passiert nur, wenn du aktiv zustimmst.' },
  { question: 'Erfährt mein Arbeitgeber davon?', answer: 'Nein. Dein Profil wird anonymisiert behandelt und erst nach deiner ausdrücklichen Zustimmung an einen Arbeitgeber weitergegeben.' },
  { question: 'Wie lange dauert es, bis ich Angebote bekomme?', answer: 'In der Regel hörst du innerhalb von 48 Stunden von uns mit ersten passenden Optionen.' },
  { question: 'Was, wenn ich noch unsicher bin?', answer: 'Kein Problem. Viele Pflegekräfte nutzen das Wechselprofil zur Orientierung. Es gibt keinen Druck und keine Verpflichtung.' },
  { question: 'Welche Bereiche deckt ihr ab?', answer: 'Stationäre Pflege, ambulante Pflege, Klinik, außerklinische Intensivpflege und betreutes Wohnen. Mehr Bereiche kommen laufend dazu.' },
]

export default function PflegekraeftePage() {
  return (
    <div className="nurse-page">
      {/* ======== HERO ======== */}
      <section className="nurse-hero">
        <div className="nurse-hero-gradient" />
        <div className="container nurse-hero-inner">
          <div className="nurse-hero-content">
            <Eyebrow>Für Pflegekräfte</Eyebrow>
            <h1 className="nurse-hero-title">
              Nicht einfach wechseln. Wechsel <em>besser</em>.
            </h1>
            <p className="nurse-hero-sub">
              Finde einen Pflegejob, der nicht nur fachlich, sondern auch menschlich und
              organisatorisch zu dir passt. Diskret, kostenlos und mit persönlicher Begleitung.
            </p>
            <div className="nurse-hero-cta">
              <a
                href={getFunnelUrl('website', 'organic', 'nurse_hero')}
                className="btn btn--primary btn--lg"
              >
                Wechselprofil erstellen
                <ArrowRight size={20} />
              </a>
              <Link to="/wechselberatung" className="btn btn--ghost btn--lg">
                Mehr erfahren →
              </Link>
            </div>
            <div className="nurse-hero-trust">
              <span className="trust-pill"><Shield size={14} /> DSGVO-konform</span>
              <span className="trust-pill"><Clock size={14} /> 3 Minuten</span>
              <span className="trust-pill"><Heart size={14} /> 100 % kostenlos</span>
            </div>
          </div>

          <div className="nurse-hero-image">
            <img src={teamImage} alt="Pflegeteam im Gespräch" />
          </div>
        </div>
      </section>

      {/* ======== PAIN POINTS ======== */}
      <section className="section section--soft" id="probleme">
        <div className="container">
          <ScrollReveal>
            <div className="section__head">
              <Eyebrow>Kennst du das?</Eyebrow>
              <h2 className="section__title">
                Viele Pflegekräfte wollen nicht raus aus der Pflege — sondern raus aus ihrem
                aktuellen Setting.
              </h2>
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
            <p className="pain-result">
              Das Ergebnis: Viele wechseln den Arbeitgeber, landen aber wieder in ähnlichen
              Strukturen — weil sie nur auf offene Stellen schauen und nicht auf die
              tatsächliche Passung.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ======== WECHSELPROFIL ======== */}
      <section className="section" id="wechselprofil">
        <div className="container">
          <ScrollReveal>
            <div className="section__head">
              <Eyebrow>Unser Ansatz</Eyebrow>
              <h2 className="section__title">
                Dein Wechselprofil — mehr als ein Lebenslauf.
              </h2>
              <p className="section__lead">
                Wir erfassen nicht nur Qualifikationen, sondern deine echte Arbeitsrealität.
                Damit du einen Job findest, der wirklich passt.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="profile-features">
              {profileItems.map(item => (
                <span className="profile-tag" key={item}>
                  <CheckCircle size={14} />
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======== USPs ======== */}
      <section className="section section--soft" id="vorteile">
        <div className="container">
          <ScrollReveal>
            <div className="section__head">
              <Eyebrow>Deine Vorteile</Eyebrow>
              <h2 className="section__title">
                Warum Pflegekräfte mit uns wechseln.
              </h2>
            </div>
          </ScrollReveal>

          <div className="nurse-usps">
            {usps.map((usp, i) => (
              <ScrollReveal key={i} delay={(i % 3) + 1}>
                <div className="nurse-usp">
                  <div className="nurse-usp-icon">{usp.icon}</div>
                  <h3>{usp.title}</h3>
                  <p>{usp.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======== ABLAUF ======== */}
      <section className="section" id="ablauf">
        <div className="container">
          <ScrollReveal>
            <div className="section__head">
              <Eyebrow>Der Ablauf</Eyebrow>
              <h2 className="section__title">
                In fünf Schritten zum passenden Job.
              </h2>
            </div>
          </ScrollReveal>

          <div className="nurse-steps">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={(i % 5) + 1}>
                <div className="nurse-step">
                  <div className="nurse-step-num">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="nurse-steps-cta">
              <a
                href={getFunnelUrl('website', 'organic', 'nurse_steps')}
                className="btn btn--primary btn--lg"
              >
                Jetzt starten — kostenlos <ArrowRight size={20} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======== FAQ ======== */}
      <section className="section section--soft" id="faq">
        <div className="container">
          <ScrollReveal>
            <div className="section__head section__head--center">
              <Eyebrow>Häufige Fragen</Eyebrow>
              <h2 className="section__title">Deine Fragen — unsere Antworten.</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ======== FINAL CTA ======== */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="final-cta-box">
              <h2>Du verdienst einen Job, der zu deinem Leben passt.</h2>
              <p>
                Erstelle jetzt dein Wechselprofil und finde den Pflegejob, der nicht nur
                fachlich, sondern auch menschlich und organisatorisch zu dir passt.
              </p>
              <a
                href={getFunnelUrl('website', 'organic', 'nurse_final')}
                className="btn btn--inverse btn--lg"
              >
                Wechselprofil erstellen <ArrowRight size={20} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
