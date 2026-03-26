import Layout from "@/components/Layout";
import Link from "next/link";

const NEWS = [
  {
    id: 1,
    datum: "26. März 2026",
    kategorie: "TV-L",
    titel: "TV-L Tarifergebnis 2026: +2,8% ab April, +2,0% ab März 2027",
    zusammenfassung: "Die Bundestarifkommission hat das Tarifergebnis für die rund 2,2 Millionen Beschäftigten im öffentlichen Dienst der Länder angenommen. In der ersten Stufe steigen die Gehälter ab 1. April 2026 um 2,8 Prozent, mindestens jedoch um 100 Euro.",
    tags: ["TV-L", "Tarifrunde 2026", "Gehaltserhöhung"],
    href: "/news/tv-l-tarifergebnis-2026",
  },
  {
    id: 2,
    datum: "15. März 2026",
    kategorie: "Beamte",
    titel: "Besoldungsrunde 2026: Bundesländer übertragen Tarifergebnis auf Beamte",
    zusammenfassung: "Nach dem Tarifabschluss für den öffentlichen Dienst der Länder beginnen die Bundesländer mit der Übertragung auf die Beamtenbesoldung. NRW-Ministerpräsident Wüst sicherte eine zeit- und wirkungsgleiche Übertragung zu. Bayern hingegen plant eine Verzögerung um sechs Monate.",
    tags: ["Beamte", "Besoldung", "NRW", "Bayern"],
    href: "/news/besoldungsrunde-2026",
  },
  {
    id: 3,
    datum: "1. März 2026",
    kategorie: "TVöD",
    titel: "TVöD 2026: Gehaltserhöhung von 2,8% ab Mai 2026 für Bund und Kommunen",
    zusammenfassung: "Zum 1. Mai 2026 steigen die Gehälter im TVöD erneut. Die zweite Stufe des TVöD-Tarifabschlusses vom April 2025 bringt eine tabellenwirksame Erhöhung von 2,8 Prozent für Beschäftigte bei Bund und Kommunen.",
    tags: ["TVöD", "Gehaltserhöhung", "2026"],
    href: "/news/tvoed-gehaltserhohung-mai-2026",
  },
  {
    id: 4,
    datum: "14. Februar 2026",
    kategorie: "TV-L",
    titel: "Tarifeinigung TV-L: Ergebnis nach zähen Verhandlungen in Potsdam",
    zusammenfassung: "Nach der zweiten Verhandlungsrunde in Potsdam haben sich ver.di und die Tarifgemeinschaft deutscher Länder auf ein Tarifergebnis geeinigt. Das Gesamtvolumen beträgt 5,8 Prozent über 27 Monate.",
    tags: ["TV-L", "ver.di", "Tarifverhandlung"],
    href: "/news/tarifeinigung-tv-l-februar-2026",
  },
  {
    id: 5,
    datum: "1. Mai 2025",
    kategorie: "TVöD SuE",
    titel: "TVöD SuE: Gehaltserhöhung für Erzieherinnen ab Mai 2026",
    zusammenfassung: "Ab dem 1. Mai 2026 steigen die Gehälter für den Sozial- und Erziehungsdienst (TVöD SuE) im öffentlichen Dienst der Kommunen. Erzieherinnen und Erzieher profitieren von der zweiten Stufe des Tarifabschlusses.",
    tags: ["TVöD SuE", "Erzieher", "Gehaltserhöhung"],
    href: "/news/tvoed-sue-gehaltserhohung-2026",
  },
  {
    id: 6,
    datum: "6. April 2025",
    kategorie: "TVöD",
    titel: "TVöD Tarifeinigung 2025: +3,0% ab April 2025, +2,8% ab Mai 2026",
    zusammenfassung: "Die TVöD-Tarifrunde 2025 für mehr als 2,6 Millionen Tarifbeschäftigte des Bundes und der Kommunen wurde erfolgreich abgeschlossen. Die Beschäftigten erhalten eine Gehaltserhöhung in zwei Stufen.",
    tags: ["TVöD", "Tarifabschluss 2025"],
    href: "/news/tvoed-tarifabschluss-2025",
  },
];

const KATEGORIEN = ["Alle", "TVöD", "TV-L", "Beamte", "TVöD SuE", "Tarifrunde"];

export default function NewsPage() {
  return (
    <Layout activePath="/news">
      <div className="text-sm text-gray-400 mb-6">
        <a href="/" className="hover:text-gray-600">Startseite</a> → <span className="text-gray-900">News</span>
      </div>

      <h1 className="text-3xl font-medium text-gray-900 mb-2">News & Aktuelles</h1>
      <p className="text-gray-500 mb-8 max-w-2xl">
        Aktuelle Nachrichten zu Tarifrunden, Gehaltserhöhungen und Besoldungsanpassungen im öffentlichen Dienst.
      </p>

      {/* Kategorien Filter */}
      <div className="flex gap-2 flex-wrap mb-8">
        {KATEGORIEN.map(k => (
          <button key={k} className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${k === "Alle" ? "bg-blue-600 text-white border-blue-600" : "border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600"}`}>
            {k}
          </button>
        ))}
      </div>

      {/* News Liste */}
      <div className="space-y-4">
        {NEWS.map(n => (
          <article key={n.id} className="border border-gray-100 rounded-xl p-6 hover:border-gray-200 hover:shadow-sm transition-all">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-md font-medium">{n.kategorie}</span>
              <span className="text-sm text-gray-400">{n.datum}</span>
            </div>
            <h2 className="text-lg font-medium text-gray-900 mb-2 hover:text-blue-600">
              <Link href={n.href}>{n.titel}</Link>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{n.zusammenfassung}</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                {n.tags.map(t => (
                  <span key={t} className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-md">{t}</span>
                ))}
              </div>
              <Link href={n.href} className="text-sm text-blue-600 hover:text-blue-700 flex-shrink-0">
                Weiterlesen →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Layout>
  );
}
