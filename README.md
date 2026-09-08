# iagusa — Portfólio

Portfólio profissional em português e inglês, com Odyssey e Iagusa Center. Site estático independente, localizado na pasta `portfolio` do site original.

## Desenvolvimento

- `npm ci`
- `npm run dev` — abre servidor em http://127.0.0.1:3017
- `npm run typecheck` — verifica o JavaScript e os scripts
- `npm run build` — gera `dist/`

Vercel: framework Other, comando `npm run build`, saída `dist`.

## Estrutura

`index.html` (PT-BR) e `en/index.html` (EN) contêm os textos e casos de projeto; `style.css`, a identidade editorial e os layouts responsivos; `app.js`, filtros acessíveis. Detalhes dos projetos usam elementos HTML nativos. Fontes do Google Fonts têm alternativas locais. O site não precisa de banco, variáveis de ambiente ou serviços de IA.

## Validação antes de publicar

Rodar typecheck e build; revisar renderização desktop e mobile, filtros, detalhes expansíveis, navegação por âncoras e links externos.
