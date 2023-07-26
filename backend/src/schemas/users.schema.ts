import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  password: z.string().max(120),
  number: z.string().max(45),
  createdAt: z.string(),
});

export const userResponseSchema = userSchema.omit({ password: true });

export const userRequestSchema = userSchema.omit({ id: true, createdAt: true });

export const usersResponseSchema = userSchema.omit({ password: true }).array();

export const updateUserSchema = userSchema.omit({
  createdAt: true,
  email: true,
  id: true,
  password: true,
});
