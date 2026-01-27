/* eslint-disable */
import { Module } from '@nestjs/common';
import { MovimentacoesService } from './movimentacoes.service';
import { MovimentacoesController } from './movimentacoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimentacaoEstoque } from './entities/movimentacoe.entity';
import { Lote } from 'src/lotes/entities/lote.entity';
import { Users } from 'src/users/entities/users.entity';

@Module({
    imports: [TypeOrmModule.forFeature([MovimentacaoEstoque, Lote, Users])],

  controllers: [MovimentacoesController],
  providers: [MovimentacoesService],
})
export class MovimentacoesModule {}
