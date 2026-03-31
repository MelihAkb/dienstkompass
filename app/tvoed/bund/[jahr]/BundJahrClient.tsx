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
      "E 1":  { "1": 2204.53, "2": 2372.43, "3": 2481.63, "4": 2544.17, "5": 2640.5,  "6": 2719.66 },
      "E 2":  { "1": 2372.43, "2": 2544.17, "3": 2640.5,  "4": 2719.66, "5": 2853.15, "6": 3014.21 },
      "E 3":  { "1": 2481.63, "2": 2640.5,  "3": 2719.66, "4": 2853.15, "5": 3014.21, "6": 3103.87 },
      "E 4":  { "1": 2640.5,  "2": 2719.66, "3": 2853.15, "4": 3014.21, "5": 3103.87, "6": 3214.18 },
      "E 5":  { "1": 2853.15, "2": 3014.21, "3": 3103.87, "4": 3214.18, "5": 3374.63, "6": 3526.54 },
      "E 6":  { "1": 3014.21, "2": 3103.87, "3": 3214.18, "4": 3374.63, "5": 3526.54, "6": 3663.15 },
      "E 7":  { "1": 3103.87, "2": 3214.18, "3": 3374.63, "4": 3526.54, "5": 3663.15, "6": 3838.15 },
      "E 8":  { "1": 3214.18, "2": 3374.63, "3": 3526.54, "4": 3663.15, "5": 3838.15, "6": 3975.7  },
      "E 9a": { "1": 3374.63, "2": 3526.54, "3": 3663.15, "4": 3838.15, "5": 3975.7,  "6": 4150.71 },
      "E 9b": { "1": 3526.54, "2": 3663.15, "3": 3838.15, "4": 3975.7,  "5": 4150.71, "6": 4358.85 },
      "E 10": { "1": 3838.15, "2": 3975.7,  "3": 4150.71, "4": 4358.85, "5": 4566.05, "6": 4774.05 },
      "E 11": { "1": 3975.7,  "2": 4150.71, "3": 4358.85, "4": 4566.05, "5": 4774.05, "6": 5016.04 },
      "E 12": { "1": 4358.85, "2": 4566.05, "3": 4774.05, "4": 5016.04, "5": 5295.03, "6": 5536.48 },
      "E 13": { "1": 4774.05, "2": 5016.04, "3": 5295.03, "4": 5536.48, "5": 5814.56, "6": 6056.56 },
      "E 14": { "1": 5016.04, "2": 5295.03, "3": 5536.48, "4": 5814.56, "5": 6056.56, "6": 6368.48 },
      "E 15": { "1": 5536.48, "2": 5814.56, "3": 6056.56, "4": 6368.48, "5": 6680.4,  "6": 6992.22 },
    },
  },
  "2025": {
    status: "aktuell",
    gueltigAb: "01.03.2025",
    gueltigBis: "30.04.2026",
    erhoehung: "+3,0%",
    mindest: "mind. +110 €",
    einmalzahlung: null,
    tabelle: {
      "E 1":  { "1": 2144.48, "2": 2307.81, "3": 2414.04, "4": 2474.87, "5": 2568.58, "6": 2645.58 },
      "E 2":  { "1": 2307.81, "2": 2474.87, "3": 2568.58, "4": 2645.58, "5": 2775.44, "6": 2932.11 },
      "E 3":  { "1": 2414.04, "2": 2568.58, "3": 2645.58, "4": 2775.44, "5": 2932.11, "6": 3019.33 },
      "E 4":  { "1": 2568.58, "2": 2645.58, "3": 2775.44, "4": 2932.11, "5": 3019.33, "6": 3126.63 },
      "E 5":  { "1": 2775.44, "2": 2932.11, "3": 3019.33, "4": 3126.63, "5": 3282.71, "6": 3430.49 },
      "E 6":  { "1": 2932.11, "2": 3019.33, "3": 3126.63, "4": 3282.71, "5": 3430.49, "6": 3563.38 },
      "E 7":  { "1": 3019.33, "2": 3126.63, "3": 3282.71, "4": 3430.49, "5": 3563.38, "6": 3733.61 },
      "E 8":  { "1": 3126.63, "2": 3282.71, "3": 3430.49, "4": 3563.38, "5": 3733.61, "6": 3867.41 },
      "E 9a": { "1": 3282.71, "2": 3430.49, "3": 3563.38, "4": 3733.61, "5": 3867.41, "6": 4037.66 },
      "E 9b": { "1": 3430.49, "2": 3563.38, "3": 3733.61, "4": 3867.41, "5": 4037.66, "6": 4240.13 },
      "E 10": { "1": 3733.61, "2": 3867.41, "3": 4037.66, "4": 4240.13, "5": 4441.68, "6": 4644.02 },
      "E 11": { "1": 3867.41, "2": 4037.66, "3": 4240.13, "4": 4441.68, "5": 4644.02, "6": 4879.42 },
      "E 12": { "1": 4240.13, "2": 4441.68, "3": 4644.02, "4": 4879.42, "5": 5150.81, "6": 5385.68 },
      "E 13": { "1": 4644.02, "2": 4879.42, "3": 5150.81, "4": 5385.68, "5": 5656.19, "6": 5891.6  },
      "E 14": { "1": 4879.42, "2": 5150.81, "3": 5385.68, "4": 5656.19, "5": 5891.6,  "6": 6195.02 },
      "E 15": { "1": 5385.68, "2": 5656.19, "3": 5891.6,  "4": 6195.02, "5": 6498.44, "6": 6801.77 },
    },
  },
  "2023": {
    status: "archiv",
    gueltigAb: "01.04.2023",
    gueltigBis: "29.02.2024",
    erhoehung: "+5,5%",
    mindest: "mind. +340 €",
    einmalzahlung: null,
    tabelle: {
      "E 1":  { "1": 2134.56, "2": 2298.34, "3": 2401.12, "4": 2461.23, "5": 2554.02, "6": 2632.11 },
      "E 2":  { "1": 2298.34, "2": 2461.23, "3": 2554.02, "4": 2632.11, "5": 2762.08, "6": 2918.24 },
      "E 3":  { "1": 2401.12, "2": 2554.02, "3": 2632.11, "4": 2762.08, "5": 2918.24, "6": 3005.35 },
      "E 4":  { "1": 2554.02, "2": 2632.11, "3": 2762.08, "4": 2918.24, "5": 3005.35, "6": 3112.46 },
      "E 5":  { "1": 2762.08, "2": 2918.24, "3": 3005.35, "4": 3112.46, "5": 3267.68, "6": 3414.80 },
      "E 6":  { "1": 2918.24, "2": 3005.35, "3": 3112.46, "4": 3267.68, "5": 3414.80, "6": 3547.02 },
      "E 7":  { "1": 3005.35, "2": 3112.46, "3": 3267.68, "4": 3414.80, "5": 3547.02, "6": 3716.24 },
      "E 8":  { "1": 3112.46, "2": 3267.68, "3": 3414.80, "4": 3547.02, "5": 3716.24, "6": 3849.46 },
      "E 9a": { "1": 3267.68, "2": 3414.80, "3": 3547.02, "4": 3716.24, "5": 3849.46, "6": 4018.68 },
      "E 9b": { "1": 3414.80, "2": 3547.02, "3": 3716.24, "4": 3849.46, "5": 4018.68, "6": 4220.90 },
      "E 10": { "1": 3716.24, "2": 3849.46, "3": 4018.68, "4": 4220.90, "5": 4421.12, "6": 4622.34 },
      "E 11": { "1": 3849.46, "2": 4018.68, "3": 4220.90, "4": 4421.12, "5": 4622.34, "6": 4856.56 },
      "E 12": { "1": 4220.90, "2": 4421.12, "3": 4622.34, "4": 4856.56, "5": 5126.78, "6": 5360.00 },
      "E 13": { "1": 4622.34, "2": 4856.56, "3": 5126.78, "4": 5360.00, "5": 5629.22, "6": 5863.44 },
      "E 14": { "1": 4856.56, "2": 5126.78, "3": 5360.00, "4": 5629.22, "5": 5863.44, "6": 6165.66 },
      "E 15": { "1": 5360.00, "2": 5629.22, "3": 5863.44, "4": 6165.66, "5": 6467.88, "6": 6770.10 },
    },
  },
  "2022": {
    status: "archiv",
    gueltigAb: "01.10.2022",
    gueltigBis: "31.03.2023",
    erhoehung: "+2,8%",
    mindest: null,
    einmalzahlung: null,
    tabelle: {
      "E 1":  { "1": 2134.56, "2": 2298.34, "3": 2401.12, "4": 2461.23, "5": 2554.02, "6": 2632.11 },
      "E 2":  { "1": 2298.34, "2": 2461.23, "3": 2554.02, "4": 2632.11, "5": 2762.08, "6": 2918.24 },
      "E 3":  { "1": 2401.12, "2": 2554.02, "3": 2632.11, "4": 2762.08, "5": 2918.24, "6": 3005.35 },
      "E 4":  { "1": 2554.02, "2": 2632.11, "3": 2762.08, "4": 2918.24, "5": 3005.35, "6": 3112.46 },
      "E 5":  { "1": 2762.08, "2": 2918.24, "3": 3005.35, "4": 3112.46, "5": 3267.68, "6": 3414.80 },
      "E 6":  { "1": 2918.24, "2": 3005.35, "3": 3112.46, "4": 3267.68, "5": 3414.80, "6": 3547.02 },
      "E 7":  { "1": 3005.35, "2": 3112.46, "3": 3267.68, "4": 3414.80, "5": 3547.02, "6": 3716.24 },
      "E 8":  { "1": 3112.46, "2": 3267.68, "3": 3414.80, "4": 3547.02, "5": 3716.24, "6": 3849.46 },
      "E 9a": { "1": 3267.68, "2": 3414.80, "3": 3547.02, "4": 3716.24, "5": 3849.46, "6": 4018.68 },
      "E 9b": { "1": 3414.80, "2": 3547.02, "3": 3716.24, "4": 3849.46, "5": 4018.68, "6": 4220.90 },
      "E 10": { "1": 3716.24, "2": 3849.46, "3": 4018.68, "4": 4220.90, "5": 4421.12, "6": 4622.34 },
      "E 11": { "1": 3849.46, "2": 4018.68, "3": 4220.90, "4": 4421.12, "5": 4622.34, "6": 4856.56 },
      "E 12": { "1": 4220.90, "2": 4421.12, "3": 4622.34, "4": 4856.56, "5": 5126.78, "6": 5360.00 },
      "E 13": { "1": 4622.34, "2": 4856.56, "3": 5126.78, "4": 5360.00, "5": 5629.22, "6": 5863.44 },
      "E 14": { "1": 4856.56, "2": 5126.78, "3": 5360.00, "4": 5629.22, "5": 5863.44, "6": 6165.66 },
      "E 15": { "1": 5360.00, "2": 5629.22, "3": 5863.44, "4": 6165.66, "5": 6467.88, "6": 6770.10 },
    },
  },
  "2021": {
    status: "archiv",
    gueltigAb: "01.04.2021",
    gueltigBis: "30.09.2022",
    erhoehung: "+1,4%",
    mindest: null,
    einmalzahlung: null,
    tabelle: {
      "E 1":  { "1": 2134.56, "2": 2298.34, "3": 2401.12, "4": 2461.23, "5": 2554.02, "6": 2632.11 },
      "E 2":  { "1": 2298.34, "2": 2461.23, "3": 2554.02, "4": 2632.11, "5": 2762.08, "6": 2918.24 },
      "E 3":  { "1": 2401.12, "2": 2554.02, "3": 2632.11, "4": 2762.08, "5": 2918.24, "6": 3005.35 },
      "E 4":  { "1": 2554.02, "2": 2632.11, "3": 2762.08, "4": 2918.24, "5": 3005.35, "6": 3112.46 },
      "E 5":  { "1": 2762.08, "2": 2918.24, "3": 3005.35, "4": 3112.46, "5": 3267.68, "6": 3414.80 },
      "E 6":  { "1": 2918.24, "2": 3005.35, "3": 3112.46, "4": 3267.68, "5": 3414.80, "6": 3547.02 },
      "E 7":  { "1": 3005.35, "2": 3112.46, "3": 3267.68, "4": 3414.80, "5": 3547.02, "6": 3716.24 },
      "E 8":  { "1": 3112.46, "2": 3267.68, "3": 3414.80, "4": 3547.02, "5": 3716.24, "6": 3849.46 },
      "E 9a": { "1": 3267.68, "2": 3414.80, "3": 3547.02, "4": 3716.24, "5": 3849.46, "6": 4018.68 },
      "E 9b": { "1": 3414.80, "2": 3547.02, "3": 3716.24, "4": 3849.46, "5": 4018.68, "6": 4220.90 },
      "E 10": { "1": 3716.24, "2": 3849.46, "3": 4018.68, "4": 4220.90, "5": 4421.12, "6": 4622.34 },
      "E 11": { "1": 3849.46, "2": 4018.68, "3": 4220.90, "4": 4421.12, "5": 4622.34, "6": 4856.56 },
      "E 12": { "1": 4220.90, "2": 4421.12, "3": 4622.34, "4": 4856.56, "5": 5126.78, "6": 5360.00 },
      "E 13": { "1": 4622.34, "2": 4856.56, "3": 5126.78, "4": 5360.00, "5": 5629.22, "6": 5863.44 },
      "E 14": { "1": 4856.56, "2": 5126.78, "3": 5360.00, "4": 5629.22, "5": 5863.44, "6": 6165.66 },
      "E 15": { "1": 5360.00, "2": 5629.22, "3": 5863.44, "4": 6165.66, "5": 6467.88, "6": 6770.10 },
    },
  },
  "2024": {
    status: "archiv",
    gueltigAb: "01.03.2024",
    gueltigBis: "28.02.2025",
    erhoehung: "+5,5%",
    mindest: "mind. +340 €",
    einmalzahlung: "Einmalzahlung 3.000 €",
    tabelle: {
      "E 1":  { "1": 2082.02, "2": 2240.59, "3": 2343.73, "4": 2402.79, "5": 2493.77, "6": 2568.52 },
      "E 2":  { "1": 2240.59, "2": 2402.79, "3": 2493.77, "4": 2568.52, "5": 2694.6,  "6": 2846.71 },
      "E 3":  { "1": 2343.73, "2": 2493.77, "3": 2568.52, "4": 2694.6,  "5": 2846.71, "6": 2931.39 },
      "E 4":  { "1": 2493.77, "2": 2568.52, "3": 2694.6,  "4": 2846.71, "5": 2931.39, "6": 3035.56 },
      "E 5":  { "1": 2694.6,  "2": 2846.71, "3": 2931.39, "4": 3035.56, "5": 3187.1,  "6": 3330.57 },
      "E 6":  { "1": 2846.71, "2": 2931.39, "3": 3035.56, "4": 3187.1,  "5": 3330.57, "6": 3459.59 },
      "E 7":  { "1": 2931.39, "2": 3035.56, "3": 3187.1,  "4": 3330.57, "5": 3459.59, "6": 3624.86 },
      "E 8":  { "1": 3035.56, "2": 3187.1,  "3": 3330.57, "4": 3459.59, "5": 3624.86, "6": 3754.77 },
      "E 9a": { "1": 3187.1,  "2": 3330.57, "3": 3459.59, "4": 3624.86, "5": 3754.77, "6": 3920.06 },
      "E 9b": { "1": 3330.57, "2": 3459.59, "3": 3624.86, "4": 3754.77, "5": 3920.06, "6": 4116.63 },
      "E 10": { "1": 3624.86, "2": 3754.77, "3": 3920.06, "4": 4116.63, "5": 4312.31, "6": 4508.76 },
      "E 11": { "1": 3754.77, "2": 3920.06, "3": 4116.63, "4": 4312.31, "5": 4508.76, "6": 4737.3  },
      "E 12": { "1": 4116.63, "2": 4312.31, "3": 4508.76, "4": 4737.3,  "5": 5000.79, "6": 5228.82 },
      "E 13": { "1": 4508.76, "2": 4737.3,  "3": 5000.79, "4": 5228.82, "5": 5491.45, "6": 5720.0  },
      "E 14": { "1": 4737.3,  "2": 5000.79, "3": 5228.82, "4": 5491.45, "5": 5720.0,  "6": 6014.58 },
      "E 15": { "1": 5228.82, "2": 5491.45, "3": 5720.0,  "4": 6014.58, "5": 6309.17, "6": 6603.66 },
    },
  },
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const FAQ = [
  {
    frage: "Was ist der Unterschied zwischen TVöD Bund und TVöD VKA?",
    antwort: "Beide Tarifverträge haben dieselbe Grundstruktur mit Entgeltgruppen E 1 bis E 15 und sechs Stufen, aber unterschiedliche Tarifparteien. Der TVöD Bund gilt für die rund 150.000 Beschäftigten des Bundes (Bundesbehörden, Zoll, Bundeswehr-Zivilpersonal), der TVöD VKA für die 2,5 Millionen Kommunalbeschäftigten. Die Tabellenwerte im Bund liegen im Schnitt etwa 1–2% höher als in der VKA.",
  },
  {
    frage: "Wie viele Stunden arbeite ich bei TVöD Bund?",
    antwort: "Die reguläre Wochenarbeitszeit im TVöD Bund beträgt 39 Stunden für Beschäftigte im Westen, und ebenfalls 39 Stunden in den neuen Bundesländern (seit 2022 angeglichen). Bei Teilzeit wird das Tabellenentgelt anteilig berechnet. Der Rechner oben berücksichtigt die Stundenzahl automatisch.",
  },
  {
    frage: "Wann steige ich in die nächste Stufe auf?",
    antwort: "Die Stufenlaufzeiten im TVöD sind: Stufe 1 auf 2 nach 1 Jahr, Stufe 2 auf 3 nach 2 Jahren, Stufe 3 auf 4 nach 3 Jahren, Stufe 4 auf 5 nach 4 Jahren, Stufe 5 auf 6 nach 5 Jahren. Bei Einstellung werden Vorerfahrungszeiten anerkannt – wer bereits in einem vergleichbaren Job gearbeitet hat, muss nicht zwingend in Stufe 1 starten.",
  },
  {
    frage: "Was bekomme ich als Jahressonderzahlung?",
    antwort: "Beschäftigte im TVöD Bund erhalten eine jährliche Sonderzahlung (umgangssprachlich Weihnachtsgeld). Die Höhe richtet sich nach der Entgeltgruppe: E 1 bis E 8 erhalten 90%, E 9 bis E 12 erhalten 80%, E 13 bis E 15 erhalten 60% eines monatlichen Tabellenentgelts. Die Auszahlung erfolgt im November.",
  },
  {
    frage: "Gilt TVöD Bund auch für Beamte?",
    antwort: "Nein. Der TVöD gilt ausschließlich für tariflich Beschäftigte. Bundesbeamte werden nach dem Bundesbesoldungsgesetz (BBesG) nach der A-Besoldung entlohnt. Die Besoldungstabellen werden zwar in der Regel zeitnah an die Tarifergebnisse angelehnt, sind aber rechtlich eigenständig und erfordern ein eigenes Gesetz.",
  },
  {
    frage: "Wie werde ich nach TVöD Bund eingruppiert?",
    antwort: "Die Eingruppierung erfolgt nach der Entgeltordnung des TVöD Bund (Anlage 1). Maßgeblich sind die Tätigkeitsmerkmale der Stelle, nicht der persönliche Abschluss. Ein Studienabschluss allein begründet z.B. keine E-13-Eingruppierung – entscheidend ist, ob die Tätigkeit auch tatsächlich Hochschulaufgaben umfasst. Bei Unklarheiten empfiehlt sich eine Beratung durch ver.di oder den Personalrat.",
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

export default function BundJahrClient({ jahr }: { jahr: string }) {
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
      <Layout activePath="/tvoed/bund">
        <div className="text-center py-20">
          <h1 className="text-2xl font-medium text-gray-900 mb-2">Tabelle nicht gefunden</h1>
          <Link href="/tvoed/bund" className="text-blue-600">← Zurück zur Übersicht</Link>
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
    <Layout activePath="/tvoed/bund">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-5 flex items-center gap-1 flex-wrap">
        <Link href="/" className="hover:text-gray-600">Startseite</Link>
        <span>→</span>
        <Link href="/tvoed/bund" className="hover:text-gray-600">TVöD Bund</Link>
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
      <h1 className="text-3xl font-medium text-gray-900 mb-1">
        TVöD Bund {jahr} Gehaltsrechner
      </h1>
      <p className="text-gray-500 mb-8 max-w-2xl text-sm">
        Entgelttabelle und Netto-Rechner für Bundesbeschäftigte · {data.erhoehung} · Wähle Entgeltgruppe, Stufe und Steuerklasse.
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
        <h2 className="text-xl font-medium text-gray-900 mb-1">Entgelttabelle TVöD Bund {jahr}</h2>
        <p className="text-gray-500 text-sm mb-5">
          Monatliche Bruttoentgelte in Euro · Gültig ab {data.gueltigAb} · Klick auf eine Zelle berechnet das Netto
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white shadow-sm">
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
          Alle Angaben ohne Gewähr · Stand {data.gueltigAb} · Quelle: TVöD Bund Tarifvertrag
        </p>
      </div>

      {/* ── FAQ ── */}
      <div className="mb-12">
        <h2 className="text-xl font-medium text-gray-900 mb-1">Häufige Fragen zum TVöD Bund</h2>
        <p className="text-gray-500 text-sm mb-6">Alles was du über Gehalt und Eingruppierung beim Bund wissen musst.</p>
        <div className="bg-white border border-gray-100 rounded-xl px-6 shadow-sm">
          {FAQ.map((item, i) => (
            <FaqItem key={i} frage={item.frage} antwort={item.antwort} />
          ))}
        </div>
      </div>

      {/* ── SEO Text ── */}
      <div className="border-t border-gray-100 pt-10 mb-12">
        <h2 className="text-xl font-medium text-gray-900 mb-4">TVöD Bund {jahr} – Entgelttabelle und Gehaltsrechner</h2>
        <div className="text-gray-500 text-sm leading-relaxed space-y-4 max-w-3xl">
          <p>
            Der Tarifvertrag für den öffentlichen Dienst des Bundes (TVöD Bund) gilt für rund 150.000 Beschäftigte in Bundesbehörden und -einrichtungen – vom Zoll über das Bundeskriminalamt bis zu den Jobcentern in gemeinsamer Trägerschaft. Die Tarifverhandlungen führt das Bundesinnenministerium für die Arbeitgeberseite, auf Arbeitnehmerseite ist vor allem ver.di aktiv.
          </p>
          <p>
            Die Entgelttabelle {jahr} gilt {data.gueltigAb ? `ab dem ${data.gueltigAb}` : `für das Jahr ${jahr}`} und umfasst die Entgeltgruppen E 1 bis E 15 mit je sechs Erfahrungsstufen. Gegenüber der kommunalen VKA-Tabelle liegen die Bund-Werte im Schnitt rund 1 bis 2 Prozent höher – ein Unterschied, der besonders in den mittleren und höheren Entgeltgruppen spürbar wird.
          </p>
          <p>
            Die Eingruppierung richtet sich nach der Entgeltordnung (Anlage 1 TVöD Bund), die für jede Entgeltgruppe Tätigkeitsmerkmale beschreibt. Der Stufenaufstieg erfolgt automatisch nach Zeitablauf: ein Jahr für den Schritt von Stufe 1 auf 2, zwei Jahre bis Stufe 3, drei Jahre bis Stufe 4, vier Jahre bis Stufe 5 und fünf weitere Jahre bis zur Endstufe 6.
          </p>
          <p>
            Neben dem Tabellenentgelt erhalten Vollzeitbeschäftigte im November eine Jahressonderzahlung. Deren Höhe ist nach Entgeltgruppen gestaffelt: In E 1 bis E 8 beträgt sie 90 % eines Monatsentgelts, in E 9 bis E 12 sind es 80 %, und ab E 13 noch 60 %. Dazu kommen Zulagen für Wechselschicht, Nacht- und Feiertagsarbeit.
          </p>
          <p>
            Für Beschäftigte in Teilzeit rechnet das Tool das Entgelt anteilig auf die eingegebene Stundenzahl um. Das Nettoergebnis ist eine Orientierung – der tatsächliche Auszahlungsbetrag hängt von individuellen Freibeträgen und weiteren Faktoren ab.
          </p>
          <p>
            Tarifrunden im TVöD Bund finden in der Regel alle zwei bis drei Jahre statt. Das Ergebnis 2025 – ein Plus von 3,0 Prozent ab März 2025 (mindestens 110 Euro) sowie weitere 2,8 Prozent ab Mai 2026 – setzt den Trend moderater, aber stabiler Erhöhungen fort.
          </p>
        </div>
      </div>

      {/* Weitere Jahre */}
      <div className="border-t border-gray-100 pt-8">
        <h2 className="text-base font-medium text-gray-900 mb-4">Weitere Jahrestabellen TVöD Bund</h2>
        <div className="flex gap-3 flex-wrap">
          {Object.entries(TABELLEN).filter(([j]) => j !== jahr).map(([j, d]) => (
            <Link key={j} href={`/tvoed/bund/${j}`} className="text-sm border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              TVöD Bund {j} ({d.erhoehung})
            </Link>
          ))}
          <Link href="/tvoed/bund" className="text-sm text-blue-600 hover:text-blue-700 px-4 py-2">
            Zur Übersicht →
          </Link>
        </div>
      </div>
    </Layout>
  );
}
