import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="mb-2 font-display text-xl font-semibold">
              <span className="text-primary">{t("common.marketing")}</span>
              <span className="text-foreground"> {t("common.portfolio")}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("common.allRightsReserved")}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <motion.a
              href="mailto:ne.chen0921@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="tel:0963545160"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            whileHover={{ y: -2 }}
          >
            <ArrowUp className="h-4 w-4" />
            {t("common.backToTop")}
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
