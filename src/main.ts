import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { checkEnvironmentVariables } from './security/variable-checks';

async function bootstrap() {
  checkEnvironmentVariables();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
