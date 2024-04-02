import { Test, TestingModule } from '@nestjs/testing';
import { BoilerPlateService } from './boiler-plate.service';

describe('BoilerPlateService', () => {
  let service: BoilerPlateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoilerPlateService],
    }).compile();

    service = module.get<BoilerPlateService>(BoilerPlateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
