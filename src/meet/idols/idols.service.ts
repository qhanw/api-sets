import { Injectable } from '@nestjs/common';
import { QueryIdolsDto } from './dto/query-idols.dto';
import { PrismaService } from '../../prisma/prisma.service';

import { convertBigInt } from '../../utils/utils';

@Injectable()
export class IdolsService {
  constructor(private prisma: PrismaService) {}

  async findAll(query: QueryIdolsDto) {
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
      msg: 'success',
      data: convertBigInt(list),
      pagination: { current: curr, pageSize: take, total },
    };
  }

  findSearchOpts(lang: string) {
    const format = (d) => d.map((c) => ({ label: c, value: c }));

    const opts = {
      en: {
        cities: format([
          'Shanghai',
          'Guangzhou',
          'Beijing',
          'Chongqing',
          'Chengdu',
        ]),
        teams: format([
          'SNH48 TEAM SII',
          'SNH48 TEAM NII',
          'SNH48 TEAM HII',
          'SNH48 TEAM X',
          'SNH48 TRAINEE',
          'GNZ48 TEAM G',
          'GNZ48 TEAM NIII',
          'GNZ48 TEAM Z',
          'GNZ48 TRAINEE',
          'BEJ48',
          'CKG48',
          'CKG48 TRAINEE',
          'CGT48 TEAM CII',
          'CGT48 TEAM GII',
        ]),
      },
      zh: {
        cities: format(['上海', '广州', '北京', '重庆', '成都']),
        teams: format([
          'SNH48 TEAM SII',
          'SNH48 TEAM NII',
          'SNH48 TEAM HII',
          'SNH48 TEAM X',
          'SNH48 TRAINEE',
          'GNZ48 TEAM G',
          'GNZ48 TEAM NIII',
          'GNZ48 TEAM Z',
          'GNZ48 TRAINEE',
          'BEJ48',
          'CKG48',
          'CKG48 TRAINEE',
          'CGT48 TEAM CII',
          'CGT48 TEAM GII',
        ]),
      },
    };

    return { code: 0, data: opts[lang], msg: 'success' };
  }
}
