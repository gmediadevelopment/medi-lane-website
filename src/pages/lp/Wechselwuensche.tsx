import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Phone, ShieldCheck, CheckCircle, Clock, Lock, Heart,
  MessagesSquare, Search, ListChecks, Sparkles, AlertOctagon, Users,
} from 'lucide-react'
import Lockup from '../../components/sections/Lockup'
import Eyebrow from '../../components/sections/Eyebrow'
import ImageSlot from '../../components/sections/ImageSlot'
import ComparisonTable from '../../components/sections/ComparisonTable'
import FAQAccordion from '../../components/ui/FAQAccordion'
import { trackEvent, getFunnelUrl } from '../../lib/tracking'
import WechselwuenscheForm from './WechselwuenscheForm'
import './Wechselwuensche.css'

const PHONE_DISPLAY = '+49 (0) 000 000 000'
const PHONE_HREF = 'tel:+4900000000'

const PROBLEM_TILES = [
  'Dienstpläne, die kaum planbar sind',
  'Ständiges Einspringen',
  'Zu wenig Personal im Dienst',
  'Zu wenig Zeit für gute Pflege',
  'Schlechte Kommunikation mit der Leitung',
  'Fehlende Wertschätzung',
  'Zu lange Wege oder unpassende Arbeitszeiten',
  'Aufgaben, die nicht zu deiner Qualifikation passen',
  'Versprechen, die im Alltag nicht gehalten werden',
]

export const NO_GO_OPTIONS = [
  'ständiges kurzfristiges Einspringen',
  'unklare Dienstpläne',
  'schlechte Stimmung im Team',
  'fehlende Einarbeitung',
  'zu wenig Personal',
  'keine Wertschätzung',
  'zu hohe körperliche Belastung',
  'schlechte Führung',
  'zu wenig Zeit für Bewohner / Patienten',
  'keine Entwicklungsmöglichkeiten',
  'zu langer Arbeitsweg',
  'unfaire Bezahlung',
]

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Du erzählst uns, was wirklich passen muss',
    desc: 'Du gibst Wechselwünsche, Must-haves und No-Gos an: Dienstzeiten, Arbeitsbereich, Teamkultur, Pendelweg, Belastung, Gehalt und Entwicklung.',
  },
  {
    num: '02',
    title: 'Wir prüfen passende Einrichtungen',
    desc: 'Wir gleichen deine Vorstellungen mit Einrichtungen ab, die zu dir passen könnten. Nicht nur freie Stellen — echte Passung.',
  },
  {
    num: '03',
    title: 'Du entscheidest, ob du weitergehst',
    desc: 'Du bekommst passende Vorschläge und entscheidest selbst, ob du Kontakt aufnimmst. Keine Bewerbung wird ohne deine Zustimmung weitergegeben.',
  },
]

const COMPARE_ROWS = [
  { label: 'Ausgangspunkt',  classic: 'Du suchst selbst durch viele Anzeigen', medilane: 'Wir starten mit deinen Wechselwünschen' },
  { label: 'Vergleichbarkeit', classic: 'Viele Stellen klingen gleich', medilane: 'Wir achten auf konkrete Passung' },
  { label: 'Informationen', classic: 'Du erfährst vieles erst im Gespräch', medilane: 'Wichtige Faktoren werden vorher abgeglichen' },
  { label: 'Bewerbung', classic: 'Du bewirbst dich ins Ungewisse', medilane: 'Du entscheidest nach passenden Vorschlägen' },
  { label: 'Ziel', classic: 'Stelle besetzt', medilane: 'Wechsel passt zu dir' },
]

const FAQ_ITEMS = [
  {
    question: 'Ist Medilane für mich kostenlos?',
    answer: 'Ja, für Pflegekräfte ist Medilane vollständig kostenlos. Wir werden vom Arbeitgeber bezahlt — und nur, wenn ein stabiler Match entsteht.',
  },
  {
    question: 'Muss ich mich sofort bewerben?',
    answer: 'Nein. Du trägst nur deine Wechselwünsche ein. Eine Bewerbung passiert erst, wenn du nach einem konkreten Vorschlag aktiv zustimmst.',
  },
  {
    question: 'Wer sieht meine Daten?',
    answer: 'Zunächst nur das Medilane-Team. Eine Weitergabe an Einrichtungen erfolgt ausschließlich nach deiner ausdrücklichen Zustimmung.',
  },
  {
    question: 'Kann ich mich auch eintragen, wenn ich noch unsicher bin?',
    answer: 'Ja. Viele Pflegekräfte nutzen das Wechselprofil zur Orientierung. Es gibt keinen Druck und keinen festgelegten Zeitpunkt.',
  },
  {
    question: 'Was passiert nach dem Absenden?',
    answer: 'Wir melden uns innerhalb von 1–2 Werktagen vertraulich. Wir hören zu, klären offene Punkte und prüfen erste Passungen.',
  },
  {
    question: 'Kann ich bestimmte Einrichtungen ausschließen?',
    answer: 'Ja. Du kannst Häuser, Ketten oder Regionen ausschließen. Diese Information bleibt vertraulich.',
  },
  {
    question: 'Was, wenn ich nur Teilzeit suche?',
    answer: 'Das ist Teil des Matches. Wir prüfen Einrichtungen, die deinen Stundenwunsch tatsächlich ermöglichen können.',
  },
]

const TRUST_POINTS = [
  'Deine Angaben werden vertraulich behandelt',
  'Keine Weitergabe an Einrichtungen ohne deine Zustimmung',
  'Du entscheidest, welche Vorschläge interessant sind',
  'Du musst dich nicht sofort bewerben',
  'Du bekommst keine beliebigen Massenangebote',
  'Deine Wünsche und No-Gos werden ernst genommen',
  'Die Nutzung ist für dich kostenlos und unverbindlich',
]

export default function Wechselwuensche() {
  const [selectedNoGos, setSelectedNoGos] = useState<string[]>([])
  const [showStickyCta, setShowStickyCta] = useState(false)
  const heroCtaRef = useRef<HTMLAnchorElement | null>(null)
  const formRef = useRef<HTMLDivElement | null>(null)

  // Set page title for the LP (since this page is outside WebsiteLayout)
  useEffect(() => {
    const prev = document.title
    document.title = 'Wechsel deinen Pflegejob besser — Medilane'
    return () => {
      document.title = prev
    }
  }, [])

  // Sticky-Mobile-CTA: erscheint sobald der Hero-CTA aus dem Viewport ist
  useEffect(() => {
    const target = heroCtaRef.current
    if (!target) return
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyCta(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  const toggleNoGo = (item: string) => {
    setSelectedNoGos(prev =>
      prev.includes(item) ? prev.filter(x => x !== item) : [...prev, item]
    )
    trackEvent('lp_nogo_toggle', { item })
  }

  const scrollToForm = (source: string) => {
    trackEvent('lp_form_scroll', { source })
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const funnelSecondary = getFunnelUrl('google', 'cpc', 'lp_wechselwuensche_funnel')

  return (
    <div className="wlp">
      {/* ============================================
          MINI BRAND BAR (statt Header)
          ============================================ */}
      <header className="wlp-bar">
        <div className="wlp-bar__inner">
          <Lockup as="span" />
          <a href={PHONE_HREF} className="wlp-bar__phone" aria-label="Telefonnummer">
            <Phone size={16} />
            <span className="wlp-bar__phone-copy">
              <span className="wlp-bar__phone-label">Lieber sprechen?</span>
              <span className="wlp-bar__phone-number">{PHONE_DISPLAY}</span>
            </span>
          </a>
        </div>
      </header>

      {/* ============================================
          1 · HERO
          ============================================ */}
      <section className="wlp-hero">
        <div className="wlp-hero__bg" />
        <div className="wlp-container wlp-hero__inner">
          <div className="wlp-hero__copy">
            <Eyebrow>Für Pflegekräfte</Eyebrow>
            <h1 className="wlp-hero__title">
              Wechsel deinen Pflegejob nicht einfach.<br />
              Wechsel <em>besser</em>.
            </h1>
            <p className="wlp-hero__sub">
              Viele Pflegekräfte wechseln den Arbeitgeber — und landen bei denselben
              Problemen. Bei Medilane beginnt dein Wechsel deshalb nicht mit irgendeiner
              offenen Stelle, sondern mit deinen Wünschen, Grenzen und No-Gos.
            </p>
            <div className="wlp-hero__cta">
              <a
                ref={heroCtaRef}
                href="#formular"
                className="btn btn--primary btn--lg"
                onClick={e => {
                  e.preventDefault()
                  scrollToForm('hero')
                }}
              >
                Jetzt Wechselwünsche eintragen
                <ArrowRight size={20} />
              </a>
            </div>
            <ul className="wlp-hero__trust">
              <li><CheckCircle size={14} /> Kostenlos und unverbindlich</li>
              <li><Lock size={14} /> Keine Bewerbung ohne deine Zustimmung</li>
              <li><Heart size={14} /> Persönliche Begleitung</li>
            </ul>
          </div>

          <div className="wlp-hero__image">
            <ImageSlot
              tag="Bildplatzhalter · Porträt 4:5"
              caption="Ruhiges Porträt einer Pflegekraft im Alltagslicht. Keine Pose, keine Inszenierung."
              aspectRatio="4 / 5"
            />
          </div>
        </div>
      </section>

      {/* ============================================
          2 · PROBLEMSPIEGEL
          ============================================ */}
      <section className="wlp-section wlp-section--soft">
        <div className="wlp-container">
          <div className="wlp-head">
            <Eyebrow>Du bist nicht allein</Eyebrow>
            <h2 className="wlp-head__title">
              Vielleicht suchst du nicht einfach einen neuen Job. Vielleicht suchst du endlich bessere Bedingungen.
            </h2>
            <p className="wlp-head__lead">
              Das sind die Gründe, aus denen die meisten Pflegekräfte uns kontaktieren.
            </p>
          </div>

          <div className="wlp-problem-grid">
            {PROBLEM_TILES.map(text => (
              <div key={text} className="wlp-problem-tile">
                <AlertOctagon size={16} />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="wlp-quote-ink">
            Ein neuer Job bringt nur dann etwas, wenn die alten Probleme nicht einfach mitwechseln.
          </div>
        </div>
      </section>

      {/* ============================================
          3 · PERSPEKTIVWECHSEL
          ============================================ */}
      <section className="wlp-section">
        <div className="wlp-container">
          <div className="wlp-head">
            <Eyebrow>So denken wir</Eyebrow>
            <h2 className="wlp-head__title">
              Darum starten wir nicht mit offenen Stellen. Sondern mit dir.
            </h2>
            <p className="wlp-head__lead">
              Bei Medilane trägst du zuerst ein, was dir beim nächsten Job wichtig ist.
              Nicht nur Beruf, Stunden und Region — sondern Arbeitsweise, Team, Dienstplan,
              Belastungsgrenzen, Wunschbereiche und Dinge, die du im neuen Job vermeiden
              möchtest. Erst danach prüfen wir, welche Einrichtungen wirklich zu deinem
              Profil passen könnten.
            </p>
          </div>

          <div className="wlp-pivot-box">
            <Sparkles size={20} />
            <p>Deine Wünsche sind bei uns kein Extra. Sie sind die Grundlage des Matches.</p>
          </div>
        </div>
      </section>

      {/* ============================================
          4 · NO-GO-PILLS (Investitions-Mechanik)
          ============================================ */}
      <section className="wlp-section wlp-section--soft">
        <div className="wlp-container">
          <div className="wlp-head">
            <Eyebrow>Was nicht wieder passieren darf</Eyebrow>
            <h2 className="wlp-head__title">
              Was soll sich bei deinem nächsten Job nicht wiederholen?
            </h2>
            <p className="wlp-head__lead">
              Klick einfach an, was bei dir war. Wir nehmen das ins Formular mit — du musst es
              dort nicht noch einmal eingeben.
            </p>
          </div>

          <div className="wlp-pill-grid">
            {NO_GO_OPTIONS.map(item => {
              const active = selectedNoGos.includes(item)
              return (
                <button
                  key={item}
                  type="button"
                  className={`wlp-pill ${active ? 'wlp-pill--active' : ''}`}
                  onClick={() => toggleNoGo(item)}
                  aria-pressed={active}
                >
                  <span className="wlp-pill__check">
                    {active ? <CheckCircle size={14} /> : null}
                  </span>
                  {item}
                </button>
              )
            })}
          </div>

          <p className="wlp-nogo-note">
            Manchmal weiß man gar nicht sofort, was man will. Aber sehr genau, was man nicht
            mehr möchte. Genau das berücksichtigen wir.
          </p>

          <div className="wlp-pill-cta">
            <a
              href="#formular"
              className="btn btn--primary btn--lg"
              onClick={e => {
                e.preventDefault()
                scrollToForm('no_go_pills')
              }}
            >
              {selectedNoGos.length > 0
                ? `Diese ${selectedNoGos.length} No-Gos ins Formular mitnehmen`
                : 'Wechselwünsche im Formular eintragen'}
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          5 · ABLAUF
          ============================================ */}
      <section className="wlp-section">
        <div className="wlp-container">
          <div className="wlp-head">
            <Eyebrow>So geht's</Eyebrow>
            <h2 className="wlp-head__title">In drei Schritten zu einem besseren Job-Match.</h2>
          </div>

          <div className="wlp-steps">
            {PROCESS_STEPS.map(step => (
              <div key={step.num} className="wlp-step">
                <span className="wlp-step__num">
                  <span className="dot" />
                  {step.num}
                </span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          6 · VERGLEICH
          ============================================ */}
      <section className="wlp-section wlp-section--soft">
        <div className="wlp-container">
          <div className="wlp-head">
            <Eyebrow>Was wir anders machen</Eyebrow>
            <h2 className="wlp-head__title">
              Kein Job-Spam. Kein Druck. Kein Wechsel ins Blaue.
            </h2>
          </div>

          <ComparisonTable
            rows={COMPARE_ROWS}
            classicHeader="Klassische Jobsuche"
            medilaneHeader="Medilane"
          />

          <p className="wlp-compare-note">
            Unser Ziel ist nicht, dich möglichst schnell irgendwo unterzubringen. Unser Ziel
            ist, dass dein nächster Wechsel besser zu dir passt.
          </p>
        </div>
      </section>

      {/* ============================================
          7 · RISIKO-SENKER (vor dem Formular)
          ============================================ */}
      <section className="wlp-section">
        <div className="wlp-container wlp-container--narrow">
          <div className="wlp-risk">
            <h2>Du musst nicht erst kündigen, um dich neu zu orientieren.</h2>
            <p>
              Viele Pflegekräfte warten zu lange, obwohl sie längst merken, dass etwas nicht
              mehr passt. Bei Medilane kannst du dich unverbindlich eintragen und prüfen lassen,
              welche Möglichkeiten zu deinen Vorstellungen passen könnten. Du entscheidest danach
              selbst, ob du einen nächsten Schritt gehen möchtest.
            </p>
            <a
              href="#formular"
              className="btn btn--primary btn--lg"
              onClick={e => {
                e.preventDefault()
                scrollToForm('risk_section')
              }}
            >
              Wechselwünsche jetzt eintragen
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          8 · FORMULAR + 9 · VERTRAUENS-BOX
          ============================================ */}
      <section className="wlp-section wlp-section--soft" id="formular">
        <div className="wlp-container">
          <div className="wlp-head">
            <Eyebrow>Starte mit deinen Wechselwünschen</Eyebrow>
            <h2 className="wlp-head__title">
              Sechs kurze Schritte. Drei Minuten. Du entscheidest, wie weit du gehst.
            </h2>
          </div>

          <div className="wlp-form-split">
            <div className="wlp-form-card" ref={formRef}>
              <WechselwuenscheForm preselectedNoGos={selectedNoGos} />
            </div>

            <aside className="wlp-trust">
              <h3>Was du bei Medilane erwarten kannst</h3>
              <ul>
                {TRUST_POINTS.map(point => (
                  <li key={point}>
                    <CheckCircle size={16} />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="wlp-trust__personal">
                <Users size={18} />
                <span>
                  Du sprichst nicht mit einem anonymen Portal, sondern mit Menschen, die deinen
                  Wechsel sauber begleiten.
                </span>
              </div>
              <div className="wlp-trust__phone">
                <Phone size={16} />
                <span>
                  <strong>Lieber direkt sprechen?</strong>
                  <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
                  <em>Mo–Fr 9–18 Uhr · vertraulich</em>
                </span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============================================
          10 · FAQ
          ============================================ */}
      <section className="wlp-section">
        <div className="wlp-container wlp-container--narrow">
          <div className="wlp-head wlp-head--center">
            <Eyebrow>Häufige Fragen</Eyebrow>
            <h2 className="wlp-head__title">Was Pflegekräfte uns am häufigsten fragen.</h2>
          </div>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* ============================================
          11 · FINAL CTA + FUNNEL-SEKUNDÄRANKER
          ============================================ */}
      <section className="wlp-section wlp-final">
        <div className="wlp-container">
          <div className="wlp-final__box">
            <h2>Bereit für einen Wechsel, der besser zu dir passt?</h2>
            <p>
              Drei Minuten. Kostenlos. Unverbindlich. Du gibst nur preis, was du selbst preisgeben willst.
            </p>
            <div className="wlp-final__cta">
              <a
                href="#formular"
                className="btn btn--inverse btn--lg"
                onClick={e => {
                  e.preventDefault()
                  scrollToForm('final_cta')
                }}
              >
                Jetzt Wechselwünsche eintragen
                <ArrowRight size={20} />
              </a>
              <a href={PHONE_HREF} className="wlp-final__phone">
                <Phone size={14} />
                Lieber direkt sprechen? {PHONE_DISPLAY} · Mo–Fr 9–18 Uhr
              </a>
            </div>
            <p className="wlp-final__alt">
              Lieber das volle Wechselprofil direkt im Portal anlegen?{' '}
              <a
                href={funnelSecondary}
                onClick={() => trackEvent('lp_funnel_click', { from: 'final_cta' })}
              >
                Zum Self-Service-Portal →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          12 · MINI FOOTER
          ============================================ */}
      <footer className="wlp-footer">
        <div className="wlp-container wlp-footer__inner">
          <span className="wlp-footer__copy">
            © {new Date().getFullYear()} · Medilane
          </span>
          <nav className="wlp-footer__nav">
            <Link to="/impressum" target="_blank" rel="noopener">Impressum</Link>
            <Link to="/datenschutz" target="_blank" rel="noopener">Datenschutz</Link>
            <Link to="/kontakt" target="_blank" rel="noopener">Kontakt</Link>
          </nav>
        </div>
      </footer>

      {/* ============================================
          STICKY MOBILE CTA
          ============================================ */}
      {showStickyCta && (
        <div className="wlp-sticky">
          <a
            href="#formular"
            className="btn btn--primary"
            onClick={e => {
              e.preventDefault()
              scrollToForm('sticky')
            }}
          >
            Wechselwünsche eintragen <ArrowRight size={16} />
          </a>
        </div>
      )}

      {/* Markers used by the form to hint at brand context */}
      <span hidden>
        <ListChecks size={0} />
        <MessagesSquare size={0} />
        <Search size={0} />
        <ShieldCheck size={0} />
        <Clock size={0} />
      </span>
    </div>
  )
}
