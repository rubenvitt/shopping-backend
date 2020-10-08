import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { checkEnvironmentVariables } from './security/variable-checks';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  checkEnvironmentVariables();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    disableErrorMessages: process.env.NODE_ENV !== 'development'
  }))
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
