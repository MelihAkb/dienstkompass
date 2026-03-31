import Rechner from "@/components/Rechner";
import { TVOED_BUND } from "@/lib/tarifDaten";

export default function Page() {
  return (
    <Rechner
      titel="TVöD Bund 2024 Rechner"
      untertitel="Berechnen Sie Ihr Brutto- und Nettogehalt für den TVöD Bund ab 01.03.2024"
      gueltigAb="01.03.2024"
      tabelle={TVOED_BUND}
      activePath="/tvoed/bund/2024/rechner"
      breadcrumb={[
        { label: "TVöD Bund", href: "/tvoed/bund" },
        { label: "2024", href: "/tvoed/bund/2024" },
        { label: "Rechner", href: "/tvoed/bund/2024/rechner" }
      ]}
      isBeamte={false}
      vollzeitStunden={39}
    />
  );
}