import { z } from "zod";

export const contactSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  number: z.string().max(45),
  createdAt: z.string(),
});

export const contactResponseSchema = contactSchema.omit({ id: true });

export const contactRequestSchema = contactSchema.omit({
  createdAt: true,
  id: true,
});
export const contactsResponseSchema = contactSchema.array();
export const updateContactRequestSchema = contactRequestSchema;
