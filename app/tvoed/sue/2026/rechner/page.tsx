import Rechner from "@/components/Rechner";
import { TVOED_SUE_2026 } from "@/lib/tarifDaten";

export default function Page() {
  return (
    <Rechner
      titel="TVöD SuE 2026 Rechner"
      untertitel="Berechnen Sie Ihr Brutto- und Nettogehalt für den TVöD SuE ab 01.05.2026"
      gueltigAb="01.05.2026"
      tabelle={TVOED_SUE_2026}
      activePath="/tvoed/sue/2026/rechner"
      breadcrumb={[
        { label: "TVöD SuE", href: "/tvoed/sue" },
        { label: "2026", href: "/tvoed/sue/2026" },
        { label: "Rechner", href: "/tvoed/sue/2026/rechner" }
      ]}
      isBeamte={false}
      vollzeitStunden={39}
    />
  );
}