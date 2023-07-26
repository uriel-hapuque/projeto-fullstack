import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  updateUserController,
} from "../controllers/users.controller";
import { validateRequestBody } from "../middlewares/validateMiddlewares/validateRequestBody.middleaware";
import { updateUserSchema, userRequestSchema } from "../schemas/users.schema";
import { verifyIfEmailAlreadyExists } from "../middlewares/verifyMiddlewares/verifyIfEmailAlreadyExists.middleware";
import { verifyIfNumberIsAlreadyRegistered } from "../middlewares/verifyMiddlewares/verifyIfNumberIsAlreadyRegistered.middleware";
import { validateToken } from "../middlewares/validateMiddlewares/validateToken.middleware";
import { verifyIfUserExistsByParamId } from "../middlewares/verifyMiddlewares/verifyIfUserExistsByParamId.middleware";
import { verifyIfIsAccountOwner } from "../middlewares/verifyMiddlewares/verifyIfIsAccountOwner.middleware";

export const usersRoutes: Router = Router();
usersRoutes.post(
  "",
  validateRequestBody(userRequestSchema),
  verifyIfEmailAlreadyExists,
  verifyIfNumberIsAlreadyRegistered,
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
  verifyIfNumberIsAlreadyRegistered,
  updateUserController
);
