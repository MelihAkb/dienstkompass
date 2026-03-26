import Rechner from "@/components/Rechner";
import { TVOED_SUE } from "@/lib/tarifDaten";
export default function Page() {
  return <Rechner titel="TVöD SuE Gehaltsrechner 2026" untertitel="Berechne dein Gehalt im Sozial- und Erziehungsdienst. Für Erzieher, Sozialpädagogen und Pflegekräfte." gueltigAb="01.05.2026" tabelle={TVOED_SUE} activePath="/tvoed/sue" breadcrumb={[{ label: "TVöD", href: "/tvoed" }, { label: "TVöD SuE", href: "/tvoed/sue" }]} />;
}
