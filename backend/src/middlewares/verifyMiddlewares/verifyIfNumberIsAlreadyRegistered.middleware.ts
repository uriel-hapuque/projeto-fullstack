import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
export const verifyIfNumberIsAlreadyRegistered = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userNumber: string = req.body.number;

  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepo.findOne({ where: { number: userNumber } });

  if (user) {
    throw new AppError("Number is already registered", 409);
  }

  return next();
};
