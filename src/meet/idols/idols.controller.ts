import { Controller, Get } from '@nestjs/common';
@Controller('meet/idols')
export class IdolsController {
  @Get()
  findAll() {
    return 'list';
  }
}
