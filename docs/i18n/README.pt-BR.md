[English](../../README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [繁體中文](README.zh-TW.md)

# DIORAMA – Guia em português (Brasil)

**DIORAMA** é um jogo de quebra-cabeças mecânicos em 3D para navegador. Guie um pequeno robô por estruturas em miniatura, usando pontes, elevadores, interruptores e portões para encontrar o caminho correto.

## Jogar
- [Página no itch.io](https://joenasr.itch.io/diorama)
- [Versão para navegador](https://diorama-game.vercel.app)

## Código e contribuições
A edição disponível no GitHub contém **25 fases**. As definições de fases e o runtime Three.js estão incorporados ao `index.html`, sem etapa de compilação. A quantidade de fases anunciada no itch.io é diferente.

Você pode propor novas fases, relatar problemas reproduzíveis e sugerir melhorias de controles móveis, acessibilidade e mecânicas. Consulte o [guia de contribuição](../../CONTRIBUTING.md) e a [documentação de fases](../LEVEL_AUTHORING.md). Ainda não existe um carregador de pacotes externos; a validação estrutural não comprova que uma fase possa ser resolvida.

## Executar localmente
```sh
python3 -m http.server 8080
```
Acesse `http://localhost:8080/`.

## Licenciamento
O código e a documentação originais, quando licenciáveis pelo titular, usam a [licença MIT](../../LICENSE). Three.js, fontes e música seguem termos próprios; alguns direitos de redistribuição dos recursos ainda precisam de verificação. Consulte os [avisos de terceiros](../../THIRD_PARTY_LICENSES.md).

O [README em inglês](../../README.md) é a referência técnica completa. Esta página é um resumo traduzido, não uma tradução integral.