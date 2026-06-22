import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Eyebrow from '../components/sections/Eyebrow'
import AvailabilityBar from '../components/sections/AvailabilityBar'
import ComparisonTable from '../components/sections/ComparisonTable'
import { getFunnelUrl } from '../lib/tracking'

// Echte Pflege-Fotos
import heroPortrait from '../assets/photos/portrait-pflegerin-handschuhe-arme-verschraenkt-hochformat.jpg'
import profilFoto from '../assets/photos/gespraech-pflegerin-junge-frau-rollstuhl-buero-querformat.jpg'
import momentFoto from '../assets/photos/pflegerin-seniorin-kueche-gespraech-tasse-querformat.jpg'

import './PflegekraeftePage.css'

const FUNNEL_HERO = getFunnelUrl('website', 'organic', 'nurse_hero')
const FUNNEL_STEPS = getFunnelUrl('website', 'organic', 'nurse_steps')
const FUNNEL_FINAL = getFunnelUrl('website', 'organic', 'nurse_final')

/* ----------------------------- Daten ----------------------------- */

const trustItems = [
  '100 % kostenlos für dich',
  'Diskret & anonym',
  'Wechselprofil in 3 Minuten',
  'Wechselprofil statt Lebenslauf',
  'Kein Druck, keine Verpflichtung',
]

const painPoints = [
  { title: 'Chaotische Dienstpläne', desc: 'Ständige Änderungen, kaum Planbarkeit.' },
  { title: 'Zu viele Einspringdienste', desc: 'Dauerhaft erreichbar, kein Ausgleich.' },
  { title: 'Schlechte Führung', desc: 'Kein Verständnis, kein Rückhalt von oben.' },
  { title: 'Teamprobleme', desc: 'Konflikte, Unterbesetzung, schlechte Stimmung.' },
  { title: 'Überlastung', desc: 'Körperlich und mental am Limit.' },
  { title: 'Zu wenig Zeit', desc: 'Keine Zeit für Patienten und Bewohner.' },
  { title: 'Fehlende Wertschätzung', desc: 'Engagement wird nicht gesehen.' },
  { title: 'Wiederholte Fehlwechsel', desc: 'Neuer Job, gleiche Probleme.' },
]

const profileItems = [
  'Wechselgründe', 'No-Gos', 'Wünsche an Führung & Team', 'Bevorzugte Arbeitsmodelle',
  'Gewünschte Bereiche', 'Schichtwünsche', 'Regionale Vorstellungen',
  'Prioritäten (Gehalt, Dienstplan, Arbeitsweg)',
]

const usps = [
  { num: '01', title: 'Echte Wechselbegleitung', desc: 'Kein anonymer Job-Link, sondern persönliche Begleitung beim Übergang in deinen neuen Job.' },
  { num: '02', title: 'Diskret & unverbindlich', desc: 'Orientiere dich frei, ohne dich festzulegen. Dein Arbeitgeber erfährt nichts.' },
  { num: '03', title: 'Wechselprofil statt CV', desc: 'Deine Wünsche, No-Gos und Prioritäten zählen — nicht nur Lebenslauf und Berufstitel.' },
  { num: '04', title: 'Passung vor Geschwindigkeit', desc: 'Ziel ist nicht der schnellste Wechsel, sondern ein wirklich sinnvoller.' },
  { num: '05', title: 'Weniger Fehlwechsel', desc: 'Durch die tiefere Erfassung deiner Wechselmotive landest du nicht wieder am falschen Ort.' },
  { num: '06', title: 'Echte Arbeitsrealität', desc: 'Dienstplan, Team, Führung, Arbeitsweg und Arbeitsmodell werden ernst genommen.' },
]

const steps = [
  { day: 'Schritt 1', title: 'Wechselprofil anlegen', desc: 'Berufliche Daten, Wünsche, Prioritäten und Wechselgründe. Drei Minuten.' },
  { day: 'Schritt 2', title: 'Profilanalyse', desc: 'Wir werten dein Profil strukturiert aus: Qualifikation, Region, Schichtwünsche, No-Gos.' },
  { day: 'Schritt 3', title: 'Matching', desc: 'Abgleich mit offenen Stellen und passenden Häusern über sechs Dimensionen.' },
  { day: 'Schritt 4', title: 'Vorauswahl', desc: 'Du siehst nur Optionen, die wirklich zu dir passen — keine Jobflut.' },
  { day: 'Schritt 5', title: 'Begleitung', desc: 'Wir bleiben da, bis klar ist, welche Stelle wirklich passt.' },
]

const comparisonRows = [
  { label: 'Was du siehst', classic: 'Offene Stellen — so viele wie möglich', medilane: 'Nur Optionen, die wirklich zu dir passen' },
  { label: 'Grundlage', classic: 'Dein Lebenslauf und Berufstitel', medilane: 'Dein Wechselprofil: Wünsche, No-Gos, Prioritäten' },
  { label: 'Diskretion', classic: 'Du bewirbst dich offen', medilane: 'Anonym — dein Arbeitgeber erfährt nichts' },
  { label: 'Nach dem Wechsel', classic: 'Du bist auf dich gestellt', medilane: 'Wechselbegleitung in den ersten 180 Tagen' },
  { label: 'Ziel', classic: 'Schnell vermittelt', medilane: 'Passung statt Fehlwechsel' },
]

const faqItems = [
  { q: 'Ist der Service kostenlos für mich?', a: 'Ja, für Pflegekräfte ist Medilane vollständig kostenlos. Wir finanzieren uns über den Arbeitgeber bei erfolgreicher Vermittlung.' },
  { q: 'Muss ich dafür meinen aktuellen Job kündigen?', a: 'Nein. Du erstellst zunächst nur dein Wechselprofil. Ein tatsächlicher Wechsel passiert nur, wenn du aktiv zustimmst.' },
  { q: 'Erfährt mein Arbeitgeber davon?', a: 'Nein. Dein Profil wird anonymisiert behandelt und erst nach deiner ausdrücklichen Zustimmung an einen Arbeitgeber weitergegeben.' },
  { q: 'Wie lange dauert es, bis ich Angebote bekomme?', a: 'In der Regel hörst du innerhalb von 48 Stunden von uns — mit ersten passenden Optionen.' },
  { q: 'Was, wenn ich noch unsicher bin?', a: 'Kein Problem. Viele Pflegekräfte nutzen das Wechselprofil zur Orientierung. Es gibt keinen Druck und keine Verpflichtung.' },
  { q: 'Welche Bereiche deckt ihr ab?', a: 'Stationäre Pflege, ambulante Pflege, Klinik, außerklinische Intensivpflege und betreutes Wohnen. Weitere Bereiche kommen laufend dazu.' },
]

/* ----------------------------- Seite ----------------------------- */

export default function PflegekraeftePage() {
  const [open, setOpen] = useState<number>(0)

  useEffect(() => {
    const prevTitle = document.title
    document.title = 'Pflegejob wechseln mit Medilane | Wechselprofil für Pflegekräfte'
    const meta = document.querySelector('meta[name="description"]')
    const prevDesc = meta?.getAttribute('content') ?? null
    if (meta) {
      meta.setAttribute(
        'content',
        'Finde als Pflegekraft einen Job, der fachlich, menschlich und organisatorisch zu dir passt. Diskret, kostenlos und mit persönlicher Wechselbegleitung — Wechselprofil statt Lebenslauf.',
      )
    }
    return () => {
      document.title = prevTitle
      if (meta && prevDesc !== null) meta.setAttribute('content', prevDesc)
    }
  }, [])

  return (
    <div className="pk-page">
      {/* HERO */}
      <section className="hero hero--b">
        <div className="container">
          <div className="hero__grid">
            <div>
              <div className="hero__topline">
                <Eyebrow>Für Pflegekräfte</Eyebrow>
              </div>
              <h1 className="hero__title">
                Nicht einfach wechseln. Wechsel <em>besser</em>.
              </h1>
              <p className="hero__sub">
                Finde einen Pflegejob, der nicht nur fachlich, sondern auch menschlich und
                organisatorisch zu dir passt. Diskret, kostenlos und mit persönlicher Begleitung —
                damit aus dem Wechsel kein neuer Fehlstart wird.
              </p>
              <div className="hero__cta">
                <a href={FUNNEL_HERO} className="btn btn--primary btn--lg">
                  Wechselprofil erstellen <span className="arrow" aria-hidden="true">→</span>
                </a>
                <Link to="/wechselberatung" className="btn btn--ghost btn--lg">
                  Mehr erfahren →
                </Link>
              </div>
              <p className="hero__note">100 % kostenlos · Diskret · In 3 Minuten</p>
              <div className="hero__avail">
                <AvailabilityBar />
              </div>
            </div>

            <div className="hero__image">
              <img
                src={heroPortrait}
                alt="Selbstbewusste Pflegefachkraft mit verschränkten Armen"
              />
              <div className="hero__image-overlay">
                <div className="avatar">LH</div>
                <div className="who">
                  <strong>„Endlich ein Job, der zu meinem Leben passt — nicht umgekehrt."</strong>
                  <span>Lena · Examinierte Altenpflegerin</span>
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
            <span className="trust-strip__label">Für Pflegekräfte</span>
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

      {/* PAIN POINTS */}
      <section className="section section--soft" id="probleme">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Kennst du das?</Eyebrow>
            <h2 className="section__title">
              Du willst nicht raus aus der Pflege — sondern raus aus deinem aktuellen Setting.
            </h2>
          </div>

          <div className="pk-pains">
            {painPoints.map(p => (
              <div key={p.title} className="pk-pain">
                <span className="pk-pain__marker" />
                <h3 className="pk-pain__title">{p.title}</h3>
                <p className="pk-pain__desc">{p.desc}</p>
              </div>
            ))}
          </div>

          <p className="pk-pain-result">
            Das Ergebnis: Viele wechseln den Arbeitgeber, landen aber wieder in ähnlichen
            Strukturen — weil sie nur auf offene Stellen schauen, nicht auf die echte Passung.
          </p>
        </div>
      </section>

      {/* WECHSELPROFIL */}
      <section className="section" id="wechselprofil">
        <div className="container">
          <div className="pk-feature">
            <div className="pk-feature__copy">
              <Eyebrow>Unser Ansatz</Eyebrow>
              <h2 className="section__title pk-feature__title">
                Dein Wechselprofil — mehr als ein Lebenslauf.
              </h2>
              <p className="pk-feature__text">
                Wir erfassen nicht nur deine Qualifikation, sondern deine echte Arbeitsrealität.
                Damit du einen Job findest, der wirklich passt — und nicht nur auf dem Papier.
              </p>
              <div className="pk-chips">
                {profileItems.map(item => <span key={item} className="pk-chip">{item}</span>)}
              </div>
            </div>
            <div className="pk-feature__media">
              <img src={profilFoto} alt="Pflegekraft im vertraulichen Gespräch über ihre Wechselwünsche" />
            </div>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="section section--soft" id="vorteile">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Deine Vorteile</Eyebrow>
            <h2 className="section__title">Warum Pflegekräfte mit uns wechseln.</h2>
          </div>
          <div className="pillars">
            {usps.map(u => (
              <div key={u.num} className="pillar">
                <span className="pillar__num">
                  <span className="dot" />
                  {u.num}
                </span>
                <h3 className="pillar__title">{u.title}</h3>
                <p className="pillar__desc">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERGLEICH */}
      <section className="section">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Im Vergleich</Eyebrow>
            <h2 className="section__title">
              Klassische Jobsuche zeigt dir Stellen. Wir zeigen dir Passung.
            </h2>
          </div>
          <ComparisonTable rows={comparisonRows} classicHeader="Klassische Jobsuche" medilaneHeader="Medilane" />
        </div>
      </section>

      {/* MOMENT BREAK */}
      <section className="home-moment">
        <div className="container container--wide">
          <div className="home-moment__inner">
            <img src={momentFoto} alt="Pflegerin und Seniorin im warmen Gespräch in der Küche" />
            <div className="home-moment__overlay">
              <p className="home-moment__quote">
                Du verdienst einen Job, der zu deinem <em>Leben</em> passt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="section" id="ablauf">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>So läuft es ab</Eyebrow>
            <h2 className="section__title">In fünf Schritten zum passenden Job.</h2>
          </div>

          <div className="timeline">
            {steps.map((s, i) => (
              <div
                key={s.day}
                className={`timeline__node ${i === 0 || i === steps.length - 1 ? 'timeline__node--active' : ''}`}
              >
                <span className="timeline__day">{s.day}</span>
                <span className="timeline__dot" />
                <span className="timeline__title">{s.title}</span>
                <span className="timeline__desc">{s.desc}</span>
              </div>
            ))}
          </div>

          <div className="pk-steps-cta">
            <a href={FUNNEL_STEPS} className="btn btn--primary btn--lg">
              Jetzt starten — kostenlos <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft" id="faq">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Häufige Fragen</Eyebrow>
            <h2 className="section__title">Deine Fragen — unsere Antworten.</h2>
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
                Du verdienst einen Job, der zu deinem Leben passt.
              </h2>
              <p className="final-cta__sub">
                Erstelle jetzt dein Wechselprofil und finde den Pflegejob, der nicht nur fachlich,
                sondern auch menschlich und organisatorisch passt. Diskret, kostenlos, unverbindlich.
              </p>
            </div>
            <div className="final-cta__col">
              <a href={FUNNEL_FINAL} className="btn btn--inverse btn--lg">
                <span>Wechselprofil erstellen</span>
                <span className="arrow" aria-hidden="true">→</span>
              </a>
              <Link to="/arbeitgeber-finden" className="btn btn--ghost btn--lg final-cta__ghost">
                <span>Lieber per Formular einreichen</span>
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <span className="final-cta__note">Antwort innerhalb von 48 Stunden · 100 % kostenlos</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
