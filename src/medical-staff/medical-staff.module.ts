import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalStaffService } from './medical-staff.service';
import { MedicalStaffController } from './medical-staff.controller';
import { MedicalStaff } from './medical-staff.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalStaff])],
  providers: [MedicalStaffService],
  controllers: [MedicalStaffController],
})
export class MedicalStaffModule {}
