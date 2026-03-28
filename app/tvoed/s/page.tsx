import Layout from "@/components/Layout";
import Link from "next/link";

const TABELLEN = {
  zukuenftig: {
    id: "2026", label: "ZUKÜNFTIG", labelColor: "bg-amber-50 text-amber-700",
    titel: "TVöD-S 2026", gueltigAb: "01.05.2026", gueltigBis: null,
    erhoehung: "+2,8%", mindest: null,
    details: "Zweite Stufe des Tarifabschlusses April 2025. Erhöhung um 2,8% für alle Beschäftigten in kommunalen Sparkassen.",
    abschluss: "Tarifabschluss April 2025",
  },
  aktuell: {
    id: "2025", label: "AKTUELL", labelColor: "bg-green-50 text-green-700",
    titel: "TVöD-S 2025", gueltigAb: "01.04.2025", gueltigBis: "30.04.2026",
    erhoehung: "+3,0%", mindest: "mind. +110 €",
    details: "Lineare Erhöhung um 3,0%, mindestens 110 Euro. Gilt für alle Beschäftigten in kommunalen Sparkassen im Bereich des TVöD-S.",
    abschluss: "Tarifabschluss April 2025",
  },
};

const ARCHIV = [
  { id: "2024", titel: "TVöD-S 2024", gueltigAb: "01.03.2024", gueltigBis: "31.03.2025", erhoehung: "+5,5%", mindest: "mind. +340 €", abschluss: "Tarifabschluss April 2023" },
  { id: "2023", titel: "TVöD-S 2023", gueltigAb: "01.06.2023", gueltigBis: "29.02.2024", erhoehung: "+5,5%", mindest: "mind. +340 €", abschluss: "Tarifabschluss April 2023" },
];

const FAQ = [
  { frage: "Was ist der TVöD-S Sparkassen?", antwort: "Der TVöD-S ist der Tarifvertrag für Beschäftigte in kommunalen Sparkassen (Sparkassen-Sonderbedingungen). Er ist ein Annex-Tarifvertrag zum TVöD VKA und enthält spezifische Regelungen für den Sparkassensektor, darunter eine eigene Entgelttabelle mit den Entgeltgruppen E 2 bis E 13. Grundlage ist der TVöD VKA, ergänzt um sparkassenspezifische Sonderregelungen." },
  { frage: "Welche Entgeltgruppen gibt es im TVöD-S?", antwort: "Der TVöD-S umfasst die Entgeltgruppen E 2 bis E 13 (ohne E 8). E 2 bis E 4 gelten für Hilfstätigkeiten und einfache Sachbearbeitung, E 5 bis E 7 für qualifizierte Sachbearbeitung und Beratung, E 9 bis E 11 für spezialisierte Fachkräfte und Teamleiter, und E 12 bis E 13 für Führungskräfte und Spezialisten im Bankgeschäft." },
  { frage: "Wie unterscheidet sich der TVöD-S vom TVöD VKA?", antwort: "Der TVöD-S enthält gegenüber dem TVöD VKA sparkassenspezifische Regelungen: eine eigene Entgelttabelle, angepasste Eingruppierungsmerkmale für Bankberufe sowie besondere Regelungen zu Arbeitszeit und Dienstreisen. Die allgemeinen Bestimmungen des TVöD VKA (Jahressonderzahlung, Zusatzversorgung, Stufenaufstieg) gelten unverändert weiter." },
  { frage: "Wie hoch ist die Jahressonderzahlung im TVöD-S?", antwort: "Die Jahressonderzahlung (Weihnachtsgeld) im TVöD-S beträgt je nach Entgeltgruppe zwischen 60% und 90% eines Monatsentgelts und wird im November ausgezahlt. Für die Entgeltgruppen E 1 bis E 8 beträgt sie 90%, für E 9 bis E 12 rund 80% und für E 13 und höher 60% eines Monatsentgelts." },
  { frage: "Wie funktioniert der Stufenaufstieg im TVöD-S?", antwort: "Im TVöD-S gibt es 6 Stufen pro Entgeltgruppe. Der Aufstieg erfolgt nach Beschäftigungszeit: Stufe 2 nach 1 Jahr in Stufe 1, Stufe 3 nach 2 Jahren in Stufe 2, Stufe 4 nach 3 Jahren in Stufe 3, Stufe 5 nach 4 Jahren in Stufe 4, Stufe 6 nach 5 Jahren in Stufe 5. Bei besonders guter Leistung kann ein beschleunigter Aufstieg gewährt werden." },
  { frage: "Für welche Sparkassen gilt der TVöD-S?", antwort: "Der TVöD-S gilt für kommunale Sparkassen, die Mitglied im Deutschen Sparkassen- und Giroverband (DSGV) und zugleich Mitglied in einem kommunalen Arbeitgeberverband sind. Das betrifft die meisten öffentlich-rechtlichen Sparkassen in Deutschland. Privatisierte Sparkassen oder Landesbanken sind in der Regel nicht tarifgebunden nach TVöD-S." },
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

export default function TVoeDSPage() {
  const basePath = "/tvoed/s";
  const jsonLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": FAQ.map(f => ({ "@type": "Question", "name": f.frage, "acceptedAnswer": { "@type": "Answer", "text": f.antwort } }))
  };
  return (
    <Layout activePath="/tvoed/s">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="text-sm text-gray-400 mb-6 flex items-center gap-1 flex-wrap">
        <a href="/" className="hover:text-gray-600">Startseite</a><span>→</span>
        <a href="/tvoed" className="hover:text-gray-600">TVöD</a><span>→</span>
        <span className="text-gray-900">TVöD-S Sparkassen</span>
      </div>
      <h1 className="text-3xl font-medium text-gray-900 mb-2">TVöD-S Sparkassen – Entgelttabellen & Rechner</h1>
      <p className="text-gray-500 mb-10 max-w-2xl">Alle Entgelttabellen für Beschäftigte in kommunalen Sparkassen (TVöD-S) – aktuell, zukünftig und Archiv.</p>
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
        <h2 className="text-xl font-medium text-gray-900 mb-6">Häufige Fragen zum TVöD-S</h2>
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
        <h2 className="text-xl font-medium text-gray-900 mb-4">TVöD-S – Tarifvertrag für kommunale Sparkassen</h2>
        <div className="text-gray-500 space-y-4 text-sm leading-relaxed max-w-3xl">
          <p>Der TVöD-S (Sparkassen-Sonderbedingungen) ist der Tarifvertrag für Beschäftigte in kommunalen Sparkassen und ein wichtiger Bestandteil des öffentlichen Dienstrechts. Er gilt für rund 200.000 Beschäftigte in den etwa 370 kommunalen Sparkassen in Deutschland und orientiert sich am TVöD VKA, enthält aber sparkassenspezifische Anpassungen.</p>
          <p>Die Entgeltgruppen E 2 bis E 13 (ohne E 8) des TVöD-S spiegeln die typischen Tätigkeiten im Sparkassensektor wider: von der Kassier- und Servicetätigkeit (E 2–E 4) über die qualifizierte Kundenberatung und Kreditbearbeitung (E 5–E 7) bis hin zu Spezialisten im Firmenkundengeschäft, Wealth Management und Compliance (E 9–E 13).</p>
          <p>Wie im gesamten TVöD profitieren Sparkassenbeschäftigte von einer betrieblichen Altersversorgung (Zusatzversorgungskasse), einer Jahressonderzahlung sowie geregelten Stufenaufstiegen. Das Entgeltsystem bietet durch 6 Stufen pro Entgeltgruppe eine transparente Entwicklung des Gehalts über die Beschäftigungsdauer.</p>
          <p>Neben dem Grundgehalt können Sparkassenmitarbeiter von leistungsbezogenen Entgeltbestandteilen profitieren: Das TVöD-S-System sieht leistungsorientierte Bezahlung (LOB) vor, bei der bis zu 2% der Entgeltsumme des Vorjahres als variable Leistungsprämien ausgeschüttet werden können. Die konkreten Verteilungskriterien legen die Betriebsparteien in Dienstvereinbarungen fest.</p>
        </div>
      </div>
    </Layout>
  );
}
