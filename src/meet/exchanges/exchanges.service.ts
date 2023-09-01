import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { exchanges } from './mock';

@Injectable()
export class ExchangesService {
  constructor(private prisma: PrismaService) {}
  findAll() {
    return { code: 0, data: exchanges, msg: 'success' };
  }
}
