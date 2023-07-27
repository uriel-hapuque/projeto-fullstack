import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContact.service";
import {
  tContactRequest,
  tUpdateContactRequest,
} from "../interfaces/contact.interface";
import { Contact } from "../entities/contacts.entities";
import { getUsersContactsService } from "../services/contacts/getUserContacts.service";
import { updateContactService } from "../services/contacts/updateContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";

export const createContactController = async (
  req: Request,
  res: Response
): Promise<Response<Contact>> => {
  const userId: number = parseInt(res.locals.id);
  const contactData: tContactRequest = req.body;
  const contactResponse = await createContactService(contactData, userId);

  return res.status(201).json(contactResponse);
};
export const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response<Contact>> => {
  const contactId: number = parseInt(req.params.contactId);

  await deleteContactService(contactId);
  return res.status(204).send();
};
export const getUsersContactsController = async (
  req: Request,
  res: Response
): Promise<Response<Contact>> => {
  const userId: number = parseInt(res.locals.id);

  const userContacts: Contact[] | Contact | null =
    await getUsersContactsService(userId);

  return res.status(200).json(userContacts);
};

export const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response<Contact>> => {
  const userId: number = parseInt(res.locals.id);

  const contactId: number = parseInt(req.params.contactId);

  const newContactData: tUpdateContactRequest = req.body;

  const updatedContact: tUpdateContactRequest = await updateContactService(
    contactId,
    userId,
    newContactData
  );

  return res.status(200).json(updatedContact);
};
