import { Injectable } from '@nestjs/common';

import { CreateQtnDto } from './dto/create-user.dto';
import { PrismaService } from '../../prisma/prisma.service';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateQtnDto) {
    console.log(data);
    return { code: 0, msg: 'success', data: null };
  }

  // 用户配置
  private readonly users = [
    { id: 1, username: 'admin', password: '123123' },
    { id: 2, username: 'user', password: 'guess' },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
