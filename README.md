# iagusa — Portfólio

Portfólio profissional em português e inglês, com Odyssey e Iagusa Center. Site estático independente, localizado na pasta `portfolio` do site original e versionado em seu próprio repositório privado.

## Desenvolvimento

- `npm ci`
- `npm run dev` — abre servidor em http://127.0.0.1:3017
- `npm run typecheck` — verifica o JavaScript e os scripts
- `npm run build` — gera `dist/`

Vercel: framework Other, comando `npm run build`, saída `dist`.

## Conteúdo e design

`index.html` (PT-BR) e `en/index.html` (EN) contêm os textos e casos de projeto; `style.css`, a identidade editorial e os layouts responsivos; `app.js`, filtros acessíveis. Detalhes dos projetos usam elementos HTML nativos. Fontes do Google Fonts têm alternativas locais. O site não precisa de banco, variáveis de ambiente ou serviços de IA.

O conteúdo foi baseado no README, STATUS e guia visual do Iagusa Center; README, especificação e estado de 07/09/2026 do Odyssey v2. Não foram incluídas métricas de usuários, experiência profissional, instituição ou contatos não confirmados.

As duas capturas do app são do acervo já publicado no repositório Iagusa Center; podem representar uma versão anterior ao redesign atual. A miniatura do site é um estudo visual em HTML/CSS, identificado na legenda.

## Critério editorial

Contexto de conversa não é conteúdo para publicação. Manter o foco em projetos, funcionalidades, decisões técnicas verificáveis e contato profissional. Incluir a formação apenas como informação objetiva: Sistemas de Informação, graduação em andamento. Não incluir informações pessoais informais ou planos indefinidos. Atualizar as duas versões completas, incluindo metadados, textos acessíveis e mensagens dos filtros.

## Validação antes de publicar

Rodar typecheck e build; revisar renderização desktop e mobile, filtros, detalhes expansíveis, navegação por âncoras e links externos. Não importar `.env` nem configurações da Vercel do projeto pai.
