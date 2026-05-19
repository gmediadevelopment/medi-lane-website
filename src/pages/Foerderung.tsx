import { Link } from 'react-router-dom'
import { ArrowRight, AlertCircle, FileText, ExternalLink } from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import FoerderTable from '../components/sections/FoerderTable'
import ScrollReveal from '../components/ui/ScrollReveal'
import './Foerderung.css'

const foerderRows: Array<{
  label: string
  status: 'foerderfaehig' | 'foerdernah' | 'kritisch' | 'neutral'
  note?: string
}> = [
  {
    label: 'Reine Vermittlungsprovision',
    status: 'kritisch',
    note: 'Erfolgsgebühren für die Einstellung sind in der Regel kein Fördergegenstand.',
  },
  {
    label: 'Personalstabilitäts-Beratung',
    status: 'foerderfaehig',
    note: 'Analyse, Konzeption und Maßnahmenplan zu Bindung und Stabilität.',
  },
  {
    label: 'Rückgewinnungskonzept',
    status: 'foerderfaehig',
    note: 'Zielgruppenansprache und Wiedereinstiegspfade für ausgestiegene Pflegekräfte.',
  },
  {
    label: 'Wiedereinarbeitungs-Konzept',
    status: 'foerderfaehig',
    note: 'Strukturierte Einarbeitung für Rückkehrer und Wiedereinsteiger.',
  },
  {
    label: 'Dienstplan- und Vereinbarkeitsmaßnahmen',
    status: 'foerderfaehig',
    note: 'Konzepte zur planbaren, familienfreundlichen Dienstplangestaltung.',
  },
  {
    label: 'Führungs- und Kommunikationsmaßnahmen',
    status: 'foerdernah',
    note: 'Kann fördernah sein, abhängig von Programm und Träger.',
  },
  {
    label: 'Digitale Plattform / Software-Lizenzen',
    status: 'foerdernah',
    note: 'Möglich über § 8 Abs. 8 SGB XI oder Digitalisierungsprogramme.',
  },
  {
    label: 'Reine Kandidatensuche / Sourcing',
    status: 'kritisch',
    note: 'Reines Recruiting ohne Konzeptbezug ist kritisch zu bewerten.',
  },
]

const programs = [
  {
    title: '§ 8 Abs. 7 SGB XI',
    target: 'Pflegeeinrichtungen',
    description:
      'Maßnahmen zur familienorientierten Optimierung der Arbeitszeit- und Dienstplangestaltung, Rückgewinnung und Wiedereinarbeitung von Pflege- und Betreuungskräften.',
    relevance: 'Beratungs- und Konzeptbestandteile zu Vereinbarkeit, Rückgewinnung, Wiedereinarbeitung.',
  },
  {
    title: '§ 8 Abs. 8 SGB XI',
    target: 'Pflegeeinrichtungen',
    description:
      'Zuschuss für digitale oder technische Ausrüstung und damit verbundene Schulungen — bis zu 40 % der Kosten, maximal 12.000 EUR je Einrichtung.',
    relevance: 'Plattformlizenzen, Dashboards, Schulungen — potenziell anteilig förderfähig.',
  },
  {
    title: 'INQA-Coaching',
    target: 'KMU (auch Pflege)',
    description:
      'Beratungsprogramm zu Fachkräftesicherung, Digitalisierung, Arbeitsorganisation und Unternehmenskultur.',
    relevance: 'Beratungsmodule zur Personalbindung und Organisationsentwicklung.',
  },
  {
    title: 'BAFA-Unternehmensberatung',
    target: 'KMU',
    description:
      'Förderung von externer Beratung zu wirtschaftlichen, finanziellen, personellen und organisatorischen Fragen.',
    relevance: 'Strategie- und Personalbindungsberatung mit ausgewiesenem Beratungsanteil.',
  },
  {
    title: 'ZIM',
    target: 'Innovationsprojekte',
    description:
      'Zentrales Innovationsprogramm Mittelstand: Entwicklung innovativer Produkte, Verfahren oder technischer Dienstleistungen.',
    relevance: 'Perspektivisch relevant für Plattform-Module mit F&E-Anteil.',
  },
]

export default function Foerderung() {
  return (
    <div className="foerderung-page">
      <PageHero
        badge="Fördermöglichkeiten"
        title={
          <>
            Welche Bestandteile sind{' '}
            <span className="gradient-text">fördernah</span>?
          </>
        }
        subtitle="Reine Vermittlung ist in der Regel nicht förderfähig. Beratungs-, Konzept- und Digitalisierungsbausteine zur Personalbindung können je nach Programm und Einzelfall sehr wohl gefördert werden. Wir trennen die Leistungen transparent."
        actions={
          <>
            <Link to="/kontakt?typ=einrichtung" className="btn btn--primary btn--lg">
              <FileText size={20} />
              Förderfähiges Modul prüfen
            </Link>
            <Link to="/stabilitaetsberatung" className="btn btn--secondary btn--lg">
              Beratungsmodule ansehen
              <ArrowRight size={20} />
            </Link>
          </>
        }
      />

      {/* DISCLAIMER */}
      <section className="section section--alt">
        <div className="container container--narrow">
          <ScrollReveal>
            <div className="disclaimer-box">
              <div className="disclaimer-icon">
                <AlertCircle size={24} />
              </div>
              <div>
                <h3>Wichtig vorab</h3>
                <p>
                  Diese Übersicht ersetzt keine Fördermittel- oder Rechtsberatung. Ob eine konkrete
                  Leistung im Einzelfall förderfähig ist, entscheidet immer die zuständige Stelle
                  (Krankenkasse, BAFA, Landesförderbank, Ministerium). Wir liefern auf Wunsch
                  Leistungsbeschreibung, Kostenvoranschlag und Nachweis­dokumentation, mit denen
                  du selbst oder deine Beratung den Antrag stellen kannst.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TABELLE */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Klare Trennung</span>
              <h2 className="section-title">
                Welche Leistungen{' '}
                <span className="gradient-text">förderlogisch sauber</span> sind
              </h2>
              <p className="section-subtitle">
                Wir machen transparent, was als Vermittlungsleistung gilt — und was als
                eigenständige Beratung oder Software, die separat geplant und nachgewiesen werden
                kann.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FoerderTable rows={foerderRows} />
          </ScrollReveal>
        </div>
      </section>

      {/* PROGRAMME */}
      <section className="section section--alt">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Relevante Programme</span>
              <h2 className="section-title">
                Diese Förderoptionen{' '}
                <span className="gradient-text">prüfen sich besonders</span>
              </h2>
              <p className="section-subtitle">
                Nicht jedes Programm passt zu jeder Einrichtung. Wir helfen einzuordnen, welche
                Kombination im Einzelfall sinnvoll und realistisch ist.
              </p>
            </div>
          </ScrollReveal>

          <div className="programs-grid">
            {programs.map((p, i) => (
              <ScrollReveal key={i} delay={(i % 3) + 1}>
                <div className="program-card">
                  <div className="program-header">
                    <h3>{p.title}</h3>
                    <span className="program-target">{p.target}</span>
                  </div>
                  <p className="program-desc">{p.description}</p>
                  <div className="program-relevance">
                    <strong>Für Medilane relevant:</strong> {p.relevance}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* UNSER PAKET */}
      <section className="section">
        <div className="container container--narrow">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">So unterstützen wir</span>
              <h2 className="section-title">
                Was du für{' '}
                <span className="gradient-text">deinen Förderantrag</span> bekommst
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <ul className="deliverable-list">
              <li>
                <FileText size={20} />
                <div>
                  <h4>Leistungsbeschreibung</h4>
                  <p>Inhaltliche und methodische Darstellung des Beratungs- bzw. Konzeptmoduls.</p>
                </div>
              </li>
              <li>
                <FileText size={20} />
                <div>
                  <h4>Maßnahmenziel und Kennzahlen</h4>
                  <p>Was soll erreicht werden — und woran wird Erfolg gemessen?</p>
                </div>
              </li>
              <li>
                <FileText size={20} />
                <div>
                  <h4>Kostenvoranschlag</h4>
                  <p>Transparente, nachvollziehbare Kalkulation für die zuständige Stelle.</p>
                </div>
              </li>
              <li>
                <FileText size={20} />
                <div>
                  <h4>Umsetzungs- und Zeitplan</h4>
                  <p>Klare Meilensteine, damit Förderlogik und Realität zusammenpassen.</p>
                </div>
              </li>
              <li>
                <FileText size={20} />
                <div>
                  <h4>Nachweisdokumentation</h4>
                  <p>Reports und Belege, mit denen du die Maßnahme abrechnen kannst.</p>
                </div>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final-cta-section">
        <div className="container">
          <ScrollReveal>
            <div className="final-cta-box">
              <h2>Förderfähigkeit gemeinsam prüfen</h2>
              <p>
                Schildere uns deine Situation — wir sagen ehrlich, welche Bestandteile fördernah
                aufgesetzt werden können und welche nicht. Ohne überzogene Versprechen.
              </p>
              <Link to="/kontakt?typ=einrichtung" className="btn btn--white btn--lg">
                Beratungsmodul anfragen
                <ExternalLink size={20} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
