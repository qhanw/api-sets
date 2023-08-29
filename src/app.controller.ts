import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // API 服务不显示根页面
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
