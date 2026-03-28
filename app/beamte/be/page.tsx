import Rechner from "@/components/Rechner";
import { BEAMTE_BE } from "@/lib/beamteLaender";
export default function Page() {
  return <Rechner titel="Beamte Berlin Besoldungsrechner" untertitel="Berechne deine Nettobezüge als Landesbeamter in Berlin (A-Besoldung)." gueltigAb="01.01.2024" tabelle={BEAMTE_BE} activePath="/beamte/be" breadcrumb={[{ label: "Beamte", href: "/beamte" }, { label: "Länder", href: "/beamte/laender" }, { label: "BE", href: "/beamte/be" }]} isBeamte={true} />;
}
