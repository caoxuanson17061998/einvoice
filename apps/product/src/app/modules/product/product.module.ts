import { TypeOrmProvider } from '@common/configuration/type-orm.config';
import { Product } from '@common/entities/product.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmProvider, TypeOrmModule.forFeature([Product])],
  controllers: [],
  providers: [],
  exports: [],
})
export class ProductModule {}
