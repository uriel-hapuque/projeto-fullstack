import { Request, Response } from "express";
import { User } from "../entities/users.entities";
import {
  tUpdateUserRequest,
  tUserRequest,
  tUserResponse,
} from "../interfaces/users.interface";
import { createUserService } from "../services/users/createUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { updateUserService } from "../services/users/updateUser.service";
import { getUserService } from "../services/users/getUser.service";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response<User>> => {
  const userDataReq: tUserRequest = req.body;

  const userResponse: tUserResponse = await createUserService(userDataReq);

  return res.status(201).json(userResponse);
};

export const getUserController = async (
  req: Request,
  res: Response
): Promise<Response<User>> => {
  const userId: number = parseInt(req.params.id);
  const users: tUserResponse = await getUserService(userId);

  return res.status(200).json(users);
};

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response<User>> => {
  const userId: number = parseInt(req.params.id);

  await deleteUserService(userId);

  return res.status(204).send();
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response<User>> => {
  const userId: number = parseInt(req.params.id);
  const newUserData: tUpdateUserRequest = req.body;

  const updateUser: tUpdateUserRequest = await updateUserService(
    userId,
    newUserData
  );

  return res.status(200).json(updateUser);
};
