/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { CatsModule } from './cats.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(CatsModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, 
      forbidNonWhitelisted: true, 
      transform: true, 
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
