import { z } from "zod";

export const updateUserValidatorSchema = z.object({
  name: z.string(),
  number: z.string(),
});

export type tUpdateUserValidator = z.infer<typeof updateUserValidatorSchema>;
