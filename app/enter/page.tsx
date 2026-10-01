import type { Metadata } from "next";
import { EventsApp } from "@/components/EventsApp";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Enter · ${brand.name}`,
  description: `Join Tech Hause. The membership of ${brand.name}.`,
};

export default function EnterPage() {
  return <EventsApp skipGate />;
}
