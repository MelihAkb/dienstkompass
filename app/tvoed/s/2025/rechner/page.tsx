import Rechner from "@/components/Rechner";
import { TVOED_S_2025 } from "@/lib/tarifDaten";

export default function Page() {
  return (
    <Rechner
      titel="TVöD-S 2025 Rechner"
      untertitel="Berechnen Sie Ihr Brutto- und Nettogehalt für den TVöD-S ab 01.04.2025"
      gueltigAb="01.04.2025"
      tabelle={TVOED_S_2025}
      activePath="/tvoed/s/2025/rechner"
      breadcrumb={[
        { label: "TVöD-S", href: "/tvoed/s" },
        { label: "2025", href: "/tvoed/s/2025" },
        { label: "Rechner", href: "/tvoed/s/2025/rechner" }
      ]}
      isBeamte={false}
      vollzeitStunden={39}
    />
  );
}