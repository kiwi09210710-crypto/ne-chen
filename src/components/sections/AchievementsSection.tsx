import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Zap, CheckCircle2, X } from "lucide-react";
import n8nWorkflowDemo from "@/assets/n8n-workflow-demo.png";
import n8nCompetitorDemo from "@/assets/n8n-competitor-demo.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const getAchievements = (t: (key: string) => string) => [
  t("home.achievements.achievement1"),
  t("home.achievements.achievement2"),
  t("home.achievements.achievement3"),
];

export const AchievementsSection = () => {
  const { t } = useLanguage();
  const achievements = getAchievements(t);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [previewImage, setPreviewImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
    <section id="achievements" className="relative bg-secondary/30 py-24" ref={ref}>
      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {t("home.achievements.sectionTag")}
          </span>
          <h2 className="section-title mb-4">{t("home.achievements.title")}</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {t("home.achievements.subtitle")}
          </p>
        </motion.div>

        {/* Main Achievement Card */}
        <motion.div
          id="n8n"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-4xl"
        >
          <div className="glass-card overflow-hidden bg-background">
            {/* Header */}
            <div className="border-b border-border bg-secondary/50 p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold sm:text-3xl">
                    {t("home.achievements.cardTitle")}
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {t("home.achievements.cardSubtitle")}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Achievements list */}
                <div>
                  <h4 className="mb-4 font-semibold">{t("home.achievements.mainAchievementsTitle")}</h4>
                  <ul className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <motion.li
                        key={achievement}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="rounded-lg border border-border bg-secondary/50 p-4 text-center"
                  >
                    <div className="font-display text-3xl font-semibold text-foreground">{t("home.achievements.stat1")}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{t("home.achievements.statLabel1")}</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="rounded-lg border border-border bg-secondary/50 p-4 text-center"
                  >
                    <div className="font-display text-3xl font-semibold text-foreground">{t("home.achievements.stat2")}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{t("home.achievements.statLabel2")}</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="rounded-lg border border-border bg-secondary/50 p-4 text-center"
                  >
                    <div className="font-display text-3xl font-semibold text-foreground">{t("home.achievements.stat3")}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{t("home.achievements.statLabel3")}</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    className="rounded-lg border border-border bg-secondary/50 p-4 text-center"
                  >
                    <div className="font-display text-3xl font-semibold text-foreground">{t("home.achievements.stat4")}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{t("home.achievements.statLabel4")}</div>
                  </motion.div>
                </div>
              </div>

              {/* Demo Images */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="mt-8 grid gap-4 md:grid-cols-2"
              >
                {/* Demo Image 1 */}
                <div
                  className="group relative overflow-hidden rounded-lg border border-border bg-secondary/30 transition-colors hover:border-primary/40 cursor-zoom-in"
                  onClick={() => setPreviewImage({ src: n8nWorkflowDemo, alt: t("home.achievements.demoImgAlt1") })}
                >
                  <img src={n8nWorkflowDemo} alt={t("home.achievements.demoImgAlt1")} className="w-full aspect-[16/10] object-cover transition-transform duration-200 hover:scale-105" />
                </div>
                {/* Demo Image 2 */}
                <div
                  className="group relative overflow-hidden rounded-lg border border-border bg-secondary/30 transition-colors hover:border-primary/40 cursor-zoom-in"
                  onClick={() => setPreviewImage({ src: n8nCompetitorDemo, alt: t("home.achievements.demoImgAlt2") })}
                >
                  <img src={n8nCompetitorDemo} alt={t("home.achievements.demoImgAlt2")} className="w-full aspect-[16/10] object-cover transition-transform duration-200 hover:scale-105" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Image Preview Modal */}
    <AnimatePresence>
      {previewImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setPreviewImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-h-[90vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground shadow-lg transition-colors hover:bg-secondary z-10"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={previewImage.src}
              alt={previewImage.alt}
              className="max-h-[85vh] rounded-lg object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};
