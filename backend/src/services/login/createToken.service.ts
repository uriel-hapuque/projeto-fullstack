import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { AppError } from "../../error";
import { tLoginRequest } from "../../interfaces/login.interface";
import { Repository } from "typeorm";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const createTokenService = async (
  loginData: tLoginRequest
): Promise<string | void> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepo.findOneBy({
    email: loginData.email,
  });

  if (!user) {
    throw new AppError("credenciais inválidas", 401);
  }

  const passIsEqual: boolean = await compare(loginData.password, user.password);

  if (!passIsEqual) {
    throw new AppError("credenciais inválidas", 401);
  }

  const token = jwt.sign({ name: user.name }, process.env.SECRET_KEY!, {
    expiresIn: "24h",
    subject: String(user.id),
  });

  return token;
};
