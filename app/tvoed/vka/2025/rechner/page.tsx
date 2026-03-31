import Rechner from "@/components/Rechner";
import { TVOED_VKA } from "@/lib/tarifDaten";

export default function Page() {
  return (
    <Rechner
      titel="TVöD VKA 2025 Rechner"
      untertitel="Berechnen Sie Ihr Brutto- und Nettogehalt für den TVöD VKA ab 01.04.2025"
      gueltigAb="01.04.2025"
      tabelle={TVOED_VKA}
      activePath="/tvoed/vka/2025/rechner"
      breadcrumb={[
        { label: "TVöD VKA", href: "/tvoed/vka" },
        { label: "2025", href: "/tvoed/vka/2025" },
        { label: "Rechner", href: "/tvoed/vka/2025/rechner" }
      ]}
      isBeamte={false}
      vollzeitStunden={39}
    />
  );
}