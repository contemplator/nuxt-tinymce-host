# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

## Implementation 

因為使用 package manager (npm) 安裝 @tinymce/tinymce-vue 時，在 import 都會提示該套件沒有正常宣告 module，經查看，之前的 lib 資料夾都不見了，導致無法 import 並使用，所以此 repo 是講解怎麼使用 .zip 使用。

1. 下載 .zip: https://www.tiny.cloud/get-tiny/self-hosted/
2. 解壓縮後，放置到 public 資料夾底下。(我有特別整理過資料夾結構，所以並非只直接解壓縮使用，可以直接參考我的 public/ 內容)
3. 在 nuxt 專案下增加 plugins 資料夾，底下建立 tinymce.client.ts，因爲無法運行在 server 環境下，所以特別加上 .client.ts 後綴，該檔案就是引入 tinymce.js 檔案。
4. 在 .vue 中使用 window.tinymce 使用 tinymce API，app.vue 有使用到一些簡單的用法，
