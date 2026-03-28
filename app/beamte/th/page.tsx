import Rechner from "@/components/Rechner";
import { BEAMTE_TH } from "@/lib/beamteLaender";
export default function Page() {
  return <Rechner titel="Beamte Thüringen Besoldungsrechner" untertitel="Berechne deine Nettobezüge als Landesbeamter in Thüringen (A-Besoldung)." gueltigAb="01.04.2024" tabelle={BEAMTE_TH} activePath="/beamte/th" breadcrumb={[{ label: "Beamte", href: "/beamte" }, { label: "Länder", href: "/beamte/laender" }, { label: "TH", href: "/beamte/th" }]} isBeamte={true} />;
}
