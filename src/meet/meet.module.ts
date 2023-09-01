import { Module } from '@nestjs/common';

import { IdolsController } from './idols/idols.controller';
import { IdolsService } from './idols/idols.service';

import { PrismaModule } from '../prisma/prisma.module';
import { CommonController } from './common/common.controller';
import { CommonService } from './common/common.service';

@Module({
  controllers: [IdolsController, CommonController],
  providers: [IdolsService, CommonService],
  imports: [PrismaModule],
})
export class MeetModule {}
