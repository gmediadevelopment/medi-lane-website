import { Link } from 'react-router-dom'
import type { ArticleMeta } from './types'

const Body = () => (
  <>
    <p className="article-lead">
      Fehlbesetzungen entstehen selten durch fehlende Qualifikation. Sie entstehen, weil
      Erwartungen auf beiden Seiten nicht klar sind. Das ist eine gute Nachricht: Es heißt,
      sie sind systematisch vermeidbar.
    </p>

    <h2>Was Fehlbesetzungen wirklich auslöst</h2>
    <p>
      Wenn eine Pflegekraft fachlich gut ist und trotzdem nicht funktioniert, liegt das in
      mindestens 80 % der Fälle an einem der folgenden Punkte: Dienstplanrealität passt
      nicht zur Lebenssituation, Belastung im Bereich übersteigt das, was im Gespräch
      kommuniziert wurde, oder die Teamkultur ist eine andere als erwartet. Keiner dieser
      Punkte steht im Lebenslauf — auf beiden Seiten nicht.
    </p>

    <h2>Drei Hebel, die wirklich etwas ändern</h2>

    <h3>1. Vor dem Stelleninserat: Was kann die Einrichtung wirklich halten?</h3>
    <p>
      Die ehrlichste Frage, die sich jede Einrichtung vor einem neuen Inserat stellen sollte:
      „Welche Wünsche unserer letzten drei Bewerbungen konnten wir nach drei Monaten
      tatsächlich noch einhalten?" Die Antwort ist meist ernüchternder als gedacht — und
      genau dort sollte die nächste Stellenanzeige ansetzen, ehrlich.
    </p>

    <h3>2. Im Gespräch: Was darf sich nicht wiederholen?</h3>
    <p>
      Statt „Warum wollen Sie wechseln?" reicht die schärfere Variante: „Was darf in der
      neuen Stelle auf keinen Fall passieren?" Die Antwort enthält die kritischen
      Passungspunkte. Wenn die eigene Einrichtung diese Punkte nicht halten kann, ist es
      keine Verschwendung, das offen zu sagen — sondern eine Versicherung gegen eine
      Fehlbesetzung.
    </p>

    <h3>3. Vor Vertragsunterschrift: Der Erwartungsabgleich</h3>
    <p>
      Fünf Punkte schriftlich klären, bevor der Vertrag rausgeht: Dienstplanrhythmus
      (konkret), Wochenend- und Einsprung-Logik, Einarbeitungsplan mit Namen und Zeiten,
      No-Gos der Pflegekraft, kritische Themen des Bereichs. Diese halbe Stunde spart
      typischerweise drei Monate Probezeitfrust.
    </p>

    <h2>Was im Match-Bericht stehen sollte</h2>
    <p>
      Wenn du mit einem Vermittler arbeitest, ist die einfachste Qualitätskontrolle: Steht
      im Match-Bericht nur die Qualifikation oder auch die kritischen Passungspunkte? Eine
      seriöse Vorauswahl benennt mindestens drei Risikofaktoren je Kandidat — fachlich,
      organisatorisch, kulturell. Wer alles grün anstreicht, hat nicht gut hingeschaut.
    </p>

    <h2>Checkliste für die nächste Besetzung</h2>
    <ul className="article-checklist">
      <li>Ehrliche Bestandsaufnahme: Was haben wir bei den letzten Besetzungen nicht halten können?</li>
      <li>Stellenanzeige spiegelt die echten Bedingungen, nicht das Wunschbild</li>
      <li>Im Gespräch nach No-Gos und kritischen Wünschen fragen — nicht nur nach Stärken</li>
      <li>Risikofaktoren des Kandidaten dokumentieren, nicht nur die Eignung</li>
      <li>Schriftlicher Erwartungsabgleich vor Vertragsunterschrift</li>
      <li>Check-in nach 7 und 30 Tagen ist im Kalender, nicht nur in der Absicht</li>
    </ul>

    <div className="article-cta">
      <h3>Wie wir damit umgehen</h3>
      <p>
        Wir machen den Erwartungsabgleich verbindlich — auf Pflegekraft- und Arbeitgeber-Seite —
        und schreiben Risiken in jeden Match-Bericht. Das macht weniger, aber bessere
        Vorstellungen.
      </p>
      <Link to="/matching-system" className="btn btn--primary">
        Wie unser Matching funktioniert
      </Link>
    </div>
  </>
)

const article: ArticleMeta = {
  slug: 'wie-pflegeeinrichtungen-fehlbesetzungen-vermeiden',
  title: 'Wie Pflegeeinrichtungen Fehlbesetzungen vermeiden',
  description:
    'Fehlbesetzungen entstehen selten durch fehlende Qualifikation. Drei konkrete Hebel, die vor Vertragsunterschrift greifen.',
  category: 'recruiting',
  audience: 'einrichtungen',
  readingMinutes: 6,
  publishedAt: '2026-05-08',
  body: Body,
}

export default article
