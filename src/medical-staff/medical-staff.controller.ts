import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MedicalStaffService } from './medical-staff.service';
import { CreateMedicalStaffDto } from './dto/medical-staff.dto';
import { MedicalStaff } from './medical-staff.entity';

@Controller('medical-staff')
export class MedicalStaffController {
  constructor(private readonly medicalStaffService: MedicalStaffService) {}

  @Post()
  create(@Body() createMedicalStaffDto: CreateMedicalStaffDto) {
    return this.medicalStaffService.create(createMedicalStaffDto);
  }

  @Get()
  findAll(): Promise<MedicalStaff[]> {
    return this.medicalStaffService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<MedicalStaff> {
    return this.medicalStaffService.findOne(id);
  }
}
