import { FaCode, FaServer, FaTools, FaPaintBrush } from "react-icons/fa";

function Skills() {
  return (
    <section id="habilidades" className="py-24 px-4">
        <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">Habilidades</h2>
                <p className="text-[1.125rem] text-gray-400 max-w-2xl mx-auto leading-[1.6]">
                    Tecnologias e ferramentas que domino para criar soluções digitais incríveis
                </p>
            </div>
            <div className="grid grid-cols-4 gap-8">
                <div className="bg-[rgba(31,41,55,0.5)] p-6 rounded-xl border border-gray-700 transition-all duration-300 ease-in-out hover:border-indigo-500">
                    <div className="flex items-center gap-3 mb-4">
                        <FaCode className="text-xl text-indigo-500" />
                        <h3 className="text-xl font-bold">Frontend</h3>
                    </div>
                    <ul className="list-none">
                        <li className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                            <div className="w-1.5 h-1.5 rounded-[9999px] bg-indigo-500"></div>
                            <span>HTML/CSS</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                            <div className="w-1.5 h-1.5 rounded-[9999px] bg-indigo-500"></div>
                            <span>JavaScript</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                            <div className="w-1.5 h-1.5 rounded-[9999px] bg-indigo-500"></div>
                            <span>React</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                            <div className="w-1.5 h-1.5 rounded-[9999px] bg-indigo-500"></div>
                            <span>Vue.js</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                            <div className="w-1.5 h-1.5 rounded-[9999px] bg-indigo-500"></div>
                            <span>Tailwind CSS</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-[rgba(31,41,55,0.5)] p-6 rounded-xl border border-gray-700 transition-all duration-300 ease-in-out hover:border-violet-500">
                    <div className="flex items-center gap-3 mb-4">
                        <FaServer className="text-xl text-violet-500" />
                        <h3 className="text-xl font-bold">Backend</h3>
                    </div>
                    <ul className="list-none">
                        <li className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                            <div className="w-1.5 h-1.5 rounded-[9999px] bg-violet-500"></div>
                            <span>Node.js</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                            <div className="w-1.5 h-1.5 rounded-[9999px] bg-violet-500"></div>
                            <span>Python</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                            <div className="w-1.5 h-1.5 rounded-[9999px] bg-violet-500"></div>
                            <span>MongoDB</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                            <div className="w-1.5 h-1.5 rounded-[9999px] bg-violet-500"></div>
                            <span>PostgreSQL</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                            <div className="w-1.5 h-1.5 rounded-[9999px] bg-violet-500"></div>
                            <span>Firebase</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-[rgba(31,41,55,0.5)] p-6 rounded-xl border border-gray-700 transition-all duration-300 ease-in-out hover:border-emerald-500">
                    <div className="flex items-center gap-3 mb-4">
                        <FaTools className="text-xl text-emerald-500"/>
                        <h3 className="text-xl font-bold">Tools & Technologies</h3>
                    </div>
                    <ul className="list-none">
                        <li className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                            <div className="w-1.5 h-1.5 rounded-[9999px] bg-emerald-500"></div>
                            <span>Git / GitHub</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                            <div className="w-1.5 h-1.5 rounded-[9999px] bg-emerald-500"></div>
                            <span>JWT (Autenticação)</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                            <div className="w-1.5 h-1.5 rounded-[9999px] bg-emerald-500"></div>
                            <span>JSON</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                            <div className="w-1.5 h-1.5 rounded-[9999px] bg-emerald-500"></div>
                            <span>Express.js</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                            <div className="w-1.5 h-1.5 rounded-[9999px] bg-emerald-500"></div>
                            <span>Testes com Jest</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-[rgba(31,41,55,0.5)] p-6 rounded-xl border border-gray-700 transition-all duration-300 ease-in-out hover:border-amber-400">
                    <div className="flex items-center gap-3 mb-4">
                        <FaPaintBrush className="text-xl text-amber-400"/>
                        <h3 className="text-xl font-bold">Design</h3>
                    </div>
                    <ul className="list-none">
                        <li className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                            <div className="w-1.5 h-1.5 rounded-[9999px] bg-amber-400"></div>
                            <span>UI/UX Design</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                            <div className="w-1.5 h-1.5 rounded-[9999px] bg-amber-400"></div>
                            <span>Figma</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                            <div className="w-1.5 h-1.5 rounded-[9999px] bg-amber-400"></div>
                            <span>Responsive Design</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills