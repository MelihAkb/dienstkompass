import Rechner from "@/components/Rechner";
import { BEAMTE_RP } from "@/lib/beamteLaender";
export default function Page() {
  return <Rechner titel="Beamte Rheinland-Pfalz Besoldungsrechner" untertitel="Berechne deine Nettobezüge als Landesbeamter in Rheinland-Pfalz (A-Besoldung)." gueltigAb="01.01.2024" tabelle={BEAMTE_RP} activePath="/beamte/rp" breadcrumb={[{ label: "Beamte", href: "/beamte" }, { label: "Länder", href: "/beamte/laender" }, { label: "RP", href: "/beamte/rp" }]} isBeamte={true} />;
}
