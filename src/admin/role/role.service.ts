import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { QueryRoleDto } from './dto/query-role.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { convertBigInt } from '../../utils/utils';

@Injectable()
export class RoleService {
  private roles: PrismaService['roles'];

  constructor(private prisma: PrismaService) {
    this.roles = this.prisma.roles;
  }

  private async checkRoleByName(data: CreateRoleDto | UpdateRoleDto) {
    const { name } = data;
    const isExist = await this.roles.findFirst({
      where: { name: { equals: name } },
    });

    if (isExist) {
      return { code: 0, msg: '角色名已存在，请重新输入！', data: null };
    }
  }

  async create(data: CreateRoleDto) {
    const { name, remark } = data;
    const isExist = await this.roles.findFirst({
      where: { name: { equals: name } },
    });

    if (isExist) {
      return { code: 0, msg: '角色名已存在，请重新输入！', data: null };
    }

    const role = await this.roles.create({ data: { name, remark } });
    return { code: 200, msg: 'success', data: convertBigInt(role) };
  }

  async update(data: UpdateRoleDto) {
    const { name, remark } = data;

    const isExist = await this.roles.findFirst({
      where: { name: { equals: name } },
    });

    if (isExist) {
      return { code: 0, msg: '角色名已存在，请重新输入！', data: null };
    }

    const role = await this.roles.update({
      where: { id: +data.id },
      data: { name, remark },
    });

    return { code: 200, msg: 'success', data: convertBigInt(role) };
  }

  async find(query: QueryRoleDto) {
    const { current, pageSize, name } = query;
    const curr = +current || 1;
    const take = +pageSize || 10;

    const total = await this.roles.count({
      where: { name: { contains: name } },
    });

    const list = await this.roles.findMany({
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
    const role = await this.roles.delete({ where: { id: id } });

    return { code: 200, msg: 'success', data: convertBigInt(role) };
  }
}
