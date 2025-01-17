/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface'; 

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  update(id: string, updatecat: Partial<Cat>): string {
    const index = this.cats.findIndex((cat) =>cat.id === id);

    if (index === -1) {
      return `id not found${id}`
    }

    this.cats[index] = {...this.cats[index], ...updatecat};
    return `cat with ${id}`;
    
  }
}
