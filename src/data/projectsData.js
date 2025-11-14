import miniShop from "../assets/minishop.png"
import sisPar from "../assets/sispar.png"
import digitalStore from "../assets/digitalstore.png"
import toDoList from "../assets/todo-list-advanced.png"
import lastMovies from "../assets/lastmovie.png"
import InstaSplash from "../assets/instaSplash.png"


const projectsData = [
  {
    image: miniShop,
    alt: "Mini Loja",
    title: "Mini Loja",
    description:
      "Aplicação de e-commerce em React com quatro estilos, tema dinâmico, carrinho funcional, skeletons de carregamento e layout totalmente responsivo para vários dispositivos.",
    tags: ["React", "CSS", "Tailwind", "Styled Components", "localStorage"],
    github: "https://github.com/edimaiquemaciel/atividade6-mini-loja",
    live: "https://mini-shop-edimaique.vercel.app",
  },
  {
    image: sisPar,
    alt: "SISPAR",
    title: "SISPAR - Sistema de Reembolsos",
    description:
      "Sistema web para gestão de reembolsos com autenticação JWT, formulários validados com Zod, interface moderna feita com React e PrimeReact, garantindo fluxo completo e responsivo.",
    tags: ["React", "Material UI", "PrimeReact", "SCSS", "Zod", "JWT"],
    github: "https://github.com/edimaiquemaciel/sispar",
    live: "https://sispar-project.vercel.app",
  },
  {
    image: digitalStore,
    alt: "Digital Store",
    title: "Digital Store",
    description:
      "E-commerce moderno desenvolvido em React com catálogo completo, filtros avançados, busca inteligente e interface responsiva feita com Tailwind e PrimeReact, usando API mock.",
    tags: ["React", "Tailwind", "PrimeReact", "React Router", "JSON Server"],
    github: "https://github.com/edimaiquemaciel/projeto-frontend-digitalstore",
    live: "https://projeto-frontend-digitalstore.vercel.app",
  },
  // --- NOVO ITEM ADICIONADO ABAIXO ---
  {
    image: toDoList,
    alt: "To-Do List Avançada",
    title: "To-Do List Avançada (React)",
    description:
      "To-Do List avançada em React com persistência de dados no Local Storage. Foco em boas práticas de desenvolvimento, utilizando Hooks e estrutura de componentes, com filtros de status (ativa/concluída) e layout responsivo.",
    tags: ["React", "Vite", "JavaScript", "Hooks", "localStorage", "CSS"],
    github: "https://github.com/edimaiquemaciel/ToDo-advanced-React",
    live: "https://to-do-advanced-react.vercel.app",
  },
  {
    image: lastMovies,
    alt: "Catálogo de Filmes",
    title: "Last Movie - Catálogo",
    // Descrição ajustada para 184 caracteres
    description:
      "Catálogo de filmes interativo em React e Vite. Consome dados de uma API pública (TMDB), exibindo títulos recentes, detalhes, sinopse e notas. O projeto foca em um design moderno e é totalmente responsivo para diversos dispositivos.",
    tags: ["React", "Motion", "JavaScript", "API", "TMDB", "CSS"],
    github: "https://github.com/edimaiquemaciel/atividade5-LastMovie",
    live: "https://atividade5-last-movie.vercel.app",
  },
  {
    image: InstaSplash,
    alt: "InstaSplash",
    title: "InstaSplash (Mini-Instagram)",
    description:
      "Rede Social de Fotos construída como desafio técnico, consumindo a Unsplash API. Desenvolvido com Next.js, TypeScript e Tailwind CSS, possui feed, pesquisa e sistema de 'favoritos' persistidos no Local Storage. Altamente responsivo.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "API", "Unsplash", "localStorage"],
    github: "https://github.com/edimaiquemaciel/desafio-front-end",
    live: "https://desafio-front-end-red-sigma.vercel.app",
  },
];

export default projectsData;
