import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
export const verifyIfEmailAlreadyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userEmail: string = req.body.email;

  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepo.findOne({ where: { email: userEmail } });

  if (user) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
