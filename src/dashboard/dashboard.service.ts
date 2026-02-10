import { Injectable } from '@nestjs/common';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/strategies/jwt-auth.guard';
import { InjectRepository } from '@nestjs/typeorm';
import { Fornecedor } from 'src/fornecedores/entities/fornecedor.entity';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';

@UseGuards(JwtAuthGuard)
@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Fornecedor)
    private readonly fornecedorRepository: Repository<Fornecedor>,

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(createDashboardDto: CreateDashboardDto) {
    return 'This action adds a new dashboard';
  }

  async findAll() {
    const totalFornecedores = await this.fornecedorRepository.count();
    const totalProdutos = await this.productRepository.count();

    return {
      quantiaTotal: totalFornecedores,
      totalProdutos: totalProdutos,
      totalDeItensEstoque: 0,
      pertoVencimento: 0,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} dashboard`;
  }

  update(id: number, updateDashboardDto: UpdateDashboardDto) {
    return `This action updates a #${id} dashboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} dashboard`;
  }
}
