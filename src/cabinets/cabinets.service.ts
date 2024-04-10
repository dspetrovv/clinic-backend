import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cabinet } from './cabinet.entity';

@Injectable()
export class CabinetService {
  constructor(
    @InjectRepository(Cabinet)
    private cabinetRepository: Repository<Cabinet>,
  ) {}

  findAll(): Promise<Cabinet[]> {
    return this.cabinetRepository.find();
  }

  findOne(id: string): Promise<Cabinet> {
    return this.cabinetRepository.findOne(id);
  }
}
