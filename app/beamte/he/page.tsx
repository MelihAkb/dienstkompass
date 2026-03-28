import Rechner from "@/components/Rechner";
import { BEAMTE_HE } from "@/lib/beamteLaender";
export default function Page() {
  return <Rechner titel="Beamte Hessen Besoldungsrechner" untertitel="Berechne deine Nettobezüge als Landesbeamter in Hessen (A-Besoldung)." gueltigAb="01.04.2024" tabelle={BEAMTE_HE} activePath="/beamte/he" breadcrumb={[{ label: "Beamte", href: "/beamte" }, { label: "Länder", href: "/beamte/laender" }, { label: "HE", href: "/beamte/he" }]} isBeamte={true} />;
}
