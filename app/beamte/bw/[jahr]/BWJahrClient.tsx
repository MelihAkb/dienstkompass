"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import {
  EntgeltTabelle,
  STUFEN,
  BUNDESLAENDER,
  fmt,
  berechneNetto,
  getBrutto,
} from "@/lib/tarifDaten";
import { BEAMTE_BW_2021, BEAMTE_BW_2022, BEAMTE_BW_2023, BEAMTE_BW_2024 } from "@/lib/beamteLaender";

// ─── Tabellendaten ────────────────────────────────────────────────────────────

const TABELLEN: Record<string, {
  tabelle: EntgeltTabelle;
  gueltigAb: string;
  gueltigBis: string | null;
  erhoehung: string;
  status: "aktuell" | "zukuenftig" | "archiv";
}> = {
  "2024": {
    status: "aktuell",
    gueltigAb: "01.03.2024",
    gueltigBis: null,
    erhoehung: "+3,0%",
    tabelle: BEAMTE_BW_2024,
  },
  "2023": {
    status: "archiv",
    gueltigAb: "01.01.2023",
    gueltigBis: "28.02.2024",
    erhoehung: "+3,0%",
    tabelle: BEAMTE_BW_2023,
  },
  "2022": {
    status: "archiv",
    gueltigAb: "01.01.2022",
    gueltigBis: "31.12.2022",
    erhoehung: "+3,0%",
    tabelle: BEAMTE_BW_2022,
  },
  "2021": {
    status: "archiv",
    gueltigAb: "01.01.2021",
    gueltigBis: "31.12.2021",
    erhoehung: "+3,0%",
    tabelle: BEAMTE_BW_2021,
  },
};

export default function BWJahrClient({ jahr }: { jahr: string }) {
  const tabelleData = TABELLEN[jahr];
  if (!tabelleData) return <div> Jahr nicht gefunden </div>;

  const { tabelle, gueltigAb, gueltigBis, erhoehung, status } = tabelleData;

  const gruppen = Object.keys(tabelle);
  const [eg, setEg] = useState(gruppen[Math.floor(gruppen.length / 2)] ?? gruppen[0]);
  const [stufe, setStufe] = useState("3");
  const [bundesland, setBundesland] = useState("Baden-Württemberg");
  const [steuerklasse, setSteuerklasse] = useState("1");
  const [kinder, setKinder] = useState(0);
  const [kirche, setKirche] = useState(false);
  const [stunden, setStunden] = useState(39);
  const [ergebnis, setErgebnis] = useState<ReturnType<typeof berechneNetto> | null>(null);
  const [brutto, setBrutto] = useState(0);
  const [aktivZelle, setAktivZelle] = useState<{ eg: string; stufe: string } | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  function berechnen(eOverride?: string, sOverride?: string) {
    const e = eOverride ?? eg;
    const s = sOverride ?? stufe;
    const b = getBrutto(tabelle, e, s, stunden);
    setBrutto(b);
    setErgebnis(berechneNetto(b, steuerklasse, bundesland, kinder, kirche));
  }

  function tabelleKlick(e: string, s: string) {
    setEg(e);
    setStufe(s);
    setAktivZelle({ eg: e, stufe: s });
    berechnen(e, s);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const jahressonderzahlung = 0; // Beamte haben keine Sonderzahlung wie TVöD
  const jahresBrutto = brutto * 12 + jahressonderzahlung;
  const jahresNetto = ergebnis ? ergebnis.netto * 12 : 0;

  // Stufenvergleich für aktuelle EG
  const stufenVergleich = ergebnis ? STUFEN.map(s => {
    const b = getBrutto(tabelle, eg, s, stunden);
    const n = berechneNetto(b, steuerklasse, bundesland, kinder, kirche);
    return { stufe: s, brutto: b, netto: n.netto, aktiv: s === stufe };
  }) : [];

  return (
    <Layout activePath={`/beamte/bw/${jahr}`}>
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-6 flex items-center gap-1 flex-wrap">
        <Link href="/" className="hover:text-gray-600">Startseite</Link>
        <span>→</span>
        <Link href="/beamte" className="hover:text-gray-600">Beamte</Link>
        <span>→</span>
        <Link href="/beamte/bw" className="hover:text-gray-600">Baden-Württemberg</Link>
        <span>→</span>
        <span>{jahr}</span>
      </div>

      <div className="mb-3">
        <span className={`text-xs px-3 py-1 rounded-md ${
          status === "aktuell" ? "bg-green-50 text-green-700" :
          status === "zukuenftig" ? "bg-amber-50 text-amber-700" :
          "bg-gray-50 text-gray-700"
        }`}>
          {status === "aktuell" ? "AKTUELL" : status === "zukuenftig" ? "ZUKÜNFTIG" : "ARCHIV"}
        </span>
      </div>
      <h1 className="text-3xl font-medium text-gray-900 mb-2">Beamte Baden-Württemberg {jahr}</h1>
      <p className="text-gray-500 mb-10 max-w-2xl">
        Berechne deine Nettobezüge als Landesbeamter in Baden-Württemberg (A-Besoldung) für {jahr}.
      </p>

      {/* Rechner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Eingaben */}
        <div className="border border-gray-100 rounded-xl p-6">
          <h2 className="text-base font-medium text-gray-900 mb-5">Deine Angaben</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Besoldungsgruppe</label>
                <select value={eg} onChange={e => setEg(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  {gruppen.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stufe</label>
                <select value={stufe} onChange={e => setStufe(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  {STUFEN.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Steuerklasse</label>
              <select value={steuerklasse} onChange={e => setSteuerklasse(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                <option value="1">1 (ledig)</option>
                <option value="2">2 (ledig mit Kind)</option>
                <option value="3">3 (verheiratet)</option>
                <option value="4">4 (verheiratet mit Kind)</option>
                <option value="5">5 (alleinerziehend)</option>
                <option value="6">6 (verheiratet, beide verdienen)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kinder</label>
                <select value={kinder} onChange={e => setKinder(Number(e.target.value))} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option value={0}>0</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kirchensteuer</label>
                <select value={kirche ? "ja" : "nein"} onChange={e => setKirche(e.target.value === "ja")} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option value="nein">Nein</option>
                  <option value="ja">Ja</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Wochenstunden</label>
              <input type="number" value={stunden} onChange={e => setStunden(Number(e.target.value))} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
            </div>

            <button onClick={() => berechnen()} className="w-full bg-blue-600 text-white rounded-md py-2 text-sm font-medium hover:bg-blue-700 transition-colors">
              Berechnen
            </button>
          </div>
        </div>

        {/* Ergebnis */}
        <div className="border border-gray-100 rounded-xl p-6">
          <h2 className="text-base font-medium text-gray-900 mb-5">Ergebnis</h2>
          {ergebnis ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600">Brutto monatlich</div>
                  <div className="text-2xl font-medium text-gray-900">{fmt(brutto)}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Netto monatlich</div>
                  <div className="text-2xl font-medium text-gray-900">{fmt(ergebnis.netto)}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">Lohnsteuer</div>
                    <div className="font-medium">{fmt(ergebnis.lohnsteuer)}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Sozialabgaben</div>
                    <div className="font-medium">{fmt(ergebnis.kv + ergebnis.pv + ergebnis.rv + ergebnis.av)}</div>
                  </div>
                </div>
              </div>

              <button onClick={() => setDetailsOpen(!detailsOpen)} className="text-blue-600 text-sm font-medium hover:text-blue-700">
                {detailsOpen ? "Weniger Details" : "Mehr Details"}
              </button>

              {detailsOpen && (
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Brutto jährlich</div>
                      <div className="font-medium">{fmt(jahresBrutto)}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Netto jährlich</div>
                      <div className="font-medium">{fmt(jahresNetto)}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-gray-500 text-center py-8">
              Wähle deine Angaben aus und klicke auf "Berechnen"
            </div>
          )}
        </div>
      </div>

      {/* Stufenvergleich */}
      {stufenVergleich.length > 0 && (
        <div className="border border-gray-100 rounded-xl p-6 mb-8">
          <h2 className="text-base font-medium text-gray-900 mb-5">Stufenvergleich für {eg}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 font-medium">Stufe</th>
                  <th className="text-right py-2 font-medium">Brutto</th>
                  <th className="text-right py-2 font-medium">Netto</th>
                </tr>
              </thead>
              <tbody>
                {stufenVergleich.map(s => (
                  <tr key={s.stufe} className={`border-b border-gray-100 ${s.aktiv ? "bg-blue-50" : ""}`}>
                    <td className="py-2">{s.stufe}</td>
                    <td className="text-right py-2">{fmt(s.brutto)}</td>
                    <td className="text-right py-2">{fmt(s.netto)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tabelle */}
      <div className="border border-gray-100 rounded-xl p-6">
        <h2 className="text-base font-medium text-gray-900 mb-5">Besoldungstabelle {jahr}</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 font-medium">Gruppe</th>
                {STUFEN.map(s => <th key={s} className="text-right py-2 font-medium">{s}</th>)}
              </tr>
            </thead>
            <tbody>
              {gruppen.map(g => (
                <tr key={g} className="border-b border-gray-100">
                  <td className="py-2 font-medium">{g}</td>
                  {STUFEN.map(s => (
                    <td key={s} className="text-right py-2">
                      <button
                        onClick={() => tabelleKlick(g, s)}
                        className={`px-2 py-1 rounded text-xs transition-colors ${
                          aktivZelle?.eg === g && aktivZelle?.stufe === s
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {fmt(tabelle[g]?.[s] || 0)}
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}