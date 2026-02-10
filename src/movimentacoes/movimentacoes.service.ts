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
import { Deposito } from 'src/deposito/entities/deposito.entity';

@Injectable()
export class MovimentacoesService {
  constructor(
    @InjectRepository(MovimentacaoEstoque)
    private readonly movimentacaoRepository: Repository<MovimentacaoEstoque>,

    @InjectRepository(Lote)
    private loteRepository: Repository<Lote>,
    @InjectRepository(Users)
    private userRepository: Repository<Users>,

    @InjectRepository(Deposito)
    private readonly depositoRepository: Repository<Deposito>,
  ) {}

  async create(createMovimentacoesDto: CreateMovimentacaoDto) {
    const lote = await this.loteRepository.findOne({
      where: { id: createMovimentacoesDto.loteId },
      relations: ['deposito'],
    });
    if (!lote) throw new NotFoundException('Lote não encontrado');

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

      if (Number(lote.quantidade) === 0) {
        lote.deposito.temProduto = false;
        await this.depositoRepository.save(lote.deposito);
      }
    }

    await this.loteRepository.save(lote);

    return this.movimentacaoRepository.save(movimentacao);
  }

  async findAll() {
    return this.movimentacaoRepository.find();
  }

  async findByLote(loteId: string) {
    return this.movimentacaoRepository
      .createQueryBuilder('movimentacao')
      .leftJoinAndSelect('movimentacao.lote', 'lote')
      .where('lote.id = :loteId', { loteId })
      .orderBy('movimentacao.dataMovimentacao', 'ASC')
      .getMany();
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
