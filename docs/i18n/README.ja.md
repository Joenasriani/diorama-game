[English](../../README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [繁體中文](README.zh-TW.md)

# DIORAMA – 日本語ガイド

**DIORAMA** は、ブラウザーで遊べる 3D メカニカルパズルゲームです。小さなロボットを操作し、橋、リフト、スイッチ、ゲートなどの仕掛けを使ってゴールへの道を見つけます。

## プレイする
- [itch.io](https://joenasr.itch.io/diorama)
- [ブラウザー版](https://diorama-game.vercel.app)

## ソースと参加方法
GitHub にあるゲームは **25 レベル**構成です。レベル定義と Three.js ランタイムは `index.html` に含まれ、ビルド作業は不要です。itch.io で案内されているレベル数とは異なります。

新しいレベルの提案、バグ報告、モバイル操作性やアクセシビリティの改善案を歓迎します。[貢献ガイド](../../CONTRIBUTING.md) と [レベル設計資料](../LEVEL_AUTHORING.md) を参照してください。独立したレベルパックの読み込み機能は未実装で、構造検証だけではクリア可能性は保証されません。

## ローカル起動
```sh
python3 -m http.server 8080
```
`http://localhost:8080/` を開いてください。

## ライセンス
権利者が許諾できるオリジナルのコードと文書は [MIT License](../../LICENSE) の対象です。Three.js、フォント、音楽には別の条件があり、素材の再配布権には未確認事項があります。[第三者ライセンス](../../THIRD_PARTY_LICENSES.md) を確認してください。

詳しい技術情報の正式版は [英語 README](../../README.md) です。このページはローカライズされた概要であり、全文翻訳ではありません。