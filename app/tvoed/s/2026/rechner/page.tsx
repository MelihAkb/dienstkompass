import Rechner from "@/components/Rechner";
import { TVOED_S_2026 } from "@/lib/tarifDaten";

export default function Page() {
  return (
    <Rechner
      titel="TVöD-S 2026 Rechner"
      untertitel="Berechnen Sie Ihr Brutto- und Nettogehalt für den TVöD-S ab 01.04.2026"
      gueltigAb="01.04.2026"
      tabelle={TVOED_S_2026}
      activePath="/tvoed/s/2026/rechner"
      breadcrumb={[
        { label: "TVöD-S", href: "/tvoed/s" },
        { label: "2026", href: "/tvoed/s/2026" },
        { label: "Rechner", href: "/tvoed/s/2026/rechner" }
      ]}
      isBeamte={false}
      vollzeitStunden={39}
    />
  );
}