import Layout from "@/components/Layout";
import Link from "next/link";

const TABELLEN = {
  aktuell: {
    id: "2024",
    label: "AKTUELL",
    labelColor: "bg-green-50 text-green-700",
    titel: "Beamte Baden-Württemberg 2024",
    gueltigAb: "01.03.2024",
    gueltigBis: null,
    erhoehung: "+3,0%",
    details: "Besoldungsanpassung Baden-Württemberg 2024.",
  },
};

const ARCHIV = [
  {
    id: "2023",
    titel: "Beamte Baden-Württemberg 2023",
    gueltigAb: "01.01.2023",
    gueltigBis: "28.02.2024",
    erhoehung: "+3,0%",
  },
  {
    id: "2022",
    titel: "Beamte Baden-Württemberg 2022",
    gueltigAb: "01.01.2022",
    gueltigBis: "31.12.2022",
    erhoehung: "+3,0%",
  },
  {
    id: "2021",
    titel: "Beamte Baden-Württemberg 2021",
    gueltigAb: "01.01.2021",
    gueltigBis: "31.12.2021",
    erhoehung: "+3,0%",
  },
];

export default function Page() {
  return (
    <Layout activePath="/beamte/bw">
      <div className="mb-6">
        <nav className="text-sm text-gray-400 flex items-center gap-1">
          <Link href="/" className="hover:text-gray-600">Startseite</Link>
          <span>→</span>
          <Link href="/beamte" className="hover:text-gray-600">Beamte</Link>
          <span>→</span>
          <span>Baden-Württemberg</span>
        </nav>
      </div>

      <h1 className="text-3xl font-medium text-gray-900 mb-2">Beamte Baden-Württemberg</h1>
      <p className="text-gray-500 mb-10 max-w-2xl">
        Übersicht über die Besoldung für Beamte in Baden-Württemberg (A-Besoldung). Berechne deine Bezüge mit unserem Rechner.
      </p>

      {/* Aktuell/Zukünftig */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {Object.entries(TABELLEN).map(([key, tabelle]) => (
          <Link
            key={key}
            href={`/beamte/bw/${tabelle.id}`}
            className="block border border-gray-100 rounded-xl p-6 hover:border-blue-200 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className={`text-xs px-3 py-1 rounded-md ${tabelle.labelColor}`}>
                {tabelle.label}
              </span>
              <span className="text-gray-400 text-sm">ab {tabelle.gueltigAb}</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{tabelle.titel}</h3>
            <p className="text-sm text-gray-600 mb-3">{tabelle.details}</p>
            <div className="text-sm text-blue-600 font-medium">Zum Rechner →</div>
          </Link>
        ))}
      </div>

      {/* Archiv */}
      <div className="mb-12">
        <h2 className="text-xl font-medium text-gray-900 mb-6">Archiv</h2>
        <div className="space-y-3">
          {ARCHIV.map(archiv => (
            <Link
              key={archiv.id}
              href={`/beamte/bw/${archiv.id}`}
              className="block border border-gray-100 rounded-lg p-4 hover:border-blue-200 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{archiv.titel}</h3>
                  <p className="text-sm text-gray-600">Gültig {archiv.gueltigAb} bis {archiv.gueltigBis}</p>
                </div>
                <div className="text-blue-600 text-sm font-medium">Zum Rechner →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-medium text-blue-900 mb-2">Besoldung in Baden-Württemberg</h3>
        <p className="text-blue-800 text-sm">
          Die Besoldung für Beamte in Baden-Württemberg richtet sich nach dem Landesbesoldungsgesetz. 
          Die A-Besoldung umfasst die Besoldungsgruppen A 2 bis A 16 mit verschiedenen Stufen.
        </p>
      </div>
    </Layout>
  );
}
