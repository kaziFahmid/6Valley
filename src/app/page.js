import BrowseCategory from "@/components/BrowseCategory/BrowseCategory";
import HeroSection from "@/components/HeroSection/HeroSection";
import Recommended from "@/components/Recommended/Recommended";
import Image from "next/image";

export default function Home() {
  return (
<>
<BrowseCategory/>
<HeroSection/>
<Recommended/>
</>
  );
}
