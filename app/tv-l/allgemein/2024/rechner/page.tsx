import Rechner from "@/components/Rechner";
import { TV_L_2024 } from "@/lib/tarifDaten";

export default function Page() {
  return (
    <Rechner
      titel="TV-L 2024 Rechner"
      untertitel="Berechnen Sie Ihr Brutto- und Nettogehalt für den TV-L ab 01.01.2024"
      gueltigAb="01.01.2024"
      tabelle={TV_L_2024}
      activePath="/tv-l/allgemein/2024/rechner"
      breadcrumb={[
        { label: "TV-L", href: "/tv-l" },
        { label: "2024", href: "/tv-l/allgemein/2024" },
        { label: "Rechner", href: "/tv-l/allgemein/2024/rechner" }
      ]}
      isBeamte={false}
      vollzeitStunden={39}
    />
  );
}