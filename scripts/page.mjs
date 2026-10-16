import { profile, projects, additional } from "./content.mjs";

/** @param {string} text */
const escape = (text) =>
  text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
/** @param {'pt' | 'en'} language */
export function page(language) {
  const en = language === "en";
  /** @param {string} pt @param {string} english */
  const t = (pt, english) => (en ? english : pt);
  const origin = "https://iagusa-portfolio.vercel.app";
  const url = origin + (en ? "/en/" : "/");
  const title = `${profile.name} — ${t("Desenvolvedor Web em formação", "Web developer in training")}`;
  const description = t(
    "Sou estudante de Sistemas de Informação e desenvolvo projetos web e mobile, como Resolvemos, GeraPost e Odyssey. Estou buscando estágio ou uma vaga júnior.",
    "I study Information Systems and build web and mobile projects, including Resolvemos, GeraPost and Odyssey. I’m looking for an internship or junior role.",
  );
  const contacts = [
    ...(profile.email
      ? [{ name: "E-mail", href: `mailto:${profile.email}` }]
      : []),
    ...(profile.linkedin ? [{ name: "LinkedIn", href: profile.linkedin }] : []),
    ...(profile.whatsapp ? [{ name: "WhatsApp", href: profile.whatsapp }] : []),
    { name: "GitHub", href: profile.github },
  ];
  const contactLinks = contacts
    .map(
      (c) =>
        `<a href="${escape(c.href)}">${c.name} <span aria-hidden="true">↗</span></a>`,
    )
    .join("");
  const resume = profile.resume
    ? `<a class="text-link" href="${escape(profile.resume)}" download>${t("Baixar currículo (PDF)", "Download résumé (PDF)")} <span aria-hidden="true">↓</span></a>`
    : "";
  const primaryContact = profile.email
    ? `mailto:${profile.email}`
    : profile.linkedin || profile.github;
  const primaryLabel = profile.email
    ? t("Enviar e-mail", "Send an email")
    : profile.linkedin
      ? t("Conversar no LinkedIn", "Connect on LinkedIn")
      : t("Abrir perfil no GitHub", "View GitHub profile");
  return `<!doctype html>
<html lang="${en ? "en" : "pt-BR"}">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title><meta name="description" content="${description}">
  <meta name="theme-color" content="#f2ede3"><link rel="canonical" href="${url}">
  <link rel="alternate" hreflang="pt-BR" href="${origin}/"><link rel="alternate" hreflang="en" href="${origin}/en/"><link rel="alternate" hreflang="x-default" href="${origin}/">
  <meta property="og:type" content="website"><meta property="og:locale" content="${en ? "en_US" : "pt_BR"}">
  <meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="${url}">
  <meta property="og:image" content="${origin}/assets/social-${language}.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${title}"><meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/assets/icon.svg" type="image/svg+xml"><link rel="stylesheet" href="/style.css">
</head>
<body>
<a class="skip" href="#conteudo">${t("Pular para o conteúdo", "Skip to content")}</a>
<header class="wrap masthead">
  <a class="brand" href="${en ? "/en/" : "/"}">${profile.name}<span class="brand-mark" aria-hidden="true">&lt;/&gt;</span></a>
  <nav aria-label="${t("Navegação principal", "Main navigation")}"><a href="#projetos">${t("Projetos", "Projects")}</a><a href="#sobre">${t("Sobre", "About")}</a><a href="#contato">${t("Contato", "Contact")}</a></nav>
  <div class="language-switch" aria-label="${t("Idioma", "Language")}"><a href="/" lang="pt-BR" hreflang="pt-BR" ${!en ? 'aria-current="page"' : ""}>PT</a><a href="/en/" lang="en" hreflang="en" ${en ? 'aria-current="page"' : ""}>EN</a></div>
</header>
<main id="conteudo">
  <section class="wrap hero" aria-labelledby="intro-title">
    <div class="hero-copy"><p class="eyebrow"><span class="dot" aria-hidden="true"></span>${t("DISPONÍVEL PARA ESTÁGIO E OPORTUNIDADES JÚNIOR", "OPEN TO INTERNSHIPS & JUNIOR ROLES")}</p>
      <h1 id="intro-title">${t("Desenvolvedor web<br><em>em formação.</em>", "Web developer<br><em>in training.</em>")}</h1>
      <p class="intro">${t("Sou Iago Clayton, estudante de Sistemas de Informação. Desenvolvo sites e aplicações mobile, da interface à integração com dados e serviços.", "I’m Iago Clayton, an Information Systems student. I build websites and mobile applications, from interfaces to data and service integrations.")}</p>
      <div class="hero-actions"><a class="button" href="#projetos">${t("Ver projetos", "View projects")} <span aria-hidden="true">↓</span></a><a class="text-link" href="#contato">${t("Entrar em contato", "Get in touch")} <span aria-hidden="true">↗</span></a>${resume}</div>
      <div class="social-links" aria-label="${t("Perfis e contato", "Profiles and contact")}">${contactLinks}</div>
    </div>
    <aside class="project-index" aria-label="${t("Projetos em destaque", "Featured projects")}">
      <p class="eyebrow">${t("PROJETOS EM DESTAQUE", "FEATURED PROJECTS")}</p>
      ${projects.map((p, i) => `<a href="#${p.id}"><span class="index-number">0${i + 1}</span><span><strong>${p.name}</strong><small>${p[language].category}</small></span><span aria-hidden="true">↗</span></a>`).join("")}
      <p class="index-note">${t("Sites, integrações e um app mobile em desenvolvimento.", "Websites, integrations and a mobile app in development.")}</p>
    </aside>
  </section>
  <section class="wrap projects" id="projetos" aria-labelledby="projects-title">
    <div class="section-top"><div><p class="eyebrow">01 / ${t("PROJETOS", "PROJECTS")}</p><h2 id="projects-title">${t("Alguns projetos", "A few projects")}<span class="period">.</span></h2></div><p>${t("O que cada projeto faz e como foi desenvolvido.", "What each project does and how I built it.")}</p></div>
    ${projects
      .map((p, i) => {
        const copy = p[language];
        return `<article class="project" id="${p.id}" aria-labelledby="title-${p.id}">
      <div class="project-visual ${p.id === "odyssey" ? "odyssey-visual" : "capture-visual"}">
      ${p.image ? `<div class="capture-bar"><span aria-hidden="true">● ● ●</span><span>${new URL(p.url).hostname}</span></div><img class="site-capture" src="/assets/${p.image}" alt="${copy.alt}" width="1280" height="900" loading="lazy" decoding="async"><span class="image-caption">${t("CAPTURA REAL DO SITE", "ACTUAL WEBSITE SCREENSHOT")}</span>` : `<div class="visual-heading">ODYSSEY <span>${t("Humor, hábitos<br>e produtividade.", "Mood, habits<br>and productivity.")}</span></div><div class="phones"><img class="phone phone-back" src="/assets/odyssey-focus.webp" alt="${t("Temporizador de foco do Odyssey", "Odyssey focus timer")}" width="450" height="1000" loading="lazy" decoding="async"><img class="phone phone-front" src="/assets/odyssey-home.webp" alt="${t("Tela inicial do Odyssey com ferramentas de rotina", "Odyssey home screen with daily routine tools")}" width="450" height="1000" loading="lazy" decoding="async"></div><span class="image-caption">${t("CAPTURAS DO APP EM DESENVOLVIMENTO", "SCREENSHOTS OF THE APP IN DEVELOPMENT")}</span>`}
      </div>
      <div class="project-copy"><div class="project-meta"><span>0${i + 1} / ${copy.category}</span><span class="status">${copy.status}</span></div><h3 id="title-${p.id}">${p.name}</h3><p class="project-subtitle">${copy.title}</p><p>${copy.description}</p><p class="contribution"><strong>${t("O que desenvolvi", "What I built")}</strong>${copy.contribution}</p><ul class="tags" aria-label="${t("Tecnologias", "Technologies")}">${p.technologies.map((x) => `<li>${x}</li>`).join("")}</ul><details><summary>${t("Decisões de implementação", "Implementation details")} <span aria-hidden="true">+</span></summary><div class="detail-body"><p>${copy.detail}</p></div></details><a class="project-link" href="${p.url}" target="_blank" rel="noopener noreferrer">${copy.link}<span class="sr-only"> ${t("(abre em nova aba)", "(opens in a new tab)")}</span><span aria-hidden="true">↗</span></a></div>
      </article>`;
      })
      .join("")}
    <div class="more-heading"><h3>${t("Outros projetos", "More projects")}</h3><p>${t("Mais alguns projetos em que trabalhei.", "A few more projects I’ve worked on.")}</p></div>
    <div class="more-projects">${additional.map((p) => `<article><h4>${p.name}</h4><p>${p[language]}</p><p class="more-tech">${p.tech}</p>${p.url ? `<a class="text-link" href="${p.url}">${t("Visitar", "Visit")} ${p.name} <span aria-hidden="true">↗</span></a>` : `<span class="development-note">${t("Em desenvolvimento · código privado", "In development · private source")}</span>`}</article>`).join("")}</div>
  </section>
  <section class="about" id="sobre" aria-labelledby="about-title"><div class="wrap about-grid"><div><p class="eyebrow">02 / ${t("SOBRE MIM", "ABOUT ME")}</p><h2 id="about-title">${t("Desenvolvimento<br><em>web e mobile.</em>", "Web and mobile<br><em>development.</em>")}</h2></div><div class="about-copy"><p class="large-copy">${t("Estudo Sistemas de Informação e gosto de tirar ideias do papel criando sites e aplicativos.", "I study Information Systems and enjoy turning ideas into websites and apps.")}</p><p>${t("Nos meus projetos, trabalho com interfaces, formulários, APIs e dados. Uso React e TypeScript na web e Flutter e Dart no mobile.", "My projects involve interfaces, forms, APIs and data. I use React and TypeScript for the web, and Flutter and Dart for mobile.")}</p><p>${t("Estou buscando estágio ou uma vaga júnior para trabalhar em equipe e continuar aprendendo no dia a dia.", "I’m looking for an internship or junior role where I can work with a team and keep learning on the job.")}</p></div></div></section>
  <section class="wrap contact" id="contato" aria-labelledby="contact-title"><p class="eyebrow">03 / ${t("CONTATO", "CONTACT")}</p><h2 id="contact-title">${t("Vamos conversar<br><em>sobre a oportunidade?</em>", "Let’s talk<br><em>about the opportunity.</em>")}</h2><div class="contact-bottom"><p>${t("Disponível para estágio e oportunidades júnior<br>em desenvolvimento web e mobile.", "Open to internships and junior roles<br>in web and mobile development.")}</p><div class="contact-actions"><a class="button" href="${escape(primaryContact)}">${primaryLabel} <span aria-hidden="true">↗</span></a>${resume}</div></div><div class="social-links">${contactLinks}</div></section>
</main>
<footer class="wrap"><a class="brand" href="#">${profile.name}<span class="brand-mark" aria-hidden="true">&lt;/&gt;</span></a><p>${t("PORTFÓLIO / DESENVOLVIMENTO WEB E MOBILE", "PORTFOLIO / WEB & MOBILE DEVELOPMENT")}</p><a href="#">${t("Voltar ao topo", "Back to top")} ↑</a></footer>
</body></html>`;
}
