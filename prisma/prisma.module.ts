// src/prisma/prisma.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  // Assumes that env variables are retrieved 
  // from the config module.
  providers: [
    PrismaService,
  ],
  exports: [PrismaService],
})
export class PrismaModule {}