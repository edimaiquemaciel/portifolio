import miniShop from "../assets/minishop.png"
import sisPar from "../assets/sispar.png"
import digitalStore from "../assets/digitalstore.png"
import toDoList from "../assets/todo-list-advanced.png"
import lastMovies from "../assets/lastmovie.png"
import InstaSplash from "../assets/instaSplash.png"
import moviesLib from "../assets/movieslab.png"
import calculadora from "../assets/calculadora.png"
import quizReact from "../assets/quiz.png"
import starbucks from "../assets/starbucks.png"
import costsSystem from "../assets/costssystem.png"


const projectsData = [
  {
    image: sisPar,
    alt: "SISPAR",
    title: "SISPAR - Sistema de Reembolsos",
    description:
      "Sistema web de reembolsos com autenticação JWT, formulários com React Hook Form e Zod. Construído em React e PrimeReact, possui interface moderna, responsiva e fluxo completo.",
    tags: ["React", "Material UI", "PrimeReact", "SCSS", "React Hook Form", "Zod", "JWT"],
    github: "https://github.com/edimaiquemaciel/sispar",
    live: "https://sispar-project.vercel.app",
  },
  {
    image: InstaSplash,
    alt: "InstaSplash",
    title: "InstaSplash (Mini-Instagram)",
    description:
      "Rede social de fotos criada com Next.js, TypeScript e Tailwind, consumindo a API Unsplash. Inclui feed, busca e sistema de favoritos via localStorage, totalmente responsiva.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "API", "Unsplash", "localStorage"],
    github: "https://github.com/edimaiquemaciel/desafio-front-end",
    live: "https://desafio-front-end-red-sigma.vercel.app",
  },
  {
    image: costsSystem,
    alt: "Gerenciador de Projetos e Custos em React",
    title: "Costs System - Gestão de Projetos",
    description:
      "Sistema React para gerenciar projetos e custos, com criação de serviços, controle de orçamento e integração com API REST via JSON Server. Utiliza CRUD e React Router de forma prática.",
    tags: ["React", "Gerenciamento", "CRUD", "React Router", "JSON Server", "Orçamento"],
    github: "https://github.com/edimaiquemaciel/costs_system",
    live: "https://costs-system.vercel.app",
  },
  {
    image: digitalStore,
    alt: "Digital Store",
    title: "Digital Store",
    description:
      "E-commerce moderno em React com catálogo completo, filtros avançados, busca inteligente e layout responsivo usando Tailwind e PrimeReact. Dados fornecidos por uma API mock estruturada.",
    tags: ["React", "Tailwind", "PrimeReact", "React Router", "JSON Server"],
    github: "https://github.com/edimaiquemaciel/projeto-frontend-digitalstore",
    live: "https://projeto-frontend-digitalstore.vercel.app",
  },
  {
    image: miniShop,
    alt: "Mini Loja",
    title: "Mini Loja",
    description:
      "E-commerce responsivo em React com quatro estilos visuais, tema dinâmico, carrinho funcional, skeletons de carregamento e persistência no localStorage. Focado em UI/UX fluida e moderna.",
    tags: ["React", "CSS", "Tailwind", "Styled Components", "localStorage"],
    github: "https://github.com/edimaiquemaciel/atividade6-mini-loja",
    live: "https://mini-shop-edimaique.vercel.app",
  },
  {
    image: lastMovies,
    alt: "Catálogo de Filmes",
    title: "Last Movie - Catálogo",
    description:
      "Catálogo de filmes interativo feito com React e Vite que consome a API TMDB, exibindo lançamentos, detalhes e notas. Design moderno, navegação intuitiva e alta responsividade garantida.",
    tags: ["React", "Motion", "JavaScript", "API", "TMDB", "CSS"],
    github: "https://github.com/edimaiquemaciel/atividade5-LastMovie",
    live: "https://atividade5-last-movie.vercel.app",
  },
  {
    image: moviesLib,
    alt: "Biblioteca de Filmes",
    title: "Movies Lib - Catálogo",
    description:
      "Biblioteca de filmes desenvolvida em React e Vite que consome a API TMDB. Oferece busca completa, lista de filmes populares, detalhes com avaliações e navegação robusta usando React Router e boas práticas.",
    tags: ["React", "Vite", "JavaScript", "React Icons", "TMDB", "React Router"],
    github: "https://github.com/edimaiquemaciel/moviesLib",
    live: "https://movies-lib-sandy-psi.vercel.app",
  },
  {
    image: starbucks,
    alt: "Landing Page Interativa Starbucks",
    title: "Starbucks - Landing Page Dinâmica",
    description:
      "Landing page interativa criada em React e Styled Components, com seletor de produtos que altera tema e imagens dinamicamente. Totalmente responsiva e focada em componentização eficiente.",
    tags: ["React", "Styled Components", "JavaScript", "Vite", "Web Design", "Componentização"],
    github: "https://github.com/edimaiquemaciel/DesafioFinal",
    live: "https://desafio-final-starbucks.vercel.app",
  },
  {
    image: toDoList,
    alt: "To-Do List Avançada",
    title: "To-Do List Avançada (React)",
    description:
      "To-Do List avançada criada em React com persistência no localStorage, filtros dinâmicos por status, uso eficiente de Hooks, layout totalmente responsivo e organização de componentes seguindo padrões modernos.",
    tags: ["React", "Vite", "JavaScript", "Hooks", "localStorage", "CSS"],
    github: "https://github.com/edimaiquemaciel/ToDo-advanced-React",
    live: "https://to-do-advanced-react.vercel.app",
  },
  {
    image: quizReact,
    alt: "Quiz de Perguntas e Respostas em React",
    title: "Quiz Interativo em React",
    description:
      "Quiz interativo desenvolvido em React e Vite que controla fluxo de perguntas, valida respostas e calcula pontuação. Estrutura bem organizada com Hooks e interface dinâmica e responsiva.",
    tags: ["React", "Vite", "JavaScript", "Hooks", "Componentização"],
    github: "https://github.com/edimaiquemaciel/quiz-react",
    live: "https://quiz-react-sand.vercel.app",
  },
  {
    image: calculadora,
    alt: "Calculadora Web em React",
    title: "Calculadora Web",
    description:
      "Calculadora web responsiva criada com React, Vite e Sass, incluindo operações básicas, limpeza de dados e validação. Demonstra domínio de estado, componentização e estilização moderna.",
    tags: ["React", "Vite", "Sass", "JavaScript", "Componentização"],
    github: "https://github.com/edimaiquemaciel/DesafioCalculadoraReact",
    live: "https://desafio-calculanaweb-react.vercel.app",
  },
];


export default projectsData;
