import { Module } from '@nestjs/common';

import { IdolsController } from './idols/idols.controller';
import { IdolsService } from './idols/idols.service';

import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [IdolsController],
  providers: [IdolsService],
  imports: [PrismaModule],
})
export class MeetModule {}
