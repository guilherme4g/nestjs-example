
import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FindUseCase {
    constructor(private readonly prismaService: PrismaService) {}
    findAll() {
    return this.prismaService.event.findMany({
      include: {
        categories: true
      }
    });
  }
}