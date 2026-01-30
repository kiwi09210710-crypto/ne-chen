import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Target, TrendingUp, Code, Palette, BarChart3 } from "lucide-react";

const skills = [
  { icon: Code, label: "Vibe Coding", level: 90 },
  { icon: Palette, label: "UI/UX 設計", level: 85 },
  { icon: BarChart3, label: "數據分析", level: 88 },
  { icon: TrendingUp, label: "行銷策略", level: 92 },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative bg-secondary/30 py-24" ref={ref}>
      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-muted-foreground">
            About Me
          </span>
          <h2 className="section-title mb-4">關於我</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            結合創意思維與技術實力，為品牌創造有價值的數位體驗
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Skills */}
          <motion.div
            id="skills"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-8 flex items-center gap-3 text-2xl font-semibold">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              擅長技能
            </h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="glass-card bg-background p-4"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <skill.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{skill.label}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-primary"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Intro & Career */}
          <div className="space-y-6">
            {/* Self Intro */}
            <motion.div
              id="intro"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card bg-background p-6"
            >
              <h3 className="mb-4 flex items-center gap-3 text-xl font-semibold">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                自我介紹
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                我是一位熱愛創新的數位工作者，擁有豐富的行銷策略與電商運營經驗。
                透過 Vibe Coding 的方式，我能夠快速將創意轉化為實際的產品，
                為團隊和客戶帶來高效率的解決方案。
              </p>
            </motion.div>

            {/* Career Planning */}
            <motion.div
              id="career"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card bg-background p-6"
            >
              <h3 className="mb-4 flex items-center gap-3 text-xl font-semibold">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                職涯規劃
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                致力於成為跨領域的數位專家，結合行銷思維與技術能力，
                持續探索 AI 與自動化工具的應用，打造更有效率的工作流程，
                幫助企業在數位轉型的浪潮中脫穎而出。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
