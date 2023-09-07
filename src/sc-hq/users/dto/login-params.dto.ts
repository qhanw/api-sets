import { ApiProperty } from '@nestjs/swagger';

export class LoginParamsDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  type: 'phone' | 'account';
  @ApiProperty()
  autoLogin?: boolean;
}
