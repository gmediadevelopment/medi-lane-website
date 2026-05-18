import { Routes, Route } from 'react-router-dom'

// Layout
import WebsiteLayout from './components/layout/WebsiteLayout'

// Pages — Bestand
import HomePage from './pages/HomePage'
import PflegekraeftePage from './pages/PflegekraeftePage'
import ArbeitgeberPage from './pages/ArbeitgeberPage'
import GoogleAdsLP from './pages/GoogleAdsLP'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'

// Pages — Phase 1
import PflegeMatch180 from './pages/PflegeMatch180'
import Stabilitaetsberatung from './pages/Stabilitaetsberatung'
import Foerderung from './pages/Foerderung'
import Kontakt from './pages/Kontakt'
import UeberUns from './pages/UeberUns'

// Pages — Phase 2
import MatchingSystem from './pages/MatchingSystem'
import Wechselbegleitung from './pages/Wechselbegleitung'
import DigitalePlattform from './pages/DigitalePlattform'
import Wechselberatung from './pages/Wechselberatung'
import ArbeitgeberFinden from './pages/ArbeitgeberFinden'

// Verbliebene Platzhalter (Wissen, Demo)
import StubPage from './pages/StubPage'

export default function App() {
  return (
    <Routes>
      {/* Google Ads LP — NO header/footer for max performance */}
      <Route path="/lp/pflege" element={<GoogleAdsLP />} />

      {/* Public Website — with Header + Footer */}
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<HomePage />} />

        {/* Hub-Seiten */}
        <Route path="/pflegekraefte" element={<PflegekraeftePage />} />
        <Route path="/arbeitgeber" element={<ArbeitgeberPage />} />

        {/* Für Einrichtungen — Detailseiten */}
        <Route path="/pflegematch-180" element={<PflegeMatch180 />} />
        <Route path="/matching-system" element={<MatchingSystem />} />
        <Route path="/wechselbegleitung" element={<Wechselbegleitung />} />
        <Route path="/stabilitaetsberatung" element={<Stabilitaetsberatung />} />
        <Route path="/foerderung" element={<Foerderung />} />
        <Route path="/digitale-plattform" element={<DigitalePlattform />} />

        {/* Für Pflegekräfte — Detailseiten */}
        <Route path="/wechselberatung" element={<Wechselberatung />} />
        <Route path="/arbeitgeber-finden" element={<ArbeitgeberFinden />} />

        {/* Globale Seiten */}
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route
          path="/wissen"
          element={
            <StubPage
              title="Wissen und Ratgeber"
              description="Unser Wissens- und Ratgeberbereich wird in der nächsten Iteration aufgebaut — mit Artikeln zu Probezeitabbrüchen, Onboarding, Zeitarbeit-Reduktion, Rückgewinnung und Vereinbarkeit."
            />
          }
        />
        <Route
          path="/demo-anfragen"
          element={
            <StubPage
              title="Pilot- und Demogespräch"
              description='Für Förderer, Träger und Pilotpartner. Schreiben Sie uns über das Kontaktformular mit der Auswahl "Förderer / Partner" — wir melden uns mit Konzeptunterlagen.'
            />
          }
        />

        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
