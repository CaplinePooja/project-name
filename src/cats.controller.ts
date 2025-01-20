/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { classToPlain } from 'class-transformer';


@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() cat: { name: string; age: number; breed: string }) {
    await this.catsService.create(cat);
    return 'Cat added successfully!';
  }


  @Get()
async findAll() {
  const cats = await this.catsService.findAll();
  return classToPlain(cats); 
}

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCat: Partial<{ name: string; age: number; breed: string }>) {
    return this.catsService.update(id, updateCat);
  }
}
