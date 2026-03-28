import Layout from "@/components/Layout";
import Link from "next/link";

const BUNDESBEAMTE = {
  titel: "Bundesbeamte (A-Besoldung)",
  gueltigAb: "01.03.2024",
  erhoehung: "+11,3%",
  beschreibung:
    "A 2 bis A 16. Für Bundesbehörden, Bundeskriminalamt, Bundeswehr (Soldaten), Zoll und alle Bundesbehörden.",
  href_rechner: "/beamte/bund",
  href_tarifrunden: "/beamte/bund/tarifrunden/2024",
};

const LAENDER = [
  { kuerzel: "BW", name: "Baden-Württemberg", href: "/beamte/bw", gueltigAb: "01.03.2024" },
  { kuerzel: "BY", name: "Bayern", href: "/beamte/by", gueltigAb: "01.12.2023" },
  { kuerzel: "BE", name: "Berlin", href: "/beamte/be", gueltigAb: "01.01.2024" },
  { kuerzel: "BB", name: "Brandenburg", href: "/beamte/bb", gueltigAb: "01.01.2024" },
  { kuerzel: "HB", name: "Bremen", href: "/beamte/hb", gueltigAb: "01.01.2024" },
  { kuerzel: "HH", name: "Hamburg", href: "/beamte/hh", gueltigAb: "01.02.2024" },
  { kuerzel: "HE", name: "Hessen", href: "/beamte/he", gueltigAb: "01.04.2024" },
  { kuerzel: "MV", name: "Mecklenburg-Vorpommern", href: "/beamte/mv", gueltigAb: "01.01.2024" },
  { kuerzel: "NI", name: "Niedersachsen", href: "/beamte/ni", gueltigAb: "01.01.2024" },
  { kuerzel: "NW", name: "Nordrhein-Westfalen", href: "/beamte/nw", gueltigAb: "01.04.2024" },
  { kuerzel: "RP", name: "Rheinland-Pfalz", href: "/beamte/rp", gueltigAb: "01.01.2024" },
  { kuerzel: "SL", name: "Saarland", href: "/beamte/sl", gueltigAb: "01.01.2024" },
  { kuerzel: "SN", name: "Sachsen", href: "/beamte/sn", gueltigAb: "01.01.2024" },
  { kuerzel: "ST", name: "Sachsen-Anhalt", href: "/beamte/st", gueltigAb: "01.01.2024" },
  { kuerzel: "SH", name: "Schleswig-Holstein", href: "/beamte/sh", gueltigAb: "01.01.2024" },
  { kuerzel: "TH", name: "Thüringen", href: "/beamte/th", gueltigAb: "01.01.2024" },
];

const FAQ = [
  {
    frage: "Was ist der Unterschied zwischen Beamten und Tarifbeschäftigten?",
    antwort:
      "Beamte stehen in einem besonderen öffentlich-rechtlichen Dienst- und Treueverhältnis zum Staat. Sie erhalten Bezüge (Besoldung) statt Gehalt, haben Beihilfeanspruch statt gesetzlicher Krankenversicherung und sind unkündbar. Tarifbeschäftigte werden nach TVöD oder TV-L entlohnt und sind rentenversicherungspflichtig.",
  },
  {
    frage: "Wie ist die A-Besoldung aufgebaut?",
    antwort:
      "Die A-Besoldung umfasst die Besoldungsgruppen A 2 bis A 16. Jede Gruppe hat mehrere Erfahrungsstufen (meist 6–8). Die Einstufung hängt von der konkreten Funktion ab. Darüber gibt es B-Besoldung für höhere Führungsfunktionen und R-Besoldung für Richter.",
  },
  {
    frage: "Wann bekomme ich als Beamter eine Gehaltserhöhung?",
    antwort:
      "Als Beamter gibt es zwei Arten von Erhöhungen: Stufensteigerungen durch Erfahrungszeit (automatisch nach festgelegten Jahren) und Besoldungsanpassungen durch Gesetz (wenn der Gesetzgeber die Tabellen anhebt). Beamte können nicht streiken und verhandeln keine Tarife.",
  },
  {
    frage: "Gilt die Bundesbesoldung für alle Beamten?",
    antwort:
      "Nein. Bundesbeamte werden nach Bundesbesoldungsrecht besoldet. Landesbeamte hingegen nach dem jeweiligen Landesbesoldungsgesetz. Seit der Föderalismusreform 2006 können die Länder die Beamtenbesoldung selbständig regeln, was zu Unterschieden zwischen den Ländern führt.",
  },
  {
    frage: "Was ist Beihilfe bei Beamten?",
    antwort:
      "Beamte sind nicht gesetzlich krankenversichert, sondern privat krankenversichert. Der Dienstherr übernimmt einen Teil der Krankheitskosten direkt (Beihilfe). Beamte versichern nur den nicht durch Beihilfe gedeckten Anteil. Dies kann im Vergleich zur GKV für Gutverdienende vorteilhaft sein.",
  },
  {
    frage: "Wie unterscheiden sich die Besoldungen der Bundesländer?",
    antwort:
      "Seit der Föderalismusreform können die Bundesländer die Beamtengehälter eigenständig festlegen. Dies führt zu erheblichen Unterschieden: Bayern und Hamburg zahlen tendenziell am höchsten, ostdeutsche Länder und das Saarland liegen eher am unteren Ende. Die Unterschiede betragen in manchen Besoldungsgruppen mehrere hundert Euro monatlich.",
  },
];

export default function BeamtePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.frage,
      acceptedAnswer: { "@type": "Answer", text: f.antwort },
    })),
  };

  return (
    <Layout activePath="/beamte/bund">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-6 flex items-center gap-1 flex-wrap">
        <a href="/" className="hover:text-gray-600">Startseite</a>
        <span>→</span>
        <span className="text-gray-900">Beamte</span>
      </div>

      <h1 className="text-3xl font-medium text-gray-900 mb-2">
        Beamte – Besoldungsrechner für Bund &amp; Länder
      </h1>
      <p className="text-gray-500 mb-10 max-w-2xl">
        Aktuelle Besoldungstabellen und Rechner für Bundesbeamte sowie alle 16 Bundesländer.
        A-Besoldung, Beförderungsämter und Nettobezüge auf einen Blick.
      </p>

      {/* Bundesbeamte – prominent full-width card */}
      <div className="mb-10">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Bundesbeamte</h2>
        <div className="border border-blue-100 rounded-xl p-6 bg-blue-50/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-blue-100 text-blue-700">
                BUND
              </span>
              <span className="text-2xl font-medium text-green-600">{BUNDESBEAMTE.erhoehung}</span>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-1">{BUNDESBEAMTE.titel}</h3>
            <div className="text-sm text-gray-500 mb-2">Gültig ab {BUNDESBEAMTE.gueltigAb}</div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
              {BUNDESBEAMTE.beschreibung}
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:w-48 flex-shrink-0">
            <Link
              href={BUNDESBEAMTE.href_rechner}
              className="text-center text-sm bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Zum Besoldungsrechner
            </Link>
            <Link
              href={BUNDESBEAMTE.href_tarifrunden}
              className="text-center text-sm border border-gray-200 text-gray-700 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Besoldungsanpassungen
            </Link>
          </div>
        </div>
      </div>

      {/* Bundesländer grid */}
      <div className="mb-12">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Alle 16 Bundesländer</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {LAENDER.map((land) => (
            <Link
              key={land.kuerzel}
              href={land.href}
              className="border border-gray-100 rounded-xl p-4 hover:border-blue-200 hover:shadow-sm transition-all flex flex-col gap-1 group"
            >
              <span className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                {land.kuerzel}
              </span>
              <span className="text-xs text-gray-500 leading-snug">{land.name}</span>
              <span className="text-xs text-gray-400 mt-1">ab {land.gueltigAb}</span>
              <span className="text-xs text-blue-600 mt-auto pt-2">→ Zum Rechner</span>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <h2 className="text-xl font-medium text-gray-900 mb-6">
          Häufige Fragen zur Beamtenbesoldung
        </h2>
        <div className="space-y-4">
          {FAQ.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-5">
              <h3 className="text-sm font-medium text-gray-900 mb-2">{item.frage}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.antwort}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SEO text */}
      <div className="border-t border-gray-100 pt-10">
        <h2 className="text-xl font-medium text-gray-900 mb-4">
          Beamtenbesoldung in Deutschland – Bund und Länder im Überblick
        </h2>
        <div className="text-gray-500 space-y-4 text-sm leading-relaxed max-w-3xl">
          <p>
            Die Beamtenbesoldung in Deutschland ist kein einheitliches System, sondern unterteilt
            sich seit der Föderalismusreform 2006 in Bundes- und Landesbesoldung. Während der
            Bund seine rund 180.000 Bundesbeamten nach dem Bundesbesoldungsgesetz (BBesG) besoldet,
            haben die 16 Bundesländer eigene Besoldungsgesetze erlassen. Das führt dazu, dass
            Beamte in Bayern oder Hamburg teils erheblich mehr verdienen als Kollegen in strukturell
            schwächeren Ländern.
          </p>
          <p>
            Die Besoldung gliedert sich in verschiedene Besoldungsgruppen. Die A-Besoldung (A 2 bis
            A 16) gilt für den einfachen, mittleren, gehobenen und höheren allgemeinen Verwaltungsdienst.
            Darüber hinaus gibt es die B-Besoldung (B 1 bis B 11) für leitende Beamte und
            Staatssekretäre, die R-Besoldung (R 1 bis R 10) für Richter und Staatsanwälte sowie die
            W-Besoldung (W 1 bis W 3) für Professoren. Für Soldaten und Offiziere der Bundeswehr gilt
            die A-Besoldung nach dem Soldatenbesoldungsgesetz.
          </p>
          <p>
            Innerhalb jeder Besoldungsgruppe steigen Beamte im Laufe ihrer Dienstzeit durch
            Erfahrungsstufen auf. Die Einstufung richtet sich dabei nach der Dienstzeit sowie
            anerkannten Vordienstzeiten. Das Alimentationsprinzip verpflichtet den Dienstherrn,
            Beamte und ihre Familien amtsangemessen zu versorgen – lebenslang, also auch im
            Ruhestand als Pension. Dies unterscheidet Beamte fundamental von Tarifbeschäftigten,
            die Rente beziehen.
          </p>
          <p>
            Ein weiterer zentraler Unterschied: Beamte sind beihilfeberechtigt. Der Dienstherr
            übernimmt je nach Familienstand 50 bis 80 Prozent der Krankheitskosten direkt als
            Beihilfe. Den verbleibenden Anteil decken Beamte mit einer privaten Krankenversicherung
            ab, die für die meisten günstiger ist als die gesetzliche Krankenversicherung für
            vergleichbare Tarifbeschäftigte.
          </p>
          <p>
            Für die Besoldungsrechner auf dienstkompass.de werden die Grundgehälter der jeweiligen
            Besoldungstabelle verwendet. Der Rechner zeigt das Bruttogrundgehalt je Besoldungsgruppe
            und Stufe. Zulagen wie Familienzuschläge, Stellenzulagen oder besondere Erschwerniszulagen
            sind individuell und nicht Bestandteil der Tabelle. Die Netto-Schätzung ist ein
            Richtwert und ersetzt keine individuelle Steuer- und Sozialversicherungsberatung.
          </p>
          <p>
            Aktuell liegen vollständige Besoldungsrechner für den Bund sowie für Bayern, Baden-
            Württemberg und Nordrhein-Westfalen vor. Die übrigen 13 Bundesländer werden schrittweise
            ergänzt. Alle Rechner werden zeitnah nach offiziellen Besoldungsanpassungen aktualisiert.
          </p>
        </div>
      </div>
    </Layout>
  );
}
