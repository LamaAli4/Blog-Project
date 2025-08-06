import CategoriesSection from "@/components/CategoriesSection";
import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import QuotesSection from "@/components/QuotesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <FeaturedSection />
        <CategoriesSection />
        <QuotesSection />
      </main>
    </div>
  );
}
