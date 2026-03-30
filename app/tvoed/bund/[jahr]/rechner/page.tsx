import BundJahrClient from "../BundJahrClient";

export function generateStaticParams() {
  return ["2024", "2025", "2026"].map(jahr => ({ jahr }));
}

export default function TVoeDBundJahrRechnerPage({ params }: { params: { jahr: string } }) {
  return <BundJahrClient jahr={params.jahr} />;
}
