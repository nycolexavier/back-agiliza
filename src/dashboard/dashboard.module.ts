import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fornecedor } from 'src/fornecedores/entities/fornecedor.entity';
import { Product } from 'src/products/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fornecedor, Product])],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
