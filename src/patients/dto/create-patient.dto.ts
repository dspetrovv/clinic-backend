import { IsOptional, IsString, IsDate, IsNumber } from 'class-validator';

export class CreatePatientDto {
  @IsNumber()
  userId: number;

  @IsOptional()
  @IsDate()
  birthday?: Date;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  passport?: string;
}
