import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MedicalHistory } from './medical-history.entity';
import { CreateMedicalHistoryDto } from './dto/create-medical-history.dto';

@Injectable()
export class MedicalHistoryService {
  constructor(
    @InjectRepository(MedicalHistory)
    private medicalHistoryRepository: Repository<MedicalHistory>,
  ) {}

  async findAll(): Promise<MedicalHistory[]> {
    return this.medicalHistoryRepository.find();
  }

  async findOne(id: number): Promise<MedicalHistory> {
    return await this.medicalHistoryRepository.findOne({ where: { id } });
  }

  async create(
    createMedicalHistoryDto: CreateMedicalHistoryDto,
  ): Promise<MedicalHistory> {
    const medicalStaff = this.medicalHistoryRepository.create(
      createMedicalHistoryDto,
    );
    return this.medicalHistoryRepository.save(medicalStaff);
  }
}
