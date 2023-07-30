import { z } from "zod";

export const updateContactValidatorSchema = z.object({
  name: z.string(),
  number: z.string(),
  email: z.string().email(),
});

export type tUpdateContactValidator = z.infer<
  typeof updateContactValidatorSchema
>;
