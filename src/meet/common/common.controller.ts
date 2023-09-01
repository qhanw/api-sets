import { Controller, Get } from '@nestjs/common';
import { CommonService } from './common.service';

@Controller('meet/common')
export class CommonController {
  constructor(private readonly commonService: CommonService) {}

  @Get('/links')
  findLinks() {
    return this.commonService.findLinks();
  }
}
