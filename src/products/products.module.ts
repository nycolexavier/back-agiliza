/* eslint-disable */
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from 'src/categorias/entities/categoria.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Categoria])
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
