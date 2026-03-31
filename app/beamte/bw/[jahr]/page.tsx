import BWJahrClient from "./BWJahrClient";

export function generateStaticParams() {
  return ["2021", "2022", "2023", "2024"].map(jahr => ({ jahr }));
}

export default function BWJahrPage({ params }: { params: { jahr: string } }) {
  return <BWJahrClient jahr={params.jahr} />;
}