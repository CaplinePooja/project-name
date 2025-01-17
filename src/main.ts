/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { CatsModule } from './cats.module';

async function bootstrap() {
  const app = await NestFactory.create(CatsModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
