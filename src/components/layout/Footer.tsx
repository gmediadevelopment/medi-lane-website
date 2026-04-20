import { Link } from 'react-router-dom'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'
import { getFunnelUrl } from '../../lib/tracking'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-col footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-mark">M</span>
              <span className="footer-logo-name">Medi-Lane</span>
            </Link>
            <p className="footer-tagline">
              Wir begleiten Pflegekräfte diskret in den Job, der wirklich zu ihrem Leben passt.
            </p>
            <div className="footer-contact">
              <a href="mailto:info@medi-lane.de" className="footer-contact-item">
                <Mail size={16} />
                info@medi-lane.de
              </a>
              <a href="tel:+4900000000" className="footer-contact-item">
                <Phone size={16} />
                +49 (0) 000 000 000
              </a>
              <span className="footer-contact-item">
                <MapPin size={16} />
                Deutschland
              </span>
            </div>
          </div>

          {/* Pflegekräfte */}
          <div className="footer-col">
            <h4 className="footer-heading">Für Pflegekräfte</h4>
            <nav className="footer-nav">
              <Link to="/pflegekraefte">Wechselbegleitung</Link>
              <a href={getFunnelUrl('website', 'organic', 'footer')}>Wechselprofil erstellen</a>
              <Link to="/pflegekraefte#ablauf">So funktioniert's</Link>
              <Link to="/pflegekraefte#faq">Häufige Fragen</Link>
            </nav>
          </div>

          {/* Arbeitgeber */}
          <div className="footer-col">
            <h4 className="footer-heading">Für Arbeitgeber</h4>
            <nav className="footer-nav">
              <Link to="/arbeitgeber">Matching-Modell</Link>
              <Link to="/arbeitgeber#vorteile">Ihre Vorteile</Link>
              <Link to="/arbeitgeber#kontakt">Kontakt aufnehmen</Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="footer-col">
            <h4 className="footer-heading">Rechtliches</h4>
            <nav className="footer-nav">
              <Link to="/impressum">Impressum</Link>
              <Link to="/datenschutz">Datenschutz</Link>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Medi-Lane. Alle Rechte vorbehalten.
          </p>
          <p className="footer-made">
            Mit <Heart size={14} className="footer-heart" /> für die Pflege gemacht
          </p>
        </div>
      </div>
    </footer>
  )
}
