import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  type: 'phone' | 'account';
  @ApiProperty()
  autoLogin?: boolean;
}
