import Rechner from "@/components/Rechner";
import { TVOED_P_2025 } from "@/lib/tarifDaten";

export default function Page() {
  return (
    <Rechner
      titel="TVöD-P 2025 Rechner"
      untertitel="Berechnen Sie Ihr Brutto- und Nettogehalt für den TVöD-P ab 01.04.2025"
      gueltigAb="01.04.2025"
      tabelle={TVOED_P_2025}
      activePath="/tvoed/p/2025/rechner"
      breadcrumb={[
        { label: "TVöD-P", href: "/tvoed/p" },
        { label: "2025", href: "/tvoed/p/2025" },
        { label: "Rechner", href: "/tvoed/p/2025/rechner" }
      ]}
      isBeamte={false}
      vollzeitStunden={39}
    />
  );
}