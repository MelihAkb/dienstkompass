import Rechner from "@/components/Rechner";
import { TVOED_P_2026 } from "@/lib/tarifDaten";

export default function Page() {
  return (
    <Rechner
      titel="TVöD-P 2026 Rechner"
      untertitel="Berechnen Sie Ihr Brutto- und Nettogehalt für den TVöD-P ab 01.04.2026"
      gueltigAb="01.04.2026"
      tabelle={TVOED_P_2026}
      activePath="/tvoed/p/2026/rechner"
      breadcrumb={[
        { label: "TVöD-P", href: "/tvoed/p" },
        { label: "2026", href: "/tvoed/p/2026" },
        { label: "Rechner", href: "/tvoed/p/2026/rechner" }
      ]}
      isBeamte={false}
      vollzeitStunden={39}
    />
  );
}