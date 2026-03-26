import Rechner from "@/components/Rechner";
import { BEAMTE_NW } from "@/lib/beamteLaender";
export default function Page() {
  return <Rechner titel="Beamte NRW Besoldungsrechner" untertitel="Berechne deine Nettobezüge als Landesbeamter in Nordrhein-Westfalen (A-Besoldung)." gueltigAb="01.04.2024" tabelle={BEAMTE_NW} activePath="/beamte/nw" breadcrumb={[{ label: "Beamte", href: "/beamte" }, { label: "Länder", href: "/beamte/laender" }, { label: "NW", href: "/beamte/nw" }]} isBeamte={true} />;
}
