import Rechner from "@/components/Rechner";
import { TVOED_BUND } from "@/lib/tarifDaten";

export default function Page() {
  return (
    <Rechner
      titel="TVöD Bund 2023 Rechner"
      untertitel="Berechnen Sie Ihr Brutto- und Nettogehalt für den TVöD Bund ab 01.04.2023"
      gueltigAb="01.04.2023"
      tabelle={TVOED_BUND}
      activePath="/tvoed/bund/2023/rechner"
      breadcrumb={[
        { label: "TVöD Bund", href: "/tvoed/bund" },
        { label: "2023", href: "/tvoed/bund/2023" },
        { label: "Rechner", href: "/tvoed/bund/2023/rechner" }
      ]}
      isBeamte={false}
      vollzeitStunden={39}
    />
  );
}