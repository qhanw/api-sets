import { Controller, Get } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

@Controller('meet/idols')
export class IdolsController {
  constructor(private prisma: PrismaService) {}
  @Get()
  async findAll() {
    const list = await this.prisma.idols.findMany();

    return {
      code: 0,
      message: 'success',
      data: {
        idolList: JSON.parse(
          JSON.stringify(
            list,
            (key, value) =>
              typeof value === 'bigint' ? value.toString() : value, // return everything else unchanged
          ),
        ),
        pageNum: 1,
        pageSize: 200,
        total: list.length,
      },
    };
  }
}
