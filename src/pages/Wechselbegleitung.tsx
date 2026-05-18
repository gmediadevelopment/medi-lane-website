import { Link } from 'react-router-dom'
import {
  ArrowRight, CalendarClock, AlertTriangle, MessageCircle, GraduationCap,
  Compass, ShieldCheck, Users, Building2, HandHeart, RefreshCw,
  CheckCircle, Lightbulb,
} from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import ProcessTimeline from '../components/sections/ProcessTimeline'
import ScrollReveal from '../components/ui/ScrollReveal'
import './Wechselbegleitung.css'

const phasen = [
  {
    marker: 'Vor Start',
    icon: <Compass size={22} />,
    title: 'Erwartungs- und Startabgleich',
    description:
      'Letzte Klärung vor dem ersten Arbeitstag — damit Versprechen und Realität zusammenpassen.',
    bullets: [
      'Dienstplan und Wunschdienste schriftlich fixiert',
      'Einarbeitungsplan und Mentor benannt',
      'Ansprechpartner und Kommunikationsweg geklärt',
      'No-Gos und kritische Punkte angesprochen',
    ],
  },
  {
    marker: 'Tag 7',
    icon: <MessageCircle size={22} />,
    title: 'Erster Ankommens-Check',
    description: 'Wie war der erste Eindruck? Wo gibt es früh Irritationen?',
    bullets: [
      'Teamkontakt und Aufnahme im Bereich',
      'Wurde die Einarbeitung gestartet?',
      'Weicht der Dienstplan ab?',
      'Erste offene Fragen oder Überforderung',
    ],
  },
  {
    marker: 'Tag 30',
    icon: <CalendarClock size={22} />,
    title: 'Integrations-Check',
    description: 'Realitätsabgleich im laufenden Alltag. Hier zeigen sich die meisten kritischen Themen.',
    bullets: [
      'Einarbeitung — strukturiert oder ad hoc?',
      'Team und Führung — wie passt die Kultur?',
      'Belastung — körperlich, fachlich, emotional?',
      'Dienstplan — wird das Versprechen gehalten?',
    ],
  },
  {
    marker: 'Tag 60',
    icon: <AlertTriangle size={22} />,
    title: 'Risiko-Check',
    description: 'Frühe Kündigungssignale erkennen, bevor sie zur Probezeit-Entscheidung werden.',
    bullets: [
      'Zweifel an der Entscheidung?',
      'Konflikte im Team oder mit Leitung?',
      'Zunehmende Zusatzdienste oder Fehlzeiten?',
      'Feedback der Einrichtung — ehrlich und konkret',
    ],
  },
  {
    marker: 'Tag 100',
    icon: <ShieldCheck size={22} />,
    title: 'Probezeit-Stabilisierung',
    description: 'Kritische Phase kurz vor Probezeitende — die letzte Möglichkeit für Klärung.',
    bullets: [
      'Entscheidungssicherheit auf beiden Seiten',
      'Entwicklungsperspektive geklärt',
      'Dienstmodell stabilisiert',
      'Zwischenfeedback Einrichtung ↔ Pflegekraft',
    ],
  },
  {
    marker: 'Tag 180',
    icon: <CheckCircle size={22} />,
    title: 'Abschluss und Lernbericht',
    description:
      'Verbleib dokumentiert, Lernpunkte gesichert — Einrichtung und System lernen aus jedem Fall.',
    bullets: [
      'Verbleibsstatus und Zufriedenheit',
      'Erfolgs- und Risikofaktoren',
      'Empfehlungen für künftige Matches',
      'Optional: Übergang in Stabilitätsberatung',
    ],
  },
]

const fruehwarnindikatoren = [
  {
    icon: <CalendarClock size={20} />,
    title: 'Dienstplanbruch',
    desc: 'Vereinbarte Dienste oder freie Tage werden früh nicht eingehalten.',
  },
  {
    icon: <GraduationCap size={20} />,
    title: 'Einarbeitung fehlt',
    desc: 'Pflegekraft fühlt sich nach wenigen Tagen allein gelassen.',
  },
  {
    icon: <Users size={20} />,
    title: 'Teamkonflikt',
    desc: 'Ausschluss, Spannungen, unklare Rollenverteilung im Bereich.',
  },
  {
    icon: <AlertTriangle size={20} />,
    title: 'Überforderung',
    desc: 'Bereich wird als fachlich oder körperlich zu belastend erlebt.',
  },
  {
    icon: <MessageCircle size={20} />,
    title: 'Führungsdissonanz',
    desc: 'Feedbackstil oder Kommunikation passt nicht zur Erwartung.',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'Zweifel an Entscheidung',
    desc: 'Pflegekraft äußert offen, dass sie nicht weiß, ob sie bleibt.',
  },
  {
    icon: <Building2 size={20} />,
    title: 'Unzufriedenheit der Einrichtung',
    desc: 'Leitung ist unzufrieden, spricht es aber nicht direkt an.',
  },
  {
    icon: <RefreshCw size={20} />,
    title: 'Häufige Zusatzdienste',
    desc: 'Ungeplante Mehrdienste, die das Versprechen unterlaufen.',
  },
]

const interventionen = [
  'Moderiertes Klärungsgespräch zwischen Leitung und Pflegekraft',
  'Anpassung des Einarbeitungsplans, neuer Mentor',
  'Klärung und Neuverhandlung von Dienstplanpunkten',
  'Feedback-Gespräch mit PDL / WBL',
  'Bereichs- oder Schichtwechsel prüfen',
  'Erwartungen schriftlich neu justieren',
  'Entwicklungsperspektive konkretisieren',
  'Konfliktmoderation mit klaren Folgeterminen',
]

export default function Wechselbegleitung() {
  return (
    <div className="wechsel-page">
      <PageHero
        badge="Integration"
        title={
          <>
            180-Tage-Wechselbegleitung<br />
            für einen <span className="gradient-text">stabilen Start</span>
          </>
        }
        subtitle="Viele Vermittlungen scheitern nicht vor der Einstellung, sondern in den ersten Wochen danach. Genau dort setzen wir an — mit Check-ins, Frühwarnindikatoren und Interventionsmöglichkeiten."
        actions={
          <>
            <Link to="/kontakt?typ=einrichtung" className="btn btn--primary btn--lg">
              <HandHeart size={20} />
              Wechselbegleitung besprechen
            </Link>
            <Link to="/pflegematch-180" className="btn btn--secondary btn--lg">
              Im Kontext PflegeMatch 180
              <ArrowRight size={20} />
            </Link>
          </>
        }
      />

      {/* WARUM 180 TAGE */}
      <section className="section section--alt">
        <div className="container container--narrow">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Warum 180 Tage</span>
              <h2 className="section-title">
                In den ersten sechs Monaten{' '}
                <span className="gradient-text">entscheidet sich alles</span>
              </h2>
              <p className="section-subtitle">
                Die Pflegekraft erlebt, ob Versprechen gehalten werden, ob das Team sie aufnimmt
                und ob die Einarbeitung trägt. Genau dort setzt unsere Begleitung an.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <ul className="moment-list">
              <li>
                <CheckCircle size={18} /> Ob sich die Pflegekraft willkommen fühlt
              </li>
              <li>
                <CheckCircle size={18} /> Ob die Dienstplanrealität zu den Absprachen passt
              </li>
              <li>
                <CheckCircle size={18} /> Ob die Einarbeitung tatsächlich funktioniert
              </li>
              <li>
                <CheckCircle size={18} /> Ob Konflikte früh angesprochen werden
              </li>
              <li>
                <CheckCircle size={18} /> Ob aus Unsicherheit Bindung oder Kündigung entsteht
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* PHASEN */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Ablauf</span>
              <h2 className="section-title">
                Sechs strukturierte{' '}
                <span className="gradient-text">Check-in-Phasen</span>
              </h2>
              <p className="section-subtitle">
                Jeder Check-in folgt einem festen Themenraster. Sie wissen vorher, was abgefragt
                wird — und bekommen am Ende eine knappe schriftliche Zusammenfassung.
              </p>
            </div>
          </ScrollReveal>
          <ProcessTimeline steps={phasen} />
        </div>
      </section>

      {/* FRÜHWARNINDIKATOREN */}
      <section className="section section--alt">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Frühwarnindikatoren</span>
              <h2 className="section-title">
                Acht Signale, auf die wir{' '}
                <span className="gradient-text">aktiv hören</span>
              </h2>
              <p className="section-subtitle">
                Diese Indikatoren stehen in jedem Check-in-Protokoll. Treffen mehrere zu, wird ein
                außerplanmäßiges Gespräch ausgelöst.
              </p>
            </div>
          </ScrollReveal>

          <div className="indikatoren-grid">
            {fruehwarnindikatoren.map((f, i) => (
              <ScrollReveal key={i} delay={(i % 4) + 1}>
                <div className="indikator-card">
                  <div className="indikator-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTERVENTIONEN */}
      <section className="section">
        <div className="container container--narrow">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Maßnahmen</span>
              <h2 className="section-title">
                Was wir konkret tun, wenn{' '}
                <span className="gradient-text">ein Indikator auslöst</span>
              </h2>
              <p className="section-subtitle">
                Medilane ersetzt keine Führungsverantwortung der Einrichtung. Unsere Rolle:
                Probleme früh sichtbar machen, Erwartungen klären, Maßnahmen festhalten, nachhalten.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <ul className="intervention-list">
              {interventionen.map((i, idx) => (
                <li key={idx}>
                  <ArrowRight size={18} /> {i}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* NUTZEN SPLIT */}
      <section className="section section--alt">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Nutzen</span>
              <h2 className="section-title">
                Was die Begleitung beiden Seiten{' '}
                <span className="gradient-text">bringt</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="nutzen-split">
            <ScrollReveal>
              <div className="nutzen-col">
                <div className="nutzen-header">
                  <Building2 size={28} />
                  <h3>Für Einrichtungen</h3>
                </div>
                <ul>
                  <li>Weniger Probezeitabbrüche und Wiederbesetzungskosten</li>
                  <li>Frühe Erkennung von Risiken im Stammteam</li>
                  <li>Entlastung von PDL und WBL in der Anfangsphase</li>
                  <li>Bessere Integration in den Wohnbereich</li>
                  <li>Mehr Stabilität in Dienstplan und Bereich</li>
                  <li>Dokumentierte Learnings für nächste Besetzungen</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="nutzen-col nutzen-col--alt">
                <div className="nutzen-header">
                  <HandHeart size={28} />
                  <h3>Für Pflegekräfte</h3>
                </div>
                <ul>
                  <li>Sicherer Wechsel mit neutraler Begleitung</li>
                  <li>Ansprechpartner außerhalb der Einrichtung</li>
                  <li>Bessere Klärung bei frühen Konflikten</li>
                  <li>Geringeres Risiko einer Fehlentscheidung</li>
                  <li>Erwartungen werden konkret nachverfolgt</li>
                  <li>Schutz vor stillem Versanden in der Probezeit</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final-cta-section">
        <div className="container">
          <ScrollReveal>
            <div className="final-cta-box">
              <h2>180 Tage Begleitung — als Standard, nicht als Option</h2>
              <p>
                Die Wechselbegleitung ist fester Bestandteil von PflegeMatch 180. Im Erstgespräch
                klären wir, wie sie konkret in Ihren Ablauf passt.
              </p>
              <Link to="/kontakt?typ=einrichtung" className="btn btn--white btn--lg">
                Kostenloses Erstgespräch
                <ArrowRight size={20} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
