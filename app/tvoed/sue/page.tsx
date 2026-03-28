import Layout from "@/components/Layout";
import Link from "next/link";

const TABELLEN = {
  zukuenftig: {
    id: "2026",
    label: "ZUKÜNFTIG",
    labelColor: "bg-amber-50 text-amber-700",
    titel: "TVöD SuE 2026",
    gueltigAb: "01.05.2026",
    gueltigBis: null,
    erhoehung: "+2,8%",
    mindest: null,
    details: "Zweite Stufe des Tarifabschlusses April 2025. Erhöhung um 2,8% für alle Beschäftigten im Sozial- und Erziehungsdienst.",
    abschluss: "Tarifabschluss April 2025",
  },
  aktuell: {
    id: "2025",
    label: "AKTUELL",
    labelColor: "bg-green-50 text-green-700",
    titel: "TVöD SuE 2025",
    gueltigAb: "01.04.2025",
    gueltigBis: "30.04.2026",
    erhoehung: "+3,0%",
    mindest: "mind. +110 €",
    details: "Lineare Erhöhung um 3,0%, mindestens 110 Euro. Gilt für Erzieher, Sozialpädagogen und alle Beschäftigten im kommunalen Sozial- und Erziehungsdienst.",
    abschluss: "Tarifabschluss April 2025",
  },
};

const ARCHIV = [
  { id: "2024", titel: "TVöD SuE 2024", gueltigAb: "01.03.2024", gueltigBis: "31.03.2025", erhoehung: "+5,5%", mindest: "mind. +340 €", abschluss: "Tarifabschluss April 2023" },
  { id: "2023", titel: "TVöD SuE 2023", gueltigAb: "01.06.2023", gueltigBis: "29.02.2024", erhoehung: "+5,5%", mindest: "mind. +340 €", abschluss: "Tarifabschluss April 2023" },
];

const TARIFRUNDEN = [
  {
    id: "2025", titel: "Tarifrunde TVöD SuE 2025", zeitraum: "Januar – April 2025",
    status: "abgeschlossen", statusColor: "bg-green-50 text-green-700",
    ergebnis: "+3,0% ab April 2025, +2,8% ab Mai 2026",
    beschreibung: "Tarifeinigung für die rund 330.000 Beschäftigten im kommunalen Sozial- und Erziehungsdienst nach Schlichtung.",
    href: "/tvoed/sue/tarifrunden/2025",
  },
  {
    id: "2023", titel: "Tarifrunde TVöD SuE 2023", zeitraum: "Januar – April 2023",
    status: "abgeschlossen", statusColor: "bg-green-50 text-green-700",
    ergebnis: "+5,5% ab Juni 2023, mind. +340 €",
    beschreibung: "Starkes Ergebnis für Erzieher und Sozialpädagogen nach massiven Warnstreiks in Kitas und Jugendhilfe.",
    href: "/tvoed/sue/tarifrunden/2023",
  },
];

const FAQ = [
  { frage: "Für wen gilt der TVöD SuE?", antwort: "Der TVöD SuE (Sozial- und Erziehungsdienst) gilt für Beschäftigte in kommunalen Kindertagesstätten, Horten, Jugendhilfeeinrichtungen und sozialpädagogischen Diensten. Er ist Teil des TVöD VKA und enthält eine eigene Entgeltordnung mit den Entgeltgruppen S 2 bis S 18 statt der üblichen E-Gruppen." },
  { frage: "Was verdient ein Erzieher im TVöD SuE?", antwort: "Ein staatlich anerkannter Erzieher wird in der Regel in S 8a eingruppiert und verdient 2025 in Stufe 1 rund 3.341 Euro brutto. In Stufe 6 sind es 4.118 Euro. Erzieher mit Gruppenleitung werden in S 8b eingruppiert und verdienen entsprechend mehr. Das Nettogehalt hängt von Steuerklasse, Bundesland und Kirchensteuerpflicht ab." },
  { frage: "Was ist der Unterschied zwischen S 8a und S 8b im TVöD SuE?", antwort: "S 8a gilt für staatlich anerkannte Erzieher ohne Gruppenleitung. S 8b gilt für staatlich anerkannte Erzieher, die eigenverantwortlich eine Gruppe leiten. Der Unterschied in der Bezahlung beträgt in Stufe 1 etwa 130 Euro brutto monatlich und wächst mit den höheren Stufen." },
  { frage: "Wie lange dauert der Stufenaufstieg im TVöD SuE?", antwort: "Der Stufenaufstieg im TVöD SuE folgt denselben Zeitregeln wie der TVöD VKA: Von Stufe 1 nach 2 in einem Jahr, von 2 nach 3 in drei Jahren, von 3 nach 4 in vier Jahren, von 4 nach 5 in vier Jahren und von 5 nach 6 in fünf Jahren. Insgesamt dauert der Aufstieg von Stufe 1 bis 6 also 18 Jahre." },
  { frage: "Gibt es eine Jahressonderzahlung im TVöD SuE?", antwort: "Ja, Beschäftigte im TVöD SuE erhalten eine jährliche Sonderzahlung im November. Die Höhe beträgt je nach Entgeltgruppe zwischen 60% und 90% eines Monatsentgelts. Die genaue Höhe hängt von der jeweiligen Entgeltgruppe und dem Tarifgebiet ab." },
  { frage: "Welche Zulagen gibt es im Sozial- und Erziehungsdienst?", antwort: "Im TVöD SuE gibt es verschiedene Zulagen: eine monatliche SuE-Zulage von 130 Euro (seit 2022), Zulagen für besondere Tätigkeiten wie Betreuung von Kindern mit Behinderungen, Schicht- und Wochenendzulagen sowie eine besondere Jahressonderzahlung für SuE-Beschäftigte." },
  { frage: "Was ist eine Sozialpädagogin im TVöD SuE und welche EG gilt?", antwort: "Sozialpädagoginnen und Sozialarbeiterinnen werden in der Regel in S 12 (mit Bachelor oder FH-Diplom) eingruppiert. Mit staatlicher Anerkennung und entsprechender Tätigkeit kann auch S 14 (Erziehungsberatung, Suchtberatung) erreicht werden. Leitende Fachkräfte werden in S 15 bis S 18 eingruppiert." },
];

type TabelleType = {
  id: string; label: string; labelColor: string; titel: string;
  gueltigAb: string; gueltigBis: string | null; erhoehung: string;
  mindest: string | null; details: string; abschluss: string;
};

function TarifCard({ tabelle, basePath }: { tabelle: TabelleType; basePath: string }) {
  return (
    <div className="border border-gray-100 rounded-xl p-6 flex flex-col gap-4 hover:border-gray-200 hover:shadow-sm transition-all h-full">
      <div className="flex items-start justify-between gap-3">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-md ${tabelle.labelColor}`}>{tabelle.label}</span>
        <div className="text-right">
          <div className="text-2xl font-medium text-green-600">{tabelle.erhoehung}</div>
          {tabelle.mindest && <div className="text-xs text-gray-400">{tabelle.mindest}</div>}
        </div>
      </div>
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-1">{tabelle.titel}</h2>
        <div className="text-sm text-gray-500">Gültig ab {tabelle.gueltigAb}{tabelle.gueltigBis && ` bis ${tabelle.gueltigBis}`}</div>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed flex-1">{tabelle.details}</p>
      <div className="text-xs text-gray-400 border-t border-gray-50 pt-3">{tabelle.abschluss}</div>
      <div className="flex gap-2">
        <Link href={`${basePath}/${tabelle.id}`} className="flex-1 text-center text-sm border border-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors">Tabelle anzeigen</Link>
        <Link href={`${basePath}/${tabelle.id}/rechner`} className="flex-1 text-center text-sm bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">Zum Rechner</Link>
      </div>
    </div>
  );
}

export default function TVoeDSuEPage() {
  const basePath = "/tvoed/sue";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ.map(f => ({ "@type": "Question", "name": f.frage, "acceptedAnswer": { "@type": "Answer", "text": f.antwort } }))
  };
  return (
    <Layout activePath="/tvoed/sue">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="text-sm text-gray-400 mb-6 flex items-center gap-1 flex-wrap">
        <a href="/" className="hover:text-gray-600">Startseite</a><span>→</span>
        <a href="/tvoed" className="hover:text-gray-600">TVöD</a><span>→</span>
        <span className="text-gray-900">TVöD SuE</span>
      </div>
      <h1 className="text-3xl font-medium text-gray-900 mb-2">TVöD SuE – Entgelttabellen & Rechner</h1>
      <p className="text-gray-500 mb-10 max-w-2xl">Alle Entgelttabellen für den kommunalen Sozial- und Erziehungsdienst (TVöD SuE) – für Erzieher, Sozialpädagogen und Fachkräfte in Kitas und Jugendhilfe.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <TarifCard tabelle={TABELLEN.aktuell} basePath={basePath} />
        <TarifCard tabelle={TABELLEN.zukuenftig} basePath={basePath} />
      </div>
      <div className="mb-12">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Archiv</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ARCHIV.map(a => (
            <div key={a.id} className="border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">ARCHIV</span>
                <span className="text-base font-medium text-gray-600">{a.erhoehung}</span>
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">{a.titel}</h3>
              <div className="text-xs text-gray-400 mb-1">{a.gueltigAb} – {a.gueltigBis}</div>
              {a.mindest && <div className="text-xs text-gray-400 mb-3">{a.mindest}</div>}
              <div className="text-xs text-gray-400 border-t border-gray-50 pt-2 mb-3">{a.abschluss}</div>
              <div className="flex gap-2">
                <Link href={`${basePath}/${a.id}`} className="flex-1 text-center text-xs border border-gray-200 text-gray-600 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">Tabelle</Link>
                <Link href={`${basePath}/${a.id}/rechner`} className="flex-1 text-center text-xs bg-gray-900 text-white py-1.5 rounded-lg hover:bg-gray-700 transition-colors">Rechner</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Tarifrunden TVöD SuE</h2>
        <div className="space-y-3">
          {TARIFRUNDEN.map(tr => (
            <Link key={tr.id} href={tr.href} className="flex items-start justify-between gap-4 border border-gray-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-sm transition-all">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-md ${tr.statusColor}`}>Abgeschlossen</span>
                  <span className="text-xs text-gray-400">{tr.zeitraum}</span>
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">{tr.titel}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{tr.beschreibung}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-sm font-medium text-green-600 mb-1">{tr.ergebnis}</div>
                <span className="text-xs text-blue-600">Details →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-xl font-medium text-gray-900 mb-6">Häufige Fragen zum TVöD SuE</h2>
        <div className="space-y-4">
          {FAQ.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-5">
              <h3 className="text-sm font-medium text-gray-900 mb-2">{item.frage}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.antwort}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-100 pt-10">
        <h2 className="text-xl font-medium text-gray-900 mb-4">TVöD SuE – Tarifvertrag für den Sozial- und Erziehungsdienst</h2>
        <div className="text-gray-500 space-y-4 text-sm leading-relaxed max-w-3xl">
          <p>Der Tarifvertrag für den Sozial- und Erziehungsdienst (TVöD SuE) ist ein Bestandteil des TVöD VKA und regelt die besonderen Arbeitsbedingungen für rund 330.000 Beschäftigte in kommunalen Kindertagesstätten, Horten, Jugendhilfeeinrichtungen und sozialen Diensten. Er enthält eine eigene Entgeltordnung mit den Entgeltgruppen S 2 bis S 18.</p>
          <p>Die Eingruppierung richtet sich nach der Qualifikation und den ausgeübten Tätigkeiten. Staatlich anerkannte Erzieher werden in der Regel in S 8a oder S 8b eingruppiert. Sozialpädagogen mit Hochschulabschluss beginnen ab S 12. Leitungskräfte werden je nach Einrichtungsgröße in S 13 bis S 18 eingruppiert.</p>
          <p>Ein besonderes Merkmal des TVöD SuE ist die monatliche SuE-Zulage, die seit dem Tarifabschluss 2022 130 Euro beträgt und auf das Tabellenentgelt aufgeschlagen wird. Diese Zulage wurde eingeführt, um die besonderen Belastungen im Sozial- und Erziehungsdienst anzuerkennen.</p>
          <p>Die letzte Tarifrunde für den TVöD SuE fand 2025 statt. Das Ergebnis war eine Erhöhung um 3,0% ab April 2025 (mindestens 110 Euro) und weitere 2,8% ab Mai 2026 – identisch mit dem allgemeinen TVöD VKA-Abschluss.</p>
        </div>
      </div>
    </Layout>
  );
}
