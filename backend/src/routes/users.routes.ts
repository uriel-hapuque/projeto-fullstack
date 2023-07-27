import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  updateUserController,
} from "../controllers/users.controller";
import { validateRequestBody } from "../middlewares/validateMiddlewares/validateRequestBody.middleaware";
import { updateUserSchema, userRequestSchema } from "../schemas/users.schema";
import { verifyIfUserEmailAlreadyExists } from "../middlewares/verifyMiddlewares/verifyIfUserEmailAlreadyExists.middleware";
import { verifyIfUserNumberIsAlreadyRegistered } from "../middlewares/verifyMiddlewares/verifyIfUserNumberIsAlreadyRegistered.middleware";
import { validateToken } from "../middlewares/validateMiddlewares/validateToken.middleware";
import { verifyIfUserExistsByParamId } from "../middlewares/verifyMiddlewares/verifyIfUserExistsByParamId.middleware";
import { verifyIfIsAccountOwner } from "../middlewares/verifyMiddlewares/verifyIfIsAccountOwner.middleware";

export const usersRoutes: Router = Router();
usersRoutes.post(
  "",
  validateRequestBody(userRequestSchema),
  verifyIfUserEmailAlreadyExists,
  verifyIfUserNumberIsAlreadyRegistered,
  createUserController
);

usersRoutes.delete(
  "/:id",
  validateToken,
  verifyIfUserExistsByParamId,
  verifyIfIsAccountOwner,
  deleteUserController
);

usersRoutes.get("", getAllUsersController);

usersRoutes.patch(
  "/:id",
  validateToken,
  validateRequestBody(updateUserSchema),
  verifyIfUserExistsByParamId,
  verifyIfIsAccountOwner,
  verifyIfUserNumberIsAlreadyRegistered,
  updateUserController
);
