import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Target, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const getMarketingCases = (t: (key: string) => string) => [
  {
    id: "social",
    icon: Users,
    title: t("home.marketing.cases.social.title"),
    description: t("home.marketing.cases.social.desc"),
    highlights: [
      t("home.marketing.cases.social.hl1"),
      t("home.marketing.cases.social.hl2"),
      t("home.marketing.cases.social.hl3")
    ],
    link: "/case/social-media",
  },
  {
    id: "ads",
    icon: Target,
    title: t("home.marketing.cases.ads.title"),
    description: t("home.marketing.cases.ads.desc"),
    highlights: [
      t("home.marketing.cases.ads.hl1"),
      t("home.marketing.cases.ads.hl2"),
      t("home.marketing.cases.ads.hl3"),
      t("home.marketing.cases.ads.hl4")
    ],
    link: "/case/ad-optimization",
  },
  {
    id: "seo",
    icon: Search,
    title: t("home.marketing.cases.seo.title"),
    description: t("home.marketing.cases.seo.desc"),
    highlights: [
      t("home.marketing.cases.seo.hl1"),
      t("home.marketing.cases.seo.hl2"),
      t("home.marketing.cases.seo.hl3")
    ],
    link: "/case/product-seo",
  },
];

export const MarketingSection = () => {
  const { t } = useLanguage();
  const marketingCases = getMarketingCases(t);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="marketing" className="relative bg-secondary/30 py-24" ref={ref}>
      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {t("home.marketing.sectionTag")}
          </span>
          <h2 className="section-title mb-4">{t("home.marketing.title")}</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {t("home.marketing.subtitle")}
          </p>
        </motion.div>

        {/* Achievement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-4 text-center"
        >
          <p className="text-lg font-bold text-foreground mb-2">{t("home.marketing.bannerTitle")}</p>
          <p className="text-base text-foreground flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
            <span>{t("home.marketing.banner1")} <span className="font-semibold text-primary">5.18</span></span>
            <span className="text-muted-foreground">|</span>
            <span>{t("home.marketing.banner2")} <span className="font-semibold text-primary">{t("home.marketing.banner2Value")}</span></span>
            <span className="text-muted-foreground">|</span>
            <span>{t("home.marketing.banner3")} <span className="font-semibold text-primary">88%</span></span>
          </p>
        </motion.div>

        {/* Cases Grid - 3 columns */}
        <div className="grid gap-6 md:grid-cols-3">
          {marketingCases.map((item, index) => (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group glass-card flex flex-col bg-background p-6 min-h-[200px]"
            >
              {/* Top Content Area */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 flex-grow">
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 sm:mb-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{item.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {item.highlights.map((highlight) => {
                      // Check if highlight contains parentheses content
                      const match = highlight.match(/^(.*)（(.*)）$/);
                      if (match) {
                        return (
                          <li
                            key={highlight}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {match[1]}<span className="font-bold text-primary">（{match[2]}）</span>
                          </li>
                        );
                      }
                      return (
                        <li
                          key={highlight}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {highlight}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* CTA - Fixed at bottom right */}
              <div className="mt-4 flex justify-end">
                <Link to={item.link} className="group/cta flex items-center gap-1 text-sm font-medium text-primary transition-all duration-300 hover:gap-2">
                  <span className="relative">
                    {t("home.marketing.viewCase")}
                    <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover/cta:w-full" />
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">{t("home.marketing.footerText")}</p>
        </motion.div>
      </div>
    </section>
  );
};
