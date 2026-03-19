import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, FileText, ChevronDown, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import proposalPreview from "@/assets/proposal-threads-preview.jpg";

export default function CaseProposal() {
    const { t, lang, setLang } = useLanguage();
    const [pdfOpen, setPdfOpen] = useState(false);

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
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                        {t('caseProposal.hero.tag')}
                    </div>
                    <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                        {t('caseProposal.hero.title')}
                    </h1>
                    <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
                        {t('caseProposal.hero.desc')}
                    </p>
                </motion.div>

                {/* 提案卡片（仿 SEO 頁佈局） */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="mb-6 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-semibold">{t('caseProposal.sectionTitle')}</h2>
                    </div>

                    <div className="glass-card overflow-hidden">
                        <div className="flex flex-col lg:flex-row">

                            {/* 左：文字內容 */}
                            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                                <span className="mb-4 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                    {t('caseProposal.cases.threads.tag')}
                                </span>
                                <h3 className="mb-1 text-xl font-bold md:text-2xl">
                                    {t('caseProposal.cases.threads.title')}
                                </h3>
                                <p className="mb-4 text-sm font-medium text-primary">
                                    {t('caseProposal.cases.threads.subtitle')}
                                </p>
                                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                                    {t('caseProposal.cases.threads.desc')}
                                </p>
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {[t('caseProposal.cases.threads.tag1'), t('caseProposal.cases.threads.tag2'), t('caseProposal.cases.threads.tag3')].map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* 查看簡報按鈕 */}
                                <div>
                                    <button
                                        onClick={() => setPdfOpen((prev) => !prev)}
                                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                                    >
                                        <FileText className="h-4 w-4" />
                                        {pdfOpen ? t('caseProposal.cases.threads.btnClose') : t('caseProposal.cases.threads.btnOpen')}
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform duration-200 ${pdfOpen ? "rotate-180" : ""}`}
                                        />
                                    </button>
                                </div>
                            </div>

                            {/* 右：預覽圖（靜態） */}
                            <div className="lg:w-[45%] p-4 md:p-6 flex items-center justify-center">
                                <div className="w-full overflow-hidden rounded-xl border border-border">
                                    <img
                                        src={proposalPreview}
                                        alt={t('caseProposal.cases.threads.imgAlt')}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* PDF 展開閱覽區 */}
                        <AnimatePresence>
                            {pdfOpen && (
                                <motion.div
                                    key="pdf-viewer"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden border-t border-border"
                                >
                                    <div className="p-4 md:p-6">
                                        <iframe
                                            src="/proposal-threads.pdf"
                                            title={t('caseProposal.cases.threads.pdfTitle')}
                                            className="w-full rounded-xl border border-border"
                                            style={{ height: "800px", border: "none" }}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </main>

        </div>
    );
}
