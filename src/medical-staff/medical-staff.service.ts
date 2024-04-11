import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MedicalStaff } from './medical-staff.entity';
import { CreateMedicalStaffDto } from './dto/medical-staff.dto';

@Injectable()
export class MedicalStaffService {
  constructor(
    @InjectRepository(MedicalStaff)
    private medicalStaffRepository: Repository<MedicalStaff>,
  ) {}

  create(createMedicalStaffDto: CreateMedicalStaffDto): Promise<MedicalStaff> {
    const medicalStaff = this.medicalStaffRepository.create(
      createMedicalStaffDto,
    );
    return this.medicalStaffRepository.save(medicalStaff);
  }

  async findAll(): Promise<MedicalStaff[]> {
    return this.medicalStaffRepository.find();
  }

  async findOne(id: number): Promise<MedicalStaff> {
    return await this.medicalStaffRepository.findOne({ where: { id } });
  }
}
