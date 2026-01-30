import { motion } from "framer-motion";
import { ArrowDown, Target, Lightbulb, User, GraduationCap, Briefcase } from "lucide-react";
import profilePhoto from "@/assets/profile-avatar.png";

export const HeroSection = () => {
  const profileInfo = [
    {
      icon: GraduationCap,
      title: "學歷",
      content: "中原大學企業管理學系（2022年畢業）",
    },
    {
      icon: Briefcase,
      title: "工作經歷",
      subtitle: "正職共3年",
      content: "1年行銷整合公司行銷企劃\n2年生技產業電商行銷企劃（在職中）",
    },
  ];

  const highlights = [
    {
      icon: User,
      title: "人格特質",
      items: ["快速適應力", "抗壓性", "喜歡挑戰新事物"],
    },
    {
      icon: Target,
      title: "專業領域",
      items: ["內容行銷", "社群行銷", "電商營運", "文案撰寫", "創意發想"],
    },
    {
      icon: Lightbulb,
      title: "核心能力",
      items: ["內容企劃", "數據分析"],
    },
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-44">
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Top Section - Title and Photo */}
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Left Content */}
          <div className="max-w-2xl text-left">
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12 font-display text-5xl font-semibold tracking-wide text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Marketing
              <br />
              <span className="text-primary">Portfolio</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              Hi！我是 Alisa，個性友善有親和力，擅長將天馬行空的創意，轉化成可實際執行的企劃，能獨立完成從企劃發想到數據追蹤優化，並進行效益分析。
            </motion.p>
          </div>

          {/* Right Content - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex-shrink-0 lg:mr-auto lg:ml-16"
          >
            <div className="h-72 w-56 overflow-hidden rounded-xl border border-border sm:h-80 sm:w-64 lg:h-96 lg:w-72">
              <img 
                src={profilePhoto} 
                alt="Alisa 個人照片" 
                className="h-full w-full object-cover object-top"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-xl border border-primary/20 bg-primary/5" />
            <div className="absolute -right-3 -top-3 h-10 w-10 rounded-xl border border-primary/20 bg-primary/5" />
          </motion.div>
        </div>

        {/* Profile Info - Education & Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {profileInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-6"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <info.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <h3 className="font-medium text-foreground">{info.title}</h3>
                  {info.subtitle && (
                    <span className="text-xs text-muted-foreground">{info.subtitle}</span>
                  )}
                </div>
                <p className="mt-1 whitespace-pre-line text-sm text-muted-foreground">
                  {info.content}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights - Three Columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-6"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <highlight.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 font-medium text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.items.join("、")}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4"
        >
          {[
            { value: "5+", label: "年經驗" },
            { value: "50+", label: "專案完成" },
            { value: "10+", label: "合作品牌" },
            { value: "100%", label: "客戶滿意" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-1 font-display text-2xl font-semibold text-foreground md:text-3xl">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs">向下滾動</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};
