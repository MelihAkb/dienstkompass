import Rechner from "@/components/Rechner";
import { BEAMTE_BB } from "@/lib/beamteLaender";
export default function Page() {
  return <Rechner titel="Beamte Brandenburg Besoldungsrechner" untertitel="Berechne deine Nettobezüge als Landesbeamter in Brandenburg (A-Besoldung)." gueltigAb="01.02.2024" tabelle={BEAMTE_BB} activePath="/beamte/bb" breadcrumb={[{ label: "Beamte", href: "/beamte" }, { label: "Länder", href: "/beamte/laender" }, { label: "BB", href: "/beamte/bb" }]} isBeamte={true} />;
}
