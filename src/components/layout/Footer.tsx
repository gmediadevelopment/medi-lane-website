import { Link } from 'react-router-dom'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'
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
              <span className="footer-logo-name">Medilane</span>
            </Link>
            <p className="footer-tagline">
              Pflegekräfte finden, passend integrieren und langfristig halten —
              mit Matching, Wechselbegleitung und Beratung für Pflegeeinrichtungen.
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

          {/* Für Einrichtungen */}
          <div className="footer-col">
            <h4 className="footer-heading">Für Einrichtungen</h4>
            <nav className="footer-nav">
              <Link to="/arbeitgeber">Überblick</Link>
              <Link to="/pflegematch-180">PflegeMatch 180</Link>
              <Link to="/matching-system">Matching-System</Link>
              <Link to="/wechselbegleitung">Wechselbegleitung</Link>
              <Link to="/stabilitaetsberatung">Stabilitätsberatung</Link>
              <Link to="/foerderung">Fördermöglichkeiten</Link>
              <Link to="/digitale-plattform">Digitale Plattform</Link>
            </nav>
          </div>

          {/* Für Pflegekräfte */}
          <div className="footer-col">
            <h4 className="footer-heading">Für Pflegekräfte</h4>
            <nav className="footer-nav">
              <Link to="/pflegekraefte">Überblick</Link>
              <Link to="/wechselberatung">Wechselberatung</Link>
              <Link to="/arbeitgeber-finden">Arbeitgeber finden</Link>
            </nav>
          </div>

          {/* Unternehmen */}
          <div className="footer-col">
            <h4 className="footer-heading">Unternehmen</h4>
            <nav className="footer-nav">
              <Link to="/ueber-uns">Über Medilane</Link>
              <Link to="/wissen">Wissen</Link>
              <Link to="/kontakt">Kontakt</Link>
              <Link to="/demo-anfragen">Pilot / Demo</Link>
            </nav>
          </div>

          {/* Rechtliches */}
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
            © {new Date().getFullYear()} Medilane. Alle Rechte vorbehalten.
          </p>
          <p className="footer-made">
            Mit <Heart size={14} className="footer-heart" /> für die Pflege gemacht
          </p>
        </div>
      </div>
    </footer>
  )
}
