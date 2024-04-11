import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { User } from '../users/user.entity';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { MedicalStaff } from '../medical-staff/medical-staff.entity';
import { MedicalHistory } from '../medical-history/medical-history.entity';

@Entity('patients')
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @IsOptional()
  @IsDate()
  @Column({ type: 'date', nullable: true })
  birthday?: Date;

  @IsOptional()
  @IsString()
  @Column({ nullable: true })
  address?: string;

  @IsOptional()
  @IsString()
  @Column({ nullable: true })
  phone?: string;

  @IsOptional()
  @IsString()
  @Column({ nullable: true })
  passport?: string;

  @ManyToOne(() => User)
  user: User;

  @OneToMany(() => MedicalHistory, (medicalHistory) => medicalHistory.patient, {
    nullable: true,
  })
  medicalHistory: MedicalHistory[];

  @ManyToMany(() => MedicalStaff, (medicalStaff) => medicalStaff.patients, {
    nullable: true,
  })
  @JoinTable()
  medicalStaff: MedicalStaff[];
}
