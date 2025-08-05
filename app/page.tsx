import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <FeaturedSection/>
      </main>
    </div>
  );
}
