import { Controller, Get, Param } from '@nestjs/common';
import { SpecialtyService } from './specialties.service';
import { Specialty } from './specialty.entity';

@Controller('specialties')
export class SpecialtyController {
  constructor(private readonly specialtyService: SpecialtyService) {}

  @Get()
  findAll(): Promise<Specialty[]> {
    return this.specialtyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Specialty> {
    return this.specialtyService.findOne(id);
  }
}
