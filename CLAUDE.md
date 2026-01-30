# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 專案概覽

這是一個使用 Lovable.dev 建立的行銷作品集網站，展示 Alisa 的專業經歷、案例與成就。

**技術堆疊**: React 18 + TypeScript + Vite + shadcn/ui + Tailwind CSS + Framer Motion

## 常用指令

```bash
# 開發
npm run dev          # 啟動開發伺服器（port 8080，host ::）

# 建置
npm run build        # 生產環境建置
npm run build:dev    # 開發模式建置
npm run preview      # 預覽建置結果

# 測試
npm run test         # 執行測試
npm run test:watch   # 監聽模式執行測試

# 程式碼檢查
npm run lint         # ESLint 檢查
```

## 架構與程式碼結構

### 進入點流程

```
index.html → main.tsx → App.tsx (路由) → Pages
```

### 路由配置（App.tsx）

| 路由 | 頁面 | 檔案 |
|------|------|------|
| `/` | 首頁 | `pages/Index.tsx` |
| `/case/word-of-mouth` | 案例詳情頁 | `pages/CaseWordOfMouth.tsx` |
| `*` | 404 | `pages/NotFound.tsx` |

**重要**: 新增路由時，請將自訂路由加在 `App.tsx` 的 catch-all `*` 路由**上方**。

### 目錄結構

```
src/
├── components/
│   ├── layout/      # Header, Footer
│   ├── sections/    # 首頁各區塊（Hero, About, Media, Marketing, Ecommerce, Achievements）
│   ├── ui/          # shadcn/ui 元件（43+）
│   └── NavLink.tsx  # React Router NavLink 包裝元件
├── pages/           # 路由頁面
├── hooks/           # 自訂 Hooks（use-mobile, use-toast）
├── lib/             # 工具函式（cn 樣式合併函數）
├── assets/          # 靜態資源
└── test/            # 測試檔案（vitest + testing-library）
```

### 首頁架構（Index.tsx）

首頁由以下 Section 元件組成，使用錨點導航：

1. **HeroSection** - 個人簡介、學經歷、技能亮點
2. **AboutSection** - 技能進度條、自我介紹、職涯規劃
3. **MediaSection** - 自媒體專案展示
4. **MarketingSection** - 行銷案例展示
5. **EcommerceSection** - 電商企劃
6. **AchievementsSection** - 專業成就

### 案例頁面架構

案例頁（如 `CaseWordOfMouth`）特色：
- 圖片預覽 Modal（使用 AnimatePresence）
- 外部連結整合
- 數據視覺化展示（CTR, ROAS 等）
- Framer Motion 進場動畫

## 開發規範

### shadcn/ui 元件使用

```typescript
// 從別名匯入 UI 元件
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// 使用 cn 函數處理樣式合併
import { cn } from "@/lib/utils";

className={cn("base-class", condition && "conditional-class")}
```

### 動畫系統（Framer Motion）

所有進場動畫統一使用：
```typescript
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const ref = useRef(null);
const isInView = useInView(ref, { once: true, amount: 0.3 });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.5 }}
/>
```

階梯式延遲動畫：`delay: 0.2 + index * 0.1`

### 樣式系統

- 顏色使用 CSS 變數（HSL 格式）：`text-primary`, `bg-background`
- 支援暗色模式：`dark:bg-background`
- 自訂 utility classes：`.glass-card`, `.section-title`, `.nav-link`
- 響應式斷點：sm, md, lg, xl, 2xl

### 路由導航

- 首頁使用錨點導航（`scrollIntoView`）
- 案例頁使用獨立路由
- 導航連結使用 `NavLink` 元件

## TypeScript 設定

專案使用較寬鬆的 TypeScript 設定：
- `noImplicitAny: false`
- `strictNullChecks: false`
- `noUnusedLocals: false`

路徑別名：`@/*` → `./src/*`

## 測試

- 測試框架：Vitest + jsdom
- 測試檔案位置：`src/**/*.{test,spec}.{ts,tsx}`
- Setup 檔案：`src/test/setup.ts`

## Vite 設定

- 開發伺服器：host `::`，port `8080`
- 路徑別名：`@` → `./src`
- 開發模式啟用 `lovable-tagger` 元件標記

## 狀態管理

- 本地狀態：React `useState`
- 資料獲取：`@tanstack/react-query`（目前尚未實際使用）
- Toast 通知：shadcn/ui `useToast` hook
- RWD 斷點偵測：`useMobile` hook
