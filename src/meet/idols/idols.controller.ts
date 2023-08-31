import { Controller, Get, Query } from '@nestjs/common';

import { QueryIdolsDto } from './dto/query-idols.dto';

import { PrismaService } from '../../prisma/prisma.service';

@Controller('meet/idols')
export class IdolsController {
  constructor(private prisma: PrismaService) {}
  @Get()
  async findAll(@Query() query: QueryIdolsDto) {
    const { current, pageSize, realName, team, city } = query;

    const curr = +current || 1;
    const take = +pageSize || 10;

    const $table = this.prisma.idols;

    const total = await $table.count({
      where: { realName: { contains: realName }, team, remark1: city },
    });

    const list = await $table.findMany({
      where: { realName: { contains: realName }, team, remark1: city },
      skip: ((curr < 1 ? 1 : curr) - 1) * take,
      take,
      // orderBy: { tel: 'asc' },
      // select: { id: true, realName: true },
    });

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
        pageNum: curr,
        pageSize: take,
        total,
      },
    };
  }
}
