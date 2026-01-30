import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Target, FileText, Star, ArrowRight } from "lucide-react";

const marketingCases = [
  {
    id: "social",
    icon: Users,
    title: "社群經營",
    description: "策劃社群內容策略，建立品牌與粉絲的連結",
    highlights: ["內容日曆規劃", "社群互動策略", "KPI 追蹤分析"],
  },
  {
    id: "ads",
    icon: Target,
    title: "廣告優化",
    description: "精準投放數位廣告，最大化投資報酬率",
    highlights: ["Meta / Google 廣告", "受眾分析與測試", "成效追蹤優化"],
  },
  {
    id: "proposal",
    icon: FileText,
    title: "提案簡報",
    description: "打造有說服力的商業提案，贏得客戶信任",
    highlights: ["視覺化數據呈現", "故事化敘事", "策略架構設計"],
  },
  {
    id: "kol",
    icon: Star,
    title: "KOL / KOC",
    description: "網紅行銷策略規劃與執行，擴大品牌影響力",
    highlights: ["網紅篩選配對", "合作內容企劃", "成效追蹤評估"],
  },
];

export const MarketingSection = () => {
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
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Marketing Cases
          </span>
          <h2 className="section-title mb-4">行銷案例</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            從策略規劃到執行落地，為品牌創造實質成長
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {marketingCases.map((item, index) => (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group glass-card flex flex-col bg-background p-6 sm:flex-row sm:items-start sm:gap-6"
            >
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
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="mt-4 flex items-center gap-1 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  查看案例
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
