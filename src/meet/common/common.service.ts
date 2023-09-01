import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CommonService {
  constructor(private prisma: PrismaService) {}

  findLinks() {
    return {
      code: 0,
      data: {
        activitySecondTermLink:
          'https://twitter.com/meet_48/status/1680519505422831617',
        cardCompetitionLink: 'https://www.bilibili.com/video/BV1wV4y1a7J7',
        activityFinalRankLink: 'https://www.meet48.xyz/1.html',
      },
      msg: 'success',
    };
  }
}
