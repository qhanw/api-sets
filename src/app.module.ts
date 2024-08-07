import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// modules
import { PrismaModule } from './prisma/prisma.module';
import { MeetModule } from './meet/meet.module';
import { ScHqModule } from './sc-hq/sc-hq.module';
import { LeafletModule } from './leaflet/leaflet.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [PrismaModule, MeetModule, ScHqModule, LeafletModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
