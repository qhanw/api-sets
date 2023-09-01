import { Controller, Get } from '@nestjs/common';
import { ExchangesService } from './exchanges.service';

@Controller('meet/exchanges')
export class ExchangesController {
  constructor(private readonly exchangesService: ExchangesService) {}

  @Get()
  findAll() {
    return this.exchangesService.findAll();
  }
}
