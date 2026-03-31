import Rechner from "@/components/Rechner";
import { TVOED_VKA_2024 } from "@/lib/tarifDaten";

export default function Page() {
  return (
    <Rechner
      titel="TVöD VKA 2024 Rechner"
      untertitel="Berechnen Sie Ihr Brutto- und Nettogehalt für den TVöD VKA ab 01.03.2024"
      gueltigAb="01.03.2024"
      tabelle={TVOED_VKA_2024}
      activePath="/tvoed/vka/2024/rechner"
      breadcrumb={[
        { label: "TVöD VKA", href: "/tvoed/vka" },
        { label: "2024", href: "/tvoed/vka/2024" },
        { label: "Rechner", href: "/tvoed/vka/2024/rechner" }
      ]}
      isBeamte={false}
      vollzeitStunden={39}
    />
  );
}