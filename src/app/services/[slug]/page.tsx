// app/services/[slug]/page.tsx

import { notFound } from "next/navigation";
import type { Metadata } from "next";  // Importing Metadata type
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

// List of services with title, slug, and component name
const services = [
  { title: "Logistic Solutions", slug: "logistics", component: "Logistics" },
  { title: "Advanced Warehouse Storage", slug: "warehouse", component: "Warehouse" },
  { title: "Express Delivery", slug: "express", component: "Express" },
  { title: "Surface Delivery", slug: "surface", component: "Surface" },
  { title: "B2B Logistics Solution", slug: "b2b", component: "B2B" },
  { title: "B2C Pickup and Drop", slug: "b2c", component: "B2C" },
  { title: "D2C Delivery", slug: "d2c", component: "D2C" },
  { title: "National Logistic Solutions", slug: "national", component: "National" },
  { title: "Tailored Solutions", slug: "tailored", component: "Tailored" },
];

// Component map for dynamic import
const componentMap: Record<string, React.ComponentType> = {
  Logistics,
  Warehouse,
  Express,
  Surface,
  B2B,
  B2C,
  D2C,
  National,
  Tailored,
};

// Static params for dynamic routes
export function generateStaticParams() {
  return services.map(service => ({ slug: service.slug }));
}

// **Generate dynamic metadata for SEO**
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find(s => s.slug === params.slug);  // Finding the service based on slug

  if (!service) return {};  // Return empty if service not found

  // Return dynamic title and description based on the service
  return {
    title: service.title,  // Dynamic page title
    description: `Learn more about our ${service.title.toLowerCase()}. We provide professional and reliable service tailored to your needs.`,  // Dynamic meta description
  };
}

// The actual page rendering for the service
export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);
  if (!service) return notFound();

  const Component = componentMap[service.component];
  if (!Component) return notFound();

  return (
    <div className="all_services">
      <Breadcrumb />
      <Component />
    </div>
  );
}
