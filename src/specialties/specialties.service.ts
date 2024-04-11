import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Specialty } from './specialty.entity';

@Injectable()
export class SpecialtyService {
  constructor(
    @InjectRepository(Specialty)
    private specialtyRepository: Repository<Specialty>,
  ) {}

  findAll(): Promise<Specialty[]> {
    return this.specialtyRepository.find();
  }

  findOne(id: string): Promise<Specialty> {
    return this.specialtyRepository.findOne(id);
  }
}
