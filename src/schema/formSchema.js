import {z} from "zod";

export const formSchema = z.object({
    name: z.string().min(2, "Digite seu nome completo"),
    email: z.string().email("E-mail inválido"),
    message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
})