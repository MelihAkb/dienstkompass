import Rechner from "@/components/Rechner";
import { BEAMTE_BW } from "@/lib/beamteLaender";
export default function Page() {
  return <Rechner titel="Beamte Baden-Württemberg Besoldungsrechner" untertitel="Berechne deine Nettobezüge als Landesbeamter in Baden-Württemberg (A-Besoldung)." gueltigAb="01.03.2024" tabelle={BEAMTE_BW} activePath="/beamte/bw" breadcrumb={[{ label: "Beamte", href: "/beamte" }, { label: "Länder", href: "/beamte/laender" }, { label: "BW", href: "/beamte/bw" }]} isBeamte={true} />;
}
