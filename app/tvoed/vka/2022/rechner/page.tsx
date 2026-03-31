import Rechner from "@/components/Rechner";
import { TVOED_VKA_2023 } from "@/lib/tarifDaten";

export default function Page() {
  return (
    <Rechner
      titel="TVöD VKA 2022 Rechner"
      untertitel="Berechnen Sie Ihr Brutto- und Nettogehalt für den TVöD VKA ab 01.04.2022"
      gueltigAb="01.04.2022"
      tabelle={TVOED_VKA_2023}
      activePath="/tvoed/vka/2022/rechner"
      breadcrumb={[
        { label: "TVöD VKA", href: "/tvoed/vka" },
        { label: "2022", href: "/tvoed/vka/2022" },
        { label: "Rechner", href: "/tvoed/vka/2022/rechner" }
      ]}
      isBeamte={false}
      vollzeitStunden={39}
    />
  );
}