export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3" fill="white"/>
              <line x1="8" y1="1" x2="8" y2="4" stroke="white" strokeWidth="1.5"/>
              <line x1="8" y1="12" x2="8" y2="15" stroke="white" strokeWidth="1.5"/>
              <line x1="1" y1="8" x2="4" y2="8" stroke="white" strokeWidth="1.5"/>
              <line x1="12" y1="8" x2="15" y2="8" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          <span className="font-medium text-gray-900">Dienstkompass</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">TVöD</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">TV-L</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Beamte</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Rechner</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">News</a>
        </div>
        <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Kostenlos starten
        </button>
      </nav>

      {/* Hero */}
      <div className="max-w-3xl mx-auto text-center px-8 py-16">
        <div className="inline-block bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-md mb-5">
          Dein Kompass im öffentlichen Dienst
        </div>
        <h1 className="text-4xl font-medium text-gray-900 leading-tight mb-4">
          Dein Gehalt im{" "}
          <span className="text-blue-600">öffentlichen Dienst</span>
          {" "}– verstehen, prüfen, optimieren
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-xl mx-auto mb-8">
          Entgelttabellen, Gehaltsrechner und ein KI-Assistent der deine Fragen sofort beantwortet. Für Beamte und Tarifbeschäftigte.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm hover:bg-blue-700 transition-colors">
            Gehalt berechnen
          </button>
          <button className="border border-gray-200 text-gray-900 px-6 py-3 rounded-lg text-sm hover:bg-gray-50 transition-colors">
            Abrechnung prüfen lassen
          </button>
        </div>
        <div className="flex gap-8 justify-center mt-10 flex-wrap">
          {[
            { num: "20+", label: "Tarifverträge" },
            { num: "16", label: "Bundesländer" },
            { num: "5 Mio.", label: "Beschäftigte" },
            { num: "KI", label: "Assistent" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl font-medium text-gray-900">{s.num}</div>
              <div className="text-sm text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-gray-100 mx-8" />

      {/* Tools */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="text-xs text-blue-600 font-medium uppercase tracking-wide mb-2">Tools</div>
        <h2 className="text-2xl font-medium text-gray-900 mb-2">Alles was du brauchst</h2>
        <p className="text-gray-500 mb-8">Kostenlose Tools für Beschäftigte im öffentlichen Dienst</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { icon: "💰", bg: "bg-blue-50", title: "Gehaltsrechner", desc: "Brutto & Netto für alle Tarifverträge berechnen" },
            { icon: "📋", bg: "bg-green-50", title: "Abrechnung prüfen", desc: "KI prüft ob deine Abrechnung korrekt ist" },
            { icon: "📊", bg: "bg-amber-50", title: "Entgelttabellen", desc: "Aktuelle Tabellen für TVöD, TV-L und mehr" },
            { icon: "🎯", bg: "bg-pink-50", title: "Eingruppierung", desc: "Welche Entgeltgruppe steht dir zu?" },
            { icon: "⚖️", bg: "bg-teal-50", title: "Beamter vs. Angestellter", desc: "Was ist langfristig besser für dich?" },
            { icon: "📈", bg: "bg-purple-50", title: "Stufenrechner", desc: "Wann steigst du auf und wie viel mehr?" },
          ].map((t) => (
            <div key={t.title} className="border border-gray-100 rounded-xl p-5 hover:border-gray-200 cursor-pointer transition-colors">
              <div className={`w-9 h-9 ${t.bg} rounded-lg flex items-center justify-center text-base mb-3`}>
                {t.icon}
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">{t.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-gray-100 mx-8" />

      {/* KI Assistent */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="text-xs text-blue-600 font-medium uppercase tracking-wide mb-2">KI-Assistent</div>
        <h2 className="text-2xl font-medium text-gray-900 mb-2">Frag einfach – bekomm eine Antwort</h2>
        <p className="text-gray-500 mb-6">Kein Forum, kein langes Suchen. Stelle deine Frage und bekomme sofort eine präzise Antwort.</p>
        <div className="border border-gray-100 rounded-xl p-5">
          <div className="flex gap-3 mb-4 items-start">
            <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-500 flex-shrink-0">Du</div>
            <div className="bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-900">
              Was verdiene ich als Erzieher EG S8 Stufe 3 netto in Bayern mit Steuerklasse 1?
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs text-white flex-shrink-0">KI</div>
            <div className="bg-blue-50 rounded-xl px-4 py-3 text-sm text-blue-800 leading-relaxed">
              Als Erzieher in EG S8 Stufe 3 nach TVöD SuE beträgt dein Bruttogehalt aktuell 3.747,54 €. Nach Abzug von Steuern und Sozialabgaben in Bayern (Steuerklasse 1) bleiben dir ca. 2.580 € netto. Ab Mai 2026 steigt dein Gehalt um 2,8% auf 3.852 € brutto.
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-gray-100 mx-8" />

      {/* Tarifverträge */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="text-xs text-blue-600 font-medium uppercase tracking-wide mb-2">Tarifverträge</div>
        <h2 className="text-2xl font-medium text-gray-900 mb-2">Alle Tarifverträge im Überblick</h2>
        <p className="text-gray-500 mb-6">Wähle deinen Tarifvertrag für aktuelle Tabellen und Infos</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { name: "TVöD Bund", desc: "Bundesverwaltung" },
            { name: "TVöD VKA", desc: "Kommunen" },
            { name: "TVöD SuE", desc: "Sozial & Erziehung" },
            { name: "TV-L", desc: "Bundesländer" },
            { name: "Beamte", desc: "Alle Bundesländer" },
            { name: "Caritas / Diakonie", desc: "Kirche & Wohlfahrt" },
          ].map((t) => (
            <div key={t.name} className="border border-gray-100 rounded-xl p-4 hover:border-blue-300 cursor-pointer transition-colors">
              <div className="text-sm font-medium text-gray-900 mb-1">{t.name}</div>
              <div className="text-xs text-gray-400">{t.desc}</div>
              <div className="text-xs text-blue-600 mt-2">→ Zur Tabelle</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pro */}
      <div className="mx-8 mb-12 bg-blue-600 rounded-2xl p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="text-xl font-medium text-white mb-2">Dienstkompass Pro</h2>
          <p className="text-blue-200 text-sm mb-4">Alles was du brauchst um kein Geld zu verschenken</p>
          <div className="flex flex-col gap-2">
            {[
              "Gehaltsabrechnung hochladen & prüfen lassen",
              "Unbegrenzter KI-Assistent",
              "Persönlicher Tarifalarm",
              "Besoldungs-Widerspruchs-Guide",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-white">
                <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
                {f}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-medium text-white">4,99 €</div>
          <div className="text-blue-200 text-xs mb-4">pro Monat</div>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors">
            Jetzt starten
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 px-8 py-6 flex justify-between items-center flex-wrap gap-3">
        <span className="text-sm font-medium text-gray-900">Dienstkompass</span>
        <div className="flex gap-5">
          <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Datenschutz</a>
          <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Impressum</a>
          <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Kontakt</a>
        </div>
      </div>
    </div>
  );
}
