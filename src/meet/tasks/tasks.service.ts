import { Injectable } from '@nestjs/common';

import { tasks } from './mock';

@Injectable()
export class TasksService {
  findAll(lang: string) {
    return { code: 0, data: tasks[lang], msg: 'success' };
  }
}
