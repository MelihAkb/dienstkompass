import Rechner from "@/components/Rechner";
import { BEAMTE_SN } from "@/lib/beamteLaender";
export default function Page() {
  return <Rechner titel="Beamte Sachsen Besoldungsrechner" untertitel="Berechne deine Nettobezüge als Landesbeamter in Sachsen (A-Besoldung)." gueltigAb="01.01.2024" tabelle={BEAMTE_SN} activePath="/beamte/sn" breadcrumb={[{ label: "Beamte", href: "/beamte" }, { label: "Länder", href: "/beamte/laender" }, { label: "SN", href: "/beamte/sn" }]} isBeamte={true} />;
}
