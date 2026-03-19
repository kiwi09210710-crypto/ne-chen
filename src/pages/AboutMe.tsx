import { motion } from "framer-motion";
import {
  ArrowLeft,
  User,
  TrendingUp,
  Award,
  BadgeCheck,
  Languages,
  Wrench,
  Heart,
  Target,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";
import profileAvatar from "@/assets/profile-avatar.png";
import profileLife2 from "@/assets/profile-life2.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const getEducation = (t: (key: string) => string) => ({
  icon: "🎓",
  school: t("about.education.school"),
  year: t("about.education.year"),
});

const getWorkExperience = (t: (key: string) => string) => [
  {
    icon: "💼",
    company: t("about.experience.job1.company"),
    title: t("about.experience.job1.title"),
    duration: t("about.experience.job1.duration"),
    description: t("about.experience.job1.desc"),
  },
  {
    icon: "💼",
    company: t("about.experience.job2.company"),
    title: t("about.experience.job2.title"),
    duration: t("about.experience.job2.duration"),
    description: t("about.experience.job2.desc"),
  },
];

const getCertifications = (t: (key: string) => string) => [
  t("about.certs.0"),
  t("about.certs.1"),
  t("about.certs.2"),
  t("about.certs.3"),
  t("about.certs.4"),
];

const aiTools = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "Perplexity",
  "NotebookLM",
  "Antigravity",
];

const getHobbies = (t: (key: string) => string) => [
  { emoji: "🎌", label: t("about.hobbies.anime") },
  { emoji: "🐱", label: t("about.hobbies.cat") },
  { emoji: "☕", label: t("about.hobbies.coffee") },
];

export default function AboutMe() {
  const { t, lang, setLang } = useLanguage();
  const education = getEducation(t);
  const workExperience = getWorkExperience(t);
  const certifications = getCertifications(t);
  const hobbies = getHobbies(t);
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
            <span className="font-medium">{t("about.backToHome")}</span>
          </Link>
          <span className="font-display text-lg font-semibold">
            <span className="text-primary">{t("about.titlePrefix")}</span>
            <span className="text-foreground">{t("about.titleSuffix")}</span>
          </span>
          <button
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Globe className="h-4 w-4" />
            <span>{lang === 'zh' ? 'EN' : '中'}</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-20 pt-28">

        {/* ① 頂部：個人名片區（三欄橫排） */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="glass-card p-6" style={{ maxHeight: "250px" }}>
            <div className="flex items-center justify-center gap-6 h-full">

              {/* 左欄：圓形大頭照 120×120 */}
              <div className="shrink-0">
                <div
                  className="overflow-hidden rounded-full border-2 border-primary/20 shadow-lg"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={profileAvatar}
                    alt={t("about.photoAlt")}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              {/* 中欄：文字資訊，約佔 50% */}
              <div className="flex-1" style={{ maxWidth: "50%" }}>
                <h1 className="mb-1 text-2xl font-bold">{t("about.name")}</h1>
                <p className="mb-3 text-sm font-medium text-primary">
                  {t("about.motto")}
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {t("about.intro")}
                </p>
              </div>

              {/* 右欄：直式生活照 160×200 圓角 */}
              <div className="shrink-0">
                <div
                  className="overflow-hidden rounded-2xl border-2 border-primary/20 shadow-lg"
                  style={{ width: "160px", height: "200px" }}
                >
                  <img
                    src={profileLife2}
                    alt={t("about.lifeAlt")}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ② 核心資訊三欄橫排 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {/* 卡片一：廣告證照 */}
            <div className="glass-card bg-background p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-lg font-semibold">{t("about.certTitle")}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="rounded-full bg-secondary px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* 卡片二：語文能力 */}
            <div className="glass-card bg-background p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <Languages className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-lg font-semibold">{t("about.langTitle")}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
                  {t("about.langTest")}
                </span>
                <span className="rounded-full bg-secondary px-3 py-1.5 text-xs font-bold text-foreground">
                  {t("about.langScore")}
                </span>
              </div>
            </div>

            {/* 卡片三：擅長工具 */}
            <div className="glass-card bg-background p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <Wrench className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-lg font-semibold">{t("about.toolTitle")}</h2>
              </div>
              <p className="mb-3 text-xs text-muted-foreground">{t("about.aiToolsSubtitle")}</p>
              <div className="flex flex-wrap gap-2">
                {aiTools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-secondary px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 學歷與工作經歷 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">{t("about.expTitle")}</h2>
          </div>
          <div className="space-y-5">
            {/* 學歷 */}
            <div className="glass-card bg-background p-6">
              <h3 className="mb-3 text-base font-semibold text-foreground">{t("about.eduTitle")}</h3>
              <div className="flex items-baseline gap-2 text-muted-foreground">
                <span className="text-lg">{education.icon}</span>
                <span className="font-medium text-foreground">{education.school}</span>
                <span className="text-sm">｜{education.year}</span>
              </div>
            </div>

            {/* 工作經歷 */}
            <div className="glass-card bg-background p-6">
              <h3 className="mb-4 text-base font-semibold text-foreground">{t("about.workTitle")}</h3>
              <div className="space-y-5">
                {workExperience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <span className="text-lg">{job.icon}</span>
                      <span className="font-semibold text-foreground">{job.company}</span>
                      <span className="text-sm text-muted-foreground">｜{job.title} — {job.duration}</span>
                    </div>
                    <p className="ml-7 text-sm leading-relaxed text-muted-foreground">
                      {job.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ③ 個人理念＋未來規劃 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mb-12"
        >
          <div className="glass-card bg-background p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">{t("about.visionTitle")}</h2>
            </div>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                {t("about.vision1")}
              </p>
              <p>
                {t("about.vision2")}
              </p>
              <p>
                {t("about.vision3")}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ④ 興趣（輕鬆收尾） */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <div className="glass-card bg-background p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">{t("about.hobbyTitle")}</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:justify-start">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.label}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-3xl shadow-sm transition-transform duration-200 hover:scale-110">
                    {hobby.emoji}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {hobby.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
