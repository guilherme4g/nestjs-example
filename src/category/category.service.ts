import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Logger } from '@nestjs/common';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.prismaService.category.create({
      data: CreateCategoryDto
    })
  }

  findAll() {
    return this.prismaService.category.findMany();
  }

  findOne(id: string) {
    return this.prismaService.event.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return null;
  }

  remove(id: string) {
    return null;
  }
}
