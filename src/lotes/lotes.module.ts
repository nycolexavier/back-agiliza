/* eslint-disable */
import { Module } from '@nestjs/common';
import { LotesService } from './lotes.service';
import { LotesController } from './lotes.controller';
import { Lote } from './entities/lote.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../products/entities/product.entity';
import { Deposito } from '../deposito/entities/deposito.entity';
import { Fornecedor } from '../fornecedores/entities/fornecedor.entity';
import { Marca } from '../marcas/entities/marca.entity';


@Module({
   imports: [TypeOrmModule.forFeature([Lote,      Product,
      Deposito,
      Fornecedor,
      Marca,])],
  controllers: [LotesController],
  providers: [LotesService],
})
export class LotesModule {}
