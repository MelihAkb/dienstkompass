import Layout from "@/components/Layout";
import Link from "next/link";

const TABELLEN = {
  zukuenftig: {
    id: "2026",
    label: "ZUKÜNFTIG",
    labelColor: "bg-amber-50 text-amber-700",
    titel: "TV-L 2026",
    gueltigAb: "01.04.2026",
    gueltigBis: null,
    erhoehung: "+2,8%",
    mindest: null,
    details: "Zweite Stufe des Tarifabschlusses 2025/2026. Tabellenwirksame Erhöhung um 2,8 Prozent für alle Beschäftigten der Länder.",
    abschluss: "Tarifeinigung Februar 2026",
    basePath: "/tv-l/allgemein",
  },
  aktuell: {
    id: "2025",
    label: "AKTUELL",
    labelColor: "bg-green-50 text-green-700",
    titel: "TV-L 2025",
    gueltigAb: "01.01.2025",
    gueltigBis: "31.03.2026",
    erhoehung: "+2,8%",
    mindest: null,
    details: "Tabellenwirksame Erhöhung um 2,8 Prozent. Gilt für alle Beschäftigten der Länder nach TV-L.",
    abschluss: "Tarifeinigung 2024",
    basePath: "/tv-l/allgemein",
  },
};

const ARCHIV = [
  { id: "2024", titel: "TV-L 2024", gueltigAb: "01.01.2024", gueltigBis: "31.12.2024", erhoehung: "+5,5%", mindest: "mind. +340 €", abschluss: "Tarifabschluss 2023" },
  { id: "2023", titel: "TV-L 2023", gueltigAb: "01.11.2023", gueltigBis: "31.12.2023", erhoehung: "+5,5%", mindest: "mind. +340 €", abschluss: "Tarifabschluss 2023" },
  { id: "2022", titel: "TV-L 2022", gueltigAb: "01.12.2022", gueltigBis: "31.10.2023", erhoehung: "+2,8%", mindest: null, abschluss: "Tarifabschluss 2021" },
];

const TARIFRUNDEN = [
  {
    id: "2025", titel: "Tarifrunde TV-L 2025/2026", zeitraum: "November 2025 – Februar 2026",
    status: "abgeschlossen", statusColor: "bg-green-50 text-green-700",
    ergebnis: "+2,8% ab April 2026",
    beschreibung: "Tarifeinigung für die rund 1,1 Millionen Beschäftigten der Länder. TdL und ver.di einigten sich auf Gehaltserhöhung.",
    href: "/tv-l/tarifrunden/2025",
  },
  {
    id: "2023", titel: "Tarifrunde TV-L 2023", zeitraum: "Oktober – November 2023",
    status: "abgeschlossen", statusColor: "bg-green-50 text-green-700",
    ergebnis: "+5,5% ab November 2023, mind. +340 €",
    beschreibung: "Nach bundesweiten Warnstreiks einigten sich die Tarifparteien auf das höchste TV-L Ergebnis seit Jahren.",
    href: "/tv-l/tarifrunden/2023",
  },
  {
    id: "2021", titel: "Tarifrunde TV-L 2021", zeitraum: "Oktober – November 2021",
    status: "abgeschlossen", statusColor: "bg-green-50 text-green-700",
    ergebnis: "+1,4% ab Dezember 2021, +1,8% ab Januar 2023",
    beschreibung: "Zweijährige Laufzeit mit gestaffelten Erhöhungen für Länderbeschäftigte.",
    href: "/tv-l/tarifrunden/2021",
  },
];

const FAQ = [
  {
    frage: "Was ist der TV-L?",
    antwort: "Der Tarifvertrag für den öffentlichen Dienst der Länder (TV-L) regelt die Arbeitsbedingungen von rund 1,1 Millionen Beschäftigten in den meisten deutschen Bundesländern (außer Hessen). Er umfasst 15 Entgeltgruppen (E 1 bis E 15) mit jeweils sechs Stufen.",
  },
  {
    frage: "Welche Bundesländer gelten für den TV-L?",
    antwort: "Der TV-L gilt in Baden-Württemberg, Bayern, Berlin, Brandenburg, Bremen, Hamburg, Mecklenburg-Vorpommern, Niedersachsen, Nordrhein-Westfalen, Rheinland-Pfalz, Saarland, Sachsen, Sachsen-Anhalt, Schleswig-Holstein und Thüringen. Hessen hat einen eigenen Tarifvertrag (TV-H).",
  },
  {
    frage: "Was ist der Unterschied zwischen TV-L und TVöD?",
    antwort: "Beide Tarifverträge haben eine ähnliche Grundstruktur, aber der TV-L gilt für Länderbeschäftigte, der TVöD für Bundes- und Kommunalbeschäftigte. Die Entgelttabellen unterscheiden sich leicht, TV-L hat meist etwas niedrigere Werte als TVöD Bund.",
  },
  {
    frage: "Wie viel verdiene ich als E 9a Stufe 3 nach TV-L?",
    antwort: "Nach der aktuellen TV-L 2025 Tabelle (gültig ab 01.01.2025) beträgt das Bruttoeinkommen in E 9a Stufe 3 rund 3.408 Euro monatlich. Netto bleiben je nach Steuerklasse und Bundesland etwa 2.300-2.500 Euro.",
  },
  {
    frage: "Wann gibt es beim TV-L eine Stufensteigerung?",
    antwort: "Die Stufenlaufzeiten im TV-L sind: Stufe 1→2: 1 Jahr, Stufe 2→3: 2 Jahre, Stufe 3→4: 3 Jahre, Stufe 4→5: 4 Jahre, Stufe 5→6: 5 Jahre. Die Zeiten beginnen mit dem ersten Tag der Beschäftigung in der Entgeltgruppe.",
  },
  {
    frage: "Gibt es beim TV-L eine Jahressonderzahlung?",
    antwort: "Ja, TV-L Beschäftigte erhalten eine Jahressonderzahlung (Weihnachtsgeld). Die Höhe beträgt je nach Entgeltgruppe zwischen 60% und 95% eines Monatsgehalts und wird im November ausgezahlt.",
  },
  {
    frage: "Was gilt für Lehrkräfte beim TV-L?",
    antwort: "Lehrkräfte an öffentlichen Schulen werden nach dem TV-L eingruppiert, sofern sie keine verbeamteten Lehrkräfte sind. Die Eingruppierung erfolgt nach der Entgeltordnung für Lehrkräfte (TV EntgO-L).",
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
  basePath: string;
};

function TarifCard({ tabelle }: { tabelle: TabelleType }) {
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
        <Link href={`${tabelle.basePath}/${tabelle.id}`} className="flex-1 text-center text-sm border border-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors">Tabelle anzeigen</Link>
        <Link href={`${tabelle.basePath}/${tabelle.id}/rechner`} className="flex-1 text-center text-sm bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">Zum Rechner</Link>
      </div>
    </div>
  );
}

export default function TVLPage() {
  const basePath = "/tv-l/allgemein";
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
    <Layout activePath="/tv-l/allgemein">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="text-sm text-gray-400 mb-6 flex items-center gap-1 flex-wrap">
        <a href="/" className="hover:text-gray-600">Startseite</a>
        <span>→</span>
        <span className="text-gray-900">TV-L allgemein</span>
      </div>
      <h1 className="text-3xl font-medium text-gray-900 mb-2">TV-L – Entgelttabellen & Rechner</h1>
      <p className="text-gray-500 mb-10 max-w-2xl">Alle Entgelttabellen des Tarifvertrags für den öffentlichen Dienst der Länder (TV-L) – aktuell, zukünftig und Archiv.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <TarifCard tabelle={TABELLEN.aktuell} />
        <TarifCard tabelle={TABELLEN.zukuenftig} />
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
          <h2 className="text-lg font-medium text-gray-900">Tarifrunden TV-L</h2>
          <Link href="/tv-l/tarifrunden" className="text-sm text-blue-600 hover:text-blue-700">Alle Tarifrunden →</Link>
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
        <h2 className="text-xl font-medium text-gray-900 mb-6">Häufige Fragen zum TV-L</h2>
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
        <h2 className="text-xl font-medium text-gray-900 mb-4">TV-L – Tarifvertrag für den öffentlichen Dienst der Länder</h2>
        <div className="text-gray-500 space-y-4 text-sm leading-relaxed max-w-3xl">
          <p>Der Tarifvertrag für den öffentlichen Dienst der Länder (TV-L) regelt die Arbeitsbedingungen und Entgelte für rund 1,1 Millionen Beschäftigte in 15 der 16 deutschen Bundesländer. Einzige Ausnahme ist Hessen, das einen eigenen Tarifvertrag (TV-H) abgeschlossen hat. Tarifpartner sind auf Arbeitgeberseite die Tarifgemeinschaft deutscher Länder (TdL) und auf Gewerkschaftsseite ver.di sowie der dbb Beamtenbund und Tarifunion.</p>
          <p>Die Entgelttabelle des TV-L umfasst 15 Entgeltgruppen (E 1 bis E 15) mit jeweils sechs Stufen. Die Eingruppierung in eine Entgeltgruppe richtet sich nach den Tätigkeitsmerkmalen der Entgeltordnung zum TV-L (TV EntgO-L). Für Lehrkräfte an öffentlichen Schulen gilt die besondere Entgeltordnung TV EntgO-L, sofern sie nicht verbeamtet sind.</p>
          <p>Der Stufenaufstieg im TV-L folgt festen Laufzeiten: Von Stufe 1 auf Stufe 2 dauert es ein Jahr, von Stufe 2 auf 3 zwei Jahre, von Stufe 3 auf 4 drei Jahre, von Stufe 4 auf 5 vier Jahre und von Stufe 5 auf 6 fünf Jahre. Der vollständige Durchlauf von Stufe 1 bis Stufe 6 erstreckt sich damit über insgesamt 15 Jahre. Bei besonders herausragender Leistung kann der Stufenaufstieg beschleunigt werden.</p>
          <p>Neben dem monatlichen Tabellenentgelt erhalten TV-L Beschäftigte eine jährliche Sonderzahlung, die im November ausgezahlt wird. Die Höhe der Jahressonderzahlung (Weihnachtsgeld) richtet sich nach der Entgeltgruppe und beträgt zwischen 60 und 95 Prozent eines Monatsentgelts. Zusätzlich zahlen die Länder vermögenswirksame Leistungen sowie Beiträge zur betrieblichen Altersvorsorge über die Versorgungsanstalt des Bundes und der Länder (VBL).</p>
          <p>Der TV-L gilt in Baden-Württemberg, Bayern, Berlin, Brandenburg, Bremen, Hamburg, Mecklenburg-Vorpommern, Niedersachsen, Nordrhein-Westfalen, Rheinland-Pfalz, Saarland, Sachsen, Sachsen-Anhalt, Schleswig-Holstein und Thüringen. Erfasst sind Beschäftigte in Landesbehörden, staatlichen Hochschulen, Unikliniken, Landesstraßenbauverwaltungen und weiteren Einrichtungen der Länder.</p>
          <p>Die Tarifrunden im TV-L finden in der Regel alle zwei bis drei Jahre statt. Verhandlungsführer auf Arbeitgeberseite ist die TdL, die alle tarifgebundenen Bundesländer außer Hessen vertritt. Bayern und Berlin nehmen als TdL-Mitglieder an den Verhandlungen teil, obwohl Bayern bereits früher eigenständige Regelungen hatte. Ver.di als größte Einzelgewerkschaft und der dbb führen gemeinsam die Verhandlungen für die Beschäftigten.</p>
          <p>Für verbeamtete Landesbeamte gilt nicht der TV-L, sondern das jeweilige Landesbesoldungsgesetz. Die Beamtenbesoldung wird in der Regel an die Tarifergebnisse des TV-L angelehnt, jedoch durch gesetzliche Beschlüsse der jeweiligen Landtage eigenständig festgesetzt.</p>
        </div>
      </div>
    </Layout>
  );
}
