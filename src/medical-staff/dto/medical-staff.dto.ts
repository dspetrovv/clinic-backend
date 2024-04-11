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
  readonly userId: number;

  @IsNotEmpty()
  @IsNumber()
  readonly specialtyId: number;

  @IsOptional()
  @Length(6, 10)
  @IsString()
  readonly phone?: string;

  @IsNotEmpty()
  @IsNumber()
  readonly cabinetId: number;
}
