import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './ormconfig';
import { RoleModule } from './roles/roles.module';
import { SpecialtiesModule } from './specialties/specialties.module';
import { CabinetsModule } from './cabinets/cabinets.module';
import { MedicalStaffModule } from './medical-staff/medical-staff.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    UserModule,
    RoleModule,
    SpecialtiesModule,
    CabinetsModule,
    MedicalStaffModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
