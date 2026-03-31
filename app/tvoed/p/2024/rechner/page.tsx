import Rechner from "@/components/Rechner";
import { TVOED_P_2024 } from "@/lib/tarifDaten";

export default function Page() {
  return (
    <Rechner
      titel="TVöD-P 2024 Rechner"
      untertitel="Berechnen Sie Ihr Brutto- und Nettogehalt für den TVöD-P ab 01.03.2024"
      gueltigAb="01.03.2024"
      tabelle={TVOED_P_2024}
      activePath="/tvoed/p/2024/rechner"
      breadcrumb={[
        { label: "TVöD-P", href: "/tvoed/p" },
        { label: "2024", href: "/tvoed/p/2024" },
        { label: "Rechner", href: "/tvoed/p/2024/rechner" }
      ]}
      isBeamte={false}
      vollzeitStunden={39}
    />
  );
}