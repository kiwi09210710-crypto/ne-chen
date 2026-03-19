import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, BarChart2, Users, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const getEcommerceItems = (t: (key: string) => string) => [
  {
    id: "campaigns",
    icon: ShoppingCart,
    title: t("home.ecommerce.items.campaigns.title"),
    description: t("home.ecommerce.items.campaigns.desc"),
    subtitle: t("home.ecommerce.items.campaigns.subtitle"),
    details: [
      t("home.ecommerce.items.campaigns.dt1"),
      t("home.ecommerce.items.campaigns.dt2"),
      t("home.ecommerce.items.campaigns.dt3"),
    ],
    showCta: true,
    ctaHref: "/case/ecommerce",
  },
  {
    id: "data",
    icon: BarChart2,
    title: t("home.ecommerce.items.data.title"),
    description: t("home.ecommerce.items.data.desc"),
    subtitle: t("home.ecommerce.items.data.subtitle"),
    details: [
      t("home.ecommerce.items.data.dt1"),
      t("home.ecommerce.items.data.dt2"),
      t("home.ecommerce.items.data.dt3"),
    ],
    showCta: true,
    ctaHref: "/case/product-seo#section-ga-traffic",
  },
  {
    id: "crm",
    icon: Users,
    title: t("home.ecommerce.items.crm.title"),
    description: t("home.ecommerce.items.crm.desc"),
    details: [
      t("home.ecommerce.items.crm.dt1"),
      t("home.ecommerce.items.crm.dt2"),
      t("home.ecommerce.items.crm.dt3"),
      t("home.ecommerce.items.crm.dt4"),
    ],
    showCta: true,
    ctaHref: "/case/crm",
  },
];

export const EcommerceSection = () => {
  const { t } = useLanguage();
  const ecommerceItems = getEcommerceItems(t);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecommerce" className="relative py-24" ref={ref}>
      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {t("home.ecommerce.sectionTag")}
          </span>
          <h2 className="section-title mb-4">{t("home.ecommerce.title")}</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {t("home.ecommerce.subtitle")}
          </p>
        </motion.div>

        {/* Achievement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-4 text-center"
        >
          <p className="text-lg font-bold text-foreground mb-2">{t("home.ecommerce.bannerTitle")}</p>
          <p className="text-base text-foreground flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
            <span>{t("home.ecommerce.banner1")} <span className="font-semibold text-primary">49%</span></span>
            <span className="text-muted-foreground">|</span>
            <span>{t("home.ecommerce.banner2")} <span className="font-semibold text-primary">119%</span></span>
            <span className="text-muted-foreground">|</span>
            <span><span className="font-semibold text-primary">31%</span> {t("home.ecommerce.banner3")}</span>
          </p>
        </motion.div>

        {/* Items */}
        <div className="grid gap-6 lg:grid-cols-3">
          {ecommerceItems.map((item, index) => (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="glass-card h-full p-6">
                {/* Number */}
                <span className="absolute right-6 top-6 font-display text-4xl font-bold text-muted/20">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="mb-2 text-sm text-muted-foreground">{item.description}</p>
                {item.subtitle && (
                  <p className="mb-5 text-base font-bold text-primary">{item.subtitle}</p>
                )}
                {!item.subtitle && <div className="mb-3" />}

                {/* Details list */}
                <ul className="space-y-2.5">
                  {item.details.map((detail, i) => {
                    // Check if detail contains colon with percentage
                    const colonMatch = detail.match(/^(.+[:：])(.+)$/);
                    if (colonMatch && (colonMatch[2].includes('%') || colonMatch[2].includes('31'))) {
                      return (
                        <motion.li
                          key={detail}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: 0.4 + index * 0.15 + i * 0.05 }}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {colonMatch[1]}<span className="font-bold text-primary">{colonMatch[2]}</span>
                        </motion.li>
                      );
                    }
                    return (
                      <motion.li
                        key={detail}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.15 + i * 0.05 }}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {detail}
                      </motion.li>
                    );
                  })}
                </ul>

                {/* CTA Button */}
                {item.showCta && (
                  <div className="mt-4 flex justify-end">
                    <Link
                      to={item.ctaHref ?? "/"}
                      className="group/cta flex items-center gap-1 text-sm font-medium text-primary transition-all duration-300 hover:gap-2"
                    >
                      <span className="relative">
                        {t("home.ecommerce.viewCase")}
                        <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover/cta:w-full" />
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
