import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Target, TrendingUp, Users, MousePointerClick, Newspaper, X, Package, ExternalLink, Building2, List, Video, PlayCircle, PanelLeftClose, PanelLeftOpen, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import brandPostImage from "@/assets/case-brand-post.png";
import socialPostImage from "@/assets/case-social-post.png";
import goddessLotteryImage from "@/assets/case-goddess-lottery.png";
import xnbayHardwareImage from "@/assets/case-xnbay-hardware.png";
import ancientMemeImage from "@/assets/case-ancient-meme.png";
import namingContestImage from "@/assets/case-naming-contest.png";
import videoThumbnailImage from "@/assets/case-video-thumbnail.png";

export default function CaseSocialMedia() {
  const { t, lang, setLang } = useLanguage();
  const [previewMedia, setPreviewMedia] = useState<{ type: "image" | "video"; src: string; alt: string } | null>(null);
  const [activeSection, setActiveSection] = useState<string>("section-wom");
  const [showToc, setShowToc] = useState(false);
  const [tocDismissed, setTocDismissed] = useState(false);

  const tocSections = [
    { id: "section-performance", label: t("caseSocial.toc.performance") },
    { id: "section-wom", label: t("caseSocial.toc.wom") },
    { id: "section-interaction", label: t("caseSocial.toc.interaction") },
    { id: "section-video", label: t("caseSocial.toc.video") },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    tocSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowToc(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
            <span className="font-medium">{t("caseCommon.backToHome")}</span>
          </Link>
          <span className="font-display text-lg font-semibold">
            <span className="text-primary">{t("caseCommon.titlePrefix")}</span>
            <span className="text-foreground">{t("caseCommon.titleSuffix")}</span>
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

      {/* Sidebar TOC - Desktop Only, appears on scroll */}
      <nav className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-1 w-[200px] pl-5 pr-4 py-4 rounded-r-xl bg-background/80 backdrop-blur-md border-r border-y border-border/30 shadow-lg transition-all duration-500 ease-out ${showToc && !tocDismissed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
        }`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <List className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">{t("caseCommon.toc")}</span>
          </div>
          <button
            onClick={() => setTocDismissed(true)}
            className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md hover:bg-secondary/50"
            title={t("caseCommon.collapseToc")}
          >
            <PanelLeftClose className="h-4 w-4" />
          </button>
        </div>
        <div className="relative pl-3">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full bg-border" />
          {tocSections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative block w-full text-left py-2 pl-4 text-sm transition-all duration-200 rounded-r-md ${activeSection === section.id
                ? "text-primary font-semibold bg-primary/5"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                }`}
            >
              {activeSection === section.id && (
                <span className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[2px] h-5 rounded-full bg-primary" />
              )}
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Re-open TOC Tab - appears when dismissed */}
      <button
        onClick={() => setTocDismissed(false)}
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden xl:flex items-center gap-1 pl-2 pr-3 py-3 rounded-r-lg bg-background/80 backdrop-blur-md border-r border-y border-border/30 shadow-md text-muted-foreground hover:text-primary transition-all duration-500 ease-out ${showToc && tocDismissed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"}`}
        title={t("caseCommon.expandToc")}
      >
        <PanelLeftOpen className="h-4 w-4" />
      </button>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-20 pt-28">

        {/* ===== Hero Title Section ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Newspaper className="h-4 w-4" />
            {t("caseSocial.hero.tag")}
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {t("caseSocial.hero.title")}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t("caseSocial.hero.desc")}
          </p>
        </motion.div>

        {/* ===== 社群操作成效 ===== */}
        <motion.div
          id="section-performance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 scroll-mt-28"
        >
          {/* Header */}
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <h1 className="text-3xl font-bold md:text-4xl">{t("caseSocial.performance.title")}</h1>
            <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
              {t("caseSocial.performance.badge")}
            </span>
          </div>

          {/* Two Charts Side by Side */}
          <div className="grid gap-6 lg:grid-cols-2 mb-6">
            {/* FB 粉絲數 Chart */}
            <div className="glass-card p-6">
              <div className="rounded-lg overflow-hidden mb-4 h-[280px] bg-white flex items-center justify-center">
                <img
                  src="/fbfans.jpg"
                  alt={t("caseSocial.performance.fbAlt")}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Summary */}
              <div className="rounded-lg bg-secondary/30 p-4 text-sm text-foreground leading-relaxed text-center">
                {t("caseSocial.performance.fbSummary1")}<span className="font-bold text-primary">{t("caseSocial.performance.fbSummary2")}</span>
              </div>
            </div>

            {/* LINE OA 好友數 Chart */}
            <div className="glass-card p-6">
              <div className="rounded-lg overflow-hidden mb-4 h-[280px] bg-white flex items-center justify-center">
                <img
                  src="/linefans.jpg"
                  alt={t("caseSocial.performance.lineAlt")}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Summary */}
              <div className="rounded-lg bg-secondary/30 p-4 text-sm text-foreground leading-relaxed text-center">
                {t("caseSocial.performance.lineSummary1")}<span className="font-bold text-primary">{t("caseSocial.performance.lineSummary2")}</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="text-right text-xs text-muted-foreground">{t("caseSocial.performance.date")}</p>
        </motion.div>

        {/* Divider */}
        <div className="my-16 border-t border-border" />

        {/* ===== Case 1: 社群聲量轉換案例 ===== */}
        <motion.div
          id="section-wom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 scroll-mt-28"
        >
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <h1 className="text-3xl font-bold md:text-4xl">{t("caseSocial.wom.title")}</h1>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
                {t("caseCommon.goal")}{t("caseSocial.wom.goal")}
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                <Package className="h-4 w-4" />
                {t("caseCommon.product")}{t("caseSocial.wom.product")}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Case 1 Content - Two Columns */}
        <div className="grid gap-4 lg:grid-cols-[2fr_auto_3fr] items-stretch mb-8">
          {/* Left Column - Social Post Image & Context */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card flex flex-col p-5 h-full"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                <Users className="h-4 w-4 text-blue-500" />
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base font-bold leading-tight">{t("caseSocial.wom.card1Title")}<span className="text-xs font-normal text-muted-foreground ml-1">{t("caseSocial.wom.card1Sub")}</span></h2>
                <a
                  href="https://www.facebook.com/groups/377636303647287/posts/1219432399467669/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors border-b border-dashed border-muted-foreground/30 pb-0.5 hover:border-primary whitespace-nowrap"
                  title={t("caseCommon.viewPost")}
                >
                  <ExternalLink className="h-3 w-3" />
                  {t("caseCommon.viewPost")}
                </a>
              </div>
            </div>

            <p className="mb-3 text-xs text-muted-foreground leading-relaxed">
              {t("caseSocial.wom.card1Desc")}
            </p>

            {/* Social Post Image */}
            <div className="flex-1 flex items-center justify-center mb-3 min-h-0 bg-secondary/5 rounded-lg">
              <div
                className="h-full w-full cursor-zoom-in overflow-hidden rounded-lg border border-border/50 shadow-sm transition-transform duration-200 hover:scale-[1.01]"
                onClick={() => setPreviewMedia({ type: "image", src: socialPostImage, alt: t("caseSocial.wom.imgAlt") })}
              >
                <img
                  src={socialPostImage}
                  alt={t("caseSocial.wom.imgAlt")}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Stats Grid - Moved to bottom of left card for balance */}
            <div className="grid grid-cols-4 gap-2 pt-3 border-t border-border/50">
              <div className="text-center">
                <div className="text-base font-bold text-primary">2,316</div>
                <div className="text-[10px] text-muted-foreground">{t("caseCommon.stats.likes")}</div>
              </div>
              <div className="text-center">
                <div className="text-base font-bold text-primary">270</div>
                <div className="text-[10px] text-muted-foreground">{t("caseCommon.stats.comments")}</div>
              </div>
              <div className="text-center">
                <div className="text-base font-bold text-primary">15</div>
                <div className="text-[10px] text-muted-foreground">{t("caseCommon.stats.shares")}</div>
              </div>
              <div className="text-center">
                <div className="text-base font-bold text-primary">11</div>
                <div className="text-[10px] text-muted-foreground">{t("caseCommon.stats.mediaShares")}</div>
              </div>
            </div>
          </motion.div>

          {/* Arrow */}
          <div className="hidden lg:flex justify-center text-muted-foreground/20 h-full items-center">
            <ArrowRight className="h-6 w-6" />
          </div>

          {/* Right Column - Results + Strategy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card flex flex-col p-5 h-full"
          >
            {/* Results Summary Header */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-500/10">
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <h2 className="text-base font-bold">{t("caseCommon.stats.summary")} <span className="text-xs font-normal text-muted-foreground ml-2">{t("caseCommon.timePeriod")}</span></h2>
            </div>

            {/* CTR Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
              <div className="rounded-lg bg-secondary/30 p-2 text-center">
                <div className="mb-0.5 text-[10px] text-muted-foreground">{t("caseCommon.stats.ctr")}</div>
                <div className="text-lg font-bold text-primary">3.15%</div>
              </div>
              <div className="rounded-lg bg-secondary/30 p-2 text-center">
                <div className="mb-0.5 text-[10px] text-muted-foreground">{t("caseCommon.stats.outCtr")}</div>
                <div className="text-lg font-bold text-primary">1.17%</div>
              </div>
              <div className="rounded-lg bg-secondary/30 p-2 text-center">
                <div className="mb-0.5 text-[10px] text-muted-foreground">{t("caseCommon.stats.roas")}</div>
                <div className="text-lg font-bold text-primary">1.84</div>
              </div>
              <div className="rounded-lg bg-secondary/30 p-2 text-center">
                <div className="mb-0.5 text-[10px] text-muted-foreground">{t("caseCommon.stats.salesShare")}</div>
                <div className="text-lg font-bold text-primary">31%</div>
              </div>
            </div>

            {/* Success Banner */}
            <div className="flex items-center gap-2 rounded-lg bg-green-500/10 px-3 py-2 mb-4">
              <TrendingUp className="h-3 w-3 shrink-0 text-green-500" />
              <span className="text-xs font-medium text-green-600 dark:text-green-400">
                {t("caseSocial.wom.banner")}
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-border mb-4"></div>

            {/* Strategy Section */}
            <div className="flex-1 flex flex-col min-h-0">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-4 w-4 text-primary" />
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-base font-bold">{t("caseSocial.wom.brandAngle")}</h2>
                  <a
                    href="https://www.facebook.com/ustrongbio/posts/pfbid0W5CMNeuFrGc3wxkxsyc6whzNW8gD5GUn2cXR3owjpqeJn5ciYUcb8w955Cuy9gHLl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors border-b border-dashed border-muted-foreground/30 pb-0.5 hover:border-primary whitespace-nowrap"
                    title={t("caseCommon.viewPost")}
                  >
                    <ExternalLink className="h-3 w-3" />
                    {t("caseCommon.viewPost")}
                  </a>
                </div>
              </div>

              {/* Split Layout: Text (Left) + Image (Right) */}
              <div className="flex gap-4 flex-1 h-full min-h-0">
                {/* Left: Strategy Text */}
                <div className="flex-1 overflow-y-auto pr-1">
                  <ul className="space-y-4 text-sm text-foreground">
                    <li className="flex flex-col gap-1.5">
                      <span className="font-bold text-primary text-base flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        {t("caseCommon.strategy")}
                      </span>
                      <span className="text-muted-foreground pl-3.5 border-l-2 border-border/50 ml-0.5">{t("caseSocial.wom.stratDesc")}</span>
                    </li>
                    <li className="flex flex-col gap-1.5">
                      <span className="font-bold text-primary text-base flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        {t("caseCommon.execution")}
                      </span>
                      <span className="text-muted-foreground leading-relaxed pl-3.5 border-l-2 border-border/50 ml-0.5">
                        {t("caseSocial.wom.exec1")} <br />
                        <span className="text-primary/50 text-xs">▼</span><br />
                        {t("caseSocial.wom.exec2")} <br />
                        <span className="text-primary/50 text-xs">▼</span><br />
                        {t("caseSocial.wom.exec3")} <br />
                        <span className="text-primary/50 text-xs">▼</span><br />
                        {t("caseSocial.wom.exec4")}
                      </span>
                    </li>
                    <li className="flex flex-col gap-1.5">
                      <span className="font-bold text-primary text-base flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        {t("caseCommon.highlights")}
                      </span>
                      <ul className="pl-4 space-y-1 text-muted-foreground list-disc list-outside ml-1">
                        <li>{t("caseSocial.wom.hl1")}</li>
                        <li>{t("caseSocial.wom.hl2")}</li>
                        <li>{t("caseSocial.wom.hl3")}</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* Right: Brand Post Image */}
                <div className="w-[45%] flex items-start justify-center bg-secondary/5 rounded-lg overflow-hidden pt-4">
                  <div
                    className="w-full cursor-zoom-in rounded-lg border border-border/50 shadow-sm transition-transform duration-200 hover:scale-[1.02]"
                    onClick={() => setPreviewMedia({ type: "image", src: brandPostImage, alt: t("caseSocial.wom.brandPostAlt") })}
                  >
                    <img
                      src={brandPostImage}
                      alt={t("caseSocial.wom.brandPostAlt")}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Divider */}
        <div className="my-16 border-t border-border" />


        {/* Divider */}
        <div className="my-16 border-t border-border" />

        {/* ===== Case 2 & 3: 互動創意型貼文案例 ===== */}
        <motion.div
          id="section-interaction"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 scroll-mt-28"
        >
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <h2 className="text-3xl font-bold md:text-4xl">{t("caseSocial.interactive.title")}</h2>
            <span className="rounded-full bg-blue-500 px-4 py-1.5 text-sm font-medium text-white">
              {t("caseCommon.goal")}{t("caseSocial.interactive.goal")}
            </span>
          </div>
        </motion.div>

        {/* Two Cases Side by Side */}
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Left Card - 成為女神-抽獎文 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card p-5 relative flex flex-col h-full"
          >
            {/* Top Right Product Tag */}
            <div className="absolute top-4 right-4 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground flex items-center gap-1.5 shadow-sm z-10">
              <Package className="h-3.5 w-3.5" />
              {t("caseCommon.product")}{t("caseSocial.interactive.case1.product")}
            </div>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10">
                <MousePointerClick className="h-4.5 w-4.5 text-orange-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold">{t("caseSocial.interactive.case1.title")}</h3>
                  <a
                    href="https://www.facebook.com/ustrongbio/posts/pfbid03529tDiMX2jdPcAqpv6ftkHccqi75XeHGzk6TLa6ug9y9iW1ciwwZm59r1SuNHF5Al"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors border-b border-dashed border-muted-foreground/30 pb-0.5 hover:border-primary"
                    title={t("caseCommon.viewPost")}
                  >
                    <ExternalLink className="h-3 w-3" />
                    {t("caseCommon.viewPost")}
                  </a>
                </div>
                <span className="text-xs text-muted-foreground">{t("caseSocial.interactive.case1.tag")}</span>
              </div>
            </div>

            {/* Split Layout Container */}
            <div className="flex gap-3 flex-1 min-h-0">
              {/* Left Text Content */}
              <div className="flex-1 flex flex-col overflow-y-auto pr-1">
                <p className="text-muted-foreground mb-3 text-xs leading-relaxed">
                  {t("caseSocial.interactive.case1.desc")}
                </p>

                {/* Strategy & Highlights */}
                <div className="space-y-2 bg-secondary/20 p-2.5 rounded-lg text-xs flex-1">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-orange-600 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                      {t("caseCommon.strategy")}
                    </span>
                    <span className="text-muted-foreground border-l-2 border-orange-500/30 pl-2 ml-0.5 leading-tight">
                      {t("caseSocial.interactive.case1.strat")}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-orange-600 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                      {t("caseCommon.highlights")}
                    </span>
                    <span className="text-muted-foreground border-l-2 border-orange-500/30 pl-2 ml-0.5 leading-tight">
                      {t("caseSocial.interactive.case1.hl")}
                    </span>
                  </div>
                </div>

                {/* Compact Results - Moved to Left */}
                <div className="flex items-center gap-2 mt-3 mb-2">
                  <TrendingUp className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-bold">{t("caseCommon.stats.summary")}</span>
                </div>
                <div className="w-full grid grid-cols-2 gap-2">
                  <div className="rounded-xl bg-secondary/50 p-3 text-center">
                    <div className="text-xs text-muted-foreground mb-1">{t("caseCommon.stats.ctr")}</div>
                    <div className="text-2xl font-bold text-orange-500">15.08%</div>
                  </div>
                  <div className="rounded-xl bg-secondary/50 p-3 text-center">
                    <div className="text-xs text-muted-foreground mb-1">{t("caseCommon.stats.er")}</div>
                    <div className="text-2xl font-bold text-orange-500">55%</div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-[40%] flex flex-col items-center justify-start">
                <div
                  className="w-full aspect-[4/5] cursor-zoom-in overflow-hidden rounded-lg border border-border shadow-sm transition-transform duration-200 hover:scale-[1.02]"
                  onClick={() => setPreviewMedia({ type: "image", src: goddessLotteryImage, alt: t("caseSocial.interactive.case1.imgAlt") })}
                >
                  <img
                    src={goddessLotteryImage}
                    alt={t("caseSocial.interactive.case1.imgAlt")}
                    className="w-full h-full object-contain bg-black/5"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Card - 時事話題-互動展開文 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass-card p-5 relative flex flex-col h-full"
          >
            {/* Top Right Product Tag */}
            <div className="absolute top-4 right-4 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground flex items-center gap-1.5 shadow-sm z-10">
              <Package className="h-3.5 w-3.5" />
              {t("caseCommon.product")}{t("caseSocial.interactive.case2.product")}
            </div>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10">
                <Newspaper className="h-4.5 w-4.5 text-green-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-foreground">{t("caseSocial.interactive.case2.title")}</h3>
                  <a
                    href="https://www.facebook.com/XnBay/posts/pfbid033UNfQXp8smYm9iKKBfrHNiPfXqxDZxqMb7fNx6ZicfkhaPz1fVF4grMq72VZKawml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors border-b border-dashed border-muted-foreground/30 pb-0.5 hover:border-primary"
                    title={t("caseCommon.viewPost")}
                  >
                    <ExternalLink className="h-3 w-3" />
                    {t("caseCommon.viewPost")}
                  </a>
                </div>
                <span className="text-xs text-muted-foreground">{t("caseSocial.interactive.case2.tag")}</span>
              </div>
            </div>

            {/* Split Layout Container */}
            <div className="flex gap-3 flex-1 min-h-0">
              {/* Left Text Content */}
              <div className="flex-1 flex flex-col overflow-y-auto pr-1">
                <p className="text-muted-foreground mb-3 text-xs leading-relaxed">
                  {t("caseSocial.interactive.case2.desc")}
                </p>

                {/* Strategy & Highlights */}
                <div className="space-y-2 bg-secondary/20 p-2.5 rounded-lg text-xs flex-1">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-green-600 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                      {t("caseCommon.execution")}
                    </span>
                    <span className="text-muted-foreground border-l-2 border-green-500/30 pl-2 ml-0.5 leading-tight">
                      {t("caseSocial.interactive.case2.exec")}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-green-600 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                      {t("caseCommon.highlights")}
                    </span>
                    <span className="text-muted-foreground border-l-2 border-green-500/30 pl-2 ml-0.5 leading-tight">
                      {t("caseSocial.interactive.case2.hl")}
                    </span>
                  </div>
                </div>

                {/* Compact Results - Moved to Left */}
                <div className="flex items-center gap-2 mt-3 mb-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-bold">{t("caseCommon.stats.summary")}</span>
                </div>
                <div className="w-full grid grid-cols-2 gap-2">
                  <div className="rounded-xl bg-secondary/50 p-3 text-center">
                    <div className="text-xs text-muted-foreground mb-1">{t("caseCommon.stats.ctr")}</div>
                    <div className="text-2xl font-bold text-orange-500">11%</div>
                  </div>
                  <div className="rounded-xl bg-secondary/50 p-3 text-center">
                    <div className="text-xs text-muted-foreground mb-1">{t("caseCommon.stats.er")}</div>
                    <div className="text-2xl font-bold text-orange-500">22%</div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-[40%] flex flex-col items-center justify-start">
                <div
                  className="w-full aspect-[4/5] cursor-zoom-in overflow-hidden rounded-lg border border-border shadow-sm transition-transform duration-200 hover:scale-[1.02]"
                  onClick={() => setPreviewMedia({ type: "image", src: xnbayHardwareImage, alt: t("caseSocial.interactive.case2.imgAlt") })}
                >
                  <img
                    src={xnbayHardwareImage}
                    alt={t("caseSocial.interactive.case2.imgAlt")}
                    className="w-full h-full object-contain bg-black/5"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Cases Row */}
        <div className="grid gap-4 lg:grid-cols-2 mt-[30px]">
          {/* Left Card - 有趣古人圖-互動抽獎文 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="glass-card p-5 relative flex flex-col h-full"
          >
            {/* Top Right Product Tag */}
            <div className="absolute top-4 right-4 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground flex items-center gap-1.5 shadow-sm z-10">
              {t("caseCommon.product")}{t("caseSocial.interactive.case3.product")}
            </div>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10">
                <MousePointerClick className="h-4.5 w-4.5 text-orange-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold">{t("caseSocial.interactive.case3.title")}</h3>
                  <a
                    href="https://www.facebook.com/ustrongbio/posts/pfbid0Pb7mLf5Xi3VWoWNRaLFzRw31y2c2TbR4wiswaHU9NEVLT7oqM37epxZYK8y1ZqYyl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors border-b border-dashed border-muted-foreground/30 pb-0.5 hover:border-primary"
                    title={t("caseCommon.viewPost")}
                  >
                    <ExternalLink className="h-3 w-3" />
                    {t("caseCommon.viewPost")}
                  </a>
                </div>
                <span className="text-xs text-muted-foreground">{t("caseSocial.interactive.case3.tag")}</span>
              </div>
            </div>

            {/* Split Layout Container */}
            <div className="flex gap-3 flex-1 min-h-0">
              {/* Left Text Content */}
              <div className="flex-1 flex flex-col overflow-y-auto pr-1">
                <p className="text-muted-foreground mb-3 text-xs leading-relaxed">
                  {t("caseSocial.interactive.case3.desc")}
                </p>

                {/* Strategy & Highlights */}
                <div className="space-y-2 bg-secondary/20 p-2.5 rounded-lg text-xs flex-1">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-orange-600 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                      {t("caseCommon.execution")}
                    </span>
                    <span className="text-muted-foreground border-l-2 border-orange-500/30 pl-2 ml-0.5 leading-tight">
                      {t("caseSocial.interactive.case3.exec")}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-orange-600 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                      {t("caseCommon.strategy")}
                    </span>
                    <span className="text-muted-foreground border-l-2 border-orange-500/30 pl-2 ml-0.5 leading-tight">
                      {t("caseSocial.interactive.case3.strat")}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-orange-600 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                      {t("caseCommon.highlights")}
                    </span>
                    <span className="text-muted-foreground border-l-2 border-orange-500/30 pl-2 ml-0.5 leading-tight">
                      {t("caseSocial.interactive.case3.hl")}
                    </span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex items-center gap-2 mt-3 mb-2">
                  <TrendingUp className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-bold">{t("caseCommon.stats.summary")}</span>
                </div>
                <div className="w-full grid grid-cols-2 gap-2">
                  <div className="rounded-xl bg-secondary/50 p-3 text-center">
                    <div className="text-xs text-muted-foreground mb-1">{t("caseCommon.stats.ctr")}</div>
                    <div className="text-xl font-bold text-orange-500">8.45%</div>
                  </div>
                  <div className="rounded-xl bg-secondary/50 p-3 text-center">
                    <div className="text-xs text-muted-foreground mb-1">{t("caseCommon.stats.er")}</div>
                    <div className="text-xl font-bold text-orange-500">55%</div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-[40%] flex flex-col items-center justify-start">
                <div
                  className="w-full aspect-[4/5] cursor-zoom-in overflow-hidden rounded-lg border border-border shadow-sm transition-transform duration-200 hover:scale-[1.02]"
                  onClick={() => setPreviewMedia({ type: "image", src: ancientMemeImage, alt: t("caseSocial.interactive.case3.imgAlt") })}
                >
                  <img
                    src={ancientMemeImage}
                    alt={t("caseSocial.interactive.case3.imgAlt")}
                    className="w-full h-full object-contain bg-black/5"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Card - 創意命名抽獎-旅宿業 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="glass-card p-5 relative flex flex-col h-full"
          >
            {/* Top Right Product Tag */}
            <div className="absolute top-4 right-4 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground flex items-center gap-1.5 shadow-sm z-10">
              {t("caseCommon.product")}{t("caseSocial.interactive.case4.product")}
            </div>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10">
                <Building2 className="h-4.5 w-4.5 text-green-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-foreground">{t("caseSocial.interactive.case4.title")}</h3>
                  <a
                    href="https://www.facebook.com/PLATINUMGARDENHOTEL/posts/pfbid0NCdUDHqdW4u8s3iScK2udo32kigUydHsWz5dFyMq5jCV3aga85ZYBYSmtxmDWeaMl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors border-b border-dashed border-muted-foreground/30 pb-0.5 hover:border-primary"
                    title={t("caseCommon.viewPost")}
                  >
                    <ExternalLink className="h-3 w-3" />
                    {t("caseCommon.viewPost")}
                  </a>
                </div>
                <span className="text-xs text-muted-foreground">{t("caseSocial.interactive.case4.tag")}</span>
              </div>
            </div>

            {/* Split Layout Container */}
            <div className="flex gap-3 flex-1 min-h-0">
              {/* Left Text Content */}
              <div className="flex-1 flex flex-col overflow-y-auto pr-1">
                <p className="text-muted-foreground mb-3 text-xs leading-relaxed">
                  {t("caseSocial.interactive.case4.desc")}
                </p>

                {/* Strategy & Highlights */}
                <div className="space-y-2 bg-secondary/20 p-2.5 rounded-lg text-xs flex-1">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-green-600 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                      {t("caseCommon.execution")}
                    </span>
                    <span className="text-muted-foreground border-l-2 border-green-500/30 pl-2 ml-0.5 leading-tight">
                      {t("caseSocial.interactive.case4.exec")}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-green-600 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                      {t("caseCommon.highlights")}
                    </span>
                    <span className="text-muted-foreground border-l-2 border-green-500/30 pl-2 ml-0.5 leading-tight">
                      {t("caseSocial.interactive.case4.hl")}
                    </span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex items-center gap-2 mt-3 mb-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-bold">{t("caseCommon.stats.summary")}</span>
                </div>
                <div className="w-full grid grid-cols-3 gap-2">
                  <div className="rounded-xl bg-secondary/50 p-3 text-center">
                    <div className="text-xs text-muted-foreground mb-1">{t("caseCommon.stats.likes")}</div>
                    <div className="text-lg font-bold text-primary">1,008</div>
                  </div>
                  <div className="rounded-xl bg-secondary/50 p-3 text-center">
                    <div className="text-xs text-muted-foreground mb-1">{t("caseCommon.stats.comments")}</div>
                    <div className="text-lg font-bold text-foreground">1,284</div>
                  </div>
                  <div className="rounded-xl bg-secondary/50 p-3 text-center">
                    <div className="text-xs text-muted-foreground mb-1">{t("caseCommon.stats.shares")}</div>
                    <div className="text-lg font-bold text-foreground">801</div>
                  </div>
                </div>
                <div className="w-full grid grid-cols-2 gap-2 mt-2">
                  <div className="rounded-xl bg-secondary/50 p-3 text-center">
                    <div className="text-xs text-muted-foreground mb-1">{t("caseCommon.stats.ctr")}</div>
                    <div className="text-xl font-bold text-primary">23%</div>
                  </div>
                  <div className="rounded-xl bg-secondary/50 p-3 text-center">
                    <div className="text-xs text-muted-foreground mb-1">{t("caseCommon.stats.er")}</div>
                    <div className="text-xl font-bold text-primary">21%</div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-[40%] flex flex-col items-center justify-start">
                <div
                  className="w-full aspect-[4/5] cursor-zoom-in overflow-hidden rounded-lg border border-border shadow-sm transition-transform duration-200 hover:scale-[1.02]"
                  onClick={() => setPreviewMedia({ type: "image", src: namingContestImage, alt: t("caseSocial.interactive.case4.imgAlt") })}
                >
                  <img
                    src={namingContestImage}
                    alt={t("caseSocial.interactive.case4.imgAlt")}
                    className="w-full h-full object-contain bg-black/5"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-16 border-t border-border" />

        {/* ===== Case 6: 影片企劃案例 ===== */}
        <motion.div
          id="section-video"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-8 scroll-mt-28"
        >
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <h2 className="text-3xl font-bold md:text-4xl">{t("caseSocial.video.title")}</h2>
            <span className="rounded-full bg-indigo-500 px-4 py-1.5 text-sm font-medium text-white">
              {t("caseCommon.goal")}{t("caseSocial.video.goal")}
            </span>
          </div>
        </motion.div>

        {/* Video Case Content */}
        <div className="grid gap-4 lg:grid-cols-[1.5fr_2fr] items-stretch mb-8">
          {/* Left Column - Video Placeholder & Product Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass-card p-5 relative flex flex-col h-full"
          >
            {/* Top Right Product Tag */}
            <div className="absolute top-4 right-4 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground flex items-center gap-1.5 shadow-sm z-10">
              <Package className="h-3.5 w-3.5" />
              {t("caseCommon.product")}{t("caseSocial.video.product")}
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                <Video className="h-5 w-5 text-indigo-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{t("caseSocial.video.caseTitle")}</h3>
                <span className="text-sm text-muted-foreground">{t("caseSocial.video.tag")}</span>
              </div>
            </div>

            {/* Video Thumbnail with Play Overlay */}
            <div
              className="w-full max-h-[280px] rounded-lg border border-border/50 relative overflow-hidden group cursor-pointer shadow-sm"
              onClick={() => setPreviewMedia({ type: "video", src: "/video-case.mp4", alt: t("caseSocial.video.imgAlt") })}
            >
              <img
                src={videoThumbnailImage}
                alt={t("caseSocial.video.imgAlt")}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <PlayCircle className="h-7 w-7 text-indigo-500" />
                </div>
              </div>
            </div>
          </motion.div>


          {/* Right Column - Strategy & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="glass-card p-6 flex flex-col h-full"
          >
            {/* Flowchart */}
            <div className="mb-6">
              <h4 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                {t("caseSocial.video.flowTitle")}
              </h4>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                {[t("caseSocial.video.flowSteps.0"), t("caseSocial.video.flowSteps.1"), t("caseSocial.video.flowSteps.2"), t("caseSocial.video.flowSteps.3"), t("caseSocial.video.flowSteps.4")].map((step, index, arr) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="bg-secondary/50 px-3 py-1.5 rounded-md border border-border/50 whitespace-nowrap font-medium">{step}</span>
                    {index < arr.length - 1 && <ArrowRight className="h-4 w-4 text-indigo-300" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 flex-1">
              {/* Text Content */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="font-bold text-indigo-600 flex items-center gap-1.5 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                    {t("caseCommon.execution")}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-3 border-l-2 border-indigo-500/20">
                    {t("caseSocial.video.execDesc")}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="font-bold text-indigo-600 flex items-center gap-1.5 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                    {t("caseCommon.highlights")}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-3 border-l-2 border-indigo-500/20">
                    {t("caseSocial.video.hlDesc")}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-col justify-center">
                <div className="rounded-xl bg-secondary/20 p-4 space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-indigo-500" />
                    <span className="text-sm font-bold">{t("caseCommon.stats.summary")}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-background/50 rounded-lg p-2 text-center">
                      <div className="text-xs text-muted-foreground mb-1">{t("caseCommon.stats.ctr")}</div>
                      <div className="text-lg font-bold text-indigo-500">4.38%</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-2 text-center">
                      <div className="text-xs text-muted-foreground mb-1">{t("caseCommon.stats.views")}</div>
                      <div className="text-lg font-bold text-indigo-500">7,844</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-2 text-center">
                      <div className="text-xs text-muted-foreground mb-1">{t("caseSocial.video.avgPlayLabel")}</div>
                      <div className="text-lg font-bold text-foreground">{t("caseSocial.video.avgPlayVal")}</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-2 text-center">
                      <div className="text-xs text-muted-foreground mb-1">{t("caseSocial.video.retentionLabel")}</div>
                      <div className="text-lg font-bold text-foreground">{t("caseSocial.video.retentionVal")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {previewMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setPreviewMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-h-[90vh] max-w-4xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPreviewMedia(null)}
                className="absolute -right-3 -top-3 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground shadow-lg transition-colors hover:bg-secondary"
              >
                <X className="h-4 w-4" />
              </button>

              {previewMedia.type === "video" ? (
                <video
                  src={previewMedia.src}
                  controls
                  autoPlay
                  className="max-h-[85vh] max-w-full rounded-lg"
                />
              ) : (
                <img
                  src={previewMedia.src}
                  alt={previewMedia.alt}
                  className="max-h-[85vh] rounded-lg object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
