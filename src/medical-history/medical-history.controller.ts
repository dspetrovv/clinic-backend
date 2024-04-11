import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MedicalHistoryService } from './medical-history.service';
import { CreateMedicalHistoryDto } from './dto/create-medical-history.dto';
import { MedicalHistory } from './medical-history.entity';

@Controller('medical-history')
export class MedicalHistoryController {
  constructor(private readonly medicalHistoryService: MedicalHistoryService) {}

  @Get()
  findAll(): Promise<MedicalHistory[]> {
    return this.medicalHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<MedicalHistory> {
    return this.medicalHistoryService.findOne(id);
  }

  @Post()
  create(@Body() createMedicalHistoryDto: CreateMedicalHistoryDto) {
    return this.medicalHistoryService.create(createMedicalHistoryDto);
  }
}
