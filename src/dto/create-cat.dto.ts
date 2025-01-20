/* eslint-disable prettier/prettier */
import { IsString, IsNumber } from 'class-validator';

export class CreateCatDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  breed: string;
}
