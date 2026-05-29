import { Link } from 'react-router-dom'
import Lockup from '../sections/Lockup'
import AvailabilityBar from '../sections/AvailabilityBar'
import { getFunnelUrl } from '../../lib/tracking'
import './Footer.css'

const FUNNEL = getFunnelUrl('website', 'organic', 'footer')

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Lockup inverse as="span" />
            <p className="site-footer__about">
              Medilane vermittelt und begleitet Pflegekräfte in Häuser, die zu ihrem Leben
              passen. Diskret. Verbindlich. Auf Augenhöhe.
            </p>
            <AvailabilityBar
              className="site-footer__avail"
              style={{
                background: 'transparent',
                borderColor: 'rgba(255,255,255,0.12)',
                color: 'var(--slate-300)',
              }}
            />
          </div>

          <div className="site-footer__col">
            <h4>Für Einrichtungen</h4>
            <Link to="/arbeitgeber">Übersicht</Link>
            <Link to="/pflegematch-180">PflegeMatch 180</Link>
            <Link to="/stabilitaetsberatung">Stabilitätsberatung</Link>
            <Link to="/digitale-plattform">Digitale Plattform</Link>
            <Link to="/foerderung">Förderung</Link>
          </div>

          <div className="site-footer__col">
            <h4>Für Pflegekräfte</h4>
            <Link to="/pflegekraefte">Übersicht</Link>
            <Link to="/wechselberatung">Wechselberatung</Link>
            <a href={FUNNEL}>Wechselprofil erstellen →</a>
            <Link to="/arbeitgeber-finden">Lieber per Formular</Link>
          </div>

          <div className="site-footer__col">
            <h4>Methodik</h4>
            <Link to="/matching-system">Matching-System</Link>
            <Link to="/wechselbegleitung">Wechselbegleitung</Link>
            <Link to="/wissen">Wissen</Link>
          </div>

          <div className="site-footer__col">
            <h4>Unternehmen</h4>
            <Link to="/ueber-uns">Über uns</Link>
            <Link to="/kontakt">Kontakt</Link>
            <Link to="/demo-anfragen">Demo / Pilot</Link>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span className="num">© {year} · Medilane</span>
          <div className="site-footer__legal">
            <a href="mailto:info@medi-lane.de">info@medi-lane.de</a>
            <Link to="/datenschutz">Datenschutz</Link>
            <Link to="/impressum">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
