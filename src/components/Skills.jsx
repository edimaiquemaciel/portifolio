import { FaCode, FaServer, FaTools, FaPaintBrush } from "react-icons/fa";

function Skills() {
  return (
    <section id="habilidades" className="py-24 px-4">
      <div className="w-full max-w-7xl mx-auto px-4">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
            Habilidades
          </h2>
          <p className="text-[1.125rem] text-gray-400 max-w-2xl mx-auto leading-[1.6]">
            Tecnologias e ferramentas que domino para criar soluções digitais incríveis
          </p>
        </div>

        {/* GRID RESPONSIVO */}
        <div className="
          grid 
          grid-cols-1             /* mobile */
          sm:grid-cols-2          /* tablets */
          lg:grid-cols-4          /* desktop */
          gap-6 
          lg:gap-8
        ">
          {/* FRONTEND */}
          <div className="bg-[rgba(31,41,55,0.5)] p-6 rounded-xl border border-gray-700 transition-all duration-300 hover:border-indigo-500">
            <div className="flex items-center gap-3 mb-4">
              <FaCode className="text-xl text-indigo-500" />
              <h3 className="text-xl font-bold">Frontend</h3>
            </div>
            <ul className="list-none">
              {["HTML/CSS", "JavaScript", "React", "Vue.js", "Tailwind CSS"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* BACKEND */}
          <div className="bg-[rgba(31,41,55,0.5)] p-6 rounded-xl border border-gray-700 transition-all duration-300 hover:border-violet-500">
            <div className="flex items-center gap-3 mb-4">
              <FaServer className="text-xl text-violet-500" />
              <h3 className="text-xl font-bold">Backend</h3>
            </div>
            <ul className="list-none">
              {["Node.js", "Python", "MongoDB", "PostgreSQL", "Firebase"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* TOOLS */}
          <div className="bg-[rgba(31,41,55,0.5)] p-6 rounded-xl border border-gray-700 transition-all duration-300 hover:border-emerald-500">
            <div className="flex items-center gap-3 mb-4">
              <FaTools className="text-xl text-emerald-500" />
              <h3 className="text-xl font-bold">Tools & Technologies</h3>
            </div>
            <ul className="list-none">
              {["Git / GitHub", "JWT (Autenticação)", "JSON", "Express.js", "Testes com Jest"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DESIGN */}
          <div className="bg-[rgba(31,41,55,0.5)] p-6 rounded-xl border border-gray-700 transition-all duration-300 hover:border-amber-400">
            <div className="flex items-center gap-3 mb-4">
              <FaPaintBrush className="text-xl text-amber-400" />
              <h3 className="text-xl font-bold">Design</h3>
            </div>
            <ul className="list-none">
              {["UI/UX Design", "Figma", "Responsive Design"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
