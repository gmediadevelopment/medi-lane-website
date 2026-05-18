import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import './Header.css'

interface SubItem {
  label: string
  to: string
  description?: string
}

interface NavGroup {
  label: string
  basePath: string
  items: SubItem[]
}

const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Für Einrichtungen',
    basePath: '/arbeitgeber',
    items: [
      { label: 'Überblick', to: '/arbeitgeber', description: 'Für Pflegeeinrichtungen' },
      { label: 'PflegeMatch 180', to: '/pflegematch-180', description: 'Unser Kernangebot' },
      { label: 'Matching-System', to: '/matching-system', description: 'Wie wir matchen' },
      { label: 'Wechselbegleitung', to: '/wechselbegleitung', description: '180-Tage-Begleitung' },
      { label: 'Stabilitätsberatung', to: '/stabilitaetsberatung', description: 'Beratung für Verbleib' },
      { label: 'Fördermöglichkeiten', to: '/foerderung', description: 'Zuschüsse prüfen' },
      { label: 'Digitale Plattform', to: '/digitale-plattform', description: 'Medi-Lane CareOS' },
    ],
  },
  {
    label: 'Für Pflegekräfte',
    basePath: '/pflegekraefte',
    items: [
      { label: 'Überblick', to: '/pflegekraefte', description: 'Für Pflegekräfte' },
      { label: 'Wechselberatung', to: '/wechselberatung', description: 'Passend wechseln' },
      { label: 'Arbeitgeber finden', to: '/arbeitgeber-finden', description: 'Stellen-Anfrage' },
    ],
  },
]

const SIMPLE_LINKS: { label: string; to: string }[] = [
  { label: 'Wissen', to: '/wissen' },
  { label: 'Über uns', to: '/ueber-uns' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenGroup(null)
  }, [location.pathname])

  const isGroupActive = (group: NavGroup) =>
    group.items.some(item => location.pathname === item.to)

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="header-logo" id="header-logo">
          <span className="logo-mark">M</span>
          <span className="logo-name">Medi-Lane</span>
        </Link>

        <nav className={`header-nav ${mobileOpen ? 'header-nav--open' : ''}`} id="main-nav">
          {NAV_GROUPS.map(group => (
            <div
              key={group.label}
              className={`nav-group ${openGroup === group.label ? 'nav-group--open' : ''} ${
                isGroupActive(group) ? 'nav-group--active' : ''
              }`}
              onMouseEnter={() => setOpenGroup(group.label)}
              onMouseLeave={() => setOpenGroup(null)}
            >
              <button
                className="nav-group-trigger"
                onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                aria-expanded={openGroup === group.label}
                aria-haspopup="true"
              >
                {group.label}
                <ChevronDown size={14} className="nav-chevron" />
              </button>
              <div className="nav-dropdown">
                <div className="nav-dropdown-inner">
                  {group.items.map(item => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`nav-dropdown-item ${
                        location.pathname === item.to ? 'nav-dropdown-item--active' : ''
                      }`}
                    >
                      <span className="nav-dropdown-label">{item.label}</span>
                      {item.description && (
                        <span className="nav-dropdown-desc">{item.description}</span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {SIMPLE_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-item ${location.pathname === link.to ? 'nav-item--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}

          <Link to="/kontakt" className="header-cta" id="header-cta-kontakt">
            Erstgespräch →
          </Link>
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
