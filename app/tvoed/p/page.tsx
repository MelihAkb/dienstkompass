import Rechner from "@/components/Rechner";
import { TVOED_P } from "@/lib/tarifDaten";
export default function Page() {
  return <Rechner titel="TVöD-P Gehaltsrechner 2025" untertitel="Berechne dein Gehalt im TVöD-P (Pflege). Für Pflegefachkräfte im öffentlichen Dienst." gueltigAb="01.04.2025" tabelle={TVOED_P} activePath="/tvoed/p" breadcrumb={[{ label: "TVöD", href: "/tvoed" }, { label: "TVöD-P Pflege", href: "/tvoed/p" }]} />;
}
