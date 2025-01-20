/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { GetCatByIdDto } from './dto/getid-cat.dto';
import { GetAllCatsDto } from './dto/getall-cat.dto';
import { Cat } from './cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
async getAllCats(@Query() getAllCatsDto: GetAllCatsDto): Promise<Cat[]> {
  return this.catsService.getAllCats(getAllCatsDto);
}


@Get(':id')
async getCatById(@Param() params: GetCatByIdDto): Promise<Cat> {
  return this.catsService.getCatById(params.id);
}


  @Post()
  async createCat(@Body() createCatDto: CreateCatDto): Promise<string> {
    await this.catsService.createCat(createCatDto);
    return 'Cat created successfully!';
  }

  @Put(':id')
  async updateCat(
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto,
  ): Promise<string> {
    await this.catsService.updateCat(id, updateCatDto);
    return `Cat with ID ${id} updated successfully!`;
  }

  @Delete(':id')
  async deleteCat(@Param('id') id: string): Promise<string> {
    await this.catsService.deleteCat(id);
    return `Cat with ID ${id} deleted successfully!`;
  }
}
