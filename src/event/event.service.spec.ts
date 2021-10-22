import { Test, TestingModule } from '@nestjs/testing';
import { EventService } from './event.service';
import { PrismaClient } from '.prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { EventModule } from './event.module';

const mockPrismaService = {
    event: {
        findMany: jest.fn().mockResolvedValue([]),
        findUnique: jest.fn().mockResolvedValue({}),
        update: jest.fn().mockResolvedValue({}),
        create: jest.fn().mockResolvedValue({}),
        delete: jest.fn().mockResolvedValue({}),
    },
};

describe('EventService', () => {
  let service: EventService;
  let prisma: PrismaService;

  beforeEach(async () => {
  const module: TestingModule = await Test.createTestingModule({
    providers: [
      EventService,
      {
        provide: PrismaService,
        useValue: mockPrismaService,
      },
    ],
  }).compile();

  service = module.get<EventService>(EventService);
  prisma = module.get<PrismaService>(PrismaService);
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
