import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CONFIGURATION, TConfiguration } from '../configuration';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from '@common/middlewares/logger.middleware';
import { MiddlewareConsumer, Module } from '@nestjs/common';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [() => CONFIGURATION] })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static CONFIGURATION: TConfiguration = CONFIGURATION;

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
