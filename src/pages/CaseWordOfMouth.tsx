import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Target, TrendingUp, Users, Share2, Newspaper, ExternalLink, X } from "lucide-react";
import { Link } from "react-router-dom";
import brandPostImage from "@/assets/case-brand-post.png";
import socialPostImage from "@/assets/case-social-post.png";

export default function CaseWordOfMouth() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<{ src: string; alt: string } | null>(null);
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
            <span className="font-medium">返回首頁</span>
          </Link>
          <span className="font-display text-lg font-semibold">
            <span className="text-primary">行銷</span>
            <span className="text-foreground">作品集</span>
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-20 pt-28">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <h1 className="text-3xl font-bold md:text-4xl">口碑行銷+社群接球 案例</h1>
            <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
              廣告目標：轉換
            </span>
          </div>
          <p className="text-lg text-muted-foreground">內容企劃與文案撰寫</p>
        </motion.div>

        {/* Case Content */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Social Buzz */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card space-y-6 p-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                <Users className="h-5 w-5 text-blue-500" />
              </div>
              <h2 className="text-xl font-semibold">FB爆怨2公社社團（廠商代操）</h2>
            </div>

            <p className="text-muted-foreground">
              以愛抽菸的鄰居沒禮貌為情境向網友抱怨吸引討論
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-secondary/50 p-4 text-center">
                <div className="text-2xl font-bold text-primary">2,316</div>
                <div className="text-sm text-muted-foreground">個讚</div>
              </div>
              <div className="rounded-lg bg-secondary/50 p-4 text-center">
                <div className="text-2xl font-bold text-primary">270</div>
                <div className="text-sm text-muted-foreground">則留言</div>
              </div>
              <div className="rounded-lg bg-secondary/50 p-4 text-center">
                <div className="text-2xl font-bold text-primary">15</div>
                <div className="text-sm text-muted-foreground">次分享</div>
              </div>
              <div className="rounded-lg bg-secondary/50 p-4 text-center">
                <div className="text-2xl font-bold text-primary">11</div>
                <div className="text-sm text-muted-foreground">間媒體自主轉發</div>
              </div>
            </div>

            {/* Social Post Image */}
            <div className="mt-4 flex justify-center">
              <div 
                className="max-w-xs cursor-zoom-in overflow-hidden rounded-lg border border-border transition-transform duration-200 hover:scale-105"
                onClick={() => setPreviewImage({ src: socialPostImage, alt: "FB爆怨公社貼文截圖" })}
              >
                <img
                  src={socialPostImage}
                  alt="FB爆怨公社貼文截圖"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Brand Strategy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card space-y-6 p-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">品牌方角度 — 接球變現</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Share2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <a
                    href="https://www.facebook.com/ustrongbio/posts/pfbid0W5CMNeuFrGc3wxkxsyc6whzNW8gD5GUn2cXR3owjpqeJn5ciYUcb8w955Cuy9gHLl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
                  >
                    品牌社群導購接球
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">
                    以報導感切角帶入TA日常情境引起共鳴，並製作專屬賣場與限時優惠商品組。
                  </p>
                </div>
              </div>
            </div>

            {/* Brand Post Image */}
            <div className="mt-4 flex justify-center">
              <div 
                className="max-w-xs cursor-zoom-in overflow-hidden rounded-lg border border-border transition-transform duration-200 hover:scale-105"
                onClick={() => setPreviewImage({ src: brandPostImage, alt: "品牌社群導購接球貼文" })}
              >
                <img
                  src={brandPostImage}
                  alt="品牌社群導購接球貼文"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <div className="glass-card p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <h2 className="text-xl font-semibold">【 成效摘要 】 4/1~4/30 區間</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-border bg-background p-5">
                <div className="mb-2 text-sm text-muted-foreground">CTR</div>
                <div className="text-3xl font-bold text-primary">3.15%</div>
              </div>
              <div className="rounded-lg border border-border bg-background p-5">
                <div className="mb-2 text-sm text-muted-foreground">連外 CTR</div>
                <div className="text-3xl font-bold text-primary">1.17%</div>
              </div>
              <div className="rounded-lg border border-border bg-background p-5">
                <div className="mb-2 text-sm text-muted-foreground">廣告 ROAS</div>
                <div className="text-3xl font-bold text-primary">1.84</div>
              </div>
              <div className="rounded-lg border border-border bg-background p-5">
                <div className="mb-2 text-sm text-muted-foreground">佔同期全通路總業績</div>
                <div className="text-3xl font-bold text-primary">31%</div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-lg bg-green-500/10 p-4">
              <Newspaper className="h-5 w-5 text-green-500" />
              <span className="font-medium text-green-600 dark:text-green-400">
                有效將聲量轉化為實際轉單
              </span>
            </div>
          </div>
        </motion.div>
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
              className="relative max-h-[90vh] max-w-2xl"
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
