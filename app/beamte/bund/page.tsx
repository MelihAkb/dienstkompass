import Rechner from "@/components/Rechner";
import { BUNDESBEAMTE } from "@/lib/tarifDaten";
export default function Page() {
  return <Rechner titel="Bundesbeamte Besoldungsrechner 2024" untertitel="Berechne deine Nettobezüge als Bundesbeamter (A-Besoldung). Gültig ab 01.03.2024." gueltigAb="01.03.2024" tabelle={BUNDESBEAMTE} activePath="/beamte/bund" breadcrumb={[{ label: "Beamte", href: "/beamte" }, { label: "Bundesbeamte", href: "/beamte/bund" }]} isBeamte={true} />;
}
