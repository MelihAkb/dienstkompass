import Layout from "@/components/Layout";
import Link from "next/link";

const TOOLS = [
  { icon: "💰", bg: "bg-blue-50", title: "Gehaltsrechner", desc: "Brutto & Netto für alle Tarifverträge", href: "/tvoed/vka" },
  { icon: "📋", bg: "bg-green-50", title: "Abrechnung prüfen", desc: "KI prüft ob deine Abrechnung stimmt", href: "/pro" },
  { icon: "📊", bg: "bg-amber-50", title: "Entgelttabellen", desc: "Aktuelle Tabellen für alle Tarife", href: "/tvoed" },
  { icon: "🎯", bg: "bg-pink-50", title: "Eingruppierung", desc: "Welche Entgeltgruppe steht dir zu?", href: "/eingruppierung" },
  { icon: "⚖️", bg: "bg-teal-50", title: "Beamter vs. Angestellter", desc: "Was ist langfristig besser?", href: "/vergleich" },
  { icon: "📈", bg: "bg-purple-50", title: "Stufenrechner", desc: "Wann steigst du auf?", href: "/stufenrechner" },
];

const TARIFE = [
  { name: "TVöD Bund", desc: "Bundesverwaltung", href: "/tvoed/bund" },
  { name: "TVöD VKA", desc: "Kommunen", href: "/tvoed/vka" },
  { name: "TVöD SuE", desc: "Sozial & Erziehung", href: "/tvoed/sue" },
  { name: "TVöD-P", desc: "Pflege", href: "/tvoed/p" },
  { name: "TVöD-S", desc: "Sparkassen", href: "/tvoed/s" },
  { name: "TV-L", desc: "Bundesländer", href: "/tv-l/allgemein" },
  { name: "Bundesbeamte", desc: "A-Besoldung", href: "/beamte/bund" },
  { name: "Caritas AVR", desc: "Kirche & Wohlfahrt", href: "/wohlfahrt/caritas" },
  { name: "Diakonie AVR", desc: "Kirche & Wohlfahrt", href: "/wohlfahrt/diakonie" },
];

export default function Home() {
  return (
    <Layout activePath="/">
      {/* Hero */}
      <div className="max-w-2xl mb-12">
        <div className="inline-block bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-md mb-4">
          Dein Kompass im öffentlichen Dienst
        </div>
        <h1 className="text-4xl font-medium text-gray-900 leading-tight mb-4">
          Dein Gehalt im{" "}
          <span className="text-blue-600">öffentlichen Dienst</span>
          {" "}– verstehen, prüfen, optimieren
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed mb-8">
          Entgelttabellen, Gehaltsrechner und ein KI-Assistent der deine Fragen sofort beantwortet. Für Beamte und Tarifbeschäftigte.
        </p>
        <div className="flex gap-8 mt-8 flex-wrap">
          {[{ num: "20+", label: "Tarifverträge" }, { num: "16", label: "Bundesländer" }, { num: "5 Mio.", label: "Beschäftigte" }, { num: "KI", label: "Assistent" }].map(s => (
            <div key={s.label} className="text-center">
              <div className="text-xl font-medium text-gray-900">{s.num}</div>
              <div className="text-sm text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* Tools */}
      <div className="mb-12">
        <div className="text-xs text-blue-600 font-medium uppercase tracking-wide mb-2">Tools</div>
        <h2 className="text-2xl font-medium text-gray-900 mb-2">Alles was du brauchst</h2>
        <p className="text-gray-500 mb-6">Kostenlose Tools für Beschäftigte im öffentlichen Dienst</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {TOOLS.map(t => (
            <Link key={t.title} href={t.href} className="border border-gray-100 rounded-xl p-5 hover:border-gray-200 hover:shadow-sm transition-all">
              <div className={`w-9 h-9 ${t.bg} rounded-lg flex items-center justify-center text-base mb-3`}>{t.icon}</div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">{t.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* KI Assistent */}
      <div className="mb-12">
        <div className="text-xs text-blue-600 font-medium uppercase tracking-wide mb-2">KI-Assistent</div>
        <h2 className="text-2xl font-medium text-gray-900 mb-2">Frag einfach – bekomm eine Antwort</h2>
        <p className="text-gray-500 mb-6">Kein Forum, kein langes Suchen. Stelle deine Frage und bekomme sofort eine präzise Antwort.</p>
        <div className="border border-gray-100 rounded-xl p-5 max-w-2xl">
          <div className="flex gap-3 mb-4 items-start">
            <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-500 flex-shrink-0">Du</div>
            <div className="bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-900">
              Was verdiene ich als Erzieher EG S8 Stufe 3 netto in Bayern?
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs text-white flex-shrink-0">KI</div>
            <div className="bg-blue-50 rounded-xl px-4 py-3 text-sm text-blue-800 leading-relaxed">
              Als Erzieher in EG S8 Stufe 3 nach TVöD SuE beträgt dein Bruttogehalt 3.747 €. Nach Abzug von Steuern und Sozialabgaben in Bayern bleiben dir ca. 2.580 € netto. Ab Mai 2026 steigt dein Gehalt um 2,8%.
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-gray-100 mb-10" />

      {/* Tarifverträge */}
      <div className="mb-12">
        <div className="text-xs text-blue-600 font-medium uppercase tracking-wide mb-2">Tarifverträge</div>
        <h2 className="text-2xl font-medium text-gray-900 mb-2">Alle Tarifverträge im Überblick</h2>
        <p className="text-gray-500 mb-6">Wähle deinen Tarifvertrag für aktuelle Tabellen und Rechner</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {TARIFE.map(t => (
            <Link key={t.name} href={t.href} className="border border-gray-100 rounded-xl p-4 hover:border-blue-300 transition-colors">
              <div className="text-sm font-medium text-gray-900 mb-1">{t.name}</div>
              <div className="text-xs text-gray-400">{t.desc}</div>
              <div className="text-xs text-blue-600 mt-2">→ Zum Rechner</div>
            </Link>
          ))}
        </div>
      </div>

    </Layout>
  );
}
