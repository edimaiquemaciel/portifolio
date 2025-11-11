import perfil from "../assets/foto-perfil.jpg"
function Hero() {
  return (
    <section
      id="inicio"
      className=" flex justify-center items-center min-h-screen"
    >
      <div className="grid grid-cols-[54%_1fr] gap-40 items-center justify-between max-w-7xl w-full mx-auto px-4 flex-wrap">
        <article>
          <h2 className="text-5xl font-bold mb-6 leading-[1.1]">
            Olá, eu sou{" "}
            <span className="block bg-linear-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Edimaique Maciel
            </span>
          </h2>
          <p className="text-gray-300 text-[1.3rem] leading-[1.6] mb-8">
            Desenvolvedor Web Full Stack apaixonado por criar experiências
            digitais incríveis e soluções tecnológicas inovadoras.
          </p>
          <div className="flex gap-4 leading-0.5">
            <button className="bg-linear-to-r from-indigo-500 to-violet-500 text-white py-3 px-8 text-[0.8333rem]  font-bold rounded-lg cursor-pointer transition-colors duration-300 ease-in-out text-center border-none leading-[1.3] hover:from-[#4338ca] hover:to-[#6d28d9]" type="button" aria-label="Ver meus projetos">
              Ver Projetos
            </button>
            <button className="py-3 px-8 rounded-lg cursor-pointer transition-all duration-300 ease-in-out text-center bg-transparent text-white text-[0.8333rem] font-bold border-2 border-gray-600 leading-[1.3] hover:border-indigo-500 hover:text-violet-500" type="button" aria-label="Entrar em contato">
              Entrar em Contato
            </button>
          </div>
        </article>

        <aside>
          <div className="w-80 h-80 relative m-auto">
            <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-violet-500 rounded-[9999px] blur-[48px] opacity-[0.3] animate-pulse" aria-hidden="true"></div>
            <img className="relative z-10 w-full h-full object-cover rounded-[9999px] border-gray-700 border-4" src={perfil} alt="Foto de Edimaique Maciel" />
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero