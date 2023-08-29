import { Module } from '@nestjs/common';

import { IdolsController } from './idols/idols.controller';
import { IdolsService } from './idols/idols.service';

@Module({
  controllers: [IdolsController],
  providers: [IdolsService],
})
export class MeetModule {}
