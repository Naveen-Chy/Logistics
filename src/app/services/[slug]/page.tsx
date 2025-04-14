// app/services/[slug]/page.tsx

import { notFound } from "next/navigation";
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

type Params = {
  slug: string;
};

const componentMap: Record<string, React.ComponentType> = {
  logistics: Logistics,
  warehouse: Warehouse,
  express: Express,
  surface: Surface,
  b2b: B2B,
  b2c: B2C,
  d2c: D2C,
  national: National,
  tailored: Tailored,
};

const servicesMeta: Record<
  string,
  { title: string }
> = {
  logistics: { title: "Logistic Solutions" },
  warehouse: { title: "Advanced Warehouse Storage" },
  express: { title: "Express Delivery" },
  surface: { title: "Surface Delivery" },
  b2b: { title: "B2B Logistics Solution" },
  b2c: { title: "B2C Pickup and Drop" },
  d2c: { title: "D2C Delivery" },
  national: { title: "National Logistic Solutions" },
  tailored: { title: "Tailored Solutions" },
};

export default function ServicePage({ params }: { params: Params }) {
  const { slug } = params;

  const Component = componentMap[slug];
  const service = servicesMeta[slug];

  if (!Component || !service) {
    notFound(); // Handles missing services more gracefully
  }

  return (
    <div className="all_services">
      <Breadcrumb />
      <Component />
    </div>
  );
}
