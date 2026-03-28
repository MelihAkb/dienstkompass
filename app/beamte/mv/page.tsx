import Rechner from "@/components/Rechner";
import { BEAMTE_MV } from "@/lib/beamteLaender";
export default function Page() {
  return <Rechner titel="Beamte Mecklenburg-Vorpommern Besoldungsrechner" untertitel="Berechne deine Nettobezüge als Landesbeamter in Mecklenburg-Vorpommern (A-Besoldung)." gueltigAb="01.11.2023" tabelle={BEAMTE_MV} activePath="/beamte/mv" breadcrumb={[{ label: "Beamte", href: "/beamte" }, { label: "Länder", href: "/beamte/laender" }, { label: "MV", href: "/beamte/mv" }]} isBeamte={true} />;
}
