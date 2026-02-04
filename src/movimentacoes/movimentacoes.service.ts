import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMovimentacaoDto } from './dto/create-movimentacoe.dto';
import { UpdateMovimentacoeDto } from './dto/update-movimentacoe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MovimentacaoEstoque } from './entities/movimentacoe.entity';
import { Repository } from 'typeorm';
import { Lote } from 'src/lotes/entities/lote.entity';
import { Users } from 'src/users/entities/users.entity';

@Injectable()
export class MovimentacoesService {
  constructor(
    @InjectRepository(MovimentacaoEstoque)
    private readonly movimentacaoRepository: Repository<MovimentacaoEstoque>,

    @InjectRepository(Lote)
    private loteRepository: Repository<Lote>,
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async create(createMovimentacoesDto: CreateMovimentacaoDto) {
    const lote = await this.loteRepository.findOne({
      where: { id: createMovimentacoesDto.loteId },
    });
    if (!lote) throw new NotFoundException('Lote não encontrado');

    // Valida se a saída não é maior que a quantidade disponível
    if (
      createMovimentacoesDto.tipo === 'saida' &&
      createMovimentacoesDto.quantidade > Number(lote.quantidade)
    ) {
      throw new BadRequestException(
        'Quantidade de saída maior que estoque disponível',
      );
    }

    const movimentacao = this.movimentacaoRepository.create({
      tipo: createMovimentacoesDto.tipo,
      quantidade: createMovimentacoesDto.quantidade,
      dataMovimentacao: createMovimentacoesDto.dataMovimentacao,
      lote,
    });

    if (createMovimentacoesDto.tipo === 'entrada') {
      lote.quantidade = (
        Number(lote.quantidade) + createMovimentacoesDto.quantidade
      ).toString();
    } else {
      lote.quantidade = (
        Number(lote.quantidade) - createMovimentacoesDto.quantidade
      ).toString();
    }

    await this.loteRepository.save(lote);

    return this.movimentacaoRepository.save(movimentacao);
  }

  async findAll() {
    return this.movimentacaoRepository.find();
  }

  async findOne(id: string) {
    const movimentacao = await this.movimentacaoRepository.findOne({
      where: { id },
    });

    if (!movimentacao) {
      throw new NotFoundException('Movimentação não encontrado');
    }

    return movimentacao;
  }

  async update(id: string, updateMovimentacoeDto: UpdateMovimentacoeDto) {
    const movimentacao = await this.findOne(id);

    Object.assign(movimentacao, updateMovimentacoeDto);

    return this.movimentacaoRepository.save(movimentacao);
  }

  async remove(id: string) {
    const movimentacao = await this.findOne(id);
    await this.movimentacaoRepository.remove(movimentacao);
  }
}
