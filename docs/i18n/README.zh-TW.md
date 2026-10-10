[English](../../README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [繁體中文](README.zh-TW.md)

# DIORAMA – 繁體中文簡介

**DIORAMA** 是一款能在瀏覽器遊玩的 3D 機械解謎遊戲。引導小型機器人穿越微縮場景，操作橋樑、升降台、開關與閘門，找出通往目標的路線。

## 開始遊玩
- [itch.io 遊戲頁面](https://joenasr.itch.io/diorama)
- [瀏覽器版本](https://diorama-game.vercel.app)

## 專案與參與
GitHub 儲存庫中的版本包含 **25 個關卡**。關卡資料與 Three.js 執行程式均位於 `index.html`，不需要額外建置程序。itch.io 上公告的關卡數與此版本不同。

歡迎提出新關卡構想、回報可重現的錯誤，以及建議改進觸控操作、無障礙體驗與遊戲機制。請參閱 [貢獻指南](../../CONTRIBUTING.md) 與 [關卡設計文件](../LEVEL_AUTHORING.md)。目前沒有獨立關卡套件匯入功能；結構驗證通過不代表謎題一定能完成。

## 本機執行
```sh
python3 -m http.server 8080
```
前往 `http://localhost:8080/`。

## 授權
權利人有權授權的原創程式碼與文件採用 [MIT 授權](../../LICENSE)。Three.js、字型和音樂各有其授權條件，部分素材的再散布權利仍待確認。詳見 [第三方授權說明](../../THIRD_PARTY_LICENSES.md)。

完整技術資訊以 [英文 README](../../README.md) 為準。本頁是繁體中文概覽，並非全部技術文件的完整翻譯。