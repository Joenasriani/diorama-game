[English](../../README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [繁體中文](README.zh-TW.md)

# DIORAMA – 中文简介

**DIORAMA** 是一款可在浏览器中游玩的 3D 机械解谜游戏。玩家引导机器人穿过微型立体结构，通过桥梁、升降平台、开关、门和其他机关寻找正确路线。

## 立即游玩
- [itch.io 游戏页面](https://joenasr.itch.io/diorama)
- [浏览器版本](https://diorama-game.vercel.app)

## 项目与开发
GitHub 仓库中的版本包含 **25 个关卡**，关卡数据和 Three.js 运行时代码都位于 `index.html` 中，无须构建步骤。itch.io 页面宣传的关卡数量不同；不要将两个版本视为完全一致。

可以提出新关卡设计、报告错误、改善移动端操作或提出机制建议。请参阅 [贡献指南](../../CONTRIBUTING.md) 和 [关卡设计说明](../LEVEL_AUTHORING.md)。目前没有独立关卡包导入功能；结构检查并不证明关卡一定可解。

## 本地运行
```sh
python3 -m http.server 8080
```
然后访问 `http://localhost:8080/`。

## 许可
原创代码和文档在权利人有权授权的范围内使用 [MIT 许可证](../../LICENSE)。Three.js、字体和音乐分别受各自许可约束，完整游戏包的重新分发仍需确认部分素材权限。详见 [第三方许可说明](../../THIRD_PARTY_LICENSES.md)。

完整技术细节以 [英文 README](../../README.md) 为准。本页是本地化概览，而非全部技术文档的逐段翻译。
