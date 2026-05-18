import { Link } from 'react-router-dom'
import {
  ArrowRight, Briefcase, Calendar, Activity, Users, GraduationCap, Ban,
  ClipboardList, Building2, CheckCircle, AlertTriangle, XCircle, Sparkles,
} from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import MatchingDimensions from '../components/sections/MatchingDimensions'
import ScrollReveal from '../components/ui/ScrollReveal'
import './MatchingSystem.css'

const dimensions = [
  {
    icon: <Briefcase size={24} />,
    title: 'Fachliche Passung',
    examples: ['Ausbildung', 'Anerkennung', 'Fachbereich', 'Dokumentationssysteme', 'Zusatzqualifikationen'],
  },
  {
    icon: <Calendar size={24} />,
    title: 'Organisatorische Passung',
    examples: ['Vollzeit / Teilzeit', 'Früh / Spät / Nacht', 'Wochenenden', 'Fahrtweg', 'Wunschdienste'],
  },
  {
    icon: <Activity size={24} />,
    title: 'Belastungs-Passung',
    examples: ['Pflegegrade', 'Demenzbereich', 'Schwerstpflege', 'Tourendienst', 'Dokumentationsaufwand'],
  },
  {
    icon: <Users size={24} />,
    title: 'Kultur- und Führungspassung',
    examples: ['Führungsstil', 'Feedbackkultur', 'Teamstruktur', 'Konfliktverhalten', 'Selbständigkeit'],
  },
  {
    icon: <GraduationCap size={24} />,
    title: 'Entwicklungs-Passung',
    examples: ['Weiterbildung', 'Fachkarriere', 'Praxisanleitung', 'Wundmanagement', 'PDL-Perspektive'],
  },
  {
    icon: <Ban size={24} />,
    title: 'No-Go-Passung',
    examples: ['Einspringen aus dem Frei', 'Geteilte Dienste', 'Ungeplante Dienste', 'Fehlende Einarbeitung', 'Bestimmte Fachbereiche'],
  },
]

const pflegekraftKategorien = [
  { title: 'Qualifikation und Erfahrung', desc: 'Ausbildung, Berufsjahre, sicher beherrschte Tätigkeiten und Fachbereiche.' },
  { title: 'Wechselmotive', desc: 'Was soll sich verbessern? Was darf sich nicht wiederholen?' },
  { title: 'Dienstplanwünsche', desc: 'Bevorzugte Dienste, ausgeschlossene Zeiten, Planbarkeit, Wochenenden.' },
  { title: 'Belastungsgrenzen', desc: 'Dauerhaft belastende Situationen, ausgeschlossene Fachbereiche.' },
  { title: 'Führungserwartung', desc: 'Anleitung, Feedback, Eigenverantwortung, Kommunikationsstil.' },
  { title: 'Teamkultur', desc: 'Bevorzugtes Teamumfeld — ruhig, familiär, professionell-distanziert.' },
  { title: 'Einarbeitung', desc: 'Was es in den ersten Wochen braucht, um sicher anzukommen.' },
  { title: 'No-Gos', desc: 'Punkte, die zu einer schnellen Kündigung führen würden.' },
  { title: 'Entwicklung', desc: 'Gewünschte Qualifikationen, Rollen, Fachthemen.' },
]

const arbeitgeberKategorien = [
  { title: 'Reale Dienstplanbedingungen', desc: 'Planungsvorlauf, Einspringlogik, Wochenende, Nachtdienste, Flexibilität.' },
  { title: 'Einarbeitungsstruktur', desc: 'Plan, Mentor, feste Ansprechpartner und Zeit für Einarbeitung.' },
  { title: 'Teamprofil', desc: 'Zusammensetzung, Konflikte, Stärken, Stabilität.' },
  { title: 'Führungsstil', desc: 'Feedbackrhythmus, Entscheidungswege, Erreichbarkeit.' },
  { title: 'Belastungsprofil', desc: 'Pflegegrade, Dokumentation, Ausfallquote, körperliche Belastung.' },
  { title: 'Flexibilität', desc: 'Realistisch mögliche Arbeitszeitmodelle, nicht erfüllbare Wünsche.' },
  { title: 'Historische Abbrüche', desc: 'Warum sind letzte Pflegekräfte gegangen, in welcher Phase?' },
  { title: 'Arbeitgeberversprechen', desc: 'Welche Vorteile sind sicher, welche nur eingeschränkt möglich?' },
]

const matchLevels = [
  {
    icon: <CheckCircle size={28} />,
    level: 'Starker Match',
    color: 'good',
    desc: 'Keine wesentlichen Risiken sichtbar. Vermittlung wird empfohlen, Vorstellung kann direkt erfolgen.',
  },
  {
    icon: <Sparkles size={28} />,
    level: 'Guter Match mit Klärung',
    color: 'good',
    desc: 'Grundsätzlich passend, aber einzelne Punkte sollten vor dem Vorstellungsgespräch geklärt werden.',
  },
  {
    icon: <AlertTriangle size={28} />,
    level: 'Kritischer Match',
    color: 'warn',
    desc: 'Risiko sichtbar, aber steuerbar. Startbedingungen müssen schriftlich fixiert werden.',
  },
  {
    icon: <XCircle size={28} />,
    level: 'Nicht empfehlenswert',
    color: 'bad',
    desc: 'Hohes Abbruchrisiko. Wir vermitteln nicht oder schlagen Anpassungen auf einer der beiden Seiten vor.',
  },
]

export default function MatchingSystem() {
  return (
    <div className="matching-page">
      <PageHero
        badge="Methodik"
        title={
          <>
            Matching, das über Lebenslauf<br />
            und Gehalt <span className="gradient-text">hinausgeht</span>
          </>
        }
        subtitle="In der Pflege entscheidet nicht nur die Qualifikation über eine erfolgreiche Besetzung. Wir matchen auf sechs Dimensionen — und machen die kritischen Punkte vor der Vorstellung sichtbar."
        actions={
          <>
            <Link to="/kontakt?typ=einrichtung" className="btn btn--primary btn--lg">
              <ClipboardList size={20} />
              Matching-Prozess kennenlernen
            </Link>
            <Link to="/pflegematch-180" className="btn btn--secondary btn--lg">
              Zurück zum Kernangebot
              <ArrowRight size={20} />
            </Link>
          </>
        }
      />

      {/* 6 DIMENSIONEN */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Die sechs Match-Dimensionen</span>
              <h2 className="section-title">
                Sechs Achsen,{' '}
                <span className="gradient-text">eine Entscheidungsgrundlage</span>
              </h2>
              <p className="section-subtitle">
                Eine hohe Gesamtpassung entsteht erst, wenn harte und weiche Faktoren zusammenpassen.
                Jede Dimension wird einzeln bewertet und im Match-Bericht dokumentiert.
              </p>
            </div>
          </ScrollReveal>
          <MatchingDimensions dimensions={dimensions} />
        </div>
      </section>

      {/* PFLEGEKRAFT-FRAGEBOGEN */}
      <section className="section section--alt">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Pflegekraft-Fragebogen</span>
              <h2 className="section-title">
                Was wir über{' '}
                <span className="gradient-text">die Pflegekraft</span> erfassen
              </h2>
              <p className="section-subtitle">
                Kombination aus Skalen, Auswahlfeldern und kurzen Freitexten — kurz genug, um
                ausgefüllt zu werden, detailliert genug für eine echte Passungsanalyse.
              </p>
            </div>
          </ScrollReveal>

          <div className="kategorien-grid">
            {pflegekraftKategorien.map((k, i) => (
              <ScrollReveal key={i} delay={(i % 3) + 1}>
                <div className="kategorie-card kategorie-card--primary">
                  <h3>{k.title}</h3>
                  <p>{k.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ARBEITGEBER-FRAGEBOGEN */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Arbeitgeber-Fragebogen</span>
              <h2 className="section-title">
                Was wir über{' '}
                <span className="gradient-text">die Einrichtung</span> erfassen
              </h2>
              <p className="section-subtitle">
                Wir nehmen nur Arbeitgeberversprechen in den Match auf, die im Alltag haltbar sind.
                Dafür braucht es die ehrliche Bestandsaufnahme.
              </p>
            </div>
          </ScrollReveal>

          <div className="kategorien-grid">
            {arbeitgeberKategorien.map((k, i) => (
              <ScrollReveal key={i} delay={(i % 3) + 1}>
                <div className="kategorie-card kategorie-card--amber">
                  <h3>{k.title}</h3>
                  <p>{k.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* AMPELLOGIK */}
      <section className="section section--alt">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Bewertungslogik</span>
              <h2 className="section-title">
                Klare Ampel statt{' '}
                <span className="gradient-text">Bauchgefühl</span>
              </h2>
              <p className="section-subtitle">
                Jeder Match landet in einer von vier Stufen. Das ist keine automatische Entscheidung,
                sondern eine strukturierte Entscheidungsgrundlage für Sie.
              </p>
            </div>
          </ScrollReveal>

          <div className="match-levels">
            {matchLevels.map((m, i) => (
              <ScrollReveal key={i} delay={(i % 4) + 1}>
                <div className={`match-level match-level--${m.color}`}>
                  <div className="match-level-icon">{m.icon}</div>
                  <h3>{m.level}</h3>
                  <p>{m.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WARUM */}
      <section className="section">
        <div className="container container--narrow">
          <ScrollReveal>
            <div className="warum-block">
              <div className="warum-icon">
                <Building2 size={32} />
              </div>
              <h2>Warum dieser Aufwand?</h2>
              <p>
                Fehlbesetzungen entstehen oft, wenn beide Seiten formal zusammenpassen, aber im
                Alltag unterschiedliche Erwartungen haben. Das Matching-System macht diese
                Erwartungen <strong>vor</strong> der Vorstellung sichtbar — nicht erst in der
                Probezeit, wenn die Kosten schon entstanden sind.
              </p>
              <p>
                Konkret heißt das: Sie führen weniger, aber bessere Vorstellungsgespräche, treffen
                informierte Entscheidungen und können kritische Punkte direkt im Interview
                ansprechen statt sie zu übersehen.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final-cta-section">
        <div className="container">
          <ScrollReveal>
            <div className="final-cta-box">
              <h2>Matching-Prozess kennenlernen</h2>
              <p>
                Im Erstgespräch zeigen wir die Fragebögen und einen Beispiel-Match-Bericht.
                So sehen Sie konkret, was Sie bekommen, bevor Sie sich festlegen.
              </p>
              <Link to="/kontakt?typ=einrichtung" className="btn btn--white btn--lg">
                Beispiel anfordern
                <ArrowRight size={20} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
