import Rechner from "@/components/Rechner";
import { TVOED_S } from "@/lib/tarifDaten";
export default function Page() {
  return <Rechner titel="TVöD-S Gehaltsrechner 2025" untertitel="Berechne dein Gehalt im TVöD-S (Sparkassen). Für Beschäftigte bei Sparkassen und Landesbanken." gueltigAb="01.04.2025" tabelle={TVOED_S} activePath="/tvoed/s" breadcrumb={[{ label: "TVöD", href: "/tvoed" }, { label: "TVöD-S Sparkassen", href: "/tvoed/s" }]} />;
}
