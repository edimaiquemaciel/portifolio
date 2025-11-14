
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#111827d3] backdrop-blur-xs border-b-gray-800 border-b z-50 px-0">
      <div className="flex justify-between items-center mx-20 py-4 flex-wrap">
        <h1 className="flex flex-col items-center">
          <span className="flex items-center gap-2">
            <span className="text-indigo-400 text-3xl font-bold">
              &lt;/&gt;
            </span>
            <span className="text-3xl font-bold bg-linear-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
              Edimaique Maciel
            </span>
          </span>

          <span className="text-xs tracking-[0.2em] text-indigo-400 mt-1 ml-2">
            FULL STACK DEVELOPER
          </span>
        </h1>
        <nav>
          <ul className="flex space-x-8 list-none">
            <li>
              <a
                className="text-white no-underline capitalize transition-colors duration-200 ease-in-out hover:text-indigo-500"
                href="#inicio"
              >
                Início
              </a>
            </li>
            <li>
              <a
                className="text-white no-underline capitalize transition-colors duration-200 ease-in-out hover:text-indigo-500"
                href="#sobre"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                className="text-white no-underline capitalize transition-colors duration-200 ease-in-out hover:text-indigo-500"
                href="#habilidades"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                className="text-white no-underline capitalize transition-colors duration-200 ease-in-out hover:text-indigo-500"
                href="#projetos"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                className="text-white no-underline capitalize transition-colors duration-200 ease-in-out hover:text-indigo-500"
                href="#contato"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header