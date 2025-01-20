/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.services';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { GetAllCatsDto } from './dto/getall-cat.dto';
import { Cat } from './cat.interface';

@Injectable()
export class CatsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllCats(filters?: GetAllCatsDto): Promise<Cat[]> {
    return this.prisma.cat.findMany({
      skip: filters?.offset || 0,
      take: filters?.limit || 10,
    });
  }
  

  async getCatById(id: string): Promise<Cat> {
    const cat = await this.prisma.cat.findUnique({ where: { id } });
    if (!cat) {
      throw new Error(`Cat with ID ${id} not found`);
    }
    return cat;
  }
  

  async createCat(createCatDto: CreateCatDto): Promise<void> {
    await this.prisma.cat.create({
      data: {
        name: createCatDto.name,
        age: createCatDto.age,
        breed: createCatDto.breed,
      },
    });
  }

  async updateCat(id: string, updateCatDto: UpdateCatDto): Promise<void> {
    await this.prisma.cat.update({
      where: { id },
      data: { ...updateCatDto },
    });
  }

  async deleteCat(id: string): Promise<void> {
    await this.prisma.cat.delete({ where: { id } });
  }
}
