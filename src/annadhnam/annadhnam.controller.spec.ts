import { Test, TestingModule } from '@nestjs/testing';
import { AnnadhnamController } from './annadhnam.controller';

describe('Annadhnam Controller', () => {
  let controller: AnnadhnamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnnadhnamController],
    }).compile();

    controller = module.get<AnnadhnamController>(AnnadhnamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
