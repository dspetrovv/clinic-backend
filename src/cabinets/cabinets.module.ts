import { Module } from '@nestjs/common';
import { CabinetService } from './cabinets.service';
import { CabinetController } from './cabinets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cabinet } from './cabinet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cabinet])],
  providers: [CabinetService],
  controllers: [CabinetController],
})
export class CabinetsModule {}
