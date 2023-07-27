import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { Repository } from "typeorm";
import { AppError } from "../../error";
import { Contact } from "../../entities/contacts.entities";
export const verifyIfIsContactOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userTokenId: number = parseInt(res.locals.id);
  const contactId: number = parseInt(req.params.contactId);

  const userRepo: Repository<User> = AppDataSource.getRepository(User);
  const conatctRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const tokenUser: any = await userRepo.findOneBy({ id: userTokenId });

  const contact: Contact | null = await conatctRepo.findOne({
    where: { id: contactId },
    relations: ["user"],
  });

  if (contact?.user.id !== tokenUser.id) {
    throw new AppError(
      "Necessário ser o mesmo usuário que registrou o contato para editá-lo!",
      404
    );
  }

  return next();
};
