import { useState } from 'react'
import { Link } from 'react-router-dom'
import Eyebrow from '../components/sections/Eyebrow'
import AvailabilityBar from '../components/sections/AvailabilityBar'
import ImageSlot from '../components/sections/ImageSlot'
import { MatchReport } from '../components/sections/MatchReport'
import ComparisonTable from '../components/sections/ComparisonTable'
import { getFunnelUrl } from '../lib/tracking'

// Echte Pflege-Fotos aus dem kuratieren Unsplash-Pool
import heroSpaziergang from '../assets/photos/spaziergang-pflegerin-seniorin-rollator-allee-hochformat.jpg'
import audienceEinrichtungen from '../assets/photos/pflegerin-bett-machen-krankenzimmer-arbeit-querformat.jpg'
import audiencePflegekraefte from '../assets/photos/haende-detail-teebecher-reichen-dokumentarisch-querformat.jpg'
import quotePortrait from '../assets/photos/seniorin-rollstuhl-pflegerin-rueckenansicht-stille-hochformat.jpg'
import momentBreak from '../assets/photos/pflegerin-hand-schulter-seniorin-fenster-querformat.jpg'

import './HomePage.css'

const PRIMARY = '/kontakt?typ=einrichtung'
const FUNNEL_HERO = getFunnelUrl('website', 'organic', 'home_hero')
const FUNNEL_FINAL = getFunnelUrl('website', 'organic', 'home_final')

/* ======================================================================
   TRUST STRIP
   ====================================================================== */
function TrustStrip() {
  const items = [
    'Direktvermittlung',
    'Matching auf beiden Seiten',
    '180-Tage-Wechselbegleitung',
    'Frühwarnsystem nach 7/30/60/100 Tagen',
    'Optional: Stabilitätsberatung',
  ]
  return (
    <div className="trust-strip">
      <div className="container">
        <div className="trust-strip__row">
          <span className="trust-strip__label">PflegeMatch 180</span>
          <div className="trust-strip__items">
            {items.map(t => (
              <span key={t} className="trust-strip__item">
                <span className="dot" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ======================================================================
   STATS STRIP
   ====================================================================== */
function StatsStrip() {
  const stats = [
    { value: '180', suffix: 'Tage', label: 'Wechselbegleitung', sub: 'Pflichtbestandteil jeder Vermittlung — von Tag 1 bis Tag 180.' },
    { value: '6',   suffix: '',     label: 'Match-Dimensionen', sub: 'Fachlich, Dienstplan, Belastung, Team, Führung, Entwicklung.' },
    { value: '5',   suffix: '',     label: 'Check-in-Termine',  sub: 'Tag 7 · 30 · 60 · 100 · 180. Strukturiert, dokumentiert, nachgehalten.' },
    { value: '0',   suffix: '€',    label: 'Für Pflegekräfte',  sub: 'Du zahlst für die Vermittlung nichts. Nie. Egal, wohin du wechselst.' },
  ]
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats">
          {stats.map(s => (
            <div key={s.label} className="stats__cell">
              <span className="stats__value">
                {s.value}
                {s.suffix && <span className="stats__value-suffix">{s.suffix}</span>}
              </span>
              <span className="stats__label">{s.label}</span>
              <span className="stats__sub">{s.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ======================================================================
   PROBLEM CHAIN
   ====================================================================== */
function ProblemChain() {
  const broken = ['Offene Stelle', 'Schnelle Besetzung', 'Unpassender Match', 'Frust im Stammteam', 'Probezeitabbruch', 'Erneute Lücke']
  const medi   = ['Analyse beider Seiten', 'Strukturiertes Matching', 'Erwartungsabgleich', 'Startbegleitung', 'Check-ins Tag 7/30/60/100', '180-Tage-Verbleib']
  return (
    <section className="section section--soft">
      <div className="container">
        <div className="section__head">
          <Eyebrow>Problem</Eyebrow>
          <h2 className="section__title">
            Das Problem ist nicht der Fachkräftemangel. Das Problem sind instabile Besetzungen.
          </h2>
          <p className="section__lead">
            Viele Einrichtungen finden nicht nur zu wenige Bewerber. Die eigentlichen Kosten
            entstehen danach: unpassende Matches, Probezeitabbrüche, erneute Suche, Frust im
            Stammteam — und im Zweifel wieder Zeitarbeit.
          </p>
        </div>

        <div className="chain-grid">
          <div className="chain chain--broken">
            <div className="chain__label">
              Klassische Vermittlung
              <span className="chain__badge">Die übliche Kette</span>
            </div>
            <h3 className="chain__title">Schnell besetzt, schnell wieder offen.</h3>
            <div className="chain__steps">
              {broken.map((step, i) => (
                <div key={step} className="chain__step">
                  <span className="chain__step-num">0{i + 1}</span>
                  <span className="chain__step-text">{step}</span>
                  {i < broken.length - 1 && <span className="chain__step-tail">↓</span>}
                </div>
              ))}
            </div>
            <div className="chain__outcome">
              <span className="chain__outcome-dot chain__outcome-dot--muted" />
              Ergebnis: Wiederbesetzungskosten, Zeitarbeit, Überlastung.
            </div>
          </div>

          <div className="chain chain--medilane">
            <div className="chain__label">
              Medilane PflegeMatch 180
              <span className="chain__badge chain__badge--brand">Unsere Kette</span>
            </div>
            <h3 className="chain__title">Passend besetzt, in der Anfangsphase begleitet.</h3>
            <div className="chain__steps">
              {medi.map((step, i) => (
                <div key={step} className="chain__step">
                  <span className="chain__step-num">0{i + 1}</span>
                  <span className="chain__step-text">{step}</span>
                  {i < medi.length - 1 && <span className="chain__step-tail chain__step-tail--brand">↓</span>}
                </div>
              ))}
            </div>
            <div className="chain__outcome">
              <span className="chain__outcome-dot" />
              Ergebnis: Stabiler Start, weniger Abbrüche, planbare Dienste.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ======================================================================
   THREE PILLARS
   ====================================================================== */
function ThreePillars() {
  const pillars = [
    {
      num: '01',
      title: 'Matching vor Vermittlung',
      desc: 'Wir prüfen vor jeder Vorstellung, ob Dienstplan, Belastung, Team und Erwartungen wirklich zusammenpassen — nicht nur Qualifikation und Gehalt.',
      bullets: ['Pflegekraft-Profiling', 'Arbeitgeber-Profiling', 'Match-Bericht statt Lebenslauf'],
    },
    {
      num: '02',
      title: 'Verbleib statt Abschluss',
      desc: 'Unser Ziel ist nicht die Unterschrift. Unser Ziel ist eine stabile Integration in den ersten sechs Monaten — gemessen, dokumentiert, nachgehalten.',
      bullets: ['Erwartungsabgleich vor Start', '180-Tage-Begleitung', 'Abschlussreport mit Learnings'],
    },
    {
      num: '03',
      title: 'Frühwarnung statt Abwarten',
      desc: 'Durch Check-ins nach 7, 30, 60, 100 und 180 Tagen erkennen wir Risiken früh — bevor aus Unsicherheit Kündigung wird.',
      bullets: ['Strukturierte Check-ins', 'Frühwarnindikatoren', 'Konfliktmoderation'],
    },
  ]
  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <Eyebrow>PflegeMatch 180</Eyebrow>
          <h2 className="section__title">Drei Säulen, die klassische Vermittlung nicht hat.</h2>
          <p className="section__lead">
            Wir kombinieren strukturierte Direktvermittlung, pflegebezogenes Matching auf
            beiden Seiten und eine integrierte Wechselbegleitung über 180 Tage. Pflichtbestandteil
            jeder Vermittlung — nicht Upsell.
          </p>
        </div>

        <div className="pillars">
          {pillars.map(p => (
            <div key={p.num} className="pillar">
              <span className="pillar__num">
                <span className="dot" />
                {p.num}
              </span>
              <h3 className="pillar__title">{p.title}</h3>
              <p className="pillar__desc">{p.desc}</p>
              <ul className="pillar__list">
                {p.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ======================================================================
   MATCH REPORT ARTIFACT
   ====================================================================== */
function MatchReportSection() {
  return (
    <section className="section section--ink">
      <div className="container">
        <div className="report-stage">
          <div className="report-stage__copy">
            <Eyebrow>Das Herzstück</Eyebrow>
            <h2 className="report-stage__title">
              Du bekommst keinen Profil-Stapel. Du bekommst einen Match-Bericht.
            </h2>
            <p className="report-stage__lead">
              Jede Vorstellung wird mit einem strukturierten Bericht eingereicht. Stärken.
              Risiken. Empfohlene Interview-Fragen. Empfohlene Startbedingungen.
              Verbleibshypothese.
            </p>

            <div className="report-stage__features">
              {[
                ['6 Dimensionen', 'Fachlich, Dienstplan, Belastung, Team, Führung, Entwicklung.'],
                ['Ampel-Logik', 'Grün = empfohlen. Gelb = vor Start klären. Rot = nicht vermitteln.'],
                ['Startbedingungen', 'Mentor, Dienstplan-Absprachen, Einarbeitungsdauer, Feedback-Termine.'],
                ['Verbleibshypothese', 'Begründete Einschätzung, wie wahrscheinlich der Match nach 180 Tagen hält.'],
              ].map(([label, text]) => (
                <div key={label} className="report-stage__feature">
                  <span className="report-stage__feature-label">{label}</span>
                  <span className="report-stage__feature-text">{text}</span>
                </div>
              ))}
            </div>

            <div className="report-stage__cta">
              <Link to="/pflegematch-180" className="btn btn--inverse btn--lg">
                Beispielbericht ansehen <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <Link to={PRIMARY} className="btn btn--ghost btn--lg" style={{ color: 'var(--white)' }}>
                Match anfragen
              </Link>
            </div>
          </div>

          <div className="report-stage__artifact">
            <MatchReport />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ======================================================================
   TIMELINE 180
   ====================================================================== */
function Timeline180() {
  const nodes = [
    { day: 'Vor Start', title: 'Erwartungs-\nabgleich',      desc: 'Dienstplanwunsch, Einarbeitung, Ansprechpartner, No-Gos.' },
    { day: 'Tag 07',    title: 'Ankommen',                   desc: 'Erster Eindruck, Teamkontakt, Dienstplan, Überforderung.' },
    { day: 'Tag 30',    title: 'Integration',                desc: 'Realität vs. Erwartung, Einarbeitung, Belastung.' },
    { day: 'Tag 60',    title: 'Risikocheck',                desc: 'Zweifel, Konflikte, Zusatzdienste, Fehlzeiten.' },
    { day: 'Tag 100',   title: 'Probezeit-\nStabilisierung', desc: 'Entscheidungssicherheit vor Probezeitende absichern.' },
    { day: 'Tag 180',   title: 'Abschluss-\nbericht',        desc: 'Verbleib, Zufriedenheit, Learnings, Empfehlungen.' },
  ]
  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <Eyebrow>180-Tage-Wechselbegleitung</Eyebrow>
          <h2 className="section__title">Die kritischen Wochen sind die ersten. Wir bleiben da.</h2>
          <p className="section__lead">
            Viele Vermittlungen scheitern nicht bei der Unterschrift, sondern in den ersten
            Wochen danach. Genau dort setzen wir an — mit strukturierten Check-ins und einem
            Frühwarnsystem.
          </p>
        </div>

        <div className="timeline">
          {nodes.map((n, i) => (
            <div
              key={i}
              className={`timeline__node ${i === 1 || i === 4 ? 'timeline__node--active' : ''}`}
            >
              <span className="timeline__day">{n.day}</span>
              <span className="timeline__dot" />
              <span className="timeline__title" style={{ whiteSpace: 'pre-line' }}>{n.title}</span>
              <span className="timeline__desc">{n.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ======================================================================
   MOMENT BREAK — warmer Foto-Atemzug zwischen Text-Sektionen
   ====================================================================== */
function MomentBreak() {
  return (
    <section className="home-moment">
      <div className="container container--wide">
        <div className="home-moment__inner">
          <img
            src={momentBreak}
            alt="Pflegerin legt eine Hand sanft auf die Schulter einer Bewohnerin am Fenster"
          />
          <div className="home-moment__overlay">
            <p className="home-moment__quote">
              Eine Stelle ist mehr als ein Vertrag.<br />
              Sie ist der Alltag, den du dir <em>wünschst</em>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ======================================================================
   AUDIENCE SPLIT
   ====================================================================== */
function AudienceSplit() {
  return (
    <section className="section section--soft">
      <div className="container">
        <div className="section__head">
          <Eyebrow>Zwei Zielgruppen · Eine Marke</Eyebrow>
          <h2 className="section__title">
            Für die Menschen in der Pflege — und die Häuser, die sie suchen.
          </h2>
        </div>

        <div className="audience-grid">
          <Link to="/arbeitgeber" className="audience-card">
            <ImageSlot
              className="audience-card__img"
              src={audienceEinrichtungen}
              alt="Pflegekraft im Bereich, konzentriert beim Bett richten"
              caption="Pflegekraft im Bereich — konzentriert, im Alltag."
            />
            <div className="audience-card__body">
              <span className="audience-card__eyebrow">
                <span className="dot" />Für Einrichtungen
              </span>
              <h3 className="audience-card__title">
                Pflegekräfte, die nicht nur anfangen — sondern bleiben.
              </h3>
              <p className="audience-card__desc">
                Du brauchst nicht mehr Bewerbungen. Du brauchst die richtigen. Wir prüfen
                vor der Vorstellung, ob Erwartungen und Realität zusammenpassen.
              </p>
              <ul className="audience-card__bullets">
                <li>Weniger Probezeitabbrüche</li>
                <li>Match-Bericht statt Profilflut</li>
                <li>180-Tage-Wechselbegleitung verpflichtend</li>
              </ul>
              <span className="audience-card__link">
                Für Einrichtungen <span className="arrow" aria-hidden="true">→</span>
              </span>
            </div>
          </Link>

          <Link to="/pflegekraefte" className="audience-card">
            <ImageSlot
              className="audience-card__img"
              src={audiencePflegekraefte}
              alt="Hände, die einen Teebecher überreichen — dokumentarisches Detail"
              caption="Hände, die übergeben — Ruhe, nicht Eile."
            />
            <div className="audience-card__body">
              <span className="audience-card__eyebrow">
                <span className="dot" />Für Pflegekräfte
              </span>
              <h3 className="audience-card__title">
                Eine Stelle, die zu deinem Leben passt.
              </h3>
              <p className="audience-card__desc">
                Du willst wechseln, aber nicht wieder enttäuscht werden. Erzähl uns von
                deinem Alltag — wir öffnen nur die Türen, die zu dir passen.
              </p>
              <ul className="audience-card__bullets">
                <li>Ehrlicher Erwartungsabgleich vor Start</li>
                <li>Deine Dienstplanwünsche sind nicht Verhandlungsmasse</li>
                <li>Wir bleiben auch nach Tag 1 erreichbar</li>
              </ul>
              <span className="audience-card__link">
                Für Pflegekräfte <span className="arrow" aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ======================================================================
   COMPARISON
   ====================================================================== */
function Comparison() {
  const rows = [
    { label: 'Vermittlungsfokus',            classic: 'Lebenslauf, Verfügbarkeit, Gehalt', medilane: 'Gesamtpassung: Fachlich, Dienstplan, Team, Belastung, Führung' },
    { label: 'Was du als Einrichtung bekommst', classic: 'Profilstapel zur Sichtung',      medilane: 'Begründeter Match-Bericht mit Risiken und Startbedingungen' },
    { label: 'Was nach Unterschrift passiert',  classic: 'Vermittler ist raus',            medilane: '180-Tage-Begleitung mit Check-ins an Tag 7/30/60/100/180' },
    { label: 'Dienstplanrealität',           classic: 'Wird selten geprüft',               medilane: 'Vor Vorstellung abgeglichen — keine schöngefärbten Versprechen' },
    { label: 'Risiken vor Start',            classic: 'Bleiben oft unsichtbar',            medilane: 'Werden im Bericht benannt — grün, gelb, rot' },
    { label: 'Wenn es nach Tag 14 hakt',     classic: 'Problem der Einrichtung',           medilane: 'Konfliktmoderation, Erwartungs-Neujustierung, Frühwarnung' },
    { label: 'Erfolgsmaß',                   classic: 'Vertragsunterschrift',              medilane: 'Verbleib nach 180 Tagen, gemessen und dokumentiert' },
  ]
  return (
    <section className="section section--soft">
      <div className="container">
        <div className="section__head">
          <Eyebrow>Wie wir uns unterscheiden</Eyebrow>
          <h2 className="section__title">
            Klassische Vermittlung endet bei der Unterschrift. Wir fangen dort erst an.
          </h2>
        </div>

        <ComparisonTable rows={rows} />
      </div>
    </section>
  )
}

/* ======================================================================
   QUOTE
   ====================================================================== */
function QuoteBlock() {
  return (
    <section className="section">
      <div className="container">
        <div className="quote-block">
          <ImageSlot
            className="quote-block__media"
            src={quotePortrait}
            alt="Pflegekraft mit Bewohnerin im Rollstuhl, Rückenansicht im Alltagslicht"
            caption="Ein stiller Moment — Pflege als Haltung, nicht als Pose."
          />
          <div className="quote-block__copy">
            <Eyebrow>Stimmen</Eyebrow>
            <span className="quote-block__mark">„</span>
            <p className="quote-block__text">
              Medilane hat mir nicht die nächste Stelle vermittelt, sondern die richtige.
              Drei Gespräche, kein Druck — und ein Team, das mich auch nach der Probezeit
              noch anruft.
            </p>
            <div className="quote-block__attr">
              <div className="quote-block__avatar">LH</div>
              <div className="quote-block__who">
                <span className="quote-block__name">Lena Hartmann</span>
                <span className="quote-block__role">Examinierte Altenpflegerin · Berlin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ======================================================================
   FAQ
   ====================================================================== */
function FAQ() {
  const items = [
    {
      q: 'Ist Medilane eine Zeitarbeitsfirma?',
      a: 'Nein. Wir setzen auf Direktvermittlung und langfristige Integration. Ziel ist nicht kurzfristige Arbeitnehmerüberlassung, sondern eine stabile Besetzung, die nach 180 Tagen noch steht.',
    },
    {
      q: 'Was unterscheidet euch von klassischen Personalvermittlern?',
      a: 'Wir kombinieren Vermittlung mit strukturiertem Matching auf beiden Seiten und einer 180-Tage-Wechselbegleitung. Der Prozess endet nicht bei der Unterschrift — er beginnt dort.',
    },
    {
      q: 'Was passiert, wenn es nach dem Start Probleme gibt?',
      a: 'Dann greift die Wechselbegleitung. Wir führen Check-ins durch, erkennen Frühwarnsignale und moderieren bei Bedarf zwischen Pflegekraft und Einrichtung. Wir ersetzen keine Führungsverantwortung — wir machen Probleme früh sichtbar.',
    },
    {
      q: 'Kostet die Vermittlung Pflegekräfte etwas?',
      a: 'Nein. Pflegekräfte zahlen für die Vermittlung nichts. Auch das Gespräch ist unverbindlich — du musst nicht wechseln, wenn du mit uns sprichst.',
    },
    {
      q: 'Wie lange dauert eine Vermittlung?',
      a: 'Das hängt von Region, Profil und Anforderungen ab. Wir priorisieren passende Matches gegenüber schneller, aber instabiler Besetzung. Lieber drei Wochen länger suchen als drei Monate später nachbesetzen.',
    },
    {
      q: 'Werden Daten vertraulich behandelt?',
      a: 'Ja. Eine Weitergabe an Einrichtungen erfolgt nur nach ausdrücklicher Abstimmung und Einwilligung. Wir erheben nur, was für das Matching wirklich relevant ist.',
    },
    {
      q: 'Ist Beratung förderfähig?',
      a: 'Die reine Vermittlung ist in der Regel nicht förderfähig. Beratungs- und Begleitmodule zu Personalbindung, Rückgewinnung, Wiedereinarbeitung oder Vereinbarkeit können je nach Programm und Einzelfall fördernah sein. Wir trennen das transparent.',
    },
  ]
  const [open, setOpen] = useState<number>(0)
  return (
    <section className="section section--soft">
      <div className="container">
        <div className="section__head section__head--center">
          <Eyebrow>Häufige Fragen</Eyebrow>
          <h2 className="section__title">
            Was Einrichtungen und Pflegekräfte uns am häufigsten fragen.
          </h2>
        </div>

        <div className="faq">
          {items.map((it, i) => {
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
  )
}

/* ======================================================================
   FINAL CTA
   ====================================================================== */
function FinalCTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="final-cta">
          <div>
            <h2 className="final-cta__title">
              Pflege mit Zukunft beginnt mit einem ehrlichen Gespräch.
            </h2>
            <p className="final-cta__sub">
              15 Minuten. Diskret. Unverbindlich. Du entscheidest, wie es weitergeht —
              egal, ob du eine Einrichtung leitest oder eine neue Stelle suchst.
            </p>
          </div>
          <div className="final-cta__col">
            <Link to={PRIMARY} className="btn btn--inverse btn--lg">
              <span>Erstgespräch für Einrichtungen</span>
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <a
              href={FUNNEL_FINAL}
              className="btn btn--ghost btn--lg final-cta__ghost"
            >
              <span>Wechselprofil als Pflegekraft erstellen</span>
              <span className="arrow" aria-hidden="true">→</span>
            </a>
            <span className="final-cta__note">Antwort innerhalb von 24 Stunden · info@medi-lane.de</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ======================================================================
   HERO B
   ====================================================================== */
function HeroB() {
  return (
    <section className="hero hero--b">
      <div className="container">
        <div className="hero__grid">
          <div>
            <div className="hero__topline">
              <Eyebrow>Pflege mit Zukunft</Eyebrow>
            </div>
            <h1 className="hero__title">
              Der passende Pflegejob ist mehr als eine offene <em>Stelle</em>.
            </h1>
            <p className="hero__sub">
              Wir vermitteln Pflegekräfte nicht klassisch, sondern mit Matching auf beiden
              Seiten und integrierter 180-Tage-Wechselbegleitung. Diskret. Verbindlich.
              Auf Augenhöhe.
            </p>
            <div className="hero__cta">
              <Link to={PRIMARY} className="btn btn--primary btn--lg">
                Erstgespräch vereinbaren <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <a href={FUNNEL_HERO} className="btn btn--ghost btn--lg">
                Wechselprofil erstellen →
              </a>
            </div>
            <p className="hero__note">15 Minuten · Diskret · Unverbindlich</p>
            <div className="hero__avail">
              <AvailabilityBar />
            </div>
          </div>

          <div className="hero__image">
            <img
              src={heroSpaziergang}
              alt="Pflegerin begleitet ältere Dame mit Rollator durch eine sonnige Allee"
            />
            <div className="hero__image-overlay">
              <div className="avatar">LH</div>
              <div className="who">
                <strong>„Drei Gespräche. Kein Druck. Der richtige Ort."</strong>
                <span>Lena, Altenpflegerin · Berlin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ======================================================================
   PAGE
   ====================================================================== */
export default function HomePage() {
  return (
    <div className="home-page">
      <HeroB />
      <TrustStrip />
      <StatsStrip />
      <ProblemChain />
      <ThreePillars />
      <MatchReportSection />
      <Timeline180 />
      <MomentBreak />
      <AudienceSplit />
      <Comparison />
      <QuoteBlock />
      <FAQ />
      <FinalCTA />
    </div>
  )
}
