import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, Package, BarChart2 } from "lucide-react";

const ecommerceItems = [
  {
    id: "campaigns",
    icon: ShoppingCart,
    title: "電商活動",
    description: "規劃執行電商促銷活動，從節慶檔期到日常行銷",
    details: [
      "雙11 / 週年慶活動企劃",
      "限時優惠策略設計",
      "會員專屬活動規劃",
      "活動成效追蹤與優化",
    ],
  },
  {
    id: "pricing",
    icon: Package,
    title: "價格組合",
    description: "設計產品組合與定價策略，提升客單價與轉換率",
    details: [
      "產品組合搭配設計",
      "定價心理學應用",
      "促銷折扣策略",
      "競品價格分析",
    ],
  },
  {
    id: "data",
    icon: BarChart2,
    title: "數據分析",
    description: "深入分析電商數據，洞察消費者行為與趨勢",
    details: [
      "銷售數據儀表板",
      "消費者行為分析",
      "轉換漏斗優化",
      "預測模型建立",
    ],
  },
];

export const EcommerceSection = () => {
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
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-muted-foreground">
            E-commerce
          </span>
          <h2 className="section-title mb-4">電商企劃</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            以數據驅動決策，打造高轉換率的電商體驗
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
                <p className="mb-5 text-sm text-muted-foreground">{item.description}</p>

                {/* Details list */}
                <ul className="space-y-2.5">
                  {item.details.map((detail, i) => (
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
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
