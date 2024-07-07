import { Module } from '@nestjs/common';
import { SignController } from './sign/sign.controller';
import { RoleController } from './role/role.controller';

import { RoleService } from './role/role.service';

import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [SignController, RoleController],
  providers: [RoleService],
  imports: [PrismaModule],
})
export class AdminModule {}
