import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Contact } from "../../entities/contacts.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
export const verifyIfContactNumberIsAlreadyRegistered = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const contactNumber: string = req.body.number;

  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contact = await contactRepo.findOne({
    where: { number: contactNumber },
  });

  if (contact) {
    throw new AppError("Contact number is already registered", 409);
  }

  return next();
};
