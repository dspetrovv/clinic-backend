import { IsNotEmpty, IsString, Length } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cabinets')
export class Cabinet {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @IsString() // Потому что может быть с буквой
  @Length(1, 6)
  @Column()
  number: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  @Column()
  description: string;
}
