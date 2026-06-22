import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Eyebrow from '../components/sections/Eyebrow'
import AvailabilityBar from '../components/sections/AvailabilityBar'
import { getFunnelUrl } from '../lib/tracking'

// Echte Pflege-Fotos
import heroPortrait from '../assets/photos/pflegerin-essenstablett-krankenzimmer-tuerblick-hochformat.jpg'
import momentFoto from '../assets/photos/pflegerin-stuetzt-seniorin-rollator-wuerdevoll-querformat.jpg'

import './Wechselberatung.css'

const FUNNEL_HERO = getFunnelUrl('website', 'organic', 'wechselberatung_hero')
const FUNNEL_FINAL = getFunnelUrl('website', 'organic', 'wechselberatung_final')

/* ----------------------------- Daten ----------------------------- */

const trustItems = [
  'Für Pflegekräfte kostenlos',
  'Vertraulich & anonym',
  'Ohne Druck, ohne Verpflichtung',
  '180-Tage-Begleitung',
  'Du bestimmst das Tempo',
]

const promises = [
  { num: '01', title: 'Du musst nicht den erstbesten Job nehmen', desc: 'Du wechselst nicht oft. Es darf also dauern, bis das Richtige dabei ist — wir nehmen uns die Zeit.' },
  { num: '02', title: 'Deine Dienstplanwünsche sind wichtig', desc: 'Wir fragen nicht nur, ob du früh oder spät arbeitest — sondern was Planbarkeit für dich wirklich bedeutet.' },
  { num: '03', title: 'Deine Belastungsgrenzen zählen', desc: 'No-Gos sind keine Schwäche, sondern Information. Was du ausschließt, gehört in den Match.' },
  { num: '04', title: 'Ein guter Wechsel beginnt mit ehrlicher Klärung', desc: 'Wir machen Erwartungen vorab konkret — auf beiden Seiten. So gibt es keine bösen Überraschungen nach dem ersten Dienst.' },
  { num: '05', title: 'Wir begleiten dich auch nach dem Start', desc: 'In den ersten 180 Tagen bleiben wir Ansprechpartner. Wenn etwas hakt, wird es früh angesprochen — nicht erst in der Kündigung.' },
]

const ablauf = [
  { day: 'Schritt 1', title: 'Unverbindliches Gespräch', desc: 'Du erzählst, was sich beruflich verändern soll. Wir hören zu. Kein Druck, kein Verkauf.' },
  { day: 'Schritt 2', title: 'Wechselprofil aufnehmen', desc: 'Wir erfassen Qualifikation, Wünsche, Belastungsgrenzen und No-Gos — strukturiert und vertraulich.' },
  { day: 'Schritt 3', title: 'Passende Einrichtung finden', desc: 'Wir prüfen unsere Mandate. Du siehst nur Einrichtungen, die wirklich zu deinen Punkten passen.' },
  { day: 'Schritt 4', title: 'Vorstellung begleiten', desc: 'Wir bereiten das Gespräch mit dir vor — auch die Fragen, die sonst niemand stellt.' },
  { day: 'Schritt 5', title: 'Wechsel & 180-Tage-Begleitung', desc: 'Nach dem Start bleiben wir an deiner Seite. Mit Check-ins, Klärung und neutraler Stimme.' },
]

const faqItems = [
  { q: 'Kostet mich die Vermittlung etwas?', a: 'Nein. Für Pflegekräfte ist unser Service vollständig kostenlos. Bezahlt werden wir von der Einrichtung — und nur dann, wenn ein stabiler Match entsteht.' },
  { q: 'Muss ich wechseln, wenn ich ein Gespräch führe?', a: 'Nein. Das erste Gespräch ist unverbindlich. Viele Pflegekräfte nutzen es, um sich überhaupt erst zu orientieren — und entscheiden später, ob und wann sie wechseln.' },
  { q: 'Werden meine Daten an meinen aktuellen Arbeitgeber gegeben?', a: 'Niemals. Deine Daten bleiben bei uns. Eine Weitergabe an potenzielle neue Einrichtungen erfolgt nur nach ausdrücklicher Abstimmung mit dir.' },
  { q: 'Kann ich bestimmte Dienstzeiten oder Bereiche ausschließen?', a: 'Ja, genau darum geht es im Matching. Deine Wünsche und No-Gos werden vorab klar — und sind Teil der Auswahl, nicht ein lästiges Detail im Gespräch.' },
  { q: 'Was, wenn ich nach dem Wechsel doch nicht zufrieden bin?', a: 'Dann meld dich. In den ersten 180 Tagen sind wir Ansprechpartner und können moderieren, Erwartungen neu klären oder im Zweifel auch nach einer anderen Lösung suchen.' },
]

/* ----------------------------- Seite ----------------------------- */

export default function Wechselberatung() {
  const [open, setOpen] = useState<number>(0)

  useEffect(() => {
    const prevTitle = document.title
    document.title = 'Wechselberatung für Pflegekräfte | Medilane'
    const meta = document.querySelector('meta[name="description"]')
    const prevDesc = meta?.getAttribute('content') ?? null
    if (meta) {
      meta.setAttribute(
        'content',
        'Wechsle nicht einfach den Arbeitgeber, sondern passend. Medilane hilft dir, eine Einrichtung zu finden, die zu deinem Alltag, deinen Grenzen und Vorstellungen passt — vertraulich, kostenlos und mit 180-Tage-Begleitung.',
      )
    }
    return () => {
      document.title = prevTitle
      if (meta && prevDesc !== null) meta.setAttribute('content', prevDesc)
    }
  }, [])

  return (
    <div className="wbr-page">
      {/* HERO */}
      <section className="hero hero--b">
        <div className="container">
          <div className="hero__grid">
            <div>
              <div className="hero__topline">
                <Eyebrow>Für Pflegekräfte</Eyebrow>
              </div>
              <h1 className="hero__title">
                Wechsle nicht einfach den Arbeitgeber. Wechsle <em>passend</em>.
              </h1>
              <p className="hero__sub">
                Ein Pflegejob-Wechsel ist mehr als eine neue Stellenbeschreibung. Wir helfen dir,
                eine Einrichtung zu finden, die zu deinem Alltag, deinen Grenzen und deinen
                Vorstellungen passt — und begleiten dich auch nach dem Start.
              </p>
              <div className="hero__cta">
                <a href={FUNNEL_HERO} className="btn btn--primary btn--lg">
                  Wechselprofil erstellen <span className="arrow" aria-hidden="true">→</span>
                </a>
                <Link to="/kontakt?typ=pflegekraft" className="btn btn--ghost btn--lg">
                  Unverbindliches Gespräch →
                </Link>
              </div>
              <p className="hero__note">Kostenlos · Vertraulich · Ohne Druck</p>
              <div className="hero__avail">
                <AvailabilityBar />
              </div>
            </div>

            <div className="hero__image">
              <img
                src={heroPortrait}
                alt="Pflegekraft im Krankenzimmer, konzentriert im Alltag"
              />
              <div className="hero__image-overlay">
                <div className="avatar">MK</div>
                <div className="who">
                  <strong>„Zum ersten Mal hat jemand nach meinen Grenzen gefragt — nicht nur nach meinem Examen."</strong>
                  <span>Marie · Gesundheits- und Krankenpflegerin</span>
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
            <span className="trust-strip__label">Wechselberatung</span>
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

      {/* PROMISES */}
      <section className="section section--soft">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Was wir dir versprechen</Eyebrow>
            <h2 className="section__title">Fünf Dinge, die wir anders machen.</h2>
            <p className="section__lead">
              Diese Punkte klingen selbstverständlich. In der Realität der Pflegevermittlung sind
              sie es leider oft nicht.
            </p>
          </div>
          <div className="pillars">
            {promises.map(p => (
              <div key={p.num} className="pillar">
                <span className="pillar__num">
                  <span className="dot" />
                  {p.num}
                </span>
                <h3 className="pillar__title">{p.title}</h3>
                <p className="pillar__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOMENT BREAK — Versprechen */}
      <section className="home-moment">
        <div className="container container--wide">
          <div className="home-moment__inner">
            <img src={momentFoto} alt="Pflegerin stützt eine Seniorin am Rollator — würdevolle Begleitung" />
            <div className="home-moment__overlay">
              <p className="home-moment__quote">
                Wir vermitteln dich nicht irgendwohin. Wir prüfen, ob es wirklich <em>passt</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="section">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>So gehen wir vor</Eyebrow>
            <h2 className="section__title">In fünf Schritten zum passenden Job.</h2>
          </div>

          <div className="timeline">
            {ablauf.map((a, i) => (
              <div
                key={a.day}
                className={`timeline__node ${i === 0 || i === ablauf.length - 1 ? 'timeline__node--active' : ''}`}
              >
                <span className="timeline__day">{a.day}</span>
                <span className="timeline__dot" />
                <span className="timeline__title">{a.title}</span>
                <span className="timeline__desc">{a.desc}</span>
              </div>
            ))}
          </div>

          <div className="wbr-cta">
            <a href={FUNNEL_HERO} className="btn btn--primary btn--lg">
              Wechselprofil erstellen <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container">
          <div className="section__head section__head--center">
            <Eyebrow>Häufige Fragen</Eyebrow>
            <h2 className="section__title">Was Pflegekräfte uns am häufigsten fragen.</h2>
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
              <h2 className="final-cta__title">Bereit für den nächsten Schritt?</h2>
              <p className="final-cta__sub">
                Erstelle dein Wechselprofil oder vereinbare ein unverbindliches Gespräch. Beides ist
                kostenlos — und nichts davon ist verpflichtend. Du entscheidest, wie es weitergeht.
              </p>
            </div>
            <div className="final-cta__col">
              <a href={FUNNEL_FINAL} className="btn btn--inverse btn--lg">
                <span>Wechselprofil erstellen</span>
                <span className="arrow" aria-hidden="true">→</span>
              </a>
              <Link to="/kontakt?typ=pflegekraft" className="btn btn--ghost btn--lg final-cta__ghost">
                <span>Lieber per Formular</span>
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
