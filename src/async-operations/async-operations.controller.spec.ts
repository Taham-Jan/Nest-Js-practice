import { Test, TestingModule } from '@nestjs/testing';
import { AsyncOperationsController } from './async-operations.controller';

describe('AsyncOperationsController', () => {
  let controller: AsyncOperationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsyncOperationsController],
    }).compile();

    controller = module.get<AsyncOperationsController>(AsyncOperationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
