import { Routes, Route } from 'react-router-dom'

// Layout
import WebsiteLayout from './components/layout/WebsiteLayout'

// Pages
import HomePage from './pages/HomePage'
import PflegekraeftePage from './pages/PflegekraeftePage'
import ArbeitgeberPage from './pages/ArbeitgeberPage'
import GoogleAdsLP from './pages/GoogleAdsLP'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'

export default function App() {
  return (
    <Routes>
      {/* Google Ads LP — NO header/footer for max performance */}
      <Route path="/lp/pflege" element={<GoogleAdsLP />} />

      {/* Public Website — with Header + Footer */}
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/pflegekraefte" element={<PflegekraeftePage />} />
        <Route path="/arbeitgeber" element={<ArbeitgeberPage />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
