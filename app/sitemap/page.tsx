import Layout from "@/components/Layout";
import Link from "next/link";

const SECTIONS = [
  {
    title: "TVöD VKA (Kommunen)",
    links: [
      { label: "TVöD VKA Übersicht", href: "/tvoed/vka" },
      { label: "Entgelttabelle 2026", href: "/tvoed/vka/2026" },
      { label: "Entgelttabelle 2025", href: "/tvoed/vka/2025" },
      { label: "Entgelttabelle 2024", href: "/tvoed/vka/2024" },
      { label: "Tarifrunde 2025", href: "/tvoed/vka/tarifrunden/2025" },
      { label: "Tarifrunde 2023", href: "/tvoed/vka/tarifrunden/2023" },
    ],
  },
  {
    title: "TVöD Bund",
    links: [
      { label: "TVöD Bund Übersicht", href: "/tvoed/bund" },
      { label: "Entgelttabelle 2026", href: "/tvoed/bund/2026" },
      { label: "Entgelttabelle 2025", href: "/tvoed/bund/2025" },
      { label: "Entgelttabelle 2024", href: "/tvoed/bund/2024" },
      { label: "Tarifrunde 2025", href: "/tvoed/bund/tarifrunden/2025" },
      { label: "Tarifrunde 2023", href: "/tvoed/bund/tarifrunden/2023" },
    ],
  },
  {
    title: "TVöD SuE (Sozial & Erziehung)",
    links: [
      { label: "TVöD SuE Übersicht", href: "/tvoed/sue" },
      { label: "Entgelttabelle 2026", href: "/tvoed/sue/2026" },
      { label: "Entgelttabelle 2025", href: "/tvoed/sue/2025" },
      { label: "Entgelttabelle 2024", href: "/tvoed/sue/2024" },
      { label: "Tarifrunde 2025", href: "/tvoed/sue/tarifrunden/2025" },
      { label: "Tarifrunde 2023", href: "/tvoed/sue/tarifrunden/2023" },
    ],
  },
  {
    title: "TVöD-P (Pflege)",
    links: [
      { label: "TVöD-P Übersicht", href: "/tvoed/p" },
      { label: "Entgelttabelle 2026", href: "/tvoed/p/2026" },
      { label: "Entgelttabelle 2025", href: "/tvoed/p/2025" },
      { label: "Entgelttabelle 2024", href: "/tvoed/p/2024" },
    ],
  },
  {
    title: "TVöD-S (Sparkassen)",
    links: [
      { label: "TVöD-S Übersicht", href: "/tvoed/s" },
      { label: "Entgelttabelle 2026", href: "/tvoed/s/2026" },
      { label: "Entgelttabelle 2025", href: "/tvoed/s/2025" },
      { label: "Entgelttabelle 2024", href: "/tvoed/s/2024" },
    ],
  },
  {
    title: "TV-L (Bundesländer)",
    links: [
      { label: "TV-L Übersicht", href: "/tv-l" },
      { label: "TV-L allgemein", href: "/tv-l/allgemein" },
      { label: "Entgelttabelle 2026", href: "/tv-l/allgemein/2026" },
      { label: "Entgelttabelle 2025", href: "/tv-l/allgemein/2025" },
      { label: "Entgelttabelle 2024", href: "/tv-l/allgemein/2024" },
      { label: "Tarifrunde 2025/2026", href: "/tv-l/tarifrunden/2025" },
      { label: "Tarifrunde 2023", href: "/tv-l/tarifrunden/2023" },
    ],
  },
  {
    title: "Beamte Bund",
    links: [
      { label: "Beamte Übersicht", href: "/beamte" },
      { label: "Bundesbeamte (A-Besoldung)", href: "/beamte/bund" },
      { label: "Besoldungsanpassung 2024", href: "/beamte/bund/tarifrunden/2024" },
      { label: "Besoldungsanpassung 2022", href: "/beamte/bund/tarifrunden/2022" },
    ],
  },
  {
    title: "Beamte Länder",
    links: [
      { label: "Baden-Württemberg", href: "/beamte/bw" },
      { label: "Bayern", href: "/beamte/by" },
      { label: "Berlin", href: "/beamte/be" },
      { label: "Brandenburg", href: "/beamte/bb" },
      { label: "Bremen", href: "/beamte/hb" },
      { label: "Hamburg", href: "/beamte/hh" },
      { label: "Hessen", href: "/beamte/he" },
      { label: "Mecklenburg-Vorpommern", href: "/beamte/mv" },
      { label: "Niedersachsen", href: "/beamte/ni" },
      { label: "Nordrhein-Westfalen", href: "/beamte/nw" },
      { label: "Rheinland-Pfalz", href: "/beamte/rp" },
      { label: "Saarland", href: "/beamte/sl" },
      { label: "Sachsen", href: "/beamte/sn" },
      { label: "Sachsen-Anhalt", href: "/beamte/st" },
      { label: "Schleswig-Holstein", href: "/beamte/sh" },
      { label: "Thüringen", href: "/beamte/th" },
    ],
  },
  {
    title: "Kirchen & Wohlfahrt",
    links: [
      { label: "Übersicht Wohlfahrt", href: "/wohlfahrt" },
      { label: "Caritas AVR", href: "/wohlfahrt/caritas" },
      { label: "Diakonie AVR DD", href: "/wohlfahrt/diakonie" },
    ],
  },
  {
    title: "Weitere Seiten",
    links: [
      { label: "News", href: "/news" },
      { label: "Jobbörse", href: "/stellen" },
      { label: "Pro", href: "/pro" },
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <Layout activePath="/">
      <div className="text-sm text-gray-400 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-gray-600">Startseite</Link>
        <span>→</span>
        <span className="text-gray-900">Sitemap</span>
      </div>

      <h1 className="text-3xl font-medium text-gray-900 mb-2">Sitemap</h1>
      <p className="text-gray-500 mb-10">Alle Seiten von Dienstkompass im Überblick.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SECTIONS.map((section) => (
          <div key={section.title}>
            <h2 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
              {section.title}
            </h2>
            <ul className="space-y-1.5">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
}
