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

// Pages — Neu (Phase 1)
import PflegeMatch180 from './pages/PflegeMatch180'
import Stabilitaetsberatung from './pages/Stabilitaetsberatung'
import Foerderung from './pages/Foerderung'
import Kontakt from './pages/Kontakt'
import UeberUns from './pages/UeberUns'

// Platzhalter für noch nicht ausgebaute Seiten
import StubPage from './pages/StubPage'

export default function App() {
  return (
    <Routes>
      {/* Google Ads LP — NO header/footer for max performance */}
      <Route path="/lp/pflege" element={<GoogleAdsLP />} />

      {/* Public Website — with Header + Footer */}
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<HomePage />} />

        {/* Hub-Seiten (bestehend) */}
        <Route path="/pflegekraefte" element={<PflegekraeftePage />} />
        <Route path="/arbeitgeber" element={<ArbeitgeberPage />} />

        {/* Für Einrichtungen — Detailseiten */}
        <Route path="/pflegematch-180" element={<PflegeMatch180 />} />
        <Route path="/stabilitaetsberatung" element={<Stabilitaetsberatung />} />
        <Route path="/foerderung" element={<Foerderung />} />
        <Route
          path="/matching-system"
          element={
            <StubPage
              title="Das Medi-Lane Matching-System"
              description="Methodische Details zu Fragebögen, Matching-Dimensionen, Scorelogik und Ampelbewertung. Die ausgebaute Seite folgt in der nächsten Iteration — gerne erläutern wir das Modell schon jetzt im persönlichen Gespräch."
            />
          }
        />
        <Route
          path="/wechselbegleitung"
          element={
            <StubPage
              title="180-Tage-Wechselbegleitung"
              description="Vollständige Darstellung der Check-in-Termine, Frühwarnindikatoren und Interventionsmaßnahmen folgt in der nächsten Iteration. Eine Übersicht finden Sie aktuell auf der PflegeMatch-180-Seite."
            />
          }
        />
        <Route
          path="/digitale-plattform"
          element={
            <StubPage
              title="Medi-Lane CareOS"
              description="Unsere digitale Plattform für Matching, Check-ins und Reporting befindet sich in der Aufbauphase. Wir geben gerne Einblick in das Konzept und mögliche Pilotrollen."
            />
          }
        />

        {/* Für Pflegekräfte */}
        <Route
          path="/wechselberatung"
          element={
            <StubPage
              title="Wechselberatung für Pflegekräfte"
              description="Wir bauen aktuell die separate Beratungsseite für wechselbereite Pflegekräfte aus. In der Zwischenzeit finden Sie alle Informationen auf der Pflegekräfte-Hub-Seite."
            />
          }
        />
        <Route
          path="/arbeitgeber-finden"
          element={
            <StubPage
              title="Passenden Arbeitgeber finden"
              description="Das ausführliche Lead-Formular für Pflegekräfte folgt in Kürze. Sie können sich aber jederzeit über das Kontaktformular bei uns melden."
            />
          }
        />

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
