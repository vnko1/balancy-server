import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";

import { AccentColorEnum, LanguageEnum, RoleEnum, ThemeEnum } from "src/types";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  username: string;

  @Exclude()
  @Column({ nullable: true })
  password: string;

  @Column({ nullable: false, default: RoleEnum.User })
  role: string;

  @Column({ nullable: true })
  image: string;

  @Column({ default: 0, nullable: true })
  points: number;

  @Column({ type: "enum", enum: LanguageEnum, default: LanguageEnum.Ukrainian })
  language: LanguageEnum;

  @Column({ default: false })
  emailVerified: boolean;

  @Exclude()
  @Column({ nullable: true })
  emailVerificationToken: string;

  @Exclude()
  @Column({ nullable: true })
  passwordResetToken: string;

  @Exclude()
  @Column({ nullable: true })
  googleToken: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isLoggedIn: boolean;

  @Column({ default: true })
  memeReaction: boolean;

  @Column({ default: false })
  isAutoGenerateSubTasks: boolean;

  @Column({ type: "integer", default: 6 })
  taskMinutes: number;

  @Column({
    type: "enum",
    enum: AccentColorEnum,
    default: AccentColorEnum.Default,
  })
  accentColor: AccentColorEnum;

  @Column({ type: "enum", enum: ThemeEnum, default: ThemeEnum.Dark })
  theme: ThemeEnum;

  @Column({ type: "varchar", nullable: true })
  createdAt: string;

  @Column({ type: "varchar", nullable: true })
  updatedAt: string;

  @Exclude()
  @Column({ type: "varchar", nullable: true })
  deletedAt: string;
}
