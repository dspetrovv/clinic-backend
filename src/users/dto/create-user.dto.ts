import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 20)
  readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 20)
  readonly lastName: string;

  @IsOptional()
  @IsString()
  @Length(2, 20)
  readonly middleName?: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsNotEmpty()
  @IsNumber()
  readonly role_id: number;

  @IsOptional()
  @IsBoolean()
  readonly isActive?: boolean;

  @IsOptional()
  @IsDateString()
  readonly birthdate?: string;
}
