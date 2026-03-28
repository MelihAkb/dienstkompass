import Layout from "@/components/Layout";
import Link from "next/link";

const TABELLEN = {
  zukuenftig: {
    id: "2026",
    label: "ZUKÜNFTIG",
    labelColor: "bg-amber-50 text-amber-700",
    titel: "TVöD Bund 2026",
    gueltigAb: "01.03.2026",
    gueltigBis: null,
    erhoehung: "+2,8%",
    mindest: null,
    details: "Zweite Stufe des Tarifabschlusses 2025. Tabellenwirksame Erhöhung um 2,8 Prozent für alle Beschäftigten im Bundesdienst.",
    abschluss: "Tarifabschluss 2025",
  },
  aktuell: {
    id: "2025",
    label: "AKTUELL",
    labelColor: "bg-green-50 text-green-700",
    titel: "TVöD Bund 2025",
    gueltigAb: "01.04.2025",
    gueltigBis: "28.02.2026",
    erhoehung: "+3,0%",
    mindest: "mind. +110 €",
    details: "Lineare Erhöhung um 3,0%, mindestens jedoch 110 Euro monatlich. Gilt für alle Beschäftigten des Bundes nach TVöD Bund.",
    abschluss: "Tarifabschluss 2025",
  },
};

const ARCHIV = [
  { id: "2024", titel: "TVöD Bund 2024", gueltigAb: "01.03.2024", gueltigBis: "31.03.2025", erhoehung: "+5,5%", mindest: "mind. +340 €", abschluss: "Tarifabschluss 2023" },
  { id: "2023", titel: "TVöD Bund 2023", gueltigAb: "01.04.2023", gueltigBis: "29.02.2024", erhoehung: "+5,5%", mindest: "mind. +340 €", abschluss: "Tarifabschluss 2023" },
  { id: "2022", titel: "TVöD Bund 2022", gueltigAb: "01.10.2022", gueltigBis: "31.03.2023", erhoehung: "+2,8%", mindest: null, abschluss: "Tarifabschluss 2022" },
];

const TARIFRUNDEN = [
  {
    id: "2025", titel: "Tarifrunde TVöD Bund 2025", zeitraum: "Januar – April 2025",
    status: "abgeschlossen", statusColor: "bg-green-50 text-green-700",
    ergebnis: "+3,0% ab April 2025, +2,8% ab März 2026",
    beschreibung: "Tarifeinigung für die rund 150.000 Beschäftigten des Bundes. Ver.di und Bundesinnenministerium einigten sich auf eine zweistufige Erhöhung.",
    href: "/tvoed/bund/tarifrunden/2025",
  },
  {
    id: "2023", titel: "Tarifrunde TVöD Bund 2023", zeitraum: "Januar – April 2023",
    status: "abgeschlossen", statusColor: "bg-green-50 text-green-700",
    ergebnis: "+5,5% ab Juni 2023, mind. +340 €",
    beschreibung: "Kraftvolles Tarifergebnis für Bundesbeschäftigte nach mehreren Warnstreikrunden und Schlichtung.",
    href: "/tvoed/bund/tarifrunden/2023",
  },
];

const FAQ = [
  {
    frage: "Was ist der Unterschied zwischen TVöD Bund und TVöD VKA?",
    antwort: "Der TVöD Bund gilt für Beschäftigte in Bundesbehörden und Bundeseinrichtungen, während der TVöD VKA für kommunale Arbeitgeber (Städte, Gemeinden, Kreise) gilt. Beide Tarifverträge haben eine ähnliche Struktur mit 15 Entgeltgruppen, unterscheiden sich aber in den konkreten Entgelthöhen und Tarifpartnern. Beim Bund verhandelt das Bundesinnenministerium für die öffentlichen Arbeitgeber."
  },
  {
    frage: "Welche Behörden und Einrichtungen fallen unter den TVöD Bund?",
    antwort: "Zum TVöD Bund gehören alle Bundesbehörden wie das Bundesamt für Migration und Flüchtlinge (BAMF), Bundeszollverwaltung, Bundesanstalt für Arbeit, Bundeswehrverwaltung, Bundespolizei (Verwaltungspersonal) sowie zahlreiche nachgeordnete Bundesbehörden. Insgesamt sind rund 150.000 Beschäftigte tarifgebunden."
  },
  {
    frage: "Wie lange dauert der Stufenaufstieg im TVöD Bund?",
    antwort: "Im TVöD Bund erfolgt der Stufenaufstieg nach festgelegten Zeiten: Von Stufe 1 nach 2 in einem Jahr, von 2 nach 3 in 3 Jahren, von 3 nach 4 in 4 Jahren, von 4 nach 5 in 4 Jahren und von 5 nach 6 in 5 Jahren. Der vollständige Aufstieg von Stufe 1 bis Stufe 6 dauert also 19 Jahre. Bei überdurchschnittlicher Leistung kann der Aufstieg beschleunigt werden."
  },
  {
    frage: "Was ist die Jahressonderzahlung im TVöD Bund?",
    antwort: "Beschäftigte im TVöD Bund erhalten eine jährliche Sonderzahlung im November. Die Höhe richtet sich nach der Entgeltgruppe: In den Entgeltgruppen E 1 bis E 8 beträgt sie 90% eines Monatsentgelts, in E 9 bis E 12 sind es 80%, und in E 13 bis E 15 werden 60% ausgezahlt. Die Sonderzahlung wird auch als 'Weihnachtsgeld' bezeichnet."
  },
  {
    frage: "Was ist der Unterschied zwischen E 9a und E 9b im TVöD?",
    antwort: "E 9a und E 9b sind zwei Untergruppen der Entgeltgruppe 9, die 2017 im Zuge der neuen Entgeltordnung eingeführt wurden. E 9a gilt für Beschäftigte mit abgeschlossener Berufsausbildung und entsprechender Berufserfahrung, E 9b für Beschäftigte mit Bachelorabschluss oder vergleichbarem Hochschulabschluss. E 9b ist entsprechend höher besoldet."
  },
  {
    frage: "Gibt es vermögenswirksame Leistungen im TVöD Bund?",
    antwort: "Ja, Beschäftigte im TVöD Bund erhalten vermögenswirksame Leistungen (VWL) in Höhe von 6,65 Euro monatlich. Diese können für Bausparverträge, Aktienfonds oder andere zugelassene Anlageformen verwendet werden. Der Betrag ist im Vergleich zum privaten Sektor eher gering, wird aber vom Arbeitgeber zusätzlich zum Tabellenentgelt gezahlt."
  },
  {
    frage: "Kann ich bei einer Einstellung direkt in eine höhere Stufe eingruppiert werden?",
    antwort: "Ja, das ist möglich. Bei Neueinstellungen können bereits geleistete Vordienstzeiten bei öffentlichen Arbeitgebern angerechnet werden. Auch einschlägige Berufserfahrung aus dem privaten Sektor kann für die Stufenzuordnung berücksichtigt werden. Es liegt im Ermessen des Arbeitgebers, in welche Stufe eingestellt wird – eine Einstufung in Stufe 1 ist aber bei erfahrenen Bewerbern selten."
  },
];

type TabelleType = {
  id: string;
  label: string;
  labelColor: string;
  titel: string;
  gueltigAb: string;
  gueltigBis: string | null;
  erhoehung: string;
  mindest: string | null;
  details: string;
  abschluss: string;
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

export default function TVoeDPage() {
  const basePath = "/tvoed/bund";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ.map(f => ({
      "@type": "Question",
      "name": f.frage,
      "acceptedAnswer": { "@type": "Answer", "text": f.antwort }
    }))
  };

  return (
    <Layout activePath="/tvoed/bund">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="text-sm text-gray-400 mb-6 flex items-center gap-1 flex-wrap">
        <a href="/" className="hover:text-gray-600">Startseite</a>
        <span>→</span>
        <a href="/tvoed" className="hover:text-gray-600">TVöD</a>
        <span>→</span>
        <span className="text-gray-900">TVöD Bund</span>
      </div>
      <h1 className="text-3xl font-medium text-gray-900 mb-2">TVöD Bund – Entgelttabellen & Rechner</h1>
      <p className="text-gray-500 mb-10 max-w-2xl">Alle Entgelttabellen für Beschäftigte des Bundes (TVöD Bund) – aktuell, zukünftig und Archiv. Für Bundesbehörden und Bundeseinrichtungen.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <TarifCard tabelle={TABELLEN.aktuell} basePath={basePath} />
        <TarifCard tabelle={TABELLEN.zukuenftig} basePath={basePath} />
      </div>

      <div className="mb-12">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Archiv</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">Tarifrunden TVöD Bund</h2>
        </div>
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
        <h2 className="text-xl font-medium text-gray-900 mb-6">Häufige Fragen zum TVöD Bund</h2>
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
        <h2 className="text-xl font-medium text-gray-900 mb-4">TVöD Bund – Tarifvertrag für Bundesbeschäftigte</h2>
        <div className="text-gray-500 space-y-4 text-sm leading-relaxed max-w-3xl">
          <p>Der Tarifvertrag für den öffentlichen Dienst des Bundes (TVöD Bund) regelt die Arbeitsbedingungen und Entgelte für rund 150.000 Beschäftigte in Bundesbehörden und Bundeseinrichtungen. Tarifparteien sind auf Arbeitgeberseite das Bundesinnenministerium und auf Gewerkschaftsseite ver.di sowie der dbb Beamtenbund und Tarifunion.</p>
          <p>Die Entgelttabelle des TVöD Bund umfasst 15 Entgeltgruppen (E 1 bis E 15) mit jeweils sechs Stufen. Die Entgeltgruppe richtet sich nach den Tätigkeitsmerkmalen der Entgeltordnung zum TVöD. Anders als der TVöD VKA hat der TVöD Bund eine eigene Entgeltordnung, die auf die spezifischen Tätigkeiten in Bundesbehörden zugeschnitten ist.</p>
          <p>Neben dem Tabellenentgelt erhalten Bundesbeschäftigte eine jährliche Sonderzahlung im November sowie vermögenswirksame Leistungen. Die Zusatzversorgung erfolgt über die Versorgungsanstalt des Bundes und der Länder (VBL), die eine betriebliche Altersvorsorge sichert.</p>
          <p>Für Bundesbeamte – also verbeamtete Beschäftigte des Bundes – gilt nicht der TVöD, sondern das Bundesbesoldungsgesetz (BBesG). Die A-Besoldung für Bundesbeamte findet sich unter <a href="/beamte/bund" className="text-blue-600 hover:underline">Bundesbeamte Besoldungsrechner</a>.</p>
        </div>
      </div>
    </Layout>
  );
}
