import { IsOptional, IsString, IsDate, IsNumber } from 'class-validator';

export class CreatePatientDto {
  @IsNumber()
  readonly userId: number;

  @IsOptional()
  @IsDate()
  readonly birthday?: Date;

  @IsOptional()
  @IsString()
  readonly address?: string;

  @IsOptional()
  @IsString()
  readonly phone?: string;

  @IsOptional()
  @IsString()
  readonly passport?: string;
}
