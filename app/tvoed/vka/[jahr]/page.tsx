import VKAJahrClient from "./VKAJahrClient";

export function generateStaticParams() {
  return ["2024", "2025", "2026"].map(jahr => ({ jahr }));
}

export default function TVoeDVKAJahrPage({ params }: { params: { jahr: string } }) {
  return <VKAJahrClient jahr={params.jahr} />;
}
