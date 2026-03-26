import Rechner from "@/components/Rechner";
import { TV_L } from "@/lib/tarifDaten";
export default function Page() {
  return <Rechner titel="TV-L Gehaltsrechner 2026" untertitel="Berechne dein Gehalt im Tarifvertrag der Länder (TV-L). Gültig ab 01.04.2026 nach Tarifeinigung Februar 2026." gueltigAb="01.04.2026" tabelle={TV_L} activePath="/tv-l/allgemein" breadcrumb={[{ label: "TV-L", href: "/tv-l" }, { label: "TV-L allgemein", href: "/tv-l/allgemein" }]} />;
}
