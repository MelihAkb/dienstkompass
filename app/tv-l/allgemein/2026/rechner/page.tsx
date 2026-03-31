import Rechner from "@/components/Rechner";
import { TV_L_2026 } from "@/lib/tarifDaten";

export default function Page() {
  return (
    <Rechner
      titel="TV-L 2026 Rechner"
      untertitel="Berechnen Sie Ihr Brutto- und Nettogehalt für den TV-L ab 01.04.2026"
      gueltigAb="01.04.2026"
      tabelle={TV_L_2026}
      activePath="/tv-l/allgemein/2026/rechner"
      breadcrumb={[
        { label: "TV-L", href: "/tv-l" },
        { label: "2026", href: "/tv-l/allgemein/2026" },
        { label: "Rechner", href: "/tv-l/allgemein/2026/rechner" }
      ]}
      isBeamte={false}
      vollzeitStunden={39}
    />
  );
}