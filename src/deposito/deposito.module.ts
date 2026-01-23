import { Module } from '@nestjs/common';
import { DepositoService } from './deposito.service';
import { DepositoController } from './deposito.controller';

@Module({
  controllers: [DepositoController],
  providers: [DepositoService],
})
export class DepositoModule {}
