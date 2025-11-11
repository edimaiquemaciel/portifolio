import { FaPalette, FaCode } from "react-icons/fa";

function About() {
  return (
    <section id="sobre" className="bg-gray-800/50 py-24 px-4">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">Sobre mim</h2>
          <p className="text-[1.125rem] text-gray-400 max-w-2xl mx-auto leading-[1.6]">
            Conheça minha jornada como desenvolvedor e minhas paixões na tecnologia
          </p>
        </div> 
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="mb-0">
            <h3 className="text-[2rem] font-bold mb-6">Minha História</h3>
            <p className="text-gray-300 mb-6 leading-[1.6]">
                Sou um desenvolvedor web full stack com formação em Análise e Desenvolvimento de Sistemas e experiência prática em projetos que envolvem tanto o front-end quanto o
                back-end. Trabalho com tecnologias modernas como React.js, Vue.js, Java Spring Boot e Python,
                sempre buscando criar soluções funcionais, escaláveis e com foco em uma boa experiência
                do usuário.
            </p>
            <p className="text-gray-300 mb-6 leading-[1.6]">
                Ao longo da minha trajetória, participei de diversos projetos colaborativos que fortaleceram
                minhas habilidades em desenvolvimento de APIs REST, integração com bancos de dados,
                autenticação JWT, versionamento com Git, testes automatizados com Jest, além de boas práticas
                de arquitetura e deploy de aplicações web. Sou apaixonado por aprender novas tecnologias e
                por transformar ideias em soluções reais que geram impacto.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-indigo-500">
                <FaCode />
                <span>1+ anos de experiência</span>
              </div>
              <div className="flex items-center gap-2 text-indigo-500">
                <FaPalette />
                <span>10+ projetos concluídos</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600">
              <h4 className="text-indigo-500 font-bold mb-2">Frontend</h4>
              <p className="text-sm text-gray-300">React, Vue.js, JavaScript, TypeScript</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600">
              <h4 className="text-violet-500 font-bold mb-2">Backend</h4>
              <p className="text-sm text-gray-300">Java, Node.js, Python, PostgreSQL, MySQL</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600">
              <h4 className="text-green-500 font-bold mb-2">Ferramentas/Tecnologias</h4>
              <p className="text-sm text-gray-300">Git, JWT (Autenticação), JSON, Express.js</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600">
              <h4 className="text-yellow-400 font-bold mb-2">Design</h4>
              <p className="text-sm text-gray-300">UI/UX, Figma, Responsive Design</p>
            </div>
          </div>
        </div>
      </div>
     </section>
  )
}

export default About