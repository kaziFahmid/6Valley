import AllProducts from "@/components/AllProducts/AllProducts";
import CategorySection from "@/components/CategorySection/CategorySection";
import HeroSection from "@/components/HeroSection/HeroSection";
import Recommended from "@/components/Recommended/Recommended";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
<>
<HeroSection/>
<Recommended/>
<CategorySection/>
<AllProducts/>
<Services/>
</>
  );
}
