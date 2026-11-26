# Portfólio do Iago Clayton

Este é o código do meu portfólio, onde apresento alguns projetos web e mobile que desenvolvi.

O site está no ar em [iagusa-portfolio.netlify.app](https://iagusa-portfolio.netlify.app/) e também tem uma [versão em inglês](https://iagusa-portfolio.netlify.app/en/).

## Rodar localmente

Você precisa do Node.js instalado. Depois, na pasta do projeto, rode:

```sh
npm ci
npm run dev
```

O site abre em http://127.0.0.1:3017. Para gerar os arquivos de produção, use `npm run build`; eles ficam na pasta `dist/`.

## Como está organizado

- `scripts/content.mjs`: textos, links e informações dos projetos em português e inglês.
- `scripts/page.mjs`: estrutura das páginas.
- `style.css`: estilos do site.
- `assets/`: imagens e ícones usados no portfólio.

O site é gerado como HTML estático e publicado na Netlify.
