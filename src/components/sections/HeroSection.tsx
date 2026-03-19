import { motion } from "framer-motion";
import { ArrowDown, Target, Lightbulb, User, GraduationCap, Briefcase } from "lucide-react";
import profilePhoto from "@/assets/profile-avatar.png";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();

  const profileInfo = [
    {
      icon: GraduationCap,
      title: t("home.hero.educationTitle"),
      content: t("home.hero.educationContent"),
    },
    {
      icon: Briefcase,
      title: t("home.hero.experienceTitle"),
      subtitle: t("home.hero.experienceSubtitle"),
      content: t("home.hero.experienceContent"),
    },
  ];

  const highlights = [
    {
      icon: User,
      title: t("home.hero.traitsTitle"),
      items: [t("home.hero.traits1"), t("home.hero.traits2"), t("home.hero.traits3")],
    },
    {
      icon: Target,
      title: t("home.hero.expertiseTitle"),
      items: [
        t("home.hero.expertise1"),
        t("home.hero.expertise2"),
        t("home.hero.expertise3"),
        t("home.hero.expertise4"),
        t("home.hero.expertise5"),
      ],
    },
    {
      icon: Lightbulb,
      title: t("home.hero.skillsTitle"),
      items: [t("home.hero.skills1"), t("home.hero.skills2")],
    },
  ];

  return (
    <section
      data-testid="home-hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 sm:pt-32 lg:pt-44"
    >
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
        <div className="flex flex-col items-start gap-8 sm:gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          {/* Left Content */}
          <div className="max-w-2xl text-left">
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              data-testid="home-hero-title"
              className="mb-6 font-display text-4xl font-semibold tracking-wide text-foreground sm:mb-8 sm:text-6xl md:text-7xl lg:mb-12 lg:text-8xl"
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
              className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
            >
              {t("home.hero.subtitle")}
            </motion.p>
          </div>

          {/* Right Content - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mx-auto flex-shrink-0 self-center lg:mr-auto lg:ml-16 lg:self-auto"
          >
            <div
              data-testid="home-hero-photo"
              className="h-60 w-48 overflow-hidden rounded-xl border border-border sm:h-72 sm:w-56 lg:h-96 lg:w-72"
            >
              <img
                src={profilePhoto}
                alt="Alisa 個人照片"
                loading="eager"
                decoding="async"
                fetchpriority="high"
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
            { value: "3+", label: t("home.hero.statYears") },
            { value: "100+", label: t("home.hero.statKol") },
            { value: "20+", label: t("home.hero.statBrands") },
            { value: "100+", label: t("home.hero.statArticles") },
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
        data-testid="home-hero-scroll"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:flex"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs">{t("common.scrollDown")}</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};
