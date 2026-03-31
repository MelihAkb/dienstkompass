import Rechner from "@/components/Rechner";
import { TVOED_SUE_2024 } from "@/lib/tarifDaten";

export default function Page() {
  return (
    <Rechner
      titel="TVöD SuE 2024 Rechner"
      untertitel="Berechnen Sie Ihr Brutto- und Nettogehalt für den TVöD SuE ab 01.03.2024"
      gueltigAb="01.03.2024"
      tabelle={TVOED_SUE_2024}
      activePath="/tvoed/sue/2024/rechner"
      breadcrumb={[
        { label: "TVöD SuE", href: "/tvoed/sue" },
        { label: "2024", href: "/tvoed/sue/2024" },
        { label: "Rechner", href: "/tvoed/sue/2024/rechner" }
      ]}
      isBeamte={false}
      vollzeitStunden={39}
    />
  );
}