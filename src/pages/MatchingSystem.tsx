import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Eyebrow from '../components/sections/Eyebrow'
import AvailabilityBar from '../components/sections/AvailabilityBar'
import ComparisonTable from '../components/sections/ComparisonTable'

// Grafiken — Matching-System
import gfxMatching from '../assets/photos/grafiken-matching-system/matching-pflegekraft-einrichtung-tablet-querformat.png'
import gfxBericht from '../assets/photos/grafiken-matching-system/matchbericht-zwei-leitungen-tablet-pruefen-querformat.png'
import gfxVertrauen from '../assets/photos/grafiken-matching-system/vertrauen-vertrauliche-kommunikation-geschuetzt-querformat.png'
import gfxDashboard from '../assets/photos/grafiken-matching-system/dashboard-matchvorschlaege-leitung-pflegeszene-querformat.png'
import gfxIntegration from '../assets/photos/grafiken-matching-system/integration-pflegekraefte-willkommen-bindung-querformat.png'

// Echte Pflege-Fotos
import heroPortrait from '../assets/photos/portrait-pflegerin-tuerkis-studio-weisser-hintergrund-hochformat.jpg'
import momentFoto from '../assets/photos/augenhoehe-kaffeetafel-zwei-frauen-wohnzimmer-querformat.jpg'

import './MatchingSystem.css'

const PRIMARY = '/kontakt?typ=einrichtung'

/* ----------------------------- Daten ----------------------------- */

const trustItems = [
  'Passungsabgleich auf beiden Seiten',
  '6 Match-Dimensionen',
  'Strukturierter Matchbericht',
  'Vertrauliches Freigabemodell',
  'Unverbindlich eintragen',
]

const mismatches = [
  { kraft: 'sucht mehr Dienstplansicherheit', haus: 'braucht aber hohe Flexibilität' },
  { kraft: 'will einen stabilen Neustart', haus: 'ist selbst in angespannter Personallage' },
  { kraft: 'legt Wert auf feste Ansprechpartner', haus: 'arbeitet eher eigenverantwortlich' },
]

const kraftGibt = [
  'Welche Arbeitsbedingungen sie sucht',
  'Welche Erfahrungen sich nicht wiederholen sollen',
  'Welche Dienstmodelle für sie funktionieren',
  'Welche Team- und Führungsstruktur sie braucht',
  'Welche Ausschlusskriterien bestehen',
  'Erwartungen an Einarbeitung & Entwicklung',
]

const hausErfasst = [
  'Welche Stelle konkret zu besetzen ist',
  'Welche fachlichen Anforderungen bestehen',
  'Wie Dienstplanung & Schichtmodell aussehen',
  'Wie Team, Einarbeitung & Führung organisiert sind',
  'Welche Belastungsfaktoren real vorhanden sind',
  'Welche Entwicklungsmöglichkeiten es gibt',
]

const dimensions = [
  { num: '01', title: 'Fachliche Passung', desc: 'Abschluss, Anerkennung, Erfahrung, Fachbereiche, Zusatzqualifikationen und gewünschter Verantwortungsbereich.' },
  { num: '02', title: 'Arbeitszeit & Rahmen', desc: 'Pensum, Schichtmodell, Wochenend- und Nachtdienste, Dienstplanvorlauf, Einspringen, Pendelzeit, Startdatum.' },
  { num: '03', title: 'Team- & Kulturfit', desc: 'Teamgröße, Kommunikationsstil, Konfliktumgang, Eigenverantwortung, Wunsch nach Struktur und Wertschätzung.' },
  { num: '04', title: 'Führung & Kommunikation', desc: 'Feedback, klare Zuständigkeiten, Nähe der Leitung, Umgang mit Kritik — einer der stärksten Bindungsfaktoren.' },
  { num: '05', title: 'Wechselgründe & No-Gos', desc: 'Was soll sich auf keinen Fall wiederholen? Ausschlusskriterien entscheiden oft über den langfristigen Verbleib.' },
  { num: '06', title: 'Belastung & Stabilität', desc: 'Sucht die Pflegekraft Entwicklung oder Stabilität? Passt die Stelle zur aktuellen Situation und Wechselmotivation?' },
]

const berichtEnthaelt = [
  'Wer die Pflegekraft ist',
  'Qualifikation & Erfahrung',
  'Warum sie zur Stelle passt',
  'Übereinstimmende Rahmenbedingungen',
  'Besondere Stärken',
  'Klärungspunkte fürs Gespräch',
  'Faktoren für langfristige Zusammenarbeit',
]

const berichtPassend = [
  'Mehrjährige Erfahrung im relevanten Bereich',
  'Pensum entspricht dem Stellenprofil',
  'Keine Einschränkungen beim Schichtmodell',
  'Hoher Wunsch nach langfristiger Anstellung',
  'Gute Übereinstimmung mit der Einarbeitung',
]

const berichtKlaeren = [
  'Gewünschte Dienstplansicherheit',
  'Konkrete Entwicklungsmöglichkeiten',
  'Umgang mit kurzfristigen Ausfällen',
  'Ansprechpartner während der Einarbeitung',
]

const process = [
  { num: '01', title: 'Einrichtung unverbindlich eintragen', desc: 'Du hinterlegst deine Einrichtung, offene Stellen und die wichtigsten Rahmenbedingungen — ohne Verpflichtung.' },
  { num: '02', title: 'Arbeitgeberprofil erstellen', desc: 'Wir erfassen gemeinsam Fachbereich, Arbeitszeiten, Team, Führung, Einarbeitung und Entwicklungsmöglichkeiten.' },
  { num: '03', title: 'Passende Pflegekräfte erhalten', desc: 'Sobald eine Pflegekraft passen könnte, bekommst du einen Matchvorschlag mit strukturierter Einschätzung.' },
  { num: '04', title: 'Matchbericht prüfen', desc: 'Kurzprofil, fachliche und organisatorische Passung, Team-/Kulturfit, Klärungspunkte und unsere Empfehlung.' },
  { num: '05', title: 'Kennenlernen führen', desc: 'Sind beide Seiten interessiert, wird ein Gespräch vereinbart — deutlich gezielter dank Matchbericht.' },
  { num: '06', title: 'Einstellung & Wechselbegleitung', desc: 'Auf Wunsch begleiten wir die sensible Anfangsphase und übertragen die Erwartungen aus dem Matching in die Praxis.' },
]

const vorteile = [
  'Weniger unpassende Gespräche',
  'Weniger Abstimmungsaufwand',
  'Bessere Gesprächsvorbereitung',
  'Klarere Entscheidungsgrundlagen',
  'Mehr Sicherheit vor der Einstellung',
  'Weniger Fehlbesetzungen',
]

const signale = [
  'Wir interessieren uns für deine Erwartungen',
  'Wir nehmen deine Wechselgründe ernst',
  'Wir sprechen kritische Punkte offen an',
  'Wir wollen langfristige Zusammenarbeit statt schneller Besetzung',
]

const comparisonRows = [
  { label: 'Auswahl', classic: 'Sucht verfügbare Kandidaten', medilane: 'Prüft fachliche, organisatorische und menschliche Passung' },
  { label: 'Prüfung', classic: 'Meist Qualifikation und Grunddaten', medilane: 'Berücksichtigt Wechselgründe und Ausschlusskriterien' },
  { label: 'Übergabe', classic: 'Profile werden weitergeleitet', medilane: 'Strukturierter Matchbericht mit Chancen und Risiken' },
  { label: 'Fokus', classic: 'Häufig schnelle Besetzung', medilane: 'Passung und langfristige Bindung' },
  { label: 'Risiken', classic: 'Werden oft erst im Alltag sichtbar', medilane: 'Werden vor dem Gespräch transparent benannt' },
  { label: 'Nach der Einstellung', classic: 'Prozess endet meist', medilane: 'Auf Wunsch Wechselbegleitung in der Anfangsphase' },
]

const fitFor = [
  'Stationäre Pflegeeinrichtungen',
  'Ambulante Pflegedienste',
  'Kliniken & Reha-Einrichtungen',
  'Tagespflege & Behindertenhilfe',
  'Spezialisierte Pflegebereiche',
  'Private, kirchliche & gemeinnützige Träger',
]

const fitSignals = [
  'Klassische Anzeigen bringen zu wenig passende Bewerbungen',
  'Bewerbungen passen fachlich oder organisatorisch oft nicht',
  'Neue Mitarbeitende bleiben nicht langfristig',
  'Die Probezeit ist immer wieder kritisch',
  'Das Team ist durch offene Stellen belastet',
  'Es fehlt ein strukturierter Passungs-Check',
]

const faqItems = [
  {
    q: 'Entsteht durch die Eintragung eine Verpflichtung?',
    a: 'Nein. Die Eintragung deiner Einrichtung ist zunächst unverbindlich. Du hinterlegst dein Profil und kannst passende Matchvorschläge erhalten. Erst wenn ein konkreter Prozess starten soll, stimmen wir die nächsten Schritte gemeinsam ab.',
  },
  {
    q: 'Bekommen wir sofort Bewerbungen?',
    a: 'Medilane arbeitet nicht mit beliebigen Massenprofilen. Du erhältst passende Vorschläge, wenn eine Pflegekraft wirklich zu deinen Anforderungen passt. Das können weniger Vorschläge sein als bei klassischen Bewerberdatenbanken — dafür mit deutlich höherer Relevanz.',
  },
  {
    q: 'Müssen wir sensible interne Informationen offenlegen?',
    a: 'Für ein gutes Matching hilft Ehrlichkeit — du musst dich aber nicht negativ darstellen. Wichtig ist ein realistisches Arbeitgeberprofil. Gibt es aktuell Herausforderungen bei Dienstplanung, Teamstabilität oder Einarbeitung, können diese professionell eingeordnet werden. Je realistischer die Angaben, desto geringer das Risiko späterer Enttäuschungen.',
  },
  {
    q: 'Was passiert mit vertraulichen Angaben der Pflegekraft?',
    a: 'Sensible Informationen werden nicht ungefiltert weitergegeben. Medilane arbeitet mit einem Vertrauens- und Freigabemodell. Für deine Einrichtung werden relevante Punkte professionell und arbeitsbezogen aufbereitet, ohne persönliche Details unnötig offenzulegen.',
  },
  {
    q: 'Können wir selbst entscheiden, ob wir eine Pflegekraft kennenlernen?',
    a: 'Ja. Du erhältst einen Matchvorschlag und entscheidest selbst, ob du den Prozess starten möchtest.',
  },
  {
    q: 'Hilft Medilane auch nach der Einstellung?',
    a: 'Ja. Optional übernimmt Medilane die Wechselbegleitung. Dadurch werden Erwartungen, Einarbeitung und mögliche Anfangsprobleme strukturiert begleitet — gerade in den ersten Wochen hilft das, Unsicherheiten früh zu erkennen und die Bindung zu stärken.',
  },
]

/* ----------------------------- Seite ----------------------------- */

export default function MatchingSystem() {
  const [open, setOpen] = useState<number>(0)

  useEffect(() => {
    const prevTitle = document.title
    document.title = 'Medilane Matching-System für Pflegeeinrichtungen | Passende Pflegekräfte finden'
    const meta = document.querySelector('meta[name="description"]')
    const prevDesc = meta?.getAttribute('content') ?? null
    if (meta) {
      meta.setAttribute(
        'content',
        'Das Medilane Matching-System gleicht Qualifikation, Arbeitsbedingungen, Teamstruktur, Wechselgründe und Erwartungen systematisch ab — damit aus Bewerbungen langfristige Arbeitsverhältnisse werden.',
      )
    }
    return () => {
      document.title = prevTitle
      if (meta && prevDesc !== null) meta.setAttribute('content', prevDesc)
    }
  }, [])

  return (
    <div className="ms-page">
      {/* HERO */}
      <section className="hero hero--b">
        <div className="container">
          <div className="hero__grid">
            <div>
              <div className="hero__topline">
                <Eyebrow>Matching-System · Für Einrichtungen</Eyebrow>
              </div>
              <h1 className="hero__title">
                Pflegekräfte finden, die wirklich zu deiner Einrichtung <em>passen</em>.
              </h1>
              <p className="hero__sub">
                Medilane gleicht Qualifikation, Arbeitsbedingungen, Teamstruktur, Wechselgründe und
                Erwartungen systematisch ab — auf beiden Seiten. Damit aus Bewerbungen nicht nur
                Einstellungen, sondern langfristige Arbeitsverhältnisse werden.
              </p>
              <div className="hero__cta">
                <Link to={PRIMARY} className="btn btn--primary btn--lg">
                  Einrichtung unverbindlich eintragen <span className="arrow" aria-hidden="true">→</span>
                </Link>
                <a href="#matchbericht" className="btn btn--ghost btn--lg">
                  Beispiel-Matchbericht ansehen →
                </a>
              </div>
              <p className="hero__note">Unverbindlich · Keine Bewerberflut · Keine unpassenden Profile</p>
              <div className="hero__avail">
                <AvailabilityBar />
              </div>
            </div>

            <div className="hero__image">
              <img
                src={heroPortrait}
                alt="Porträt einer Pflegefachkraft vor neutralem Hintergrund"
              />
              <div className="hero__image-overlay">
                <div className="avatar">EL</div>
                <div className="who">
                  <strong>„Endlich Gespräche, die wirklich passen — statt Profile zu sichten."</strong>
                  <span>Einrichtungsleitung · stationäre Pflege</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="container">
          <div className="trust-strip__row">
            <span className="trust-strip__label">Matching-System</span>
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
          <div className="section__head section__head--center">
            <Eyebrow>Warum Einstellungen zu früh scheitern</Eyebrow>
            <h2 className="section__title">
              Nicht jede Bewerbung löst dein Personalproblem.
            </h2>
            <p className="section__lead">
              In der Pflege scheitern Besetzungen selten an der Qualifikation — viel häufiger an
              unausgesprochenen Erwartungen. Auf dem Papier passt eine Bewerbung. In der Praxis
              entstehen Frust, Missverständnisse oder ein erneuter Wechsel.
            </p>
          </div>
          <div className="ms-mismatch">
            {mismatches.map(m => (
              <div key={m.kraft} className="ms-mismatch__card">
                <div className="ms-mismatch__side">
                  <span className="ms-mismatch__who">Die Pflegekraft</span>
                  <span className="ms-mismatch__text">{m.kraft}</span>
                </div>
                <span className="ms-mismatch__vs" aria-hidden="true">≠</span>
                <div className="ms-mismatch__side">
                  <span className="ms-mismatch__who">Die Einrichtung</span>
                  <span className="ms-mismatch__text">{m.haus}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LÖSUNG — DAS MATCHING-SYSTEM */}
      <section className="section">
        <div className="container">
          <div className="ms-feature">
            <div className="ms-feature__copy">
              <Eyebrow>Das Medilane Matching-System</Eyebrow>
              <h2 className="section__title ms-feature__title">
                Mehr als Bewerbervermittlung — ein strukturierter Passungsabgleich.
              </h2>
              <p className="ms-feature__text">
                Wir prüfen nicht nur, ob eine Pflegekraft qualifiziert ist, sondern ob ein
                Arbeitsverhältnis realistisch langfristig funktionieren kann. Dafür erfassen wir auf
                beiden Seiten die Faktoren, die wirklich über eine gute Zusammenarbeit entscheiden.
              </p>
            </div>
            <div className="ms-feature__media">
              <img src={gfxMatching} alt="Abgleich zwischen Pflegekraft-Profil und Einrichtung über ein geprüftes Match" />
            </div>
          </div>

          <div className="ms-two">
            <div className="ms-two__card">
              <span className="ms-two__label"><span className="dot" />Pflegekräfte geben an</span>
              <ul className="ms-checklist">
                {kraftGibt.map(k => <li key={k}>{k}</li>)}
              </ul>
            </div>
            <div className="ms-two__card">
              <span className="ms-two__label"><span className="dot" />Einrichtungen erfassen</span>
              <ul className="ms-checklist">
                {hausErfasst.map(h => <li key={h}>{h}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WAS MEDILANE PRÜFT — 6 Dimensionen */}
      <section className="section section--soft">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Was Medilane im Matching prüft</Eyebrow>
            <h2 className="section__title">Sechs Dimensionen, die über die Passung entscheiden.</h2>
            <p className="section__lead">
              Dabei geht es nie um „gute" oder „schlechte" Teams und Pflegekräfte — sondern um
              Passung. Was für die einen ideal ist, passt für andere gar nicht.
            </p>
          </div>
          <div className="pillars">
            {dimensions.map(d => (
              <div key={d.num} className="pillar">
                <span className="pillar__num">
                  <span className="dot" />
                  {d.num}
                </span>
                <h3 className="pillar__title">{d.title}</h3>
                <p className="pillar__desc">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATCHBERICHT */}
      <section className="section" id="matchbericht">
        <div className="container">
          <div className="ms-feature ms-feature--reverse">
            <div className="ms-feature__media">
              <img src={gfxBericht} alt="Zwei Einrichtungsleitungen prüfen einen Matchbericht auf einem Tablet" />
            </div>
            <div className="ms-feature__copy">
              <Eyebrow>Der Matchbericht</Eyebrow>
              <h2 className="section__title ms-feature__title">
                Du erhältst keine Bewerbung. Du erhältst eine Entscheidungsgrundlage.
              </h2>
              <p className="ms-feature__text">
                Passt eine Pflegekraft zu deiner Einrichtung, bekommst du einen strukturierten
                Matchbericht — keine anonyme Bewerberliste, sondern eine fundierte Einschätzung, mit
                der du deutlich besser vorbereitet ins Gespräch gehst.
              </p>
              <ul className="ms-checklist ms-checklist--two">
                {berichtEnthaelt.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
          </div>

          {/* Beispiel-Matchbericht */}
          <div className="ms-report">
            <div className="ms-report__head">
              <span className="ms-report__tag">Beispiel-Matchbericht</span>
              <p className="ms-report__verdict">
                <strong>Gesamtbewertung:</strong> Guter Match — hohe fachliche Passung und starke
                Übereinstimmung bei Fachbereich, Arbeitszeitmodell und gewünschter Teamstruktur.
              </p>
            </div>
            <div className="ms-report__cols">
              <div className="ms-report__col">
                <span className="ms-report__col-label ms-report__col-label--good">Besonders passend</span>
                <ul className="ms-checklist">
                  {berichtPassend.map(p => <li key={p}>{p}</li>)}
                </ul>
              </div>
              <div className="ms-report__col">
                <span className="ms-report__col-label">Aktiv zu klären</span>
                <ul className="ms-checklist ms-checklist--open">
                  {berichtKlaeren.map(p => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERTRAUEN (dunkel) */}
      <section className="section section--ink">
        <div className="container">
          <div className="ms-system">
            <div className="ms-system__copy">
              <Eyebrow>Vertrauen durch sensible Kommunikation</Eyebrow>
              <h2 className="ms-system__title">Sensible Themen werden professionell übersetzt.</h2>
              <p className="ms-system__lead">
                Viele Pflegekräfte sprechen im direkten Bewerbungsgespräch nicht offen über schlechte
                Erfahrungen oder Ausschlusskriterien — aus Angst, negativ zu wirken. Medilane schafft
                einen geschützten Rahmen: Pflegekräfte können ehrlich sagen, was sie suchen und
                vermeiden möchten. Sensible Inhalte gehen nicht ungefiltert an dich.
              </p>
            </div>
            <div className="ms-system__media">
              <img src={gfxVertrauen} alt="Vertrauliche, geschützte Kommunikation zwischen Pflegekraft und Medilane" />
            </div>
          </div>

          <div className="ms-example">
            <div className="ms-example__col ms-example__col--bad">
              <span className="ms-example__label">Intern sagt die Pflegekraft</span>
              <p>„Ich möchte nicht wieder in eine Einrichtung, in der ich ständig aus dem Frei einspringen muss."</p>
            </div>
            <div className="ms-example__col ms-example__col--good">
              <span className="ms-example__label">Du erhältst</span>
              <p>
                „Für die Pflegekraft ist verlässliche Dienstplanung besonders wichtig. Im Gespräch
                sollte transparent besprochen werden, wie kurzfristige Ausfälle organisiert werden
                und wie häufig Einspringen aktuell vorkommt."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROZESS */}
      <section className="section">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>So funktioniert der Prozess</Eyebrow>
            <h2 className="section__title">In sechs Schritten zur passenden Besetzung.</h2>
          </div>

          <div className="ms-showcase">
            <img src={gfxDashboard} alt="Übersicht der Matchvorschläge für eine Einrichtungsleitung" />
          </div>

          <div className="ms-process">
            {process.map(s => (
              <div key={s.num} className="ms-step">
                <span className="ms-step__num">{s.num}</span>
                <h3 className="ms-step__title">{s.title}</h3>
                <p className="ms-step__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOMENT BREAK */}
      <section className="home-moment">
        <div className="container container--wide">
          <div className="home-moment__inner">
            <img src={momentFoto} alt="Zwei Frauen im Gespräch auf Augenhöhe an einem Tisch" />
            <div className="home-moment__overlay">
              <p className="home-moment__quote">
                Aus einem Bewerbungsgespräch wird ein ehrlicher <em>Erwartungsabgleich</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NUTZEN / PSYCHOLOGISCHER VORTEIL */}
      <section className="section section--soft">
        <div className="container">
          <div className="ms-feature">
            <div className="ms-feature__copy">
              <Eyebrow>Dein Vorteil im Wettbewerb um Pflegekräfte</Eyebrow>
              <h2 className="section__title ms-feature__title">
                Pflegekräfte wechseln offener, wenn sie sich verstanden fühlen.
              </h2>
              <p className="ms-feature__text">
                Ein Jobwechsel ist emotional belastend — viele bleiben lange in einer schlechten
                Situation, weil ein Wechsel Unsicherheit erzeugt. Medilane macht wichtige Erwartungen
                vorher sichtbar und besprechbar. Das senkt die Wechselangst und sendet ein starkes
                Signal:
              </p>
              <ul className="ms-checklist">
                {signale.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className="ms-feature__media">
              <img src={gfxIntegration} alt="Eine neue Pflegekraft wird im Team herzlich begrüßt" />
            </div>
          </div>

          <div className="ms-benefits">
            {vorteile.map(v => <span key={v} className="ms-benefit"><span className="dot" />{v}</span>)}
          </div>
        </div>
      </section>

      {/* VERGLEICH */}
      <section className="section">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Im Vergleich</Eyebrow>
            <h2 className="section__title">
              Nicht schneller um jeden Preis — sondern passender mit System.
            </h2>
          </div>
          <ComparisonTable rows={comparisonRows} medilaneHeader="Medilane Matching-System" />
        </div>
      </section>

      {/* FÜR WEN GEEIGNET */}
      <section className="section section--soft">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Für wen Medilane geeignet ist</Eyebrow>
            <h2 className="section__title">Für Häuser, die langfristig passende Mitarbeitende wollen.</h2>
          </div>
          <div className="ms-fit">
            <div className="ms-fit__card ms-fit__card--yes">
              <span className="ms-fit__label"><span className="dot" />Geeignet für …</span>
              <ul className="ms-fit__list">
                {fitFor.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
            <div className="ms-fit__card">
              <span className="ms-fit__label">Besonders sinnvoll, wenn …</span>
              <ul className="ms-fit__list ms-fit__list--signal">
                {fitSignals.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Häufige Fragen</Eyebrow>
            <h2 className="section__title">Was Einrichtungen zum Matching-System fragen.</h2>
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
                Finde Pflegekräfte, die nicht nur anfangen — sondern bleiben.
              </h2>
              <p className="final-cta__sub">
                Trag deine Einrichtung unverbindlich ein und erhalte passende Matchvorschläge, sobald
                eine Pflegekraft zu deinen Anforderungen, Rahmenbedingungen und deiner Teamstruktur
                passt. Ohne Verpflichtung, ohne Bewerberflut.
              </p>
            </div>
            <div className="final-cta__col">
              <Link to={PRIMARY} className="btn btn--inverse btn--lg">
                <span>Einrichtung unverbindlich eintragen</span>
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
