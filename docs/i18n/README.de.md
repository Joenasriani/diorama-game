[English](../../README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [繁體中文](README.zh-TW.md)

# DIORAMA – Deutschsprachige Übersicht

**DIORAMA** ist ein browserbasiertes 3D-Mechanikrätsel. Steuere einen kleinen Roboter durch Miniaturwelten und nutze Brücken, Aufzüge, Schalter und Tore, um den richtigen Weg zu finden.

## Spielen
- [itch.io](https://joenasr.itch.io/diorama)
- [Browserversion](https://diorama-game.vercel.app)

## Quellcode und Beiträge
Die im GitHub-Repository enthaltene Ausgabe umfasst **25 Level**. Leveldefinitionen und Three.js-Laufzeit befinden sich gemeinsam in `index.html`; ein Build-Schritt ist nicht erforderlich. Auf itch.io wird eine andere Levelanzahl angegeben.

Willkommen sind Vorschläge für neue Level, nachvollziehbare Fehlerberichte sowie Ideen zur Verbesserung von Touch-Steuerung, Barrierefreiheit und Mechaniken. Siehe [Beitragsrichtlinien](../../CONTRIBUTING.md) und [Level-Dokumentation](../LEVEL_AUTHORING.md). Ein Import externer Levelpakete existiert noch nicht; strukturelle Tests beweisen nicht die Lösbarkeit eines Rätsels.

## Lokal starten
```sh
python3 -m http.server 8080
```
Anschließend `http://localhost:8080/` öffnen.

## Lizenzen
Eigener Code und eigene Dokumentation stehen, soweit der Rechteinhaber hierzu berechtigt ist, unter der [MIT-Lizenz](../../LICENSE). Für Three.js, Schriftarten und Musik gelten gesonderte Bedingungen; einige Weiterverbreitungsrechte sind noch zu klären. Siehe [Hinweise zu Drittmaterial](../../THIRD_PARTY_LICENSES.md).

Die vollständige technische Referenz ist die [englische README](../../README.md). Diese Seite ist eine lokalisierte Übersicht, keine vollständige Übersetzung.
