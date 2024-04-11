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
import { PatientModule } from './patients/patients.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    UserModule,
    RoleModule,
    SpecialtiesModule,
    CabinetsModule,
    MedicalStaffModule,
    PatientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
