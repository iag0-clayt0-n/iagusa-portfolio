import { profile, facts, projects, additional, experience, education, skillGroups } from "./content.mjs";

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
  const origin = process.env.SITE_URL || "https://iagusa-portfolio.netlify.app";
  const url = origin + (en ? "/en/" : "/");
  const title = `${profile.name} — ${t("Desenvolvedor web e mobile", "Web and mobile developer")}`;
  const description = t(
    "Portfólio de Iago Clayton, estudante de Sistemas de Informação na UFRPE e desenvolvedor web e mobile. Projetos com React, Next.js, TypeScript, Flutter e PostgreSQL.",
    "Portfolio of Iago Clayton, Information Systems student at UFRPE and web and mobile developer. Projects with React, Next.js, TypeScript, Flutter and PostgreSQL.",
  );
  const contacts = [
    { name: "E-mail", href: `mailto:${profile.email}` },
    { name: "LinkedIn", href: profile.linkedin },
    { name: "GitHub", href: profile.github },
  ];
  const contactLinks = contacts
    .map(
      (c) =>
        `<a href="${escape(c.href)}"${c.href.startsWith("mailto:") ? "" : ' target="_blank" rel="noopener noreferrer"'}>${c.name} <span aria-hidden="true">↗</span></a>`,
    )
    .join("");
  const primaryContact = `mailto:${profile.email}`;
  const nav = [
    { href: "#projetos", label: t("Projetos", "Work") },
    { href: "#experiencia", label: t("Experiência", "Experience") },
    { href: "#habilidades", label: t("Stack", "Stack") },
    { href: "#sobre", label: t("Sobre", "About") },
    { href: "#contato", label: t("Contato", "Contact") },
  ]
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join("");

  const projectCards = projects
    .map((p, i) => {
      const copy = p[language];
      const image = p.image
        ? `<div class="project-shot"><div class="browser-bar"><span aria-hidden="true">● ● ●</span><span>${escape(new URL(p.url).hostname)}</span></div><img src="/assets/${p.image}" alt="${escape(copy.alt)}" width="1280" height="900" loading="lazy" decoding="async"></div>`
        : `<div class="phone-stage"><span class="stage-label">ODYSSEY</span><img class="phone-back" src="/assets/odyssey-focus.webp" alt="${t("Temporizador de foco do Odyssey", "Odyssey focus timer")}" width="450" height="1000" loading="lazy" decoding="async"><img class="phone-front" src="/assets/odyssey-home.webp" alt="${t("Tela inicial do Odyssey", "Odyssey home screen")}" width="450" height="1000" loading="lazy" decoding="async"></div>`;
      return `<article class="project-card ${p.featured ? "project-card--featured" : ""}" id="${p.id}" aria-labelledby="title-${p.id}">
        <div class="project-card-media">${image}</div>
        <div class="project-card-copy">
          <div class="project-card-top"><span>0${i + 1} / ${copy.category}</span><span class="status">${copy.status}</span></div>
          <h3 id="title-${p.id}">${p.name}</h3>
          <p class="project-card-title">${copy.title}</p>
          <p>${copy.description}</p>
          <p class="project-contribution"><strong>${t("Meu papel", "My role")}</strong> ${copy.contribution}</p>
          <ul class="tags" aria-label="${t("Tecnologias", "Technologies")}">${p.technologies.map((x) => `<li>${x}</li>`).join("")}</ul>
          <div class="project-card-actions">${p.url ? `<a class="text-link" href="${escape(p.url)}" target="_blank" rel="noopener noreferrer">${copy.link} <span aria-hidden="true">↗</span></a>` : `<span class="note">${t("Código privado · em desenvolvimento", "Private source · in development")}</span>`}<details><summary>${t("Detalhes técnicos", "Technical details")} <span aria-hidden="true">+</span></summary><p>${copy.detail}</p></details></div>
        </div>
      </article>`;
    })
    .join("");

  const additionalCards = additional
    .map((p) => `<article class="mini-project">${p.image ? `<img src="/assets/${p.image}" alt="${escape(p.name)}" width="800" height="500" loading="lazy" decoding="async">` : `<span class="mini-project-mark" aria-hidden="true">&lt;/&gt;</span>`}<div><h4>${p.name}</h4><p>${p[language]}</p><p class="more-tech">${p.tech}</p>${p.url ? `<a class="text-link" href="${escape(p.url)}" target="_blank" rel="noopener noreferrer">${t("Visitar", "Visit")} ${p.name} <span aria-hidden="true">↗</span></a>` : `<span class="note">${t("Em desenvolvimento · código privado", "In development · private source")}</span>`}</div></article>`)
    .join("");

  const timeline = experience
    .map((item) => {
      const company = typeof item.company === "string" ? item.company : item.company[language];
      return `<article class="timeline-item"><div class="timeline-date">${en ? item.period.en : item.period.pt}</div><div class="timeline-body"><div class="timeline-heading"><div><h3>${en ? item.role.en : item.role.pt}</h3><p>${company} · ${item.location}</p></div></div><ul>${(en ? item.bullets.en : item.bullets.pt).map((b) => `<li>${b}</li>`).join("")}</ul></div></article>`;
    })
    .join("");

  const educationCards = education
    .map(
      (item) => `<article class="education-card"><p class="eyebrow">${en ? item.detail.en : item.detail.pt}</p><h3>${typeof item.title === "string" ? item.title : en ? item.title.en : item.title.pt}</h3><p class="education-school">${item.school}</p><p>${en ? item.note.en : item.note.pt}</p></article>`,
    )
    .join("");

  const skills = skillGroups
    .map(
      (group) => `<article class="skill-card"><h3>${en ? group.title.en : group.title.pt}</h3><ul>${group.items.map((x) => `<li>${x}</li>`).join("")}</ul></article>`,
    )
    .join("");

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
  <nav aria-label="${t("Navegação principal", "Main navigation")}">${nav}</nav>
  <div class="masthead-actions"><div class="language-switch" aria-label="${t("Idioma", "Language")}"><a href="/" lang="pt-BR" hreflang="pt-BR" ${!en ? 'aria-current="page"' : ""}>PT</a><a href="/en/" lang="en" hreflang="en" ${en ? 'aria-current="page"' : ""}>EN</a></div><a class="header-cta" href="#contato">${t("Falar comigo", "Get in touch")} <span aria-hidden="true">↗</span></a></div>
</header>
<main id="conteudo">
  <section class="wrap hero">
    <div class="hero-copy">
      <p class="eyebrow"><span class="dot" aria-hidden="true"></span>${t("PORTFÓLIO 2026 · SERRA TALHADA, PE", "PORTFOLIO 2026 · SERRA TALHADA, BRAZIL")}</p>
      <h1 id="intro-title"><span class="hero-name">Iago Clayton</span><br><em>${t("desenvolvedor web & mobile.", "web & mobile developer.")}</em></h1>
      <p class="intro">${profile.summary[language]}</p>
      <div class="hero-actions"><a class="button" href="#projetos">${t("Ver projetos", "See selected work")} <span aria-hidden="true">↓</span></a><a class="button button-outline" href="${primaryContact}">${t("Enviar e-mail", "Send an email")} <span aria-hidden="true">↗</span></a></div>
      <p class="availability"><span class="dot" aria-hidden="true"></span>${profile.availability[language]}</p>
    </div>
    <aside class="hero-panel" aria-label="${t("Resumo profissional", "Professional summary")}">
      <div class="panel-head"><span>${t("PERFIL", "PROFILE")}</span><span>01 / 04</span></div>
      <div class="panel-focus"><p class="eyebrow">${t("Foco atual", "Current focus")}</p><h2>${t("Produtos digitais com utilidade real.", "Digital products with real utility.")}</h2><p>${t("Interfaces, APIs e experiências que funcionam em qualquer tela.", "Interfaces, APIs and experiences that work on every screen.")}</p></div>
      <dl class="panel-list"><div><dt>${t("Formação", "Education")}</dt><dd>Sistemas de Informação · UFRPE</dd></div><div><dt>${t("Base", "Based in")}</dt><dd>${profile.location}</dd></div><div><dt>${t("Stack principal", "Core stack")}</dt><dd>React · Next.js · TypeScript · Flutter</dd></div><div><dt>${t("Idiomas", "Languages")}</dt><dd>${t("Português · Inglês intermediário", "Portuguese · Intermediate English")}</dd></div></dl>
      <div class="panel-links">${contactLinks}</div>
    </aside>
  </section>
  <section class="wrap facts" aria-label="${t("Números do perfil", "Profile facts")}">${facts.map((f) => `<div class="fact"><strong>${f.value}</strong><span>${en ? f.label.en : f.label.pt}</span></div>`).join("")}</section>

  <section class="wrap projects" id="projetos" aria-labelledby="projects-title">
    <div class="section-top"><div><p class="eyebrow">01 / ${t("TRABALHO SELECIONADO", "SELECTED WORK")}</p><h2 id="projects-title">${t("Projetos que saíram do papel", "Projects that shipped")}<span class="period">.</span></h2></div><p>${t("Produtos web e mobile, com contexto do problema, decisões técnicas e o que eu construí em cada um.", "Web and mobile products, with the problem, technical decisions and what I built in each one.")}</p></div>
    <div class="project-list">${projectCards}</div>
    <div class="more-heading"><h3>${t("Também faz parte da jornada", "Also part of the journey")}</h3><p>${t("Projetos menores, experimentos e produtos em desenvolvimento.", "Smaller projects, experiments and products in development.")}</p></div>
    <div class="mini-projects">${additionalCards}</div>
  </section>

  <section class="wrap experience" id="experiencia" aria-labelledby="experience-title">
    <div class="section-top"><div><p class="eyebrow">02 / ${t("TRAJETÓRIA", "EXPERIENCE")}</p><h2 id="experience-title">${t("Experiência que ensina a resolver", "Experience that teaches you to solve")}<span class="period">.</span></h2></div><p>${t("Antes do código, aprendi a diagnosticar, explicar e acompanhar problemas até a solução.", "Before code, I learned to diagnose, explain and follow problems through to a solution.")}</p></div>
    <div class="career-grid"><div class="timeline">${timeline}</div><aside class="education"><p class="eyebrow">${t("FORMAÇÃO", "EDUCATION")}</p><div class="education-list">${educationCards}</div><div class="education-note"><strong>${t("Disponibilidade", "Availability")}</strong><p>${t("Início imediato · remoto · viagens eventuais", "Immediate start · remote · occasional travel")}</p></div></aside></div>
  </section>

  <section class="wrap skills" id="habilidades" aria-labelledby="skills-title">
    <div class="section-top"><div><p class="eyebrow">03 / ${t("STACK E FERRAMENTAS", "STACK & TOOLS")}</p><h2 id="skills-title">${t("O que eu uso para construir", "What I use to build")}<span class="period">.</span></h2></div><p>${t("Tecnologias que já usei em projetos, estudo e suporte técnico.", "Technologies I have used in projects, study and technical support.")}</p></div>
    <div class="skill-grid">${skills}</div>
  </section>

  <section class="about" id="sobre" aria-labelledby="about-title"><div class="wrap about-grid"><div><p class="eyebrow">04 / ${t("SOBRE MIM", "ABOUT ME")}</p><h2 id="about-title">${t("Curiosidade técnica,<br><em>visão de produto.</em>", "Technical curiosity,<br><em>product thinking.</em>")}</h2></div><div class="about-copy"><p class="large-copy">${t("Gosto de entender o problema antes de escolher a stack — e de deixar a interface simples mesmo quando a lógica por trás não é.", "I like to understand the problem before choosing the stack — and to keep the interface simple even when the logic behind it is not.")}</p><p>${t("Venho do suporte técnico, onde aprendi a ouvir, diagnosticar e explicar soluções com clareza. Hoje aplico isso no desenvolvimento de produtos web e mobile, estudando Sistemas de Informação na UFRPE.", "I come from technical support, where I learned to listen, diagnose and explain solutions clearly. Today I apply that to web and mobile product development while studying Information Systems at UFRPE.")}</p><p>${t("Estou disponível para estágio ou posição júnior, presencial em Serra Talhada ou remoto, com vontade de aprender em time e entregar com consistência.", "I’m available for an internship or junior role, on-site in Serra Talhada or remote, eager to learn with a team and deliver consistently.")}</p><div class="about-links">${contactLinks}</div></div></div></section>

  <section class="wrap contact" id="contato" aria-labelledby="contact-title"><p class="eyebrow">05 / ${t("CONTATO", "CONTACT")}</p><h2 id="contact-title">${t("Tem um problema<br><em>para resolver?</em>", "Got a problem<br><em>to solve?</em>")}</h2><div class="contact-bottom"><p>${t("Estou disponível para estágio e oportunidades júnior em desenvolvimento web e mobile.", "I’m open to internships and junior opportunities in web and mobile development.")}</p><div class="contact-actions"><a class="button" href="${primaryContact}">${t("Enviar e-mail", "Send an email")} <span aria-hidden="true">↗</span></a><a class="text-link" href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a class="text-link" href="${profile.github}" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a></div></div></section>
</main>
<footer class="wrap"><a class="brand" href="#">${profile.name}<span class="brand-mark" aria-hidden="true">&lt;/&gt;</span></a><p>${t("PORTFÓLIO / DESENVOLVIMENTO WEB E MOBILE · 2026", "PORTFOLIO / WEB & MOBILE DEVELOPMENT · 2026")}</p><a href="#">${t("Voltar ao topo", "Back to top")} ↑</a></footer>
</body></html>`;
}
