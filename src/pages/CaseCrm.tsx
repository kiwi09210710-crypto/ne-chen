import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Users, TrendingUp, ArrowRight, BellRing, UserCheck, Zap, Target, BarChart2, List, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import lineImg from "../assets/line.jpg";

export default function CaseCrm() {
    const { t } = useLanguage();
    const [activeSection, setActiveSection] = useState<string>("section-private-domain");
    const [showToc, setShowToc] = useState(false);
    const [tocDismissed, setTocDismissed] = useState(false);

    const tocSections = [
        { id: "section-private-domain", label: t('caseCrm.toc.sectionPrivateDomain') },
        { id: "section-member-tiers", label: t('caseCrm.toc.sectionMemberTiers') },
        { id: "section-double11", label: t('caseCrm.toc.sectionDouble11') },
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
    }, [tocSections]);

    useEffect(() => {
        const handleScroll = () => setShowToc(window.scrollY > 200);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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
                </div>
            </header>

            {/* Sidebar TOC - Desktop Only */}
            <nav className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-1 w-[200px] pl-5 pr-4 py-4 rounded-r-xl bg-background/80 backdrop-blur-md border-r border-y border-border/30 shadow-lg transition-all duration-500 ease-out ${showToc && !tocDismissed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"}`}>
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <List className="h-4 w-4" />
                        <span className="text-xs font-semibold uppercase tracking-wider">{t('caseCrm.toc.title')}</span>
                    </div>
                    <button
                        onClick={() => setTocDismissed(true)}
                        className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md hover:bg-secondary/50"
                        title={t('caseCrm.toc.hide')}
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
                title={t('caseCrm.toc.show')}
            >
                <PanelLeftOpen className="h-4 w-4" />
            </button>

            <main className="container mx-auto px-6 pb-20 pt-28">

                {/* ===== Hero Title ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                        <Users className="h-4 w-4" />
                        {t('caseCrm.hero.tag')}
                    </div>
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                        {t('caseCrm.hero.title')}
                    </h1>
                    <p className="mx-auto max-w-xl text-lg font-semibold text-foreground/80 mb-3">
                        {t('caseCrm.hero.subtitle')}
                    </p>
                    <p className="mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
                        {t('caseCrm.hero.desc')}
                    </p>
                </motion.div>

                {/* ===== 區塊一：私域名單建立與長期價值 ===== */}
                <motion.div
                    id="section-private-domain"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-16 scroll-mt-28"
                >
                    {/* Section heading */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <UserCheck className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">{t('caseCrm.privateDomain.title')}</h2>
                        </div>
                    </div>

                    {/* 3 Data Cards */}
                    <div className="grid gap-6 md:grid-cols-3">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="glass-card p-6 text-center group"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                    <TrendingUp className="h-6 w-6 text-primary" />
                                </div>
                            </div>
                            <div className="text-4xl font-bold text-primary mb-2">{t('caseCrm.privateDomain.card1Num')}</div>
                            <div className="text-base font-semibold text-foreground mb-1">{t('caseCrm.privateDomain.card1Title')}</div>
                            <p className="text-sm text-muted-foreground">{t('caseCrm.privateDomain.card1Desc')}</p>
                        </motion.div>

                        {/* Card 2 — 客單價對比 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="glass-card p-6 text-center group"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                    <ArrowRight className="h-6 w-6 text-primary" />
                                </div>
                            </div>
                            <div className="text-4xl font-bold text-primary mb-2">{t('caseCrm.privateDomain.card2Num')}</div>
                            <div className="text-base font-semibold text-foreground mb-1">{t('caseCrm.privateDomain.card2Title')}</div>
                            <p className="text-sm text-muted-foreground">{t('caseCrm.privateDomain.card2Desc')}</p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            className="glass-card p-6 text-center group"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                    <Zap className="h-6 w-6 text-primary" />
                                </div>
                            </div>
                            <div className="text-4xl font-bold text-primary mb-2">{t('caseCrm.privateDomain.card3Num')}</div>
                            <div className="text-base font-semibold text-foreground mb-1">{t('caseCrm.privateDomain.card3Title')}</div>
                            <p className="text-sm text-muted-foreground">{t('caseCrm.privateDomain.card3Desc')}</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* ===== 區塊二：會員分層經營 ===== */}
                <motion.div
                    id="section-member-tiers"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-16 scroll-mt-28"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <Target className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">{t('caseCrm.memberTiers.title')}</h2>
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Left: 高消費會員維繫 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            className="glass-card p-6 md:p-8"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                    <UserCheck className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold">{t('caseCrm.memberTiers.highValueTitle')}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                                {t('caseCrm.memberTiers.highValueDescPre')}
                                <span className="font-semibold text-foreground">{t('caseCrm.memberTiers.highValueDescHighlight')}</span>
                                {t('caseCrm.memberTiers.highValueDescPost')}
                            </p>
                            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 flex items-center gap-4">
                                <BarChart2 className="h-8 w-8 text-primary shrink-0" />
                                <div>
                                    <div className="text-2xl font-bold text-primary">{t('caseCrm.memberTiers.highValueStatNum')}</div>
                                    <div className="text-xs text-muted-foreground font-medium">{t('caseCrm.memberTiers.highValueStatLabel')}</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: 喚醒沈睡顧客 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="glass-card p-6 md:p-8"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                    <BellRing className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold">{t('caseCrm.memberTiers.dormantTitle')}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                                {t('caseCrm.memberTiers.dormantDescPre')}
                                <span className="font-semibold text-foreground">{t('caseCrm.memberTiers.dormantDescHighlight')}</span>
                                {t('caseCrm.memberTiers.dormantDescPost')}
                            </p>
                            <div className="rounded-xl border border-border bg-secondary/30 p-4">
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1.5 shrink-0 text-[8px]">●</span>
                                        <span>{t('caseCrm.memberTiers.dormantItem1')}</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1.5 shrink-0 text-[8px]">●</span>
                                        <span>{t('caseCrm.memberTiers.dormantItem2')}</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* ===== 區塊三：雙11活動整合成果 ===== */}
                <motion.div
                    id="section-double11"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="scroll-mt-28"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <Zap className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">{t('caseCrm.double11.title')}</h2>
                        </div>
                    </div>

                    <div className="glass-card overflow-hidden">
                        <div className="flex flex-col lg:flex-row">
                            {/* Left: LINE broadcast screenshot */}
                            <div className="lg:w-[45%] bg-secondary/50 flex items-center justify-center overflow-hidden min-h-[320px]">
                                <img
                                    src={lineImg}
                                    alt={t('caseCrm.double11.imgAlt')}
                                    className="w-full h-full object-contain"
                                    style={{ maxHeight: "480px" }}
                                />
                            </div>

                            {/* Right: Results */}
                            <div className="flex-1 p-6 md:p-8">
                                <h3 className="text-lg font-bold mb-6">{t('caseCrm.double11.resultsTitle')}</h3>
                                <ul className="space-y-4 mb-6">
                                    <li className="flex items-start gap-3">
                                        <TrendingUp className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span className="text-sm text-muted-foreground leading-relaxed">
                                            {t('caseCrm.double11.resultsItem1Pre')}<span className="font-bold text-primary text-base">{t('caseCrm.double11.resultsItem1Highlight')}</span>{t('caseCrm.double11.resultsItem1Post')}
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <TrendingUp className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span className="text-sm text-muted-foreground leading-relaxed">
                                            {t('caseCrm.double11.resultsItem2Pre')}<span className="font-bold text-primary text-base">{t('caseCrm.double11.resultsItem2Highlight')}</span>{t('caseCrm.double11.resultsItem2Post')}
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <TrendingUp className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span className="text-sm text-muted-foreground leading-relaxed">
                                            {t('caseCrm.double11.resultsItem3Pre')}<span className="font-bold text-primary text-base">{t('caseCrm.double11.resultsItem3Highlight')}</span>{t('caseCrm.double11.resultsItem3Post')}
                                        </span>
                                    </li>
                                </ul>

                                {/* Summary note */}
                                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-muted-foreground leading-relaxed">
                                    {t('caseCrm.double11.note')}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </main>
        </div>
    );
}
