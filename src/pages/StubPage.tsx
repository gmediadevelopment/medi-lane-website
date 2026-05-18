import { Link } from 'react-router-dom'
import { ArrowRight, Construction } from 'lucide-react'
import PageHero from '../components/sections/PageHero'

interface StubPageProps {
  title: string
  description?: string
  badge?: string
}

export default function StubPage({
  title,
  description = 'Diese Seite wird gerade ausgearbeitet. Sprechen Sie uns gerne direkt an, wir geben Ihnen alle Informationen im persönlichen Erstgespräch.',
  badge = 'In Vorbereitung',
}: StubPageProps) {
  return (
    <div>
      <PageHero
        badge={badge}
        title={
          <>
            {title}
            <br />
            <span className="gradient-text">in Kürze verfügbar</span>
          </>
        }
        subtitle={description}
        actions={
          <>
            <Link to="/kontakt" className="btn btn--primary btn--lg">
              <Construction size={20} />
              Direkt anfragen
            </Link>
            <Link to="/" className="btn btn--secondary btn--lg">
              Zur Startseite
              <ArrowRight size={20} />
            </Link>
          </>
        }
      />
    </div>
  )
}
