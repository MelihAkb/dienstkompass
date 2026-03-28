import Rechner from "@/components/Rechner";
import { BEAMTE_ST } from "@/lib/beamteLaender";
export default function Page() {
  return <Rechner titel="Beamte Sachsen-Anhalt Besoldungsrechner" untertitel="Berechne deine Nettobezüge als Landesbeamter in Sachsen-Anhalt (A-Besoldung)." gueltigAb="01.01.2024" tabelle={BEAMTE_ST} activePath="/beamte/st" breadcrumb={[{ label: "Beamte", href: "/beamte" }, { label: "Länder", href: "/beamte/laender" }, { label: "ST", href: "/beamte/st" }]} isBeamte={true} />;
}
