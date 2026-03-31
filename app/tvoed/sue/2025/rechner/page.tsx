import Rechner from "@/components/Rechner";
import { TVOED_SUE_2025 } from "@/lib/tarifDaten";

export default function Page() {
  return (
    <Rechner
      titel="TVöD SuE 2025 Rechner"
      untertitel="Berechnen Sie Ihr Brutto- und Nettogehalt für den TVöD SuE ab 01.04.2025"
      gueltigAb="01.04.2025"
      tabelle={TVOED_SUE_2025}
      activePath="/tvoed/sue/2025/rechner"
      breadcrumb={[
        { label: "TVöD SuE", href: "/tvoed/sue" },
        { label: "2025", href: "/tvoed/sue/2025" },
        { label: "Rechner", href: "/tvoed/sue/2025/rechner" }
      ]}
      isBeamte={false}
      vollzeitStunden={39}
    />
  );
}