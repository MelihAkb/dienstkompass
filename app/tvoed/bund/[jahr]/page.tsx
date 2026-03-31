import BundJahrClient from "./BundJahrClient";

export function generateStaticParams() {
  return ["2021", "2022", "2023", "2024", "2025", "2026"].map(jahr => ({ jahr }));
}

export default function TVoeDBundJahrPage({ params }: { params: { jahr: string } }) {
  return <BundJahrClient jahr={params.jahr} />;
}
