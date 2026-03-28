import Rechner from "@/components/Rechner";
import { BEAMTE_NI } from "@/lib/beamteLaender";
export default function Page() {
  return <Rechner titel="Beamte Niedersachsen Besoldungsrechner" untertitel="Berechne deine Nettobezüge als Landesbeamter in Niedersachsen (A-Besoldung)." gueltigAb="01.12.2023" tabelle={BEAMTE_NI} activePath="/beamte/ni" breadcrumb={[{ label: "Beamte", href: "/beamte" }, { label: "Länder", href: "/beamte/laender" }, { label: "NI", href: "/beamte/ni" }]} isBeamte={true} />;
}
