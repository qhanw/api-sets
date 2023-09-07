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
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.username };

    return {
      code: 0,
      status: 'ok',
      msg: 'success',
      data: await this.jwtService.signAsync(payload),
    };
  }
  async profile(access_token: string) {
    const [type, token] = access_token?.split(' ') ?? [];
    const t = type === 'Bearer' ? token : undefined;
    if (t) {
      const info = this.jwtService.decode(t) || {};

      const username = typeof info === 'string' ? info : info.username;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...rest } = await this.usersService.findOne(username);

      return { code: 0, status: 'ok', msg: 'success', data: rest };
    } else {
      return { code: -1, status: 'error', msg: 'failure', data: null };
    }
  }
}
