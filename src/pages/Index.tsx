import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { MediaSection } from "@/components/sections/MediaSection";
import { MarketingSection } from "@/components/sections/MarketingSection";
import { EcommerceSection } from "@/components/sections/EcommerceSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MediaSection />
        <MarketingSection />
        <EcommerceSection />
        <AchievementsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
