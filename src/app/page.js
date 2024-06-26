import AllProducts from "@/components/AllProducts/AllProducts";
import BrowseCategory from "@/components/BrowseCategory/BrowseCategory";
import HeroSection from "@/components/HeroSection/HeroSection";
import Recommended from "@/components/Recommended/Recommended";
import Services from "@/components/Services/Services";
import Image from "next/image";

export default function Home() {
  return (
<>
<BrowseCategory/>
<HeroSection/>
<Recommended/>
<AllProducts/>
<Services/>
</>
  );
}
