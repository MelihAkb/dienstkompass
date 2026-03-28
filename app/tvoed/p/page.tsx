import Layout from "@/components/Layout";
import Link from "next/link";

const TABELLEN = {
  zukuenftig: {
    id: "2026", label: "ZUKÜNFTIG", labelColor: "bg-amber-50 text-amber-700",
    titel: "TVöD-P 2026", gueltigAb: "01.05.2026", gueltigBis: null,
    erhoehung: "+2,8%", mindest: null,
    details: "Zweite Stufe des Tarifabschlusses April 2025. Erhöhung um 2,8% für alle Pflegekräfte in kommunalen Krankenhäusern und Pflegeeinrichtungen.",
    abschluss: "Tarifabschluss April 2025",
  },
  aktuell: {
    id: "2025", label: "AKTUELL", labelColor: "bg-green-50 text-green-700",
    titel: "TVöD-P 2025", gueltigAb: "01.04.2025", gueltigBis: "30.04.2026",
    erhoehung: "+3,0%", mindest: "mind. +110 €",
    details: "Lineare Erhöhung um 3,0%, mindestens 110 Euro. Gilt für Pflegekräfte, Pflegehelfer und medizinisches Fachpersonal in kommunalen Krankenhäusern.",
    abschluss: "Tarifabschluss April 2025",
  },
};

const ARCHIV = [
  { id: "2024", titel: "TVöD-P 2024", gueltigAb: "01.03.2024", gueltigBis: "31.03.2025", erhoehung: "+5,5%", mindest: "mind. +340 €", abschluss: "Tarifabschluss April 2023" },
  { id: "2023", titel: "TVöD-P 2023", gueltigAb: "01.06.2023", gueltigBis: "29.02.2024", erhoehung: "+5,5%", mindest: "mind. +340 €", abschluss: "Tarifabschluss April 2023" },
];

const FAQ = [
  { frage: "Für wen gilt der TVöD-P Pflege?", antwort: "Der TVöD-P gilt für Pflegekräfte in kommunalen Krankenhäusern und kommunalen Pflegeeinrichtungen. Die Entgeltgruppen P 5 bis P 16 wurden speziell für Pflegeberufe eingeführt und ersetzen die allgemeinen E-Gruppen. Er gilt nicht für Pflegeeinrichtungen in kirchlicher oder privater Trägerschaft." },
  { frage: "Welche Entgeltgruppe gilt für Pflegefachkräfte?", antwort: "Pflegefachkräfte (Gesundheits- und Krankenpfleger, Altenpfleger) werden in P 7 eingruppiert und verdienen 2025 in Stufe 1 rund 3.070 Euro brutto. Mit Zusatzqualifikation (z.B. Intensivpflege, OP) ist eine Eingruppierung in P 8 oder P 9 möglich. Stationsleitungen werden in P 13 oder höher eingruppiert." },
  { frage: "Was verdient eine Pflegefachkraft in P 7 netto?", antwort: "Eine Pflegefachkraft in P 7 Stufe 3 verdient 2025 rund 3.371 Euro brutto. Nach Abzug von Steuern (Steuerklasse 1) und Sozialabgaben bleiben je nach Bundesland etwa 2.200 bis 2.400 Euro netto. Zuschläge für Nacht-, Wochenend- und Feiertagsarbeit kommen hinzu und können das Netto erheblich steigern." },
  { frage: "Gibt es besondere Zulagen im TVöD-P?", antwort: "Ja, Pflegekräfte erhalten verschiedene Zulagen: eine Pflegezulage, Schicht- und Nachtarbeitszuschläge sowie Zulagen für besondere Belastungen. Pflegekräfte in Intensivstationen erhalten eine monatliche Intensivzulage. Außerdem gibt es eine spezielle Pflegezulage für Beschäftigte in der Langzeitpflege." },
  { frage: "Wie unterscheidet sich der TVöD-P vom TVöD VKA?", antwort: "Der TVöD-P ist ein Annex-Tarifvertrag zum TVöD VKA mit eigenen Entgeltgruppen (P 5–P 16) und einer spezifischen Entgeltordnung für Pflegeberufe. Die P-Gruppen wurden 2018 eingeführt und ersetzen die allgemeinen E-Gruppen für Pflegekräfte. Die allgemeinen Regelungen des TVöD VKA (Sonderzahlung, Stufenaufstieg, Zusatzversorgung) gelten weiterhin." },
  { frage: "Was ist die Pflegezulage im TVöD?", antwort: "Die monatliche Pflegezulage beträgt seit 2018 für alle Pflegekräfte im TVöD-P 100 Euro und ist nicht tabellenwirksam. Sie wird zusätzlich zum Tabellenentgelt gezahlt und erhöht sich nicht bei Tariferhöhungen, sofern nichts anderes vereinbart wird." },
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

export default function TVoeDPPage() {
  const basePath = "/tvoed/p";
  const jsonLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": FAQ.map(f => ({ "@type": "Question", "name": f.frage, "acceptedAnswer": { "@type": "Answer", "text": f.antwort } }))
  };
  return (
    <Layout activePath="/tvoed/p">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="text-sm text-gray-400 mb-6 flex items-center gap-1 flex-wrap">
        <a href="/" className="hover:text-gray-600">Startseite</a><span>→</span>
        <a href="/tvoed" className="hover:text-gray-600">TVöD</a><span>→</span>
        <span className="text-gray-900">TVöD-P Pflege</span>
      </div>
      <h1 className="text-3xl font-medium text-gray-900 mb-2">TVöD-P Pflege – Entgelttabellen & Rechner</h1>
      <p className="text-gray-500 mb-10 max-w-2xl">Alle Entgelttabellen für Pflegekräfte in kommunalen Krankenhäusern und Pflegeeinrichtungen (TVöD-P) – aktuell, zukünftig und Archiv.</p>
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
        <h2 className="text-xl font-medium text-gray-900 mb-6">Häufige Fragen zum TVöD-P</h2>
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
        <h2 className="text-xl font-medium text-gray-900 mb-4">TVöD-P – Pflegetarifvertrag im kommunalen Bereich</h2>
        <div className="text-gray-500 space-y-4 text-sm leading-relaxed max-w-3xl">
          <p>Der TVöD-P ist der Pflegetarifvertrag im Bereich des kommunalen öffentlichen Dienstes und gilt für Pflegekräfte in kommunalen Krankenhäusern, Altenpflegeeinrichtungen und Pflegestationen. Er wurde 2018 eingeführt und brachte eigene Entgeltgruppen (P 5 bis P 16) für Pflegeberufe.</p>
          <p>Die Eingruppierung in die P-Gruppen richtet sich nach Qualifikation und Tätigkeit: Pflegehilfskräfte beginnen in P 5 oder P 6, Pflegefachkräfte mit dreijähriger Ausbildung in P 7, und spezialisierte Fachkräfte (Intensiv, OP, Anästhesie) werden in P 8 bis P 9 eingruppiert. Stationsleitungen finden sich in P 13 bis P 16.</p>
          <p>Neben dem Tabellenentgelt erhalten Pflegekräfte im TVöD-P verschiedene Zulagen: eine monatliche Pflegezulage, Schicht- und Nachtarbeitszuschläge sowie eine Intensivzulage für besonders belastende Tätigkeitsbereiche. Die Jahressonderzahlung (Weihnachtsgeld) und die Zusatzversorgung über die VKA-Zusatzversorgungskasse gelten ebenfalls.</p>
        </div>
      </div>
    </Layout>
  );
}
