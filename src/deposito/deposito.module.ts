/* eslint-disable */
import { Module } from '@nestjs/common';
import { DepositoService } from './deposito.service';
import { DepositoController } from './deposito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deposito } from './entities/deposito.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deposito])],
  controllers: [DepositoController],
  providers: [DepositoService],
})
export class DepositoModule {}
