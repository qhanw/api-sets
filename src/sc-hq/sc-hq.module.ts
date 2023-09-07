import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { QtnModule } from './qtn/qtn.module';

/**
 *  四川省应对重大突发公共卫生事件公众认知及行为调查问卷
 * @description Sichuan health questionnaire
 */
@Module({
  imports: [QtnModule, UsersModule],
})
export class ScHqModule {}
