// Only verified, public-facing information belongs here.
export const profile = {
  name: "Iago Clayton",
  fullName: "Iago Clayton Martins Melo",
  role: {
    pt: "Desenvolvedor web & mobile",
    en: "Web & mobile developer",
  },
  location: "Serra Talhada, PE · Brasil",
  email: "phmello98@gmail.com",
  github: "https://github.com/iag0-clayt0-n",
  linkedin: "https://www.linkedin.com/in/iago-martins-84103011b/",
  availability: {
    pt: "Disponível para estágio ou vaga júnior · remoto",
    en: "Open to internships or junior roles · remote",
  },
  summary: {
    pt: "Estudante de Sistemas de Informação na UFRPE e desenvolvedor web em formação. Construo aplicações completas, da interface à integração com dados e APIs, com atenção especial a clareza, desempenho e experiência de uso.",
    en: "Information Systems student at UFRPE and a web developer in training. I build complete applications, from the interface to data and API integration, with a focus on clarity, performance and user experience.",
  },
};

export const facts = [
  {
    value: "04",
    label: { pt: "projetos no portfólio", en: "projects in the portfolio" },
  },
  {
    value: "2022",
    label: { pt: "em suporte técnico e atendimento", en: "in technical support and client service" },
  },
  {
    value: "UFRPE",
    label: { pt: "Sistemas de Informação · em andamento", en: "Information Systems · in progress" },
  },
  {
    value: "Full-stack",
    label: { pt: "interfaces, APIs e banco de dados", en: "interfaces, APIs and databases" },
  },
];

export const skillGroups = [
  {
    title: { pt: "Front-end", en: "Front-end" },
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: { pt: "Back-end e dados", en: "Back-end & data" },
    items: ["Node.js", "APIs REST", "PostgreSQL", "Prisma", "Supabase"],
  },
  {
    title: { pt: "Mobile", en: "Mobile" },
    items: ["Flutter", "Dart", "Riverpod", "Hive", "Kotlin (noções)"],
  },
  {
    title: { pt: "Ferramentas e sistemas", en: "Tools & systems" },
    items: ["Git", "GitHub", "Linux", "VS Code", "Windows"],
  },
  {
    title: { pt: "Suporte técnico", en: "Technical support" },
    items: ["Diagnóstico", "Hardware", "Windows/Linux", "Atendimento ao cliente"],
  },
  {
    title: { pt: "Idiomas", en: "Languages" },
    items: ["Português nativo", "Inglês intermediário", "Espanhol básico"],
  },
];

export const experience = [
  {
    role: { pt: "Técnico em manutenção e suporte", en: "Computer maintenance & support technician" },
    company: { pt: "Autônomo / freelance", en: "Self-employed / freelance" },
    period: { pt: "2022 — atual", en: "2022 — present" },
    location: "Serra Talhada, PE",
    bullets: {
      pt: [
        "Manutenção preventiva e corretiva de computadores, notebooks e dispositivos móveis.",
        "Instalação e configuração de Windows e Linux, softwares e ambientes de trabalho.",
        "Diagnóstico técnico, orçamento, negociação e acompanhamento de cada atendimento.",
      ],
      en: [
        "Preventive and corrective maintenance for computers, laptops and mobile devices.",
        "Windows and Linux installation, software setup and workstation configuration.",
        "Technical diagnosis, quotes, negotiation and follow-up on every service.",
      ],
    },
  },
  {
    role: { pt: "Técnico mecânico", en: "Mechanical technician" },
    company: "Tamboril Veículos",
    period: { pt: "jan — set 2021", en: "Jan — Sep 2021" },
    location: "Serra Talhada, PE",
    bullets: {
      pt: [
        "Atendimento e negociação com clientes, traduzindo problemas técnicos em informações claras.",
        "Elaboração de orçamentos, ordens de serviço e acompanhamento de prazos.",
        "Programação e acompanhamento de recalls e atualizações de sistemas.",
      ],
      en: [
        "Customer service and negotiation, explaining technical issues in plain language.",
        "Quotes, service orders and deadline follow-up.",
        "Scheduling and monitoring recalls and system updates.",
      ],
    },
  },
  {
    role: { pt: "Atendimento e operações", en: "Customer service & operations" },
    company: { pt: "ECOSERV · Biofitness", en: "ECOSERV · Biofitness" },
    period: { pt: "2016 — 2019", en: "2016 — 2019" },
    location: "Serra Talhada, PE",
    bullets: {
      pt: [
        "Recepção, controle de acesso, registro de ocorrências e atendimento ao público.",
        "Organização de matrículas, renovações e agendamentos.",
      ],
      en: [
        "Front desk, access control, incident logging and public service.",
        "Enrollment, renewals and appointment scheduling.",
      ],
    },
  },
];

export const education = [
  {
    title: "Sistemas de Informação",
    school: "UFRPE",
    detail: { pt: "Bacharelado · em andamento", en: "Bachelor's degree · in progress" },
    note: {
      pt: "Lógica, programação, estrutura de dados e fundamentos de sistemas.",
      en: "Logic, programming, data structures and systems fundamentals.",
    },
  },
  {
    title: { pt: "Informática e Desenvolvimento Web", en: "IT & Web Development" },
    school: "Udemy",
    detail: { pt: "Formação complementar", en: "Complementary course" },
    note: {
      pt: "Base de HTML, CSS, lógica de programação e desenvolvimento web.",
      en: "HTML, CSS, programming logic and web development foundations.",
    },
  },
];

export const projects = [
  {
    id: "resolvemos",
    name: "Resolvemos",
    type: "web",
    url: "https://resolvemos.shop",
    image: "resolvemos.webp",
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"],
    featured: true,
    pt: {
      category: "WEB · SERVIÇOS E DEMONSTRAÇÕES",
      status: "Publicado",
      title: "Serviços digitais para pequenos negócios, do briefing ao pedido.",
      description:
        "Site de serviços com loja, padaria e agendamento para barbearia. Cada demonstração mostra um tipo de operação funcionando de ponta a ponta.",
      contribution:
        "Desenvolvi as páginas, o formulário de briefing e o fluxo que registra as solicitações para acompanhamento na área administrativa.",
      detail:
        "React, validação com Zod e persistência em Prisma + PostgreSQL. As demos são exemplos de operação, não sistemas de clientes reais.",
      alt: "Página inicial da Resolvemos com apresentação dos serviços e demonstração de agendamento.",
      link: "Visitar Resolvemos",
    },
    en: {
      category: "WEB · SERVICES & DEMOS",
      status: "Live",
      title: "Digital services for small businesses, from brief to request.",
      description:
        "A services website with storefront, bakery and barbershop booking demos. Each demo shows one type of operation running end to end.",
      contribution:
        "I built the pages, the project brief form and the flow that records requests for follow-up in the admin area.",
      detail:
        "React, Zod validation and persistence with Prisma + PostgreSQL. The demos are operating examples, not real client systems.",
      alt: "Resolvemos homepage showing its services and a booking demo.",
      link: "Visit Resolvemos",
    },
  },
  {
    id: "gerapost",
    name: "GeraPost",
    type: "web",
    url: "https://gerapost-odyssey.netlify.app",
    image: "gerapost.webp",
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "OpenAI API"],
    featured: false,
    pt: {
      category: "WEB · CONTEÚDO COM IA",
      status: "Publicado",
      title: "Rascunhos de conteúdo para redes sociais, com revisão humana.",
      description:
        "Ferramenta para preparar legendas, carrosséis e roteiros a partir do contexto de um negócio. A geração acontece no servidor; a revisão continua com quem publica.",
      contribution:
        "Interface de criação, rotas de geração, autenticação, biblioteca de conteúdo e controle de créditos.",
      detail:
        "Next.js e TypeScript na aplicação, Supabase para autenticação e dados, e integração com a API da OpenAI. O resultado é sempre revisado antes de publicar.",
      alt: "Página inicial do GeraPost, ferramenta de criação de conteúdo para redes sociais.",
      link: "Conhecer GeraPost",
    },
    en: {
      category: "WEB · AI CONTENT",
      status: "Live",
      title: "Social media drafts that still go through a human review.",
      description:
        "A tool for drafting captions, carousels and scripts from a business brief. Generation runs on the server; the person publishing reviews the output.",
      contribution:
        "Creation interface, generation routes, authentication, content library and credit control.",
      detail:
        "Next.js and TypeScript for the app, Supabase for authentication and data, and the OpenAI API integration. Output is always reviewed before publishing.",
      alt: "GeraPost homepage for its social media content creation tool.",
      link: "Explore GeraPost",
    },
  },
  {
    id: "odyssey",
    name: "Odyssey",
    type: "app",
    url: "https://iagusa-center.netlify.app",
    image: "",
    technologies: ["Flutter", "Dart", "Riverpod", "Hive", "Supabase"],
    featured: false,
    pt: {
      category: "MOBILE · ROTINA E BEM-ESTAR",
      status: "Em desenvolvimento",
      title: "Humor, hábitos, foco e rotina em um único app.",
      description:
        "Aplicativo Android que reúne registro de humor, diário, hábitos, tarefas e temporizador de foco — com gamificação para manter a constância.",
      contribution:
        "Interfaces, gerenciamento de estado, persistência local e sincronização na nuvem. O código é organizado por funcionalidade.",
      detail:
        "Flutter e Dart na interface, Riverpod no estado, Hive para armazenamento local e Supabase na nuvem. O app ainda está em desenvolvimento e tem o site Iagusa Center como vitrine.",
      alt: "",
      link: "Ver apresentação do app",
    },
    en: {
      category: "MOBILE · ROUTINE & WELLBEING",
      status: "In development",
      title: "Mood, habits, focus and routine in one app.",
      description:
        "An Android app bringing together mood tracking, journaling, habits, tasks and a focus timer — with gamification to keep consistency.",
      contribution:
        "Interfaces, state management, local persistence and cloud sync. The codebase is organized by feature.",
      detail:
        "Flutter and Dart for the interface, Riverpod for state, Hive for local storage and Supabase for cloud sync. The app is still in development, with the Iagusa Center website as its showcase.",
      alt: "",
      link: "View the app website",
    },
  },
];

export const additional = [
  {
    name: "Iagusa Center",
    url: "https://iagusa-center.netlify.app",
    tech: "Next.js · React · TypeScript · PostgreSQL",
    image: "iagusa-center.webp",
    pt: "Site de apresentação do Odyssey, com blog, fórum e conteúdo em português e inglês.",
    en: "The Odyssey website, with a blog, forum and content in Portuguese and English.",
  },
  {
    name: "OtakuBase",
    url: "",
    tech: "Next.js · TypeScript · Drizzle · Turso",
    image: "",
    pt: "Catálogo de animes com busca, fichas e integração com fontes de dados externas.",
    en: "An anime catalog with search, title pages and external data integrations.",
  },
  {
    name: "Texturas",
    url: "",
    tech: "Kotlin · Jetpack Compose",
    image: "",
    pt: "Projeto Android em desenvolvimento: diário de humor e atividades de apoio à recuperação.",
    en: "An Android project in development: mood journaling and recovery-support activities.",
  },
];
