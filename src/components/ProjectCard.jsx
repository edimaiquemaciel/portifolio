import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ image, alt, title, description, tags, github, live }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 ease-in-out transform hover:-translate-y-[5px] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
      
      {/* IMAGEM */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-40 sm:h-48 object-top"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[rgba(17,24,39,0.8)] to-transparent opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"></div>
      </div>

      {/* CONTEÚDO */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
        
        <p className="text-gray-300 text-sm sm:text-base mb-4">
          {description}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {tags.map((tag, index) => {
            const colors = [
              "bg-indigo-500/20 text-indigo-400",
              "bg-purple-500/20 text-purple-300",
              "bg-cyan-500/20 text-cyan-300",
            ];

            return (
              <span
                key={index}
                className={`inline-block py-1 px-2 rounded-full text-[0.65rem] sm:text-xs ${colors[index % colors.length]}`}
              >
                {tag}
              </span>
            );
          })}
        </div>

        {/* BOTÕES */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <a 
            href={github} 
            target="_blank" 
            className="flex items-center gap-2 text-gray-400 no-underline text-sm transition-colors duration-200 ease-in-out hover:text-white"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a 
            href={live} 
            target="_blank" 
            className="flex items-center gap-2 text-gray-400 no-underline text-sm transition-colors duration-200 ease-in-out hover:text-white"
          >
            <FaExternalLinkAlt />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
