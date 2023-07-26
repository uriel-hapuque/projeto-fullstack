import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { tUserRequest, tUserResponse } from "../../interfaces/users.interface";
import { Repository } from "typeorm";
import { userResponseSchema } from "../../schemas/users.schema";

export const createUserService = async (
  userData: tUserRequest
): Promise<tUserResponse> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepo.create(userData);

  await userRepo.save(user);

  const returnUser: tUserResponse = userResponseSchema.parse(user);

  return returnUser;
};
