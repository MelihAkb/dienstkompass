import Rechner from "@/components/Rechner";
import { BEAMTE_SL } from "@/lib/beamteLaender";
export default function Page() {
  return <Rechner titel="Beamte Saarland Besoldungsrechner" untertitel="Berechne deine Nettobezüge als Landesbeamter im Saarland (A-Besoldung)." gueltigAb="01.04.2024" tabelle={BEAMTE_SL} activePath="/beamte/sl" breadcrumb={[{ label: "Beamte", href: "/beamte" }, { label: "Länder", href: "/beamte/laender" }, { label: "SL", href: "/beamte/sl" }]} isBeamte={true} />;
}
