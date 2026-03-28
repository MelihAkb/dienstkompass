import Layout from "@/components/Layout";

export const metadata = {
  title: "Impressum – Dienstkompass",
  description: "Impressum von Dienstkompass",
  robots: "noindex, nofollow",
};

export default function ImpressumPage() {
  return (
    <Layout activePath="/impressum">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-6 flex items-center gap-1">
        <a href="/" className="hover:text-gray-600">Startseite</a>
        <span>→</span>
        <span className="text-gray-900">Impressum</span>
      </div>

      <h1 className="text-3xl font-medium text-gray-900 mb-2">Impressum</h1>
      <p className="text-gray-500 mb-10 max-w-2xl">
        Angaben gemäß § 5 TMG
      </p>

      <div className="max-w-2xl space-y-4">

        <div className="border border-gray-100 rounded-xl p-6">
          <h2 className="text-base font-medium text-gray-900 mb-3">Betreiber</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            [DEIN VOLLSTÄNDIGER NAME]<br />
            [DEINE STRASSE UND HAUSNUMMER]<br />
            [PLZ ORT]
          </p>
        </div>

        <div className="border border-gray-100 rounded-xl p-6">
          <h2 className="text-base font-medium text-gray-900 mb-3">Kontakt</h2>
          <p className="text-sm text-gray-600">
            E-Mail:{" "}
            <a href="mailto:melih@akbiyik.eu" className="text-blue-600 hover:underline">
              melih@akbiyik.eu
            </a>
          </p>
        </div>

        <div className="border border-gray-100 rounded-xl p-6">
          <h2 className="text-base font-medium text-gray-900 mb-3">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            [DEIN VOLLSTÄNDIGER NAME]<br />
            [DEINE STRASSE UND HAUSNUMMER]<br />
            [PLZ ORT]
          </p>
        </div>

        <div className="border border-gray-100 rounded-xl p-6 space-y-4">
          <h2 className="text-base font-medium text-gray-900">Haftungsausschluss</h2>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-1">Haftung für Inhalte</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
              Gewähr übernehmen. Die auf dieser Website bereitgestellten Informationen zu
              Tarifen, Gehältern und Besoldung dienen ausschließlich der allgemeinen Information
              und ersetzen keine individuelle rechtliche oder steuerliche Beratung. Alle Angaben
              ohne Gewähr.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-1">Haftung für Links</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der
              jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-1">Urheberrecht</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors.
            </p>
          </div>
        </div>

        <div className="border border-gray-100 rounded-xl p-6">
          <h2 className="text-base font-medium text-gray-900 mb-3">Streitschlichtung</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
            bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

      </div>
    </Layout>
  );
}
