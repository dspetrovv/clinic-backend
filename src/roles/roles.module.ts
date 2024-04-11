import { Module } from '@nestjs/common';
import { RoleService } from './roles.service';
import { RoleController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  providers: [RoleService],
  controllers: [RoleController],
})
export class RoleModule {}
