import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalHistoryService } from './medical-history.service';
import { MedicalHistoryController } from './medical-history.controller';
import { MedicalHistory } from './medical-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalHistory])],
  providers: [MedicalHistoryService],
  controllers: [MedicalHistoryController],
})
export class MedicalHistoryModule {}
