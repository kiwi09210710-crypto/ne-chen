import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart, CalendarDays, Target, Megaphone, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import shopeeImg from "@/assets/蝦皮.jpg";
import ecImg from "@/assets/ec.jpg";

export default function CaseEcommerce() {
    const { t, lang, setLang } = useLanguage();

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

            <main className="container mx-auto px-6 pb-20 pt-28">

                {/* Hero 標題區 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                        <ShoppingCart className="h-4 w-4" />
                        {t('caseEcommerce.hero.tag')}
                    </div>
                    <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                        {t('caseEcommerce.hero.title')}
                    </h1>
                    <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
                        {t('caseEcommerce.hero.desc')}
                    </p>
                </motion.div>

                {/* 案例區段標題 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <ShoppingCart className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{t('caseEcommerce.shopee.title')}</h2>
                    </div>
                    <p className="text-muted-foreground pl-[52px]">
                        {t('caseEcommerce.shopee.desc')}
                    </p>
                </motion.div>

                {/* 案例卡片 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-8"
                >
                    {/* 雙12購物車降價活動 */}
                    <div className="glass-card overflow-hidden">
                        {/* 卡片Header */}
                        <div className="flex flex-wrap items-center gap-3 border-b border-border px-6 py-4">
                            <span className="rounded-md bg-[#EE4D2D] px-3 py-1 text-sm font-semibold text-white">
                                {t('caseEcommerce.shopee.tag')}
                            </span>
                            <span className="ml-auto flex items-center gap-1.5 text-sm text-muted-foreground">
                                {/* 蝦皮 icon minimal */}
                                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#EE4D2D]" aria-label="蝦皮">
                                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3a2 2 0 110 4 2 2 0 010-4zm5 11H7v-2h10v2z" />
                                </svg>
                                {t('caseEcommerce.shopee.platform')}
                            </span>
                        </div>

                        <div className="flex flex-col lg:flex-row">
                            {/* 左：截圖 placeholder */}
                            <div className="lg:w-[42%] p-6 flex items-center justify-center">
                                <div className="w-full overflow-hidden rounded-xl border border-border">
                                    <img
                                        src={shopeeImg}
                                        alt={t('caseEcommerce.shopee.imgAlt')}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>

                            {/* 右：活動資訊 */}
                            <div className="flex-1 p-6 md:p-8 space-y-6">
                                {/* 活動資訊三欄 */}
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="flex items-center gap-2 w-28 shrink-0">
                                            <CalendarDays className="h-4 w-4 text-primary shrink-0" />
                                            <span className="text-sm font-semibold text-foreground">{t('caseEcommerce.shopee.periodLabel')}</span>
                                        </div>
                                        <span className="text-muted-foreground text-sm leading-relaxed border-l border-border pl-3">{t('caseEcommerce.shopee.periodVal')}</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="flex items-center gap-2 w-28 shrink-0">
                                            <Megaphone className="h-4 w-4 text-primary shrink-0" />
                                            <span className="text-sm font-semibold text-foreground">{t('caseEcommerce.shopee.formatLabel')}</span>
                                        </div>
                                        <span className="text-muted-foreground text-sm leading-relaxed border-l border-border pl-3">
                                            {t('caseEcommerce.shopee.formatVal')}
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="flex items-center gap-2 w-28 shrink-0">
                                            <Target className="h-4 w-4 text-primary shrink-0" />
                                            <span className="text-sm font-semibold text-foreground">{t('caseEcommerce.shopee.purposeLabel')}</span>
                                        </div>
                                        <span className="text-muted-foreground text-sm leading-relaxed border-l border-border pl-3">
                                            {t('caseEcommerce.shopee.purposeVal')}
                                        </span>
                                    </div>
                                </div>

                                {/* 成效摘要 */}
                                <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                                    <div className="flex items-center gap-2 mb-4">
                                        <TrendingUp className="h-5 w-5 text-primary" />
                                        <h4 className="font-bold text-base">{t('caseEcommerce.shopee.resultsTitle')}</h4>
                                    </div>
                                    <ul className="space-y-2.5 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="text-foreground mt-1.5 shrink-0 text-[8px]">●</span>
                                            <span>
                                                {t('caseEcommerce.shopee.resultsItem1Pre')}
                                                <span className="font-bold text-primary">{t('caseEcommerce.shopee.resultsItem1Highlight')}</span>
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-foreground mt-1.5 shrink-0 text-[8px]">●</span>
                                            <span>{t('caseEcommerce.shopee.resultsItem2')}</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-foreground mt-1.5 shrink-0 text-[8px]">●</span>
                                            <span>
                                                {t('caseEcommerce.shopee.resultsItem3Pre')}
                                                <span className="font-bold text-primary">{t('caseEcommerce.shopee.resultsItem3Highlight')}</span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 官網行銷活動案例 區段標題 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16 mb-8"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <ShoppingCart className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{t('caseEcommerce.official.title')}</h2>
                    </div>
                    <p className="text-muted-foreground pl-[52px]">
                        {t('caseEcommerce.official.desc')}
                    </p>
                </motion.div>

                {/* CYBERBIZ 蛇來運轉案例卡片 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="space-y-8"
                >
                    <div className="glass-card overflow-hidden">
                        {/* 卡片Header */}
                        <div className="flex flex-wrap items-center gap-3 border-b border-border px-6 py-4">
                            <span className="rounded-md bg-[#E65C1E] px-3 py-1 text-sm font-semibold text-white">
                                {t('caseEcommerce.official.tag')}
                            </span>
                            <span className="ml-auto flex items-center gap-1.5 text-sm font-semibold tracking-widest text-[#1a1a2e]">
                                {t('caseEcommerce.official.platform')}
                            </span>
                        </div>

                        <div className="flex flex-col lg:flex-row">
                            {/* 左：活動圖片 */}
                            <div className="lg:w-[42%] p-6 flex items-center justify-center">
                                <div className="w-full overflow-hidden rounded-xl border border-border">
                                    <img
                                        src={ecImg}
                                        alt={t('caseEcommerce.official.imgAlt')}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>

                            {/* 右：活動資訊 */}
                            <div className="flex-1 p-6 md:p-8 space-y-6">
                                {/* 活動資訊欄 */}
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="flex items-center gap-2 w-28 shrink-0">
                                            <CalendarDays className="h-4 w-4 text-primary shrink-0" />
                                            <span className="text-sm font-semibold text-foreground">{t('caseEcommerce.official.periodLabel')}</span>
                                        </div>
                                        <span className="text-muted-foreground text-sm leading-relaxed border-l border-border pl-3">
                                            {t('caseEcommerce.official.periodVal')}
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="flex items-center gap-2 w-28 shrink-0">
                                            <Megaphone className="h-4 w-4 text-primary shrink-0" />
                                            <span className="text-sm font-semibold text-foreground">{t('caseEcommerce.official.formatLabel')}</span>
                                        </div>
                                        <span className="text-muted-foreground text-sm leading-relaxed border-l border-border pl-3">
                                            {t('caseEcommerce.official.formatVal')}
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="flex items-center gap-2 w-28 shrink-0">
                                            <Target className="h-4 w-4 text-primary shrink-0" />
                                            <span className="text-sm font-semibold text-foreground">{t('caseEcommerce.official.purposeLabel')}</span>
                                        </div>
                                        <span className="text-muted-foreground text-sm leading-relaxed border-l border-border pl-3">
                                            {t('caseEcommerce.official.purposeValPre')}
                                            <span className="font-semibold text-[#E65C1E]">{t('caseEcommerce.official.purposeValHighlight1')}</span>
                                            {t('caseEcommerce.official.purposeValMid')}
                                            <span className="font-semibold text-[#E65C1E]">{t('caseEcommerce.official.purposeValHighlight2')}</span>
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="flex items-center gap-2 w-28 shrink-0">
                                            <Megaphone className="h-4 w-4 text-primary shrink-0" />
                                            <span className="text-sm font-semibold text-foreground">{t('caseEcommerce.official.promoLabel')}</span>
                                        </div>
                                        <span className="text-muted-foreground text-sm leading-relaxed border-l border-border pl-3">
                                            {t('caseEcommerce.official.promoVal')}
                                        </span>
                                    </div>
                                </div>

                                {/* 成效摘要 */}
                                <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                                    <div className="flex items-center gap-2 mb-4">
                                        <TrendingUp className="h-5 w-5 text-primary" />
                                        <h4 className="font-bold text-base">{t('caseEcommerce.official.resultsTitle')}</h4>
                                    </div>
                                    <ul className="space-y-2.5 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="text-foreground mt-1.5 shrink-0 text-[8px]">●</span>
                                            <span>
                                                {t('caseEcommerce.official.resultsItem1')}
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-foreground mt-1.5 shrink-0 text-[8px]">●</span>
                                            <span>
                                                {t('caseEcommerce.official.resultsItem2Pre')}
                                                <span className="font-bold text-primary">{t('caseEcommerce.official.resultsItem2Highlight')}</span>
                                                {t('caseEcommerce.official.resultsItem2Post')}
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-foreground mt-1.5 shrink-0 text-[8px]">●</span>
                                            <span>
                                                {t('caseEcommerce.official.resultsItem3Pre')}
                                                <span className="font-bold text-primary">{t('caseEcommerce.official.resultsItem3Highlight')}</span>
                                                {t('caseEcommerce.official.resultsItem3Post')}
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-foreground mt-1.5 shrink-0 text-[8px]">●</span>
                                            <span>
                                                <span className="font-bold text-primary">{t('caseEcommerce.official.resultsItem4Highlight')}</span>
                                                {t('caseEcommerce.official.resultsItem4Post')}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </main>
        </div>
    );
}
