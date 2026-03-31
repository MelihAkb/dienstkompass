import Rechner from "@/components/Rechner";
import { TVOED_BUND_2025 } from "@/lib/tarifDaten";

export default function Page() {
  return (
    <Rechner
      titel="TVöD Bund 2025 Rechner"
      untertitel="Berechnen Sie Ihr Brutto- und Nettogehalt für den TVöD Bund ab 01.04.2025"
      gueltigAb="01.04.2025"
      tabelle={TVOED_BUND_2025}
      activePath="/tvoed/bund/2025/rechner"
      breadcrumb={[
        { label: "TVöD Bund", href: "/tvoed/bund" },
        { label: "2025", href: "/tvoed/bund/2025" },
        { label: "Rechner", href: "/tvoed/bund/2025/rechner" }
      ]}
      isBeamte={false}
      vollzeitStunden={39}
    />
  );
}