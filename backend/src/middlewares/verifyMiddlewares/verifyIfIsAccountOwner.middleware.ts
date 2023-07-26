import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
export const verifyIfIsAccountOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userParamId: number = parseInt(req.params.id);
  const userTokenId: number = parseInt(res.locals.id);
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepo.findOneBy({ id: userParamId });

  if (userParamId !== userTokenId) {
    throw new AppError("Necessário ser dono da conta para deletar!", 404);
  }

  return next();
};
