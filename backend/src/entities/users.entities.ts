import { Entity } from "typeorm";
import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import { Contact } from "./contacts.entities";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @Column({ type: "varchar", length: 45 })
  number: string;

  @CreateDateColumn({ type: "date" })
  createdAt: Date | string;

  @OneToMany(() => Contact, (contact) => contact.user, { cascade: true })
  contacts: Contact[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPass() {
    const isEncrypted: number = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}
