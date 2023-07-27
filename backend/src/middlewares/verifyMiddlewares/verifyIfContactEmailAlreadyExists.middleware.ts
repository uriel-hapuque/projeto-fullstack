import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Contact } from "../../entities/contacts.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
export const verifyIfContactEmailAlreadyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const contactEmail: string = req.body.email;

  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contact = await contactRepo.findOne({ where: { email: contactEmail } });

  if (contact) {
    throw new AppError("Contact email already exists", 409);
  }

  return next();
};
