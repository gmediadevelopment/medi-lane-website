import { Link } from 'react-router-dom'
import type { ArticleMeta } from './types'

const Body = () => (
  <>
    <p className="article-lead">
      Im Vorstellungsgespräch beantworten Pflegekräfte typischerweise viele Fragen — und
      stellen wenige. Dabei sind genau die Fragen, die Sie stellen, der beste Schutz vor
      einer Fehlentscheidung.
    </p>

    <h2>Die Fragen, die im Vorstellungsgespräch zählen</h2>
    <p>
      Vergessen Sie Standardfragen wie „Wie sehen Sie sich in fünf Jahren?". Die wirklich
      wichtigen Fragen sind konkret, alltagsnah und ein bisschen unbequem. Genau deshalb
      sagen sie viel über die Einrichtung aus — nicht durch die Antwort, sondern durch die
      Reaktion auf die Frage.
    </p>

    <h2>Sieben Fragen, die Sie stellen sollten</h2>

    <h3>1. „Wie sah der Dienstplan dieses Wohnbereichs in den letzten acht Wochen aus?"</h3>
    <p>
      Diese Frage entlarvt jede beschönigte Stellenanzeige. Wer hier keinen konkreten Plan
      zeigen kann oder sofort ins Schwafeln gerät, hat den Dienstplan nicht im Griff. Das
      bekommen Sie in Ihrer Probezeit zu spüren.
    </p>

    <h3>2. „Wer wäre mein Mentor / meine Mentorin in der Einarbeitung, und wie oft sind wir gemeinsam im Dienst?"</h3>
    <p>
      Die schwächere Version „Wir haben eine strukturierte Einarbeitung" ist die Standardantwort.
      Wer einen Namen und einen Plan nennen kann, hat es ernst gemeint.
    </p>

    <h3>3. „Wie wurde die letzte Pflegekraft eingearbeitet — und wo ist sie heute?"</h3>
    <p>
      Wenn die letzte Pflegekraft nach drei Monaten wieder gegangen ist, sollten Sie das
      wissen — bevor Sie unterschreiben. Eine seriöse Einrichtung antwortet ehrlich.
    </p>

    <h3>4. „Welche Wünsche aus früheren Vorstellungsgesprächen konnten Sie nicht halten?"</h3>
    <p>
      Die ehrlichste Antwort einer Einrichtung lautet: „Das und das konnten wir nicht halten,
      und so gehen wir damit um." Wer sagt „Wir halten alles, was wir versprechen", lügt — oder
      hat noch nie wirklich darüber nachgedacht.
    </p>

    <h3>5. „Wie viele Stunden Zeitarbeit haben Sie im letzten Monat eingesetzt?"</h3>
    <p>
      Ein hoher Zeitarbeitsanteil ist nicht automatisch schlecht, aber er sagt viel über die
      Stabilität des Bereichs. Vor allem zeigt die Bereitschaft zur Antwort, wie offen die
      Einrichtung mit Zahlen umgeht.
    </p>

    <h3>6. „Was passiert, wenn ich nach drei Wochen merke, dass etwas nicht passt?"</h3>
    <p>
      Eine gute Antwort beschreibt einen klaren Prozess: Mit wem spreche ich, wann findet
      ein Feedback-Gespräch statt, gibt es Möglichkeiten zur Anpassung. Eine schwache Antwort
      ist „Dann reden wir."
    </p>

    <h3>7. „Welche Punkte würden eine Probezeitkündigung bei Ihnen wahrscheinlich machen?"</h3>
    <p>
      Die ungewöhnliche, aber sehr aufschlussreiche Frage. Eine reflektierte Einrichtung kennt
      ihre kritischen Punkte und benennt sie. Eine, die ausweicht, hat noch nicht aus ihren
      letzten Abbrüchen gelernt.
    </p>

    <h2>Was Sie mit den Antworten machen</h2>
    <p>
      Bewerten Sie nicht nur die Antworten, sondern auch die Reaktion. Wer entspannt und
      konkret antwortet, hat nichts zu verbergen. Wer auf einfache Fragen ausweichend
      reagiert, gibt Ihnen wertvolle Information — nehmen Sie sie ernst.
    </p>

    <div className="article-cta">
      <h3>Wir bereiten Gespräche mit vor</h3>
      <p>
        Wenn wir Sie zu einer Einrichtung vorschlagen, gehen wir mit Ihnen die kritischen
        Fragen für genau diesen Bereich durch — und Sie wissen, was Sie ansprechen sollten,
        bevor Sie überhaupt reinkommen.
      </p>
      <Link to="/wechselberatung" className="btn btn--primary">
        Mehr zur Wechselberatung
      </Link>
    </div>
  </>
)

const article: ArticleMeta = {
  slug: 'fragen-im-vorstellungsgespraech-pflege',
  title: 'Welche Fragen Pflegekräfte im Vorstellungsgespräch stellen sollten',
  description:
    'Sieben konkrete Fragen, die im Vorstellungsgespräch zählen — und was die Reaktion darauf über die Einrichtung sagt.',
  category: 'wechsel',
  audience: 'pflegekraefte',
  readingMinutes: 6,
  publishedAt: '2026-05-10',
  body: Body,
}

export default article
