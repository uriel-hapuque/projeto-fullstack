import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { usersResponseSchema } from "../../schemas/users.schema";
import {
  tUserResponse,
  tUsersResponse,
} from "../../interfaces/users.interface";

export const getAllUsersService = async (): Promise<tUsersResponse> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const users: User[] = await userRepo.find();

  const returnUsers: tUsersResponse = usersResponseSchema.parse(users);

  return returnUsers;
};
