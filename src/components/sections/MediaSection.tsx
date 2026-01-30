import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Globe, Smartphone, ArrowUpRight } from "lucide-react";

const mediaProjects = [
  {
    id: "analytics",
    icon: TrendingUp,
    title: "成效瀏覽",
    description: "透過數據追蹤與分析，優化內容策略，提升互動與觸及率",
    metrics: ["觸及 100K+", "互動率 8%+", "粉絲成長 200%"],
  },
  {
    id: "website",
    icon: Globe,
    title: "網站架設",
    description: "從零開始打造專業網站，包含形象官網、電商平台與 Landing Page",
    metrics: ["響應式設計", "SEO 優化", "效能調校"],
  },
  {
    id: "app",
    icon: Smartphone,
    title: "App 開發 / Vibe Coding",
    description: "運用現代開發工具，快速迭代打造使用者友善的應用程式",
    metrics: ["React / Next.js", "AI 輔助開發", "快速原型"],
  },
];

export const MediaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="media" className="relative py-24" ref={ref}>
      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Self Media
          </span>
          <h2 className="section-title mb-4">自媒體</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            打造個人品牌，建立專業影響力
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mediaProjects.map((project, index) => (
            <motion.div
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group glass-card overflow-hidden p-6"
            >
              {/* Icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <project.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                {project.title}
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
