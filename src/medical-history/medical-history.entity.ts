import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IsString } from 'class-validator';
import { Patient } from 'src/patients/patient.entity';

@Entity('medical_history')
export class MedicalHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column()
  diagnosis: string;

  @IsString()
  @Column({ type: 'text' })
  treatmentPlan: string;

  @Column({ type: 'timestamp without time zone' })
  visitDate: Date;

  @ManyToOne(() => Patient, (patient) => patient.medicalHistory)
  patient: Patient;
}
