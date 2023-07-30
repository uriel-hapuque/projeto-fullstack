import { z } from "zod";

export const registerContactValidatorSchema = z.object({
  name: z.string(),
  number: z.string(),
  email: z.string().email(),
});

export type tRegisterContactValidator = z.infer<
  typeof registerContactValidatorSchema
>;
