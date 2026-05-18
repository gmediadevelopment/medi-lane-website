import { Link } from 'react-router-dom'
import {
  ArrowRight, Compass, Heart, ShieldCheck, Eye, Scale, Sparkles, User,
} from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import './UeberUns.css'

const principles = [
  {
    icon: <Eye size={24} />,
    title: 'Realität statt Marketing',
    description:
      'Wir nehmen nur Arbeitgeberversprechen in den Match auf, die im Alltag haltbar sind. Schönfärben löst kein Personalproblem.',
  },
  {
    icon: <Scale size={24} />,
    title: 'Passung auf beiden Seiten',
    description:
      'Die Pflegekraft wird nicht auf die Stelle passend gemacht. Beide Seiten müssen zueinander passen — sonst vermitteln wir nicht.',
  },
  {
    icon: <Heart size={24} />,
    title: 'Verbleib statt Abschluss',
    description:
      'Qualitätsmaßstab ist nicht die Unterschrift, sondern der stabile Verbleib nach 180 Tagen. Das prägt jede Entscheidung im Prozess.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Diskretion und Datensparsamkeit',
    description:
      'Wir erheben nur, was für das Matching wirklich nötig ist. Daten werden nicht ohne Einwilligung an Einrichtungen weitergegeben.',
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Frühwarnung statt Schadensbegrenzung',
    description:
      'Check-ins und Indikatoren sollen Probleme erkennen, bevor daraus Kündigungen werden. Das schützt Pflegekraft und Einrichtung gleichermaßen.',
  },
  {
    icon: <Compass size={24} />,
    title: 'Lernen statt wiederholen',
    description:
      'Jede Vermittlung erzeugt Erkenntnisse — über Matching, Einarbeitung und Bindung. Diese Learnings verbessern den nächsten Match.',
  },
]

export default function UeberUns() {
  return (
    <div className="ueber-page">
      <PageHero
        badge="Über Medilane"
        title={
          <>
            Vermittlung muss{' '}
            <span className="gradient-text">ehrlicher</span> werden
          </>
        }
        subtitle="Medilane entsteht aus der Überzeugung, dass Pflegevermittlung besser funktionieren muss. Nicht schneller, lauter oder aggressiver — sondern ehrlicher, strukturierter und nachhaltiger."
      />

      {/* MOTIVATION */}
      <section className="section">
        <div className="container container--narrow">
          <ScrollReveal>
            <div className="motivation-block">
              <span className="section-badge">Warum es Medilane gibt</span>
              <h2 className="section-title">
                Pflegeeinrichtungen brauchen Stabilität.<br />
                Pflegekräfte brauchen{' '}
                <span className="gradient-text">passende Arbeitsbedingungen</span>.
              </h2>
              <p>
                In der Pflege entstehen die teuren Probleme häufig nicht beim Recruiting, sondern
                danach: in der Probezeit, in den ersten 100 Tagen, in den ersten sechs Monaten.
                Die klassische Vermittlung endet aber genau dort, wo es kritisch wird — mit der
                Vertragsunterschrift.
              </p>
              <p>
                Wir wollten kein weiterer Personaldienstleister werden. Wir wollten ein Modell
                bauen, das beide Seiten ernst nimmt: Pflegekräfte mit ihren Wechselmotiven,
                Belastungsgrenzen und Wünschen — und Einrichtungen mit ihrer realen
                Dienstplanlogik, Teamkultur und Einarbeitungsstruktur.
              </p>
              <p>
                Daraus ist <strong>PflegeMatch 180</strong> entstanden: ein Vermittlungs- und
                Integrationsmodell, das nicht mit der Einstellung endet, sondern erst, wenn die
                Pflegekraft nach 180 Tagen stabil im neuen Job angekommen ist.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PRINZIPIEN */}
      <section className="section section--alt">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Unsere Grundsätze</span>
              <h2 className="section-title">
                Sechs Prinzipien, die unsere Arbeit{' '}
                <span className="gradient-text">tragen</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="principles-grid">
            {principles.map((p, i) => (
              <ScrollReveal key={i} delay={(i % 3) + 1}>
                <div className="principle-card">
                  <div className="principle-icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GRÜNDER */}
      <section className="section">
        <div className="container container--narrow">
          <ScrollReveal>
            <div className="founder-card">
              <div className="founder-avatar">
                <User size={48} />
              </div>
              <div className="founder-text">
                <span className="section-badge">Gründer</span>
                <h2 className="section-title" style={{ textAlign: 'left' }}>
                  Wer hinter Medilane steht
                </h2>
                <p>
                  Medilane wurde gegründet aus persönlicher Erfahrung mit den Strukturproblemen
                  der Pflegebranche und der Überzeugung, dass es eine ehrlichere, methodisch
                  bessere Form der Vermittlung geben muss.
                </p>
                <p className="founder-note">
                  Ein ausführliches Gründerprofil folgt in Kürze. Wer mehr wissen möchte,
                  kann gerne ein persönliches Gespräch vereinbaren.
                </p>
                <Link to="/kontakt" className="btn btn--primary">
                  Persönlich kennenlernen
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final-cta-section">
        <div className="container">
          <ScrollReveal>
            <div className="final-cta-box">
              <h2>Medilane kennenlernen</h2>
              <p>
                Ob Einrichtung, Pflegekraft oder Partner — wir nehmen uns Zeit für ein erstes
                Gespräch und prüfen ehrlich, ob unser Modell zu Ihrer Situation passt.
              </p>
              <Link to="/kontakt" className="btn btn--white btn--lg">
                Gespräch vereinbaren
                <ArrowRight size={20} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
