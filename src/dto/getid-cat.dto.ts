/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from 'class-validator';

export class GetCatByIdDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
