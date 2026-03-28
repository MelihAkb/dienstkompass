import Layout from "@/components/Layout";
import Link from "next/link";

const TARIFRUNDEN_DATA: Record<string, {
  titel: string; zeitraum: string; status: string;
  ergebnis1: string; ergebnis1Ab: string; ergebnis1Mindest: string | null;
  ergebnis2: string | null; ergebnis2Ab: string | null; laufzeit: string;
  updates: { datum: string; uhrzeit: string; typ: "abschluss" | "schlichtung" | "warnung" | "info"; titel: string; inhalt: string; }[];
  hintergrund: string[];
  weitereRunden: { id: string; label: string }[];
}> = {
  "2025": {
    titel: "Tarifrunde TVöD SuE 2025",
    zeitraum: "Januar – April 2025",
    status: "abgeschlossen",
    ergebnis1: "+3,0%",
    ergebnis1Ab: "01.04.2025",
    ergebnis1Mindest: "mind. +110 €",
    ergebnis2: "+2,8%",
    ergebnis2Ab: "01.05.2026",
    laufzeit: "25 Monate",
    updates: [
      { datum: "6. April 2025", uhrzeit: "18:00", typ: "abschluss", titel: "Tarifeinigung TVöD SuE", inhalt: "Ver.di und Kommunale Arbeitgeber einigen sich auf Basis der Schlichtungsempfehlung. Die rund 330.000 Beschäftigten im kommunalen Sozial- und Erziehungsdienst erhalten +3,0% ab April 2025 und +2,8% ab Mai 2026." },
      { datum: "28. März 2025", uhrzeit: "14:00", typ: "schlichtung", titel: "Schlichtungsempfehlung für den SuE", inhalt: "Die Schlichter empfehlen: +3,0% ab April 2025 (mindestens 110 Euro) und +2,8% ab Mai 2026. Laufzeit 25 Monate – identisch mit dem allgemeinen TVöD VKA-Abschluss." },
      { datum: "15. März 2025", uhrzeit: "07:00", typ: "warnung", titel: "Großstreik in Kitas und Jugendhilfe", inhalt: "Ver.di ruft zu bundesweiten Warnstreiks in kommunalen Kitas, Horten und Jugendhilfeeinrichtungen auf. Zehntausende Beschäftigte beteiligen sich. In vielen Städten müssen Eltern kurzfristig Betreuungsalternativen organisieren." },
      { datum: "20. Januar 2025", uhrzeit: "10:00", typ: "info", titel: "Verhandlungsauftakt TVöD SuE 2025", inhalt: "Ver.di fordert 8% mehr Gehalt für die rund 330.000 Beschäftigten im kommunalen Sozial- und Erziehungsdienst. Besondere Schwerpunkte: Wertschätzung für Erzieher, Abbau des Fachkräftemangels durch bessere Bezahlung." },
    ],
    hintergrund: [
      "Die Tarifrunde 2025 für den TVöD SuE verlief parallel zur allgemeinen TVöD VKA-Runde. Der Sozial- und Erziehungsdienst war traditionell ein Bereich mit besonderem Konfliktpotenzial – der bundesweite Fachkräftemangel in Kitas und der anhaltende Druck auf Beschäftigte gaben den Gewerkschaftsforderungen zusätzliches Gewicht.",
      "Ver.di betonte im Verlauf der Verhandlungen den wachsenden Erziehermangel in Deutschland: Laut Berechnungen fehlen bis 2030 über 100.000 Fachkräfte in der Kindertagesbetreuung. Bessere Bezahlung sei ein zentraler Hebel, um den Beruf attraktiver zu gestalten und Nachwuchs zu gewinnen. Die massiven Warnstreiks in Kitas im März 2025 demonstrierten die Streikbereitschaft der Beschäftigten.",
      "Das Ergebnis von +3,0% ab April 2025 (mindestens 110 Euro) und +2,8% ab Mai 2026 entspricht dem allgemeinen TVöD VKA-Abschluss. Für Beschäftigte in der unteren Entgeltgruppe S 2 bedeutet dies in 2025 ein Plus von mindestens 110 Euro monatlich – für Erzieherinnen in S 8a rund 100 Euro mehr im ersten Schritt.",
    ],
    weitereRunden: [{ id: "2023", label: "Tarifrunde 2023" }],
  },
  "2023": {
    titel: "Tarifrunde TVöD SuE 2023",
    zeitraum: "Januar – April 2023",
    status: "abgeschlossen",
    ergebnis1: "+5,5%",
    ergebnis1Ab: "01.06.2023",
    ergebnis1Mindest: "mind. +340 €",
    ergebnis2: null,
    ergebnis2Ab: null,
    laufzeit: "24 Monate",
    updates: [
      { datum: "22. April 2023", uhrzeit: "17:00", typ: "abschluss", titel: "Tarifeinigung TVöD SuE 2023", inhalt: "Nach Schlichtung einigen sich ver.di und VKA auf +5,5% ab Juni 2023 (mindestens 340 Euro) plus Einmalzahlung von 3.000 Euro. Ein historisch starkes Ergebnis für Erzieher und Sozialpädagogen." },
      { datum: "27. März 2023", uhrzeit: "06:30", typ: "warnung", titel: "Mega-Streik in Kitas bundesweit", inhalt: "Ver.di ruft zum bislang größten Warnstreik im Sozial- und Erziehungsdienst auf. In fast allen Bundesländern bleiben kommunale Kitas geschlossen. Bundesweit beteiligen sich über 50.000 Beschäftigte." },
      { datum: "23. Januar 2023", uhrzeit: "10:00", typ: "info", titel: "Verhandlungsauftakt 2023", inhalt: "Ver.di fordert 10,5% mehr Gehalt, mindestens 500 Euro monatlich. Für den SuE wird zudem eine eigenständige Erhöhung der SuE-Zulage gefordert. Hintergrund: Die Inflationsrate liegt bei über 8%, die Kaufkraft der Beschäftigten sinkt." },
    ],
    hintergrund: [
      "Die Tarifrunde 2023 im TVöD SuE war geprägt von der hohen Inflation und dem spürbaren Kaufkraftverlust der Beschäftigten. Ver.di und kommunale Arbeitgeber verhandelten im Rahmen der gemeinsamen TVöD-Runde – der Sozial- und Erziehungsdienst stand dabei besonders im Fokus der Öffentlichkeit.",
      "Die Warnstreiks im März 2023 sorgten für erhebliche Einschränkungen in der Kinderbetreuung und lösten eine breite gesellschaftliche Debatte über die Wertschätzung von Erziehungsberufen aus. Die hohe Beteiligung der Beschäftigten signalisierte den Kommunen die Ernsthaftigkeit der Forderungen.",
      "Das Ergebnis von +5,5% (mindestens 340 Euro) plus Einmalzahlung 3.000 Euro war das beste Tarifergebnis im öffentlichen Dienst seit über einem Jahrzehnt. Für eine Erzieherin in S 8a bedeutete dies ab Juni 2023 rund 175 Euro mehr brutto pro Monat – ein spürbarer Schritt zur Aufwertung des Berufsbildes.",
    ],
    weitereRunden: [{ id: "2025", label: "Tarifrunde 2025" }],
  },
};

const UPDATE_FARBEN: Record<string, string> = {
  abschluss: "bg-green-50 border-green-200 text-green-700",
  schlichtung: "bg-blue-50 border-blue-200 text-blue-700",
  warnung: "bg-red-50 border-red-200 text-red-700",
  info: "bg-gray-50 border-gray-200 text-gray-600",
};
const UPDATE_LABELS: Record<string, string> = {
  abschluss: "Tarifabschluss", schlichtung: "Schlichtung", warnung: "Warnstreik / Scheitern", info: "Update",
};

interface Props { params: { jahr: string } }

export default function TarifrundePage({ params }: Props) {
  const data = TARIFRUNDEN_DATA[params.jahr];
  if (!data) {
    return (
      <Layout activePath="/tvoed/sue">
        <div className="text-center py-20">
          <h1 className="text-2xl font-medium text-gray-900 mb-2">Tarifrunde nicht gefunden</h1>
          <Link href="/tvoed/sue" className="text-blue-600">← Zurück zur Übersicht</Link>
        </div>
      </Layout>
    );
  }
  return (
    <Layout activePath="/tvoed/sue">
      <div className="text-sm text-gray-400 mb-6 flex items-center gap-1 flex-wrap">
        <a href="/" className="hover:text-gray-600">Startseite</a><span>→</span>
        <a href="/tvoed" className="hover:text-gray-600">TVöD</a><span>→</span>
        <a href="/tvoed/sue" className="hover:text-gray-600">TVöD SuE</a><span>→</span>
        <span className="text-gray-900">Tarifrunde {params.jahr}</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-md">Abgeschlossen</span>
            <span className="text-sm text-gray-400">{data.zeitraum}</span>
          </div>
          <h1 className="text-3xl font-medium text-gray-900">{data.titel}</h1>
        </div>
        <div className="bg-green-50 rounded-xl px-6 py-4 text-center">
          <div className="text-3xl font-medium text-green-600">{data.ergebnis1}</div>
          <div className="text-xs text-gray-500 mt-1">ab {data.ergebnis1Ab}</div>
          {data.ergebnis2 && <><div className="text-2xl font-medium text-green-500 mt-2">{data.ergebnis2}</div><div className="text-xs text-gray-500">ab {data.ergebnis2Ab}</div></>}
        </div>
      </div>
      <div className="bg-blue-50 rounded-xl p-6 mb-10">
        <h2 className="text-base font-medium text-gray-900 mb-3">Tarifergebnis im Überblick</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4">
            <div className="text-xs text-gray-400 mb-1">1. Stufe</div>
            <div className="text-xl font-medium text-green-600">{data.ergebnis1}</div>
            <div className="text-xs text-gray-500">ab {data.ergebnis1Ab}{data.ergebnis1Mindest ? `, ${data.ergebnis1Mindest}` : ""}</div>
          </div>
          {data.ergebnis2 && <div className="bg-white rounded-lg p-4">
            <div className="text-xs text-gray-400 mb-1">2. Stufe</div>
            <div className="text-xl font-medium text-green-500">{data.ergebnis2}</div>
            <div className="text-xs text-gray-500">ab {data.ergebnis2Ab}</div>
          </div>}
          <div className="bg-white rounded-lg p-4">
            <div className="text-xs text-gray-400 mb-1">Laufzeit</div>
            <div className="text-xl font-medium text-gray-900">{data.laufzeit}</div>
          </div>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Link href={`/tvoed/sue/${params.jahr}`} className="text-sm bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">Tabelle {params.jahr} anzeigen</Link>
          <Link href={`/tvoed/sue/${params.jahr}/rechner`} className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Gehalt berechnen</Link>
        </div>
      </div>
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-lg font-medium text-gray-900">Berichterstattung</h2>
          <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-md">Archiviert · {data.updates.length} Updates</span>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-100 hidden sm:block" />
          <div className="space-y-4">
            {data.updates.map((update, i) => (
              <div key={i} className="relative sm:pl-12">
                <div className={`absolute left-2.5 top-4 w-3 h-3 rounded-full border-2 hidden sm:block ${update.typ === "abschluss" ? "bg-green-500 border-green-500" : update.typ === "warnung" ? "bg-red-400 border-red-400" : update.typ === "schlichtung" ? "bg-blue-400 border-blue-400" : "bg-gray-300 border-gray-300"}`} />
                <div className={`border rounded-xl p-5 ${UPDATE_FARBEN[update.typ]}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium">{UPDATE_LABELS[update.typ]}</span>
                    <span className="text-xs opacity-60">{update.datum} · {update.uhrzeit} Uhr</span>
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">{update.titel}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{update.inhalt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Hintergrund & Analyse</h2>
        <div className="text-gray-500 text-sm leading-relaxed space-y-4 max-w-3xl">{data.hintergrund.map((p, i) => <p key={i}>{p}</p>)}</div>
      </div>
      <div className="border-t border-gray-100 pt-8">
        <h2 className="text-base font-medium text-gray-900 mb-4">Weitere Tarifrunden TVöD SuE</h2>
        <div className="flex gap-3 flex-wrap">
          {data.weitereRunden.map(r => (
            <Link key={r.id} href={`/tvoed/sue/tarifrunden/${r.id}`} className="text-sm border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">{r.label}</Link>
          ))}
          <Link href="/tvoed/sue" className="text-sm text-blue-600 hover:text-blue-700 px-4 py-2">← Zurück zur Übersicht</Link>
        </div>
      </div>
    </Layout>
  );
}

export async function generateStaticParams() {
  return Object.keys(TARIFRUNDEN_DATA).map(jahr => ({ jahr }));
}
