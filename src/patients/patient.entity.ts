import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { IsDate, IsOptional, IsString } from 'class-validator';

@Entity('patients')
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @IsDate()
  @Column({ type: 'date', nullable: true })
  birthday: Date;

  @IsOptional()
  @IsString()
  @Column({ nullable: true })
  address: string;

  @IsOptional()
  @IsString()
  @Column({ nullable: true })
  phone: string;

  @IsOptional()
  @IsString()
  @Column({ nullable: true })
  passport: string;

  @ManyToOne(() => User)
  user: User;
}
