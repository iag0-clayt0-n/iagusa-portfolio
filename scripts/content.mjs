// Only verified, public-facing information belongs here. See README for evidence.
export const profile = {
  name: "Iago Clayton",
  github: "https://github.com/iag0-clayt0-n",
  email: "",
  linkedin: "https://www.linkedin.com/in/iago-martins-84103011b/",
  whatsapp: "",
  resume: "",
};

export const projects = [
  {
    id: "resolvemos",
    name: "Resolvemos",
    type: "web",
    url: "https://resolvemos.shop",
    image: "resolvemos.webp",
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"],
    pt: {
      category: "WEB · SERVIÇOS E DEMONSTRAÇÕES",
      status: "Publicado",
      title: "Da ideia ao pedido de um sistema.",
      description:
        "Site de serviços digitais para pequenos negócios, com demonstrações de loja, padaria e agendamento para barbearia.",
      contribution:
        "Desenvolvimento das páginas, do formulário de briefing e do fluxo que registra as solicitações para acompanhamento na área administrativa.",
      detail:
        "Componentes em React, validação das solicitações com Zod e persistência com Prisma e PostgreSQL. Os exemplos são demonstrações, não sistemas de clientes.",
      alt: "Página inicial da Resolvemos com apresentação dos serviços e demonstração de agendamento.",
      link: "Visitar Resolvemos",
    },
    en: {
      category: "WEB · SERVICES & DEMOS",
      status: "Live",
      title: "From an idea to a software brief.",
      description:
        "A digital services website for small businesses, with storefront, bakery and barbershop booking demos.",
      contribution:
        "Development of the pages, project brief form and request submission flow, with an administration area for follow-up.",
      detail:
        "React components, Zod request validation and persistence with Prisma and PostgreSQL. The examples are demos, not client systems.",
      alt: "Resolvemos homepage showing its services and a booking demo.",
      link: "Visit Resolvemos",
    },
  },
  {
    id: "gerapost",
    name: "GeraPost",
    type: "web",
    url: "https://gerapost.iagusa.space",
    image: "gerapost.webp",
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "OpenAI API"],
    pt: {
      category: "WEB · CONTEÚDO COM IA",
      status: "Publicado",
      title: "Um ponto de partida para o próximo post.",
      description:
        "Ferramenta para preparar legendas, carrosséis e roteiros a partir do contexto de um negócio. O conteúdo passa pela revisão de quem publica.",
      contribution:
        "Desenvolvimento da interface de criação e das rotas de geração, com autenticação, biblioteca de conteúdo e controle de créditos.",
      detail:
        "Next.js e TypeScript na aplicação, Supabase para acesso e dados e integração com a API da OpenAI. A geração ocorre no servidor; o usuário revisa o resultado antes de publicar.",
      alt: "Página inicial do GeraPost, ferramenta de criação de conteúdo para redes sociais.",
      link: "Conhecer GeraPost",
    },
    en: {
      category: "WEB · AI CONTENT",
      status: "Live",
      title: "A starting point for the next post.",
      description:
        "A tool for drafting captions, carousels and scripts from a business brief. Content is reviewed by the person publishing it.",
      contribution:
        "Development of the creation interface and generation routes, with authentication, a content library and credit tracking.",
      detail:
        "Next.js and TypeScript for the application, Supabase for access and data, and integration with the OpenAI API. Generation runs on the server; users review the output before publishing.",
      alt: "GeraPost homepage for its social media content creation tool.",
      link: "Explore GeraPost",
    },
  },
  {
    id: "odyssey",
    name: "Odyssey",
    type: "app",
    url: "https://iagusa.space",
    image: "",
    technologies: ["Flutter", "Dart", "Riverpod", "Hive", "Supabase"],
    pt: {
      category: "MOBILE · ROTINA E BEM-ESTAR",
      status: "Em desenvolvimento",
      title: "Humor, hábitos e foco em um só app.",
      description:
        "Aplicativo que reúne registros de humor, diário, hábitos e temporizador de foco para acompanhar a rotina.",
      contribution:
        "Desenvolvimento de interfaces, gerenciamento de estado e persistência de registros, com organização do código por funcionalidades.",
      detail:
        "Flutter e Dart na interface, Riverpod no estado, Hive para armazenamento local e Supabase na integração com a nuvem. O repositório inclui testes do formulário de registro de humor. O app ainda está em desenvolvimento.",
      alt: "",
      link: "Ver apresentação do app",
    },
    en: {
      category: "MOBILE · ROUTINE & WELLBEING",
      status: "In development",
      title: "Mood, habits and focus in one app.",
      description:
        "An app bringing together mood tracking, journaling, habits and a focus timer to keep track of daily routines.",
      contribution:
        "Development of interfaces, state management and record persistence, with code organized by feature.",
      detail:
        "Flutter and Dart for the interface, Riverpod for state, Hive for local storage and Supabase for cloud integration. The repository includes mood-entry form tests. The app is still in development.",
      alt: "",
      link: "View the app website",
    },
  },
];

export const additional = [
  {
    name: "Iagusa Center",
    url: "https://iagusa.space",
    tech: "Next.js · React · TypeScript · PostgreSQL",
    pt: "Site de apresentação do Odyssey, com blog e fórum. Conteúdo em português e inglês.",
    en: "The Odyssey website, with a blog and forum. Content in Portuguese and English.",
  },
  {
    name: "OtakuBase",
    url: "https://animesbase.iagusa.space",
    tech: "Next.js · TypeScript · Drizzle · Turso",
    pt: "Catálogo de animes com busca, fichas e integração com fontes de dados externas.",
    en: "An anime catalog with search, title pages and external data integrations.",
  },
  {
    name: "Texturas",
    url: "",
    tech: "Kotlin · Jetpack Compose",
    pt: "Projeto Android em desenvolvimento. A proposta reúne diário de humor e atividades de apoio à recuperação.",
    en: "An Android project in development, exploring mood journaling and activities to support recovery.",
  },
];
