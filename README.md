# 東京七日 · 2026/11/16–11/22

手機版行程網站：每日行程、候選投票、美食推薦（按讚／留言）、住宿、交通、預算。

純 HTML／CSS／JS，不用 build。內容全部在 `js/data.js`。

## 本機預覽

```sh
python -m http.server 8765
# 打開 http://127.0.0.1:8765
```

沒設定 Firebase 時是「示範模式」，投票和留言只存在這台裝置。

## 設定 Firebase（Google 登入＋暱稱＋投票資料庫）

1. 到 https://console.firebase.google.com 建立專案（Google Analytics 可關掉）。
2. **Authentication** → 開始使用 → 登入方式：
   - 啟用 **Google**
   - 啟用 **匿名**（暱稱登入用）
3. **Authentication → 設定 → 已授權網域**：加入 `<你的帳號>.github.io`。
4. **Firestore Database** → 建立資料庫 → 位置選 `asia-northeast1`（東京）→ 正式版模式。
5. Firestore → **規則**：把 `firestore.rules` 的內容整份貼上 → 發布。
6. **專案設定**（齒輪）→ 一般 → 你的應用程式 → 新增「網頁」應用程式 → 複製 `firebaseConfig`，貼到 `js/firebase-config.js`。
7. Commit、push，等 1 分鐘 GitHub Pages 更新。

`firebaseConfig` 本來就會公開在網頁上，安全性由 Firestore 規則控管：大家都能讀，只能寫／刪自己的票、讚、留言。

## 修改內容

| 想改 | 改 `js/data.js` 的 |
|---|---|
| 每日行程、時間 | `DAYS` |
| 加餐廳 | `FOOD`（`area` 對到 `AREAS`、`type` 對到 `TYPES`） |
| 投票題目／選項 | `POLLS`（選項 `id` 改了，舊的票會對不上） |
| 住宿 | `STAYS` |
| 預算 | `BUDGET` |

投票結果確定後：把 `DAYS` 裡那一天的 `{ type: 'poll' }` 換成實際行程即可。

## 分享到 LINE

LINE 內建瀏覽器不能用 Google 登入。網址後面加 `?openExternalBrowser=1` 會強制用外部瀏覽器開：

```
https://<帳號>.github.io/<repo>/?openExternalBrowser=1
```
