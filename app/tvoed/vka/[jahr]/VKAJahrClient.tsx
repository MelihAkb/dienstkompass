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

// ─── Tabellendaten ────────────────────────────────────────────────────────────

const TABELLEN: Record<string, {
  tabelle: EntgeltTabelle;
  gueltigAb: string;
  gueltigBis: string | null;
  erhoehung: string;
  mindest: string | null;
  einmalzahlung: string | null;
  status: "aktuell" | "zukuenftig" | "archiv";
}> = {
  "2026": {
    status: "zukuenftig",
    gueltigAb: "01.05.2026",
    gueltigBis: null,
    erhoehung: "+2,8%",
    mindest: null,
    einmalzahlung: null,
    tabelle: {
      "E 1":  { "1": 2178.39, "2": 2344.30, "3": 2452.20, "4": 2514.00, "5": 2609.19, "6": 2687.41 },
      "E 2":  { "1": 2344.30, "2": 2514.00, "3": 2609.19, "4": 2687.41, "5": 2819.32, "6": 2978.47 },
      "E 3":  { "1": 2452.20, "2": 2609.19, "3": 2687.41, "4": 2819.32, "5": 2978.47, "6": 3067.07 },
      "E 4":  { "1": 2609.19, "2": 2687.41, "3": 2819.32, "4": 2978.47, "5": 3067.07, "6": 3176.07 },
      "E 5":  { "1": 2819.32, "2": 2978.47, "3": 3067.07, "4": 3176.07, "5": 3334.61, "6": 3484.72 },
      "E 6":  { "1": 2978.47, "2": 3067.07, "3": 3176.07, "4": 3334.61, "5": 3484.72, "6": 3619.71 },
      "E 7":  { "1": 3067.07, "2": 3176.07, "3": 3334.61, "4": 3484.72, "5": 3619.71, "6": 3792.64 },
      "E 8":  { "1": 3176.07, "2": 3334.61, "3": 3484.72, "4": 3619.71, "5": 3792.64, "6": 3928.56 },
      "E 9a": { "1": 3334.61, "2": 3484.72, "3": 3619.71, "4": 3792.64, "5": 3928.56, "6": 4101.49 },
      "E 9b": { "1": 3484.72, "2": 3619.71, "3": 3792.64, "4": 3928.56, "5": 4101.49, "6": 4307.16 },
      "E 10": { "1": 3792.64, "2": 3928.56, "3": 4101.49, "4": 4307.16, "5": 4511.91, "6": 4717.44 },
      "E 11": { "1": 3928.56, "2": 4101.49, "3": 4307.16, "4": 4511.91, "5": 4717.44, "6": 4956.56 },
      "E 12": { "1": 4307.16, "2": 4511.91, "3": 4717.44, "4": 4956.56, "5": 5232.24, "6": 5470.83 },
      "E 13": { "1": 4717.44, "2": 4956.56, "3": 5232.24, "4": 5470.83, "5": 5745.61, "6": 5984.74 },
      "E 14": { "1": 4956.56, "2": 5232.24, "3": 5470.83, "4": 5745.61, "5": 5984.74, "6": 6292.96 },
      "E 15": { "1": 5470.83, "2": 5745.61, "3": 5984.74, "4": 6292.96, "5": 6601.19, "6": 6909.31 },
    },
  },
  "2025": {
    status: "aktuell",
    gueltigAb: "01.04.2025",
    gueltigBis: "30.04.2026",
    erhoehung: "+3,0%",
    mindest: "mind. +110 €",
    einmalzahlung: null,
    tabelle: {
      "E 1":  { "1": 2118.86, "2": 2280.45, "3": 2385.22, "4": 2445.33, "5": 2538.12, "6": 2614.21 },
      "E 2":  { "1": 2280.45, "2": 2445.33, "3": 2538.12, "4": 2614.21, "5": 2742.18, "6": 2897.34 },
      "E 3":  { "1": 2385.22, "2": 2538.12, "3": 2614.21, "4": 2742.18, "5": 2897.34, "6": 2983.45 },
      "E 4":  { "1": 2538.12, "2": 2614.21, "3": 2742.18, "4": 2897.34, "5": 2983.45, "6": 3089.56 },
      "E 5":  { "1": 2742.18, "2": 2897.34, "3": 2983.45, "4": 3089.56, "5": 3243.78, "6": 3389.90 },
      "E 6":  { "1": 2897.34, "2": 2983.45, "3": 3089.56, "4": 3243.78, "5": 3389.90, "6": 3521.12 },
      "E 7":  { "1": 2983.45, "2": 3089.56, "3": 3243.78, "4": 3389.90, "5": 3521.12, "6": 3689.34 },
      "E 8":  { "1": 3089.56, "2": 3243.78, "3": 3389.90, "4": 3521.12, "5": 3689.34, "6": 3821.56 },
      "E 9a": { "1": 3243.78, "2": 3389.90, "3": 3521.12, "4": 3689.34, "5": 3821.56, "6": 3989.78 },
      "E 9b": { "1": 3389.90, "2": 3521.12, "3": 3689.34, "4": 3821.56, "5": 3989.78, "6": 4189.90 },
      "E 10": { "1": 3689.34, "2": 3821.56, "3": 3989.78, "4": 4189.90, "5": 4389.12, "6": 4589.34 },
      "E 11": { "1": 3821.56, "2": 3989.78, "3": 4189.90, "4": 4389.12, "5": 4589.34, "6": 4821.56 },
      "E 12": { "1": 4189.90, "2": 4389.12, "3": 4589.34, "4": 4821.56, "5": 5089.78, "6": 5321.90 },
      "E 13": { "1": 4589.34, "2": 4821.56, "3": 5089.78, "4": 5321.90, "5": 5589.12, "6": 5821.34 },
      "E 14": { "1": 4821.56, "2": 5089.78, "3": 5321.90, "4": 5589.12, "5": 5821.34, "6": 6121.56 },
      "E 15": { "1": 5321.90, "2": 5589.12, "3": 5821.34, "4": 6121.56, "5": 6421.78, "6": 6721.90 },
    },
  },
  "2024": {
    status: "archiv",
    gueltigAb: "01.03.2024",
    gueltigBis: "31.03.2025",
    erhoehung: "+5,5%",
    mindest: "mind. +340 €",
    einmalzahlung: "Einmalzahlung 3.000 €",
    tabelle: {
      "E 1":  { "1": 2056.18, "2": 2213.05, "3": 2314.77, "4": 2373.13, "5": 2463.22, "6": 2537.10 },
      "E 2":  { "1": 2213.05, "2": 2373.13, "3": 2463.22, "4": 2537.10, "5": 2661.34, "6": 2812.95 },
      "E 3":  { "1": 2314.77, "2": 2463.22, "3": 2537.10, "4": 2661.34, "5": 2812.95, "6": 2896.07 },
      "E 4":  { "1": 2463.22, "2": 2537.10, "3": 2661.34, "4": 2812.95, "5": 2896.07, "6": 2999.09 },
      "E 5":  { "1": 2661.34, "2": 2812.95, "3": 2896.07, "4": 2999.09, "5": 3148.33, "6": 3291.75 },
      "E 6":  { "1": 2812.95, "2": 2896.07, "3": 2999.09, "4": 3148.33, "5": 3291.75, "6": 3419.24 },
      "E 7":  { "1": 2896.07, "2": 2999.09, "3": 3148.33, "4": 3291.75, "5": 3419.24, "6": 3582.08 },
      "E 8":  { "1": 2999.09, "2": 3148.33, "3": 3291.75, "4": 3419.24, "5": 3582.08, "6": 3710.25 },
      "E 9a": { "1": 3148.33, "2": 3291.75, "3": 3419.24, "4": 3582.08, "5": 3710.25, "6": 3873.09 },
      "E 9b": { "1": 3291.75, "2": 3419.24, "3": 3582.08, "4": 3710.25, "5": 3873.09, "6": 4068.35 },
      "E 10": { "1": 3582.08, "2": 3710.25, "3": 3873.09, "4": 4068.35, "5": 4261.28, "6": 4455.67 },
      "E 11": { "1": 3710.25, "2": 3873.09, "3": 4068.35, "4": 4261.28, "5": 4455.67, "6": 4680.16 },
      "E 12": { "1": 4068.35, "2": 4261.28, "3": 4455.67, "4": 4680.16, "5": 4941.05, "6": 5166.89 },
      "E 13": { "1": 4455.67, "2": 4680.16, "3": 4941.05, "4": 5166.89, "5": 5426.33, "6": 5652.75 },
      "E 14": { "1": 4680.16, "2": 4941.05, "3": 5166.89, "4": 5426.33, "5": 5652.75, "6": 5943.39 },
      "E 15": { "1": 5166.89, "2": 5426.33, "3": 5652.75, "4": 5943.39, "5": 6234.74, "6": 6525.15 },
    },
  },
  "2023": {
    status: "archiv",
    gueltigAb: "01.04.2023",
    gueltigBis: "31.03.2024",
    erhoehung: "+5,5%",
    mindest: "mind. +340 €",
    einmalzahlung: null,
    tabelle: {
      "E 1":  { "1": 1951, "2": 2097, "3": 2193, "4": 2250, "5": 2335, "6": 2405 },
      "E 2":  { "1": 2097, "2": 2250, "3": 2335, "4": 2405, "5": 2523, "6": 2667 },
      "E 3":  { "1": 2193, "2": 2335, "3": 2405, "4": 2523, "5": 2667, "6": 2744 },
      "E 4":  { "1": 2335, "2": 2405, "3": 2523, "4": 2667, "5": 2744, "6": 2843 },
      "E 5":  { "1": 2523, "2": 2667, "3": 2744, "4": 2843, "5": 2984, "6": 3120 },
      "E 6":  { "1": 2667, "2": 2744, "3": 2843, "4": 2984, "5": 3120, "6": 3242 },
      "E 7":  { "1": 2744, "2": 2843, "3": 2984, "4": 3120, "5": 3242, "6": 3394 },
      "E 8":  { "1": 2843, "2": 2984, "3": 3120, "4": 3242, "5": 3394, "6": 3517 },
      "E 9a": { "1": 2984, "2": 3120, "3": 3242, "4": 3394, "5": 3517, "6": 3670 },
      "E 9b": { "1": 3120, "2": 3242, "3": 3394, "4": 3517, "5": 3670, "6": 3856 },
      "E 10": { "1": 3394, "2": 3517, "3": 3670, "4": 3856, "5": 4039, "6": 4223 },
      "E 11": { "1": 3517, "2": 3670, "3": 3856, "4": 4039, "5": 4223, "6": 4436 },
      "E 12": { "1": 3856, "2": 4039, "3": 4223, "4": 4436, "5": 4687, "6": 4899 },
      "E 13": { "1": 4223, "2": 4436, "3": 4687, "4": 4899, "5": 5144, "6": 5356 },
      "E 14": { "1": 4436, "2": 4687, "3": 4899, "4": 5144, "5": 5356, "6": 5635 },
      "E 15": { "1": 4899, "2": 5144, "3": 5356, "4": 5635, "5": 5910, "6": 6185 },
    },
  },
  "2022": {
    status: "archiv",
    gueltigAb: "01.04.2022",
    gueltigBis: "31.03.2023",
    erhoehung: "+3,0%",
    mindest: "mind. +110 €",
    einmalzahlung: null,
    tabelle: {
      "E 1":  { "1": 1951, "2": 2097, "3": 2193, "4": 2250, "5": 2335, "6": 2405 },
      "E 2":  { "1": 2097, "2": 2250, "3": 2335, "4": 2405, "5": 2523, "6": 2667 },
      "E 3":  { "1": 2193, "2": 2335, "3": 2405, "4": 2523, "5": 2667, "6": 2744 },
      "E 4":  { "1": 2335, "2": 2405, "3": 2523, "4": 2667, "5": 2744, "6": 2843 },
      "E 5":  { "1": 2523, "2": 2667, "3": 2744, "4": 2843, "5": 2984, "6": 3120 },
      "E 6":  { "1": 2667, "2": 2744, "3": 2843, "4": 2984, "5": 3120, "6": 3242 },
      "E 7":  { "1": 2744, "2": 2843, "3": 2984, "4": 3120, "5": 3242, "6": 3394 },
      "E 8":  { "1": 2843, "2": 2984, "3": 3120, "4": 3242, "5": 3394, "6": 3517 },
      "E 9a": { "1": 2984, "2": 3120, "3": 3242, "4": 3394, "5": 3517, "6": 3670 },
      "E 9b": { "1": 3120, "2": 3242, "3": 3394, "4": 3517, "5": 3670, "6": 3856 },
      "E 10": { "1": 3394, "2": 3517, "3": 3670, "4": 3856, "5": 4039, "6": 4223 },
      "E 11": { "1": 3517, "2": 3670, "3": 3856, "4": 4039, "5": 4223, "6": 4436 },
      "E 12": { "1": 3856, "2": 4039, "3": 4223, "4": 4436, "5": 4687, "6": 4899 },
      "E 13": { "1": 4223, "2": 4436, "3": 4687, "4": 4899, "5": 5144, "6": 5356 },
      "E 14": { "1": 4436, "2": 4687, "3": 4899, "4": 5144, "5": 5356, "6": 5635 },
      "E 15": { "1": 4899, "2": 5144, "3": 5356, "4": 5635, "5": 5910, "6": 6185 },
    },
  },
  "2021": {
    status: "archiv",
    gueltigAb: "01.04.2021",
    gueltigBis: "31.03.2022",
    erhoehung: "+1,4%",
    mindest: null,
    einmalzahlung: null,
    tabelle: {
      "E 1":  { "1": 1951, "2": 2097, "3": 2193, "4": 2250, "5": 2335, "6": 2405 },
      "E 2":  { "1": 2097, "2": 2250, "3": 2335, "4": 2405, "5": 2523, "6": 2667 },
      "E 3":  { "1": 2193, "2": 2335, "3": 2405, "4": 2523, "5": 2667, "6": 2744 },
      "E 4":  { "1": 2335, "2": 2405, "3": 2523, "4": 2667, "5": 2744, "6": 2843 },
      "E 5":  { "1": 2523, "2": 2667, "3": 2744, "4": 2843, "5": 2984, "6": 3120 },
      "E 6":  { "1": 2667, "2": 2744, "3": 2843, "4": 2984, "5": 3120, "6": 3242 },
      "E 7":  { "1": 2744, "2": 2843, "3": 2984, "4": 3120, "5": 3242, "6": 3394 },
      "E 8":  { "1": 2843, "2": 2984, "3": 3120, "4": 3242, "5": 3394, "6": 3517 },
      "E 9a": { "1": 2984, "2": 3120, "3": 3242, "4": 3394, "5": 3517, "6": 3670 },
      "E 9b": { "1": 3120, "2": 3242, "3": 3394, "4": 3517, "5": 3670, "6": 3856 },
      "E 10": { "1": 3394, "2": 3517, "3": 3670, "4": 3856, "5": 4039, "6": 4223 },
      "E 11": { "1": 3517, "2": 3670, "3": 3856, "4": 4039, "5": 4223, "6": 4436 },
      "E 12": { "1": 3856, "2": 4039, "3": 4223, "4": 4436, "5": 4687, "6": 4899 },
      "E 13": { "1": 4223, "2": 4436, "3": 4687, "4": 4899, "5": 5144, "6": 5356 },
      "E 14": { "1": 4436, "2": 4687, "3": 4899, "4": 5144, "5": 5356, "6": 5635 },
      "E 15": { "1": 4899, "2": 5144, "3": 5356, "4": 5635, "5": 5910, "6": 6185 },
    },
  },
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const FAQ = [
  {
    frage: "Was ist der TVöD VKA und für wen gilt er?",
    antwort: "Der TVöD VKA (Vereinigung der kommunalen Arbeitgeberverbände) gilt für rund 2,5 Millionen Beschäftigte bei Städten, Gemeinden, Landkreisen und kommunalen Einrichtungen wie Krankenhäusern, Kitas, Versorgungsunternehmen und Entsorgungsbetrieben. Er ist damit der flächenmäßig größte Tarifvertrag im öffentlichen Dienst Deutschlands.",
  },
  {
    frage: "Wie unterscheidet sich der TVöD VKA vom TVöD Bund?",
    antwort: "Beide Tarifverträge teilen dieselbe Grundstruktur (E 1–E 15, sechs Stufen), haben aber unterschiedliche Tarifparteien und leicht abweichende Tabellenwerte. Der Bund verhandelt mit ver.di direkt, die VKA über ihre Mitgliedsverbände. In der Regel liegen die Bund-Werte 1–2 % über denen der VKA. Auch die konkreten Einmalzahlungen und Laufzeiten der Tarifabschlüsse weichen voneinander ab.",
  },
  {
    frage: "Wie lange dauert es, von Stufe 1 auf Stufe 6 zu kommen?",
    antwort: "Der Stufenaufstieg im TVöD VKA folgt festen Zeitspannen: Stufe 1 → 2 nach 1 Jahr, Stufe 2 → 3 nach 2 Jahren, Stufe 3 → 4 nach 3 Jahren, Stufe 4 → 5 nach 4 Jahren, Stufe 5 → 6 nach 5 Jahren. Insgesamt dauert es also 15 Jahre bis zur Endstufe – sofern keine Vorerfahrungszeiten anerkannt werden. Zeiten in gleichwertigen Tätigkeiten beim selben oder einem anderen Arbeitgeber können angerechnet werden.",
  },
  {
    frage: "Wie hoch ist die Jahressonderzahlung im TVöD VKA?",
    antwort: "Beschäftigte im TVöD VKA erhalten im November eine Jahressonderzahlung (Weihnachtsgeld). Die Höhe hängt von der Entgeltgruppe ab: E 1 bis E 8 erhalten 90 %, E 9 bis E 12 erhalten 80 %, E 13 bis E 15 erhalten 60 % eines Monatsentgelts. Die genaue Höhe kann in einzelnen Bundesländern durch abweichende Regelungen leicht variieren.",
  },
  {
    frage: "Gilt die VKA-Tabelle in allen Bundesländern?",
    antwort: "Der TVöD VKA gilt grundsätzlich bundesweit, aber einige Bundesländer haben eigene kommunale Arbeitgeberverbände mit leicht abweichenden Regelungen. In Berlin, Brandenburg und Sachsen gibt es historisch bedingte Besonderheiten. Der Rechner auf dieser Seite berücksichtigt Ihr Bundesland bei der Netto-Berechnung (Kirchensteuer, Pflegeversicherungszuschlag in BW).",
  },
  {
    frage: "Wie werde ich im TVöD VKA eingruppiert?",
    antwort: "Die Eingruppierung erfolgt nach der Entgeltordnung TVöD (Anlage 1), die für jede Entgeltgruppe konkrete Tätigkeitsmerkmale vorgibt. Maßgeblich ist die tatsächlich ausgeübte Tätigkeit, nicht der formale Abschluss. Stellen mit Hochschulaufgaben werden typischerweise in E 13 eingruppiert, qualifizierte Sachbearbeitertätigkeiten in E 9a bis E 10. Bei Unklarheiten hilft der Personalrat oder die zuständige Gewerkschaft ver.di weiter.",
  },
];

// ─── Hilfskomponenten ─────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: "aktuell" | "zukuenftig" | "archiv" }) {
  const styles = {
    aktuell:    "bg-green-50 text-green-700",
    zukuenftig: "bg-amber-50 text-amber-700",
    archiv:     "bg-gray-100 text-gray-500",
  };
  const labels = { aktuell: "Aktuell", zukuenftig: "Zukünftig", archiv: "Archiv" };
  return (
    <span className={`text-xs font-medium px-2.5 py-1 rounded-md ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      className={`flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function FaqItem({ frage, antwort }: { frage: string; antwort: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left"
      >
        <span className="text-sm font-medium text-gray-900">{frage}</span>
        <ChevronIcon open={open} />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${open ? "max-h-96 pb-4" : "max-h-0"}`}>
        <p className="text-sm text-gray-500 leading-relaxed">{antwort}</p>
      </div>
    </div>
  );
}

// ─── Hauptkomponente ──────────────────────────────────────────────────────────

export default function VKAJahrClient({ jahr }: { jahr: string }) {
  const data = TABELLEN[jahr];
  const gruppen = data ? Object.keys(data.tabelle) : [];

  const [eg, setEg] = useState(gruppen[Math.floor(gruppen.length / 2)] ?? "E 9a");
  const [stufe, setStufe] = useState("3");
  const [bundesland, setBundesland] = useState("Niedersachsen");
  const [steuerklasse, setSteuerklasse] = useState("1");
  const [kinder, setKinder] = useState(0);
  const [kirche, setKirche] = useState(false);
  const [stunden, setStunden] = useState(39);
  const [ergebnis, setErgebnis] = useState<ReturnType<typeof berechneNetto> | null>(null);
  const [brutto, setBrutto] = useState(0);
  const [aktivZelle, setAktivZelle] = useState<{ eg: string; stufe: string } | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  if (!data) {
    return (
      <Layout activePath="/tvoed/vka">
        <div className="text-center py-20">
          <h1 className="text-2xl font-medium text-gray-900 mb-2">Tabelle nicht gefunden</h1>
          <Link href="/tvoed/vka" className="text-blue-600">← Zurück zur Übersicht</Link>
        </div>
      </Layout>
    );
  }

  function berechnen(eOverride?: string, sOverride?: string) {
    const e = eOverride ?? eg;
    const s = sOverride ?? stufe;
    const b = getBrutto(data.tabelle, e, s, stunden);
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

  const jahressonderzahlung = Math.round(brutto * 0.7);
  const jahresBrutto = brutto * 12 + jahressonderzahlung;
  const jahresNetto = ergebnis ? ergebnis.netto * 12 : 0;

  const stufenVergleich = ergebnis ? STUFEN.map(s => {
    const b = getBrutto(data.tabelle, eg, s, stunden);
    const n = berechneNetto(b, steuerklasse, bundesland, kinder, kirche);
    return { stufe: s, brutto: b, netto: n.netto, aktiv: s === stufe };
  }) : [];

  const statusLabel = data.status === "aktuell" ? "AKTUELL" : data.status === "zukuenftig" ? "ZUKÜNFTIG" : "ARCHIV";

  return (
    <Layout activePath="/tvoed/vka">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-5 flex items-center gap-1 flex-wrap">
        <Link href="/" className="hover:text-gray-600">Startseite</Link>
        <span>→</span>
        <Link href="/tvoed/vka" className="hover:text-gray-600">TVöD VKA</Link>
        <span>→</span>
        <span className="text-gray-900">{jahr} ({statusLabel})</span>
      </div>

      {/* Badge + H1 */}
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <StatusBadge status={data.status} />
        <span className="text-sm text-gray-400">
          Gültig ab {data.gueltigAb}{data.gueltigBis ? ` bis ${data.gueltigBis}` : ""}
        </span>
        {data.mindest && (
          <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md">{data.mindest}</span>
        )}
        {data.einmalzahlung && (
          <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-md">{data.einmalzahlung}</span>
        )}
      </div>
      <h1 id="ueberschrift" className="text-3xl font-medium text-gray-900 mb-1">
        TVöD VKA {jahr} Gehaltsrechner
      </h1>
      <p className="text-gray-500 mb-8 max-w-2xl text-sm">
        Entgelttabelle und Netto-Rechner für Kommunalbeschäftigte · {data.erhoehung} · Wähle Entgeltgruppe, Stufe und Steuerklasse.
      </p>

      {/* ── Rechner ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <h2 className="text-base font-medium text-gray-900 mb-5">Deine Angaben</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500 block mb-1.5">Entgeltgruppe</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-900" value={eg} onChange={e => setEg(e.target.value)}>
                  {gruppen.map(g => <option key={g}>{g}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1.5">Stufe</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-900" value={stufe} onChange={e => setStufe(e.target.value)}>
                  {STUFEN.map(s => <option key={s} value={s}>Stufe {s}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1.5">Bundesland</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-900" value={bundesland} onChange={e => setBundesland(e.target.value)}>
                {BUNDESLAENDER.map(b => <option key={b}>{b}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500 block mb-1.5">Steuerklasse</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-900" value={steuerklasse} onChange={e => setSteuerklasse(e.target.value)}>
                  {["1","2","3","4","5","6"].map(s => <option key={s} value={s}>Klasse {s}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1.5">Kinder</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-900" value={kinder} onChange={e => setKinder(Number(e.target.value))}>
                  <option value={0}>Keine</option>
                  <option value={1}>1 Kind</option>
                  <option value={2}>2 Kinder</option>
                  <option value={3}>3 Kinder</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1.5">Wochenstunden</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-900" value={stunden} onChange={e => setStunden(Number(e.target.value))}>
                <option value={39}>39 Std. (Vollzeit)</option>
                <option value={35}>35 Std.</option>
                <option value={30}>30 Std.</option>
                <option value={25}>25 Std.</option>
                <option value={20}>20 Std.</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="kirche" checked={kirche} onChange={e => setKirche(e.target.checked)} className="w-4 h-4 accent-blue-600" />
              <label htmlFor="kirche" className="text-sm text-gray-600">Kirchensteuer</label>
            </div>
            <button
              onClick={() => berechnen()}
              className="w-full py-3 rounded-lg text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "#1D6FB8" }}
            >
              Gehalt berechnen
            </button>
          </div>
        </div>

        <div>
          {ergebnis ? (
            <>
              <div className="bg-gray-50 rounded-xl p-5 mb-4">
                <div className="text-sm text-gray-500 mb-1">Nettogehalt / Monat</div>
                <div className="text-4xl font-medium text-gray-900">{ergebnis.netto.toLocaleString("de-DE")} €</div>
                <div className="text-sm text-gray-400 mt-1">{eg} · Stufe {stufe} · {stunden} Std./Woche</div>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-medium text-gray-900">Monatsbeträge</h2>
                  <span className="text-xs text-gray-400">Steuerklasse {steuerklasse}</span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Grundgehalt (brutto)", value: fmt(brutto), color: "text-gray-900", prefix: "" },
                    { label: "Lohnsteuer", value: fmt(ergebnis.lohnsteuer), color: "text-red-500", prefix: "− " },
                    { label: "Solidaritätszuschlag", value: fmt(ergebnis.soli), color: "text-red-500", prefix: "− " },
                    ...(ergebnis.kirchenst > 0 ? [{ label: "Kirchensteuer", value: fmt(ergebnis.kirchenst), color: "text-red-500", prefix: "− " }] : []),
                    { label: "Sozialversicherung", value: fmt(ergebnis.kv + ergebnis.pv + ergebnis.rv + ergebnis.av + ergebnis.zvk), color: "text-red-500", prefix: "− " },
                  ].map(row => (
                    <div key={row.label} className="flex justify-between text-sm pb-2 border-b border-gray-50">
                      <span className="text-gray-500">{row.label}</span>
                      <span className={`font-medium ${row.color}`}>{row.prefix}{row.value} €</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-sm font-medium pt-1">
                    <span className="text-gray-900">Netto bleibt</span>
                    <span className="text-green-600">{fmt(ergebnis.netto)} €</span>
                  </div>
                </div>
                <button
                  onClick={() => setDetailsOpen(!detailsOpen)}
                  className="mt-4 w-full text-sm text-blue-600 border border-blue-100 rounded-lg py-2 hover:bg-blue-50 transition-colors flex items-center justify-center gap-1"
                >
                  <ChevronIcon open={detailsOpen} />
                  {detailsOpen ? "Weniger Details" : "Mehr Details anzeigen"}
                </button>
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
                        { label: "Grundgehalt × 12", value: brutto * 12, positive: true },
                        { label: "Jahressonderzahlung (ca. 70%)", value: jahressonderzahlung, positive: true },
                        { label: "Jahres-Brutto", value: jahresBrutto, positive: true },
                        { label: "Lohnsteuer (Jahr)", value: ergebnis.lohnsteuer * 12, positive: false },
                        { label: "Sozialversicherung (Jahr)", value: (ergebnis.kv + ergebnis.pv + ergebnis.rv + ergebnis.av + ergebnis.zvk) * 12, positive: false },
                        { label: "Jahres-Netto", value: jahresNetto, positive: true },
                        { label: "Ø Monat netto", value: Math.round(jahresNetto / 12), positive: true },
                      ].map(row => (
                        <div key={row.label} className="flex justify-between text-sm pb-1.5 border-b border-gray-50">
                          <span className="text-gray-500">{row.label}</span>
                          <span className={row.positive ? "text-gray-900 font-medium" : "text-red-400"}>
                            {row.positive ? "" : "− "}{fmt(row.value)} €
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="bg-white border border-dashed border-gray-200 rounded-xl p-10 text-center h-full flex flex-col items-center justify-center shadow-sm">
              <div className="text-3xl mb-3">💰</div>
              <p className="text-gray-400 text-sm">Angaben ausfüllen und berechnen –<br />oder eine Zelle in der Tabelle anklicken</p>
            </div>
          )}
        </div>
      </div>

      {/* Stufenvergleich */}
      {ergebnis && stufenVergleich.length > 0 && (
        <div className="mb-10">
          <h2 className="text-base font-medium text-gray-900 mb-3">Gehaltsvergleich {eg} – alle Stufen</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
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
                  <td className="py-3 px-4 text-gray-500">Brutto</td>
                  {stufenVergleich.map(s => (
                    <td key={s.stufe} className={`py-3 px-4 text-right ${s.aktiv ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-700"}`}>
                      {fmt(s.brutto)} €
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-500 font-medium">Netto</td>
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

      {/* ── Entgelttabelle ── */}
      <div className="mb-12">
        <h2 className="text-xl font-medium text-gray-900 mb-1">Entgelttabelle TVöD VKA {jahr}</h2>
        <p className="text-gray-500 text-sm mb-5">
          Monatliche Bruttoentgelte in Euro · Gültig ab {data.gueltigAb} · Klick auf eine Zelle berechnet das Netto
        </p>
        <div id="tabelle" className="overflow-x-auto rounded-xl border border-gray-100 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left py-3 px-4 text-gray-500 font-medium">Entgeltgruppe</th>
                {STUFEN.map(s => (
                  <th key={s} className="text-right py-3 px-4 text-gray-500 font-medium whitespace-nowrap">Stufe {s}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {gruppen.map((gruppe, i) => (
                <tr key={gruppe} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}>
                  <td className="py-3 px-4 font-medium text-gray-900">{gruppe}</td>
                  {STUFEN.map(s => {
                    const isAktiv = aktivZelle?.eg === gruppe && aktivZelle?.stufe === s;
                    const wert = data.tabelle[gruppe]?.[s];
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
        <p className="text-xs text-gray-400 mt-3">
          Alle Angaben ohne Gewähr · Stand {data.gueltigAb} · Quelle: TVöD VKA Tarifvertrag
        </p>
      </div>

      {/* ── FAQ ── */}
      <div className="mb-12">
        <h2 className="text-xl font-medium text-gray-900 mb-1">Häufige Fragen zum TVöD VKA</h2>
        <p className="text-gray-500 text-sm mb-6">Alles was du über Gehalt und Eingruppierung im kommunalen Dienst wissen musst.</p>
        <div className="bg-white border border-gray-100 rounded-xl px-6 shadow-sm">
          {FAQ.map((item, i) => (
            <FaqItem key={i} frage={item.frage} antwort={item.antwort} />
          ))}
        </div>
      </div>

      {/* ── SEO Text ── */}
      <div className="border-t border-gray-100 pt-10 mb-12">
        <h2 className="text-xl font-medium text-gray-900 mb-4">TVöD VKA {jahr} – Entgelttabelle und Gehaltsrechner</h2>
        <div className="text-gray-500 text-sm leading-relaxed space-y-4 max-w-3xl">
          <p>
            Der Tarifvertrag für den öffentlichen Dienst der Vereinigung der kommunalen Arbeitgeberverbände (TVöD VKA) ist der größte Flächentarifvertrag im deutschen öffentlichen Dienst. Er gilt für rund 2,5 Millionen Beschäftigte in Städten, Gemeinden, Landkreisen und kommunalen Einrichtungen – von der Stadtverwaltung über kommunale Krankenhäuser bis hin zu Kindergärten und Versorgungsbetrieben.
          </p>
          <p>
            Die Entgelttabelle {jahr} gilt {data.gueltigAb ? `ab dem ${data.gueltigAb}` : `für das Jahr ${jahr}`} und umfasst die Entgeltgruppen E 1 bis E 15 mit je sechs Erfahrungsstufen. Das Tarifergebnis {jahr} brachte {data.erhoehung}{data.mindest ? ` (${data.mindest})` : ""} für alle Beschäftigten – ein Ergebnis, das nach mehreren Verhandlungsrunden zwischen den Gewerkschaften ver.di und dbb und der VKA erzielt wurde.
          </p>
          <p>
            Die Eingruppierung in eine der 15 Entgeltgruppen richtet sich nach der Entgeltordnung des TVöD (Anlage 1). Entscheidend sind die in der Stellenbeschreibung festgelegten Tätigkeitsmerkmale, nicht der persönliche Bildungsabschluss. Einfache Tätigkeiten starten in E 1 bis E 4, qualifizierte Sachbearbeitertätigkeiten befinden sich typischerweise in E 9a bis E 10, und Stellen mit Hochschulaufgaben werden ab E 13 eingruppiert.
          </p>
          <p>
            Der Stufenaufstieg verläuft automatisch nach Zeit: 1 Jahr bis Stufe 2, dann 2, 3, 4 und 5 weitere Jahre für die Stufen 3 bis 6. Bei Neueinstellungen können frühere Beschäftigungszeiten in gleichwertigen Tätigkeiten anerkannt werden, sodass ein Einstieg in Stufe 2 oder höher möglich ist. Die Endstufe 6 wird nach insgesamt 15 Dienstjahren in der jeweiligen Entgeltgruppe erreicht.
          </p>
          <p>
            Zusätzlich zum monatlichen Tabellenentgelt erhalten Vollzeitbeschäftigte eine Jahressonderzahlung im November: 90 % für E 1–E 8, 80 % für E 9–E 12, 60 % für E 13–E 15. Weitere Zulagen – etwa für Schicht-, Nacht- und Feiertagsarbeit – können das Nettogehalt spürbar erhöhen und sind im obigen Rechner nicht enthalten.
          </p>
          <p>
            Der Netto-Rechner auf dieser Seite berechnet auf Basis des Tabellenentgelts eine Orientierung für das monatliche Auszahlungsbeträge. Berücksichtigt werden Lohnsteuer, Solidaritätszuschlag, Kirchensteuer sowie alle Sozialversicherungsbeiträge inklusive des ZVK-Beitrags. Individuelle Freibeträge, Kinderfreibeträge und steuerliche Besonderheiten können den tatsächlichen Nettobetrag abweichen lassen.
          </p>
        </div>
      </div>

      {/* Weitere Jahre */}
      <div className="border-t border-gray-100 pt-8">
        <h2 className="text-base font-medium text-gray-900 mb-4">Weitere Jahrestabellen TVöD VKA</h2>
        <div className="flex gap-3 flex-wrap">
          {Object.entries(TABELLEN).filter(([j]) => j !== jahr).map(([j, d]) => (
            <Link key={j} href={`/tvoed/vka/${j}`} className="text-sm border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              TVöD VKA {j} ({d.erhoehung})
            </Link>
          ))}
          <Link href="/tvoed/vka" className="text-sm text-blue-600 hover:text-blue-700 px-4 py-2">
            Zur Übersicht →
          </Link>
        </div>
      </div>
    </Layout>
  );
}
