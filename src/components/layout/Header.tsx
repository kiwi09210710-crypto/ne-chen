import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface NavChild {
  id: string;
  label: string;
  href?: string;
}

interface NavItem {
  id: string;
  label: string;
  children?: NavChild[];
}

const getNavItems = (t: (key: string) => string): NavItem[] => [
  {
    id: "about",
    label: t("header.about"),
    children: [
      { id: "intro", label: t("header.intro"), href: "/about-me" },
    ],
  },
  {
    id: "media",
    label: t("header.media"),
    children: [
      { id: "analytics", label: t("header.brandAchievement") },
      { id: "website", label: t("header.website") },
      { id: "app", label: t("header.appDev") },
    ],
  },
  {
    id: "marketing",
    label: t("header.marketing"),
    children: [
      { id: "social", label: t("header.socialMedia"), href: "/case/social-media" },
      { id: "ads", label: t("header.adOptimization"), href: "/case/ad-optimization" },
      { id: "proposal", label: t("header.proposal"), href: "/case/proposal" },
      { id: "kol", label: t("header.kol"), href: "/case/kol-koc" },
      { id: "product", label: t("header.productPlanning"), href: "/case/product-seo" },
    ],
  },
  {
    id: "ecommerce",
    label: t("header.ecommerce"),
    children: [
      { id: "campaigns", label: t("header.campaigns"), href: "/case/ecommerce" },
      { id: "data", label: t("header.dataAnalytics"), href: "/case/product-seo#section-ga-traffic" },
      { id: "crm", label: t("header.crm"), href: "/case/crm" },
    ],
  },
  {
    id: "achievements",
    label: t("header.achievements"),
    children: [
      { id: "n8n", label: t("header.n8n") },
    ],
  },
];

export const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const navItems = getNavItems(t);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleChildClick = (child: NavChild) => {
    if (child.href) {
      navigate(child.href);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(child.id), 100);
      } else {
        scrollToSection(child.id);
      }
    }
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.a
          href="#"
          className="font-display text-xl font-semibold tracking-tight"
          whileHover={{ scale: 1.02 }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="text-primary">{t("common.marketing")}</span>
          <span className="text-foreground"> {t("common.portfolio")}</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="nav-link flex items-center gap-1 px-4 py-2 text-sm font-medium"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.id ? "rotate-180" : ""
                      }`}
                  />
                )}
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {item.children && activeDropdown === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full pt-2"
                  >
                    <div className="min-w-[200px] overflow-hidden rounded-lg border border-border bg-background p-2 shadow-lg">
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          className="block w-full rounded-md px-4 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                          onClick={() => handleChildClick(child)}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Desktop Language Switcher */}
        <div className="hidden w-20 lg:flex justify-end">
          <button
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            className="flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Globe className="h-4 w-4" />
            <span>{lang === "zh" ? "EN" : "中"}</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-1 lg:hidden">
          <button
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            className="rounded-md p-2 text-foreground transition-colors hover:bg-secondary"
          >
            <Globe className="h-5 w-5" />
          </button>
          <button
            className="rounded-md p-2 text-foreground transition-colors hover:bg-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="container mx-auto px-6 py-4">
              {navItems.map((item) => (
                <div key={item.id} className="border-b border-border py-3 last:border-0">
                  <button
                    className="flex w-full items-center justify-between text-left font-medium text-foreground"
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.id ? null : item.id)
                    }
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${activeDropdown === item.id ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </button>
                  <AnimatePresence>
                    {item.children && activeDropdown === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 space-y-1 overflow-hidden pl-4"
                      >
                        {item.children.map((child) => (
                          <button
                            key={child.id}
                            className="block w-full py-2 text-left text-sm text-muted-foreground transition-colors hover:text-primary"
                            onClick={() => handleChildClick(child)}
                          >
                            {child.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
