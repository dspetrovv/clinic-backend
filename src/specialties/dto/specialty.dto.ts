import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class SpecialtyDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 20)
  name: string;

  @IsOptional()
  @IsString()
  @Length(2, 50)
  description?: string;
}
