import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  Length,
} from 'class-validator';

export class CreateMedicalStaffDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  specialtyId: number;

  @IsOptional()
  @Length(6, 10)
  @IsString()
  phone?: string;

  @IsNotEmpty()
  @IsNumber()
  cabinetId: number;
}
