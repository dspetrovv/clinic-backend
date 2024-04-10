import { Module } from '@nestjs/common';
import { SpecialtyService } from './specialties.service';
import { SpecialtyController } from './specialties.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Specialty } from './specialty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Specialty])],
  providers: [SpecialtyService],
  controllers: [SpecialtyController],
})
export class SpecialtiesModule {}
