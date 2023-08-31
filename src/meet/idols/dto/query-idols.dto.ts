import { ApiProperty } from '@nestjs/swagger';

export class QueryIdolsDto {
  @ApiProperty()
  current: number;
  @ApiProperty()
  pageSize: number;
  @ApiProperty()
  realName: string;
  @ApiProperty()
  city: string;
  @ApiProperty()
  team: string;
}
