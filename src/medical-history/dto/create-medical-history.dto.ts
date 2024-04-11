import { IsString, IsDate, IsNumber } from 'class-validator';

export class CreateMedicalHistoryDto {
  @IsNumber()
  patientId: number;

  @IsString()
  diagnosis: string;

  @IsString()
  treatmentPlan: string;

  @IsDate()
  visitDate: Date;
}
