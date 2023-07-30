import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import {
  userResponseSchema,
  usersResponseSchema,
} from "../../schemas/users.schema";
import {
  tUserResponse,
  tUsersResponse,
} from "../../interfaces/users.interface";

export const getUserService = async (
  userId: number
): Promise<tUserResponse> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepo.findOneBy({ id: userId });

  const returnUser: tUserResponse = userResponseSchema.parse(user);

  return returnUser;
};
