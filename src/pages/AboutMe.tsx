import { motion } from "framer-motion";
import { ArrowLeft, User, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
import profileAvatar from "@/assets/profile-avatar.png";

const timeline = [
  {
    year: "現職",
    title: "社群行銷專員",
    company: "新創生技保健品牌",
    description: "負責社群行銷、電商活動營運與廣告投放。工作範圍涵蓋業績與 ROAS 追蹤調整、專欄 SEO 優化、市場研究與商品定價及 KOC 行銷等，與行銷團隊及研發團隊跨部門溝通，持續推動品牌成長。",
    achievements: [
      "品牌社群粉絲成長超過 6 倍",
      "LINE 官方好友數提升超過 10 倍",
      "與行銷團隊帶動總業績提升至原本的 5 倍",
    ],
  },
  {
    year: "過往",
    title: "行銷企劃",
    company: "行銷整合公司",
    description: "共接觸超過 20 個品牌，累積豐富的文案經驗，接觸口碑行銷，學會因應不同產業需求調整行銷策略，有效協助不同客戶達成業務目標。",
  },
];

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">返回首頁</span>
          </Link>
          <span className="font-display text-lg font-semibold">
            <span className="text-primary">行銷</span>
            <span className="text-foreground">作品集</span>
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-20 pt-28">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-muted-foreground">
            About Me
          </span>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">自我介紹</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            結合創意思維與技術實力，為品牌創造有價值的數位體驗
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="glass-card mx-auto max-w-3xl p-8">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full bg-secondary">
                <img
                  src={profileAvatar}
                  alt="陳恩頤"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="mb-2 text-2xl font-semibold">陳恩頤</h2>
                <p className="mb-4 text-muted-foreground">
                  數位行銷專員 | 跨領域行銷實戰者
                </p>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  對自我要求高，具備快速適應力與抗壓性，遇到挑戰時能主動學習並找出解決方法。
                  具備團隊合作能力，擅長跨部門溝通。
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  相比同齡人，更重視自我精進並期待將所學發揮於實戰經驗中。
                  在工作上不只達成工作任務，更能從中找到突破點，主動提出解決方案。
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">學經歷</h2>
          </div>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="glass-card bg-background p-6"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <span className="rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.company}</p>
                  </div>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">{item.description}</p>
                {item.achievements && (
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <Award className="h-4 w-4" />
                      <span>重要成就</span>
                    </div>
                    <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Planning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12"
        >
          <div className="glass-card bg-background p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <User className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">個人理念</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              相比同齡人，我更重視自我精進並期待將所學發揮於實戰經驗中。
              在工作上不只達成工作任務，更能從中找到突破點，主動提出解決方案，為公司解決現有問題，也為自己找到成就感。
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
