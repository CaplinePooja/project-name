/* eslint-disable prettier/prettier */
import { Exclude, Expose } from 'class-transformer';

export class Cat {
  @Exclude() 
  id: string;

  @Expose() 
  name: string;

  @Expose()
  age: number;

  @Expose()
  breed: string;

  constructor(partial: Partial<Cat>) {
    Object.assign(this, partial);
  }
}
