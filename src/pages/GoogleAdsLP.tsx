import { useEffect } from 'react'
import {
  ArrowRight, Shield, Clock, Heart, CheckCircle, Sparkles, Target,
  Handshake, ShieldCheck, Briefcase, CalendarX, AlertTriangle, UserX,
  BatteryLow, Timer, HeartCrack, Users, XCircle, ClipboardList, Search,
  Star, TrendingUp
} from 'lucide-react'
import { getFunnelUrl, trackConversion } from '../lib/tracking'
import FAQAccordion from '../components/ui/FAQAccordion'
import teamImage from '../assets/team-caring.png'
import matchingImage from '../assets/matching-visual.png'
import './GoogleAdsLP.css'

const faqItems = [
  { question: 'Ist der Service wirklich kostenlos?', answer: 'Ja, für Pflegekräfte ist Medi-Lane zu 100% kostenlos. Keine versteckten Kosten. Wir finanzieren uns ausschließlich über eine Vermittlungsgebühr, die der Arbeitgeber zahlt.' },
  { question: 'Muss ich dafür kündigen?', answer: 'Nein! Sie erstellen nur ein unverbindliches Wechselprofil. Ein Wechsel passiert nur, wenn Sie sich aktiv dafür entscheiden. Kein Druck, keine Verpflichtung.' },
  { question: 'Erfährt mein Arbeitgeber davon?', answer: 'Absolut nicht. Ihr Profil wird nur anonymisiert an potenzielle Arbeitgeber vorgestellt. Ihre Kontaktdaten werden erst nach Ihrer ausdrücklichen Zustimmung weitergegeben.' },
  { question: 'Wie schnell bekomme ich Angebote?', answer: 'In der Regel erhalten Sie innerhalb von 48 Stunden eine erste Rückmeldung mit passenden Stellen.' },
  { question: 'Was unterscheidet Medi-Lane von Jobbörsen?', answer: 'Jobbörsen zeigen Ihnen offene Stellen. Wir erfassen ein komplettes Wechselprofil mit Ihren Wünschen, No-Gos und Prioritäten — und matchen Sie aktiv mit Arbeitgebern, die wirklich zu Ihnen passen.' },
  { question: 'Welche Bereiche werden abgedeckt?', answer: 'Stationäre Pflege, ambulante Pflege, Klinik, außerklinische Intensivpflege und betreutes Wohnen — weitere Bereiche kommen laufend dazu.' },
]

export default function GoogleAdsLP() {
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: 'Google Ads LP',
        page_location: window.location.href,
      })
    }
  }, [])

  const funnelUrl = getFunnelUrl('google', 'cpc', 'pflege_ads')

  const handleCTAClick = () => {
    trackConversion()
  }

  return (
    <div className="ads-lp">
      {/* Mini Logo */}
      <div className="ads-logo">
        <a href="/" className="ads-logo-link">
          <span className="ads-logo-mark">M</span>
          <span className="ads-logo-name">Medi-Lane</span>
        </a>
      </div>

      {/* ======== HERO ======== */}
      <section className="ads-hero">
        <div className="ads-hero-bg" />
        <div className="ads-container">
          <div className="ads-badge">
            <Sparkles size={14} />
            Kostenlos & unverbindlich
          </div>
          <h1 className="ads-title">
            Finden Sie in <span className="ads-highlight">3 Minuten</span> den Pflegejob,<br />
            der zu Ihnen passt.
          </h1>
          <p className="ads-subtitle">
            Kein Stellenchaos. Kein Lebenslauf-Versand. Einfach Wünsche angeben — 
            wir finden den passenden Arbeitgeber für Sie.
          </p>
          <a
            href={funnelUrl}
            className="ads-cta-main"
            onClick={handleCTAClick}
            id="ads-hero-cta"
          >
            Jetzt kostenlos starten
            <ArrowRight size={20} />
          </a>
          <div className="ads-hero-trust">
            <span><Shield size={14} /> DSGVO-konform</span>
            <span><Clock size={14} /> 3 Min.</span>
            <span><Heart size={14} /> 100% kostenlos</span>
          </div>
        </div>
      </section>

      {/* ======== TRUST BAR ======== */}
      <section className="ads-trust">
        <div className="ads-container-wide">
          <div className="ads-trust-row">
            <div className="ads-trust-stat">
              <span className="ads-trust-num">48h</span>
              <span className="ads-trust-label">Erste Rückmeldung</span>
            </div>
            <div className="ads-trust-divider" />
            <div className="ads-trust-stat">
              <span className="ads-trust-num">100%</span>
              <span className="ads-trust-label">Kostenlos für Pflegekräfte</span>
            </div>
            <div className="ads-trust-divider" />
            <div className="ads-trust-stat">
              <span className="ads-trust-num">3 Min.</span>
              <span className="ads-trust-label">Profil erstellen</span>
            </div>
            <div className="ads-trust-divider" />
            <div className="ads-trust-stat">
              <span className="ads-trust-num">Diskret</span>
              <span className="ads-trust-label">Arbeitgeber erfährt nichts</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======== PAIN POINTS ======== */}
      <section className="ads-section">
        <div className="ads-container">
          <h2 className="ads-section-title">
            Kennen Sie das? <span className="ads-highlight">Sie sind nicht allein.</span>
          </h2>
          <p className="ads-section-subtitle">
            Viele Pflegekräfte wollen nicht raus aus der Pflege — sondern raus aus ihrem aktuellen Setting.
          </p>
          <div className="ads-pain-grid">
            {[
              { icon: <CalendarX size={22} />, text: 'Chaotische Dienstpläne' },
              { icon: <AlertTriangle size={22} />, text: 'Ständiges Einspringen' },
              { icon: <UserX size={22} />, text: 'Schlechte Führung' },
              { icon: <Users size={22} />, text: 'Teamprobleme & Unterbesetzung' },
              { icon: <BatteryLow size={22} />, text: 'Körperliche Überlastung' },
              { icon: <Timer size={22} />, text: 'Zu wenig Zeit für Patienten' },
              { icon: <HeartCrack size={22} />, text: 'Fehlende Wertschätzung' },
              { icon: <ArrowRight size={22} />, text: 'Wiederholte Fehlwechsel' },
            ].map((p, i) => (
              <div className="ads-pain-card" key={i}>
                <span className="ads-pain-icon">{p.icon}</span>
                <span>{p.text}</span>
              </div>
            ))}
          </div>
          <p className="ads-pain-result">
            Das Ergebnis: Viele wechseln, landen aber wieder in ähnlichen Strukturen —<br />
            weil sie nur auf <strong>offene Stellen</strong> schauen statt auf <strong>echte Passung</strong>.
          </p>
        </div>
      </section>

      {/* ======== MID CTA ======== */}
      <section className="ads-cta-band">
        <div className="ads-container">
          <p>Schluss damit. Finden Sie einen Job, der wirklich zu Ihnen passt.</p>
          <a href={funnelUrl} className="ads-cta-main" onClick={handleCTAClick} id="ads-mid-cta-1">
            Jetzt Wechselprofil erstellen <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* ======== APPROACH ======== */}
      <section className="ads-section ads-section--alt">
        <div className="ads-container">
          <h2 className="ads-section-title">
            Nicht einfach wechseln. <span className="ads-highlight">Besser wechseln.</span>
          </h2>
          <p className="ads-section-subtitle">
            Medi-Lane ist keine Jobbörse und keine Zeitarbeit. Wir sind Ihre persönliche Wechselbegleitung.
          </p>

          <div className="ads-approach-split">
            <div className="ads-approach-img">
              <img src={teamImage} alt="Pflegeteam im Gespräch" />
            </div>
            <div className="ads-approach-content">
              <div className="ads-approach-item">
                <Handshake size={22} className="ads-approach-icon" />
                <div>
                  <strong>Wechselbegleitung</strong>
                  <span>Nicht nur ein Job-Link, sondern echte Begleitung beim Übergang.</span>
                </div>
              </div>
              <div className="ads-approach-item">
                <Target size={22} className="ads-approach-icon" />
                <div>
                  <strong>Echtes Matching</strong>
                  <span>Ihre Wünsche, No-Gos und Prioritäten werden mit passenden Arbeitgebern abgeglichen.</span>
                </div>
              </div>
              <div className="ads-approach-item">
                <ShieldCheck size={22} className="ads-approach-icon" />
                <div>
                  <strong>100% diskret</strong>
                  <span>Ihr Arbeitgeber erfährt nichts. Profil wird nur anonymisiert vorgestellt.</span>
                </div>
              </div>
              <div className="ads-approach-item">
                <TrendingUp size={22} className="ads-approach-icon" />
                <div>
                  <strong>Langfristiger Fit</strong>
                  <span>Ziel ist nicht irgendein Wechsel, sondern einer, der wirklich funktioniert.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== WECHSELPROFIL ======== */}
      <section className="ads-section">
        <div className="ads-container">
          <h2 className="ads-section-title">
            Ihr <span className="ads-highlight">Wechselprofil</span> — mehr als ein Lebenslauf
          </h2>
          <p className="ads-section-subtitle">
            Wir erfassen nicht nur Qualifikationen, sondern Ihre echte Arbeitsrealität.
          </p>
          <div className="ads-profile-tags">
            {[
              'Wechselgründe', 'No-Gos', 'Wünsche an Führung & Team',
              'Bevorzugte Arbeitsmodelle', 'Gewünschte Bereiche', 'Schichtwünsche',
              'Regionale Vorstellungen', 'Prioritäten (Gehalt, Dienstplan, Weg…)'
            ].map((item, i) => (
              <div className="ads-profile-tag" key={i}>
                <CheckCircle size={16} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== HOW IT WORKS ======== */}
      <section className="ads-section ads-section--alt">
        <div className="ads-container">
          <h2 className="ads-section-title">
            So funktioniert's — <span className="ads-highlight">in 3 einfachen Schritten</span>
          </h2>

          <div className="ads-steps">
            {[
              { num: '1', icon: <ClipboardList size={28} />, title: 'Wechselprofil anlegen', desc: 'Geben Sie Ihre Qualifikation, Wünsche, Prioritäten und Wechselgründe an — in nur 3 Minuten.' },
              { num: '2', icon: <Search size={28} />, title: 'Intelligentes Matching', desc: 'Ihr Profil wird mit passenden Arbeitgebern abgeglichen — nicht nur fachlich, sondern ganzheitlich.' },
              { num: '3', icon: <Handshake size={28} />, title: 'Begleitung & Angebote', desc: 'Sie erhalten passende Angebote und werden persönlich begleitet, bis der richtige Job gefunden ist.' },
            ].map((step, i) => (
              <div className="ads-step-card" key={i}>
                <div className="ads-step-num">{step.num}</div>
                <div className="ads-step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="ads-steps-cta">
            <a href={funnelUrl} className="ads-cta-main" onClick={handleCTAClick} id="ads-steps-cta">
              Jetzt starten — dauert nur 3 Minuten <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ======== USPs ======== */}
      <section className="ads-section">
        <div className="ads-container">
          <h2 className="ads-section-title">
            Warum Pflegekräfte <span className="ads-highlight">Medi-Lane</span> wählen
          </h2>
          <div className="ads-usp-grid">
            {[
              { icon: <Handshake size={24} />, title: 'Wechselbegleitung', desc: 'Echte Begleitung beim Übergang, nicht nur ein Job-Link.' },
              { icon: <ShieldCheck size={24} />, title: '100% diskret', desc: 'Ihr Arbeitgeber erfährt nichts. Erst nach Ihrer Zustimmung.' },
              { icon: <ClipboardList size={24} />, title: 'Wechselprofil statt CV', desc: 'Wünsche, No-Gos und Prioritäten zählen — nicht nur der Lebenslauf.' },
              { icon: <Heart size={24} />, title: 'Passung vor Speed', desc: 'Nicht der schnellste, sondern der sinnvollste Wechsel.' },
              { icon: <Shield size={24} />, title: 'Weniger Fehlwechsel', desc: 'Tiefere Erfassung reduziert das Risiko, wieder falsch zu landen.' },
              { icon: <Briefcase size={24} />, title: 'Echte Arbeitsrealität', desc: 'Dienstplan, Team, Führung und Arbeitsweg werden ernst genommen.' },
            ].map((usp, i) => (
              <div className="ads-usp-card" key={i}>
                <div className="ads-usp-icon">{usp.icon}</div>
                <h3>{usp.title}</h3>
                <p>{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== COMPARISON ======== */}
      <section className="ads-section ads-section--alt">
        <div className="ads-container">
          <h2 className="ads-section-title">
            Jobbörse vs. <span className="ads-highlight">Medi-Lane</span>
          </h2>

          <div className="ads-comparison">
            <div className="ads-comp-col ads-comp-col--old">
              <h3><XCircle size={20} /> Klassische Jobbörse</h3>
              <ul>
                <li>Sie suchen selbst durch hunderte Stellen</li>
                <li>Bewerbung = Lebenslauf + Anschreiben</li>
                <li>Kein Matching auf echte Passung</li>
                <li>Keine Begleitung beim Wechsel</li>
                <li>Häufige Fehlwechsel</li>
              </ul>
            </div>
            <div className="ads-comp-col ads-comp-col--new">
              <h3><CheckCircle size={20} /> Medi-Lane</h3>
              <ul>
                <li>Wir finden passende Jobs für Sie</li>
                <li>Wechselprofil statt Bewerbungsmarathon</li>
                <li>Matching auf Wünsche, No-Gos & Prioritäten</li>
                <li>Persönliche Wechselbegleitung</li>
                <li>Bessere Passung = weniger Fehlwechsel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ======== MATCHING VISUAL ======== */}
      <section className="ads-section">
        <div className="ads-container">
          <div className="ads-matching-split">
            <div className="ads-matching-text">
              <h2 className="ads-section-title" style={{ textAlign: 'left' }}>
                Gute Vermittlung beginnt mit <span className="ads-highlight">Verständnis</span>
              </h2>
              <p className="ads-matching-desc">
                Wir erfassen nicht nur Qualifikationen, sondern Ihre echte Situation. 
                Wechselgründe, No-Gos, bevorzugte Arbeitsmodelle, Schichtwünsche und 
                persönliche Prioritäten fließen in unser Matching ein.
              </p>
              <ul className="ads-matching-list">
                <li><CheckCircle size={18} /> Warum wollen Sie wechseln?</li>
                <li><CheckCircle size={18} /> Was brauchen Sie wirklich?</li>
                <li><CheckCircle size={18} /> Was darf sich nicht wiederholen?</li>
                <li><CheckCircle size={18} /> Welcher Arbeitgeber passt tatsächlich?</li>
              </ul>
            </div>
            <div className="ads-matching-img">
              <img src={matchingImage} alt="Medi-Lane Matching-Modell" />
            </div>
          </div>
        </div>
      </section>

      {/* ======== SOCIAL PROOF ======== */}
      <section className="ads-section ads-section--alt">
        <div className="ads-container">
          <h2 className="ads-section-title">
            Das sagen <span className="ads-highlight">Pflegekräfte</span>
          </h2>
          <div className="ads-testimonials">
            <div className="ads-testimonial">
              <div className="ads-testimonial-stars">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} />)}
              </div>
              <p>"Ich war skeptisch, aber nach 2 Tagen hatte ich schon passende Angebote. Und mein alter Arbeitgeber hat nichts mitbekommen."</p>
              <span className="ads-testimonial-author">— Pflegefachkraft, 34, aus NRW</span>
            </div>
            <div className="ads-testimonial">
              <div className="ads-testimonial-stars">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} />)}
              </div>
              <p>"Endlich jemand, der versteht, dass es nicht nur um Qualifikation geht, sondern auch um den Dienstplan und das Team."</p>
              <span className="ads-testimonial-author">— Altenpflegerin, 41, aus Bayern</span>
            </div>
            <div className="ads-testimonial">
              <div className="ads-testimonial-stars">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} />)}
              </div>
              <p>"Das Wechselprofil hat in 3 Minuten mehr erfasst als jede Jobbörse. Ich konnte genau angeben, was mir wichtig ist."</p>
              <span className="ads-testimonial-author">— Gesundheitspflegerin, 28, aus Hamburg</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======== FAQ ======== */}
      <section className="ads-section">
        <div className="ads-container">
          <h2 className="ads-section-title">
            Häufige Fragen — <span className="ads-highlight">ehrlich beantwortet</span>
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ======== FINAL CTA ======== */}
      <section className="ads-final-cta">
        <div className="ads-container">
          <div className="ads-final-cta-box">
            <h2>Sie verdienen einen Job,<br />der zu Ihrem Leben passt.</h2>
            <p>
              Erstellen Sie jetzt Ihr Wechselprofil und finden Sie den Pflegejob, 
              der nicht nur fachlich, sondern auch menschlich und organisatorisch zu Ihnen passt.
            </p>
            <a
              href={funnelUrl}
              className="ads-cta-main ads-cta--white ads-cta--lg"
              onClick={handleCTAClick}
              id="ads-final-cta"
            >
              Jetzt Wechselprofil erstellen — kostenlos
              <ArrowRight size={22} />
            </a>
            <span className="ads-note">Kein Account nötig · Dauert nur 3 Minuten · 100% diskret</span>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="ads-sticky-cta">
        <a
          href={funnelUrl}
          className="ads-sticky-btn"
          onClick={handleCTAClick}
          id="ads-sticky-cta"
        >
          Jetzt kostenlos starten <ArrowRight size={18} />
        </a>
      </div>
    </div>
  )
}
