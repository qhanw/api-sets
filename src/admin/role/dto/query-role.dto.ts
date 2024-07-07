import { ApiProperty } from '@nestjs/swagger';
export class QueryRoleDto {
  @ApiProperty()
  current: number;
  @ApiProperty()
  pageSize: number;
  @ApiProperty()
  name?: string;
}
