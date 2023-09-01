import { Controller, Get, Headers } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/meet/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(@Headers() header) {
    return this.tasksService.findAll(header['language-type'] || 'en');
  }
}
