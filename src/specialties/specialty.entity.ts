import { IsOptional, Length } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('specialties')
export class Specialty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(2, 20)
  name: string;

  @IsOptional()
  @Column({ nullable: true, type: 'text' })
  description?: string;
}
