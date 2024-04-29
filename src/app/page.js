import HeroSection from "@/components/heroSection/HeroSection";
import Authentification from "@/components/sectionAuthentification/Authentification";
import Demos from "@/components/sectionDemos/Demos";
import InnerPage from "@/components/sectionInnerPages/InnerPages";
import UtilityPage from "@/components/sectionUtilityPages/UtilityPages";
import Image from "next/image";

export default function Home() {
  return (
    <div className="main">
      <HeroSection />
      <Demos />
      <InnerPage />
      <UtilityPage />
      <Authentification/>
    </div>
  );
}
