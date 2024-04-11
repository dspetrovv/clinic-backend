import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Patient } from '../patients/patient.entity';

@Entity('medical_history')
export class MedicalHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column()
  diagnosis: string;

  @IsOptional()
  @IsString()
  @Column({ type: 'text', nullable: true })
  treatmentPlan?: string;

  @IsOptional()
  @IsNumber()
  @Column({ type: 'float', nullable: true })
  payment?: number;

  @Column({ type: 'timestamp without time zone' })
  visitDate: Date;

  @ManyToOne(() => Patient, (patient) => patient.medicalHistory)
  patient: Patient;
}
