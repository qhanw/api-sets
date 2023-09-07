import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { QtnService } from './qtn.service';
import { CreateQtnDto } from './dto/create-qtn.dto';
import { UpdateQtnDto } from './dto/update-qtn.dto';
import { QueryQtnDto } from './dto/query-qtn.dto';

import { AuthGuard } from '../auth/auth.guard';

@Controller('sc-hq/qtn')
export class QtnController {
  constructor(private readonly qtnService: QtnService) {}

  @Post('create')
  create(@Body() createQtnDto: CreateQtnDto) {
    return this.qtnService.create(createQtnDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  find(@Query() query: QueryQtnDto) {
    return this.qtnService.find(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.qtnService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQtnDto: UpdateQtnDto) {
    return this.qtnService.update(+id, updateQtnDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.qtnService.remove(+id);
  }
}
