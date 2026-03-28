import Layout from "@/components/Layout";
import Link from "next/link";

type Organisation = {
  name: string;
  desc: string;
  icon: string;
  iconBg: string;
  mitarbeiter: string;
  gueltigAb: string;
  erhoehung: string;
  beschreibung: string;
  href: string;
};

const ORGANISATIONEN: Organisation[] = [
  {
    name: "Caritas AVR",
    desc: "Arbeitsvertragsrichtlinien der Caritas",
    icon: "✝",
    iconBg: "bg-red-50",
    mitarbeiter: "ca. 700.000 Beschäftigte",
    gueltigAb: "01.03.2024",
    erhoehung: "+5,5%",
    beschreibung:
      "Die Caritas ist der größte private Arbeitgeber Deutschlands. Die AVR Caritas orientieren sich am TVöD, weichen aber in einigen Punkten ab. Entgeltgruppen S 1 bis E 15.",
    href: "/wohlfahrt/caritas",
  },
  {
    name: "Diakonie AVR DD",
    desc: "Arbeitsvertragsrichtlinien der Diakonie",
    icon: "✝",
    iconBg: "bg-blue-50",
    mitarbeiter: "ca. 500.000 Beschäftigte",
    gueltigAb: "01.04.2024",
    erhoehung: "+5,5%",
    beschreibung:
      "Die Diakonie als evangelisches Werk hat eigene Arbeitsvertragsrichtlinien (AVR DD). Die Regelungen ähneln dem TVöD SuE für soziale Berufe und haben eigene Zulagen.",
    href: "/wohlfahrt/diakonie",
  },
  {
    name: "AWO",
    desc: "Tarifvertrag AWO",
    icon: "❤",
    iconBg: "bg-orange-50",
    mitarbeiter: "ca. 300.000 Beschäftigte",
    gueltigAb: "01.01.2024",
    erhoehung: "+5,5%",
    beschreibung:
      "Die Arbeiterwohlfahrt (AWO) hat eigene Tarifverträge, die sich regional unterscheiden können. Bundesweit orientieren sich die Entgelte am TVöD.",
    href: "/wohlfahrt/awo",
  },
  {
    name: "DRK",
    desc: "DRK-Reformtarifvertrag",
    icon: "🏥",
    iconBg: "bg-red-50",
    mitarbeiter: "ca. 200.000 Beschäftigte",
    gueltigAb: "01.01.2024",
    erhoehung: "+5,5%",
    beschreibung:
      "Das Deutsche Rote Kreuz hat einen eigenen Tarifvertrag (DRK-RTV). Für Beschäftigte im DRK gelten besondere Regelungen für Rettungsdienst und soziale Einrichtungen.",
    href: "/wohlfahrt/drk",
  },
];

const FAQ = [
  {
    frage: "Was sind AVR (Arbeitsvertragsrichtlinien)?",
    antwort:
      "AVR sind keine klassischen Tarifverträge, sondern Richtlinien, die auf dem kirchlichen Arbeitsrecht basieren. Da kirchliche Einrichtungen das Streikrecht einschränken können, gibt es stattdessen den 'Dritten Weg': Arbeitsrechtliche Kommissionen aus Arbeitgeber- und Arbeitnehmervertretern legen die Bedingungen gemeinsam fest.",
  },
  {
    frage: "Verdiene ich bei Caritas weniger als beim TVöD?",
    antwort:
      "Nicht unbedingt. Die AVR Caritas orientieren sich stark am TVöD. In manchen Bereichen – besonders im Sozial- und Erziehungsdienst (S-Gruppen) – sind die Leistungen vergleichbar oder sogar besser. Caritas bietet zudem betriebliche Altersvorsorge über die KZVK.",
  },
  {
    frage: "Gilt der TVöD bei Wohlfahrtsverbänden?",
    antwort:
      "Nein, direkt gilt der TVöD nur für öffentliche Arbeitgeber (Bund, Länder, Kommunen). Wohlfahrtsverbände wie Caritas, Diakonie, AWO und DRK sind private Arbeitgeber, die eigene Tarifwerke oder AVR haben. Diese orientieren sich jedoch häufig am TVöD.",
  },
  {
    frage: "Was ist der Unterschied zwischen Caritas und Diakonie?",
    antwort:
      "Caritas ist das Sozialwerk der katholischen Kirche, Diakonie das der evangelischen Kirche. Beide sind großartige Arbeitgeber im sozialen Bereich mit ähnlichen AVR-Strukturen. Caritas nutzt die AVR der Caritas, Diakonie die AVR DD (Diakonisches Werk Deutschland).",
  },
  {
    frage: "Welche Zusatzleistungen bieten kirchliche Arbeitgeber?",
    antwort:
      "Kirchliche Arbeitgeber bieten häufig: betriebliche Altersvorsorge (KZVK bei Caritas, EZVK bei Diakonie), Jahressonderzahlung, Kinderzuschlag, Bildungsurlaub und in manchen Fällen kirchenspezifische Zulagen. Außerdem gibt es oft eine starke Gemeinschaftskultur und sinnstiftende Arbeit.",
  },
  {
    frage: "Kann ich bei Caritas oder Diakonie als Nicht-Christ arbeiten?",
    antwort:
      "Grundsätzlich ja, aber das kirchliche Arbeitsrecht erlaubt es Einrichtungen, bei bestimmten Stellen (besonders in Führungspositionen oder im Verkündigungsbereich) eine Kirchenmitgliedschaft vorauszusetzen. In sozialen und pflegerischen Berufen spielt die Konfession meist keine Rolle mehr.",
  },
];

export default function WohlfahrtPage() {
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
    <Layout activePath="/wohlfahrt/caritas">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-6 flex items-center gap-1 flex-wrap">
        <a href="/" className="hover:text-gray-600">Startseite</a>
        <span>→</span>
        <span className="text-gray-900">Kirchen &amp; Wohlfahrt</span>
      </div>

      <h1 className="text-3xl font-medium text-gray-900 mb-2">
        Kirchen &amp; Wohlfahrt – Tarifrechner
      </h1>
      <p className="text-gray-500 mb-10 max-w-2xl">
        Entgelttabellen und Rechner für Beschäftigte bei Caritas, Diakonie, AWO und DRK.
      </p>

      {/* Organisation cards – 2x2 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {ORGANISATIONEN.map((org) => (
          <div
            key={org.name}
            className="border border-gray-100 rounded-xl p-6 flex flex-col gap-4 hover:border-gray-200 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg ${org.iconBg} flex items-center justify-center text-lg flex-shrink-0`}
                >
                  {org.icon}
                </div>
                <div>
                  <h2 className="text-base font-medium text-gray-900">{org.name}</h2>
                  <div className="text-xs text-gray-400">{org.desc}</div>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xl font-medium text-green-600">{org.erhoehung}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span>{org.mitarbeiter}</span>
              <span>·</span>
              <span>ab {org.gueltigAb}</span>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed flex-1">{org.beschreibung}</p>

            <Link
              href={org.href}
              className="text-center text-sm bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Zum Rechner
            </Link>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <h2 className="text-xl font-medium text-gray-900 mb-6">
          Häufige Fragen zu Kirche &amp; Wohlfahrt
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
          Wohlfahrtsverbände als Arbeitgeber – AVR, Kirchenrecht und Tarifverträge
        </h2>
        <div className="text-gray-500 space-y-4 text-sm leading-relaxed max-w-3xl">
          <p>
            Die freie Wohlfahrtspflege in Deutschland umfasst rund 1,7 Millionen Beschäftigte und
            ist damit einer der größten Arbeitgebersektoren überhaupt. Die sechs Spitzenverbände –
            Caritas, Diakonie, AWO, DRK, Paritätischer Wohlfahrtsverband und Zentralwohlfahrtsstelle
            der Juden in Deutschland – betreiben Krankenhäuser, Pflegeeinrichtungen, Kitas,
            Beratungsstellen und viele weitere soziale Einrichtungen.
          </p>
          <p>
            Anders als öffentliche Arbeitgeber (Bund, Länder, Kommunen) sind Wohlfahrtsverbände
            privatrechtliche Träger. Für sie gilt nicht unmittelbar der Tarifvertrag für den
            öffentlichen Dienst (TVöD), sondern eigene Tarifverträge oder – bei kirchlichen
            Trägern – Arbeitsvertragsrichtlinien (AVR). Trotzdem orientieren sich die meisten
            Entgeltsysteme inhaltlich und strukturell am TVöD.
          </p>
          <p>
            Das kirchliche Arbeitsrecht, auch als "Dritter Weg" bezeichnet, unterscheidet sich
            grundlegend vom staatlichen Arbeitsrecht. Während im privaten und öffentlichen Sektor
            Tarifverträge durch Verhandlungen zwischen Gewerkschaften und Arbeitgebern entstehen
            (Erster und Zweiter Weg), werden AVR in paritätisch besetzten Arbeitsrechtlichen
            Kommissionen beschlossen. Streiks sind in kirchlichen Einrichtungen grundsätzlich
            nicht zulässig. Dafür haben Arbeitnehmervertreter in den Kommissionen echte
            Mitbestimmungsrechte.
          </p>
          <p>
            Die Caritas, das Sozialwerk der katholischen Kirche, ist mit rund 700.000 Beschäftigten
            der größte private Arbeitgeber Deutschlands. Die AVR Caritas kennen eigene
            Entgeltgruppen für den Sozial- und Erziehungsdienst (S-Gruppen), die dem TVöD SuE
            ähneln. Zusätzlich erhalten Caritas-Beschäftigte eine betriebliche Altersvorsorge über
            die Kirchliche Zusatzversorgungskasse (KZVK).
          </p>
          <p>
            Die Diakonie, das evangelische Gegenstück, beschäftigt rund 500.000 Menschen. Die AVR
            DD (Diakonisches Werk Deutschland) regeln Vergütung, Arbeitszeit und Urlaub ähnlich
            wie die AVR Caritas. Die betriebliche Altersvorsorge erfolgt hier über die Evangelische
            Zusatzversorgungskasse (EZVK). In manchen Landeskirchen und diakonischen Werken
            gelten regionale Sonderregelungen.
          </p>
          <p>
            AWO und DRK sind hingegen säkulare Verbände mit klassischen Tarifverträgen. Die
            Arbeiterwohlfahrt hat bundesweit Tarifverträge abgeschlossen, die sich am TVöD
            orientieren. Das Deutsche Rote Kreuz arbeitet mit dem DRK-Reformtarifvertrag (DRK-RTV),
            der besondere Regelungen für den Rettungsdienst enthält. Beide Verbände unterliegen
            dem regulären Arbeitskampfrecht – Streiks sind möglich.
          </p>
          <p>
            Für alle vier Verbände bietet dienstkompass.de Gehaltsrechner an. Die Rechner
            verwenden die aktuellen Entgelttabellen der jeweiligen AVR bzw. Tarifverträge. Da
            regionale und einrichtungsspezifische Zulagen stark variieren können, stellen die
            ausgewiesenen Beträge Orientierungswerte dar.
          </p>
        </div>
      </div>
    </Layout>
  );
}
