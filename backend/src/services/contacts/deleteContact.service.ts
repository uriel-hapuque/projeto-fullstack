import { Repository } from "typeorm";
import { Contact } from "../../entities/contacts.entities";
import { AppDataSource } from "../../data-source";

export const deleteContactService = async (
  contactId: number
): Promise<void> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactRepo.findOneBy({
    id: contactId,
  });

  await contactRepo.remove(contact!);
};
