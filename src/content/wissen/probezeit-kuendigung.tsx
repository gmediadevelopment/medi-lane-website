import { Link } from 'react-router-dom'
import type { ArticleMeta } from './types'

const Body = () => (
  <>
    <p className="article-lead">
      Wenn Pflegekräfte in der Probezeit kündigen, liegt es selten an Qualifikation oder Gehalt.
      Die häufigsten Gründe sind strukturell — und sie sind vermeidbar, wenn man sie vorher kennt.
    </p>

    <h2>Was Probezeitabbrüche wirklich kosten</h2>
    <p>
      Eine Fachkraft, die nach 60 Tagen wieder geht, kostet eine Einrichtung nicht nur die Suche.
      Sie kostet ungesehene Belastung des Stammteams, einen unruhigen Wohnbereich, oft eine
      Bridge-Lösung über Zeitarbeit und das Risiko, dass das nächste Vorstellungsgespräch von
      einer demotivierten PDL geführt wird. In Summe: deutlich mehr als das, was an
      Vermittlungsgebühr verloren geht.
    </p>

    <h2>Die fünf häufigsten Abbruchgründe</h2>
    <ol>
      <li>
        <strong>Dienstplanversprechen werden gebrochen.</strong> Wer Wochenende A zugesagt
        bekommt, dann aber Wochenende B+C eingeplant wird, fühlt sich nach drei Wochen
        betrogen — egal wie freundlich das Team ist.
      </li>
      <li>
        <strong>Einarbeitung findet nicht statt.</strong> Mentor ist offiziell zugewiesen,
        praktisch aber im eigenen Dienstplan gefangen. Die neue Pflegekraft macht in Tag 5
        Dinge, die sie noch nie gesehen hat.
      </li>
      <li>
        <strong>Die Belastung entspricht nicht der Stellenbeschreibung.</strong> "Tagespflege"
        und tatsächlich überwiegend Schwerstpflege sind zwei verschiedene Welten.
      </li>
      <li>
        <strong>Führung ist nicht ansprechbar.</strong> PDL ist freundlich, aber immer in
        Meetings. Konflikte werden weder gesehen noch moderiert.
      </li>
      <li>
        <strong>Das Team nimmt nicht auf.</strong> Mehrere Personalwechsel im selben Jahr
        haben das Stammteam vorsichtig gemacht — neue Kolleginnen bleiben außen vor.
      </li>
    </ol>

    <h2>Was hilft — vor und nach der Einstellung</h2>
    <p>
      Die meisten dieser Punkte werden im Vorstellungsgespräch nicht angesprochen. Nicht aus
      Unehrlichkeit, sondern weil man es im Druck der Stellenbesetzung verdrängt. Genau dort
      ist der Hebel: einen strukturierten Erwartungsabgleich <em>vor</em> der Unterschrift
      machen und einen Check-in nach 7 Tagen fest einplanen.
    </p>
    <p>
      Konkret: vor Start auf 5 Punkte einigen — Dienstplanrhythmus, Wochenend-Logik,
      Einarbeitungsplan mit Namen, Ansprechpartner bei Problemen, kritische
      Belastungsthemen. Schriftlich, nicht im Vorbeigehen.
    </p>

    <h2>Checkliste: Vor dem ersten Arbeitstag</h2>
    <ul className="article-checklist">
      <li>Dienstplan der ersten 8 Wochen liegt vor</li>
      <li>Mentor / Pate ist namentlich benannt und weiß Bescheid</li>
      <li>Einarbeitungsplan mit Wochenthemen ist abgestimmt</li>
      <li>Erste Feedback-Gespräche sind kalendarisch fixiert (Tag 7, 30, 60)</li>
      <li>Kritische Punkte aus dem Vorstellungsgespräch sind dokumentiert</li>
      <li>Pflegekraft hat eine Ansprechperson außerhalb des Wohnbereichs</li>
    </ul>

    <div className="article-cta">
      <h3>Wie wir damit umgehen</h3>
      <p>
        Genau diese Themen sind der Grund, warum PflegeMatch 180 nicht mit der Unterschrift
        endet, sondern erst nach 180 Tagen. Wir machen den Erwartungsabgleich vorab und
        führen Check-ins nach 7, 30, 60, 100 und 180 Tagen.
      </p>
      <Link to="/pflegematch-180" className="btn btn--primary">
        Mehr zu PflegeMatch 180
      </Link>
    </div>
  </>
)

const article: ArticleMeta = {
  slug: 'warum-pflegekraefte-in-der-probezeit-kuendigen',
  title: 'Warum Pflegekräfte in der Probezeit kündigen',
  description:
    'Die häufigsten Gründe für Probezeitabbrüche sind strukturell — und vermeidbar. Was wirklich dahintersteckt und welche Hebel Einrichtungen haben.',
  category: 'einrichtungen',
  audience: 'einrichtungen',
  readingMinutes: 5,
  publishedAt: '2026-05-12',
  body: Body,
}

export default article
