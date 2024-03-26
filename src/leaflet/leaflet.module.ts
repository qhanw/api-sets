import { Module } from '@nestjs/common';
import { LeafletController } from './leaflet.controller';

@Module({
  controllers: [LeafletController],
})
export class LeafletModule {}
