import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { FindUseCase } from './find.event.usecase';

@Module({
  imports: [PrismaModule],
  controllers: [EventController],
  providers: [EventService, FindUseCase]
})
export class EventModule {}
