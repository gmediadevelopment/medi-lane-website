import { Link } from 'react-router-dom'
import type { ArticleMeta } from './types'

const Body = () => (
  <>
    <p className="article-lead">
      Zeitarbeit in der Pflege ist selten eine strategische Entscheidung. Sie ist meist die
      Folge davon, dass Direktbesetzungen nicht stabil bleiben. Wer Zeitarbeit reduzieren
      will, muss also weiter vorne ansetzen.
    </p>

    <h2>Warum Zeitarbeit so schwer abzubauen ist</h2>
    <p>
      Zeitarbeit löst ein akutes Problem (offener Dienst <em>heute</em>) und schafft zwei
      neue: höhere Stundenkosten und Spannungen im Stammteam, das oft die unbeliebteren
      Dienste übernimmt. Trotzdem bleibt sie, weil das Risiko, eine Direktbesetzung könnte
      nach drei Monaten wieder gehen, in vielen Häusern höher gewichtet wird als die laufenden
      Kosten der Leiharbeit.
    </p>

    <h2>Drei Hebel, die Zeitarbeit strukturell senken</h2>

    <h3>1. Stabilere Direktbesetzungen statt mehr Suche</h3>
    <p>
      Solange jede dritte Probezeit abgebrochen wird, ersetzt Zeitarbeit die instabile
      Direktbesetzung. Die größte Hebelwirkung entsteht also <em>vor</em> der Anstellung:
      ehrlicher Erwartungsabgleich, transparente Dienstplanrealität, dokumentierte
      Einarbeitung. Wer den Probezeitabbruch von 30 % auf 15 % senkt, halbiert mittelfristig
      die Zeitarbeitsabhängigkeit.
    </p>

    <h3>2. Wiedereinsteiger und Rückkehrer aktiv ansprechen</h3>
    <p>
      Es gibt in fast jeder Region Pflegekräfte, die ausgestiegen sind oder in Zeitarbeit
      gewechselt sind, weil ein konkreter Punkt sie gestört hat — Dienstplan, Führung,
      Wochenende, Belastung. Ein konkretes Rückgewinnungskonzept (mit klaren
      Rückkehrbedingungen) kann dort Pflegekräfte aktivieren, die in regulären
      Stellenausschreibungen unsichtbar sind.
    </p>

    <h3>3. Vereinbarkeit ernst nehmen — auch im Dienstplan</h3>
    <p>
      Viele wechseln aus Festanstellung in Zeitarbeit nicht wegen des Geldes, sondern wegen
      der Planbarkeit. Wer planbarere Dienste, Wunschdienste und realistische
      Teilzeitmodelle anbieten kann, gewinnt einen Teil dieser Pflegekräfte zurück. Das ist
      Strukturarbeit — und potenziell nach § 8 Abs. 7 SGB XI fördernah aufsetzbar.
    </p>

    <h2>Was sich messen lässt</h2>
    <p>
      Sinnvolle Kennzahlen, um den Hebel sichtbar zu machen: monatliche Leiharbeitsstunden
      pro Wohnbereich, Probezeitabbruchquote (rollierend über 12 Monate), Dienstplan-Stabilität
      (Anzahl ungeplanter Zusatzdienste je Pflegekraft), Verbleib nach 180 Tagen. Wenn diese
      vier Kennzahlen quartalsweise sichtbar sind, werden Effekte erkennbar — sonst bleibt
      Zeitarbeit eine Black Box.
    </p>

    <h2>Checkliste: Erste Schritte</h2>
    <ul className="article-checklist">
      <li>Probezeitabbrüche der letzten 12 Monate analysieren — mit Gründen, nicht nur Zahlen</li>
      <li>Eine Liste mit 10–15 ehemaligen Pflegekräften anlegen (Rückgewinnung)</li>
      <li>Dienstplan-Stabilität als Kennzahl einführen, monatlich auswerten</li>
      <li>Ein konkretes Vereinbarkeitsmodell für zwei Wohnbereiche pilotieren</li>
      <li>Match- und Erwartungsabgleich vor Vertragsunterschrift verpflichtend machen</li>
    </ul>

    <div className="article-cta">
      <h3>Wie wir damit umgehen</h3>
      <p>
        PflegeMatch 180 senkt Zeitarbeit, weil Direktbesetzungen stabiler werden — durch Matching
        auf beiden Seiten und eine 180-Tage-Wechselbegleitung, die Frühfluktuation früh sichtbar
        macht, bevor wieder eine Lücke entsteht.
      </p>
      <Link to="/pflegematch-180" className="btn btn--primary">
        Match &amp; Stay 180 ansehen
      </Link>
    </div>
  </>
)

const article: ArticleMeta = {
  slug: 'zeitarbeit-pflege-reduzieren',
  title: 'Zeitarbeit in der Pflege reduzieren: Was wirklich hilft',
  description:
    'Zeitarbeit ist selten strategisch — sie ist die Folge instabiler Direktbesetzungen. Drei strukturelle Hebel, die wirklich wirken.',
  category: 'bindung',
  audience: 'einrichtungen',
  readingMinutes: 6,
  publishedAt: '2026-05-04',
  body: Body,
}

export default article
