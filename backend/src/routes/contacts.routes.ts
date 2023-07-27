import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  getUsersContactsController,
  updateContactController,
} from "../controllers/contacts.controller";
import { validateRequestBody } from "../middlewares/validateMiddlewares/validateRequestBody.middleaware";
import {
  contactRequestSchema,
  updateContactRequestSchema,
} from "../schemas/contact.schema";
import { validateToken } from "../middlewares/validateMiddlewares/validateToken.middleware";
import { verifyIfIsAccountOwner } from "../middlewares/verifyMiddlewares/verifyIfIsAccountOwner.middleware";
import { verifyIfIsContactOwner } from "../middlewares/verifyMiddlewares/verifyIfIsContactOwner.middleware";

export const contactsRoutes: Router = Router();

contactsRoutes.post(
  "/",
  validateToken,
  validateRequestBody(contactRequestSchema),
  createContactController
);

contactsRoutes.get("/", validateToken, getUsersContactsController);

contactsRoutes.patch(
  "/:contactId",
  validateToken,
  validateRequestBody(updateContactRequestSchema),
  verifyIfIsContactOwner,
  updateContactController
);

contactsRoutes.delete(
  "/:contactId",
  validateToken,
  verifyIfIsContactOwner,
  deleteContactController
);
