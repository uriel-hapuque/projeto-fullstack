import { z } from "zod";
import {
  contactRequestSchema,
  contactResponseSchema,
  contactSchema,
  contactsResponseSchema,
  updateContactRequestSchema,
} from "../schemas/contact.schema";
export type tContact = z.infer<typeof contactSchema>;
export type tContactResponse = z.infer<typeof contactResponseSchema>;
export type tContactRequest = z.infer<typeof contactRequestSchema>;
export type tUpdateContactRequest = z.infer<typeof updateContactRequestSchema>;
export type tContactsResponse = z.infer<typeof contactsResponseSchema>;
