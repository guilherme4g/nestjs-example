import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createEventDto: CreateEventDto) {
    return this.prismaService.event.create({
      data: createEventDto
    });
  }

  findOne(id: string) {
    return this.prismaService.event.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    return this.prismaService.event.update({
      where: {
        id
      },
      data: updateEventDto
    })
  }

  remove(id: string) {
    this.prismaService.category
    return this.prismaService.category.delete({
      where: { id }
    });
  }
}
