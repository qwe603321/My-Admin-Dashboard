# 該專案說明：

## 檔案內容：

這是一個響應式管理後台儀表板（admin dashboard），呈現的是與金融財務有關的消費儀表板。  
使用的技術：HTML、CSS、JS。  
主要功能：進行版面排版與設計。

## 學習來源：

這段程式碼是透過學習 EGATOR 的 YouTube 頻道來完成的。  
來源網址：[EGATOR YouTube](https://www.youtube.com/channel/UC1vvZDCMZ-C1h6uDeZbJJ8Q)

## 學習時間與建議：

我的學習時間約為兩個月。  
若有興趣，可以前往 EGATOR 頻道，查看是否有其他適合自己學習的程式碼。

---

# HTML 程式碼技巧與重點簡述

## 1. 結構設計

- 使用 HTML5 標準語法，確保文檔結構正確。`<!DOCTYPE html>` 和 `<html lang="en">` 提供了對應的文檔類型和語言設置，符合現代標準。
- `<head>` 中包含字符集（UTF-8）、視口（viewport）設置，這對於響應式設計和不同設備上的兼容性非常重要。
- `<title>` 標籤設置頁面標題，提升 SEO 和可訪問性。

## 2. 字型與圖標的引入

- 使用 Google Fonts 和 CDN 引入外部字型（如 Poppins）和圖標（如 Material Icons）。這不僅提升了頁面的視覺效果，還能提高加載速度，減少本地存儲需求。
- 使用 CDN（內容分發網絡）加載字型和圖標，進一步提升加載速度，並確保跨域訪問的兼容性。

## 3. 導航欄設計

- `<nav>` 元素用於包裹網站的導航區域，清晰劃分導航區，便於用戶操作。
- 用戶資料區域顯示頭像、名稱和菜單按鈕，支持模式切換功能，增強用戶體驗。
- 主菜單按鈕提供用戶快速導航，並支持手持設備上的交互。

## 4. 側邊欄設計

- 使用 `<aside>` 元素定義側邊欄，包含導航鏈接和更新通知區域，支持快速跳轉到不同功能區域。
- 當有可用更新時，會動態顯示通知區域，提升用戶的互動性。

## 5. 主要內容區

- 包括概覽部分，顯示各種報告和卡片元素，並且支持用戶交互，例如收入、支出、現金返還等數據。
- 利用 `<canvas id="chart">` 展示圖形化報告，進行數據可視化。

## 6. 響應式設計

- 設計支持不同屏幕尺寸的設備，導航欄和側邊欄支持手持設備觸控操作。
- 這一功能依賴於適當的 CSS 設置以及 JavaScript 來增強界面的可用性。

---

# CSS 程式碼技巧與重點簡述

## 1. CSS 變數（Custom Properties）

- 利用 `:root` 設置全局 CSS 變數，使得顏色、間距和其他樣式可以集中管理，便於後期維護。
- 範例：`--color-primary: rgb(71, 7, 234);`，使得後續所有涉及此顏色的部分保持一致。

## 2. 響應式設計

- 使用 `vw`（視口寬度）來設置元素的寬度，確保頁面在不同設備上自適應。
- 範例：`nav .search-bar { width: 32vw; }`，讓搜尋框寬度隨視口大小變化，適應各種設備。

## 3. Flexbox 與 Grid 布局

- 使用 `flexbox` 和 `grid` 布局來設計頁面結構，使得元素排列更加靈活且響應式。
- 範例：`main { display: grid; grid-template-columns: 16rem auto 30rem; }`，讓主內容區分為三個欄位，實現靈活排版。

## 4. 動態效果與過渡

- 使用 `transition` 屬性為元素添加平滑過渡效果，增強用戶體驗。
- 範例：`main aside .sidebar a:hover { background-color: var(--color-primary-light); }`，當懸停側邊欄連結時背景色改變，並平滑過渡。

## 5. 陰影和光影效果

- 使用陰影（`box-shadow`）來為元素創建層次感或浮動效果，增加頁面的深度感。
- 範例：`main section.middle .cards .card { box-shadow: 0 2rem 3rem var(--color-danger-light); }`，卡片元素帶有陰影，增強交互感。

## 6. 偽元素與狀態

- 使用 `::before` 等偽元素來添加額外裝飾或動態效果，提升頁面視覺效果。
- 範例：`main aside .sidebar a.active:before { content: ""; width: 6px; background: var(--color-primary); }`，當側邊欄連結處於活動狀態時，顯示裝飾條。

## 7. 小範圍元素樣式

- 微調元素的顏色或大小，增強視覺層次和交互感。
- 範例：`.primary { color: var(--color-primary); }`，為不同狀態的元素設置顏色，區分不同功能。

## 8. 卡片和按鈕樣式

- 設計現代化的卡片式元素，使用圓角和漸層背景，使頁面更加動態和吸引人。
- 範例：`main section.middle .cards .card { background: linear-gradient(#ff796f, #bd261b); border-radius: var(--card-border-radius); }`，卡片設計帶有漸層背景和圓角。

## 9. 主題切換功能

- 設定深色和淺色主題的變數，實現主題切換功能，提供更好的用戶體驗。
- 範例：`.dark-theme { --color-light: #000000; }`，深色主題的背景顏色設置，便於用戶切換。

---

# JavaScript 程式碼技巧與重點簡述

## 1. Chart.js 圖表創建

- 使用 Chart.js 創建動態圖表，將數據轉化為視覺化展示。
- 範例：`new Chart(chart, { type: "line", data: {...}})`，創建線型圖表，顯示比特幣和以太坊的月度價格。

## 2. 顯示/隱藏側邊欄

- 使用 `addEventListener` 監聽菜單按鈕和關閉按鈕，實現側邊欄的顯示和隱藏。
- 範例：`menuBtn.addEventListener("click", () => { sidebar.style.display = "block"; })`，點擊菜單按鈕顯示側邊欄。

## 3. 主題切換功能

- 切換頁面主題，根據用戶需求實現光明模式和暗黑模式之間的切換。
- 範例：`document.body.classList.toggle("dark-theme");`，切換主題樣式。

## 4. 錯誤與重複的代碼

- 發現程式中的重複代碼（如 `themeBtn` 的多次定義），應該統一命名，保證代碼簡潔。
- 建議將 `themebtn` 改為 `themeBtn`，保持一致性。

---

## 總結

這段代碼綜合運用了 HTML5 結構設計、CSS 響應式布局與動態效果、以及 JavaScript 用戶交互功能，創建了一個現代化且交互豐富的網頁應用。它展示了如何通過良好的結構設計、動態樣式和互動功能來提升用戶體驗。
