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
    titel: "Tarifrunde TVöD Bund 2025",
    zeitraum: "Januar – April 2025",
    status: "abgeschlossen",
    ergebnis1: "+3,0%",
    ergebnis1Ab: "01.04.2025",
    ergebnis1Mindest: "mind. +110 €",
    ergebnis2: "+2,8%",
    ergebnis2Ab: "01.03.2026",
    laufzeit: "23 Monate",
    updates: [
      { datum: "9. April 2025", uhrzeit: "17:30", typ: "abschluss", titel: "Tarifeinigung TVöD Bund", inhalt: "Ver.di und dbb haben die Schlichtungsempfehlung angenommen. Die rund 150.000 Bundesbeschäftigten erhalten +3,0% ab April 2025 und +2,8% ab März 2026." },
      { datum: "29. März 2025", uhrzeit: "12:00", typ: "schlichtung", titel: "Schlichtungsempfehlung angenommen", inhalt: "Die Schlichter haben eine Empfehlung abgegeben: +3,0% ab April 2025 (mind. 110 Euro) und +2,8% ab März 2026. Laufzeit 23 Monate." },
      { datum: "20. März 2025", uhrzeit: "09:00", typ: "info", titel: "Schlichtungsverfahren beginnt", inhalt: "Nach dem Scheitern der dritten Verhandlungsrunde einigen sich Bund und Gewerkschaften auf ein Schlichtungsverfahren." },
      { datum: "12. März 2025", uhrzeit: "22:00", typ: "warnung", titel: "3. Verhandlungsrunde gescheitert", inhalt: "Erneut kein Ergebnis. Ver.di und dbb intensivieren Warnstreiks in Bundesbehörden. Betroffen sind Bundesfinanzamt, BAMF und andere Bundesbehörden." },
      { datum: "22. Januar 2025", uhrzeit: "10:00", typ: "info", titel: "Verhandlungsauftakt TVöD Bund", inhalt: "Ver.di und dbb fordern 8% mehr Gehalt, mindestens 350 Euro für die 150.000 Bundesbeschäftigten." },
    ],
    hintergrund: [
      "Die Tarifrunde 2025 für den TVöD Bund verlief parallel zur Tarifrunde TVöD VKA. Beide Verhandlungen endeten mit einem ähnlichen Ergebnis – einem Abschluss nach Schlichtung.",
      "Ver.di und der dbb Beamtenbund forderten eine Gehaltserhöhung von 8 Prozent, mindestens jedoch 350 Euro monatlich. Das Bundesinnenministerium sah sich angesichts der Haushaltslage des Bundes zu deutlich moderateren Angeboten gezwungen.",
      "Das Ergebnis von +3,0% ab April 2025 (mind. 110 Euro) und +2,8% ab März 2026 entspricht dem bundesweiten Trend. Insgesamt profitierten rund 150.000 Beschäftigte in Bundesbehörden von der Einigung.",
    ],
    weitereRunden: [{ id: "2023", label: "Tarifrunde 2023" }],
  },
  "2023": {
    titel: "Tarifrunde TVöD Bund 2023",
    zeitraum: "Januar – April 2023",
    status: "abgeschlossen",
    ergebnis1: "+5,5%",
    ergebnis1Ab: "01.06.2023",
    ergebnis1Mindest: "mind. +340 €",
    ergebnis2: null,
    ergebnis2Ab: null,
    laufzeit: "24 Monate",
    updates: [
      { datum: "22. April 2023", uhrzeit: "16:45", typ: "abschluss", titel: "Tarifeinigung TVöD Bund 2023", inhalt: "Nach Schlichtung: +5,5% ab Juni 2023 (mind. 340 Euro) plus Einmalzahlung 3.000 Euro für Bundesbeschäftigte." },
      { datum: "27. März 2023", uhrzeit: "08:00", typ: "warnung", titel: "Warnstreiks in Bundesbehörden", inhalt: "Beschäftigte in BAMF, Bundeszollamt und anderen Bundesbehörden beteiligen sich am bundesweiten Warnstreik." },
      { datum: "24. Januar 2023", uhrzeit: "10:00", typ: "info", titel: "Verhandlungsauftakt", inhalt: "Ver.di fordert 10,5% mehr Gehalt, mindestens 500 Euro monatlich für Bundesbeschäftigte." },
    ],
    hintergrund: [
      "Die Tarifrunde 2023 für den TVöD Bund fand parallel zur VKA-Runde statt. Beide Verhandlungen wurden gemeinsam geführt, was die Verhandlungsmacht der Gewerkschaften stärkte.",
      "Angesichts der Inflationsrate von zeitweise über 8 Prozent forderten ver.di und dbb ein kräftiges Gehaltsplus. Der Bund sah sich durch steigende Energiekosten und Haushaltsengpässe unter Druck.",
      "Das Ergebnis von +5,5% (mind. 340 Euro) plus Einmalzahlung war auch für den Bund das beste Ergebnis seit Jahren und stärkte die Kaufkraft der Beschäftigten spürbar.",
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
      <Layout activePath="/tvoed/bund">
        <div className="text-center py-20">
          <h1 className="text-2xl font-medium text-gray-900 mb-2">Tarifrunde nicht gefunden</h1>
          <Link href="/tvoed/bund" className="text-blue-600">← Zurück zur Übersicht</Link>
        </div>
      </Layout>
    );
  }
  return (
    <Layout activePath="/tvoed/bund">
      <div className="text-sm text-gray-400 mb-6 flex items-center gap-1 flex-wrap">
        <a href="/" className="hover:text-gray-600">Startseite</a><span>→</span>
        <a href="/tvoed" className="hover:text-gray-600">TVöD</a><span>→</span>
        <a href="/tvoed/bund" className="hover:text-gray-600">TVöD Bund</a><span>→</span>
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
          <Link href={`/tvoed/bund/${params.jahr}`} className="text-sm bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">Tabelle {params.jahr} anzeigen</Link>
          <Link href={`/tvoed/bund/${params.jahr}/rechner`} className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Gehalt berechnen</Link>
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
        <h2 className="text-base font-medium text-gray-900 mb-4">Weitere Tarifrunden TVöD Bund</h2>
        <div className="flex gap-3 flex-wrap">
          {data.weitereRunden.map(r => (
            <Link key={r.id} href={`/tvoed/bund/tarifrunden/${r.id}`} className="text-sm border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">{r.label}</Link>
          ))}
          <Link href="/tvoed/bund" className="text-sm text-blue-600 hover:text-blue-700 px-4 py-2">← Zurück zur Übersicht</Link>
        </div>
      </div>
    </Layout>
  );
}

export async function generateStaticParams() {
  return Object.keys(TARIFRUNDEN_DATA).map(jahr => ({ jahr }));
}
