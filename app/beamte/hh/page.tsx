import Rechner from "@/components/Rechner";
import { BEAMTE_HH } from "@/lib/beamteLaender";
export default function Page() {
  return <Rechner titel="Beamte Hamburg Besoldungsrechner" untertitel="Berechne deine Nettobezüge als Landesbeamter in Hamburg (A-Besoldung)." gueltigAb="01.01.2024" tabelle={BEAMTE_HH} activePath="/beamte/hh" breadcrumb={[{ label: "Beamte", href: "/beamte" }, { label: "Länder", href: "/beamte/laender" }, { label: "HH", href: "/beamte/hh" }]} isBeamte={true} />;
}
