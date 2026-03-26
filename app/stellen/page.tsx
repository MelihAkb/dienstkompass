import Layout from "@/components/Layout";

const JOBS = [
  {
    id: 1,
    titel: "Verwaltungsfachangestellte/r (m/w/d)",
    arbeitgeber: "Stadtverwaltung München",
    ort: "München, Bayern",
    tarif: "TVöD VKA",
    eg: "E 9a",
    vertragsart: "Vollzeit",
    datum: "25. März 2026",
    tags: ["Verwaltung", "TVöD", "Kommunen"],
    href: "https://www.muenchen.de/jobs",
    extern: true,
  },
  {
    id: 2,
    titel: "Erzieher/in (m/w/d) für Kindertagesstätte",
    arbeitgeber: "Caritasverband München",
    ort: "München, Bayern",
    tarif: "Caritas AVR",
    eg: "S 6",
    vertragsart: "Vollzeit / Teilzeit",
    datum: "24. März 2026",
    tags: ["Erzieher", "Kita", "Caritas"],
    href: "https://caritas.de/jobs",
    extern: true,
  },
  {
    id: 3,
    titel: "Ingenieur/in Tiefbau (m/w/d)",
    arbeitgeber: "Landkreis Hannover",
    ort: "Hannover, Niedersachsen",
    tarif: "TVöD VKA",
    eg: "E 11",
    vertragsart: "Vollzeit",
    datum: "23. März 2026",
    tags: ["Ingenieur", "Tiefbau", "TVöD"],
    href: "https://hannover.de/jobs",
    extern: true,
  },
  {
    id: 4,
    titel: "Lehrer/in für Mathematik und Physik (m/w/d)",
    arbeitgeber: "Freistaat Bayern",
    ort: "Nürnberg, Bayern",
    tarif: "TV-L",
    eg: "E 13",
    vertragsart: "Vollzeit",
    datum: "22. März 2026",
    tags: ["Lehrer", "TV-L", "Bayern"],
    href: "https://stellen.bayern.de",
    extern: true,
  },
  {
    id: 5,
    titel: "Sachbearbeiter/in Sozialleistungen (m/w/d)",
    arbeitgeber: "Jobcenter Berlin Mitte",
    ort: "Berlin",
    tarif: "TVöD Bund",
    eg: "E 8",
    vertragsart: "Vollzeit",
    datum: "21. März 2026",
    tags: ["Sachbearbeitung", "Soziales", "Berlin"],
    href: "https://jobcenter.berlin.de/jobs",
    extern: true,
  },
  {
    id: 6,
    titel: "Polizeivollzugsbeamter/in (m/w/d)",
    arbeitgeber: "Polizei NRW",
    ort: "Düsseldorf, NRW",
    tarif: "Beamte",
    eg: "A 7",
    vertragsart: "Vollzeit",
    datum: "20. März 2026",
    tags: ["Polizei", "Beamte", "NRW"],
    href: "https://polizei.nrw/karriere",
    extern: true,
  },
  {
    id: 7,
    titel: "IT-Systemadministrator/in (m/w/d)",
    arbeitgeber: "Bundesministerium des Innern",
    ort: "Berlin",
    tarif: "TVöD Bund",
    eg: "E 10",
    vertragsart: "Vollzeit",
    datum: "19. März 2026",
    tags: ["IT", "TVöD Bund", "Berlin"],
    href: "https://bmi.bund.de/karriere",
    extern: true,
  },
  {
    id: 8,
    titel: "Pflegefachkraft (m/w/d) Intensivstation",
    arbeitgeber: "Universitätsklinikum Hamburg-Eppendorf",
    ort: "Hamburg",
    tarif: "TV-L",
    eg: "P 8",
    vertragsart: "Vollzeit / Teilzeit",
    datum: "18. März 2026",
    tags: ["Pflege", "Krankenhaus", "Hamburg"],
    href: "https://uke.de/karriere",
    extern: true,
  },
];

const TARIFE_FILTER = ["Alle", "TVöD VKA", "TVöD Bund", "TV-L", "Beamte", "Caritas AVR"];

export default function JobboersePage() {
  return (
    <Layout activePath="/stellen">
      <div className="text-sm text-gray-400 mb-6">
        <a href="/" className="hover:text-gray-600">Startseite</a> → <span className="text-gray-900">Stellenbörse</span>
      </div>

      <h1 className="text-3xl font-medium text-gray-900 mb-2">Stellenbörse öffentlicher Dienst</h1>
      <p className="text-gray-500 mb-8 max-w-2xl">
        Aktuelle Stellenangebote im öffentlichen Dienst – von Kommunen, Ländern, Bund und sozialen Einrichtungen.
      </p>

      {/* Suche & Filter */}
      <div className="flex gap-3 mb-6 flex-wrap">
        <input
          type="text"
          placeholder="Stelle, Arbeitgeber oder Ort suchen..."
          className="flex-1 min-w-60 border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white text-gray-900 focus:outline-none focus:border-blue-400"
        />
        <select className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white text-gray-900">
          {TARIFE_FILTER.map(t => <option key={t}>{t}</option>)}
        </select>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm hover:bg-blue-700 transition-colors">
          Suchen
        </button>
      </div>

      <div className="text-sm text-gray-400 mb-5">{JOBS.length} Stellen gefunden</div>

      {/* Jobs */}
      <div className="space-y-3 mb-12">
        {JOBS.map(job => (
          <a
            key={job.id}
            href={job.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-md">{job.tarif}</span>
                  <span className="bg-gray-50 text-gray-600 text-xs px-2 py-0.5 rounded-md">{job.eg}</span>
                  <span className="bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded-md">{job.vertragsart}</span>
                </div>
                <h2 className="text-base font-medium text-gray-900 mb-1">{job.titel}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>🏢 {job.arbeitgeber}</span>
                  <span>📍 {job.ort}</span>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xs text-gray-400 mb-2">{job.datum}</div>
                <span className="text-xs text-blue-600 border border-blue-100 px-3 py-1 rounded-lg hover:bg-blue-50">
                  Zur Stelle →
                </span>
              </div>
            </div>
            <div className="flex gap-2 mt-3 flex-wrap">
              {job.tags.map(t => (
                <span key={t} className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>

      {/* Stellenanzeige schalten */}
      <div className="bg-gray-50 rounded-xl p-8 text-center">
        <h2 className="text-lg font-medium text-gray-900 mb-2">Stelle ausschreiben?</h2>
        <p className="text-gray-500 text-sm mb-4">Erreiche monatlich tausende Fachkräfte im öffentlichen Dienst.</p>
        <a href="mailto:anzeigen@dienstkompass.de" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm hover:bg-blue-700 transition-colors inline-block">
          Stellenanzeige schalten
        </a>
      </div>
    </Layout>
  );
}
