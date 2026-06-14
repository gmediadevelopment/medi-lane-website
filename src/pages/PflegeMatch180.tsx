import { useState } from 'react'
import { Link } from 'react-router-dom'
import Eyebrow from '../components/sections/Eyebrow'
import AvailabilityBar from '../components/sections/AvailabilityBar'
import { getFunnelUrl } from '../lib/tracking'

// Grafiken — Angebotsseite Einrichtungen
import gfxHero from '../assets/photos/grafiken-angebotsseite-firmen/hero-match-stay-180-pflegekraft-einrichtung-querformat.png'
import gfxProblem from '../assets/photos/grafiken-angebotsseite-firmen/problem-fehlmatch-rote-kreuze-pflegekraft-leitung-querformat.png'
import gfxAnsatz from '../assets/photos/grafiken-angebotsseite-firmen/ansatz-passung-gruene-haken-pflegekraft-leitung-querformat.png'
import gfxMatchingSystem from '../assets/photos/grafiken-angebotsseite-firmen/matching-system-score-94-prozent-dimensionen-querformat.png'
import gfxMatchReport from '../assets/photos/grafiken-angebotsseite-firmen/match-report-dashboard-kandidaten-leitung-laptop-querformat.png'
import gfxBegleitung from '../assets/photos/grafiken-angebotsseite-firmen/wechselbegleitung-180-tage-timeline-querformat.png'
import gfxNutzen from '../assets/photos/grafiken-angebotsseite-firmen/nutzen-vier-vorteilskarten-festanstellung-kontinuitaet-querformat.png'

// Echte Pflege-Fotos
import heroPortrait from '../assets/photos/pflegerin-tablet-seniorin-rollstuhl-beratung-hochformat.jpg'
import momentFoto from '../assets/photos/pflegerin-senior-lachen-augenhoehe-warm-querformat.jpg'

import './PflegeMatch180.css'

const PRIMARY = '/kontakt?typ=einrichtung'
const FUNNEL = getFunnelUrl('website', 'organic', 'matchstay_pflegekraft')

/* ----------------------------- Daten ----------------------------- */

const trustItems = [
  'Festanstellung statt Zeitarbeit',
  'Matching auf beiden Seiten',
  'Match-Profil mit Match-Score',
  '180-Tage-Wechselbegleitung',
  'Verbleib statt Abschluss',
]

const problemPoints = [
  'Dienstplan und Realität klaffen auseinander',
  'Führung und Teamkultur passen nicht zur Erwartung',
  'Pendelweg oder Belastung werden unterschätzt',
  'Zusagen aus dem Bewerbungsgespräch halten nicht',
]

const ansatzPoints = [
  'Warum die Pflegekraft wechseln möchte',
  'Welche Bedingungen ihr wirklich wichtig sind',
  'Welche Punkte für sie nicht verhandelbar sind',
  'Welche Rahmenbedingungen deine Einrichtung real bietet',
]

const dimensions: [string, string][] = [
  ['Fachliche Passung', 'Passen Examen, Erfahrung und Einsatzbereich zur Stelle?'],
  ['Konditionspassung', 'Passen Arbeitszeit, Schichtmodell, Umfang, Pendelweg und Startzeitpunkt?'],
  ['Wechselgrund-Passung', 'Löst deine Stelle den eigentlichen Grund, aus dem die Pflegekraft wechseln möchte?'],
  ['Kultur- & Führungspassung', 'Passen Team, Kommunikation, Führung und Einarbeitung zu den Erwartungen?'],
  ['Verbleibsprognose', 'Welche Risiken zeichnen sich für die ersten 180 Tage ab — Pendelweg, Gegenangebot, offene Zusagen?'],
]

const deliverables = [
  {
    num: '01',
    title: 'Strukturierte Aufnahme deiner Stelle',
    desc: 'Wir erfassen deine offene Position nicht nur formal, sondern mit Blick auf die echte Arbeitsrealität.',
    bullets: ['Qualifikation, Umfang, Schichtmodell', 'Einarbeitung, Team, Leitungskultur', 'Einsatzbereich, Belastung, Grund der Vakanz'],
  },
  {
    num: '02',
    title: 'Tiefe Qualifizierung der Pflegekraft',
    desc: 'Neben Lebenslauf und Examen erfassen wir vor allem die entscheidenden Wechselkriterien.',
    bullets: ['Wechselgrund und No-Gos', 'Arbeitszeit-, Team- und Führungswünsche', 'Belastungsgrenzen und Startzeitpunkt'],
  },
  {
    num: '03',
    title: 'Match-Profil mit Match-Score',
    desc: 'Jede Vorstellung kommt mit einer nachvollziehbaren Einschätzung zur Passung — nicht nur einem Lebenslauf.',
    bullets: ['Fachliche, kulturelle und Konditionspassung', 'Mögliche Risikopunkte', 'Konkrete Gesprächsempfehlung'],
  },
  {
    num: '04',
    title: 'Weniger unpassende Gespräche',
    desc: 'Wir schicken dir nicht möglichst viele Profile, sondern die, bei denen sich ein Gespräch wirklich lohnt.',
    bullets: ['Weniger Abstimmungsaufwand', 'Schnellere Entscheidungen', 'Höhere Trefferquote'],
  },
  {
    num: '05',
    title: 'Begleitung bis zum Arbeitsbeginn',
    desc: 'Wir koordinieren Gespräche, halten beide Seiten im Austausch und dokumentieren wichtige Zusagen.',
    bullets: ['Klare Prozesssteuerung', 'Erwartungsabgleich vor Start', 'Verbindliche Absprachen'],
  },
]

const begleitungNodes = [
  { day: 'Vor Start', title: 'Startklar-Check', desc: 'Vertrag, Startdatum, erster Dienstplan, Einarbeitung, offene Zusagen.' },
  { day: 'Tag 7', title: 'Ankommens-Check', desc: 'Erste Eindrücke, Empfang, Start der Einarbeitung.' },
  { day: 'Tag 30', title: 'Erwartungsabgleich', desc: 'Getrenntes Feedback von Pflegekraft und Einrichtung.' },
  { day: 'Tag 60', title: 'Risiko-Check', desc: 'Abweichungen und Missverständnisse früh klären.' },
  { day: 'Tag 90', title: 'Halbzeitbericht', desc: 'Zufriedenheit, Verbleibsrisiko und mögliche Maßnahmen.' },
  { day: 'Tag 180', title: 'Abschlussdoku', desc: 'Kompakte Retentionsdokumentation mit Learnings.' },
]

const process = [
  { num: '01', title: 'Erstgespräch', desc: 'Wir lernen deine Einrichtung, deine offenen Stellen und deine Personalsituation kennen.' },
  { num: '02', title: 'Stellen- & Einrichtungsprofil', desc: 'Wir erstellen ein klares Suchprofil mit fachlichen Anforderungen und realistischen Rahmenbedingungen.' },
  { num: '03', title: 'Gewinnung & Qualifizierung', desc: 'Wir sprechen passende Pflegefachkräfte an und prüfen, ob ihre Wechselgründe zu deiner Stelle passen.' },
  { num: '04', title: 'Vorstellung mit Match-Profil', desc: 'Du erhältst geeignete Profile inklusive Match-Score, Erwartungsabgleich und Gesprächsempfehlung.' },
  { num: '05', title: 'Gespräch & Einstellung', desc: 'Wir koordinieren den Prozess und begleiten beide Seiten bis zum Arbeitsbeginn.' },
  { num: '06', title: '180-Tage-Begleitung', desc: 'Nach dem Start begleiten wir weiter, dokumentieren Check-ins und machen Risiken früh sichtbar.' },
]

const advantages = [
  'Weniger unpassende Kandidatenvorstellungen',
  'Höhere Transparenz vor dem ersten Gespräch',
  'Dokumentierte Erwartungen der Pflegekraft',
  'Besserer Abgleich zwischen Wunsch und Arbeitsrealität',
  'Frühwarnsystem in den ersten 180 Tagen',
  'Mehr Sicherheit bei der Besetzungsentscheidung',
  'Begleitung über den Arbeitsbeginn hinaus',
  'Bessere Grundlage für langfristigen Verbleib',
]

const fitFor = [
  'Stationäre Altenpflegeeinrichtungen',
  'Ambulante Pflegedienste',
  'Langzeit- und Tagespflege',
  'Einrichtungen mit wiederkehrendem Fachkräftebedarf',
  'Träger, die Frühfluktuation reduzieren wollen',
  'Häuser, die passende Gespräche statt Bewerbungsflut wollen',
]

const notFitFor = [
  'Wenn du möglichst viele Lebensläufe ohne Prüfung willst',
  'Wenn Stellen nicht realistisch beschrieben werden',
  'Wenn Rahmenbedingungen nicht transparent kommuniziert werden',
  'Wenn Rückmeldungen im Prozess zu lange dauern',
]

const faqItems = [
  {
    q: 'Was unterscheidet Medilane von klassischen Personalvermittlungen?',
    a: 'Wir vermitteln nicht nur nach Qualifikation und Verfügbarkeit. Wir erfassen die Wechselgründe der Pflegekraft, dokumentieren ihre Erwartungen und gleichen sie mit den tatsächlichen Bedingungen deiner Einrichtung ab — und begleiten beide Seiten 180 Tage nach dem Start.',
  },
  {
    q: 'Was ist der Match-Score?',
    a: 'Eine strukturierte Einschätzung der Passung zwischen Pflegekraft und Stelle. Er berücksichtigt fachliche Anforderungen, Arbeitsbedingungen, Wechselgründe, Kultur, Führung und Verbleibsrisiken. Der Score ersetzt kein Gespräch — er macht die Passung vorher transparent.',
  },
  {
    q: 'Was passiert, wenn eine Pflegekraft in der Probezeit kündigt?',
    a: 'Dann greift unsere Nachbesetzungslogik: Wir unterstützen dich bei der Nachbesetzung derselben Position. Voraussetzung ist, dass die im Matching dokumentierten Arbeitsbedingungen eingehalten wurden.',
  },
  {
    q: 'Ist die Vermittlung für Pflegekräfte wirklich kostenfrei?',
    a: 'Ja. Für Pflegekräfte ist die Vermittlung über Medilane vollständig kostenfrei — und genauso strukturiert wie für Einrichtungen.',
  },
  {
    q: 'Können wir mehrere Stellen oder eine feste Partnerschaft besprechen?',
    a: 'Gerne. Für mehrere offene Positionen, Exklusivmandate oder eine langfristige Zusammenarbeit finden wir das passende Modell im Erstgespräch.',
  },
  {
    q: 'Vermittelt Medilane auch Pflegehilfskräfte oder Leitungskräfte?',
    a: 'Zum Start liegt der Fokus auf Pflegefachkräften in Festanstellung. Weitere Rollen prüfen wir individuell.',
  },
]

/* ----------------------------- Seite ----------------------------- */

export default function PflegeMatch180() {
  const [open, setOpen] = useState<number>(0)

  return (
    <div className="pm-page">
      {/* HERO */}
      <section className="pm-hero">
        <div className="container">
          <div className="pm-hero__grid">
            <div className="pm-hero__copy">
              <div className="pm-hero__topline">
                <Eyebrow>Match &amp; Stay 180 · Für Einrichtungen</Eyebrow>
              </div>
              <h1 className="pm-hero__title">
                Pflegefachkräfte fest einstellen. Nicht nur besetzen — <em>passend</em> besetzen.
              </h1>
              <p className="pm-hero__sub">
                Medilane vermittelt Pflegefachkräfte in Festanstellung an Einrichtungen, ambulante
                Dienste und Anbieter der Langzeitpflege. Mit strukturiertem Matching auf beiden
                Seiten und integrierter 180-Tage-Wechselbegleitung — damit aus einer Einstellung
                eine stabile Besetzung wird.
              </p>
              <div className="pm-hero__cta">
                <Link to={PRIMARY} className="btn btn--primary btn--lg">
                  Kostenloses Erstgespräch vereinbaren <span className="arrow" aria-hidden="true">→</span>
                </Link>
                <a href="#matching" className="btn btn--ghost btn--lg">
                  So funktioniert das Matching →
                </a>
              </div>
              <p className="pm-hero__note">15 Minuten · Diskret · Unverbindlich</p>
              <div className="pm-hero__avail">
                <AvailabilityBar />
              </div>
            </div>

            <div className="pm-hero__image">
              <img
                src={heroPortrait}
                alt="Pflegefachkraft berät eine Seniorin im Rollstuhl mit einem Tablet"
              />
              <div className="pm-hero__image-overlay">
                <div className="avatar">PDL</div>
                <div className="who">
                  <strong>„Endlich Vorstellungen, bei denen sich das Gespräch lohnt."</strong>
                  <span>Pflegedienstleitung · stationäre Altenpflege</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE — Marken-Lockup */}
      <section className="pm-showcase-section">
        <div className="container">
          <div className="pm-showcase">
            <img
              src={gfxHero}
              alt="Medilane Match & Stay 180 — Pflegefachkraft und Einrichtungsleitung, verbunden durch ein geprüftes Match"
            />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="container">
          <div className="trust-strip__row">
            <span className="trust-strip__label">Match &amp; Stay 180</span>
            <div className="trust-strip__items">
              {trustItems.map(t => (
                <span key={t} className="trust-strip__item">
                  <span className="dot" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PROBLEM */}
      <section className="section section--soft">
        <div className="container">
          <div className="pm-feature">
            <div className="pm-feature__copy">
              <Eyebrow>Das Problem</Eyebrow>
              <h2 className="section__title pm-feature__title">
                Viele Einstellungen scheitern nicht an der Qualifikation.
              </h2>
              <p className="pm-feature__text">
                In der Pflege passt ein Lebenslauf oft auf dem Papier. Die eigentliche Frage ist:
                Passt die Stelle wirklich zu dem, was die Pflegekraft sucht?
              </p>
              <p className="pm-feature__text">
                Viele Wechsel entstehen nicht, weil Pflegekräfte ihren Beruf satthaben — sondern
                weil Dienstplan, Führung, Teamkultur, Pendelweg oder Belastung nicht mehr zu ihrer
                Lebensrealität passen. Bleiben diese Gründe ungeklärt, startet die Pflegekraft zwar
                — bleibt aber nicht.
              </p>
              <ul className="pm-checklist pm-checklist--muted">
                {problemPoints.map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
            <div className="pm-feature__media">
              <img src={gfxProblem} alt="Fehlende Passung: Pflegekraft und Einrichtung mit mehreren rot markierten Abweichungen" />
            </div>
          </div>
        </div>
      </section>

      {/* ANSATZ */}
      <section className="section">
        <div className="container">
          <div className="pm-feature pm-feature--reverse">
            <div className="pm-feature__media">
              <img src={gfxAnsatz} alt="Geprüfte Passung: Pflegekraft und Einrichtung mit grün bestätigten Übereinstimmungen" />
            </div>
            <div className="pm-feature__copy">
              <Eyebrow>Unser Ansatz</Eyebrow>
              <h2 className="section__title pm-feature__title">
                Wechselgrund-Matching statt reiner Lebenslaufvermittlung.
              </h2>
              <p className="pm-feature__text">
                Medilane vermittelt keine beliebigen Profile. Vor jeder Vorstellung dokumentieren
                wir beide Seiten — und gleichen sie strukturiert ab. So siehst du vor dem ersten
                Gespräch nicht nur, ob eine Pflegekraft fachlich geeignet ist, sondern ob deine
                Stelle den Grund für ihren Wechsel wirklich lösen kann.
              </p>
              <ul className="pm-checklist">
                {ansatzPoints.map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MATCHING-SYSTEM (dunkel) */}
      <section className="section section--ink" id="matching">
        <div className="container">
          <div className="pm-system">
            <div className="pm-system__copy">
              <Eyebrow>Unser Matching-System</Eyebrow>
              <h2 className="pm-system__title">
                Ein Match-Score über mehrere Passungs-Dimensionen.
              </h2>
              <p className="pm-system__lead">
                Der Medilane Match-Score ist keine automatische Entscheidung, sondern eine
                strukturierte Entscheidungshilfe — ergänzt durch persönliche Prüfung, Gespräch und
                ein klares „Warum".
              </p>
              <div className="pm-system__dims">
                {dimensions.map(([label, text]) => (
                  <div key={label} className="pm-system__dim">
                    <span className="pm-system__dim-label">{label}</span>
                    <span className="pm-system__dim-text">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pm-system__media">
              <img
                src={gfxMatchingSystem}
                alt="Match-Score von 94 Prozent über die Dimensionen Qualifikation, Arbeitszeit, Team, Führung, Pendelweg und Verbleib"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WAS DU ERHÄLTST */}
      <section className="section section--soft">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Was du mit Medilane erhältst</Eyebrow>
            <h2 className="section__title">
              Kein Profilstapel. Ein begründeter Match — bis zum Arbeitsbeginn begleitet.
            </h2>
            <p className="section__lead">
              Du bekommst eine strukturierte Einschätzung zur Passung, nicht nur einen Lebenslauf
              — inklusive Match-Score, Erwartungsabgleich und Gesprächsempfehlung.
            </p>
          </div>

          <div className="pm-showcase pm-showcase--inset">
            <img
              src={gfxMatchReport}
              alt="Match-Report-Ansicht mit Top-Kandidaten, 98 Prozent Match und einer Für-dich-erledigt-Checkliste"
            />
          </div>

          <div className="pm-deliverables">
            {deliverables.map(d => (
              <div key={d.num} className="pillar">
                <span className="pillar__num">
                  <span className="dot" />
                  {d.num}
                </span>
                <h3 className="pillar__title">{d.title}</h3>
                <p className="pillar__desc">{d.desc}</p>
                <ul className="pillar__list">
                  {d.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOMENT BREAK */}
      <section className="home-moment">
        <div className="container container--wide">
          <div className="home-moment__inner">
            <img
              src={momentFoto}
              alt="Pflegerin und Bewohner lachen gemeinsam auf Augenhöhe"
            />
            <div className="home-moment__overlay">
              <p className="home-moment__quote">
                Eine gute Besetzung sieht man nicht am ersten Tag.<br />
                Sondern am <em>180.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 180-TAGE-WECHSELBEGLEITUNG */}
      <section className="section">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Die 180-Tage-Wechselbegleitung</Eyebrow>
            <h2 className="section__title">
              Eine Vermittlung endet nicht mit der Unterschrift.
            </h2>
            <p className="section__lead">
              Nach Arbeitsbeginn begleiten wir Pflegekraft und Einrichtung 180 Tage weiter — um
              frühe Reibungspunkte zu erkennen und Risiken sichtbar zu machen, bevor aus kleinen
              Problemen eine Kündigung wird.
            </p>
          </div>

          <div className="pm-showcase pm-showcase--inset">
            <img
              src={gfxBegleitung}
              alt="Zeitstrahl der 180-Tage-Wechselbegleitung mit Stationen nach 7, 30, 60, 90 und 180 Tagen"
            />
          </div>

          <div className="pm-timeline">
            {begleitungNodes.map((n, i) => (
              <div
                key={n.day}
                className={`pm-timeline__node ${i === 0 || i === begleitungNodes.length - 1 ? 'pm-timeline__node--active' : ''}`}
              >
                <span className="pm-timeline__day">{n.day}</span>
                <span className="pm-timeline__dot" />
                <span className="pm-timeline__title">{n.title}</span>
                <span className="pm-timeline__desc">{n.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="section section--soft">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Der Ablauf der Zusammenarbeit</Eyebrow>
            <h2 className="section__title">In sechs Schritten zur stabilen Besetzung.</h2>
          </div>
          <div className="pm-process">
            {process.map(s => (
              <div key={s.num} className="pm-step">
                <span className="pm-step__num">{s.num}</span>
                <h3 className="pm-step__title">{s.title}</h3>
                <p className="pm-step__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEHRWERT */}
      <section className="section">
        <div className="container">
          <div className="pm-feature pm-feature--reverse">
            <div className="pm-feature__media">
              <img
                src={gfxNutzen}
                alt="Vier Vorteile auf einen Blick: langfristige Festanstellung, Passung zu Mensch und Team, Stabilität und weniger Fluktuation"
              />
            </div>
            <div className="pm-feature__copy">
              <Eyebrow>Dein Mehrwert als Einrichtung</Eyebrow>
              <h2 className="section__title pm-feature__title">
                Du gewinnst nicht nur eine Pflegekraft — sondern einen Prozess auf Verbleib.
              </h2>
              <ul className="pm-checklist pm-checklist--two">
                {advantages.map(a => <li key={a}>{a}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FÜR WEN GEEIGNET */}
      <section className="section section--soft">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Passt das zu euch?</Eyebrow>
            <h2 className="section__title">
              Für Häuser, die langfristig gewinnen wollen — nicht kurzfristig austauschen.
            </h2>
          </div>
          <div className="pm-fit">
            <div className="pm-fit__card pm-fit__card--yes">
              <span className="pm-fit__label">
                <span className="dot" />Medilane passt, wenn …
              </span>
              <ul className="pm-fit__list">
                {fitFor.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
            <div className="pm-fit__card pm-fit__card--no">
              <span className="pm-fit__label">Medilane passt nicht, wenn …</span>
              <ul className="pm-fit__list pm-fit__list--no">
                {notFitFor.map(f => <li key={f}>{f}</li>)}
              </ul>
              <p className="pm-fit__note">
                Gutes Matching braucht Klarheit auf beiden Seiten — realistische Stellen,
                transparente Rahmenbedingungen, zeitnahe Rückmeldungen.
              </p>
            </div>
          </div>

          <div className="pm-nurse-note">
            <p>
              <strong>Für Pflegekräfte ist die Vermittlung kostenfrei.</strong> Auch sie erhalten
              keinen Strauß beliebiger Jobs, sondern passende Optionen mit transparenten Bedingungen.
            </p>
            <a href={FUNNEL} className="pm-nurse-note__link">
              Du bist Pflegekraft? Wechselprofil erstellen <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Häufige Fragen</Eyebrow>
            <h2 className="section__title">Was Einrichtungen am häufigsten fragen.</h2>
          </div>
          <div className="faq">
            {faqItems.map((it, i) => {
              const isOpen = open === i
              return (
                <div key={i} className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
                  <button
                    className="faq__btn"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq__q">{it.q}</span>
                    <span className="faq__toggle" aria-hidden="true">+</span>
                  </button>
                  <p className="faq__a">{it.a}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="container">
          <div className="final-cta">
            <div>
              <h2 className="final-cta__title">
                Lass uns prüfen, ob Match &amp; Stay 180 zu deiner Einrichtung passt.
              </h2>
              <p className="final-cta__sub">
                Im kostenlosen Erstgespräch klären wir deine offenen Stellen, deine
                Rahmenbedingungen und ob Medilane der passende Vermittlungspartner ist —
                unverbindlich und vertraulich.
              </p>
            </div>
            <div className="final-cta__col">
              <Link to={PRIMARY} className="btn btn--inverse btn--lg">
                <span>Kostenloses Erstgespräch vereinbaren</span>
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <span className="final-cta__note">Antwort innerhalb von 24 Stunden · info@medi-lane.de</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
