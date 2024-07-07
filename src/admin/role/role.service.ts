import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { QueryRoleDto } from './dto/query-role.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { convertBigInt } from '../../utils/utils';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateRoleDto) {
    const { name, remark } = data;
    const roles = this.prisma.roles;
    const role = await roles.create({ data: { name, remark } });
    return { code: 200, msg: 'success', data: convertBigInt(role) };
  }

  async update(data: UpdateRoleDto) {
    const roles = this.prisma.roles;
    const { name, remark } = data;
    const role = await roles.update({
      where: { id: BigInt(data.id) },
      data: { name, remark },
    });

    return { code: 200, msg: 'success', data: convertBigInt(role) };
  }

  async find(query: QueryRoleDto) {
    const { current, pageSize, name } = query;
    const curr = +current || 1;
    const take = +pageSize || 10;

    const $table = this.prisma.roles;

    const total = await $table.count({ where: { name: { contains: name } } });

    const list = await this.prisma.roles.findMany({
      where: { name: { contains: name } },
      skip: ((curr < 1 ? 1 : curr) - 1) * take,
      take,
    });

    return {
      code: 200,
      data: {
        list: convertBigInt(list),
        pagination: { current: curr, pageSize: take, total },
      },
      msg: '',
    };
  }

  async findOne(id: number) {
    return `This action returns a #${id} qtn`;
  }

  async remove(id: number) {
    const role = await this.prisma.roles.delete({ where: { id: id } });

    return { code: 200, msg: 'success', data: convertBigInt(role) };
  }
}
