import {
  Body,
  Controller,
  Get,
  Request,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SignInDto } from './dto/sign-in.dto';

@Controller('sc-hq/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() { username, password }: SignInDto) {
    return this.authService.signIn(username, password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    if (req.user) {
      return { code: 0, status: 'ok', msg: 'success', data: req.user };
    } else {
      return { code: -1, status: 'error', msg: 'failure', data: null };
    }
  }

  @Get('get_code')
  getCode(): string {
    return 'This action returns all catsddddee';
  }

  @Post('validate')
  validate(): string {
    return 'validate';
  }
}
