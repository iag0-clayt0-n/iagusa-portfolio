# Portfólio — Iago Clayton

Site estático em HTML e CSS, gerado com Node.js. Não exige JavaScript no navegador.
Produção: https://iagusa-portfolio.vercel.app/ — inglês: `/en/`.

## Desenvolvimento

```sh
npm ci
npm run typecheck
npm run build
npm run dev
```

Preview em http://127.0.0.1:3017. Após editar, rode `npm run build` e atualize a página.
`scripts/content.mjs` centraliza perfil e projetos em PT/EN; `scripts/page.mjs` gera
as páginas. `scripts/build.mjs` cria `dist/`, robots e sitemap. Sem framework novo.

## Diretriz editorial

Apresentar desenvolvimento web em formação, graduação em Sistemas de Informação e
trabalho web/mobile. Não incluir faculdade, cidade, infância, idade de início,
experiência desde 2022, métricas, clientes ou resultados não confirmados.
Manter descrições concretas, código privado e estados de desenvolvimento explícitos.
Contatos vazios e currículo não fornecido não geram links ou placeholders públicos.

## Evidências usadas na seleção (01/10/2026)

- Resolvemos: `resolvemos.shop/src/app/page.tsx`, `src/app/api/leads/route.ts`,
  `package.json`; captura da página pública. Demonstrações não são clientes.
- GeraPost: `gerapost/app/page.tsx`, `app/api/generate/route.ts`, rotas de biblioteca
  e autenticação, `package.json`; captura da página pública.
- Odyssey: `odyssey-v2/pubspec.yaml`, estrutura de features e teste de formulário
  de humor; capturas já presentes neste portfólio. Projeto em desenvolvimento.
- Iagusa Center: portfólio anterior, site público e `package.json` do repositório
  `phmello98-create-iagocenter`.
- OtakuBase: site público e README de `animesbase`.
- Texturas: README de `texturas`, que identifica explicitamente o projeto como
  não concluído. Não apresentar o escopo proposto como funcionalidade entregue.

Os três destaques mostram habilidades complementares; a seleção não pressupõe
uma auditoria integral das aplicações externas. Não foram testados pagamentos,
gerações pagas nem submissões em produção.

## Pendências de conteúdo

- E-mail profissional e currículo PDF aprovados pelo usuário.
- WhatsApp somente se o usuário desejar publicá-lo.
- Impulso: falta identificar repositório, endereço e funcionalidades reais.
- Nome mantido como no site anterior: Iago Clayton.

## Publicação

Usar o projeto existente `iagusa-portfolio`, equipe `phmello98-creates-projects`.
Build: `npm run build`; saída: `dist`. Conferir PT/EN, links, imagens, teclado,
mobile 360px, Lighthouse e árvore Git antes de publicar. Credenciais e `.vercel/`
nunca devem ser versionadas. Ver `VERIFICATION.md` para resultados da entrega.
