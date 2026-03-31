import Rechner from "@/components/Rechner";
import { TV_L_2025 } from "@/lib/tarifDaten";

export default function Page() {
  return (
    <Rechner
      titel="TV-L 2025 Rechner"
      untertitel="Berechnen Sie Ihr Brutto- und Nettogehalt für den TV-L ab 01.01.2025"
      gueltigAb="01.01.2025"
      tabelle={TV_L_2025}
      activePath="/tv-l/allgemein/2025/rechner"
      breadcrumb={[
        { label: "TV-L", href: "/tv-l" },
        { label: "2025", href: "/tv-l/allgemein/2025" },
        { label: "Rechner", href: "/tv-l/allgemein/2025/rechner" }
      ]}
      isBeamte={false}
      vollzeitStunden={39}
    />
  );
}