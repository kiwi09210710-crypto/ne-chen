# 專案架構說明

## 🏗️ 技術棧

- **框架**: React + Vite + TypeScript
- **樣式**: Tailwind CSS
- **UI 組件**: shadcn-ui
- **動畫**: Framer Motion
- **路由**: React Router

---

## 📁 目錄結構

```
src/
├── App.tsx              # 主應用程式 + 路由設定
├── main.tsx             # 應用入口點
├── index.css            # 全域樣式
│
├── pages/               # 📄 頁面
│   ├── Index.tsx        # 首頁（Landing Page）
│   ├── AboutMe.tsx      # 關於我頁面
│   ├── CaseWordOfMouth.tsx  # 口碑行銷案例頁
│   └── NotFound.tsx     # 404 頁面
│
├── components/
│   ├── layout/          # 🎨 版面元件
│   │   ├── Header.tsx   # 網站頂部導航
│   │   └── Footer.tsx   # 網站底部
│   │
│   ├── sections/        # 📦 首頁各區塊
│   │   ├── HeroSection.tsx       # 首頁 Hero（個人介紹）
│   │   ├── AboutSection.tsx      # 關於區塊
│   │   ├── MediaSection.tsx      # 媒體區塊
│   │   ├── MarketingSection.tsx  # 行銷區塊
│   │   ├── EcommerceSection.tsx  # 電商區塊
│   │   └── AchievementsSection.tsx # 成就區塊
│   │
│   └── ui/              # 🧩 shadcn UI 元件（按鈕、卡片等）
│
├── assets/              # 🖼️ 圖片資源
├── hooks/               # 🪝 自定義 React Hooks
├── lib/                 # 📚 工具函式庫
└── test/                # 🧪 測試檔案
```

---

## 🗺️ 路由頁面

| 路徑 | 頁面檔案 | 說明 |
|------|----------|------|
| `/` | `pages/Index.tsx` | 首頁（包含 6 個 Section） |
| `/about-me` | `pages/AboutMe.tsx` | 自我介紹頁面 |
| `/case/word-of-mouth` | `pages/CaseWordOfMouth.tsx` | 口碑行銷案例 |
| `*` | `pages/NotFound.tsx` | 404 錯誤頁面 |

---

## 🏠 首頁 (Index.tsx) 區塊順序

```
┌─────────────────────────────────────┐
│           Header                    │
├─────────────────────────────────────┤
│  1. HeroSection                     │
│     - 個人介紹 + 照片 + 統計數據      │
├─────────────────────────────────────┤
│  2. AboutSection                    │
│     - 關於區塊                       │
├─────────────────────────────────────┤
│  3. MediaSection                    │
│     - 媒體區塊                       │
├─────────────────────────────────────┤
│  4. MarketingSection                │
│     - 行銷區塊                       │
├─────────────────────────────────────┤
│  5. EcommerceSection                │
│     - 電商區塊                       │
├─────────────────────────────────────┤
│  6. AchievementsSection             │
│     - 成就區塊                       │
├─────────────────────────────────────┤
│           Footer                    │
└─────────────────────────────────────┘
```

---

## 📝 內容編輯指南

### 優先編輯的檔案

| 優先度 | 檔案路徑 | 可修改的內容 |
|--------|----------|-------------|
| ⭐⭐⭐ | `src/components/sections/HeroSection.tsx` | 個人資料、學經歷、專業領域、統計數據 |
| ⭐⭐⭐ | `src/pages/AboutMe.tsx` | 詳細自我介紹、工作經歷時間軸 |
| ⭐⭐ | `src/pages/CaseWordOfMouth.tsx` | 口碑行銷案例內容 |
| ⭐⭐ | `src/components/sections/*.tsx` | 各區塊作品、成就內容 |
| ⭐ | `src/components/layout/Header.tsx` | 導航連結 |
| ⭐ | `src/components/layout/Footer.tsx` | 聯絡資訊 |

### 圖片資源

圖片放置於 `src/assets/` 目錄，目前包含：
- `profile-avatar.png` - 個人照片
- `case-brand-post.png` - 品牌貼文案例圖
- `case-social-post.png` - 社群貼文案例圖

---

## 🚀 開發指令

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置生產版本
npm run build

# 預覽生產版本
npm run preview
```

---

## 📂 新增頁面流程

1. 在 `src/pages/` 建立新的頁面元件
2. 在 `src/App.tsx` 新增路由：
   ```tsx
   <Route path="/your-path" element={<YourPage />} />
   ```
3. 在 `Header.tsx` 新增導航連結（如需要）
