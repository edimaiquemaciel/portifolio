import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50 
        bg-[#111827d3] backdrop-blur-xs border-b border-b-gray-800
      "
    >
      <div
        className="
          flex justify-between items-center mx-20 py-4 flex-wrap
          max-[1024px]:mx-10
          max-[768px]:mx-6
          max-[640px]:mx-4 max-[640px]:py-3
        "
      >
        {/* LOGO */}
        <h1
          className="
            flex flex-col items-center
            max-[640px]:text-center
          "
        >
          <span className="flex items-center gap-2 max-[640px]:gap-1">
            <span className="text-indigo-400 text-3xl font-bold max-[640px]:text-2xl">
              &lt;/&gt;
            </span>

            <span
              className="
                text-3xl font-bold bg-linear-to-r from-indigo-400 to-violet-500 
                bg-clip-text text-transparent
                max-[640px]:text-2xl
              "
            >
              Edimaique Maciel
            </span>
          </span>

          <span
            className="
              text-xs tracking-[0.2em] text-indigo-400 mt-1 ml-2
              max-[640px]:ml-0 max-[640px]:tracking-[0.15em]
            "
          >
            FULL STACK DEVELOPER
          </span>
        </h1>

        {/* BOTÃO MENU (MOBILE) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            hidden max-[640px]:flex 
            text-white text-3xl 
            transition-transform duration-200
          "
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* NAV - DESKTOP */}
        <nav className="max-[640px]:hidden">
          <ul className="flex space-x-8 list-none">
            <li>
              <a className="text-white hover:text-indigo-500 transition" href="#inicio">
                Início
              </a>
            </li>
            <li>
              <a className="text-white hover:text-indigo-500 transition" href="#sobre">
                Sobre
              </a>
            </li>
            <li>
              <a className="text-white hover:text-indigo-500 transition" href="#habilidades">
                Habilidades
              </a>
            </li>
            <li>
              <a className="text-white hover:text-indigo-500 transition" href="#projetos">
                Projetos
              </a>
            </li>
            <li>
              <a className="text-white hover:text-indigo-500 transition" href="#contato">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* NAV MOBILE SLIDE DOWN */}
        <nav
          className={`
            w-full overflow-hidden transition-all duration-300 
            ${menuOpen ? "max-h-60 mt-4" : "max-h-0"}
            hidden max-[640px]:block
          `}
        >
          <ul
            className="
              flex flex-col items-center space-y-4 pb-4
            "
          >
            <li>
              <a
                className="text-white hover:text-indigo-500 transition"
                href="#inicio"
                onClick={() => setMenuOpen(false)}
              >
                Início
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-indigo-500 transition"
                href="#sobre"
                onClick={() => setMenuOpen(false)}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-indigo-500 transition"
                href="#habilidades"
                onClick={() => setMenuOpen(false)}
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-indigo-500 transition"
                href="#projetos"
                onClick={() => setMenuOpen(false)}
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-indigo-500 transition"
                href="#contato"
                onClick={() => setMenuOpen(false)}
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

export default Header;
