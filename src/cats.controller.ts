/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() cat: Cat) {
    this.catsService.create(cat);
    return 'Cat added successfully!';
  }

  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedCat: Partial<Cat>): string {
    return this.catsService.update(id, updatedCat);
  }
  up
}
