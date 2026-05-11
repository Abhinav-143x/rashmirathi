import { RashmirathiApp } from "@/components/RashmirathiApp";
import { getMetadata } from "@/lib/content";

export default function Home() {
  return <RashmirathiApp metadata={getMetadata()} />;
}
