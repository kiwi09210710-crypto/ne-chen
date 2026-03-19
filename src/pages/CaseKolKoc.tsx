import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Users, UserCheck, Award, ClipboardCheck, MessageCircle, ShieldCheck, AlertTriangle, ArrowRight, TrendingUp, Video, Eye, Heart, MousePointerClick, DollarSign, BarChart3, X, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CaseKolKoc() {
    const { t, lang, setLang } = useLanguage();
    const [previewImage, setPreviewImage] = useState<{ src: string; alt: string } | null>(null);

    const stats = [
        { number: t('caseKoc.stats.stat1Num'), line1: t('caseKoc.stats.stat1Line1'), line2: t('caseKoc.stats.stat1Line2') },
        { number: t('caseKoc.stats.stat2Num'), line1: t('caseKoc.stats.stat2Line1'), line2: t('caseKoc.stats.stat2Line2') },
        { number: t('caseKoc.stats.stat3Num'), line1: t('caseKoc.stats.stat3Line1'), line2: t('caseKoc.stats.stat3Line2') },
    ];

    const capabilities = [
        {
            icon: ClipboardCheck,
            title: t('caseKoc.capabilities.cap1Title'),
            items: [
                t('caseKoc.capabilities.cap1Item1'),
                t('caseKoc.capabilities.cap1Item2'),
            ],
        },
        {
            icon: MessageCircle,
            title: t('caseKoc.capabilities.cap2Title'),
            items: [
                t('caseKoc.capabilities.cap2Item1'),
                t('caseKoc.capabilities.cap2Item2'),
            ],
        },
        {
            icon: ShieldCheck,
            title: t('caseKoc.capabilities.cap3Title'),
            items: [
                t('caseKoc.capabilities.cap3Item1'),
            ],
        },
        {
            icon: AlertTriangle,
            title: t('caseKoc.capabilities.cap4Title'),
            items: [
                t('caseKoc.capabilities.cap4Item1'),
                t('caseKoc.capabilities.cap4Item2'),
            ],
        },
    ];

    const workflow = [
        { step: "①", title: t('caseKoc.workflow.step1') },
        { step: "②", title: t('caseKoc.workflow.step2') },
        { step: "③", title: t('caseKoc.workflow.step3') },
        { step: "④", title: t('caseKoc.workflow.step4') },
        { step: "⑤", title: t('caseKoc.workflow.step5') },
    ];

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

            {/* Main Content */}
            <main className="container mx-auto px-6 pb-20 pt-28">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-600">
                        <Users className="h-4 w-4" />
                        {t('caseKoc.hero.tag')}
                    </div>
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                        {t('caseKoc.hero.title')}
                    </h1>
                    <p className="mx-auto mb-3 max-w-2xl text-lg text-muted-foreground">
                        {t('caseKoc.hero.desc1')}
                    </p>
                    <p className="mx-auto max-w-2xl text-base text-muted-foreground/80">
                        {t('caseKoc.hero.desc2')}
                    </p>
                </motion.div>

                {/* Stats Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-3"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.number}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="glass-card relative overflow-hidden p-8 text-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent" />
                            <div className="relative">
                                <p className="mb-2 text-5xl font-bold text-purple-600">{stat.number}</p>
                                <p className="text-base font-medium text-foreground">{stat.line1}</p>
                                <p className="text-sm text-muted-foreground">{stat.line2}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Divider */}
                <div className="my-16 border-t border-border" />

                {/* Core Capabilities */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-16"
                >
                    <div className="mb-8 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                            <Award className="h-5 w-5 text-purple-500" />
                        </div>
                        <h2 className="text-3xl font-bold">{t('caseKoc.capabilities.title')}</h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {capabilities.map((cap, index) => {
                            const Icon = cap.icon;
                            return (
                                <motion.div
                                    key={cap.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                                    className="glass-card p-6"
                                >
                                    <div className="mb-4 flex items-center gap-2">
                                        <h3 className="text-lg font-bold">✓ {cap.title}</h3>
                                    </div>
                                    <ul className="space-y-2 pl-1">
                                        {cap.items.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                                            >
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Divider */}
                <div className="my-16 border-t border-border" />

                {/* Workflow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mb-16"
                >
                    <div className="mb-8 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                            <UserCheck className="h-5 w-5 text-purple-500" />
                        </div>
                        <h2 className="text-3xl font-bold">{t('caseKoc.workflow.title')}</h2>
                    </div>

                    <div data-testid="koc-workflow-rail" className="mx-auto w-full px-0 sm:px-4">
                        <div className="grid gap-3 sm:grid-cols-2 lg:flex lg:items-center lg:justify-center">
                            {workflow.map((item, index) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                                    className="flex items-center justify-center"
                                >
                                    <div className="flex w-full flex-col items-center gap-3 rounded-xl border border-border bg-background px-4 py-5 text-center shadow-sm transition-all duration-200 hover:border-purple-300 hover:shadow-md lg:min-w-[130px]">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-500 text-lg font-bold text-white shadow-md">
                                            {item.step}
                                        </div>
                                        <span className="text-sm font-semibold text-center leading-tight">{item.title}</span>
                                    </div>
                                    {index < workflow.length - 1 && (
                                        <div className="hidden w-8 shrink-0 items-center justify-center text-purple-300 lg:flex">
                                            <ArrowRight className="h-5 w-5" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Divider */}
                <div className="my-16 border-t border-border" />

                {/* High Conversion Case Studies */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="mb-12"
                >
                    <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                            <TrendingUp className="h-5 w-5 text-purple-500" />
                        </div>
                        <h2 className="text-3xl font-bold">{t('caseKoc.cases.title')}</h2>
                    </div>
                    <p
                        data-testid="koc-case-lead"
                        className="mb-8 ml-0 text-muted-foreground sm:ml-[52px]"
                    >
                        {t('caseKoc.cases.desc')}
                    </p>
                </motion.div>

                {/* Case 1: 女性保養開箱 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mb-8"
                >
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-bold">{t('caseKoc.cases.case1.title')}</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="rounded-full bg-purple-500 px-4 py-1.5 text-sm font-medium text-white">
                                {t('caseCommon.goal')} {t('caseCommon.conversion')}
                            </span>
                            <span className="rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                                {t('caseCommon.product')} {t('caseKoc.cases.case1.tag')}
                            </span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid gap-4 lg:grid-cols-[2fr_auto_3fr] items-stretch mb-8">
                    {/* Left Column - KOC Image & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="glass-card flex flex-col p-5 h-full"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/10">
                                <Video className="h-4 w-4 text-purple-500" />
                            </div>
                            <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="text-base font-bold leading-tight">{t('caseKoc.cases.case1.kocType')}</h4>
                                <span className="text-xs text-muted-foreground">{t('caseKoc.cases.case1.format')}</span>
                            </div>
                        </div>

                        <p className="mb-3 text-xs text-muted-foreground leading-relaxed">
                            {t('caseKoc.cases.case1.details')}
                        </p>

                        {/* Screenshot Image */}
                        <div className="mb-3 flex min-h-[220px] flex-1 flex-col overflow-hidden rounded-lg border border-border/50 sm:min-h-[300px]">
                            <img
                                src="/koc-case1.jpg"
                                alt={t('caseKoc.cases.case1.title')}
                                className="w-full h-full object-cover rounded-lg cursor-zoom-in hover:scale-105 transition-transform duration-200"
                                onClick={() => setPreviewImage({ src: "/koc-case1.jpg", alt: t('caseKoc.cases.case1.title') })}
                            />
                            <p className="text-[11px] text-muted-foreground/60 text-center mt-2">{t('caseKoc.cases.case1.anon')}</p>
                        </div>

                        {/* KOC Info Stats */}
                        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-border/50">
                            <div className="text-center">
                                <div className="text-base font-bold text-primary">{t('caseKoc.cases.case1.followers')}</div>
                                <div className="text-[10px] text-muted-foreground">{t('caseKoc.cases.case1.followersLabel')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-base font-bold text-primary">Reels</div>
                                <div className="text-[10px] text-muted-foreground">{t('caseKoc.cases.case1.formatLabel')}</div>
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
                        transition={{ duration: 0.5, delay: 1.0 }}
                        className="glass-card flex flex-col p-5 h-full"
                    >
                        {/* Results Summary Header */}
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-500/10">
                                <TrendingUp className="h-4 w-4 text-green-500" />
                            </div>
                            <h4 className="text-base font-bold">{t('caseKoc.cases.case1.results')}</h4>
                        </div>

                        {/* Metrics Cards */}
                        <div className="mb-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
                            <div className="rounded-lg bg-secondary/30 p-3 text-center">
                                <div className="mb-1 flex items-center justify-center gap-1">
                                    <Eye className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-[10px] text-muted-foreground">{t('caseKoc.cases.case1.views')}</span>
                                </div>
                                <div className="text-xl font-bold text-primary">85,000</div>
                            </div>
                            <div className="rounded-lg bg-secondary/30 p-3 text-center">
                                <div className="mb-1 flex items-center justify-center gap-1">
                                    <Heart className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-[10px] text-muted-foreground">{t('caseKoc.cases.case1.engagement')}</span>
                                </div>
                                <div className="text-xl font-bold text-primary">732</div>
                            </div>
                            <div className="rounded-lg bg-secondary/30 p-3 text-center">
                                <div className="mb-1 flex items-center justify-center gap-1">
                                    <MousePointerClick className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-[10px] text-muted-foreground">CTR</span>
                                </div>
                                <div className="text-xl font-bold text-foreground">2.69%</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                            <div className="rounded-lg bg-secondary/30 p-3 text-center">
                                <div className="mb-1 flex items-center justify-center gap-1">
                                    <DollarSign className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-[10px] text-muted-foreground">CPA</span>
                                </div>
                                <div className="text-xl font-bold text-foreground">$765</div>
                            </div>
                            <div className="rounded-lg bg-secondary/30 p-3 text-center">
                                <div className="mb-1 flex items-center justify-center gap-1">
                                    <BarChart3 className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-[10px] text-muted-foreground">ROAS</span>
                                </div>
                                <div className="text-xl font-bold text-foreground">2.03</div>
                            </div>
                        </div>

                        {/* Success Banner */}
                        <div className="flex items-center gap-3 rounded-lg bg-green-500/10 px-4 py-3 mb-5">
                            <TrendingUp className="h-4 w-4 shrink-0 text-green-500" />
                            <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                                {t('caseKoc.cases.case1.banner')}
                            </span>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-border mb-5"></div>

                        {/* Strategy Section */}
                        <div className="flex-1 flex flex-col min-h-0">
                            <ul className="space-y-6 text-foreground">
                                <li className="flex flex-col gap-2">
                                    <span className="font-bold text-purple-600 text-lg flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                                        {t('caseCommon.strategy')}
                                    </span>
                                    <span className="text-base text-muted-foreground pl-4 border-l-2 border-purple-300/50 ml-0.5 leading-relaxed">
                                        {t('caseKoc.cases.case1.strategyDesc')}
                                    </span>
                                </li>
                                <li className="flex flex-col gap-2">
                                    <span className="font-bold text-purple-600 text-lg flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                                        {t('caseCommon.highlights')}
                                    </span>
                                    <span className="text-base text-muted-foreground pl-4 border-l-2 border-purple-300/50 ml-0.5 leading-relaxed">
                                        {t('caseKoc.cases.case1.highlightDesc')}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="my-16 border-t border-border" />

                {/* Case 2: 家庭日常搞笑 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mb-8"
                >
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-bold">{t('caseKoc.cases.case2.title')}</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="rounded-full bg-purple-500 px-4 py-1.5 text-sm font-medium text-white">
                                {t('caseCommon.goal')} {t('caseCommon.conversion')}
                            </span>
                            <span className="rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                                {t('caseCommon.product')} {t('caseKoc.cases.case2.tag')}
                            </span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid gap-4 lg:grid-cols-[2fr_auto_3fr] items-stretch mb-8">
                    {/* Left Column - KOC Image & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="glass-card flex flex-col p-5 h-full"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/10">
                                <Video className="h-4 w-4 text-purple-500" />
                            </div>
                            <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="text-base font-bold leading-tight">{t('caseKoc.cases.case2.kocType')}</h4>
                                <span className="text-xs text-muted-foreground">{t('caseKoc.cases.case2.format')}</span>
                            </div>
                        </div>

                        <p className="mb-3 text-xs text-muted-foreground leading-relaxed">
                            {t('caseKoc.cases.case2.details')}
                        </p>

                        {/* Screenshot Image */}
                        <div className="mb-3 flex min-h-[220px] flex-1 flex-col overflow-hidden rounded-lg border border-border/50 sm:min-h-[300px]">
                            <img
                                src="/koc-case2.jpg"
                                alt={t('caseKoc.cases.case2.title')}
                                className="w-full h-full object-cover rounded-lg cursor-zoom-in hover:scale-105 transition-transform duration-200"
                                onClick={() => setPreviewImage({ src: "/koc-case2.jpg", alt: t('caseKoc.cases.case2.title') })}
                            />
                            <p className="text-[11px] text-muted-foreground/60 text-center mt-2">{t('caseKoc.cases.case2.anon')}</p>
                        </div>

                        {/* KOC Info Stats */}
                        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-border/50">
                            <div className="text-center">
                                <div className="text-base font-bold text-primary">{t('caseKoc.cases.case2.followers')}</div>
                                <div className="text-[10px] text-muted-foreground">{t('caseKoc.cases.case2.followersLabel')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-base font-bold text-primary">Reels</div>
                                <div className="text-[10px] text-muted-foreground">{t('caseKoc.cases.case2.formatLabel')}</div>
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
                        transition={{ duration: 0.5, delay: 1.0 }}
                        className="glass-card flex flex-col p-5 h-full"
                    >
                        {/* Results Summary Header */}
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-500/10">
                                <TrendingUp className="h-4 w-4 text-green-500" />
                            </div>
                            <h4 className="text-base font-bold">{t('caseKoc.cases.case2.results')}</h4>
                        </div>

                        {/* Metrics Cards */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                            <div className="rounded-lg bg-secondary/30 p-3 text-center">
                                <div className="mb-1 flex items-center justify-center gap-1">
                                    <Eye className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-[10px] text-muted-foreground">{t('caseKoc.cases.case2.views')}</span>
                                </div>
                                <div className="text-xl font-bold text-foreground">18,000</div>
                            </div>
                            <div className="rounded-lg bg-secondary/30 p-3 text-center">
                                <div className="mb-1 flex items-center justify-center gap-1">
                                    <MousePointerClick className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-[10px] text-muted-foreground">CTR</span>
                                </div>
                                <div className="text-xl font-bold text-primary">4.72%</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                            <div className="rounded-lg bg-secondary/30 p-3 text-center">
                                <div className="mb-1 flex items-center justify-center gap-1">
                                    <DollarSign className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-[10px] text-muted-foreground">CPA</span>
                                </div>
                                <div className="text-xl font-bold text-primary">$209</div>
                            </div>
                            <div className="rounded-lg bg-secondary/30 p-3 text-center">
                                <div className="mb-1 flex items-center justify-center gap-1">
                                    <BarChart3 className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-[10px] text-muted-foreground">ROAS</span>
                                </div>
                                <div className="text-xl font-bold text-primary">3.78</div>
                            </div>
                        </div>

                        {/* Success Banner */}
                        <div className="flex items-center gap-3 rounded-lg bg-green-500/10 px-4 py-3 mb-5">
                            <TrendingUp className="h-4 w-4 shrink-0 text-green-500" />
                            <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                                {t('caseKoc.cases.case2.banner')}
                            </span>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-border mb-5"></div>

                        {/* Strategy Section */}
                        <div className="flex-1 flex flex-col min-h-0">
                            <ul className="space-y-6 text-foreground">
                                <li className="flex flex-col gap-2">
                                    <span className="font-bold text-purple-600 text-lg flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                                        {t('caseCommon.strategy')}
                                    </span>
                                    <span className="text-base text-muted-foreground pl-4 border-l-2 border-purple-300/50 ml-0.5 leading-relaxed">
                                        {t('caseKoc.cases.case2.strategyDesc')}
                                    </span>
                                </li>
                                <li className="flex flex-col gap-2">
                                    <span className="font-bold text-purple-600 text-lg flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                                        {t('caseCommon.highlights')}
                                    </span>
                                    <span className="text-base text-muted-foreground pl-4 border-l-2 border-purple-300/50 ml-0.5 leading-relaxed">
                                        {t('caseKoc.cases.case2.highlightDesc')}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="my-16 border-t border-border" />

                {/* Case 3: 家庭幼童抗菌使用情境 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mb-8"
                >
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-bold">{t('caseKoc.cases.case3.title')}</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="rounded-full bg-purple-500 px-4 py-1.5 text-sm font-medium text-white">
                                {t('caseCommon.goal')} {t('caseCommon.conversion')}
                            </span>
                            <span className="rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                                {t('caseCommon.product')} {t('caseKoc.cases.case3.tag')}
                            </span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid gap-4 lg:grid-cols-[2fr_auto_3fr] items-stretch mb-8">
                    {/* Left Column - KOC Image & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="glass-card flex flex-col p-5 h-full"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/10">
                                <Video className="h-4 w-4 text-purple-500" />
                            </div>
                            <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="text-base font-bold leading-tight">{t('caseKoc.cases.case3.kocType')}</h4>
                                <span className="text-xs text-muted-foreground">{t('caseKoc.cases.case3.format')}</span>
                            </div>
                        </div>

                        <p className="mb-3 text-xs text-muted-foreground leading-relaxed">
                            {t('caseKoc.cases.case3.details')}
                        </p>

                        {/* Screenshot Image */}
                        <div className="mb-3 flex min-h-[220px] flex-1 flex-col overflow-hidden rounded-lg border border-border/50 sm:min-h-[300px]">
                            <img
                                src="/koc-case3.jpg"
                                alt={t('caseKoc.cases.case3.title')}
                                className="w-full h-full object-cover rounded-lg cursor-zoom-in hover:scale-105 transition-transform duration-200"
                                onClick={() => setPreviewImage({ src: "/koc-case3.jpg", alt: t('caseKoc.cases.case3.title') })}
                            />
                            <p className="text-[11px] text-muted-foreground/60 text-center mt-2">{t('caseKoc.cases.case3.anon')}</p>
                        </div>

                        {/* KOC Info Stats */}
                        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-border/50">
                            <div className="text-center">
                                <div className="text-base font-bold text-primary">{t('caseKoc.cases.case3.followers')}</div>
                                <div className="text-[10px] text-muted-foreground">{t('caseKoc.cases.case3.followersLabel')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-base font-bold text-primary">Reels</div>
                                <div className="text-[10px] text-muted-foreground">{t('caseKoc.cases.case3.formatLabel')}</div>
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
                        transition={{ duration: 0.5, delay: 1.0 }}
                        className="glass-card flex flex-col p-5 h-full"
                    >
                        {/* Results Summary Header */}
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-500/10">
                                <TrendingUp className="h-4 w-4 text-green-500" />
                            </div>
                            <h4 className="text-base font-bold">{t('caseKoc.cases.case3.results')}</h4>
                        </div>

                        {/* Metrics Cards */}
                        <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
                            <div className="rounded-lg bg-secondary/30 p-3 text-center">
                                <div className="mb-1 flex items-center justify-center gap-1">
                                    <MousePointerClick className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-[10px] text-muted-foreground">CTR</span>
                                </div>
                                <div className="text-xl font-bold text-foreground">1.96%</div>
                            </div>
                            <div className="rounded-lg bg-secondary/30 p-3 text-center">
                                <div className="mb-1 flex items-center justify-center gap-1">
                                    <DollarSign className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-[10px] text-muted-foreground">CPA</span>
                                </div>
                                <div className="text-xl font-bold text-primary">$363</div>
                            </div>
                            <div className="rounded-lg bg-secondary/30 p-3 text-center">
                                <div className="mb-1 flex items-center justify-center gap-1">
                                    <BarChart3 className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-[10px] text-muted-foreground">ROAS</span>
                                </div>
                                <div className="text-xl font-bold text-primary">2.91</div>
                            </div>
                        </div>

                        {/* Success Banner */}
                        <div className="flex items-center gap-3 rounded-lg bg-green-500/10 px-4 py-3 mb-5">
                            <TrendingUp className="h-4 w-4 shrink-0 text-green-500" />
                            <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                                {t('caseKoc.cases.case3.banner')}
                            </span>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-border mb-5"></div>

                        {/* Strategy Section */}
                        <div className="flex-1 flex flex-col min-h-0">
                            <ul className="space-y-6 text-foreground">
                                <li className="flex flex-col gap-2">
                                    <span className="font-bold text-purple-600 text-lg flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                                        {t('caseCommon.strategy')}
                                    </span>
                                    <span className="text-base text-muted-foreground pl-4 border-l-2 border-purple-300/50 ml-0.5 leading-relaxed">
                                        {t('caseKoc.cases.case3.strategyDesc')}
                                    </span>
                                </li>
                                <li className="flex flex-col gap-2">
                                    <span className="font-bold text-purple-600 text-lg flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                                        {t('caseCommon.highlights')}
                                    </span>
                                    <span className="text-base text-muted-foreground pl-4 border-l-2 border-purple-300/50 ml-0.5 leading-relaxed">
                                        {t('caseKoc.cases.case3.highlightDesc')}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Image Preview Modal */}
            <AnimatePresence>
                {previewImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                        onClick={() => setPreviewImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-h-[90vh] max-w-4xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setPreviewImage(null)}
                                className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground shadow-lg transition-colors hover:bg-secondary"
                            >
                                <X className="h-4 w-4" />
                            </button>
                            <img
                                src={previewImage.src}
                                alt={previewImage.alt}
                                className="max-h-[85vh] rounded-lg object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
