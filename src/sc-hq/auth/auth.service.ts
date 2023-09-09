import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException({
        statusCode: 401,
        name: 'Unauthorized',
        message: 'incorrect account or password',
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = user;

    const payload = { sub: user.id, ...rest };

    return {
      code: 0,
      status: 'ok',
      msg: 'success',
      data: await this.jwtService.signAsync(payload),
    };
  }

  async profile(username: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = user;

    if (rest) {
      return { code: 0, status: 'ok', msg: 'success', data: rest };
    } else {
      return { code: -1, status: 'error', msg: 'failure', data: null };
    }
  }
}
