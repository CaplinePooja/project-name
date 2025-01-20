/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
async create(@Body() cat: CreateCatDto) {
  console.log('Request body:', cat); // Check the incoming data
  this.catsService.create(cat);
  return 'Cat added successfully!';
}


  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto): string {
    return this.catsService.update(id, updateCatDto);
  }
}
