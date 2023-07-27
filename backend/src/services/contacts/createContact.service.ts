import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entities";
import { User } from "../../entities/users.entities";
import { tContactRequest } from "../../interfaces/contact.interface";
import { Repository } from "typeorm";

export const createContactService = async (
  contactData: tContactRequest,
  userId: number
): Promise<any> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: any = await userRepo.findOneBy({ id: userId });

  const contact = contactRepo.create({ ...contactData, user: user! });

  await contactRepo.save(contact);

  return contact;
};
