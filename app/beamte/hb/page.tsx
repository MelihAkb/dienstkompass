import Rechner from "@/components/Rechner";
import { BEAMTE_HB } from "@/lib/beamteLaender";
export default function Page() {
  return <Rechner titel="Beamte Bremen Besoldungsrechner" untertitel="Berechne deine Nettobezüge als Landesbeamter in Bremen (A-Besoldung)." gueltigAb="01.01.2024" tabelle={BEAMTE_HB} activePath="/beamte/hb" breadcrumb={[{ label: "Beamte", href: "/beamte" }, { label: "Länder", href: "/beamte/laender" }, { label: "HB", href: "/beamte/hb" }]} isBeamte={true} />;
}
