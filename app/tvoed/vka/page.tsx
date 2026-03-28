import Layout from "@/components/Layout";
import Link from "next/link";

const TABELLEN = {
  zukuenftig: {
    id: "2026",
    label: "ZUKÜNFTIG",
    labelColor: "bg-amber-50 text-amber-700",
    titel: "TVöD VKA 2026",
    gueltigAb: "01.05.2026",
    gueltigBis: null,
    erhoehung: "+2,8%",
    mindest: null,
    details: "2. Stufe des Tarifabschlusses April 2025. Tabellenwirksame Erhöhung um 2,8 Prozent.",
    abschluss: "Tarifabschluss April 2025",
  },
  aktuell: {
    id: "2025",
    label: "AKTUELL",
    labelColor: "bg-green-50 text-green-700",
    titel: "TVöD VKA 2025",
    gueltigAb: "01.04.2025",
    gueltigBis: "30.04.2026",
    erhoehung: "+3,0%",
    mindest: "mind. +110 €",
    details: "Lineare Erhöhung um 3,0%, mindestens jedoch 110 Euro monatlich. 1. Stufe des Tarifabschlusses April 2025.",
    abschluss: "Tarifabschluss April 2025",
  },
};

const ARCHIV = [
  {
    id: "2024",
    titel: "TVöD VKA 2024",
    gueltigAb: "01.03.2024",
    gueltigBis: "31.03.2025",
    erhoehung: "+5,5%",
    mindest: "mind. +340 €",
    abschluss: "Tarifabschluss April 2023",
  },
  {
    id: "2023",
    titel: "TVöD VKA 2023",
    gueltigAb: "01.04.2023",
    gueltigBis: "29.02.2024",
    erhoehung: "+5,5%",
    mindest: "mind. +340 €",
    abschluss: "Tarifabschluss April 2023",
  },
  {
    id: "2022",
    titel: "TVöD VKA 2022",
    gueltigAb: "01.10.2022",
    gueltigBis: "31.03.2023",
    erhoehung: "+2,8%",
    mindest: null,
    abschluss: "Tarifabschluss Oktober 2022",
  },
  {
    id: "2021",
    titel: "TVöD VKA 2021",
    gueltigAb: "01.04.2021",
    gueltigBis: "30.09.2022",
    erhoehung: "+1,4%",
    mindest: null,
    abschluss: "Tarifabschluss Oktober 2020",
  },
];

const TARIFRUNDEN = [
  {
    id: "2025",
    titel: "Tarifrunde TVöD VKA 2025",
    zeitraum: "Januar – April 2025",
    status: "abgeschlossen",
    statusColor: "bg-green-50 text-green-700",
    ergebnis: "+3,0% ab April 2025, +2,8% ab Mai 2026",
    beschreibung: "Tarifeinigung nach Schlichtungsempfehlung. Ver.di und VKA einigten sich auf eine zweistufige Erhöhung für 2,6 Millionen Beschäftigte.",
    href: "/tvoed/vka/tarifrunden/2025",
  },
  {
    id: "2023",
    titel: "Tarifrunde TVöD VKA 2023",
    zeitraum: "Januar – April 2023",
    status: "abgeschlossen",
    statusColor: "bg-green-50 text-green-700",
    ergebnis: "+5,5% ab Juni 2023, mind. +340 €",
    beschreibung: "Nach mehreren Warnstreiks und einer Schlichtung einigten sich die Tarifparteien auf das höchste Tarifergebnis seit Jahren.",
    href: "/tvoed/vka/tarifrunden/2023",
  },
  {
    id: "2020",
    titel: "Tarifrunde TVöD VKA 2020",
    zeitraum: "September – Oktober 2020",
    status: "abgeschlossen",
    statusColor: "bg-green-50 text-green-700",
    ergebnis: "+1,4% ab April 2021, +1,8% ab April 2022",
    beschreibung: "Tarifrunde unter Corona-Bedingungen. Mehrjährige Laufzeit mit moderaten Erhöhungen und einer Einmalzahlung von 600 Euro.",
    href: "/tvoed/vka/tarifrunden/2020",
  },
  {
    id: "2018",
    titel: "Tarifrunde TVöD VKA 2018",
    zeitraum: "Januar – April 2018",
    status: "abgeschlossen",
    statusColor: "bg-green-50 text-green-700",
    ergebnis: "+3,19% ab März 2018",
    beschreibung: "Dreijährige Laufzeit mit gestaffelten Erhöhungen. Besondere Verbesserungen für den Sozial- und Erziehungsdienst.",
    href: "/tvoed/vka/tarifrunden/2018",
  },
];

function TarifCard({ tabelle }: { tabelle: typeof TABELLEN.aktuell | typeof TABELLEN.zukuenftig }) {
  return (
    <div className="border border-gray-100 rounded-xl p-6 flex flex-col gap-4 hover:border-gray-200 hover:shadow-sm transition-all h-full">
      <div className="flex items-start justify-between gap-3">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-md ${tabelle.labelColor}`}>
          {tabelle.label}
        </span>
        <div className="text-right">
          <div className="text-2xl font-medium text-green-600">{tabelle.erhoehung}</div>
          {tabelle.mindest && <div className="text-xs text-gray-400">{tabelle.mindest}</div>}
        </div>
      </div>
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-1">{tabelle.titel}</h2>
        <div className="text-sm text-gray-500">
          Gültig ab {tabelle.gueltigAb}
          {tabelle.gueltigBis && ` bis ${tabelle.gueltigBis}`}
        </div>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed flex-1">{tabelle.details}</p>
      <div className="text-xs text-gray-400 border-t border-gray-50 pt-3">{tabelle.abschluss}</div>
      <div className="flex gap-2">
        <Link href={`/tvoed/vka/${tabelle.id}`} className="flex-1 text-center text-sm border border-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors">
          Tabelle anzeigen
        </Link>
        <Link href={`/tvoed/vka/${tabelle.id}/rechner`} className="flex-1 text-center text-sm bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Zum Rechner
        </Link>
      </div>
    </div>
  );
}

export default function TVoeDVKAPage() {
  return (
    <Layout activePath="/tvoed/vka">
      <div className="text-sm text-gray-400 mb-6 flex items-center gap-1">
        <a href="/" className="hover:text-gray-600">Startseite</a>
        <span>→</span>
        <a href="/tvoed" className="hover:text-gray-600">TVöD</a>
        <span>→</span>
        <span className="text-gray-900">TVöD VKA (Kommunen)</span>
      </div>

      <h1 className="text-3xl font-medium text-gray-900 mb-2">TVöD VKA – Entgelttabellen & Rechner</h1>
      <p className="text-gray-500 mb-10 max-w-2xl">
        Alle Entgelttabellen des Tarifvertrags für den öffentlichen Dienst der Kommunen (TVöD VKA) – aktuell, zukünftig und Archiv.
      </p>

      {/* Aktuell + Zukünftig */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <TarifCard tabelle={TABELLEN.aktuell} />
        <TarifCard tabelle={TABELLEN.zukuenftig} />
      </div>

      {/* Archiv */}
      <div className="mb-12">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Archiv</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
                <Link href={`/tvoed/vka/${a.id}`} className="flex-1 text-center text-xs border border-gray-200 text-gray-600 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                  Tabelle
                </Link>
                <Link href={`/tvoed/vka/${a.id}/rechner`} className="flex-1 text-center text-xs bg-gray-900 text-white py-1.5 rounded-lg hover:bg-gray-700 transition-colors">
                  Rechner
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tarifrunden */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">Tarifrunden TVöD VKA</h2>
          <Link href="/tvoed/vka/tarifrunden" className="text-sm text-blue-600 hover:text-blue-700">
            Alle Tarifrunden →
          </Link>
        </div>
        <div className="space-y-3">
          {TARIFRUNDEN.map(tr => (
            <Link
              key={tr.id}
              href={tr.href}
              className="flex items-start justify-between gap-4 border border-gray-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-md ${tr.statusColor}`}>
                    {tr.status === "abgeschlossen" ? "Abgeschlossen" : "Laufend"}
                  </span>
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

      {/* SEO Text */}
      <div className="border-t border-gray-100 pt-10">
        <h2 className="text-xl font-medium text-gray-900 mb-4">TVöD VKA – Tarifvertrag für den öffentlichen Dienst der Kommunen</h2>
        <div className="text-gray-500 space-y-4 text-sm leading-relaxed max-w-3xl">
          <p>
            Der Tarifvertrag für den öffentlichen Dienst der kommunalen Arbeitgeberverbände (TVöD VKA) regelt die Arbeitsbedingungen und Entgelte für mehr als 2,5 Millionen Beschäftigte in Städten, Gemeinden und Landkreisen. Er gehört damit zu den größten Flächentarifverträgen in Deutschland.
          </p>
          <p>
            Die Entgelttabelle des TVöD VKA umfasst 15 Entgeltgruppen (E 1 bis E 15) mit jeweils sechs Stufen. Die Eingruppierung richtet sich nach der Tätigkeit und den entsprechenden Tätigkeitsmerkmalen der Entgeltordnung. Der Stufenaufstieg erfolgt nach festgelegten Zeiten und kann bei besonderer Leistung beschleunigt werden.
          </p>
          <p>
            Neben dem Tabellenentgelt erhalten Beschäftigte im TVöD VKA eine jährliche Sonderzahlung (Weihnachtsgeld), vermögenswirksame Leistungen sowie Zulagen für Schichtarbeit, Nachtarbeit oder Bereitschaftsdienste. Die Zusatzversorgung (ZVK) sichert zudem die betriebliche Altersvorsorge.
          </p>
          <p>
            Die letzte Tarifrunde für den TVöD VKA fand im Frühjahr 2025 statt. Die Tarifvertragsparteien – ver.di und die VKA – einigten sich auf eine Erhöhung um 3,0 Prozent ab April 2025, mindestens 110 Euro, sowie eine zweite Stufe von 2,8 Prozent ab Mai 2026.
          </p>
        </div>
      </div>
    </Layout>
  );
}
