import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData";

function Projects() {
  return (
    <section id="projetos" className="bg-gray-800/50 py-24 px-4">
      <div className="w-full max-w-7xl mx-auto px-4">

        {/* TÍTULO + SUBTÍTULO */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
            Projetos
          </h2>
          <p className="text-[1.125rem] text-gray-400 max-w-2xl mx-auto leading-[1.6]">
            Alguns dos meus projetos mais recentes e desafiadores
          </p>
        </div>

        {/* GRID AJUSTADO */}
        <div className="
          grid 
          grid-cols-1       /* mobile */
          sm:grid-cols-2    /* tablet */
          lg:grid-cols-3    /* desktop */
          gap-6 
          lg:gap-8
        ">
          {projectsData.map((projeto, index) => (
            <ProjectCard
              key={index}
              image={projeto.image}
              alt={projeto.alt}
              title={projeto.title}
              description={projeto.description}
              tags={projeto.tags}
              github={projeto.github}
              live={projeto.live}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
