import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Lockup from '../sections/Lockup'
import './Header.css'

interface NavItem {
  to: string
  title: string
  desc: string
}

interface NavGroup {
  label: string
  items: NavItem[]
}

const EINRICHTUNGEN: NavGroup = {
  label: 'Für Einrichtungen',
  items: [
    { to: '/arbeitgeber',           title: 'Übersicht',            desc: 'Was Medilane für deine Einrichtung bedeutet' },
    { to: '/pflegematch-180',       title: 'PflegeMatch 180',      desc: 'Vermittlung mit Matching und 180-Tage-Begleitung' },
    { to: '/matching-system',       title: 'Matching-System',      desc: 'Sechs Dimensionen, ehrliche Ampel' },
    { to: '/wechselbegleitung',     title: 'Wechselbegleitung',    desc: '180-Tage-Begleitung im Detail' },
    { to: '/stabilitaetsberatung',  title: 'Stabilitätsberatung',  desc: 'Verbleib, Rückgewinnung, Einarbeitung' },
    { to: '/foerderung',            title: 'Förderung',            desc: 'Welche Bestandteile fördernah sind' },
    { to: '/digitale-plattform',    title: 'Digitale Plattform',   desc: 'CareOS — Dashboards, Check-ins, Reports' },
  ],
}

const PFLEGEKRAEFTE: NavGroup = {
  label: 'Für Pflegekräfte',
  items: [
    { to: '/pflegekraefte',          title: 'Übersicht',         desc: 'Wie Medilane für dich arbeitet' },
    { to: '/wechselberatung',        title: 'Wechselberatung',   desc: 'Wechseln ohne böse Überraschung' },
    { to: '/arbeitgeber-finden',     title: 'Arbeitgeber finden', desc: 'Eine Stelle, die zu deinem Leben passt' },
  ],
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setMobileOpen(false)
    setOpenGroup(null)
  }, [location.pathname])

  const isGroupActive = (group: NavGroup) =>
    group.items.some(item => location.pathname === item.to)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Lockup
          as="a"
          href="/"
          onClick={e => {
            e.preventDefault()
            navigate('/')
          }}
        />

        <nav
          className={`site-nav ${mobileOpen ? 'site-nav--open' : ''}`}
          aria-label="Hauptnavigation"
        >
          {[EINRICHTUNGEN, PFLEGEKRAEFTE].map(group => (
            <div
              key={group.label}
              className={`site-nav__group ${openGroup === group.label ? 'site-nav__group--open' : ''} ${
                isGroupActive(group) ? 'site-nav__group--active' : ''
              }`}
              onMouseEnter={() => setOpenGroup(group.label)}
              onMouseLeave={() => setOpenGroup(null)}
            >
              <button
                type="button"
                className="site-nav__link"
                onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                aria-expanded={openGroup === group.label}
              >
                {group.label}
                <span className="site-nav__caret">▾</span>
              </button>
              <div className="site-nav__dropdown" role="menu">
                {group.items.map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`site-nav__item ${
                      location.pathname === item.to ? 'site-nav__item--active' : ''
                    }`}
                  >
                    <span className="site-nav__item-title">{item.title}</span>
                    <span className="site-nav__item-desc">{item.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link
            to="/wissen"
            className={`site-nav__link ${location.pathname.startsWith('/wissen') ? 'is-active' : ''}`}
          >
            Wissen
          </Link>
          <Link
            to="/ueber-uns"
            className={`site-nav__link ${location.pathname === '/ueber-uns' ? 'is-active' : ''}`}
          >
            Über uns
          </Link>

          <div className="site-nav__cta">
            <Link to="/kontakt?typ=pflegekraft" className="btn btn--secondary btn--sm">
              Als Pflegekraft starten
            </Link>
            <Link to="/kontakt?typ=einrichtung" className="btn btn--primary btn--sm">
              Erstgespräch
            </Link>
          </div>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Navigation umschalten"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
