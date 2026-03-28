import Layout from "@/components/Layout";
import Link from "next/link";

const TARIFRUNDEN_DATA: Record<string, {
  titel: string;
  zeitraum: string;
  status: string;
  ergebnis1: string;
  ergebnis1Ab: string;
  ergebnis1Mindest: string | null;
  ergebnis2: string | null;
  ergebnis2Ab: string | null;
  laufzeit: string;
  updates: {
    datum: string;
    uhrzeit: string;
    typ: "abschluss" | "schlichtung" | "warnung" | "info";
    titel: string;
    inhalt: string;
  }[];
  hintergrund: string[];
  weitereRunden: { id: string; label: string }[];
}> = {
  "2025": {
    titel: "Tarifrunde TV-L 2025/2026",
    zeitraum: "November 2025 – Februar 2026",
    status: "abgeschlossen",
    ergebnis1: "+2,8%",
    ergebnis1Ab: "01.04.2026",
    ergebnis1Mindest: null,
    ergebnis2: null,
    ergebnis2Ab: null,
    laufzeit: "12 Monate",
    updates: [
      {
        datum: "28. Februar 2026", uhrzeit: "19:30", typ: "abschluss",
        titel: "Tarifeinigung TV-L erzielt",
        inhalt: "ver.di und TdL einigten sich auf +2,8% ab April 2026 für alle Beschäftigten der Länder. Laufzeit 12 Monate.",
      },
      {
        datum: "15. Januar 2026", uhrzeit: "09:00", typ: "warnung",
        titel: "Warnstreiks in mehreren Ländern",
        inhalt: "Nach der ersten Verhandlungsrunde ohne Ergebnis ruft ver.di zu Warnstreiks an Hochschulen und Behörden auf.",
      },
      {
        datum: "10. November 2025", uhrzeit: "10:00", typ: "info",
        titel: "Verhandlungsauftakt",
        inhalt: "Die Tarifrunde TV-L 2025 beginnt. ver.di fordert 8% mehr Gehalt, mindestens 350 Euro monatlich.",
      },
    ],
    hintergrund: [
      "Die Tarifrunde TV-L 2025/2026 zwischen ver.di und der Tarifgemeinschaft deutscher Länder (TdL) war die Fortsetzung der Tarifrunde von 2023. Nach dem Auslaufen des vorherigen Abschlusses Ende 2024 traten die Tarifparteien wieder in Verhandlungen.",
      "ver.di forderte zu Beginn eine Erhöhung von 8 Prozent, mindestens jedoch 350 Euro monatlich. Die TdL verwies auf die angespannte Haushaltslage der Länder und bot zunächst deutlich weniger an.",
      "Nach Warnstreiks an Hochschulen und in Behörden einigten sich die Parteien im Februar 2026 auf +2,8% ab April 2026 mit einer Laufzeit von 12 Monaten.",
    ],
    weitereRunden: [
      { id: "2023", label: "Tarifrunde 2023" },
      { id: "2021", label: "Tarifrunde 2021" },
    ],
  },
  "2023": {
    titel: "Tarifrunde TV-L 2023",
    zeitraum: "Oktober – November 2023",
    status: "abgeschlossen",
    ergebnis1: "+5,5%",
    ergebnis1Ab: "01.11.2023",
    ergebnis1Mindest: "mind. +340 €",
    ergebnis2: null,
    ergebnis2Ab: null,
    laufzeit: "12 Monate",
    updates: [
      {
        datum: "9. November 2023", uhrzeit: "21:15", typ: "abschluss",
        titel: "Tarifeinigung TV-L 2023",
        inhalt: "Nach zwei Verhandlungsrunden einigten sich TdL und ver.di auf +5,5% ab November 2023 (mindestens 340 Euro). Laufzeit 12 Monate.",
      },
      {
        datum: "26. Oktober 2023", uhrzeit: "08:00", typ: "warnung",
        titel: "Bundesweite Warnstreiks",
        inhalt: "Beschäftigte an Universitäten, Krankenhäusern und Behörden der Länder treten in Warnstreiks. Rund 100.000 Beschäftigte beteiligen sich.",
      },
      {
        datum: "26. Oktober 2023", uhrzeit: "10:00", typ: "info",
        titel: "Verhandlungsauftakt",
        inhalt: "ver.di fordert 10,5% mehr Gehalt, mindestens 500 Euro monatlich für die rund 1,1 Millionen TV-L Beschäftigten.",
      },
    ],
    hintergrund: [
      "Die Tarifrunde TV-L 2023 fand in einem Umfeld hoher Inflation statt. Ver.di forderte angesichts der gestiegenen Lebenshaltungskosten eine kräftige Erhöhung von 10,5 Prozent, mindestens 500 Euro.",
      "Nach bundesweiten Warnstreiks an Hochschulen, Unikliniken und Behörden einigten sich die Tarifparteien nach nur zwei Verhandlungsrunden auf ein gutes Ergebnis.",
      "Das Ergebnis von +5,5% (mindestens 340 Euro) ab November 2023 war für die 1,1 Millionen TV-L Beschäftigten eines der höchsten Tarifergebnisse der letzten Jahre.",
    ],
    weitereRunden: [
      { id: "2025", label: "Tarifrunde 2025/2026" },
      { id: "2021", label: "Tarifrunde 2021" },
    ],
  },
};

const UPDATE_FARBEN: Record<string, string> = {
  abschluss: "bg-green-50 border-green-200 text-green-700",
  schlichtung: "bg-blue-50 border-blue-200 text-blue-700",
  warnung: "bg-red-50 border-red-200 text-red-700",
  info: "bg-gray-50 border-gray-200 text-gray-600",
};

const UPDATE_LABELS: Record<string, string> = {
  abschluss: "Tarifabschluss",
  schlichtung: "Schlichtung",
  warnung: "Warnstreik / Scheitern",
  info: "Update",
};

interface Props {
  params: { jahr: string };
}

export default function TVLTarifrundePage({ params }: Props) {
  const data = TARIFRUNDEN_DATA[params.jahr];

  if (!data) {
    return (
      <Layout activePath="/tv-l/allgemein">
        <div className="text-center py-20">
          <h1 className="text-2xl font-medium text-gray-900 mb-2">Tarifrunde nicht gefunden</h1>
          <Link href="/tv-l/allgemein" className="text-blue-600">← Zurück zur Übersicht</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout activePath="/tv-l/allgemein">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-6 flex items-center gap-1 flex-wrap">
        <a href="/" className="hover:text-gray-600">Startseite</a>
        <span>→</span>
        <a href="/tv-l" className="hover:text-gray-600">TV-L</a>
        <span>→</span>
        <a href="/tv-l/tarifrunden" className="hover:text-gray-600">Tarifrunden</a>
        <span>→</span>
        <span className="text-gray-900">Tarifrunde {params.jahr}</span>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-md">
              {data.status === "abgeschlossen" ? "Abgeschlossen" : "Laufend"}
            </span>
            <span className="text-sm text-gray-400">{data.zeitraum}</span>
          </div>
          <h1 className="text-3xl font-medium text-gray-900">{data.titel}</h1>
        </div>
        <div className="bg-green-50 rounded-xl px-6 py-4 text-center">
          <div className="text-3xl font-medium text-green-600">{data.ergebnis1}</div>
          <div className="text-xs text-gray-500 mt-1">ab {data.ergebnis1Ab}</div>
          {data.ergebnis2 && (
            <>
              <div className="text-2xl font-medium text-green-500 mt-2">{data.ergebnis2}</div>
              <div className="text-xs text-gray-500">ab {data.ergebnis2Ab}</div>
            </>
          )}
        </div>
      </div>

      {/* Ergebnis Box */}
      <div className="bg-blue-50 rounded-xl p-6 mb-10">
        <h2 className="text-base font-medium text-gray-900 mb-3">Tarifergebnis im Überblick</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4">
            <div className="text-xs text-gray-400 mb-1">1. Stufe</div>
            <div className="text-xl font-medium text-green-600">{data.ergebnis1}</div>
            <div className="text-xs text-gray-500">ab {data.ergebnis1Ab}{data.ergebnis1Mindest ? `, ${data.ergebnis1Mindest}` : ""}</div>
          </div>
          {data.ergebnis2 && (
            <div className="bg-white rounded-lg p-4">
              <div className="text-xs text-gray-400 mb-1">2. Stufe</div>
              <div className="text-xl font-medium text-green-500">{data.ergebnis2}</div>
              <div className="text-xs text-gray-500">ab {data.ergebnis2Ab}</div>
            </div>
          )}
          <div className="bg-white rounded-lg p-4">
            <div className="text-xs text-gray-400 mb-1">Laufzeit</div>
            <div className="text-xl font-medium text-gray-900">{data.laufzeit}</div>
          </div>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Link href={`/tv-l/allgemein/${params.jahr}`} className="text-sm bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Tabelle {params.jahr} anzeigen
          </Link>
          <Link href={`/tv-l/allgemein/${params.jahr}/rechner`} className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Gehalt berechnen
          </Link>
        </div>
      </div>

      {/* Live Berichterstattung */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-lg font-medium text-gray-900">Berichterstattung</h2>
          <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
            {data.status === "abgeschlossen" ? "Archiviert" : "Live"} · {data.updates.length} Updates
          </span>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-100 hidden sm:block" />
          <div className="space-y-4">
            {data.updates.map((update, i) => (
              <div key={i} className="relative sm:pl-12">
                <div className={`absolute left-2.5 top-4 w-3 h-3 rounded-full border-2 hidden sm:block ${
                  update.typ === "abschluss" ? "bg-green-500 border-green-500" :
                  update.typ === "warnung" ? "bg-red-400 border-red-400" :
                  update.typ === "schlichtung" ? "bg-blue-400 border-blue-400" :
                  "bg-gray-300 border-gray-300"
                }`} />
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

      {/* Hintergrund */}
      <div className="mb-12">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Hintergrund & Analyse</h2>
        <div className="text-gray-500 text-sm leading-relaxed space-y-4 max-w-3xl">
          {data.hintergrund.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>

      {/* Weitere Tarifrunden */}
      <div className="border-t border-gray-100 pt-8">
        <h2 className="text-base font-medium text-gray-900 mb-4">Weitere Tarifrunden TV-L</h2>
        <div className="flex gap-3 flex-wrap">
          {data.weitereRunden.map(r => (
            <Link key={r.id} href={`/tv-l/tarifrunden/${r.id}`} className="text-sm border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              {r.label}
            </Link>
          ))}
          <Link href="/tv-l/tarifrunden" className="text-sm text-blue-600 hover:text-blue-700 px-4 py-2">
            Alle Tarifrunden →
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export async function generateStaticParams() {
  return Object.keys(TARIFRUNDEN_DATA).map(jahr => ({ jahr }));
}
