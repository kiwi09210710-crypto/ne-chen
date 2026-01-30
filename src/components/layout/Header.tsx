import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

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

const navItems: NavItem[] = [
  {
    id: "about",
    label: "關於我",
    children: [
      { id: "skills", label: "擅長技能" },
      { id: "intro", label: "自我介紹", href: "/about-me" },
      { id: "career", label: "職涯規劃" },
    ],
  },
  {
    id: "media",
    label: "自媒體",
    children: [
      { id: "analytics", label: "成效瀏覽" },
      { id: "website", label: "網站架設" },
      { id: "app", label: "App 開發 / Vibe Coding" },
    ],
  },
  {
    id: "marketing",
    label: "行銷案例",
    children: [
      { id: "social", label: "社群經營" },
      { id: "ads", label: "廣告優化" },
      { id: "proposal", label: "提案簡報" },
      { id: "kol", label: "KOL / KOC" },
      { id: "word-of-mouth", label: "口碑行銷+社群接球", href: "/case/word-of-mouth" },
    ],
  },
  {
    id: "ecommerce",
    label: "電商企劃",
    children: [
      { id: "campaigns", label: "電商活動" },
      { id: "pricing", label: "價格組合" },
      { id: "data", label: "數據分析" },
    ],
  },
  {
    id: "achievements",
    label: "專業成就",
    children: [
      { id: "n8n", label: "協助公司導入 n8n 自動化" },
    ],
  },
];

export const Header = () => {
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
            <span className="text-primary">行銷</span>
            <span className="text-foreground">作品集</span>
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
                      className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.id ? "rotate-180" : ""
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

          {/* Placeholder for alignment */}
          <div className="hidden w-20 lg:block" />

          {/* Mobile Menu Button */}
          <button
            className="rounded-md p-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
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
                        className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.id ? "rotate-180" : ""
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
