# iagusa — Portfólio

Portfólio pessoal em português, com Odyssey, Iagusa Center e a trajetória em Sistemas de Informação. Site estático independente, localizado na pasta `portfolio` do site original e versionado em seu próprio repositório privado.

## Desenvolvimento

- `npm ci`
- `npm run dev` — abre servidor em http://127.0.0.1:3017
- `npm run typecheck` — verifica o JavaScript e os scripts
- `npm run build` — gera `dist/`

Vercel: framework Other, comando `npm run build`, saída `dist`.

## Conteúdo e design

`index.html` contém os textos e casos de projeto; `style.css`, a identidade editorial e os layouts responsivos; `app.js`, filtros acessíveis. Detalhes dos projetos usam elementos HTML nativos. Fontes do Google Fonts têm alternativas locais. O site não precisa de banco, variáveis de ambiente ou serviços de IA.

O conteúdo foi baseado no README, STATUS e guia visual do Iagusa Center; README, especificação e estado de 07/09/2026 do Odyssey v2; e nas informações sobre graduação fornecidas pelo autor. Não foram incluídas métricas de usuários, experiência profissional, instituição ou contatos não confirmados.

As duas capturas do app são do acervo já publicado no repositório Iagusa Center; podem representar uma versão anterior ao redesign atual. A miniatura do site é um estudo visual em HTML/CSS, identificado na legenda.

## Validação antes de publicar

Rodar typecheck e build; revisar renderização desktop e mobile, filtros, detalhes expansíveis, navegação por âncoras e links externos. Não importar `.env` nem configurações da Vercel do projeto pai.
