import { Controller, Get, Param } from '@nestjs/common';

@Controller('leaflet')
export class LeafletController {
  @Get(':slug')
  find(@Param() params: any) {
    // coordinate 坐标
    const [z, x, y] = params.slug.match(/.*(?=\.png)/)[0].split('_');
    console.log(z, x, y);
    return params.slug;
  }
}
