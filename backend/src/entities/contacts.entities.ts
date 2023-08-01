import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./users.entities";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "varchar", length: 45 })
  number: string;

  @CreateDateColumn({ type: "date" })
  createdAt: Date | string;

  @ManyToOne(() => User, (user) => user.contacts, { onDelete: "CASCADE" })
  @JoinColumn()
  user: User;
}
