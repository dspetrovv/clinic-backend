import { Controller, Get, Param } from '@nestjs/common';
import { CabinetService } from './cabinets.service';
import { Cabinet } from './cabinet.entity';

@Controller('cabinets')
export class CabinetController {
  constructor(private readonly cabinetService: CabinetService) {}

  @Get()
  findAll(): Promise<Cabinet[]> {
    return this.cabinetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Cabinet> {
    return this.cabinetService.findOne(id);
  }
}
