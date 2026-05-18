import { Link } from 'react-router-dom'
import {
  ArrowRight, ClipboardList, Target, GraduationCap, CalendarRange,
  RefreshCw, MessagesSquare, ListChecks, AlertTriangle, ShieldCheck,
} from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import Pillars from '../components/sections/Pillars'
import ScrollReveal from '../components/ui/ScrollReveal'
import ContactForm from '../components/ui/ContactForm'

const triggers = [
  'Viele Probezeitabbrüche in den letzten 12 Monaten',
  'Hohe Fluktuation in einzelnen Wohnbereichen oder Touren',
  'Dauerhafter, nicht steuerbarer Zeitarbeitseinsatz',
  'Bewerber sagen nach Vorstellungsgesprächen ab',
  'Dienstplanversprechen können nicht gehalten werden',
  'Stammteam ist dauerhaft überlastet',
  'Wiedereinsteiger und Rückkehrer sollen gewonnen werden',
  'Förderfähige Personalbindungsmaßnahmen sollen geprüft werden',
]

const modules = [
  {
    icon: <ClipboardList size={28} />,
    title: 'Personalstabilitäts-Check',
    description:
      'Strukturierte Analyse von offenen Stellen, Fluktuation, Probezeitabbrüchen, Zeitarbeitsanteil, Einarbeitung und Team-Struktur.',
    bullets: ['Datengestützte Bestandsaufnahme', 'Risikofelder werden sichtbar'],
  },
  {
    icon: <Target size={28} />,
    title: 'Arbeitgeber-Matchingfähigkeit',
    description:
      'Welche Pflegekräfte passen wirklich zu Ihrer Einrichtung? Wo entsteht Reibung zwischen Versprechen und Realität?',
    bullets: ['Matchfähigkeitsprofil', 'Realistische Zielgruppen'],
  },
  {
    icon: <CalendarRange size={28} />,
    title: 'Dienstplan- und Vereinbarkeitscheck',
    description:
      'Analyse von Planbarkeit, Wunschdiensten, Einspring-Logik, Teilzeitmodellen und Familienfreundlichkeit.',
    bullets: ['Hebel zur Verbesserung', 'Förderfähige Vereinbarkeitsmaßnahmen'],
  },
  {
    icon: <GraduationCap size={28} />,
    title: 'Einarbeitungs- und Startanalyse',
    description:
      'Struktur der ersten 30 Tage, Mentoren, Ansprechpartner, Feedbackpunkte, Übergabeprozesse.',
    bullets: ['Einarbeitungsplan', 'Mentorenmodell'],
  },
  {
    icon: <RefreshCw size={28} />,
    title: 'Rückgewinnungskonzept',
    description:
      'Pflegekräfte zurückgewinnen, die ausgestiegen sind, in Zeitarbeit gewechselt sind oder innerlich gekündigt haben.',
    bullets: ['Zielgruppen und Ansprache', 'Rückkehrbedingungen'],
  },
  {
    icon: <MessagesSquare size={28} />,
    title: 'Führung und Kommunikation',
    description:
      'Feedback-Logik, Erwartungsmanagement, Konfliktfrüherkennung, Kommunikation im Team und mit neuen Mitarbeitenden.',
    bullets: ['Kommunikationsleitfaden', 'Eskalationspfade'],
  },
]

export default function Stabilitaetsberatung() {
  return (
    <div className="stabilitaet-page">
      <PageHero
        badge="Beratung für Pflegeeinrichtungen"
        title={
          <>
            Bessere Matches,{' '}
            <span className="gradient-text">mehr Verbleib</span>,<br />
            stabilere Strukturen
          </>
        }
        subtitle="Optionaler Beratungsbaustein für Pflegeeinrichtungen: wir analysieren Matchingfähigkeit, Einarbeitung, Dienstplan und Bindungsfaktoren — und übersetzen das in einen konkreten Maßnahmenplan."
        actions={
          <>
            <Link to="/kontakt?typ=einrichtung" className="btn btn--primary btn--lg">
              <ShieldCheck size={20} />
              Stabilitäts-Check anfragen
            </Link>
            <Link to="/foerderung" className="btn btn--secondary btn--lg">
              Förderlogik ansehen
              <ArrowRight size={20} />
            </Link>
          </>
        }
      />

      {/* WANN SINNVOLL */}
      <section className="section section--alt">
        <div className="container container--narrow">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Wann sinnvoll</span>
              <h2 className="section-title">
                Personalprobleme lassen sich nicht immer{' '}
                <span className="gradient-text">durch Vermittlung</span> lösen
              </h2>
              <p className="section-subtitle">
                Wenn eine oder mehrere dieser Situationen zutreffen, lohnt sich ein strukturierter
                Blick auf Strukturen, Versprechen und Bindungsfaktoren — bevor die nächste Stelle
                ausgeschrieben wird.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <ul className="trigger-list">
              {triggers.map((t, i) => (
                <li key={i}>
                  <AlertTriangle size={18} />
                  {t}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* MODULE */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Die Beratungsmodule</span>
              <h2 className="section-title">
                Sechs Module, die einzeln oder{' '}
                <span className="gradient-text">kombiniert</span> nutzbar sind
              </h2>
              <p className="section-subtitle">
                Sie buchen nur die Module, die zu Ihrer Situation passen. Jedes Modul endet mit
                konkreten Maßnahmen, Zuständigkeiten und Kennzahlen.
              </p>
            </div>
          </ScrollReveal>
          <Pillars pillars={modules} />
        </div>
      </section>

      {/* MASSNAHMENPLAN */}
      <section className="section section--alt">
        <div className="container container--narrow">
          <ScrollReveal>
            <div className="massnahmen-box">
              <div className="massnahmen-icon">
                <ListChecks size={32} />
              </div>
              <h2>Am Ende steht ein konkreter Maßnahmenplan</h2>
              <p>
                Beratung muss handlungsorientiert sein, nicht theoretisch. Sie erhalten:
              </p>
              <ul>
                <li>Priorisierte Empfehlungen mit Aufwand und Wirkung</li>
                <li>Klare Zuständigkeiten und Zeitfenster (90/180 Tage)</li>
                <li>Kennzahlen zur Erfolgsmessung</li>
                <li>Auf Wunsch begleitete Umsetzung</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FÖRDER-HINWEIS */}
      <section className="section">
        <div className="container container--narrow">
          <ScrollReveal>
            <div className="foerder-hint">
              <h3>Hinweis zur Förderlogik</h3>
              <p>
                Die reine Vermittlung ist in der Regel nicht förderfähig. Beratungs- und
                Umsetzungsmaßnahmen zu Vereinbarkeit, Rückgewinnung, Wiedereinarbeitung,
                Personalmanagement und Unternehmenskultur können hingegen je nach Programm und
                Einzelfall förderfähig oder fördernah sein — etwa nach <strong>§ 8 Abs. 7 SGB XI</strong>,
                über <strong>INQA-Coaching</strong> oder <strong>BAFA-Förderung</strong>.
              </p>
              <p>
                Wir trennen unsere Leistungen transparent und stellen auf Wunsch eine
                maßnahmenbezogene Leistungsbeschreibung samt Kostenplan bereit.
              </p>
              <Link to="/foerderung" className="btn btn--secondary btn--sm">
                Details zur Förderlogik
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="section section--alt" id="kontakt">
        <div className="container">
          <div className="contact-split">
            <ScrollReveal>
              <div className="contact-info">
                <span className="section-badge">Kontakt</span>
                <h2 className="section-title" style={{ textAlign: 'left' }}>
                  Stabilitäts-Check{' '}
                  <span className="gradient-text">unverbindlich anfragen</span>
                </h2>
                <p className="contact-desc">
                  Schildern Sie uns kurz Ihre Situation. Wir melden uns innerhalb von 24 Stunden
                  und prüfen, welches Modul zu Ihrem Bedarf passt — und ob fördernahe Bestandteile
                  enthalten sein können.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="contact-form-wrapper">
                <ContactForm type="einrichtung" source="stabilitaetsberatung" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
