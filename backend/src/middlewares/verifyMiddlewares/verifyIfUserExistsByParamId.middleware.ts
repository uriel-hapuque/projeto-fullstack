import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
export const verifyIfUserExistsByParamId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId: number = parseInt(req.params.id);

  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepo.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("Usuário não encontrado", 404);
  }

  return next();
};
