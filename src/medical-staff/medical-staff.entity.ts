import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Specialty } from '../specialties/specialty.entity';
import { Cabinet } from '../cabinets/cabinet.entity';
import { IsOptional } from 'class-validator';
import { Patient } from '../patients/patient.entity';

@Entity('medical_staff')
export class MedicalStaff {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Specialty)
  specialty: Specialty;

  @IsOptional()
  @Column()
  phone?: string;

  @IsOptional()
  @ManyToOne(() => Cabinet, { nullable: true })
  cabinet?: Cabinet;

  @ManyToMany(() => Patient, (patient) => patient.medicalStaff)
  @JoinTable()
  patients: MedicalStaff[];
}
