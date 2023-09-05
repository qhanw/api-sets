import { Controller, Get, Post, Body } from '@nestjs/common';

import { UserService } from './user.service';
import { CreateQtnDto } from './dto/create-user.dto';
import { LoginParamsDto } from './dto/login-params.dto';

@Controller('sc-hq/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() data: CreateQtnDto) {
    console.log(data);
  }

  @Get('get_code')
  getCode(): string {
    return 'This action returns all catsddddee';
  }

  @Post('validate')
  validate(): string {
    return 'validate';
  }

  @Post('login')
  login(@Body() data: LoginParamsDto) {
    return this.userService.login(data);
  }
}
