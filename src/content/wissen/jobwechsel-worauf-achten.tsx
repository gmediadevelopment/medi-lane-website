import { Link } from 'react-router-dom'
import type { ArticleMeta } from './types'

const Body = () => (
  <>
    <p className="article-lead">
      Ein Pflegejob-Wechsel ist eine große Entscheidung. Wenn er gut wird, verändert er den
      Alltag spürbar. Wenn er schief geht, verstärkt er genau die Probleme, vor denen man
      weg wolltest. Worauf es vor dem Wechsel ankommt — und welche Fragen du dir stellen
      solltest, bevor du unterschreibst.
    </p>

    <h2>Warum schnelle Wechsel oft wieder enttäuschen</h2>
    <p>
      Der größte Risikofaktor ist nicht der falsche Arbeitgeber, sondern der gleiche Wechsel
      zum zweiten Mal: weg von einem Problem, aber ohne klares Bild davon, was diesmal anders
      sein soll. Wer aus Frust schnell wechselt, landet überproportional oft in einer
      Einrichtung mit denselben Strukturen.
    </p>

    <h2>Drei Fragen, die du zuerst dir selbst beantworten solltest</h2>

    <h3>1. Was darf sich auf keinen Fall wiederholen?</h3>
    <p>
      Das ist die wichtigste Frage vor jedem Wechsel. Schreib 3–5 Punkte auf —
      konkret, nicht abstrakt. „Mehr Wertschätzung" ist zu vage. „Maximal zwei
      Wochenenddienste pro Monat, kein Einspringen aus dem Frei nach 19 Uhr" ist konkret.
      Genau diese Punkte sind im neuen Job nicht verhandelbar.
    </p>

    <h3>2. Was muss konkret besser werden?</h3>
    <p>
      Nicht „alles", sondern zwei bis drei Dinge: Vielleicht ein anderer Fachbereich, vielleicht
      mehr Verantwortung, vielleicht Praxisanleitung, vielleicht einfach ein planbarer
      Dienstplan. Wenn du das nicht klar hast, wird auch der nächste Arbeitgeber es nicht
      raten.
    </p>

    <h3>3. Was bist du bereit, dafür zu geben?</h3>
    <p>
      Ein längerer Fahrweg für mehr Stabilität? Ein anderer Bereich für bessere Führung?
      Vorübergehend weniger Verantwortung für bessere Einarbeitung? Wechsel bedeuten fast
      immer Tausch — wer das vorher klärt, verhandelt entspannter.
    </p>

    <h2>Was du im Vorstellungsgespräch ansprechen solltest</h2>
    <p>
      Viele Pflegekräfte schweigen über die kritischen Punkte und hoffen, dass es „schon
      passt". Das ist genau der Mechanismus, der zur Probezeitkündigung führt. Sprich
      deine 3–5 No-Gos im ersten Gespräch an. Wenn der zukünftige Arbeitgeber sie nicht halten
      kann, ist das eine wertvolle Information — und keine Schwäche Ihrerseits.
    </p>

    <h2>Checkliste vor dem Wechsel</h2>
    <ul className="article-checklist">
      <li>3–5 No-Gos schriftlich festhalten</li>
      <li>2–3 Punkte definieren, die konkret besser werden sollen</li>
      <li>Realistische Tausch-Bereitschaft prüfen</li>
      <li>Im Vorstellungsgespräch nach Dienstplanrhythmus der letzten 8 Wochen fragen</li>
      <li>Nach Einarbeitung mit Namen und Zeitplan fragen, nicht nur „Wir haben einen Mentor"</li>
      <li>Mit aktuellen Mitarbeitenden des Bereichs sprechen, wenn möglich</li>
      <li>Erwartungen schriftlich abgleichen, bevor du unterschreibst</li>
    </ul>

    <div className="article-cta">
      <h3>Wenn du wechseln willst</h3>
      <p>
        Wir begleiten Pflegekräfte vor und nach dem Wechsel. Im Vorgespräch klären wir deine
        No-Gos. Im Match prüfen wir, ob der Arbeitgeber sie halten kann. In den ersten 180
        Tagen bleiben wir Ansprechpartner.
      </p>
      <Link to="/arbeitgeber-finden" className="btn btn--primary">
        Wechselprofil erstellen
      </Link>
    </div>
  </>
)

const article: ArticleMeta = {
  slug: 'jobwechsel-in-der-pflege-worauf-sie-achten-sollten',
  title: 'Jobwechsel in der Pflege: Worauf du achten solltest',
  description:
    'Ein guter Wechsel beginnt mit ehrlicher Klärung — bei dir selbst. Drei Fragen und eine Checkliste, bevor du unterschreibst.',
  category: 'wechsel',
  audience: 'pflegekraefte',
  readingMinutes: 5,
  publishedAt: '2026-05-15',
  body: Body,
}

export default article
