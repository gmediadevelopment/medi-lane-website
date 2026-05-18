import { Link } from 'react-router-dom'
import {
  ArrowRight, Heart, ShieldCheck, Compass, MessagesSquare, HandHeart,
  CheckCircle, Quote,
} from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import FAQAccordion from '../components/ui/FAQAccordion'
import './Wechselberatung.css'

const promises = [
  {
    icon: <Heart size={28} />,
    title: 'Sie müssen nicht den erstbesten Job nehmen',
    description:
      'Sie wechseln nicht oft. Es darf also etwas dauern, bis das Richtige dabei ist — wir nehmen uns die Zeit.',
  },
  {
    icon: <Compass size={28} />,
    title: 'Ihre Dienstplanwünsche sind wichtig',
    description:
      'Wir fragen nicht nur, ob Sie früh oder spät arbeiten — sondern was Planbarkeit für Sie wirklich bedeutet.',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Ihre Belastungsgrenzen werden ernst genommen',
    description:
      'No-Gos sind keine Schwäche, sondern Information. Was Sie ausschließen, gehört in den Match.',
  },
  {
    icon: <MessagesSquare size={28} />,
    title: 'Ein guter Wechsel beginnt mit ehrlicher Klärung',
    description:
      'Wir machen Erwartungen vorab konkret — auf beiden Seiten. So entstehen keine bösen Überraschungen nach dem ersten Dienst.',
  },
  {
    icon: <HandHeart size={28} />,
    title: 'Wir begleiten Sie auch nach dem Start',
    description:
      'In den ersten 180 Tagen bleiben wir Ansprechpartner. Wenn etwas hakt, wird es früh angesprochen — nicht erst in der Kündigung.',
  },
]

const ablauf = [
  {
    nr: '1',
    title: 'Unverbindliches Gespräch',
    desc: 'Sie erzählen, was sich beruflich verändern soll. Wir hören zu. Kein Druck, kein Verkauf.',
  },
  {
    nr: '2',
    title: 'Wechselprofil aufnehmen',
    desc: 'Wir erfassen Qualifikation, Wünsche, Belastungsgrenzen und No-Gos — strukturiert und vertraulich.',
  },
  {
    nr: '3',
    title: 'Passende Einrichtung finden',
    desc: 'Wir prüfen unsere Mandate. Sie sehen nur Einrichtungen, die wirklich zu Ihren Punkten passen.',
  },
  {
    nr: '4',
    title: 'Vorstellung begleiten',
    desc: 'Wir bereiten das Gespräch mit Ihnen vor — auch die Fragen, die sonst niemand stellt.',
  },
  {
    nr: '5',
    title: 'Wechsel und 180-Tage-Begleitung',
    desc: 'Nach dem Start bleiben wir an Ihrer Seite. Mit Check-ins, Klärung und neutraler Stimme.',
  },
]

const faqItems = [
  {
    question: 'Kostet mich die Vermittlung etwas?',
    answer:
      'Nein. Für Pflegekräfte ist unser Service vollständig kostenlos. Bezahlt werden wir von der Einrichtung — und nur dann, wenn ein stabiler Match entsteht.',
  },
  {
    question: 'Muss ich wechseln, wenn ich ein Gespräch führe?',
    answer:
      'Nein. Das erste Gespräch ist unverbindlich. Viele Pflegekräfte nutzen es, um sich überhaupt erst zu orientieren — und entscheiden später, ob und wann sie wechseln.',
  },
  {
    question: 'Werden meine Daten an meinen aktuellen Arbeitgeber gegeben?',
    answer:
      'Niemals. Ihre Daten bleiben bei uns. Eine Weitergabe an potenzielle neue Einrichtungen erfolgt nur nach ausdrücklicher Abstimmung mit Ihnen.',
  },
  {
    question: 'Kann ich bestimmte Dienstzeiten oder Bereiche ausschließen?',
    answer:
      'Ja, genau darum geht es im Matching. Ihre Wünsche und No-Gos werden vorab klar — und sind Teil der Auswahl, nicht ein lästiges Detail im Gespräch.',
  },
  {
    question: 'Was, wenn ich nach dem Wechsel doch nicht zufrieden bin?',
    answer:
      'Dann melden Sie sich. In den ersten 180 Tagen sind wir Ansprechpartner und können moderieren, Erwartungen neu klären oder im Zweifel auch nach einer anderen Lösung suchen.',
  },
]

export default function Wechselberatung() {
  return (
    <div className="wechselberatung-page">
      <PageHero
        badge="Für Pflegekräfte"
        title={
          <>
            Wechseln Sie nicht einfach den Arbeitgeber.<br />
            Wechseln Sie <span className="gradient-text">passend</span>.
          </>
        }
        subtitle="Ein Pflegejob-Wechsel ist mehr als eine neue Stellenbeschreibung. Wir helfen Ihnen, eine Einrichtung zu finden, die zu Ihrem Alltag, Ihren Grenzen und Ihren Vorstellungen passt — und begleiten Sie auch nach dem Start."
        actions={
          <>
            <Link to="/arbeitgeber-finden" className="btn btn--primary btn--lg">
              <HandHeart size={20} />
              Wechselprofil erstellen
            </Link>
            <Link to="/kontakt?typ=pflegekraft" className="btn btn--secondary btn--lg">
              Unverbindliches Gespräch
              <ArrowRight size={20} />
            </Link>
          </>
        }
        trust={
          <>
            <span className="trust-pill">
              <CheckCircle size={16} /> Für Pflegekräfte kostenlos
            </span>
            <span className="trust-pill">
              <CheckCircle size={16} /> Vertraulich
            </span>
            <span className="trust-pill">
              <CheckCircle size={16} /> Ohne Druck
            </span>
          </>
        }
      />

      {/* PROMISES */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Was wir Ihnen versprechen</span>
              <h2 className="section-title">
                Fünf Dinge, die wir{' '}
                <span className="gradient-text">anders machen</span>
              </h2>
              <p className="section-subtitle">
                Diese Punkte klingen vielleicht selbstverständlich. In der Realität der Pflegevermittlung
                sind sie es leider nicht.
              </p>
            </div>
          </ScrollReveal>

          <div className="promises-grid">
            {promises.map((p, i) => (
              <ScrollReveal key={i} delay={(i % 3) + 1}>
                <div className="promise-card">
                  <div className="promise-icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ZITAT */}
      <section className="section section--alt">
        <div className="container container--narrow">
          <ScrollReveal>
            <div className="quote-block">
              <Quote size={32} className="quote-icon" />
              <p className="quote-text">
                Wir vermitteln Sie nicht irgendwohin. Wir prüfen, ob die Stelle wirklich zu Ihnen
                passt — und sagen Ihnen ehrlich, wenn etwas nicht stimmt.
              </p>
              <p className="quote-attrib">Unser Versprechen an jede Pflegekraft</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">So gehen wir vor</span>
              <h2 className="section-title">
                In fünf Schritten zum{' '}
                <span className="gradient-text">passenden Job</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="ablauf-grid">
            {ablauf.map((a, i) => (
              <ScrollReveal key={i} delay={(i % 3) + 1}>
                <div className="ablauf-card">
                  <div className="ablauf-nr">{a.nr}</div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--alt">
        <div className="container container--narrow">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Häufige Fragen</span>
              <h2 className="section-title">
                Was Pflegekräfte uns{' '}
                <span className="gradient-text">am häufigsten</span> fragen
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final-cta-section">
        <div className="container">
          <ScrollReveal>
            <div className="final-cta-box">
              <h2>Bereit für den nächsten Schritt?</h2>
              <p>
                Erstellen Sie Ihr Wechselprofil oder vereinbaren Sie ein unverbindliches Gespräch.
                Beides ist kostenlos und nichts davon ist verpflichtend.
              </p>
              <div className="final-cta-actions">
                <Link to="/arbeitgeber-finden" className="btn btn--white btn--lg">
                  Wechselprofil erstellen
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
