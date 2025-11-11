import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { ErrorMessage } from '@hookform/error-message';
import toast from "react-hot-toast";

import { formSchema } from "../schema/formSchema";

function Contact() {
  const {register, handleSubmit, reset, formState:{isSubmitting, errors}} = useForm({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("message", data.message);
  formData.append("_captcha", "false");

  try {
    const response = await fetch("https://formsubmit.co/ajax/edimaiqueacacio@gmail.com", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (response.ok) {
      toast.success("Mensagem enviada com sucesso!");
      reset();
    } else {
      console.error("FormSubmit error:", result);
      toast.error("Erro ao enviar a mensagem.");
    }
  } catch (err) {
    console.error(err);
    toast.error("Erro ao enviar a mensagem.");
  }
};


  return (
    <section id="contato" className="py-24 px-4">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <p className="text-[1.125rem] text-gray-400 max-w-2xl mx-auto leading-[1.6]">
            Vamos conversar sobre seu próximo projeto ou oportunidade de trabalho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* ESQUERDA */}
          <div className="flex flex-col">
            <h3 className="text-[2rem] font-bold mb-6">Vamos trabalhar juntos</h3>
            <p className="text-gray-300 mb-8 leading-[1.6]">
              Estou sempre aberto a novas oportunidades e projetos interessantes.
              Se você tem uma ideia incrível ou precisa de ajuda para desenvolver
              seu próximo projeto, entre em contato comigo!
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:edimaiqueacacio@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700 no-underline text-white transition-all duration-300 ease-in-out hover:border-indigo-500/50"
              >
                <div className="p-3 bg-indigo-500/20 rounded-md">
                  <FaEnvelope className="text-indigo-500 text-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold mb-1 text-base">Email</p>
                  <p className="text-gray-400 text-sm break-all">
                    edimaiqueacacio@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/edimaique-maciel"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700 no-underline text-white transition-all duration-300 ease-in-out hover:border-indigo-500/50"
              >
                <div className="p-3 bg-indigo-500/20 rounded-md">
                  <FaLinkedinIn className="text-indigo-500 text-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold mb-1 text-base">LinkedIn</p>
                  <p className="text-gray-400 text-sm break-all">
                    linkedin.com/in/edimaique-maciel
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/edimaiquemaciel"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700 no-underline text-white transition-all duration-300 ease-in-out hover:border-indigo-500/50"
              >
                <div className="p-3 bg-indigo-500/20 rounded-md">
                  <FaGithub className="text-indigo-500 text-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold mb-1 text-base">GitHub</p>
                  <p className="text-gray-400 text-sm break-all">
                    github.com/edimaiquemaciel
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* DIREITA - FORMULÁRIO */}
          <div className="w-full flex items-start">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">
              <input type="hidden" name="_captcha" value="false" />

              <div className="flex flex-col w-full">
                <label htmlFor="name" className="text-[0.9rem] font-medium mb-2 text-white">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  {...register("name")}
                  className="w-full py-[0.90rem] px-5 bg-gray-800 border border-gray-700 rounded-lg text-white text-base outline-none transition-all duration-300 ease-in-out leading-[1.3] focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 placeholder:text-gray-400"
                  placeholder="Seu nome"
                />
                <ErrorMessage errors={errors}  name="name"  render={({ message }) => <p className="text-red-500 text-[10px] mt-1">{message}</p>}/>
              </div>

              <div className="flex flex-col w-full">
                <label htmlFor="email" className="text-[0.9rem] font-medium mb-2 text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...register("email")}
                  className="w-full py-[0.90rem] px-5 bg-gray-800 border border-gray-700 rounded-lg text-white text-base outline-none transition-all duration-300 ease-in-out leading-[1.3] focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 placeholder:text-gray-400"
                  placeholder="seu@email.com"
                />
                <ErrorMessage errors={errors}  name="email"  render={({ message }) => <p className="text-red-500 text-[10px] mt-1">{message}</p>}/>
                
              </div>

              <div className="flex flex-col w-full">
                <label htmlFor="message" className="text-[0.9rem] font-medium mb-2 text-white">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  {...register("message")}
                  className="w-full py-[0.90rem] px-5 bg-gray-800 border border-gray-700 rounded-lg text-white text-base outline-none transition-all duration-300 ease-in-out leading-[1.3] focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 placeholder:text-gray-400"
                  placeholder="Sua mensagem..."
                ></textarea>
                <ErrorMessage errors={errors}  name="message"  render={({ message }) => <p className="text-red-500 text-[10px] mt-1">{message}</p>}/>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-7 font-semibold rounded-lg cursor-pointer text-white border-0 transition-all duration-300 ease-in-out text-[13px] leading-[1.3]
                  ${isSubmitting
                    ? "bg-indigo-700 cursor-not-allowed"
                    : "bg-linear-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-purple-600"
                  }`}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
