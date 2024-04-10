import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { IsEmail, IsNotEmpty, Length, IsOptional } from 'class-validator';
import * as bcrypt from 'bcrypt';
import { Role } from '../roles/role.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsNotEmpty()
  @Length(2, 20)
  @Column()
  firstName: string;

  @IsNotEmpty()
  @Length(2, 20)
  @Column()
  lastName: string;

  @IsOptional()
  @Length(2, 20)
  @Column({ nullable: true })
  middleName: string;

  @IsNotEmpty()
  @IsEmail()
  @Column({ unique: true })
  email: string;

  @IsNotEmpty()
  @Column()
  password: string;

  @IsNotEmpty()
  @Column()
  roleId: number;

  @Column({ default: false })
  @IsOptional()
  isActive?: boolean;

  @UpdateDateColumn()
  @IsOptional()
  lastUpdateDate?: Date;

  @UpdateDateColumn()
  birthdate?: string;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 12);
  }
}
