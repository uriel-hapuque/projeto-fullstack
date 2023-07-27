import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entities";
import { User } from "../../entities/users.entities";
import {
  tContactResponse,
  tContactsResponse,
  tUpdateContactRequest,
} from "../../interfaces/contact.interface";
import { Repository } from "typeorm";
import { contactResponseSchema } from "../../schemas/contact.schema";
export const updateContactService = async (
  contactId: number,
  userId: number,
  newContactData: tUpdateContactRequest
): Promise<tContactResponse> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepo.findOneBy({ id: userId });

  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contactData: Contact | null = await contactRepo.findOneBy({
    id: contactId,
  });

  const updatedContact: Contact = contactRepo.create({
    ...contactData,
    ...newContactData,
  });

  await contactRepo.save(updatedContact);

  const returnContact: tContactResponse =
    contactResponseSchema.parse(updatedContact);

  return returnContact;
};
