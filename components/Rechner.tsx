"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import {
  EntgeltTabelle,
  STUFEN,
  BUNDESLAENDER,
  fmt,
  berechneNetto,
  getBrutto,
} from "@/lib/tarifDaten";

interface RechnerProps {
  titel: string;
  untertitel: string;
  gueltigAb: string;
  tabelle: EntgeltTabelle;
  activePath: string;
  breadcrumb: { label: string; href: string }[];
  isBeamte?: boolean;
  vollzeitStunden?: number;
}

export default function Rechner({
  titel,
  untertitel,
  gueltigAb,
  tabelle,
  activePath,
  breadcrumb,
  isBeamte = false,
  vollzeitStunden = 39,
}: RechnerProps) {
  const gruppen = Object.keys(tabelle);
  const [eg, setEg] = useState(gruppen[Math.floor(gruppen.length / 2)] ?? gruppen[0]);
  const [stufe, setStufe] = useState("3");
  const [bundesland, setBundesland] = useState("Niedersachsen");
  const [steuerklasse, setSteuerklasse] = useState("1");
  const [kinder, setKinder] = useState(0);
  const [kirche, setKirche] = useState(false);
  const [stunden, setStunden] = useState(vollzeitStunden);
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

  const jahressonderzahlung = Math.round(brutto * (isBeamte ? 0 : 0.7));
  const jahresBrutto = brutto * 12 + jahressonderzahlung;
  const jahresNetto = ergebnis ? ergebnis.netto * 12 : 0;

  // Stufenvergleich für aktuelle EG
  const stufenVergleich = ergebnis ? STUFEN.map(s => {
    const b = getBrutto(tabelle, eg, s, stunden);
    const n = berechneNetto(b, steuerklasse, bundesland, kinder, kirche);
    return { stufe: s, brutto: b, netto: n.netto, aktiv: s === stufe };
  }) : [];

  return (
    <Layout activePath={activePath}>
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-6 flex items-center gap-1 flex-wrap">
        <a href="/" className="hover:text-gray-600">Startseite</a>
        {breadcrumb.map((b) => (
          <span key={b.href} className="flex items-center gap-1">
            <span>→</span>
            <a href={b.href} className="hover:text-gray-600">{b.label}</a>
          </span>
        ))}
      </div>

      <div className="mb-3">
        <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-md">Gültig ab {gueltigAb}</span>
      </div>
      <h1 className="text-3xl font-medium text-gray-900 mb-2">{titel}</h1>
      <p className="text-gray-500 mb-10 max-w-2xl">{untertitel}</p>

      {/* Rechner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Eingaben */}
        <div className="border border-gray-100 rounded-xl p-6">
          <h2 className="text-base font-medium text-gray-900 mb-5">Deine Angaben</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-gray-500 block mb-1.5">{isBeamte ? "Besoldungsgruppe" : "Entgeltgruppe"}</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-900" value={eg} onChange={e => setEg(e.target.value)}>
                  {gruppen.map(g => <option key={g}>{g}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-500 block mb-1.5">Stufe</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-900" value={stufe} onChange={e => setStufe(e.target.value)}>
                  {STUFEN.map(s => <option key={s} value={s}>Stufe {s}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500 block mb-1.5">Bundesland</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-900" value={bundesland} onChange={e => setBundesland(e.target.value)}>
                {BUNDESLAENDER.map(b => <option key={b}>{b}</option>)}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-gray-500 block mb-1.5">Steuerklasse</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-900" value={steuerklasse} onChange={e => setSteuerklasse(e.target.value)}>
                  {["1","2","3","4","5","6"].map(s => <option key={s} value={s}>Klasse {s}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-500 block mb-1.5">Kinder</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-900" value={kinder} onChange={e => setKinder(Number(e.target.value))}>
                  <option value={0}>Keine</option>
                  <option value={1}>1 Kind</option>
                  <option value={2}>2 Kinder</option>
                  <option value={3}>3 Kinder</option>
                </select>
              </div>
            </div>

            {!isBeamte && (
              <div>
                <label className="text-sm text-gray-500 block mb-1.5">Wochenstunden</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-900" value={stunden} onChange={e => setStunden(Number(e.target.value))}>
                  <option value={vollzeitStunden}>{vollzeitStunden} Std. (Vollzeit)</option>
                  <option value={35}>35 Std.</option>
                  <option value={30}>30 Std.</option>
                  <option value={25}>25 Std.</option>
                  <option value={20}>20 Std.</option>
                </select>
              </div>
            )}

            <div className="flex items-center gap-2">
              <input type="checkbox" id="kirche" checked={kirche} onChange={e => setKirche(e.target.checked)} className="w-4 h-4 accent-blue-600" />
              <label htmlFor="kirche" className="text-sm text-gray-600">Kirchensteuer</label>
            </div>

            <button onClick={() => berechnen()} className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Gehalt berechnen
            </button>
          </div>
        </div>

        {/* Ergebnis */}
        <div>
          {ergebnis ? (
            <>
              {/* Netto Highlight */}
              <div className="bg-gray-50 rounded-xl p-5 mb-4">
                <div className="text-sm text-gray-500 mb-1">{isBeamte ? "Nettobezüge / Monat" : "Nettogehalt / Monat"}</div>
                <div className="text-4xl font-medium text-gray-900">{ergebnis.netto.toLocaleString("de-DE")} €</div>
                <div className="text-sm text-gray-400 mt-1">{eg} · Stufe {stufe}{!isBeamte ? ` · ${stunden} Std./Woche` : ""}</div>
              </div>

              {/* Basis Aufschlüsselung */}
              <div className="border border-gray-100 rounded-xl p-5 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-medium text-gray-900">Monatsbeträge</h2>
                  <span className="text-xs text-gray-400">Steuerklasse {steuerklasse}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm pb-2 border-b border-gray-50">
                    <span className="text-gray-500">Grundgehalt (brutto)</span>
                    <span className="font-medium text-gray-900">{fmt(brutto)} €</span>
                  </div>
                  <div className="flex justify-between text-sm pb-2 border-b border-gray-50">
                    <span className="text-gray-500">Lohnsteuer</span>
                    <span className="text-red-500">− {fmt(ergebnis.lohnsteuer)} €</span>
                  </div>
                  <div className="flex justify-between text-sm pb-2 border-b border-gray-50">
                    <span className="text-gray-500">Solidaritätszuschlag</span>
                    <span className="text-red-500">− {fmt(ergebnis.soli)} €</span>
                  </div>
                  {ergebnis.kirchenst > 0 && (
                    <div className="flex justify-between text-sm pb-2 border-b border-gray-50">
                      <span className="text-gray-500">Kirchensteuer</span>
                      <span className="text-red-500">− {fmt(ergebnis.kirchenst)} €</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm pb-2 border-b border-gray-50">
                    <span className="text-gray-500">Sozialversicherung (gesamt)</span>
                    <span className="text-red-500">− {fmt(ergebnis.kv + ergebnis.pv + ergebnis.rv + ergebnis.av + ergebnis.zvk)} €</span>
                  </div>
                  <div className="flex justify-between text-sm pb-2 border-b border-gray-100">
                    <span className="text-gray-400 text-xs">Abzüge gesamt</span>
                    <span className="text-gray-400 text-xs">− {fmt(ergebnis.lohnsteuer + ergebnis.soli + ergebnis.kirchenst + ergebnis.kv + ergebnis.pv + ergebnis.rv + ergebnis.av + ergebnis.zvk)} € ({Math.round((ergebnis.lohnsteuer + ergebnis.soli + ergebnis.kirchenst + ergebnis.kv + ergebnis.pv + ergebnis.rv + ergebnis.av + ergebnis.zvk) / brutto * 100)}%)</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium py-1">
                    <span className="text-gray-900">Netto bleibt</span>
                    <span className="text-green-600">{fmt(ergebnis.netto)} €</span>
                  </div>
                </div>

                {/* Details Button */}
                <button
                  onClick={() => setDetailsOpen(!detailsOpen)}
                  className="mt-4 w-full text-sm text-blue-600 border border-blue-100 rounded-lg py-2 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                >
                  {detailsOpen ? "▲ Weniger Details" : "▼ Mehr Details anzeigen"}
                </button>

                {/* Details ausgeklappt */}
                {detailsOpen && (
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                    <div className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">Sozialversicherung aufgeschlüsselt</div>
                    {[
                      { label: "Krankenversicherung", value: ergebnis.kv, prozent: "8,525%" },
                      { label: "Pflegeversicherung", value: ergebnis.pv, prozent: kinder > 0 ? "1,55%" : "1,8%" },
                      { label: "Rentenversicherung", value: ergebnis.rv, prozent: "9,3%" },
                      { label: "Arbeitslosenversicherung", value: ergebnis.av, prozent: "1,3%" },
                      { label: "ZVK (Zusatzversorgung)", value: ergebnis.zvk, prozent: "0,6%" },
                    ].map(row => (
                      <div key={row.label} className="flex justify-between text-sm pb-1.5 border-b border-gray-50">
                        <span className="text-gray-500">{row.label} <span className="text-gray-300 text-xs">({row.prozent})</span></span>
                        <span className="text-red-400">− {fmt(row.value)} €</span>
                      </div>
                    ))}

                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <div className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">Jahresbeträge</div>
                      {[
                        { label: "Grundgehalt (brutto)", value: brutto * 12, positive: true },
                        ...(jahressonderzahlung > 0 ? [{ label: "Jahressonderzahlung", value: jahressonderzahlung, positive: true }] : []),
                        { label: "Jahres-Brutto", value: jahresBrutto, positive: true },
                        { label: "Lohnsteuer (Jahr)", value: ergebnis.lohnsteuer * 12, positive: false },
                        { label: "Sozialversicherung (Jahr)", value: (ergebnis.kv + ergebnis.pv + ergebnis.rv + ergebnis.av + ergebnis.zvk) * 12, positive: false },
                        { label: "Jahres-Netto", value: jahresNetto, positive: true },
                        { label: "Ø Monatsgehalt (netto)", value: Math.round(jahresNetto / 12), positive: true },
                      ].map(row => (
                        <div key={row.label} className="flex justify-between text-sm pb-1.5 border-b border-gray-50">
                          <span className="text-gray-500">{row.label}</span>
                          <span className={row.positive ? "text-gray-900 font-medium" : "text-red-400"}>
                            {row.positive ? "" : "− "}{fmt(row.value)} €
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <div className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">Weitere Werte</div>
                      {[
                        { label: "Stundenlohn (brutto)", value: parseFloat((brutto / (stunden * 4.348)).toFixed(2)) },
                        { label: "Tagesgehalt (brutto)", value: Math.round(brutto / 21.75) },
                      ].map(row => (
                        <div key={row.label} className="flex justify-between text-sm pb-1.5 border-b border-gray-50">
                          <span className="text-gray-500">{row.label}</span>
                          <span className="text-gray-900">{fmt(row.value)} €</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="border border-dashed border-gray-200 rounded-xl p-10 text-center h-full flex flex-col items-center justify-center">
              <div className="text-3xl mb-3">💰</div>
              <p className="text-gray-400 text-sm">Angaben ausfüllen und berechnen –<br />oder eine Zelle in der Tabelle anklicken</p>
            </div>
          )}
        </div>
      </div>

      {/* Stufenvergleich */}
      {ergebnis && stufenVergleich.length > 0 && (
        <div className="mb-16">
          <h2 className="text-base font-medium text-gray-900 mb-3">Gehaltsvergleich {eg} – alle Stufen</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 text-gray-500 font-medium">{eg}</th>
                  {stufenVergleich.map(s => (
                    <th key={s.stufe} className={`text-right py-3 px-4 font-medium ${s.aktiv ? "text-blue-600" : "text-gray-500"}`}>
                      Stufe {s.stufe}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-50">
                  <td className="py-3 px-4 text-gray-500">Grundgehalt</td>
                  {stufenVergleich.map(s => (
                    <td key={s.stufe} className={`py-3 px-4 text-right ${s.aktiv ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-700"}`}>
                      {fmt(s.brutto)} €
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-50 bg-gray-50/40">
                  <td className="py-3 px-4 text-gray-500">Brutto gesamt</td>
                  {stufenVergleich.map(s => (
                    <td key={s.stufe} className={`py-3 px-4 text-right ${s.aktiv ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-700"}`}>
                      {fmt(s.brutto)} €
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-500 font-medium">Netto gesamt</td>
                  {stufenVergleich.map(s => (
                    <td key={s.stufe} className={`py-3 px-4 text-right font-medium ${s.aktiv ? "bg-blue-600 text-white" : "text-green-600"}`}>
                      {fmt(s.netto)} €
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Entgelttabelle */}
      <div>
        <h2 id="ueberschrift" className="text-xl font-medium text-gray-900 mb-2">
          {isBeamte ? "Besoldungstabelle" : "Entgelttabelle"} {titel.replace("Rechner", "").replace("Gehaltsrechner", "").replace("Besoldungsrechner", "").trim()}
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Monatliche {isBeamte ? "Bruttobesoldung" : "Bruttoentgelte"} in Euro · Gültig ab {gueltigAb} · Klicke auf eine Zelle zur Berechnung
        </p>
        <div id="tabelle" className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-3 px-4 text-gray-500 font-medium">
                  {isBeamte ? "Besoldungsgruppe" : "Entgeltgruppe"}
                </th>
                {STUFEN.map(s => (
                  <th key={s} className="text-right py-3 px-4 text-gray-500 font-medium">Stufe {s}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {gruppen.map((gruppe, i) => (
                <tr key={gruppe} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}>
                  <td className="py-3 px-4 font-medium text-gray-900">{gruppe}</td>
                  {STUFEN.map(s => {
                    const isAktiv = aktivZelle?.eg === gruppe && aktivZelle?.stufe === s;
                    const wert = tabelle[gruppe]?.[s];
                    return (
                      <td
                        key={s}
                        onClick={() => wert ? tabelleKlick(gruppe, s) : undefined}
                        className={`py-3 px-4 text-right transition-colors ${
                          !wert ? "text-gray-300" :
                          isAktiv ? "bg-blue-600 text-white font-medium cursor-pointer" :
                          "text-gray-700 hover:bg-blue-50 hover:text-blue-700 cursor-pointer"
                        }`}
                      >
                        {wert ? fmt(wert) : "–"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-4">
          Alle Angaben ohne Gewähr. Quelle: oeffentlicher-dienst.info, Stand {gueltigAb}.
        </p>
      </div>
    </Layout>
  );
}
