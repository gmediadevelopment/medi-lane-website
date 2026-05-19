import { Link } from 'react-router-dom'
import {
  ArrowRight, LayoutDashboard, FileSpreadsheet, Bell, BarChart3,
  Building2, UserCheck, Settings2, Zap, Sparkles, AlertCircle,
  Mail, Files, TrendingUp,
} from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import Pillars from '../components/sections/Pillars'
import ProcessTimeline from '../components/sections/ProcessTimeline'
import ScrollReveal from '../components/ui/ScrollReveal'
import './DigitalePlattform.css'

const fragmenteProbleme = [
  { icon: <Mail size={20} />, text: 'Bewerbungen liegen in E-Mail-Postfächern' },
  { icon: <Files size={20} />, text: 'Gesprächsnotizen sind in Notizbüchern und Köpfen verteilt' },
  { icon: <AlertCircle size={20} />, text: 'Einarbeitung wird nicht systematisch nachverfolgt' },
  { icon: <Bell size={20} />, text: 'Probezeitrisiken werden zu spät erkannt' },
  { icon: <TrendingUp size={20} />, text: 'Kennzahlen zum Verbleib fehlen oder sind veraltet' },
]

const nutzergruppen = [
  {
    icon: <Building2 size={28} />,
    title: 'Einrichtungen',
    description:
      'Eine zentrale Sicht auf Stellen, Matches, Integrationen und Verbleib — statt Ordner, Mails und Bauchgefühl.',
    bullets: [
      'Arbeitgeberprofil und Stellenprofile',
      'Matching-Dashboard mit Risikohinweisen',
      'Check-in-Status und Frühwarnindikatoren',
      'KPI-Dashboard zu Verbleib und Fluktuation',
    ],
  },
  {
    icon: <UserCheck size={28} />,
    title: 'Pflegekräfte',
    description:
      'Strukturierte Selbstklärung statt unklare Versprechen. Profil, Präferenzen und Begleitung in einem System.',
    bullets: [
      'Profil und Wechselmotive',
      'Dienstplan- und Belastungspräferenzen',
      'Check-ins und Feedback im Verlauf',
      'Vertraulicher Ansprechpartner-Zugang',
    ],
  },
  {
    icon: <Settings2 size={28} />,
    title: 'Medilane',
    description:
      'Steuerung der Kandidatenpipeline, Match-Scoring, Check-in-Management und Qualitätssicherung.',
    bullets: [
      'Pipeline- und Mandantenmanagement',
      'Match-Scoring und Risikoanalyse',
      'Aufgaben- und Eskalations-Workflow',
      'Reporting und kontinuierliche Verbesserung',
    ],
  },
]

const widgets = [
  { icon: <LayoutDashboard size={20} />, label: 'Offene Matches' },
  { icon: <UserCheck size={20} />, label: 'Gestartete Pflegekräfte' },
  { icon: <Bell size={20} />, label: 'Check-in-Fälligkeiten' },
  { icon: <AlertCircle size={20} />, label: 'Risiko-Matches' },
  { icon: <TrendingUp size={20} />, label: 'Verbleib 30 / 100 / 180 Tage' },
  { icon: <BarChart3 size={20} />, label: 'Häufige Abbruchgründe' },
  { icon: <Zap size={20} />, label: 'Zeitarbeit-Reduktionspotenzial' },
  { icon: <FileSpreadsheet size={20} />, label: 'Einarbeitungsstatus' },
]

const phasen = [
  {
    marker: 'Phase 1',
    icon: <FileSpreadsheet size={22} />,
    title: 'Manuell validieren',
    description:
      'Wir starten mit strukturierten Fragebögen, CRM-Tabellen und sauberen PDF-Reports — kein Plattform-Overhead, dafür echte Daten.',
    bullets: [
      'Pflegekraft- und Arbeitgeber-Fragebögen',
      'Match-Berichte als PDF',
      'Check-ins manuell geführt',
    ],
  },
  {
    marker: 'Phase 2',
    icon: <LayoutDashboard size={22} />,
    title: 'Halbautomatisieren',
    description:
      'Digitale Fragebögen, automatisierte Reports, erste Dashboards — aus validierten Prozessen entsteht Software.',
    bullets: [
      'Web-Fragebögen mit Logikfeldern',
      'Generator für Match-Berichte',
      'Dashboard-Prototyp für Einrichtungen',
    ],
  },
  {
    marker: 'Phase 3',
    icon: <Sparkles size={22} />,
    title: 'Plattform ausbauen',
    description:
      'Match-Scoring, Frühwarnlogik, KPI-Dashboard, Einrichtungs- und Pflegekraftkonten — das volle CareOS-System.',
    bullets: [
      'Retention-Score und Frühwarnlogik',
      'Einrichtungs- und Pflegekraft-Konten',
      'Reporting für Träger und Förderer',
    ],
  },
]

export default function DigitalePlattform() {
  return (
    <div className="plattform-page">
      <PageHero
        badge="Medilane CareOS"
        title={
          <>
            Die digitale Plattform für Matching,<br />
            Wechselbegleitung und{' '}
            <span className="gradient-text">Personalstabilität</span>
          </>
        }
        subtitle="Medilane CareOS verbindet Fragebögen, Match-Berichte, Check-ins und KPI-Dashboards in einem System. Wir bauen sie schrittweise auf, aus validierten Prozessen — nicht aus Slides."
        actions={
          <>
            <Link to="/kontakt?typ=partner" className="btn btn--primary btn--lg">
              <Sparkles size={20} />
              Plattform-Pilot vormerken
            </Link>
            <Link to="/foerderung" className="btn btn--secondary btn--lg">
              Förderbezug ansehen
              <ArrowRight size={20} />
            </Link>
          </>
        }
        meta={
          <span className="plattform-status">
            <span className="status-dot" /> Status: Aufbau Phase 1 / 2
          </span>
        }
      />

      {/* WARUM */}
      <section className="section section--alt">
        <div className="container container--narrow">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Warum eine Plattform</span>
              <h2 className="section-title">
                Pflegepersonalprozesse sind heute{' '}
                <span className="gradient-text">fragmentiert</span>
              </h2>
              <p className="section-subtitle">
                Informationen verteilen sich auf Mails, Tabellen und Köpfe. Kritische Signale gehen
                verloren — und Kennzahlen, die Entscheidungen tragen würden, fehlen ganz.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <ul className="fragment-list">
              {fragmenteProbleme.map((p, i) => (
                <li key={i}>
                  {p.icon}
                  {p.text}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* NUTZERGRUPPEN */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Drei Perspektiven</span>
              <h2 className="section-title">
                Für jede Rolle eine{' '}
                <span className="gradient-text">eigene Sicht</span>
              </h2>
              <p className="section-subtitle">
                Einrichtungen, Pflegekräfte und das Medilane-Team arbeiten mit demselben System —
                jeweils mit der passenden Tiefe und Sichtbarkeit.
              </p>
            </div>
          </ScrollReveal>
          <Pillars pillars={nutzergruppen} />
        </div>
      </section>

      {/* DASHBOARD WIDGETS */}
      <section className="section section--alt">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Im Einrichtungs-Dashboard</span>
              <h2 className="section-title">
                Acht Kennzahlen, die heute{' '}
                <span className="gradient-text">meistens fehlen</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="widget-grid">
            {widgets.map((w, i) => (
              <ScrollReveal key={i} delay={(i % 4) + 1}>
                <div className="widget-card">
                  <div className="widget-icon">{w.icon}</div>
                  <span>{w.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENTWICKLUNGSPHASEN */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Entwicklung</span>
              <h2 className="section-title">
                Wir bauen die Plattform{' '}
                <span className="gradient-text">schrittweise auf</span>
              </h2>
              <p className="section-subtitle">
                Wir validieren erst die Methodik manuell und übersetzen sie dann in Software.
                So entsteht keine leere Plattform, sondern echtes Werkzeug.
              </p>
            </div>
          </ScrollReveal>
          <ProcessTimeline steps={phasen} />
        </div>
      </section>

      {/* PILOT BOX */}
      <section className="section section--alt">
        <div className="container container--narrow">
          <ScrollReveal>
            <div className="pilot-box">
              <h2>Pilot-Partner gesucht</h2>
              <p>
                Wir suchen Einrichtungen, Träger und Förderpartner, die das Modell früh mitgestalten
                wollen. Im Gegenzug bekommst du früheren Zugang, kannst Funktionsumfang mitgestalten
                und exklusive Pilotkonditionen.
              </p>
              <Link to="/kontakt?typ=partner" className="btn btn--primary">
                Pilot anfragen
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final-cta-section">
        <div className="container">
          <ScrollReveal>
            <div className="final-cta-box">
              <h2>Konzept und Roadmap als Vorabunterlage</h2>
              <p>
                Wir teilen das CareOS-Konzept transparent — Datenmodell, Funktionsumfang und
                Roadmap. Schreib uns für die aktuelle Version.
              </p>
              <Link to="/kontakt?typ=partner" className="btn btn--white btn--lg">
                Konzept anfordern
                <ArrowRight size={20} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
