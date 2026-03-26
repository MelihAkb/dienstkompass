import Rechner from "@/components/Rechner";
import { CARITAS } from "@/lib/tarifDaten";
export default function Page() {
  return <Rechner titel="Caritas AVR Gehaltsrechner 2024" untertitel="Berechne dein Gehalt nach den Arbeitsvertragsrichtlinien der Caritas (AVR). Für Beschäftigte in Caritas-Einrichtungen." gueltigAb="01.03.2024" tabelle={CARITAS} activePath="/wohlfahrt/caritas" breadcrumb={[{ label: "Kirchen & Wohlfahrt", href: "/wohlfahrt" }, { label: "Caritas", href: "/wohlfahrt/caritas" }]} />;
}
