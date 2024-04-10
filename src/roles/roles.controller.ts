import {
  Controller,
  Post,
  Body,
  Get,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RoleService } from './roles.service';
import { RoleDto } from './dto/role.dto';
import { Role } from './role.entity';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() roleDto: RoleDto): Promise<Role> {
    return this.roleService.create(roleDto);
  }

  @Get()
  async findAll(): Promise<Role[]> {
    return this.roleService.findAll();
  }
}
