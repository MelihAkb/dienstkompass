import Rechner from "@/components/Rechner";
import { BEAMTE_SH } from "@/lib/beamteLaender";
export default function Page() {
  return <Rechner titel="Beamte Schleswig-Holstein Besoldungsrechner" untertitel="Berechne deine Nettobezüge als Landesbeamter in Schleswig-Holstein (A-Besoldung)." gueltigAb="01.01.2024" tabelle={BEAMTE_SH} activePath="/beamte/sh" breadcrumb={[{ label: "Beamte", href: "/beamte" }, { label: "Länder", href: "/beamte/laender" }, { label: "SH", href: "/beamte/sh" }]} isBeamte={true} />;
}
