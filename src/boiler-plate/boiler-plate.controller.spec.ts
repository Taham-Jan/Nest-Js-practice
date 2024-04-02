import { Test, TestingModule } from '@nestjs/testing';
import { BoilerPlateController } from './boiler-plate.controller';
import { BoilerPlateService } from './boiler-plate.service';

describe('BoilerPlateController', () => {
  let controller: BoilerPlateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoilerPlateController],
      providers: [BoilerPlateService],
    }).compile();

    controller = module.get<BoilerPlateController>(BoilerPlateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
