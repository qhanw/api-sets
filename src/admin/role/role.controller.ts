import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Delete,
  Param,
} from '@nestjs/common';

import { RoleService } from './role.service';

import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { QueryRoleDto } from './dto/query-role.dto';

@Controller('admin/role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  find(@Query() query: QueryRoleDto) {
    return this.roleService.find(query);
  }
  @Post('add')
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Post('edit')
  update(@Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    console.log(id);
    return this.roleService.remove(id);
  }
}
