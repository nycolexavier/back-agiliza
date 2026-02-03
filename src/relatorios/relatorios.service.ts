/* eslint-disable */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRelatorioDto } from './dto/create-relatorio.dto';
import { UpdateRelatorioDto } from './dto/update-relatorio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Lote } from 'src/lotes/entities/lote.entity';

@Injectable()
export class RelatoriosService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    @InjectRepository(Lote)
    private loteRepository: Repository<Lote>,
  ){}

   async produtosProximosVencimento() {
    // // 📅 hoje
    // const hoje = new Date();

    // // 📅 hoje + 30 dias
    // const limite = new Date();
    // limite.setDate(hoje.getDate() + 30);

    // const produtos = await this.loteRepository
    //   .createQueryBuilder('lote')
    //   .where('lote.dataValidade <= :limite', { limite })
    //   .getMany();

    // // 🧮 calcular dias restantes
    // return produtos.map(lote => {
    //   const diffTime =
    //     new Date(lote.dataValidade).getTime() - hoje.getTime();

    //   const diasParaVencer = Math.ceil(
    //     diffTime / (1000 * 60 * 60 * 24),
    //   );

    //   return {
    //     id: lote.id,
    //     // nome: lote.nome,
    //     quantidade: lote.quantidade,
    //     dataValidade: lote.dataValidade,
    //     diasParaVencer,
    //   };
    // });
  }

  async rastreamentoPorLote(loteId: string){
    const lote = await this.loteRepository
    .createQueryBuilder('lote')
    .leftJoinAndSelect('lote.produto', 'produto')
    .leftJoinAndSelect('lote.deposito', 'deposito')
    .where('lote.id = :loteId', {loteId})
    .getOne();

    if(!lote){
      throw new NotFoundException("Lote não encontrado")
    }

    return {
          loteId: lote.id,
    codigoLote: lote.codigoLote,
    dataValidade: lote.dataValidade,
    codigoBarra: lote.codigoBarra,

    produto: {
      id: lote.produto.id,
      nome: lote.produto.nome,
    },

    deposito: {
      id: lote.deposito.id,
      corredor: lote.deposito.corredor,
    },

    quantidadeDisponivel: Number(lote.quantidade),
  };
    }

  create(createRelatorioDto: CreateRelatorioDto) {
    return 'This action adds a new relatorio';
  }

  findAll() {
    return `This action returns all relatorios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} relatorio`;
  }

  update(id: number, updateRelatorioDto: UpdateRelatorioDto) {
    return `This action updates a #${id} relatorio`;
  }

  remove(id: number) {
    return `This action removes a #${id} relatorio`;
  }
}
