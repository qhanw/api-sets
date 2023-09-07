import { Injectable } from '@nestjs/common';

import { CreateQtnDto } from './dto/create-user.dto';
import { LoginParamsDto } from './dto/login-params.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateQtnDto) {
    console.log(data);
    return { code: 0, msg: 'success', data: null };
  }

  login(data: LoginParamsDto) {
    console.log(data);

    if (data.username === 'admin' && data.password === '123456') {
      return { code: 0, status: 'ok', msg: 'success', data: null };
    } else {
      return { code: -1, status: 'error', msg: 'failure', data: null };
    }
  }
}
