import { Controller, Post, Body } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateQtnDto } from './dto/create-user.dto';

@Controller('sc-hq/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  create(@Body() data: CreateQtnDto) {
    console.log(data);
  }
}
