import { z } from "zod";
import {
  updateUserSchema,
  userRequestSchema,
  userResponseSchema,
  userSchema,
  usersResponseSchema,
} from "../schemas/users.schema";

export type tUser = z.infer<typeof userSchema>;
export type tUsersResponse = z.infer<typeof usersResponseSchema>;
export type tUserRequest = z.infer<typeof userRequestSchema>;
export type tUserResponse = z.infer<typeof userResponseSchema>;
export type tUpdateUserRequest = z.infer<typeof updateUserSchema>;
