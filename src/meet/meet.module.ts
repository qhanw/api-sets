import { Module } from '@nestjs/common';

import { IdolsController } from './idols/idols.controller';
import { IdolsService } from './idols/idols.service';

import { PrismaModule } from '../prisma/prisma.module';
import { CommonController } from './common/common.controller';
import { CommonService } from './common/common.service';
import { TasksService } from './tasks/tasks.service';
import { TasksController } from './tasks/tasks.controller';
import { ExchangesController } from './exchanges/exchanges.controller';
import { ExchangesService } from './exchanges/exchanges.service';

@Module({
  controllers: [IdolsController, CommonController, TasksController, ExchangesController],
  providers: [IdolsService, CommonService, TasksService, ExchangesService],
  imports: [PrismaModule],
})
export class MeetModule {}
