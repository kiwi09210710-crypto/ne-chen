import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, CheckCircle2, ArrowRight } from "lucide-react";

const achievements = [
  "完整導入 n8n 自動化工作流程",
  "整合多個系統與 API 串接",
  "減少 80% 重複性人工作業",
  "建立即時通知與監控機制",
  "提升團隊整體工作效率",
];

export const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
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
            Achievements
          </span>
          <h2 className="section-title mb-4">專業成就</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            運用技術專長，為企業創造實質價值
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
                    協助公司導入 n8n 自動化
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    打造高效率的自動化工作流程系統
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Achievements list */}
                <div>
                  <h4 className="mb-4 font-semibold">主要成就</h4>
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
                    <div className="font-display text-3xl font-semibold text-foreground">80%</div>
                    <div className="mt-1 text-xs text-muted-foreground">減少人工作業</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="rounded-lg border border-border bg-secondary/50 p-4 text-center"
                  >
                    <div className="font-display text-3xl font-semibold text-foreground">50+</div>
                    <div className="mt-1 text-xs text-muted-foreground">自動化流程</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="rounded-lg border border-border bg-secondary/50 p-4 text-center"
                  >
                    <div className="font-display text-3xl font-semibold text-foreground">24/7</div>
                    <div className="mt-1 text-xs text-muted-foreground">自動執行</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    className="rounded-lg border border-border bg-secondary/50 p-4 text-center"
                  >
                    <div className="font-display text-3xl font-semibold text-foreground">10+</div>
                    <div className="mt-1 text-xs text-muted-foreground">系統整合</div>
                  </motion.div>
                </div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="mt-8 flex justify-center"
              >
                <button className="hero-button flex items-center gap-2">
                  了解更多
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
