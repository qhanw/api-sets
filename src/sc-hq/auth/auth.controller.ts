import {
  Body,
  Controller,
  Get,
  Headers,
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
  getProfile(@Headers() headers) {
    return this.authService.profile(headers.authorization);
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
