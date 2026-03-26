import Rechner from "@/components/Rechner";
import { BEAMTE_BY } from "@/lib/beamteLaender";
export default function Page() {
  return <Rechner titel="Beamte Bayern Besoldungsrechner" untertitel="Berechne deine Nettobezüge als Landesbeamter in Bayern (A-Besoldung)." gueltigAb="01.12.2023" tabelle={BEAMTE_BY} activePath="/beamte/by" breadcrumb={[{ label: "Beamte", href: "/beamte" }, { label: "Länder", href: "/beamte/laender" }, { label: "BY", href: "/beamte/by" }]} isBeamte={true} />;
}
