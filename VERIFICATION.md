# Verificação da entrega — 01/10/2026

- `npm ci`: concluído, zero vulnerabilidades reportadas.
- `npm run typecheck` e `npm run build`: aprovados.
- `git diff --check`: aprovado.
- Lighthouse mobile, servidor local, português: Performance 100, Accessibility 100,
  Best Practices 100, SEO 100.
- Lighthouse mobile, servidor local, inglês: Performance 100, Accessibility 100,
  Best Practices 100, SEO 100.
- Navegação por teclado: primeiro Tab encontra o link de pular conteúdo, com foco
  visível. Enter navega ao conteúdo. Enter em summary abre o detalhe do projeto.
- Mobile 360px: sem overflow horizontal; imagens verificadas por decode no browser.
- Página inglesa: conteúdo, título, idioma e links de tradução presentes.
- Nova sessão de navegador: zero erros de página reportados.
- Links de âncora: todos os destinos existem.
- Sites públicos Resolvemos, GeraPost, Iagusa Center e OtakuBase abrem no navegador.
- LinkedIn: URL fornecida diretamente pelo usuário e reproduzida sem alteração.
- Compartilhamento: imagens PT/EN de 1200 × 630, títulos, descrições e canonical.
- Interface estática: detalhes e links funcionam sem JavaScript.

Os resultados Lighthouse são medições de laboratório, não dados de visitantes reais.
O servidor local não aplica compressão/cache de CDN. As capturas de websites são
reais; as do Odyssey foram preservadas do portfólio anterior, não representam uma
validação atual de todos os fluxos do aplicativo.

Pendências de conteúdo estão em README.md e não aparecem como placeholders no site.
