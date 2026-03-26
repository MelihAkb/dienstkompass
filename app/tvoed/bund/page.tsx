import Rechner from "@/components/Rechner";
import { TVOED_BUND } from "@/lib/tarifDaten";
export default function Page() {
  return <Rechner titel="TVöD Bund Gehaltsrechner 2025" untertitel="Berechne dein Brutto- und Nettogehalt im TVöD Bund (Bundesverwaltung). Klicke auf eine Zelle zur direkten Berechnung." gueltigAb="01.03.2024" tabelle={TVOED_BUND} activePath="/tvoed/bund" breadcrumb={[{ label: "TVöD", href: "/tvoed" }, { label: "TVöD Bund", href: "/tvoed/bund" }]} />;
}
