import { Injectable } from '@nestjs/common';
import { CreateQtnDto } from './dto/create-qtn.dto';
import { UpdateQtnDto } from './dto/update-qtn.dto';
import { QueryQtnDto } from './dto/query-qtn.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { convertBigInt } from '../../utils/utils';

@Injectable()
export class QtnService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateQtnDto) {
    console.log(data);
    return { code: 0, msg: 'success', data: null };
  }

  async find(query: QueryQtnDto) {
    const { current, pageSize } = query;
    const curr = +current || 1;
    const take = +pageSize || 10;
    const total = await this.prisma.qtn.count();

    const list = await this.prisma.qtn.findMany({
      skip: ((curr < 1 ? 1 : curr) - 1) * take,
      take,
      orderBy: { tel: 'asc' },
      select: {
        tel: true,
        A1: true,
        A2: true,
        A3: true,
        A4: true,
        A5: true,
        A6: true,
        A7: true,
        A8: true,
        A9: true,
        A10: true,
      },
    });

    return {
      data: convertBigInt(list),
      pagination: { current: curr, pageSize: take, total },
    };
  }

  async findOne(id: number) {
    return `This action returns a #${id} qtn`;
  }

  async update(id: number, updateQtnDto: UpdateQtnDto) {
    console.log(updateQtnDto);
    return `This action updates a #${id} qtn`;
  }

  async remove(id: number) {
    return `This action removes a #${id} qtn`;
  }
}
