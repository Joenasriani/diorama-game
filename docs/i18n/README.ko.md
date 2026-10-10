[English](../../README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [繁體中文](README.zh-TW.md)

# DIORAMA – 한국어 안내

**DIORAMA**는 브라우저에서 즐기는 3D 기계식 퍼즐 게임입니다. 작은 로봇을 움직이며 다리, 리프트, 스위치, 게이트 등의 장치를 이용해 목표 지점으로 가는 길을 찾습니다.

## 플레이
- [itch.io](https://joenasr.itch.io/diorama)
- [웹 브라우저 버전](https://diorama-game.vercel.app)

## 프로젝트 및 기여
GitHub에 수록된 버전에는 **25개 레벨**이 있습니다. 레벨 데이터와 Three.js 런타임은 `index.html`에 포함되어 있으며 별도의 빌드 과정이 필요하지 않습니다. itch.io에서 안내하는 레벨 수와는 차이가 있습니다.

새 레벨 제안, 재현 가능한 오류 신고, 모바일 조작 및 접근성 개선에 참여할 수 있습니다. [기여 가이드](../../CONTRIBUTING.md)와 [레벨 제작 문서](../LEVEL_AUTHORING.md)를 확인하세요. 별도 레벨 팩을 불러오는 기능은 아직 없으며 구조 검사는 퍼즐의 해결 가능성을 보장하지 않습니다.

## 로컬 실행
```sh
python3 -m http.server 8080
```
`http://localhost:8080/`에 접속하세요.

## 라이선스
권리자가 허가할 수 있는 독창적인 코드와 문서는 [MIT 라이선스](../../LICENSE)를 따릅니다. Three.js, 글꼴, 음악에는 별도 조건이 적용되며 일부 자료의 재배포 권리는 추가 확인이 필요합니다. [서드파티 고지](../../THIRD_PARTY_LICENSES.md)를 참조하세요.

전체 기술 설명의 기준 문서는 [영문 README](../../README.md)입니다. 이 페이지는 현지화된 개요이며 전문 번역은 아닙니다.
