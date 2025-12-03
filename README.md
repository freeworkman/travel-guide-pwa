# 🌍 全球旅遊嚮導 - AI 行程規劃應用

![版本](https://img.shields.io/badge/版本-2.1.0-blue)
![授權](https://img.shields.io/badge/授權-MIT-green)
![平台](https://img.shields.io/badge/平台-PWA%20%7C%20iOS%20%7C%20Android-brightgreen)
![更新日期](https://img.shields.io/badge/更新-2025年12月-orange)

一個功能完整的 **AI 驅動旅遊行程規劃應用**，支援 PWA、iOS 和 Android。

## ✨ 核心功能

### 🤖 AI 行程規劃
- 使用 Google Gemini API 自動產生旅遊行程
- 支援多天行程規劃
- 智慧景點推薦

### 🗺️ 互動地圖
- 高精度 Leaflet 地圖整合
- 即時景點標記和路線規劃
- 一鍵導航功能
- 搜尋地點後直接加入行程

### 📊 智慧工具
- ✅ 即時天氣查詢
- ✅ 匯率動態轉換
- ✅ 行程編輯和保存
- ✅ 雲端備份（Firebase）
- ✅ 行程景點上下移動和刪除
- ✅ 地圖景點直接加入行程

### 📱 跨平台支援
- ✅ **iOS PWA** - Safari 打開即可安裝
- ✅ **Android PWA** - Chrome/Edge 一鍵安裝
- ✅ **離線模式** - Service Worker 快取
- ✅ **自動更新** - 背景同步

### 💾 資料管理
- 本地儲存行程
- Firebase 雲端備份
- 行程分享和匯入
- LINE 直接分享

---

## 🚀 快速開始

### 線上使用（推薦）

#### iOS 用戶
1. 用 **Safari** 打開：
   ```
   https://heartfelt-crumble-323cc4.netlify.app/Index.html
   ```
2. 點「分享」→「加入主屏幕」
3. 完成！App 已安裝 ✨

#### Android 用戶
1. 用 **Chrome/Edge** 打開：
   ```
   https://heartfelt-crumble-323cc4.netlify.app/Index.html
   ```
2. 點右上角「安裝」按鈕
3. 完成！App 已安裝 ✨

#### 電腦用戶
直接訪問：
```
https://heartfelt-crumble-323cc4.netlify.app/Index.html
```

---

## 📋 檔案結構

```
travel_plan/
├── Index.html                      # 主應用（包含所有 HTML/CSS/JS）
├── manifest.json                   # PWA 設定檔
├── sw.js                          # Service Worker（離線支援）
├── _redirects                     # Netlify 路由設定
├── README.md                      # 本說明文件
├── package.json                   # Node.js 套件設定
├── .env.example                   # 環境變數範本
└── 各種教程.md                    # 部署和使用指南
```

---

## 🔧 功能詳解

### 1️⃣ AI 行程規劃
```
設定 Google Gemini API Key → 輸入旅遊偏好 → AI 自動產生行程
```

**支援功能：**
- 多日行程自動規劃
- 景點基本資訊和描述
- 交通方式和預估費用
- 天氣和貼心提示

### 2️⃣ 地圖互動
- 點擊景點直接導航
- 查看完整路線規劃
- 放大/縮小地圖
- 自適應手機螢幕
- **搜尋地點後加入行程**
- **在地圖上點選地點後加入行程**

### 3️⃣ 行程管理
- **景點上下移動**：滑鼠移到景點卡片時出現控制按鈕
- **刪除景點**：點擊刪除按鈕立即移除
- **自動保存**：所有變更自動儲存到本地
- **直接切換日期**：在總表行程中點選地點後直接切換到該日的行程地點

### 4️⃣ 資料持久化
- **本地儲存**：LocalStorage + Service Worker
- **雲端備份**：Firebase Firestore（選用）
- **離線支援**：首次訪問快取資源
- **API Key 記憶**：首次貼入後自動保存，無需重複輸入

### 5️⃣ 分享功能
- 📤 複製行程資料碼分享給朋友
- 📱 LINE 直接分享
- 💾 Email 備份
- 🔗 Safari 即時連結

---

## 🛠️ 技術棧

| 技術 | 用途 |
|------|------|
| **HTML/CSS/JS** | 前端開發 |
| **Tailwind CSS** | UI 設計框架 |
| **Leaflet** | 互動地圖 |
| **Google Gemini API** | AI 行程規劃 |
| **Firebase** | 雲端儲存（可選） |
| **Service Worker** | 離線支援 |

---

## 📡 部署架構

```
GitHub Repository
    ↓
Netlify （自動部署）
    ↓
Live PWA
    ↓
用戶訪問 / 安裝 App
```

### 自動部署流程 ✅

**你只需要更新 GitHub，Netlify 會自動部署！**

1. **在 GitHub 修改檔案**
   - 編輯 HTML、CSS、JS 等
   - 推送更改（git push）

2. **Netlify 自動偵測**
   - 10-30 秒內自動部署
   - 無需手動操作

3. **用戶自動更新**
   - Service Worker 檢測新版本
   - 打開 App 時自動更新
   - 無需重新安裝

---

## 🔑 API 設定

### Google Gemini API（可選）

1. **取得 API Key**
   - 前往：https://aistudio.google.com/app/apikey
   - 點「Create API key」
   - 複製 Key（以 `AIza` 開頭）

2. **在應用中輸入**
   - 點「連結 AI」按鈕
   - 貼入 API Key
   - 點「確認連結」

3. **開始規劃**
   - 輸入旅遊偏好
   - 點「出發！」
   - AI 自動生成行程

### Firebase（可選）

如果想用雲端備份：

1. **建立 Firebase 項目**
   - 去 console.firebase.google.com
   - 建立新項目

2. **設定 Firestore**
   - 建立資料庫
   - 設定安全規則

3. **配置應用**
   - 複製 Firebase 配置
   - 注入應用代碼

---

## 📱 PWA 優勢

| 功能 | PWA | 網站 | 原生應用 |
|------|-----|-----|-----------|
| 安裝到主螢幕 | ✅ | ❌ | ✅ |
| 全螢幕顯示 | ✅ | ❌ | ✅ |
| 離線使用 | ✅ | ❌ | ✅ |
| 一鍵部署 | ✅ | ✅ | ❌ |
| 自動更新 | ✅ | ✅ | ❌ |
| 無需下載 | ✅ | ✅ | ❌ |

---

## 🌐 跨平台相容性

| 平台 | 瀏覽器 | 支援度 |
|------|--------|--------|
| **iOS** | Safari | ✅✅✅ 完美 |
| **Android** | Chrome | ✅✅✅ 完美 |
| **Android** | Edge | ✅✅✅ 完美 |
| **桌面** | Chrome/Edge/Firefox | ✅✅✅ 完美 |

---

## 💡 使用提示

### 🎯 保存行程
```
點「儲存」按鈕 → 行程保存到本地
```

### 📤 分享行程
```
點「分享」→「複製行程資料碼」 → 分享給朋友
朋友點「行程」→「匯入」 → 貼入代碼 → 完成
```

### 🗺️ 查看路線
```
選擇 Day → 地圖自動顯示路線
點擊景點 → 地圖自動導航到該位置
點「搜尋地點」→ 搜尋後加入行程
```

### 🌡️ 查看天氣
```
點「天氣」按鈕 → 查看全程天氣預報
```

### 💱 匯率轉換
```
點匯率 → 自動切換反向匯率
```

### 🎮 編排行程
```
滑鼠移到景點卡片 → 出現上移/下移/刪除按鈕
點擊按鈕 → 立即執行，自動保存
```

---

## 🚀 後續升級計畫

### 🟢 PWA（已完成）
- ✅ 跨平台 Web 應用
- ✅ 無需下載
- ✅ 自動更新

### 🟡 Apache Cordova（計畫中）
- 🔄 上架 App Store（需 $99/年）
- 🔄 上架 Google Play（需 $25）
- 🔄 原生性能優化

### 🔴 Flutter（計畫中）
- 🔄 最佳性能
- 🔄 官方維護支持
- 🔄 豐富 UI 組件

---

## 📝 更新日誌

### v2.1.0 (2025-12-03) ⭐ 最新版本
- ✅ 行程景點上下移動和刪除功能
- ✅ 地圖搜尋地點後加入行程
- ✅ 總表行程直接切換到該日的行程地點
- ✅ 行程與地圖的手機版 UI 優化
- ✅ API Key 首次輸入後自動記憶
- ✅ 手機版按鈕尺寸最佳化

### v2.0.0 (2025-12-02)
- ✅ 地圖搜尋功能整合
- ✅ 行程編輯功能優化
- ✅ 移動設備友善版面
- ✅ Header 和導航欄改進

### v1.0.0 (2024-12-02)
- ✅ 初始版本發佈
- ✅ PWA 部署完成
- ✅ iOS/Android 支援
- ✅ AI 行程規劃功能
- ✅ 地圖和天氣功能

---

## 🤝 貢獻指南

### 如何貢獻

1. **Fork 本專案**
2. **建立新分支**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **提交更改**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **推送分支**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **提交 Pull Request**

### 報告 Bug

發現問題？請提交 Issue：
- 描述問題
- 提供截圖/視頻
- 說明重現步驟

---

## 📚 文檔

- 📖 [PWA 部署指南](./PWA部署指南.md)
- 📖 [Netlify 網址查找教程](./Netlify網址查找教程.md)
- 📖 [Netlify 部署診斷指南](./Netlify部署診斷指南.md)
- 📖 [iOS APP 轉換指南](./iOS_APP_轉換指南.md)
- 📖 [Android PWA 安裝指南](./Android_PWA安裝指南.md)

---

## ⚖️ 許可證

本項目採用 **MIT License** - 詳見 [LICENSE](LICENSE) 檔案

---

## 🙏 致謝

感謝以下開源項目：
- [Leaflet](https://leafletjs.com/) - 互動地圖
- [Tailwind CSS](https://tailwindcss.com/) - UI 框架
- [FontAwesome](https://fontawesome.com/) - 圖標庫
- [Google Gemini API](https://ai.google.dev/) - AI 功能
- [Firebase](https://firebase.google.com/) - 雲端服務

---

## 📞 聯繫方式

- 💬 提交 Issue
- 📧 Email：your@email.com
- 🐦 Twitter：@yourhandle

---

## 🎉 分享

如果你喜歡這個項目，請給個 ⭐ Star！

```
🌍 分享給朋友：
https://heartfelt-crumble-323cc4.netlify.app/Index.html
```

---

## 📊 統計

- ⏱️ **開發時間**: ~100 小時
- 🎨 **UI 組件**: 20+
- 📍 **地點支援**: 無限
- 🌍 **支援語言**: 繁體中文
- 📱 **平台**: iOS + Android + Desktop

---

<div align="center">

**Made with ❤️ for travelers worldwide**

[⬆ 回到頂部](#-全球旅遊嚮導---ai-行程規劃應用)

</div>

