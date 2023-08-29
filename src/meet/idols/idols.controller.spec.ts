import { Test, TestingModule } from '@nestjs/testing';
import { IdolsController } from './idols.controller';

describe('IdolsController', () => {
  let controller: IdolsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdolsController],
    }).compile();

    controller = module.get<IdolsController>(IdolsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
