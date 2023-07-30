import { z } from "zod";

export const registerValidatorSchema = z.object({
  name: z.string(),
  email: z.string().email("Deve ser um e-mail válido!"),
  password: z.string().nonempty("Senha é necessária"),
  number: z.string(),
});

export type tRegisterValidator = z.infer<typeof registerValidatorSchema>;
