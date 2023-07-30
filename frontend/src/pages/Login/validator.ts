import { z } from "zod";

export const loginValidtorSchema = z.object({
  email: z.string().email("Deve ser um e-mail válido!"),
  password: z.string().nonempty("Senha é necessária"),
});

export type tLoginValidator = z.infer<typeof loginValidtorSchema>;
