import { Module } from '@nestjs/common';
import { PatientService } from './patients.service';
import { PatientController } from './patients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './patient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Patient])],
  providers: [PatientService],
  controllers: [PatientController],
})
export class PatientModule {}
