import { Controller, Get, Query, Headers } from '@nestjs/common';

import { IdolsService } from './idols.service';
import { QueryIdolsDto } from './dto/query-idols.dto';

@Controller('meet/idols')
export class IdolsController {
  constructor(private readonly idolsService: IdolsService) {}
  @Get()
  async findAll(@Query() query: QueryIdolsDto) {
    return this.idolsService.findAll(query);
  }
  @Get('/search_opts')
  findSearchOpts(@Headers() headers) {
    return this.idolsService.findSearchOpts(headers['language-type'] || 'en');
  }
}
