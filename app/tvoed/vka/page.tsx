import Rechner from "@/components/Rechner";
import { TVOED_VKA } from "@/lib/tarifDaten";
export default function Page() {
  return <Rechner titel="TVöD VKA Gehaltsrechner 2025" untertitel="Berechne dein Brutto- und Nettogehalt im TVöD VKA (Kommunen). Klicke auf eine Zelle zur direkten Berechnung." gueltigAb="01.04.2025" tabelle={TVOED_VKA} activePath="/tvoed/vka" breadcrumb={[{ label: "TVöD", href: "/tvoed" }, { label: "TVöD VKA", href: "/tvoed/vka" }]} />;
}
