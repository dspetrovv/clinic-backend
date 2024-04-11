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
import { MedicalStaff } from 'src/medical-staff/medical-staff.entity';
import { MedicalHistory } from 'src/medical-history/medical-history.entity';

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

  @OneToMany(() => MedicalHistory, (medicalHistory) => medicalHistory.patient)
  medicalHistory: MedicalHistory[];

  @ManyToMany(() => MedicalStaff, (medicalStaff) => medicalStaff.patients)
  @JoinTable()
  medicalStaff: MedicalStaff[];
}
