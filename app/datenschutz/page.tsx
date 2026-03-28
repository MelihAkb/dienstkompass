import Layout from "@/components/Layout";

export const metadata = {
  title: "Datenschutzerklärung – Dienstkompass",
  description: "Datenschutzerklärung von Dienstkompass",
  robots: "noindex, nofollow",
};

export default function DatenschutzPage() {
  return (
    <Layout activePath="/datenschutz">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-6 flex items-center gap-1">
        <a href="/" className="hover:text-gray-600">Startseite</a>
        <span>→</span>
        <span className="text-gray-900">Datenschutz</span>
      </div>

      <h1 className="text-3xl font-medium text-gray-900 mb-2">Datenschutzerklärung</h1>
      <p className="text-gray-500 mb-10 max-w-2xl">
        Stand: März 2025
      </p>

      <div className="max-w-2xl space-y-4">

        <div className="border border-gray-100 rounded-xl p-6">
          <h2 className="text-base font-medium text-gray-900 mb-3">1. Verantwortlicher</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            [DEIN VOLLSTÄNDIGER NAME]<br />
            [DEINE STRASSE UND HAUSNUMMER]<br />
            [PLZ ORT]<br />
            E-Mail:{" "}
            <a href="mailto:melih@akbiyik.eu" className="text-blue-600 hover:underline">
              melih@akbiyik.eu
            </a>
          </p>
        </div>

        <div className="border border-gray-100 rounded-xl p-6">
          <h2 className="text-base font-medium text-gray-900 mb-3">2. Allgemeines zur Datenverarbeitung</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung. Die Nutzung unserer
            Website ist in der Regel ohne Angabe personenbezogener Daten möglich.
          </p>
        </div>

        <div className="border border-gray-100 rounded-xl p-6">
          <h2 className="text-base font-medium text-gray-900 mb-3">3. Hosting</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Diese Website wird auf Servern der <strong className="text-gray-700">Hetzner Online GmbH</strong>,
            Industriestr. 25, 91710 Gunzenhausen, Deutschland gehostet. Beim Aufruf unserer
            Website werden automatisch Informationen in Server-Log-Dateien gespeichert
            (IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Uhrzeit). Diese Daten sind
            nicht bestimmten Personen zuordenbar und werden nicht mit anderen Datenquellen
            zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </div>

        <div className="border border-gray-100 rounded-xl p-6">
          <h2 className="text-base font-medium text-gray-900 mb-3">4. Cookies</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Unsere Website verwendet Cookies. Ein Teil der Cookies ist technisch notwendig
            (z. B. für die Zahlungsabwicklung). Weitere Cookies werden nur mit Ihrer
            Einwilligung gesetzt (z. B. für Analyse und Werbung). Sie können Ihre
            Cookie-Einstellungen jederzeit in Ihrem Browser verwalten.
          </p>
        </div>

        <div className="border border-gray-100 rounded-xl p-6">
          <h2 className="text-base font-medium text-gray-900 mb-3">5. Google Analytics</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Diese Website nutzt <strong className="text-gray-700">Google Analytics</strong>,
            einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street,
            Dublin 4, Irland. Google Analytics verwendet Cookies, die eine Analyse der
            Benutzung der Website ermöglichen. Wir nutzen Google Analytics mit aktivierter
            IP-Anonymisierung (anonymizeIp). Google Analytics wird nur mit Ihrer Einwilligung
            eingesetzt (Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO). Weitere Informationen:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              policies.google.com/privacy
            </a>
            .
          </p>
        </div>

        <div className="border border-gray-100 rounded-xl p-6">
          <h2 className="text-base font-medium text-gray-900 mb-3">6. Werbeanzeigen (Ezoic)</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Diese Website nutzt <strong className="text-gray-700">Ezoic</strong> (Ezoic Inc.,
            6023 Innovation Way, Carlsbad, CA 92009, USA) zur Ausspielung von Werbeanzeigen.
            Ezoic verwendet Cookies und ähnliche Technologien, um Ihnen personalisierte Werbung
            anzuzeigen und die Performance der Anzeigen zu messen. Die dabei verarbeiteten Daten
            können in die USA übermittelt werden. Rechtsgrundlage ist Ihre Einwilligung gemäß
            Art. 6 Abs. 1 lit. a DSGVO. Weitere Informationen:{" "}
            <a
              href="https://www.ezoic.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ezoic.com/privacy-policy
            </a>
            .
          </p>
        </div>

        <div className="border border-gray-100 rounded-xl p-6">
          <h2 className="text-base font-medium text-gray-900 mb-3">7. Zahlungsabwicklung (Stripe)</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Für die Abwicklung von Zahlungen nutzen wir den Dienst{" "}
            <strong className="text-gray-700">Stripe</strong> (Stripe Payments Europe, Ltd.,
            1 Grand Canal Street Lower, Grand Canal Dock, Dublin, D02 H210, Irland). Bei einer
            Zahlung werden Ihre Zahlungsdaten direkt an Stripe übermittelt und dort verarbeitet.
            Wir selbst speichern keine vollständigen Zahlungsdaten. Stripe ist nach dem
            PCI-DSS-Standard zertifiziert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
            Weitere Informationen:{" "}
            <a
              href="https://stripe.com/de/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              stripe.com/de/privacy
            </a>
            .
          </p>
        </div>

        <div className="border border-gray-100 rounded-xl p-6">
          <h2 className="text-base font-medium text-gray-900 mb-3">8. Ihre Rechte</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-3">
            Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
          </p>
          <ul className="text-sm text-gray-500 space-y-1.5">
            {[
              "Recht auf Auskunft (Art. 15 DSGVO)",
              "Recht auf Berichtigung (Art. 16 DSGVO)",
              "Recht auf Löschung (Art. 17 DSGVO)",
              "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
              "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
              "Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
              "Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)",
            ].map((right) => (
              <li key={right} className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">·</span>
                {right}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 leading-relaxed mt-3">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a href="mailto:melih@akbiyik.eu" className="text-blue-600 hover:underline">
              melih@akbiyik.eu
            </a>
          </p>
        </div>

        <div className="border border-gray-100 rounded-xl p-6">
          <h2 className="text-base font-medium text-gray-900 mb-3">9. Aktualität</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2025. Durch
            die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher Vorgaben
            kann es notwendig werden, diese Datenschutzerklärung zu ändern.
          </p>
        </div>

      </div>
    </Layout>
  );
}
