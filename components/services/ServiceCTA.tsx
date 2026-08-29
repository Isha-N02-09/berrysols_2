import ContactFlow from "@/components/ContactFlow";
import type { Service } from "@/data/services";

export default function ServiceCTA({ service }: { service: Service }) {
  return <ContactFlow />;
}
