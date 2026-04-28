/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: AppModule.CONFIGURATION?.TCP_SERV?.TCP_INVOICE_SERVICE?.options?.host ?? 'localhost',
      port: AppModule.CONFIGURATION?.TCP_SERV?.TCP_INVOICE_SERVICE?.options?.port ?? 3001,
    },
  });
  await app.startAllMicroservices();
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.INVOICE_PORT || 3000;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
