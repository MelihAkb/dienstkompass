import Rechner from "@/components/Rechner";
import { DIAKONIE } from "@/lib/tarifDaten";
export default function Page() {
  return <Rechner titel="Diakonie AVR Gehaltsrechner 2024" untertitel="Berechne dein Gehalt nach den Arbeitsvertragsrichtlinien der Diakonie (AVR). Für Beschäftigte in diakonischen Einrichtungen." gueltigAb="01.04.2024" tabelle={DIAKONIE} activePath="/wohlfahrt/diakonie" breadcrumb={[{ label: "Kirchen & Wohlfahrt", href: "/wohlfahrt" }, { label: "Diakonie", href: "/wohlfahrt/diakonie" }]} />;
}
