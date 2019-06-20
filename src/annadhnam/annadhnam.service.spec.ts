import { Test, TestingModule } from '@nestjs/testing';
import { AnnadhnamService } from './annadhnam.service';

describe('AnnadhnamService', () => {
  let service: AnnadhnamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnnadhnamService],
    }).compile();

    service = module.get<AnnadhnamService>(AnnadhnamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
