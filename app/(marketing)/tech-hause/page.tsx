import type { Metadata } from "next";
import { TechHausePage } from "@/components/OfferingPage";
import { brand } from "@/lib/brand";
import { techHause } from "@/lib/offerings";

export const metadata: Metadata = {
  title: `${techHause.name} · ${brand.name}`,
  description: techHause.line,
};

export default function Page() {
  return <TechHausePage />;
}
