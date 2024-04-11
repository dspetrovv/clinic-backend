import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateSpecialtyDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 20)
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly description?: string;
}
