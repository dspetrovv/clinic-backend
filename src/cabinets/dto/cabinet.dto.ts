import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CabinetDto {
  @IsNotEmpty()
  @Length(1, 6)
  @IsString()
  readonly number: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;
}
