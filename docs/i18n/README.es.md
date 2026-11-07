[English](../../README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [繁體中文](README.zh-TW.md)

# DIORAMA – Juego gratuito de puzles mecánicos en 3D

Un juego gratuito para navegador con 25 niveles y un final cinematográfico de 60 segundos.

**DIORAMA** es un juego de puzles mecánicos en 3D que funciona en el navegador. Guía a un pequeño robot por estructuras en miniatura y utiliza puentes, elevadores, interruptores y compuertas para encontrar la ruta correcta.

## Jugar

- [Página en itch.io](https://joenasr.itch.io/diorama)
- [Versión web](https://diorama-game.vercel.app)
- [Jugar en ChatGPT Sites](https://diorama-native-game.joenasr.chatgpt.site)

## Código y contribuciones
La edición del repositorio de GitHub contiene **25 niveles**. Las definiciones de niveles y el motor Three.js están integrados en `index.html`, sin instalación ni compilación. DIORAMA tiene 25 niveles; la página de itch.io también indica 25 niveles desde el 7 de noviembre de 2026. La README principal en inglés documenta la versión actual.

Puedes proponer niveles, informar de errores reproducibles y sugerir mejoras de controles móviles, accesibilidad y mecánicas. Consulta [CONTRIBUTING.md](../../CONTRIBUTING.md) y la [guía de niveles](../LEVEL_AUTHORING.md). Todavía no existe un sistema para importar paquetes de niveles; la validación estructural no demuestra que un puzle tenga solución.

## Ejecutar localmente

```sh
python3 -m http.server 8080
```
Abre `http://localhost:8080/`.

## Licencias
El código y la documentación originales que el titular puede licenciar se distribuyen bajo [MIT](../../LICENSE). Three.js, las fuentes y la música mantienen sus licencias propias; ciertos derechos de redistribución siguen pendientes de verificación. Consulta los [avisos de terceros](../../THIRD_PARTY_LICENSES.md).

El [README en inglés](../../README.md) contiene la referencia técnica completa. Esta página es una introducción localizada, no una traducción integral.
