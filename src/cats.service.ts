/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.services';
import { CreateCatDto } from './dto/create-cat.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  async create(cat: { name: string; age: number; breed: string }) {
    return this.prisma.cat.create({
      data: {
        name: cat.name,
        age: cat.age,
        breed: cat.breed,
      },
    });
  }

  async findAll() {
    const cats = await this.prisma.cat.findMany();
    return plainToClass(CreateCatDto, cats);
  }

  async update(id: string, updateCat: Partial<{ name: string; age: number; breed: string }>) {
    const cat = await this.prisma.cat.findUnique({ where: { id } });
    if (!cat) {
      throw new Error(`Cat with id ${id} not found`);
    }

    return this.prisma.cat.update({
      where: { id },
      data: updateCat,
    });
  }
}
