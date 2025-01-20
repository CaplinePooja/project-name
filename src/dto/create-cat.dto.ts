/* eslint-disable prettier/prettier */
import { IsString, IsNumber } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

export class CreateCatDto {
  @Exclude()
  id: string;

  @IsString()
  @Expose() 
  name: string;

  @IsNumber()
  @Expose() 
  age: number;

  @IsString()
  @Expose() 
  breed: string;
}
