import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Globe, Smartphone, ArrowUpRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Threads Icon Component
const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.812-.673 1.925-1.077 3.217-1.169 1.06-.074 2.063.01 2.994.186-.058-.497-.18-.915-.382-1.245-.376-.612-1.05-.924-2.007-.929h-.013c-.72.003-1.664.196-2.157.662l-1.385-1.536c.834-.751 2.09-1.166 3.535-1.168h.02c1.643.01 2.92.54 3.795 1.576.711.84 1.136 1.983 1.267 3.397.469.162.906.37 1.303.627 1.202.778 2.084 1.868 2.55 3.152.728 2.003.605 4.716-1.746 7.019-1.9 1.86-4.291 2.734-7.529 2.754zm1.384-8.418c-.882-.06-1.593.073-2.115.397-.47.292-.694.69-.672 1.182.022.43.24.79.65 1.072.482.33 1.16.5 1.913.456 1.078-.059 1.894-.47 2.428-1.224.357-.504.594-1.14.71-1.904-.9-.214-1.89-.319-2.914.021z" />
  </svg>
);

const getMediaProjects = (t: (key: string) => string) => [
  {
    id: "analytics",
    icon: TrendingUp,
    title: t("home.media.projects.analytics.title"),
    description: t("home.media.projects.analytics.desc"),
    tagline: t("home.media.projects.analytics.tagline"),
    metrics: [
      t("home.media.projects.analytics.metrics1"),
      t("home.media.projects.analytics.metrics2"),
      t("home.media.projects.analytics.metrics3"),
      t("home.media.projects.analytics.metrics4"),
    ],
    ctaLink: "https://www.threads.com/@levelup.daily_lab",
    ctaText: t("home.media.projects.analytics.cta"),
    showThreadsIcon: true,
  },
  {
    id: "website",
    icon: Globe,
    title: t("home.media.projects.website.title"),
    description: t("home.media.projects.website.desc"),
    tagline: t("home.media.projects.website.tagline"),
    metrics: [
      t("home.media.projects.website.metrics1"),
      t("home.media.projects.website.metrics2"),
      t("home.media.projects.website.metrics3"),
    ],
    ctaLink: "https://levelupdiary.com/",
    ctaText: t("home.media.projects.website.cta"),
  },
  {
    id: "app",
    icon: Smartphone,
    title: t("home.media.projects.app.title"),
    description: t("home.media.projects.app.desc"),
    tagline: t("home.media.projects.app.tagline"),
    metrics: [
      t("home.media.projects.app.metrics1"),
      t("home.media.projects.app.metrics2"),
      t("home.media.projects.app.metrics3"),
    ],
    ctaLink: "https://levelup-outfit-genie.vercel.app",
    ctaText: t("home.media.projects.app.cta"),
  },
];

export const MediaSection = () => {
  const { t } = useLanguage();
  const mediaProjects = getMediaProjects(t);
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
            {t("home.media.sectionTag")}
          </span>
          <h2 className="section-title mb-4">{t("home.media.title")}</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {t("home.media.subtitle")}
          </p>
          <p className="mx-auto mt-3 max-w-2xl rounded-lg bg-primary/5 px-4 py-2 text-sm text-primary">
            {t("home.media.hint")}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {mediaProjects.map((project, index) => (
            <motion.div
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group glass-card overflow-hidden p-6 flex flex-col"
            >
              {/* Top Section - Variable height content */}
              <div className="flex-grow-0">
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground min-h-[4.5rem]">
                  {project.description}
                </p>
              </div>

              {/* Middle Section - Tagline (always at same position) */}
              <div className="flex-shrink-0">
                {project.tagline && (
                  <p className="mb-5 text-center text-sm font-bold bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-lg py-2 px-3 text-primary">
                    ✨ {project.tagline}
                  </p>
                )}
              </div>

              {/* Metrics - Takes remaining space */}
              <div className="flex flex-wrap gap-2 flex-1 content-start">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground h-fit"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              {/* CTA Button - Always at bottom */}
              <div className="mt-auto pt-4 flex justify-end min-h-[3rem]">
                {project.ctaLink && (
                  <a
                    href={project.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cta flex items-center gap-1 text-sm font-medium text-primary transition-all duration-300 hover:gap-2"
                  >
                    {project.showThreadsIcon && <ThreadsIcon className="h-4 w-4" />}
                    <span className="relative">
                      {project.ctaText}
                      <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover/cta:w-full" />
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-1" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
