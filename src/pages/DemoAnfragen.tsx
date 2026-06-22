import { Link } from 'react-router-dom'
import {
  ArrowRight, Handshake, Target, BarChart3, FileText, CalendarCheck,
  Sparkles, Building2, GraduationCap, Briefcase, Users,
} from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import Pillars from '../components/sections/Pillars'
import ContactForm from '../components/ui/ContactForm'
import ScrollReveal from '../components/ui/ScrollReveal'
import './DemoAnfragen.css'

const pilotInhalt = [
  {
    icon: <Target size={28} />,
    title: 'Matching & Match-Bericht',
    description:
      'Sechs Match-Dimensionen, transparenter Bericht je Vorstellung. Du siehst direkt, wie wir entscheiden — und kannst den Output mit klassischer Vermittlung vergleichen.',
  },
  {
    icon: <CalendarCheck size={28} />,
    title: '180-Tage-Begleitung',
    description:
      'Strukturierte Check-ins nach 7, 30, 60, 100 und 180 Tagen mit dokumentierten Frühwarnindikatoren. Auch dann, wenn die Vermittlung von uns kam.',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Wirkungsmessung',
    description:
      'Verbleibsquote, Probezeitabbruchgründe, Dienstplanabweichungen — wir bringen das, was sonst niemand strukturiert misst.',
  },
]

const geeignet = [
  {
    icon: <Building2 size={24} />,
    title: 'Träger mit mehreren Häusern',
    desc: 'Methodik kann standortübergreifend validiert und verglichen werden.',
  },
  {
    icon: <Briefcase size={24} />,
    title: 'Einrichtungen mit konkretem Schmerz',
    desc: 'Häufige Probezeitabbrüche oder strukturell hoher Zeitarbeitsanteil — wir starten dort, wo der Schmerz akut ist.',
  },
  {
    icon: <GraduationCap size={24} />,
    title: 'Hochschulen & Forschung',
    desc: 'Begleitende Wirkungsforschung zu Personalstabilität und Wechselbegleitung — wir teilen anonymisierte Daten.',
  },
  {
    icon: <Users size={24} />,
    title: 'Förder- und Innovationspartner',
    desc: 'Programme mit Fokus auf Fachkräftesicherung, Vereinbarkeit oder Digitalisierung in der Pflege.',
  },
]

const kpis = [
  { value: '180', label: 'Tage Begleitung', sub: 'pro Pflegekraft' },
  { value: '5', label: 'Check-in-Termine', sub: 'strukturiert dokumentiert' },
  { value: '6', label: 'Match-Dimensionen', sub: 'Pflegekraft × Arbeitgeber' },
  { value: '4', label: 'Risiko-Stufen', sub: 'in jedem Match-Bericht' },
]

const ablauf = [
  {
    nr: '1',
    title: 'Kennenlernen',
    desc: 'Vorstellung des Modells, beidseitiges Sondieren von Pilotinteresse und Rahmenbedingungen.',
  },
  {
    nr: '2',
    title: 'Konzept & Setup',
    desc: 'Maßnahmenbeschreibung, Datenschutzkonzept, Pilotdauer, KPIs und Reporting-Logik.',
  },
  {
    nr: '3',
    title: 'Pilotbetrieb',
    desc: 'Vermittlung, Match-Berichte, Wechselbegleitung — mit dokumentierter Methodik und Zwischenständen.',
  },
  {
    nr: '4',
    title: 'Auswertung',
    desc: 'Wirkungsbericht mit Verbleibsquoten, Abbruchgründen, Learnings und Skalierungspfad.',
  },
]

export default function DemoAnfragen() {
  return (
    <div className="demo-page">
      <PageHero
        badge="Pilot & Partner"
        title={
          <>
            PflegeMatch 180 als{' '}
            <span className="gradient-text">Pilot kennenlernen</span>
          </>
        }
        subtitle="Für Pflegeeinrichtungen, Träger, Hochschulen und Förderpartner, die das Modell ausprobieren oder begleiten möchten — strukturiert, messbar und mit klarem Wirkungsbericht."
        actions={
          <>
            <a href="#pilot-form" className="btn btn--primary btn--lg">
              <Handshake size={20} />
              Pilotgespräch vereinbaren
            </a>
            <Link to="/matching-system" className="btn btn--secondary btn--lg">
              Matching-System ansehen
              <ArrowRight size={20} />
            </Link>
          </>
        }
      />

      {/* KPIs */}
      <section className="section demo-kpi-section">
        <div className="container">
          <ScrollReveal>
            <div className="demo-kpis">
              {kpis.map((k, i) => (
                <div className="demo-kpi" key={i}>
                  <span className="demo-kpi-value">{k.value}</span>
                  <span className="demo-kpi-label">{k.label}</span>
                  <span className="demo-kpi-sub">{k.sub}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PILOT INHALT */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Was getestet wird</span>
              <h2 className="section-title">
                Drei Bausteine, die im Piloten{' '}
                <span className="gradient-text">messbar werden</span>
              </h2>
              <p className="section-subtitle">
                Der Pilot bildet die volle Methodik ab — verkleinert, aber nicht abgespeckt.
                So entstehen belastbare Daten in 6–12 Monaten.
              </p>
            </div>
          </ScrollReveal>
          <Pillars pillars={pilotInhalt} />
        </div>
      </section>

      {/* GEEIGNET FÜR */}
      <section className="section section--alt">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Wer passt</span>
              <h2 className="section-title">
                Welche Pilotpartner wir{' '}
                <span className="gradient-text">aktiv suchen</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="geeignet-grid">
            {geeignet.map((g, i) => (
              <ScrollReveal key={i} delay={(i % 4) + 1}>
                <div className="geeignet-card">
                  <div className="geeignet-icon">{g.icon}</div>
                  <h3>{g.title}</h3>
                  <p>{g.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Ablauf</span>
              <h2 className="section-title">
                Wie der Pilot{' '}
                <span className="gradient-text">aufgesetzt wird</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="demo-ablauf">
            {ablauf.map((a, i) => (
              <ScrollReveal key={i} delay={(i % 4) + 1}>
                <div className="demo-step">
                  <div className="demo-step-nr">{a.nr}</div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WAS WIR LIEFERN */}
      <section className="section section--alt">
        <div className="container container--narrow">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Was du bekommst</span>
              <h2 className="section-title">
                Konzept, Datenmodell und{' '}
                <span className="gradient-text">Wirkungsbericht</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <ul className="demo-deliverables">
              <li>
                <FileText size={20} /> Pilotkonzept (PDF) mit Zielen, Methodik und KPIs
              </li>
              <li>
                <FileText size={20} /> Maßnahmenbeschreibung und Kostenplan
              </li>
              <li>
                <FileText size={20} /> Datenschutz- und Datenmodell-Übersicht
              </li>
              <li>
                <FileText size={20} /> Match-Berichts-Beispiel zur Bewertung
              </li>
              <li>
                <Sparkles size={20} /> Zwischenstände nach 3 und 6 Monaten
              </li>
              <li>
                <BarChart3 size={20} /> Abschluss-Wirkungsbericht mit Verbleibsquoten und Lernpunkten
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* PILOT FORM */}
      <section className="section" id="pilot-form">
        <div className="container">
          <div className="pilot-form-split">
            <ScrollReveal>
              <div className="pilot-form-info">
                <span className="section-badge">Pilotgespräch</span>
                <h2 className="section-title" style={{ textAlign: 'left' }}>
                  Erstes Gespräch{' '}
                  <span className="gradient-text">unverbindlich anfragen</span>
                </h2>
                <p>
                  Schildere kurz, aus welcher Rolle du kommst und was du konkret prüfen möchtest
                  möchten. Wir melden uns mit Konzeptunterlagen und schlagen einen Termin vor —
                  in der Regel innerhalb von zwei Werktagen.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="pilot-form-card">
                <ContactForm type="partner" source="demo-anfragen" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
