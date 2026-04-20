import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { getFunnelUrl } from '../../lib/tracking'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="header-logo" id="header-logo">
          <span className="logo-mark">M</span>
          <span className="logo-name">Medi-Lane</span>
        </Link>

        <nav className={`header-nav ${mobileOpen ? 'header-nav--open' : ''}`} id="main-nav">
          <Link
            to="/pflegekraefte"
            className={`nav-item ${location.pathname === '/pflegekraefte' ? 'nav-item--active' : ''}`}
          >
            Für Pflegekräfte
          </Link>
          <Link
            to="/arbeitgeber"
            className={`nav-item ${location.pathname === '/arbeitgeber' ? 'nav-item--active' : ''}`}
          >
            Für Arbeitgeber
          </Link>
          <a
            href={getFunnelUrl('website', 'organic', 'header')}
            className="header-cta"
            id="header-cta-funnel"
          >
            Jetzt Profil erstellen →
          </a>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Navigation umschalten"
          id="mobile-menu-toggle"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
