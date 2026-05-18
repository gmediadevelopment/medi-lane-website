import { Link } from 'react-router-dom'
import {
  ArrowRight, Target, Building2, ClipboardCheck, CalendarClock, FileText,
  HandHeart, Compass, ShieldCheck, AlertOctagon, CheckCircle, XCircle,
  Briefcase, Users, MessagesSquare,
} from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import Pillars from '../components/sections/Pillars'
import ProcessTimeline from '../components/sections/ProcessTimeline'
import ComparisonTable from '../components/sections/ComparisonTable'
import ScrollReveal from '../components/ui/ScrollReveal'
import FAQAccordion from '../components/ui/FAQAccordion'
import './PflegeMatch180.css'

const pillars = [
  {
    number: 'Säule 1',
    icon: <Compass size={28} />,
    title: 'Pflegekraft-Profiling',
    description:
      'Wir erfassen, was eine Pflegekraft fachlich, menschlich und organisatorisch wirklich braucht — über reine Qualifikation und Verfügbarkeit hinaus.',
    bullets: [
      'Wechselmotive und No-Gos',
      'Dienstplanwünsche und Belastungsgrenzen',
      'Führungs- und Teamerwartungen',
      'Einarbeitungs- und Entwicklungsbedarf',
    ],
  },
  {
    number: 'Säule 2',
    icon: <Building2 size={28} />,
    title: 'Arbeitgeber-Profiling',
    description:
      'Wir erfassen, welche Bedingungen Ihre Einrichtung tatsächlich bieten kann — nicht nur das, was in der Stellenanzeige steht.',
    bullets: [
      'Reale Dienstplan- und Einsatzlogik',
      'Einarbeitungsstruktur und Mentoren',
      'Teamprofil, Führung und Belastung',
      'Verlässlichkeit der Arbeitgeberversprechen',
    ],
  },
  {
    number: 'Säule 3',
    icon: <CalendarClock size={28} />,
    title: '180-Tage-Wechselbegleitung',
    description:
      'Nach der Einstellung bleibt Medilane aktiv: strukturierte Check-ins decken Risiken auf, bevor sie zu Kündigungen werden.',
    bullets: [
      'Check-ins nach 7, 30, 60, 100 und 180 Tagen',
      'Frühwarnindikatoren und Konfliktmoderation',
      'Erwartungsabgleich vor dem ersten Arbeitstag',
      'Abschlussreport mit Learnings',
    ],
  },
]

const processSteps = [
  {
    marker: '1',
    icon: <ClipboardCheck size={22} />,
    title: 'Mandatsaufnahme',
    description:
      'Wir verstehen Ihre Einrichtung in der Tiefe: Stellenprofil, Dienstplanrealität, Teamstruktur, Führungsstil, No-Gos.',
  },
  {
    marker: '2',
    icon: <Users size={22} />,
    title: 'Kandidatenprofiling',
    description:
      'Strukturierter Fragebogen für die Pflegekraft — fachlich, motivational und alltagsbezogen.',
  },
  {
    marker: '3',
    icon: <Target size={22} />,
    title: 'Matching',
    description:
      'Passungs- und Risikoanalyse über sechs Dimensionen mit klarer Ampellogik.',
  },
  {
    marker: '4',
    icon: <FileText size={22} />,
    title: 'Match-Bericht',
    description:
      'Sie erhalten keine Profilflut, sondern einen begründeten Match-Bericht mit Chancen, Risiken und Gesprächsempfehlungen.',
  },
  {
    marker: '5',
    icon: <MessagesSquare size={22} />,
    title: 'Erwartungsabgleich',
    description:
      'Vor Arbeitsbeginn werden Versprechen, Dienstplan und Einarbeitung schriftlich abgeglichen.',
  },
  {
    marker: '6',
    icon: <HandHeart size={22} />,
    title: '180-Tage-Begleitung',
    description:
      'Check-ins, Frühwarnindikatoren und Intervention — die kritischen ersten Monate sind aktiv abgesichert.',
  },
  {
    marker: '7',
    icon: <ShieldCheck size={22} />,
    title: 'Abschlussreport',
    description:
      'Verbleib, Zufriedenheit, Learnings — Sie lernen aus jedem Match, nicht nur aus dem erfolgreichen.',
  },
]

const matchReportItems = [
  'Fachliche Passung und Berufserfahrung',
  'Dienstplan- und Arbeitszeit-Passung',
  'Team- und Kultur-Passung',
  'Einarbeitungsbedarf und Startbedingungen',
  'Risikofaktoren mit Ampellogik (grün / gelb / rot)',
  'Empfohlene Gesprächsfragen für das Interview',
  'Hinweise für die ersten 30 Tage',
  'Einschätzung zur Verbleibswahrscheinlichkeit',
]

const comparisonRows = [
  {
    label: 'Fokus',
    classic: 'Lebenslauf, Qualifikation, Verfügbarkeit',
    medilane: 'Gesamtpassung über sechs Dimensionen',
  },
  {
    label: 'Vermittlungsende',
    classic: 'Mit Vertragsunterschrift',
    medilane: 'Erst nach 180 Tagen Verbleib',
  },
  {
    label: 'Risiken',
    classic: 'Werden meist erst nach Arbeitsbeginn sichtbar',
    medilane: 'Werden vor Start im Match-Bericht benannt',
  },
  {
    label: 'Übergabe',
    classic: 'Profil-Weiterleitung per E-Mail',
    medilane: 'Begründeter Match-Bericht mit Empfehlungen',
  },
  {
    label: 'Probezeitabbruch',
    classic: 'Wird abgewartet — dann neue Suche',
    medilane: 'Frühwarnindikatoren und Konfliktmoderation',
  },
  {
    label: 'Wirkung',
    classic: 'Einzelbesetzung als Endpunkt',
    medilane: 'Integration als Prozess — mit Lernkurve',
  },
]

const notWhatWeAre = [
  'Reine Lebenslaufweiterleitung',
  'Massenvermittlung oder Profilflut',
  'Zeitarbeit oder Arbeitnehmerüberlassung',
  'Kurzfristige Lückenfüllung',
  'Schönfärben von Arbeitgeberbedingungen',
  'Kandidatenversand ohne Erwartungsabgleich',
]

const suitableFor = [
  {
    icon: <Building2 size={24} />,
    title: 'Stationäre Pflegeeinrichtungen',
    desc: 'Stabilere Wohnbereiche durch passende Besetzung und begleitete Integration.',
  },
  {
    icon: <Briefcase size={24} />,
    title: 'Ambulante Pflegedienste',
    desc: 'Tourenlogik, Arbeitszeit und Alleinarbeit fließen ins Matching ein.',
  },
  {
    icon: <Users size={24} />,
    title: 'Träger mit mehreren Standorten',
    desc: 'Standardisierte Match- und Integrationsmethodik über alle Häuser.',
  },
  {
    icon: <AlertOctagon size={24} />,
    title: 'Einrichtungen mit hoher Fluktuation',
    desc: 'Analyse der Abbruchgründe und systematische Frühwarnung.',
  },
]

const faqItems = [
  {
    question: 'Was unterscheidet PflegeMatch 180 von klassischer Vermittlung?',
    answer:
      'Klassische Vermittlung optimiert auf Geschwindigkeit und Abschluss. PflegeMatch 180 endet nicht bei der Unterschrift — Sie bekommen einen begründeten Match-Bericht statt eines Lebenslaufs und 180 Tage aktive Begleitung. Das Ziel ist nicht die Besetzung, sondern der Verbleib.',
  },
  {
    question: 'Was kostet PflegeMatch 180?',
    answer:
      'PflegeMatch 180 wird als erfolgsorientiertes Paketmodell angeboten. Die konkrete Vergütung richtet sich nach Profil, Qualifikation und Begleitungsumfang. Üblicherweise wird in drei Raten gezahlt: bei Vertragsunterschrift, bei Arbeitsstart und nach 180 Tagen Verbleib — so ist sichergestellt, dass wir bis zum stabilen Verbleib im Boot bleiben.',
  },
  {
    question: 'Was passiert, wenn die Pflegekraft in der Probezeit kündigt?',
    answer:
      'Dann greift unsere Nachbesetzungslogik — abhängig vom Zeitpunkt und der Ursache. Für Abbrüche bis Tag 90 bieten wir in der Regel eine kostenfreie Nachbesetzung an, sofern die Ursache nicht auf gebrochene Zusagen der Einrichtung zurückgeht. Details klären wir im Erstgespräch.',
  },
  {
    question: 'Wie schnell findet ihr eine passende Pflegekraft?',
    answer:
      'Wir priorisieren Passung gegenüber Geschwindigkeit. Erfahrungsgemäß sehen Sie innerhalb von zwei bis vier Wochen erste qualifizierte Match-Berichte — falsche Eilbesetzungen sind in der Pflege teurer als ein paar Wochen Suche.',
  },
  {
    question: 'Für welche Einrichtungen lohnt sich PflegeMatch 180 besonders?',
    answer:
      'Vor allem für Einrichtungen mit wiederkehrenden Probezeitabbrüchen, hohem Zeitarbeitseinsatz oder spürbarer Belastung des Stammteams. Wenn der Wechsel von "schnell besetzen" zu "stabil besetzen" das Ziel ist, passen wir gut.',
  },
  {
    question: 'Was, wenn unsere Einrichtung die zugesagten Bedingungen nicht halten kann?',
    answer:
      'Das ist genau einer der Punkte, die wir vor der Vermittlung klären. Wir nehmen nur Versprechen in den Match auf, die haltbar sind. Wo wir strukturelle Risiken sehen, schlagen wir die optionale Stabilitätsberatung vor — das schützt am Ende auch Ihren Ruf als Arbeitgeber.',
  },
]

export default function PflegeMatch180() {
  return (
    <div className="pflegematch-page">
      <PageHero
        badge="Unser Kernangebot"
        title={
          <>
            PflegeMatch 180:<br />
            Pflegevermittlung mit{' '}
            <span className="gradient-text">Verbleib im Fokus</span>
          </>
        }
        subtitle="Direktvermittlung, strukturiertes Matching auf beiden Seiten und integrierte 180-Tage-Wechselbegleitung. Damit Pflegekräfte besser passen, besser ankommen und länger bleiben."
        actions={
          <>
            <Link to="/kontakt?typ=einrichtung" className="btn btn--primary btn--lg">
              <Target size={20} />
              PflegeMatch 180 anfragen
            </Link>
            <Link to="/matching-system" className="btn btn--secondary btn--lg">
              So funktioniert das Matching
              <ArrowRight size={20} />
            </Link>
          </>
        }
        trust={
          <>
            <span className="trust-pill">
              <CheckCircle size={16} /> Verbleib statt Abschluss
            </span>
            <span className="trust-pill">
              <CheckCircle size={16} /> Begründeter Match-Bericht
            </span>
            <span className="trust-pill">
              <CheckCircle size={16} /> 180 Tage Begleitung
            </span>
          </>
        }
      />

      {/* WARUM KLASSISCH ZU KURZ GREIFT */}
      <section className="section section--alt">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Warum dieser Ansatz</span>
              <h2 className="section-title">
                Klassische Vermittlung greift in der Pflege{' '}
                <span className="gradient-text">zu kurz</span>
              </h2>
              <p className="section-subtitle">
                Viele Probezeitabbrüche entstehen nicht durch fehlende Qualifikation, sondern durch
                falsche Erwartungen, unklare Dienstpläne, fehlende Einarbeitung oder Belastungs­situationen,
                die vorher nicht thematisiert wurden.
              </p>
            </div>
          </ScrollReveal>

          <div className="problem-chain">
            <ScrollReveal>
              <div className="chain chain--bad">
                <h3>So läuft es oft</h3>
                <ol>
                  <li>Offene Stelle</li>
                  <li>Schnelle Besetzung</li>
                  <li>Unpassender Match</li>
                  <li>Frust im Team und bei der Pflegekraft</li>
                  <li>Probezeitabbruch</li>
                  <li>Erneute Lücke und Suche</li>
                </ol>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="chain chain--good">
                <h3>So läuft es mit PflegeMatch 180</h3>
                <ol>
                  <li>Analyse beider Seiten</li>
                  <li>Strukturiertes Matching</li>
                  <li>Erwartungs- und Risikoabgleich</li>
                  <li>Begleiteter Start</li>
                  <li>Frühwarnung und Moderation</li>
                  <li>Verbleib nach 180 Tagen</li>
                </ol>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* DREI SÄULEN */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Die drei Säulen</span>
              <h2 className="section-title">
                PflegeMatch 180 ruht auf{' '}
                <span className="gradient-text">drei Bausteinen</span>
              </h2>
              <p className="section-subtitle">
                Diese drei Bausteine greifen ineinander. Wer einen davon weglässt, bekommt wieder
                klassische Vermittlung.
              </p>
            </div>
          </ScrollReveal>
          <Pillars pillars={pillars} />
        </div>
      </section>

      {/* PROZESS */}
      <section className="section section--alt">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Der Prozess</span>
              <h2 className="section-title">
                Von der Mandatsaufnahme bis zum{' '}
                <span className="gradient-text">Abschlussreport</span>
              </h2>
              <p className="section-subtitle">
                Sieben Phasen, die nicht mit der Unterschrift enden — sondern erst nach 180 Tagen
                stabilem Verbleib.
              </p>
            </div>
          </ScrollReveal>
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/* MATCH-BERICHT */}
      <section className="section">
        <div className="container">
          <div className="match-report-split">
            <ScrollReveal>
              <div className="match-report-text">
                <span className="section-badge">Der Match-Bericht</span>
                <h2 className="section-title" style={{ textAlign: 'left' }}>
                  Sie bekommen{' '}
                  <span className="gradient-text">begründete Matches</span>,
                  keine Profilflut.
                </h2>
                <p className="match-report-desc">
                  Jede Vorstellung erfolgt mit einem strukturierten Match-Bericht. Sie sehen nicht
                  nur, wer fachlich passen könnte, sondern verstehen warum — und welche Punkte
                  vor dem Start geklärt werden sollten.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="match-report-list">
                <h3>Inhalte des Match-Berichts</h3>
                <ul>
                  {matchReportItems.map((item, i) => (
                    <li key={i}>
                      <CheckCircle size={18} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* VERGLEICH */}
      <section className="section section--alt">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Im Vergleich</span>
              <h2 className="section-title">
                Klassische Vermittlung vs.{' '}
                <span className="gradient-text">PflegeMatch 180</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <ComparisonTable rows={comparisonRows} medilaneHeader="PflegeMatch 180" />
          </ScrollReveal>
        </div>
      </section>

      {/* GEEIGNET FÜR */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Für wen geeignet</span>
              <h2 className="section-title">
                Wenn eine dieser Situationen{' '}
                <span className="gradient-text">passt</span>, passen wir
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid-2 suitable-grid">
            {suitableFor.map((s, i) => (
              <ScrollReveal key={i} delay={(i % 2) + 1}>
                <div className="suitable-card">
                  <div className="suitable-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WAS WIR NICHT SIND */}
      <section className="section section--alt">
        <div className="container container--narrow">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Abgrenzung</span>
              <h2 className="section-title">
                Was PflegeMatch 180{' '}
                <span className="gradient-text">nicht ist</span>
              </h2>
              <p className="section-subtitle">
                Damit Erwartungen klar sind — hier eine ehrliche Negativliste.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <ul className="negation-list">
              {notWhatWeAre.map((item, i) => (
                <li key={i}>
                  <XCircle size={20} /> {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container container--narrow">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Häufige Fragen</span>
              <h2 className="section-title">
                Was Einrichtungen <span className="gradient-text">am häufigsten</span> fragen
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final-cta-section">
        <div className="container">
          <ScrollReveal>
            <div className="final-cta-box">
              <h2>Lassen Sie uns prüfen, ob PflegeMatch 180 zu Ihnen passt.</h2>
              <p>
                Im kostenlosen Erstgespräch klären wir Bedarf, Rahmenbedingungen und nächste Schritte —
                unverbindlich und vertraulich.
              </p>
              <Link to="/kontakt?typ=einrichtung" className="btn btn--white btn--lg">
                Kostenloses Erstgespräch vereinbaren
                <ArrowRight size={20} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
