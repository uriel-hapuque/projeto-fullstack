import { Request, Response } from "express";
import { tLoginRequest } from "../interfaces/login.interface";
import { createTokenService } from "../services/login/createToken.service";

export const createTokenController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const loginData: tLoginRequest = req.body;

  const login = await createTokenService(loginData);

  return res.status(200).json(login);
};
