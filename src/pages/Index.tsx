import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";

import { MediaSection } from "@/components/sections/MediaSection";
import { MarketingSection } from "@/components/sections/MarketingSection";
import { EcommerceSection } from "@/components/sections/EcommerceSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { List, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const getTocSections = (t: (key: string) => string) => [
  { id: "media", label: t("home.toc.media") },
  { id: "marketing", label: t("home.toc.marketing") },
  { id: "ecommerce", label: t("home.toc.ecommerce") },
  { id: "achievements", label: t("home.toc.achievements") },
];

const Index = () => {
  const { t } = useLanguage();
  const tocSections = getTocSections(t);
  const [activeSection, setActiveSection] = useState<string>("media");
  const [showToc, setShowToc] = useState(false);
  const [tocDismissed, setTocDismissed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    const sectionIds = ["media", "marketing", "ecommerce", "achievements"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowToc(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Sidebar TOC - Desktop Only */}
      <nav className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-1 w-[200px] pl-5 pr-4 py-4 rounded-r-xl bg-background/80 backdrop-blur-md border-r border-y border-border/30 shadow-lg transition-all duration-500 ease-out ${showToc && !tocDismissed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
        }`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <List className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">{t("common.toc")}</span>
          </div>
          <button
            onClick={() => setTocDismissed(true)}
            className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md hover:bg-secondary/50"
            title={t("common.collapseToc")}
          >
            <PanelLeftClose className="h-4 w-4" />
          </button>
        </div>
        <div className="relative pl-3">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full bg-border" />
          {tocSections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative block w-full text-left py-2 pl-4 text-sm transition-all duration-200 rounded-r-md ${activeSection === section.id
                ? "text-primary font-semibold bg-primary/5"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                }`}
            >
              {activeSection === section.id && (
                <span className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[2px] h-5 rounded-full bg-primary" />
              )}
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Re-open TOC Tab */}
      <button
        onClick={() => setTocDismissed(false)}
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden xl:flex items-center gap-1 pl-2 pr-3 py-3 rounded-r-lg bg-background/80 backdrop-blur-md border-r border-y border-border/30 shadow-md text-muted-foreground hover:text-primary transition-all duration-500 ease-out ${showToc && tocDismissed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"}`}
        title={t("common.expandToc")}
      >
        <PanelLeftOpen className="h-4 w-4" />
      </button>

      <main>
        <HeroSection />

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
