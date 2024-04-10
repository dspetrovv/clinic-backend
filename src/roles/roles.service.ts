import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { RoleDto } from './dto/role.dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private roleRepository: Repository<Role>,
  ) {}

  async create(roleDto: RoleDto): Promise<Role> {
    const user = this.roleRepository.create(roleDto);
    return await this.roleRepository.save(user);
  }

  async findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }
}
