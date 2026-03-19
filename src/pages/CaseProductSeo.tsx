import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, FileText, Users, Crosshair, Search, X, CheckCircle2, List, PanelLeftClose, PanelLeftOpen, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import product1Img from "../assets/product1.jpg";
import product2Img from "../assets/product2.jpg";
import product1FullImg from "../assets/product1-full.png";
import product2FullImg from "../assets/product2-full.png";
import seoImg1 from "../assets/1.jpg";
import seoImg2 from "../assets/2.jpg";
import seoImg3 from "../assets/3.jpg";
import seoImg4 from "../assets/4.jpg";
import seoImg5 from "../assets/5.jpg";
import seoImg6 from "../assets/6.jpg";
import gaChartImg from "../assets/seo-ga-chart.jpg";
import gaTableImg from "../assets/seo-ga-table.jpg";
import nadhArticlesImg from "../assets/seo-nadh-articles.jpg";
import kolPageviewsImg from "../assets/kol-ga-pageviews.jpg";
import kolAdsImg from "../assets/kol-ga-ads.jpg";

export default function CaseProductSeo() {
    const { t, lang, setLang } = useLanguage();
    const [previewImage, setPreviewImage] = useState<{ src: string; alt: string; } | null>(null);
    const [activeSection, setActiveSection] = useState<string>("section-landing");
    const [showToc, setShowToc] = useState(false);
    const [tocDismissed, setTocDismissed] = useState(false);

    const cases = [
        {
            id: 1,
            title: t('caseProduct.landing.cases.case1.title'),
            positioning: t('caseProduct.landing.cases.case1.positioning'),
            audience: t('caseProduct.landing.cases.case1.audience'),
            previewImage: product1Img,
            fullImage: product1FullImg,
            tag: t('caseProduct.landing.cases.case1.tag'),
        },
        {
            id: 2,
            title: t('caseProduct.landing.cases.case2.title'),
            positioning: t('caseProduct.landing.cases.case2.positioning'),
            audience: t('caseProduct.landing.cases.case2.audience'),
            previewImage: product2Img,
            fullImage: product2FullImg,
            tag: t('caseProduct.landing.cases.case2.tag'),
        },
    ];

    const tocSections = [
        { id: "section-landing", label: t('caseProduct.toc.landing') },
        { id: "section-seo", label: t('caseProduct.toc.seo') },
        { id: "section-ai-summary", label: t('caseProduct.toc.aiSummary') },
        { id: "section-ga-traffic", label: t('caseProduct.toc.gaTraffic') },
        { id: "section-ga-seo-case", label: t('caseProduct.toc.gaSeoCase') },
        { id: "section-ga-kol", label: t('caseProduct.toc.gaKol') },
    ];

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const timer = setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [location.hash]);

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
                        <span className="font-medium">{t('caseCommon.backToHome')}</span>
                    </Link>
                    <span className="font-display text-lg font-semibold">
                        <span className="text-primary">{t('caseCommon.titlePrefix')}</span>
                        <span className="text-foreground">{t('caseCommon.titleSuffix')}</span>
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

            {/* Sidebar TOC - Desktop Only */}
            <nav className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-1 w-[200px] pl-5 pr-4 py-4 rounded-r-xl bg-background/80 backdrop-blur-md border-r border-y border-border/30 shadow-lg transition-all duration-500 ease-out ${showToc && !tocDismissed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"}`}>
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <List className="h-4 w-4" />
                        <span className="text-xs font-semibold uppercase tracking-wider">{t('caseProduct.toc.title')}</span>
                    </div>
                    <button
                        onClick={() => setTocDismissed(true)}
                        className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md hover:bg-secondary/50"
                        title={t('caseProduct.toc.hide')}
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

            {/* Re-open TOC Tab */}
            <button
                onClick={() => setTocDismissed(false)}
                className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden xl:flex items-center gap-1 pl-2 pr-3 py-3 rounded-r-lg bg-background/80 backdrop-blur-md border-r border-y border-border/30 shadow-md text-muted-foreground hover:text-primary transition-all duration-500 ease-out ${showToc && tocDismissed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"}`}
                title={t('caseProduct.toc.show')}
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
                        <FileText className="h-4 w-4" />
                        {t('caseProduct.hero.tag')}
                    </div>
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                        {t('caseProduct.hero.title')}
                    </h1>
                    <p className="mx-auto max-w-2xl text-base text-muted-foreground/80">
                        {t('caseProduct.hero.desc')}
                    </p>
                </motion.div>

                {/* ===== Section Header ===== */}
                <motion.div
                    id="section-landing"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="mb-10 scroll-mt-28"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">
                            {t('caseProduct.landing.title')}
                        </h2>
                    </div>
                    <p className="text-muted-foreground pl-[52px]">
                        {t('caseProduct.landing.subtitle')}
                    </p>
                </motion.div>

                {/* ===== 核心能力培養 ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="glass-card p-8">
                        <h3 className="text-xl font-bold mb-6">{t('caseProduct.landing.capabilities.title')}</h3>
                        <div className="space-y-5">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                <div>
                                    <span className="font-semibold text-foreground">{t('caseProduct.landing.capabilities.cap1Title')}</span>
                                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                                        {t('caseProduct.landing.capabilities.cap1Desc')}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                <div>
                                    <span className="font-semibold text-foreground">{t('caseProduct.landing.capabilities.cap2Title')}</span>
                                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                                        {t('caseProduct.landing.capabilities.cap2Desc')}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                <div>
                                    <span className="font-semibold text-foreground">{t('caseProduct.landing.capabilities.cap3Title')}</span>
                                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                                        {t('caseProduct.landing.capabilities.cap3Desc')}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                <div>
                                    <span className="font-semibold text-foreground">{t('caseProduct.landing.capabilities.cap4Title')}</span>
                                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                                        {t('caseProduct.landing.capabilities.cap4Desc')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ===== Case Cards ===== */}
                <div className="space-y-10">
                    {cases.map((caseItem, index) => {
                        const isReversed = index % 2 !== 0;

                        return (
                            <motion.div
                                key={caseItem.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.25 + index * 0.15,
                                }}
                                className="glass-card overflow-hidden"
                            >
                                <div
                                    className={`flex flex-col ${isReversed
                                        ? "lg:flex-row-reverse"
                                        : "lg:flex-row"
                                        }`}
                                >
                                    {/* Text Section */}
                                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                                        {/* Tag */}
                                        <span className="inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
                                            {caseItem.tag}
                                        </span>

                                        {/* Title */}
                                        <h3 className="text-xl md:text-2xl font-bold mb-6">
                                            {caseItem.title}
                                        </h3>

                                        {/* Product Positioning */}
                                        <div className="mb-5">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Crosshair className="h-4 w-4 text-primary shrink-0" />
                                                <span className="font-semibold text-sm text-foreground">
                                                    {t('caseProduct.landing.positioning')}
                                                </span>
                                            </div>
                                            <p className="text-muted-foreground text-sm leading-relaxed pl-6">
                                                {caseItem.positioning}
                                            </p>
                                        </div>

                                        {/* Target Audience */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <Users className="h-4 w-4 text-primary shrink-0" />
                                                <span className="font-semibold text-sm text-foreground">
                                                    {t('caseProduct.landing.audience')}
                                                </span>
                                            </div>
                                            <p className="text-muted-foreground text-sm leading-relaxed pl-6">
                                                {caseItem.audience}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Image Section */}
                                    <div className="lg:w-[42%] p-4 md:p-6 flex items-center justify-center">
                                        <div
                                            className="group relative cursor-zoom-in overflow-hidden rounded-xl border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30"
                                            onClick={() =>
                                                setPreviewImage({
                                                    src: caseItem.fullImage,
                                                    alt: caseItem.title,
                                                })
                                            }
                                        >
                                            <img
                                                src={caseItem.previewImage}
                                                alt={caseItem.title}
                                                className="w-full max-h-[360px] object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                                            />

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                                                <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-800 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                                                    <Search className="h-4 w-4" />
                                                    {t('caseProduct.landing.clickToViewFull')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ===== SEO 專欄文章撰寫 Section ===== */}
                <motion.div
                    id="section-seo"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-20 mb-10 scroll-mt-28"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <Search className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">
                            {t('caseProduct.seo.title')}
                        </h2>
                    </div>
                    <p className="text-muted-foreground pl-[52px]">
                        {t('caseProduct.seo.subtitle')}
                    </p>
                </motion.div>

                {/* ===== 多篇文章獲 AI 摘要 ===== */}
                <motion.div
                    id="section-ai-summary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="scroll-mt-28"
                >
                    <div className="glass-card p-6 md:p-8">
                        <h3 className="text-xl font-bold mb-6">{t('caseProduct.seo.aiSummary.title')}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {[seoImg1, seoImg2, seoImg3, seoImg4, seoImg5, seoImg6].map((img, idx) => (
                                <div
                                    key={idx}
                                    className="group relative cursor-zoom-in overflow-hidden rounded-xl border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30"
                                    onClick={() =>
                                        setPreviewImage({
                                            src: img,
                                            alt: `${t('caseProduct.seo.aiSummary.imgAlt')} ${idx + 1}`,
                                        })
                                    }
                                >
                                    <img
                                        src={img}
                                        alt={`${t('caseProduct.seo.aiSummary.imgAlt')} ${idx + 1}`}
                                        className="w-full h-auto max-h-[200px] object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                                        <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-800 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                                            <Search className="h-4 w-4" />
                                            {t('caseProduct.seo.aiSummary.enlarge')}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ===== GA 數據分析 ===== */}
                <motion.div
                    id="section-ga-traffic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-10 scroll-mt-28"
                >
                    <div className="glass-card p-6 md:p-8">
                        {/* Section Title */}
                        <div className="mb-6">
                            <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary mb-2">
                                {t('caseProduct.seo.gaTraffic.tag')}
                            </span>
                            <h3 className="text-xl font-bold">{t('caseProduct.seo.gaTraffic.title')}</h3>
                        </div>

                        {/* Two-Column Layout */}
                        <div className="flex flex-col lg:flex-row gap-6 mb-6">
                            {/* Left: GA Chart Placeholder */}
                            <div className="lg:w-[45%] shrink-0">
                                <div
                                    className="group relative cursor-zoom-in overflow-hidden rounded-xl border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30"
                                    onClick={() => setPreviewImage({ src: gaChartImg, alt: t('caseProduct.seo.gaTraffic.imgAlt') })}
                                >
                                    <img src={gaChartImg} alt={t('caseProduct.seo.gaTraffic.imgAlt')} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                                        <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-800 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                                            <Search className="h-4 w-4" />
                                            {t('caseProduct.seo.aiSummary.enlarge')}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Text Content */}
                            <div className="flex-1 space-y-5">
                                {/* 專欄經營目的 */}
                                <div>
                                    <h4 className="font-bold text-lg mb-3">{t('caseProduct.seo.gaTraffic.purposeTitle')}</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                                        <li className="flex items-start gap-2">
                                            <span className="text-foreground mt-1.5 shrink-0 text-[8px]">●</span>
                                            <span>{t('caseProduct.seo.gaTraffic.purposeItem1')}</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-foreground mt-1.5 shrink-0 text-[8px]">●</span>
                                            <span>{t('caseProduct.seo.gaTraffic.purposeItem2')}</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* 成效摘要 */}
                                <div>
                                    <h4 className="font-bold text-lg mb-3">{t('caseProduct.seo.gaTraffic.resultsTitle')}</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                                        <li className="flex items-start gap-2">
                                            <span className="text-foreground mt-1.5 shrink-0 text-[8px]">●</span>
                                            <span>{t('caseProduct.seo.gaTraffic.resultsItem1')}</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-foreground mt-1.5 shrink-0 text-[8px]">●</span>
                                            <span>{t('caseProduct.seo.gaTraffic.resultsItem2')}</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-foreground mt-1.5 shrink-0 text-[8px]">●</span>
                                            <span>{t('caseProduct.seo.gaTraffic.resultsItem3')}</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-foreground mt-1.5 shrink-0 text-[8px]">●</span>
                                            <span>{t('caseProduct.seo.gaTraffic.resultsItem4')}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Full-width Table Image */}
                        <div className="overflow-hidden rounded-xl border border-border">
                            <img src={gaTableImg} alt={t('caseProduct.seo.gaTraffic.tableAlt')} className="w-full h-auto object-cover" />
                        </div>
                    </div>
                </motion.div>

                {/* ===== GA 數據分析 — 專欄文SEO優化成果案例 ===== */}
                <motion.div
                    id="section-ga-seo-case"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="mt-10 scroll-mt-28"
                >
                    <div className="glass-card p-6 md:p-8">
                        {/* Section Title */}
                        <div className="mb-6">
                            <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary mb-2">
                                {t('caseProduct.seo.gaSeoCase.tag')}
                            </span>
                            <h3 className="text-xl font-bold">{t('caseProduct.seo.gaSeoCase.title')}</h3>
                        </div>

                        {/* Two-Column Layout */}
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* Left: Articles Screenshot */}
                            <div className="lg:w-[45%] shrink-0">
                                <div
                                    className="group relative cursor-zoom-in overflow-hidden rounded-xl border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30"
                                    onClick={() => setPreviewImage({ src: nadhArticlesImg, alt: t('caseProduct.seo.gaSeoCase.imgAlt') })}
                                >
                                    <img src={nadhArticlesImg} alt={t('caseProduct.seo.gaSeoCase.imgAlt')} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                                        <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-800 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                                            <Search className="h-4 w-4" />
                                            {t('caseProduct.seo.aiSummary.enlarge')}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Text Content */}
                            <div className="flex-1">
                                <h4 className="font-bold text-lg mb-4">{t('caseProduct.seo.gaSeoCase.exampleTitle')}</h4>
                                <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <span className="text-foreground mt-1.5 shrink-0 text-[8px]">●</span>
                                        <span>{t('caseProduct.seo.gaSeoCase.item1')}</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-foreground mt-1.5 shrink-0 text-[8px]">●</span>
                                        <span>{t('caseProduct.seo.gaSeoCase.item2')}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ===== GA 數據分析 — 口碑行銷成效驗證 ===== */}
                <motion.div
                    id="section-ga-kol"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-10 scroll-mt-28"
                >
                    <div className="glass-card p-6 md:p-8">
                        {/* Section Title */}
                        <div className="mb-4">
                            <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary mb-2">
                                {t('caseProduct.seo.gaKol.tag')}
                            </span>
                            <h3 className="text-xl font-bold">{t('caseProduct.seo.gaKol.title')}</h3>
                        </div>

                        {/* 分析目的 */}
                        <div className="mb-6">
                            <h4 className="font-bold text-lg mb-2">{t('caseProduct.seo.gaKol.purposeTitle')}</h4>
                            <ul className="space-y-1 text-sm text-muted-foreground leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <span className="text-foreground mt-1.5 shrink-0 text-[8px]">●</span>
                                    <span>{t('caseProduct.seo.gaKol.purposeItem1')}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-foreground mt-1.5 shrink-0 text-[8px]">●</span>
                                    <span>{t('caseProduct.seo.gaKol.purposeItem2')}</span>
                                </li>
                            </ul>
                        </div>

                        {/* Row 1: 產品頁瀏覽數 */}
                        <div className="flex flex-col lg:flex-row gap-6 mb-6">
                            <div className="lg:w-[45%] shrink-0">
                                <div
                                    className="group relative cursor-zoom-in overflow-hidden rounded-xl border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30"
                                    onClick={() => setPreviewImage({ src: kolPageviewsImg, alt: t('caseProduct.seo.gaKol.pageviewsAlt') })}
                                >
                                    <img src={kolPageviewsImg} alt={t('caseProduct.seo.gaKol.pageviewsAlt')} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                                        <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-800 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                                            <Search className="h-4 w-4" />
                                            {t('caseProduct.seo.aiSummary.enlarge')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-base mb-3">{t('caseProduct.seo.gaKol.pageviewsTitle')}</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <span className="text-foreground mt-1.5 shrink-0 text-[8px]">●</span>
                                        <span>{t('caseProduct.seo.gaKol.pageviewsItem1')}</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-foreground mt-1.5 shrink-0 text-[8px]">●</span>
                                        <span>{t('caseProduct.seo.gaKol.pageviewsItem2')}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Row 2: Google Ads 成效 */}
                        <div className="flex flex-col lg:flex-row gap-6 mb-4">
                            <div className="lg:w-[45%] shrink-0">
                                <div
                                    className="group relative cursor-zoom-in overflow-hidden rounded-xl border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30"
                                    onClick={() => setPreviewImage({ src: kolAdsImg, alt: t('caseProduct.seo.gaKol.adsAlt') })}
                                >
                                    <img src={kolAdsImg} alt={t('caseProduct.seo.gaKol.adsAlt')} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                                        <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-800 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                                            <Search className="h-4 w-4" />
                                            {t('caseProduct.seo.aiSummary.enlarge')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-base mb-3">{t('caseProduct.seo.gaKol.adsTitle')}</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <span className="text-foreground mt-1.5 shrink-0 text-[8px]">●</span>
                                        <span>{t('caseProduct.seo.gaKol.adsItem1')}</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-foreground mt-1.5 shrink-0 text-[8px]">●</span>
                                        <span>{t('caseProduct.seo.gaKol.adsItem2')}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Footnote */}
                        <p className="text-xs text-muted-foreground/60 text-right">
                            {t('caseProduct.seo.gaKol.footnote')}
                        </p>
                    </div>
                </motion.div>
            </main>

            {/* ===== Image Preview Modal (Lightbox) ===== */}
            <AnimatePresence>
                {previewImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/85 p-4 md:p-8"
                        onClick={() => setPreviewImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 300,
                            }}
                            className="relative my-auto w-full max-w-3xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setPreviewImage(null)}
                                className="sticky top-0 z-10 float-right mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg transition-colors hover:bg-white"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            {/* Full Image - scrollable for long product description images */}
                            <img
                                src={previewImage.src}
                                alt={previewImage.alt}
                                className="w-full rounded-lg clear-right"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
