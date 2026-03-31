import Rechner from "@/components/Rechner";
import { TVOED_VKA_2026 } from "@/lib/tarifDaten";

export default function Page() {
  return (
    <Rechner
      titel="TVöD VKA 2026 Rechner"
      untertitel="Berechnen Sie Ihr Brutto- und Nettogehalt für den TVöD VKA ab 01.05.2026"
      gueltigAb="01.05.2026"
      tabelle={TVOED_VKA_2026}
      activePath="/tvoed/vka/2026/rechner"
      breadcrumb={[
        { label: "TVöD VKA", href: "/tvoed/vka" },
        { label: "2026", href: "/tvoed/vka/2026" },
        { label: "Rechner", href: "/tvoed/vka/2026/rechner" }
      ]}
      isBeamte={false}
      vollzeitStunden={39}
    />
  );
}