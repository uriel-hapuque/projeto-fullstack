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

import { verifyIfIsContactOwner } from "../middlewares/verifyMiddlewares/verifyIfIsContactOwner.middleware";
import { verifyIfContactNumberIsAlreadyRegistered } from "../middlewares/verifyMiddlewares/verifyIfContactNumberIsAlreadyRegistered.middleware";
import { verifyIfContactEmailAlreadyExists } from "../middlewares/verifyMiddlewares/verifyIfContactEmailAlreadyExists.middleware";

export const contactsRoutes: Router = Router();

contactsRoutes.post(
  "/",
  validateToken,
  validateRequestBody(contactRequestSchema),
  verifyIfContactNumberIsAlreadyRegistered,
  verifyIfContactEmailAlreadyExists,
  createContactController
);

contactsRoutes.get("/", validateToken, getUsersContactsController);

contactsRoutes.patch(
  "/:contactId",
  validateToken,
  validateRequestBody(updateContactRequestSchema),
  verifyIfIsContactOwner,
  verifyIfContactNumberIsAlreadyRegistered,
  verifyIfContactEmailAlreadyExists,
  updateContactController
);

contactsRoutes.delete(
  "/:contactId",
  validateToken,
  verifyIfIsContactOwner,
  deleteContactController
);
