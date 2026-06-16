import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Eyebrow from '../components/sections/Eyebrow'
import AvailabilityBar from '../components/sections/AvailabilityBar'

// Grafiken — Wechselbegleitung
import gfxProblem from '../assets/photos/wechselbegleitung/problem-stille-zweifel-pflegerin-start-risiko-querformat.png'
import gfxWasIst from '../assets/photos/wechselbegleitung/was-ist-wechselbegleitung-180-tage-kreis-timeline-querformat.png'
import gfxVertrauen from '../assets/photos/wechselbegleitung/vertrauen-ehrliches-feedback-freigabeprinzip-querformat.png'
import gfxUebersicht from '../assets/photos/wechselbegleitung/hero-uebersicht-pflegekraft-einrichtung-onboarding-verbleib-querformat.png'
import gfxErgebnis from '../assets/photos/wechselbegleitung/ergebnis-erfolg-bleibt-stabilitaet-bindung-querformat.png'

// Echte Pflege-Fotos
import heroPortrait from '../assets/photos/portrait-pflegerin-stethoskop-klinik-hochformat.jpg'
import momentFoto from '../assets/photos/pflegerin-senior-rollstuhl-augenhoehe-laechelnd-querformat.jpg'

import './Wechselbegleitung.css'

const PRIMARY = '/kontakt?typ=einrichtung'

/* ----------------------------- Daten ----------------------------- */

const trustItems = [
  '180 Tage Begleitung',
  'Check-ins bis Tag 180',
  'Vertrauliches Freigabeprinzip',
  'Frühwarnsystem',
  'Weniger Frühfluktuation',
]

const doubtQuotes = [
  'Das hatte ich mir anders vorgestellt.',
  'Ich will nicht direkt schwierig wirken.',
  'Ich bin noch in der Probezeit — ich sage lieber nichts.',
  'Vielleicht wird es noch besser.',
  'Ich schaue mich parallel lieber wieder um.',
]

const costPoints = [
  'Der Recruitingprozess beginnt von vorn',
  'Die Fachkraftquote bleibt angespannt',
  'Das Stammteam muss erneut auffangen',
  'Die Einarbeitung war vergeblich investierte Zeit',
  'Bewohner und Patienten erleben wieder einen Wechsel',
  'Leitung verliert Vertrauen in den nächsten Besetzungsprozess',
]

const betrachtenChips = [
  'Einarbeitung', 'Dienstplan', 'Teamanschluss', 'Kommunikation mit Leitung',
  'Arbeitsbelastung', 'Erwartungen aus dem Bewerbungsprozess', 'Zufriedenheit',
  'Verbleibsrisiken', 'Offene Klärungspunkte',
]

const mapCards = [
  { reason: 'Wechsel wegen unzuverlässiger Dienstplanung', focus: 'Wir beobachten Planbarkeit und den Umgang mit kurzfristigen Einspringanfragen.' },
  { reason: 'Wechsel wegen fehlender Wertschätzung', focus: 'Wir achten auf Kommunikation, Ankommen und den Kontakt zur Führung.' },
  { reason: 'Wechsel wegen Überlastung', focus: 'Wir schauen auf Einarbeitung, Aufgabenverteilung und Belastungsrealität.' },
  { reason: 'Wechsel wegen Teamkonflikten', focus: 'Wir prüfen, ob die Pflegekraft im neuen Team wirklich Anschluss findet.' },
]

const receiveList = [
  'Allgemeine Integrationsempfehlungen',
  'Freigegebene Themenfelder',
  'Konkrete Klärungspunkte',
  'Maßnahmenvorschläge',
  'Follow-up-Empfehlungen',
  'Retentionshinweise',
  'Abschlussdokumentation nach 180 Tagen',
]

const flow = [
  {
    day: 'Vor Start', title: 'Startklar-Check',
    desc: 'Noch vor dem ersten Arbeitstag prüfen wir, ob der Start organisatorisch wirklich steht.',
    points: ['Startdatum, Uhrzeit, Ansprechpartner klar?', 'Erster Dienstplan bekannt?', 'Einarbeitung geplant?', 'Zusagen aus dem Bewerbungsprozess dokumentiert?'],
  },
  {
    day: 'Tag 7', title: 'Ankommens-Check',
    desc: 'Nach der ersten Woche zählt der erste Eindruck — ist der Start gelungen oder droht der erste Riss im Vertrauen?',
    points: ['Wurde die Pflegekraft erwartet?', 'Gab es eine Ansprechperson?', 'Ist die Einarbeitung angelaufen?', 'Passt der erste Dienstplan zu den Absprachen?'],
  },
  {
    day: 'Tag 30', title: 'Erwartungsabgleich',
    desc: 'Nach einem Monat wird klar, ob die Realität zu der Erwartung passt, mit der die Pflegekraft gewechselt ist.',
    points: ['Einarbeitung, Team, Dienstplan', 'Kommunikation und Arbeitsbelastung', 'Stimmung und Zufriedenheit', 'Offene Fragen'],
  },
  {
    day: 'Tag 60', title: 'Risiko-Check',
    desc: 'Nach zwei Monaten zeigen sich Muster — Irritationen sind entweder gelöst oder sie wiederholen sich.',
    points: ['Wiederkehrende Reibungspunkte?', 'Versprechen aus dem Matching nicht eingelöst?', 'Erste Zweifel am Verbleib?', 'Welche kleine Maßnahme verhindert jetzt viel?'],
  },
  {
    day: 'Tag 90', title: 'Halbzeitgespräch',
    desc: 'Nach drei Monaten ist die Anfangsphase vorbei — Zeit für eine echte Zwischenbilanz.',
    points: ['Was läuft stabil?', 'Was gefährdet den Verbleib?', 'Welche Erwartungen wurden erfüllt?', 'Welche Maßnahme erhöht die Bleibe-Chance?'],
  },
  {
    day: 'Tag 150', title: 'Probezeit-Endspurt-Check',
    desc: 'Kurz vor Ende der 180 Tage — bewusst früh, solange der Handlungsspielraum noch groß ist.',
    points: ['Offene Punkte vor dem Probezeitende', 'Was muss jetzt geklärt werden?', 'Aus Probezeit ein stabiles Verhältnis machen'],
  },
  {
    day: 'Tag 180', title: 'Retentionsabschluss',
    desc: 'Zum Ende eine kompakte Abschlussdokumentation mit den freigegebenen Erkenntnissen aus der Begleitung.',
    points: ['Hat sich das Matching bestätigt?', 'Welche Faktoren trugen zum Verbleib bei?', 'Welche Learnings für künftige Besetzungen?'],
  },
]

const benefits = [
  { num: '01', title: 'Mehr Sicherheit nach der Einstellung', desc: 'Du erfährst nicht erst bei der Kündigung, dass etwas nicht gepasst hat.' },
  { num: '02', title: 'Weniger blinde Flecken', desc: 'Ein zusätzlicher, neutraler Blick auf die sensible Anfangsphase.' },
  { num: '03', title: 'Bessere Integration', desc: 'Orientierung, Anschluss und Kommunikation werden strukturiert geprüft — nicht dem Zufall überlassen.' },
  { num: '04', title: 'Konkrete Handlungsempfehlungen', desc: 'Keine langen Stimmungsberichte, sondern klare Hinweise: Was läuft, was beobachten, wo klären?' },
  { num: '05', title: 'Entlastung für Leitung & HR', desc: 'Den strukturierten Begleitprozess übernehmen wir — du bekommst nur das Relevante, Freigegebene zurück.' },
  { num: '06', title: 'Bessere Bindung ab Tag 1', desc: 'Mitarbeiterbindung beginnt nicht nach der Probezeit, sondern am ersten Arbeitstag.' },
]

const emotionReasons = [
  'zu wenig Planbarkeit', 'zu hohe Belastung', 'fehlende Wertschätzung', 'schwierige Führung',
  'Teamkonflikte', 'lange Pendelwege', 'keine Entwicklungsperspektive', 'das Gefühl, nicht mehr gesehen zu werden',
]

const resultList = [
  'Du erkennst Risiken früher',
  'Du erhältst sachliche Handlungsempfehlungen',
  'Du stärkst Vertrauen in der Anfangsphase',
  'Du entlastest Leitung und HR',
  'Du verbesserst die Integration neuer Mitarbeitender',
  'Du zeigst, dass Verbleib bei euch aktiv unterstützt wird',
]

const fitFor = [
  'Stationäre Pflegeeinrichtungen',
  'Ambulante Pflegedienste',
  'Langzeit- und Tagespflege',
  'Einrichtungen mit wiederkehrendem Fachkräftebedarf',
  'Einrichtungen mit hoher Frühfluktuation',
  'Träger, die Verbleib stärker in den Fokus nehmen',
]

const notWhat = [
  'Keine arbeitsrechtliche Beratung',
  'Keine Beschwerdestelle des Arbeitgebers',
  'Keine psychologische Beratung',
  'Keine Leistungsbewertung',
  'Keine Überwachung von Mitarbeitenden',
  'Kein Ersatz für Führungsverantwortung',
]

const faqItems = [
  {
    q: 'Erfahren wir als Einrichtung alles, was die Pflegekraft sagt?',
    a: 'Nein. Persönliche Inhalte aus Check-ins werden nur mit Freigabe der Pflegekraft weitergegeben. Das ist bewusst so geregelt, weil ehrliches Feedback nur in einem vertrauensvollen Rahmen entsteht. Du erhältst keine vertraulichen Rohzitate, sondern freigegebene, sachliche und lösungsorientierte Rückmeldungen.',
  },
  {
    q: 'Ist das nicht ein Nachteil für uns als Arbeitgeber?',
    a: 'Nein. Ohne Vertraulichkeit würden viele Pflegekräfte kritische Punkte gar nicht oder erst sehr spät ansprechen. Durch die Begleitung entstehen frühere Hinweise, bessere Gesprächsanlässe und konkrete Maßnahmen — ohne das Vertrauensverhältnis zur neuen Mitarbeitenden zu beschädigen.',
  },
  {
    q: 'Was passiert, wenn ein Problem nicht weitergegeben werden darf?',
    a: 'Dann bleibt der konkrete Inhalt vertraulich. Medilane kann jedoch allgemeine Empfehlungen geben, sofern dadurch keine vertraulichen Einzelangaben offengelegt werden. Gleichzeitig arbeiten wir mit der Pflegekraft daran, ob eine sichere, sachliche Teilfreigabe möglich ist.',
  },
  {
    q: 'Ist die Wechselbegleitung eine Kontrolle der Pflegefachkraft?',
    a: 'Nein. Medilane bewertet keine Arbeitsleistung und überwacht keine Mitarbeitenden. Die Begleitung dient ausschließlich dazu, Erwartungen, Integration, Kommunikation und Verbleib zu unterstützen.',
  },
  {
    q: 'Wie viel Aufwand entsteht für unsere Einrichtung?',
    a: 'Der Aufwand ist bewusst gering gehalten. Du benennst eine feste Kontaktperson und nimmst bei Bedarf an kurzen Abstimmungen teil. Die strukturierten Check-ins, Dokumentation und Einordnung übernimmt Medilane.',
  },
  {
    q: 'Was erhalten wir am Ende der 180 Tage?',
    a: 'Du erhältst eine kompakte Abschlussdokumentation mit den freigegebenen Erkenntnissen. Darin wird festgehalten, wie die Integration verlaufen ist, welche Faktoren den Verbleib unterstützt haben und welche Learnings für künftige Besetzungen relevant sind.',
  },
  {
    q: 'Kann die Wechselbegleitung auch für eigene Neueinstellungen genutzt werden?',
    a: 'Ja, grundsätzlich ist das möglich — auch für Mitarbeitende, die nicht über Medilane vermittelt wurden. Die konkrete Ausgestaltung hängt von deiner Einrichtung, der Anzahl der Mitarbeitenden, Datenschutzanforderungen und internen Strukturen ab. Auch hier gilt: keine heimliche Einzelüberwachung, sondern freigegebene Maßnahmenpunkte.',
  },
]

/* ----------------------------- Seite ----------------------------- */

export default function Wechselbegleitung() {
  const [open, setOpen] = useState<number>(0)

  useEffect(() => {
    const prevTitle = document.title
    document.title = 'Medilane Wechselbegleitung 180 | Pflegekräfte nach Einstellung erfolgreich integrieren'
    const meta = document.querySelector('meta[name="description"]')
    const prevDesc = meta?.getAttribute('content') ?? null
    if (meta) {
      meta.setAttribute(
        'content',
        'Medilane begleitet Pflegefachkräfte und Einrichtungen 180 Tage nach Arbeitsbeginn. Für weniger Frühfluktuation, ehrliches Feedback, bessere Integration und langfristigen Verbleib.',
      )
    }
    return () => {
      document.title = prevTitle
      if (meta && prevDesc !== null) meta.setAttribute('content', prevDesc)
    }
  }, [])

  return (
    <div className="wb-page">
      {/* HERO */}
      <section className="hero hero--b">
        <div className="container">
          <div className="hero__grid">
            <div>
              <div className="hero__topline">
                <Eyebrow>Wechselbegleitung 180 · Für Einrichtungen</Eyebrow>
              </div>
              <h1 className="hero__title">
                Neue Pflegefachkraft gewonnen? Jetzt entscheidet sich, ob sie <em>bleibt</em>.
              </h1>
              <p className="hero__sub">
                Die Vertragsunterschrift ist ein Meilenstein — aber noch kein stabiler Verbleib.
                Medilane begleitet Pflegefachkraft und Einrichtung 180 Tage nach Arbeitsbeginn:
                strukturiert, vertraulich und lösungsorientiert. Damit aus einer Einstellung nicht
                nach wenigen Wochen wieder eine offene Stelle wird.
              </p>
              <div className="hero__cta">
                <Link to={PRIMARY} className="btn btn--primary btn--lg">
                  Kostenloses Erstgespräch vereinbaren <span className="arrow" aria-hidden="true">→</span>
                </Link>
                <a href="#ablauf" className="btn btn--ghost btn--lg">
                  So läuft die Begleitung →
                </a>
              </div>
              <p className="hero__note">Erwartungen sichern · Frühwarnsignale erkennen · Verbleib stärken</p>
              <div className="hero__avail">
                <AvailabilityBar />
              </div>
            </div>

            <div className="hero__image">
              <img
                src={heroPortrait}
                alt="Pflegefachkraft mit Stethoskop, neu in einer Einrichtung angekommen"
              />
              <div className="hero__image-overlay">
                <div className="avatar">EL</div>
                <div className="who">
                  <strong>„Wir wollen nicht nur besetzen — wir wollen, dass sie bleibt."</strong>
                  <span>Einrichtungsleitung · Langzeitpflege</span>
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
            <span className="trust-strip__label">Wechselbegleitung 180</span>
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
          <div className="wb-feature">
            <div className="wb-feature__copy">
              <Eyebrow>Das Problem</Eyebrow>
              <h2 className="section__title wb-feature__title">
                Die Stelle ist besetzt. Die eigentliche Unsicherheit beginnt oft erst danach.
              </h2>
              <p className="wb-feature__text">
                Pflegekräfte kündigen selten plötzlich. Eine Kündigung wirkt überraschend — in
                Wirklichkeit beginnt sie meist viel früher. Nicht mit einem lauten Konflikt, sondern
                mit kleinen inneren Zweifeln, die am Anfang niemand ausspricht.
              </p>
              <ul className="wb-quotes">
                {doubtQuotes.map(q => <li key={q}>{q}</li>)}
              </ul>
              <p className="wb-feature__text">
                Für Einrichtungen entsteht dadurch ein gefährlicher blinder Fleck: Die Pflegekraft
                ist noch da — aber die Bindung ist bereits gefährdet. Und wenn die Kündigung kommt,
                ist es oft zu spät.
              </p>
            </div>
            <div className="wb-feature__media">
              <img src={gfxProblem} alt="Pflegerin mit ersten Zweifeln — Verlauf von Start über Zweifel bis Risiko" />
            </div>
          </div>
        </div>
      </section>

      {/* KOSTEN FRÜHFLUKTUATION */}
      <section className="section">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Was Frühfluktuation kostet</Eyebrow>
            <h2 className="section__title">
              Die teuerste Stelle ist die, die zweimal besetzt werden muss.
            </h2>
            <p className="section__lead">
              Frühfluktuation kostet mehr als Geld. Sie kostet Zeit, Vertrauen, Dienstplanstabilität
              und Energie — und das belastendste Gefühl ist, wieder bei null zu starten.
            </p>
          </div>
          <ul className="wb-cost">
            {costPoints.map(c => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </section>

      {/* WAS IST DIE WECHSELBEGLEITUNG */}
      <section className="section section--soft">
        <div className="container">
          <div className="wb-feature wb-feature--reverse">
            <div className="wb-feature__media">
              <img src={gfxWasIst} alt="Die Medilane Wechselbegleitung als 180-Tage-Kreislauf von Start bis Tag 180" />
            </div>
            <div className="wb-feature__copy">
              <Eyebrow>Was ist die Wechselbegleitung?</Eyebrow>
              <h2 className="section__title wb-feature__title">
                Ein strukturierter 180-Tage-Prozess nach Arbeitsbeginn.
              </h2>
              <p className="wb-feature__text">
                Wir begleiten die neue Pflegefachkraft und deine Einrichtung durch die kritische
                Anfangsphase und prüfen regelmäßig, ob die Erwartungen aus dem Matching im Alltag
                tatsächlich erfüllt werden. Der Fokus liegt nicht auf Kontrolle — sondern auf
                Passung, Vertrauen und Verbleib.
              </p>
              <div className="wb-chips">
                {betrachtenChips.map(c => <span key={c} className="wb-chip">{c}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PASSUNG STATT LEISTUNG */}
      <section className="section">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Passung statt Leistung</Eyebrow>
            <h2 className="section__title">
              Wir begleiten nicht die Leistung. Wir begleiten die Passung.
            </h2>
            <p className="section__lead">
              Die Wechselbegleitung ist keine Leistungsbewertung. Wir prüfen eine viel wichtigere
              Frage: Wird das Versprechen aus dem Bewerbungsprozess im Alltag eingelöst?
            </p>
          </div>
          <div className="wb-map">
            {mapCards.map(m => (
              <div key={m.reason} className="wb-map__card">
                <span className="wb-map__reason">{m.reason}</span>
                <span className="wb-map__arrow" aria-hidden="true">↓</span>
                <span className="wb-map__focus">{m.focus}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERTRAUEN / FREIGABEPRINZIP (dunkel) */}
      <section className="section section--ink">
        <div className="container">
          <div className="wb-system">
            <div className="wb-system__copy">
              <Eyebrow>Der Vertrauensfaktor</Eyebrow>
              <h2 className="wb-system__title">Vertrauen schafft ehrliches Feedback.</h2>
              <p className="wb-system__lead">
                Pflegekräfte sprechen nur dann offen, wenn nicht jede Aussage automatisch beim
                Arbeitgeber landet. Deshalb arbeitet Medilane mit einem klaren Freigabeprinzip —
                persönliche Inhalte aus Check-ins gehen nur an die Einrichtung, wenn die
                Pflegekraft sie ausdrücklich freigibt.
              </p>
              <p className="wb-system__lead">
                Das ist kein Nachteil. Es ist der Grund, warum die Begleitung überhaupt funktioniert.
                Ohne Vertraulichkeit hörst du oft nur „Passt schon." Mit Vertraulichkeit entstehen
                ehrliche Frühwarnsignale, aus denen bei Freigabe konkrete Maßnahmen werden.
              </p>
            </div>
            <div className="wb-system__media">
              <img src={gfxVertrauen} alt="Vertraulicher, geschützter Rahmen mit Freigabeprinzip für ehrliches Feedback" />
            </div>
          </div>
        </div>
      </section>

      {/* WAS DIE EINRICHTUNG KONKRET ERHÄLT */}
      <section className="section">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Was du konkret erhältst</Eyebrow>
            <h2 className="section__title">
              Keine Rohzitate. Sondern freigegebene, lösungsorientierte Rückmeldungen.
            </h2>
          </div>

          <div className="wb-receive">
            <ul className="wb-checklist">
              {receiveList.map(r => <li key={r}>{r}</li>)}
            </ul>

            <div className="wb-example">
              <div className="wb-example__col wb-example__col--bad">
                <span className="wb-example__label">Nicht so</span>
                <p>„Die Pflegefachkraft hat gesagt, sie fühlt sich von der PDL nicht gesehen."</p>
              </div>
              <div className="wb-example__col wb-example__col--good">
                <span className="wb-example__label">Sondern so</span>
                <p>
                  „Aus Retentionssicht empfehlen wir ein kurzes Feedbackgespräch zur Einarbeitung
                  und zur Kommunikation mit der direkten Ansprechperson."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="section section--soft" id="ablauf">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Der Ablauf</Eyebrow>
            <h2 className="section__title">Sieben Check-ins über 180 Tage.</h2>
            <p className="section__lead">
              Jeder Check-in hat einen klaren Fokus — vom organisatorischen Start bis zum
              Retentionsabschluss. So werden Probleme sichtbar, bevor sie zur Kündigung führen.
            </p>
          </div>

          <div className="wb-flow">
            {flow.map((f, i) => (
              <div key={f.day} className={`wb-flow__row ${i === 0 || i === flow.length - 1 ? 'wb-flow__row--active' : ''}`}>
                <div className="wb-flow__marker">
                  <span className="wb-flow__day">{f.day}</span>
                  <span className="wb-flow__dot" />
                </div>
                <div className="wb-flow__body">
                  <h3 className="wb-flow__title">{f.title}</h3>
                  <p className="wb-flow__desc">{f.desc}</p>
                  <ul className="wb-flow__list">
                    {f.points.map(p => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEIN MEHRWERT — 6 Vorteile */}
      <section className="section">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Dein Mehrwert als Einrichtung</Eyebrow>
            <h2 className="section__title">Sechs Gründe, die Anfangsphase nicht dem Zufall zu überlassen.</h2>
          </div>
          <div className="pillars">
            {benefits.map(b => (
              <div key={b.num} className="pillar">
                <span className="pillar__num">
                  <span className="dot" />
                  {b.num}
                </span>
                <h3 className="pillar__title">{b.title}</h3>
                <p className="pillar__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PSYCHOLOGISCHER MEHRWERT */}
      <section className="section section--soft">
        <div className="container">
          <div className="wb-feature">
            <div className="wb-feature__copy">
              <Eyebrow>Der psychologische Mehrwert</Eyebrow>
              <h2 className="section__title wb-feature__title">
                Die Pflegekraft fühlt sich nicht allein gelassen.
              </h2>
              <p className="wb-feature__text">
                Ein Stellenwechsel ist selten leichtfertig. Pflegekräfte wechseln, weil im alten
                Arbeitsverhältnis etwas nicht mehr tragfähig war:
              </p>
              <div className="wb-chips">
                {emotionReasons.map(r => <span key={r} className="wb-chip">{r}</span>)}
              </div>
              <p className="wb-feature__text">
                Beim Neustart bringt die Pflegekraft Hoffnung mit — aber auch Vorsicht. Sie
                beobachtet genau: Ist es hier wirklich anders? Werde ich ernst genommen? Medilane
                sorgt dafür, dass diese Fragen nicht unausgesprochen bleiben. Und Vertrauen ist
                einer der stärksten Faktoren für Verbleib.
              </p>
            </div>
            <div className="wb-feature__media">
              <img src={gfxUebersicht} alt="Pflegekraft und Einrichtung verbunden — Onboarding, Feedback und Verbleib im Blick" />
            </div>
          </div>
        </div>
      </section>

      {/* MOMENT BREAK */}
      <section className="home-moment">
        <div className="container container--wide">
          <div className="home-moment__inner">
            <img src={momentFoto} alt="Pflegerin und Bewohnerin im Rollstuhl, lächelnd auf Augenhöhe" />
            <div className="home-moment__overlay">
              <p className="home-moment__quote">
                Mitarbeiterbindung beginnt nicht nach der Probezeit.<br />
                Sie beginnt am <em>ersten</em> Tag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ERGEBNIS */}
      <section className="section">
        <div className="container">
          <div className="wb-feature wb-feature--reverse">
            <div className="wb-feature__media">
              <img src={gfxErgebnis} alt="Erfolg, der bleibt — Stabilität, Integration und Bindung weit über 180 Tage hinaus" />
            </div>
            <div className="wb-feature__copy">
              <Eyebrow>Das Ergebnis</Eyebrow>
              <h2 className="section__title wb-feature__title">
                Aus einer Einstellung wird eine stabile Zusammenarbeit.
              </h2>
              <p className="wb-feature__text">
                Eine Einrichtung, die neue Pflegekräfte nach Arbeitsbeginn begleitet, sendet ein
                klares Signal: Wir gewinnen Mitarbeitende nicht nur — wir kümmern uns darum, dass sie
                bleiben können. Das stärkt Vertrauen und deine Arbeitgebermarke.
              </p>
              <ul className="wb-checklist">
                {resultList.map(r => <li key={r}>{r}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KLARSTELLUNG + EIGNUNG */}
      <section className="section section--soft">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Klarer Rahmen</Eyebrow>
            <h2 className="section__title">Was die Wechselbegleitung ist — und was nicht.</h2>
          </div>
          <div className="wb-fit">
            <div className="wb-fit__card wb-fit__card--yes">
              <span className="wb-fit__label">
                <span className="dot" />Geeignet für …
              </span>
              <ul className="wb-fit__list">
                {fitFor.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
            <div className="wb-fit__card wb-fit__card--no">
              <span className="wb-fit__label">Was es ausdrücklich nicht ist …</span>
              <ul className="wb-fit__list wb-fit__list--no">
                {notWhat.map(f => <li key={f}>{f}</li>)}
              </ul>
              <p className="wb-fit__note">
                Medilane ist eine neutrale Begleitung zur Sicherung von Passung, Integration und
                Verbleib — mit strikter Trennung zwischen vertraulichen Gesprächsinhalten und
                freigegebenen Maßnahmenpunkten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Häufige Fragen</Eyebrow>
            <h2 className="section__title">Was Einrichtungen zur Wechselbegleitung fragen.</h2>
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
                Eine Pflegekraft zu gewinnen ist schwer. Sie wieder zu verlieren, ist schwerer.
              </h2>
              <p className="final-cta__sub">
                Mit der Wechselbegleitung 180 sicherst du die kritische Anfangsphase strukturiert ab —
                für Vertrauen, Frühwarnsignale und langfristigen Verbleib. Im kostenlosen Erstgespräch
                klären wir, ob sie zu deiner Einrichtung passt.
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
