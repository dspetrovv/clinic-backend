import { IsNotEmpty, IsString, IsOptional, Length } from 'class-validator';

export class RoleDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly description?: string;
}
