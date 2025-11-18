import perfil from "../assets/foto-perfil.jpg";

function Hero() {
  return (
    <section
      id="inicio"
      className="
        flex justify-center items-center min-h-screen
        px-4 
      "
    >
      <div
        className="
          grid grid-cols-[54%_1fr] gap-40 items-center justify-between
          max-w-7xl w-full mx-auto
          
          /* Tablet */
          max-[1024px]:gap-20
          
          /* Mobile grande */
          max-[768px]:grid-cols-1 max-[768px]:gap-16 max-[768px]:text-center
          
          /* Mobile pequeno */
          max-[480px]:gap-12
        "
      >
        {/* Texto */}
        <article
          className="
            max-[768px]:order-2
            max-[768px]:px-2
          "
        >
          <h2
            className="
              lg:text-5xl 
              font-bold 
              mb-6 
              leading-[1.1] 
              md:text-[2.5rem]

              max-[768px]:text-[2rem]
              max-[480px]:text-[1.7rem]
            "
          >
            Olá, eu sou{" "}
            <span
              className="
                block 
                bg-linear-to-r from-indigo-500 to-violet-500 
                bg-clip-text text-transparent
              "
            >
              Edimaique Maciel
            </span>
          </h2>

          <p
            className="
              text-gray-300 
              text-[1.3rem] 
              leading-[1.6] 
              mb-8

              max-[768px]:text-[1.1rem]
              max-[480px]:text-[1rem]
            "
          >
            Desenvolvedor Web Full Stack apaixonado por criar experiências
            digitais incríveis e soluções tecnológicas inovadoras.
          </p>

          {/* Botões */}
          <div
            className="
              flex gap-4 leading-0.5
              max-[768px]:justify-center
              max-[480px]:flex-col max-[480px]:gap-4
            "
          >
            <button
              onClick={() =>
                document
                  .getElementById("projetos")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="
                bg-linear-to-r from-indigo-500 to-violet-500 
                text-white 
                py-3 px-8 
                text-[0.8333rem] 
                font-bold 
                rounded-lg 
                cursor-pointer 
                transition-colors 
                duration-300 
                ease-in-out 
                text-center 
                border-none 
                leading-[1.3]
                hover:from-[#4338ca] hover:to-[#6d28d9]

                max-[480px]:w-full
              "
              type="button"
            >
              Ver Projetos
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contato")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="
                py-3 px-8 
                rounded-lg 
                cursor-pointer 
                transition-all 
                duration-300 
                ease-in-out 
                text-center 
                bg-transparent 
                text-white 
                text-[0.8333rem] 
                font-bold 
                border-2 border-gray-600 
                leading-[1.3] 
                hover:border-indigo-500 
                hover:text-violet-500

                max-[480px]:w-full
              "
              type="button"
            >
              Entrar em Contato
            </button>
          </div>
        </article>

        {/* FOTO */}
        <aside
          className="
            max-[768px]:order-1
          "
        >
          <div
            className="
              w-80 h-80 relative m-auto
            
              max-[1024px]:w-72 max-[1024px]:h-72
              max-[768px]:w-64 max-[768px]:h-64
              max-[480px]:w-52 max-[480px]:h-52
            "
          >
            <div
              className="
                absolute inset-0 
                bg-linear-to-r from-indigo-500 to-violet-500 
                rounded-[9999px] 
                blur-[48px] 
                opacity-[0.3] 
                animate-pulse
              "
              aria-hidden="true"
            ></div>

            <img
              className="
                relative z-10 w-full h-full object-cover rounded-[9999px] 
                border-gray-700 border-4
              "
              src={perfil}
              alt="Foto de Edimaique Maciel"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
