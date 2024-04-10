import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './ormconfig';
import { RoleModule } from './roles/roles.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), UserModule, RoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
