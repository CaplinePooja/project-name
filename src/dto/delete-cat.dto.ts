/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class DeleteCatDto {
  @IsString()
  id: string;
}
