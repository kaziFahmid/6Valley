import AllProductsSection from "@/components/AllProductsSection/AllProductsSection";
import CategorySection from "@/components/CategorySection/CategorySection";
import HeroSection from "@/components/HeroSection/HeroSection";
import RecommendedSection from "@/components/RecommendedSection/RecommendedSection";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RecommendedSection />
      <CategorySection />
      <AllProductsSection />
      <Services />
    </>
  );
}
