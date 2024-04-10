import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CabinetDto {
  @IsNotEmpty()
  @Length(1, 6)
  @IsString()
  number: string;

  @IsNotEmpty()
  @Length(2, 50)
  @IsString()
  description: string;
}
