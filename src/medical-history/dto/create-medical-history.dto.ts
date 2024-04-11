import { IsString, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateMedicalHistoryDto {
  @IsNumber()
  readonly patientId: number;

  @IsString()
  readonly diagnosis: string;

  @IsOptional()
  @IsString()
  readonly treatmentPlan?: string;

  @IsDate()
  readonly visitDate: Date;

  @IsOptional()
  @IsNumber()
  readonly payment?: number;
}
