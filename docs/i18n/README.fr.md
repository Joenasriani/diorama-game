[English](../../README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [繁體中文](README.zh-TW.md)

# DIORAMA – Jeu gratuit de réflexion mécanique en 3D

Un jeu gratuit pour navigateur avec 25 niveaux et une cinématique finale de 60 secondes.

**DIORAMA** est un jeu de réflexion mécanique en 3D jouable dans un navigateur. Guidez un petit robot à travers des structures miniatures en utilisant ponts, ascenseurs, interrupteurs et portes pour trouver le bon chemin.

## Jouer

- [Page itch.io](https://joenasr.itch.io/diorama)
- [Version navigateur](https://diorama-game.vercel.app)
- [Jouer sur ChatGPT Sites](https://diorama-game.joenasr.chatgpt.site)

## Code et contributions
La version du dépôt GitHub comprend **25 niveaux**. Les définitions des niveaux et le moteur Three.js sont intégrés dans `index.html`, sans étape de compilation. DIORAMA comporte 25 niveaux ; la page itch.io indique également 25 niveaux depuis le 7 novembre 2026. Consultez la README principale en anglais pour la version actuelle.

Vous pouvez proposer des niveaux, signaler des bugs reproductibles et suggérer des améliorations des commandes tactiles, de l'accessibilité et des mécaniques. Consultez les [consignes de contribution](../../CONTRIBUTING.md) et le [guide de conception des niveaux](../LEVEL_AUTHORING.md). Aucun système de chargement de packs externes n'est encore disponible ; les tests structurels ne prouvent pas la résolubilité d'un niveau.

## Lancer en local

```sh
python3 -m http.server 8080
```
Ouvrez `http://localhost:8080/`.

## Licences
Le code et la documentation originaux que le titulaire est autorisé à licencier sont sous [licence MIT](../../LICENSE). Three.js, les polices et la musique conservent leurs propres conditions ; certains droits de redistribution des ressources restent à vérifier. Voir les [mentions relatives aux tiers](../../THIRD_PARTY_LICENSES.md).

Le [README anglais](../../README.md) reste la référence technique complète. Cette page est une présentation localisée, non une traduction intégrale.
