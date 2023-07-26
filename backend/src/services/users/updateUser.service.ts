import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import {
  tUpdateUserRequest,
  tUserResponse,
} from "../../interfaces/users.interface";
import { Repository } from "typeorm";
import { userResponseSchema } from "../../schemas/users.schema";
export const updateUserService = async (
  userId: number,
  newUserData: tUpdateUserRequest
): Promise<tUpdateUserRequest> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const userData: User | null = await userRepo.findOneBy({ id: userId });

  const updateUser: User = userRepo.create({
    ...userData,
    ...newUserData,
  });

  await userRepo.save(updateUser);

  const returnUser: tUserResponse = userResponseSchema.parse(updateUser);

  return returnUser;
};
