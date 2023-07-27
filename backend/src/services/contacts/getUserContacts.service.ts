import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entities";
import { Repository } from "typeorm";
import { Response, Request } from "express";
import { tContactsResponse } from "../../interfaces/contact.interface";
import { User } from "../../entities/users.entities";
export const getUsersContactsService = async (
  userId: number
): Promise<Contact[] | Contact> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: any = await userRepo.findOneBy({ id: userId });
  console.log(user);

  const contacts: Contact[] = await contactRepo.findBy({ user: user });

  console.log(contacts);

  return contacts;
};
