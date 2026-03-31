import Rechner from "@/components/Rechner";
import { TVOED_BUND } from "@/lib/tarifDaten";

export default function Page() {
  return (
    <Rechner
      titel="TVöD Bund 2022 Rechner"
      untertitel="Berechnen Sie Ihr Brutto- und Nettogehalt für den TVöD Bund ab 01.10.2022"
      gueltigAb="01.10.2022"
      tabelle={TVOED_BUND}
      activePath="/tvoed/bund/2022/rechner"
      breadcrumb={[
        { label: "TVöD Bund", href: "/tvoed/bund" },
        { label: "2022", href: "/tvoed/bund/2022" },
        { label: "Rechner", href: "/tvoed/bund/2022/rechner" }
      ]}
      isBeamte={false}
      vollzeitStunden={39}
    />
  );
}