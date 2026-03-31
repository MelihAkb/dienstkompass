import Rechner from "@/components/Rechner";
import { TVOED_BUND_2026 } from "@/lib/tarifDaten";

export default function Page() {
  return (
    <Rechner
      titel="TVöD Bund 2026 Rechner"
      untertitel="Berechnen Sie Ihr Brutto- und Nettogehalt für den TVöD Bund ab 01.03.2026"
      gueltigAb="01.03.2026"
      tabelle={TVOED_BUND_2026}
      activePath="/tvoed/bund/2026/rechner"
      breadcrumb={[
        { label: "TVöD Bund", href: "/tvoed/bund" },
        { label: "2026", href: "/tvoed/bund/2026" },
        { label: "Rechner", href: "/tvoed/bund/2026/rechner" }
      ]}
      isBeamte={false}
      vollzeitStunden={39}
    />
  );
}