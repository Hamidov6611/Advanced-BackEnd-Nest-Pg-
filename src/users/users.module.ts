import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.models';
import { RolesService } from 'src/roles/roles.service';
import { AuthModule } from 'src/auth/auth.module';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService, RolesService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [UsersService],
})
export class UsersModule {}
