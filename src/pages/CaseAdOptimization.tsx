import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Target, TrendingUp, MousePointerClick, ExternalLink, X, Building2, Users, FlaskConical, Video, Image, Pencil } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import adPostImage from "@/assets/case-ad-optimization.png";
import hotelPromoImage from "@/assets/case-hotel-promo.jpg";
import kidsEventImage from "@/assets/case-kids-event.png";
import adMaterialVideo from "@/assets/ad-material-video.jpg";
import adMaterialPhoto from "@/assets/ad-material-photo.jpg";
import adMaterialComic from "@/assets/ad-material-comic.jpg";

export default function CaseAdOptimization() {
    const [previewImage, setPreviewImage] = useState<{ src: string; alt: string } | null>(null);
    const { t } = useLanguage();

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

            {/* Main Content */}
            <main className="container mx-auto px-6 pb-20 pt-28">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                        <Target className="h-4 w-4" />
                        {t('caseAd.hero.tag')}
                    </div>
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                        {t('caseAd.hero.title')}
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        {t('caseAd.hero.desc')}
                    </p>
                </motion.div>

                {/* Case Content - Two Columns */}
                <div className="grid gap-8 lg:grid-cols-5">
                    {/* Left Column - Ad Post Image (smaller) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-card space-y-4 p-5 lg:col-span-2"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10">
                                <MousePointerClick className="h-4 w-4 text-blue-500" />
                            </div>
                            <h2 className="text-lg font-semibold">{t('caseAd.case1.title')}</h2>
                        </div>

                        <p className="text-sm text-muted-foreground">
                            {t('caseAd.case1.desc')}
                        </p>

                        {/* Ad Post Image */}
                        <div className="flex justify-center">
                            <div
                                className="cursor-zoom-in overflow-hidden rounded-lg border border-border transition-transform duration-200 hover:scale-105"
                                onClick={() => setPreviewImage({ src: adPostImage, alt: t('caseAd.case1.imgAlt') })}
                            >
                                <img
                                    src={adPostImage}
                                    alt={t('caseAd.case1.imgAlt')}
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Results + Strategy Combined */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="glass-card space-y-6 p-6 lg:col-span-3"
                    >
                        {/* Results Summary Header */}
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                                <TrendingUp className="h-5 w-5 text-green-500" />
                            </div>
                            <h2 className="text-xl font-semibold">{t('caseAd.case1.statsTarget')}</h2>
                        </div>

                        {/* CTR Stats - 3 columns in one row */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="rounded-lg border border-border bg-background p-4 text-center">
                                <div className="mb-1 text-xs text-muted-foreground">{t('caseCommon.stats.ctr')}</div>
                                <div className="text-2xl font-bold text-primary">6.72%</div>
                                <p className="mt-1 text-xs text-muted-foreground">
                                    {t('caseAd.case1.ctrSub')}
                                </p>
                            </div>
                            <div className="rounded-lg border border-border bg-background p-4 text-center">
                                <div className="mb-1 text-xs text-muted-foreground">{t('caseCommon.stats.outCtr')}</div>
                                <div className="text-2xl font-bold text-primary">3.30%</div>
                                <p className="mt-1 text-xs text-muted-foreground">
                                    {t('caseAd.case1.outCtrSub')}
                                </p>
                            </div>
                            <div className="rounded-lg border border-border bg-background p-4 text-center">
                                <div className="mb-1 text-xs text-muted-foreground">{t('caseCommon.stats.roas')}</div>
                                <div className="text-2xl font-bold text-primary">3.66</div>
                                <p className="mt-1 text-xs text-muted-foreground">
                                    {t('caseAd.case1.roasSub')}
                                </p>
                            </div>
                        </div>

                        {/* Success Banner */}
                        <div className="flex items-center gap-2 rounded-lg bg-green-500/10 p-3">
                            <TrendingUp className="h-4 w-4 text-green-500" />
                            <span className="text-sm font-medium text-green-600 dark:text-green-400">
                                {t('caseAd.case1.banner')}
                            </span>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-border"></div>

                        {/* Strategy Section */}
                        <div>
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <Target className="h-5 w-5 text-primary" />
                                </div>
                                <h2 className="text-xl font-semibold">{t('caseCommon.strategy')}</h2>
                            </div>

                            <p className="text-muted-foreground leading-relaxed">
                                {t('caseAd.case1.strategyDesc')}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* == Added Case: 飯店親子專案-導購文 & 親子實體活動-報名文 == */}
                <div className="mt-16 border-t border-border pt-16" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="mb-8"
                >
                    <div className="mb-6 flex flex-wrap items-center gap-4">
                        <h2 className="text-3xl font-bold md:text-4xl">{t('caseAd.otherCases.title')}</h2>
                        <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white">
                            {t('caseCommon.goal')} {t('caseAd.otherCases.goal')}
                        </span>
                    </div>
                </motion.div>

                {/* Two Cases Side by Side */}
                <div className="grid gap-4 md:grid-cols-2 mb-8">
                    {/* Left Card - 飯店親子專案-導購文 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="glass-card p-5 relative flex flex-col h-full"
                    >
                        {/* Top Right Product Tag */}
                        <div className="absolute top-4 right-4 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground flex items-center gap-1.5 shadow-sm z-10">
                            {t('caseCommon.product')} {t('caseAd.otherCases.hotel.tag')}
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10">
                                <Building2 className="h-4.5 w-4.5 text-orange-500" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold">{t('caseAd.otherCases.hotel.title')}</h3>
                                <span className="text-xs text-muted-foreground">{t('caseAd.otherCases.hotel.tag')}</span>
                            </div>
                        </div>

                        {/* Split Layout Container */}
                        <div className="flex gap-3 flex-1 min-h-0">
                            {/* Left Text Content */}
                            <div className="flex-1 flex flex-col overflow-y-auto pr-1">
                                <p className="text-muted-foreground mb-3 text-xs leading-relaxed">
                                    {t('caseAd.otherCases.hotel.desc')}
                                </p>

                                {/* Strategy & Target */}
                                <div className="space-y-2 bg-secondary/20 p-2.5 rounded-lg text-xs flex-1">
                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold text-orange-600 flex items-center gap-1.5">
                                            <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                                            {t('caseCommon.execution')}
                                        </span>
                                        <span className="text-muted-foreground border-l-2 border-orange-500/30 pl-2 ml-0.5 leading-tight">
                                            {t('caseAd.otherCases.hotel.exec')}
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold text-orange-600 flex items-center gap-1.5">
                                            <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                                            {t('caseCommon.strategy')}
                                        </span>
                                        <span className="text-muted-foreground border-l-2 border-orange-500/30 pl-2 ml-0.5 leading-tight">
                                            {t('caseAd.otherCases.hotel.target')}
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold text-orange-600 flex items-center gap-1.5">
                                            <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                                            {t('caseCommon.highlights')}
                                        </span>
                                        <span className="text-muted-foreground border-l-2 border-orange-500/30 pl-2 ml-0.5 leading-tight">
                                            {t('caseAd.otherCases.hotel.hl')}
                                        </span>
                                    </div>
                                </div>

                                {/* Metrics Cards */}
                                <div className="flex items-center gap-2 mt-3 mb-2">
                                    <TrendingUp className="h-4 w-4 text-orange-500" />
                                    <span className="text-sm font-bold">{t('caseCommon.stats.summary')}</span>
                                </div>
                                <div className="w-full grid grid-cols-2 gap-2">
                                    <div className="rounded-xl bg-secondary/50 p-3 text-center">
                                        <div className="text-xs text-muted-foreground mb-1">{t('caseCommon.stats.views')}</div>
                                        <div className="text-xl font-bold text-foreground">146,778</div>
                                    </div>
                                    <div className="rounded-xl bg-secondary/50 p-3 text-center">
                                        <div className="text-xs text-muted-foreground mb-1">{t('caseCommon.stats.ctr')}</div>
                                        <div className="text-xl font-bold text-primary">9.13%</div>
                                    </div>
                                    <div className="rounded-xl bg-secondary/50 p-3 text-center">
                                        <div className="text-xs text-muted-foreground mb-1">轉換數</div>
                                        <div className="text-xl font-bold text-primary">623次</div>
                                    </div>
                                    <div className="rounded-xl bg-secondary/50 p-3 text-center">
                                        <div className="text-xs text-muted-foreground mb-1">平均 CPA</div>
                                        <div className="text-xl font-bold text-primary">$17</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="w-[50%] flex flex-col items-stretch">
                                <div
                                    className="w-full h-full cursor-zoom-in overflow-hidden rounded-lg border border-border shadow-sm transition-transform duration-200 hover:scale-[1.02]"
                                    onClick={() => setPreviewImage({ src: hotelPromoImage, alt: t('caseAd.otherCases.hotel.imgAlt') })}
                                >
                                    <img
                                        src={hotelPromoImage}
                                        alt={t('caseAd.otherCases.hotel.imgAlt')}
                                        className="w-full h-full object-contain bg-black/5"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Card - 親子實體活動-報名文 */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="glass-card p-5 relative flex flex-col h-full"
                    >
                        {/* Top Right Product Tag */}
                        <div className="absolute top-4 right-4 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground flex items-center gap-1.5 shadow-sm z-10">
                            {t('caseCommon.product')} {t('caseAd.otherCases.kids.product')}
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10">
                                <Users className="h-4.5 w-4.5 text-green-500" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-foreground">{t('caseAd.otherCases.kids.title')}</h3>
                                <span className="text-xs text-muted-foreground">{t('caseAd.otherCases.kids.tag')}</span>
                            </div>
                        </div>

                        {/* Split Layout Container */}
                        <div className="flex gap-3 flex-1 min-h-0">
                            {/* Left Text Content */}
                            <div className="flex-1 flex flex-col overflow-y-auto pr-1">
                                <p className="text-muted-foreground mb-3 text-xs leading-relaxed">
                                    {t('caseAd.otherCases.kids.desc')}
                                </p>

                                {/* Strategy & Highlights */}
                                <div className="space-y-2 bg-secondary/20 p-2.5 rounded-lg text-xs flex-1">
                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold text-green-600 flex items-center gap-1.5">
                                            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                            {t('caseCommon.execution')}
                                        </span>
                                        <span className="text-muted-foreground border-l-2 border-green-500/30 pl-2 ml-0.5 leading-tight">
                                            {t('caseAd.otherCases.kids.exec')}
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold text-green-600 flex items-center gap-1.5">
                                            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                            {t('caseCommon.highlights')}
                                        </span>
                                        <span className="text-muted-foreground border-l-2 border-green-500/30 pl-2 ml-0.5 leading-tight">
                                            {t('caseAd.otherCases.kids.hl')}
                                        </span>
                                    </div>
                                </div>

                                {/* Metrics Cards */}
                                <div className="flex items-center gap-2 mt-3 mb-2">
                                    <TrendingUp className="h-4 w-4 text-green-500" />
                                    <span className="text-sm font-bold">{t('caseCommon.stats.summary')}</span>
                                </div>
                                <div className="w-full grid grid-cols-2 gap-2">
                                    <div className="rounded-xl bg-secondary/50 p-3 text-center">
                                        <div className="text-xs text-muted-foreground mb-1">{t('caseCommon.stats.ctr')}</div>
                                        <div className="text-xl font-bold text-foreground">8.70%</div>
                                    </div>
                                    <div className="rounded-xl bg-secondary/50 p-3 text-center">
                                        <div className="text-xs text-muted-foreground mb-1">CPC</div>
                                        <div className="text-xl font-bold text-foreground">$1.07</div>
                                    </div>
                                    <div className="rounded-xl bg-secondary/50 p-3 text-center">
                                        <div className="text-xs text-muted-foreground mb-1">總報名數</div>
                                        <div className="text-xl font-bold text-primary">119人</div>
                                    </div>
                                    <div className="rounded-xl bg-secondary/50 p-3 text-center">
                                        <div className="text-xs text-muted-foreground mb-1">平均 CPA</div>
                                        <div className="text-xl font-bold text-primary">$23</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="w-[40%] flex flex-col items-center justify-start">
                                <div
                                    className="w-full cursor-zoom-in overflow-hidden rounded-lg border border-border shadow-sm transition-transform duration-200 hover:scale-[1.02]"
                                    onClick={() => setPreviewImage({ src: kidsEventImage, alt: t('caseAd.otherCases.kids.imgAlt') })}
                                >
                                    <img
                                        src={kidsEventImage}
                                        alt={t('caseAd.otherCases.kids.imgAlt')}
                                        className="w-full h-auto object-contain bg-black/5"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ===== 去味達人｜長期素材測試與受眾洞察 ===== */}
                <div className="mt-16 border-t border-border pt-16" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="mb-8"
                >
                    <div className="mb-6 flex flex-wrap items-center gap-4">
                        <h2 className="text-3xl font-bold md:text-4xl">{t('caseAd.testing.title')}</h2>
                        <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white">
                            {t('caseAd.testing.tag')}
                        </span>
                    </div>
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-2 mb-8">
                    {/* ===== Left Card — 素材測試歷程 ===== */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="glass-card p-6 flex flex-col h-full"
                    >
                        {/* Title */}
                        <div className="flex items-center gap-2 mb-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10">
                                <FlaskConical className="h-4.5 w-4.5 text-orange-500" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold">{t('caseAd.testing.leftCard.title')}</h3>
                                <span className="text-xs text-muted-foreground">{t('caseAd.testing.tag')}</span>
                            </div>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                            {t('caseAd.testing.leftCard.desc')}
                        </p>

                        {/* ── Vertical Timeline ── */}
                        <div className="relative pl-6 mb-6 space-y-5">
                            {/* timeline line */}
                            <div className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-orange-400 via-primary to-green-500 rounded-full" />

                            {[{
                                time: '2023 Q4', text: t('caseAd.testing.leftCard.time1'), metric: 'ROAS 1.21', color: 'text-muted-foreground',
                            }, {
                                time: '2024 Q2', text: t('caseAd.testing.leftCard.time2'), metric: 'ROAS 3.57', color: 'text-orange-500',
                            }, {
                                time: '2025 Q3', text: t('caseAd.testing.leftCard.time3'), metric: 'ROAS 3.78', color: 'text-primary',
                            }, {
                                time: '2026 Q1', text: t('caseAd.testing.leftCard.time4'), metric: '', color: 'text-green-600',
                            }].map((node, i) => (
                                <div key={i} className="relative flex items-start gap-3">
                                    {/* dot */}
                                    <span className={`absolute -left-6 top-1 h-[14px] w-[14px] rounded-full border-2 border-background ${i === 2 ? 'bg-primary ring-2 ring-primary/30' : 'bg-secondary'
                                        }`} />
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-foreground">{node.time}</span>
                                        <span className="text-xs text-muted-foreground leading-snug">
                                            {node.text}
                                            {node.metric && <span className={`ml-1 font-bold ${node.color}`}>{node.metric}</span>}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ── 素材類型展示區 ── */}
                        <h4 className="text-sm font-bold mb-3 flex items-center gap-2">
                            <Image className="h-4 w-4 text-primary" />
                            {t('caseAd.testing.leftCard.typesTitle')}
                        </h4>

                        <div className="grid grid-cols-3 gap-3">
                            {/* Card 1 — 影片素材 */}
                            <div className="rounded-xl border border-border bg-background overflow-hidden flex flex-col">
                                <div
                                    className="aspect-[4/3] overflow-hidden cursor-zoom-in"
                                    onClick={() => setPreviewImage({ src: adMaterialVideo, alt: t('caseAd.testing.leftCard.vidTitle') })}
                                >
                                    <img src={adMaterialVideo} alt={t('caseAd.testing.leftCard.vidTitle')} className="w-full h-full object-cover transition-transform duration-200 hover:scale-105" />
                                </div>
                                <div className="p-2.5 text-center space-y-1">
                                    <div className="text-[11px] font-bold text-foreground leading-tight">{t('caseAd.testing.leftCard.vidTitle')}</div>
                                    <div className="text-[10px] text-muted-foreground leading-tight">{t('caseAd.testing.leftCard.vidRep')}</div>
                                    <div className="text-[10px] font-bold text-primary">{t('caseAd.testing.leftCard.vidROAS')}</div>
                                    <div className="text-[10px] text-orange-500 font-medium leading-snug">{t('caseAd.testing.leftCard.vidSub')}</div>
                                </div>
                            </div>

                            {/* Card 2 — 實拍素材 */}
                            <div className="rounded-xl border border-border bg-background overflow-hidden flex flex-col">
                                <div
                                    className="aspect-[4/3] overflow-hidden cursor-zoom-in"
                                    onClick={() => setPreviewImage({ src: adMaterialPhoto, alt: t('caseAd.testing.leftCard.photoTitle') })}
                                >
                                    <img src={adMaterialPhoto} alt={t('caseAd.testing.leftCard.photoTitle')} className="w-full h-full object-cover transition-transform duration-200 hover:scale-105" />
                                </div>
                                <div className="p-2.5 text-center space-y-1">
                                    <div className="text-[11px] font-bold text-foreground leading-tight">{t('caseAd.testing.leftCard.photoTitle')}</div>
                                    <div className="text-[10px] text-muted-foreground leading-tight">{t('caseAd.testing.leftCard.photoRep')}</div>
                                    <div className="text-[10px] font-bold text-primary">{t('caseAd.testing.leftCard.photoROAS')}</div>
                                    <div className="text-[10px] text-orange-500 font-medium leading-snug">{t('caseAd.testing.leftCard.photoSub')}</div>
                                </div>
                            </div>

                            {/* Card 3 — 漫畫感素材 */}
                            <div className="rounded-xl border border-border bg-background overflow-hidden flex flex-col">
                                <div
                                    className="aspect-[4/3] overflow-hidden cursor-zoom-in"
                                    onClick={() => setPreviewImage({ src: adMaterialComic, alt: t('caseAd.testing.leftCard.comicTitle') })}
                                >
                                    <img src={adMaterialComic} alt={t('caseAd.testing.leftCard.comicTitle')} className="w-full h-full object-cover transition-transform duration-200 hover:scale-105" />
                                </div>
                                <div className="p-2.5 text-center space-y-1">
                                    <div className="text-[11px] font-bold text-foreground leading-tight">{t('caseAd.testing.leftCard.comicTitle')}</div>
                                    <div className="text-[10px] text-muted-foreground leading-tight">{t('caseAd.testing.leftCard.comicRep')}</div>
                                    <div className="text-[10px] font-bold text-primary">{t('caseAd.testing.leftCard.comicROAS')}</div>
                                    <div className="text-[10px] text-orange-500 font-medium leading-snug">{t('caseAd.testing.leftCard.comicSub')}</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ===== Right Card — 成效摘要 + 廣告策略 ===== */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="glass-card p-6 flex flex-col h-full"
                    >
                        {/* Results Summary Header */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                                <TrendingUp className="h-5 w-5 text-green-500" />
                            </div>
                            <h2 className="text-lg font-semibold">{t('caseAd.testing.rightCard.title')}</h2>
                        </div>

                        {/* 3 Metric Boxes */}
                        <div className="grid grid-cols-3 gap-3 mb-4">
                            <div className="rounded-lg border border-border bg-background p-4 text-center">
                                <div className="mb-1 text-xs text-muted-foreground">{t('caseAd.testing.rightCard.maxRoas')}</div>
                                <div className="text-2xl font-bold text-primary">3.78</div>
                                <p className="mt-1 text-[10px] text-muted-foreground">{t('caseAd.testing.rightCard.maxRoasSub')}</p>
                            </div>
                            <div className="rounded-lg border border-border bg-background p-4 text-center">
                                <div className="mb-1 text-xs text-muted-foreground">{t('caseAd.testing.rightCard.maxCtr')}</div>
                                <div className="text-2xl font-bold text-primary">2.18%</div>
                                <p className="mt-1 text-[10px] text-muted-foreground">{t('caseAd.testing.rightCard.maxCtrSub')}</p>
                            </div>
                            <div className="rounded-lg border border-border bg-background p-4 text-center">
                                <div className="mb-1 text-xs text-muted-foreground">{t('caseAd.testing.rightCard.groups')}</div>
                                <div className="text-2xl font-bold text-primary">14+</div>
                                <p className="mt-1 text-[10px] text-muted-foreground">{t('caseAd.testing.rightCard.groupsSub')}</p>
                            </div>
                        </div>

                        {/* Success Banner */}
                        <div className="flex items-center gap-2 rounded-lg bg-green-500/10 p-3 mb-5">
                            <TrendingUp className="h-4 w-4 shrink-0 text-green-500" />
                            <span className="text-sm font-medium text-green-600 dark:text-green-400">
                                {t('caseAd.testing.rightCard.banner')}
                            </span>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-border mb-5" />

                        {/* Strategy Section */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <Target className="h-5 w-5 text-primary" />
                            </div>
                            <h2 className="text-lg font-semibold">{t('caseCommon.strategy')}</h2>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                            {t('caseAd.testing.rightCard.strategyIntro')}
                        </p>

                        <div className="space-y-4 flex-1">
                            {/* 切角 1 */}
                            <div className="rounded-xl bg-secondary/20 p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                                    <span className="text-sm font-bold text-orange-600">{t('caseAd.testing.rightCard.angle1Title')}</span>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed border-l-2 border-orange-500/30 pl-3">
                                    {t('caseAd.testing.rightCard.angle1Desc')}
                                </p>
                            </div>

                            {/* 切角 2 */}
                            <div className="rounded-xl bg-secondary/20 p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="h-2 w-2 rounded-full bg-green-500" />
                                    <span className="text-sm font-bold text-green-600">{t('caseAd.testing.rightCard.angle2Title')}</span>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed border-l-2 border-green-500/30 pl-3">
                                    {t('caseAd.testing.rightCard.angle2Desc')}
                                </p>
                            </div>
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
