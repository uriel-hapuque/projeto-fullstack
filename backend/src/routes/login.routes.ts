import { Router } from "express";
import { validateRequestBody } from "../middlewares/validateMiddlewares/validateRequestBody.middleaware";
import { loginRequestSchema } from "../schemas/login.schema";
import { createTokenController } from "../controllers/login.controller";
import { verifyIfEmailNotExists } from "../middlewares/verifyMiddlewares/verifyIfEmailNotExists.middleware";

export const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  validateRequestBody(loginRequestSchema),
  verifyIfEmailNotExists,
  createTokenController
);
