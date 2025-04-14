// app/services/[slug]/page.tsx

import Logistics from "../sections/Logistics";
import Warehouse from "../sections/Warehouse";
import Express from "../sections/Express";
import Surface from "../sections/Surface";
import B2B from "../sections/B2B";
import B2C from "../sections/B2C";
import D2C from "../sections/D2C";
import National from "../sections/National";
import Tailored from "../sections/Tailored";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

const componentMap: Record<string, () => JSX.Element> = {
  logistics: () => <Logistics />,
  warehouse: () => <Warehouse />,
  express: () => <Express />,
  surface: () => <Surface />,
  b2b: () => <B2B />,
  b2c: () => <B2C />,
  d2c: () => <D2C />,
  national: () => <National />,
  tailored: () => <Tailored />,
};

export async function generateStaticParams() {
  return [
    { slug: "logistics" },
    { slug: "warehouse" },
    { slug: "express" },
    { slug: "surface" },
    { slug: "b2b" },
    { slug: "b2c" },
    { slug: "d2c" },
    { slug: "national" },
    { slug: "tailored" },
  ];
}

type PageProps = {
  params: {
    slug: string;
  };
};

export default function ServicePage({ params }: PageProps) {
  const Component = componentMap[params.slug];

  if (!Component) {
    return <div>Service not found</div>;
  }

  return (
    <div className="all_services">
      <Breadcrumb />
      <Component />
    </div>
  );
}
