import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import {
  Building2, UserCheck, Handshake, Mail, Phone, Clock, ShieldCheck,
  CheckCircle, Sparkles, ArrowRight,
} from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import ContactForm, { type ContactFormType } from '../components/ui/ContactForm'
import ScrollReveal from '../components/ui/ScrollReveal'
import { getFunnelUrl } from '../lib/tracking'
import './Kontakt.css'

const FUNNEL = getFunnelUrl('website', 'organic', 'kontakt_pflegekraft')

const TABS: Array<{
  id: ContactFormType
  label: string
  icon: typeof Building2
  short: string
}> = [
  { id: 'einrichtung', label: 'Ich bin Pflegeeinrichtung', icon: Building2, short: 'Einrichtung' },
  { id: 'pflegekraft', label: 'Ich bin Pflegekraft', icon: UserCheck, short: 'Pflegekraft' },
  { id: 'partner', label: 'Förderer / Partner', icon: Handshake, short: 'Partner' },
]

const COPY: Record<ContactFormType, { headline: string; body: string; bullets: string[] }> = {
  einrichtung: {
    headline: 'Sprechen wir über deine Personalbesetzung',
    body: 'Im kostenlosen Erstgespräch klären wir Bedarf, aktuelle Herausforderungen und ob PflegeMatch 180 oder die Stabilitätsberatung zu Ihrer Situation passen.',
    bullets: [
      'Unverbindliches Erstgespräch',
      'Keine Vorabkosten',
      'Persönlicher Ansprechpartner',
      'Rückmeldung innerhalb von 24 Stunden',
    ],
  },
  pflegekraft: {
    headline: 'Wechsel nicht irgendwohin — wechsel passend',
    body: 'Sag uns kurz, worum es geht. Wir melden uns vertraulich und unverbindlich, hören zu und prüfen, ob wir einen passenden Arbeitgeber für dich finden können.',
    bullets: [
      'Für Pflegekräfte 100 % kostenlos',
      'Vertrauliche Behandlung Ihrer Daten',
      'Keine Profilweitergabe ohne deine Zustimmung',
      'Auch unverbindliche Orientierung möglich',
    ],
  },
  partner: {
    headline: 'Pilot, Förderung oder Plattformpartner',
    body: 'Du kommst aus einer Förderstelle, einem Verband, einer Hochschule oder einem Trägerverbund? Wir freuen uns über den Austausch zu Konzept, Pilotmodell und Skalierung.',
    bullets: [
      'Konzeptunterlagen auf Anfrage',
      'Pilot- und Demogespräche möglich',
      'Förderbezogene Maßnahmenbeschreibung',
      'Vertrauliche Vorgespräche',
    ],
  },
}

export default function Kontakt() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initial = (searchParams.get('typ') as ContactFormType) || 'einrichtung'
  const [activeTab, setActiveTab] = useState<ContactFormType>(
    TABS.some(t => t.id === initial) ? initial : 'einrichtung'
  )

  useEffect(() => {
    const fromUrl = searchParams.get('typ') as ContactFormType | null
    if (fromUrl && TABS.some(t => t.id === fromUrl)) {
      setActiveTab(fromUrl)
    }
  }, [searchParams])

  const handleTab = (id: ContactFormType) => {
    setActiveTab(id)
    setSearchParams({ typ: id }, { replace: true })
  }

  const copy = COPY[activeTab]

  return (
    <div className="kontakt-page">
      <PageHero
        badge="Kontakt"
        title={
          <>
            Sprechen wir{' '}
            <span className="gradient-text">über das, was passt</span>
          </>
        }
        subtitle="Wähle aus, wer du bist — wir holen dich an der richtigen Stelle ab."
      />

      {/* TYP-SWITCH */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="kontakt-tabs">
            {TABS.map(tab => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  className={`kontakt-tab ${isActive ? 'kontakt-tab--active' : ''}`}
                  onClick={() => handleTab(tab.id)}
                  aria-pressed={isActive}
                >
                  <Icon size={20} />
                  <span className="kontakt-tab-full">{tab.label}</span>
                  <span className="kontakt-tab-short">{tab.short}</span>
                </button>
              )
            })}
          </div>

          {activeTab === 'pflegekraft' && (
            <ScrollReveal>
              <div className="kontakt-funnel-callout">
                <div className="kontakt-funnel-callout__icon">
                  <Sparkles size={22} />
                </div>
                <div className="kontakt-funnel-callout__copy">
                  <strong>Schneller geht's direkt im Portal</strong>
                  <span>Wechselprofil in 3 Minuten anlegen — Vorschläge bekommst du sobald wir passende Einrichtungen für dich haben.</span>
                </div>
                <a href={FUNNEL} className="btn btn--primary btn--sm kontakt-funnel-callout__cta">
                  Zum Portal <ArrowRight size={16} />
                </a>
              </div>
            </ScrollReveal>
          )}

          <div className="contact-split">
            <ScrollReveal>
              <div className="contact-info">
                <h2 className="section-title" style={{ textAlign: 'left' }}>{copy.headline}</h2>
                <p className="contact-desc">{copy.body}</p>
                <ul className="kontakt-bullets">
                  {copy.bullets.map((b, i) => (
                    <li key={i}>
                      <CheckCircle size={18} /> {b}
                    </li>
                  ))}
                </ul>

                <div className="kontakt-direct">
                  <h3>Direkt erreichbar</h3>
                  <a href="mailto:info@medi-lane.de" className="kontakt-direct-item">
                    <Mail size={18} /> info@medi-lane.de
                  </a>
                  <a href="tel:+4900000000" className="kontakt-direct-item">
                    <Phone size={18} /> +49 (0) 000 000 000
                  </a>
                  <div className="kontakt-direct-item kontakt-direct-meta">
                    <Clock size={18} /> Mo–Fr 9–18 Uhr
                  </div>
                  <div className="kontakt-direct-item kontakt-direct-meta">
                    <ShieldCheck size={18} /> DSGVO-konform
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="contact-form-wrapper">
                <ContactForm type={activeTab} source="kontakt" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="section section--alt">
        <div className="container container--narrow">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-badge">Vor dem Gespräch</span>
              <h2 className="section-title">
                Hilfreiche Seiten <span className="gradient-text">zum Reinlesen</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="kontakt-quicklinks">
            <Link to="/pflegematch-180" className="kontakt-quicklink">
              <h3>PflegeMatch 180</h3>
              <p>Unser Kernangebot mit Matching und 180-Tage-Wechselbegleitung.</p>
            </Link>
            <Link to="/matching-system" className="kontakt-quicklink">
              <h3>Matching-System</h3>
              <p>Passungsabgleich über sechs Dimensionen — mit Matchbericht.</p>
            </Link>
            <Link to="/wechselbegleitung" className="kontakt-quicklink">
              <h3>Wechselbegleitung 180</h3>
              <p>Strukturierte Begleitung in den ersten 180 Tagen nach dem Start.</p>
            </Link>
            <Link to="/ueber-uns" className="kontakt-quicklink">
              <h3>Über Medilane</h3>
              <p>Warum wir Vermittlung anders denken.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
