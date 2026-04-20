import { useEffect } from 'react'
import { ArrowRight, Shield, Clock, Heart, CheckCircle, Sparkles } from 'lucide-react'
import { getFunnelUrl, trackConversion } from '../lib/tracking'
import './GoogleAdsLP.css'

export default function GoogleAdsLP() {
  useEffect(() => {
    // Track page view for ads
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

      {/* Hero */}
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
        </div>
      </section>

      {/* Trust */}
      <section className="ads-trust">
        <div className="ads-container">
          <div className="ads-trust-row">
            <div className="ads-trust-item">
              <Heart size={18} />
              <span>100% kostenlos</span>
            </div>
            <div className="ads-trust-item">
              <Clock size={18} />
              <span>Nur 3 Minuten</span>
            </div>
            <div className="ads-trust-item">
              <Shield size={18} />
              <span>DSGVO-konform & diskret</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="ads-pain">
        <div className="ads-container">
          <h2 className="ads-section-title">Kennen Sie das?</h2>
          <div className="ads-pain-list">
            <div className="ads-pain-item">
              <span className="ads-pain-icon">😤</span>
              <span>Schlechter Dienstplan, ständig Einspringen</span>
            </div>
            <div className="ads-pain-item">
              <span className="ads-pain-icon">😰</span>
              <span>Überlastung, zu wenig Zeit für Patienten</span>
            </div>
            <div className="ads-pain-item">
              <span className="ads-pain-icon">💔</span>
              <span>Keine Wertschätzung, schlechte Führung</span>
            </div>
          </div>
          <p className="ads-pain-result">
            Sie haben es verdient, einen Pflegejob zu finden, der wirklich zu Ihnen passt.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="ads-benefits">
        <div className="ads-container">
          <h2 className="ads-section-title">Was Sie bei uns bekommen</h2>
          <div className="ads-benefit-list">
            <div className="ads-benefit-item">
              <CheckCircle size={22} />
              <div>
                <strong>Passung statt Zufall</strong>
                <span>Wir matchen Ihre Wünsche mit passenden Arbeitgebern</span>
              </div>
            </div>
            <div className="ads-benefit-item">
              <CheckCircle size={22} />
              <div>
                <strong>Diskret & kostenlos</strong>
                <span>Ihr Arbeitgeber erfährt nichts. Kein Risiko für Sie.</span>
              </div>
            </div>
            <div className="ads-benefit-item">
              <CheckCircle size={22} />
              <div>
                <strong>Begleitung statt Jobbörse</strong>
                <span>Persönliche Wechselbegleitung statt anonyme Stellenliste</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="ads-final-cta">
        <div className="ads-container">
          <h2>Bereit für den Wechsel?</h2>
          <p>In 3 Minuten Wechselprofil erstellen. Wir finden den Rest.</p>
          <a
            href={funnelUrl}
            className="ads-cta-main ads-cta--lg"
            onClick={handleCTAClick}
            id="ads-final-cta"
          >
            Jetzt Wechselprofil erstellen — kostenlos
            <ArrowRight size={22} />
          </a>
          <span className="ads-note">Kein Account nötig · Dauert nur 3 Minuten · 100% diskret</span>
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
