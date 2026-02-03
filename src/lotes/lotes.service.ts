import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lote } from './entities/lote.entity';
import { Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Deposito } from 'src/deposito/entities/deposito.entity';
import { Fornecedor } from 'src/fornecedores/entities/fornecedor.entity';

@Injectable()
export class LotesService {
  constructor(
    @InjectRepository(Lote)
    private readonly loterepository: Repository<Lote>,

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(Deposito)
    private readonly depositoRepository: Repository<Deposito>,

    @InjectRepository(Fornecedor)
    private readonly fornecedorRepository: Repository<Fornecedor>,
  ) {}

  async create(createLoteDto: CreateLoteDto) {
    const produto = await this.productRepository.findOne({
      where: { id: createLoteDto.produtoId },
    });

    if (!produto) {
      throw new BadRequestException('Produto não encontrado');
    }

    if (produto.isPerecivel === true && !createLoteDto.dataValidade) {
      throw new BadRequestException(
        'Lotes perecíveis precisam ter data de validade',
      );
    }

    if (produto.isPerecivel === false) {
      createLoteDto.dataValidade = null;
    }

    const deposito = await this.depositoRepository.findOne({
      where: { id: createLoteDto.depositoId },
    });

    if (!deposito) {
      throw new BadRequestException('Depósito não encontrado');
    }

    const fornecedor = await this.fornecedorRepository.findOne({
      where: { id: createLoteDto.fornecedorId },
    });

    if (!fornecedor) {
      throw new BadRequestException('Fornecedor não encontrado');
    }

    const existeCodigoLote = await this.loterepository.findOne({
      where: {
        codigoLote: createLoteDto.codigoLote,
      },
    });

    if (existeCodigoLote) {
      throw new BadRequestException('Código de lote já existe');
    }

    const existeCodigoBarra = await this.loterepository.findOne({
      where: {
        codigoBarra: createLoteDto.codigoBarra,
      },
    });

    if (existeCodigoBarra) {
      throw new BadRequestException('Código de barra já existe');
    }

    const lote = this.loterepository.create({
      precoCusto: createLoteDto.precoCusto,
      precoVenda: createLoteDto.precoVenda,
      quantidade: createLoteDto.quantidade,
      dataValidade: createLoteDto.dataValidade,
      codigoBarra: createLoteDto.codigoBarra,
      codigoLote: createLoteDto.codigoLote,

      produto: { id: createLoteDto.produtoId },
      deposito: { id: createLoteDto.depositoId },
      fornecedor: { id: createLoteDto.fornecedorId },
      marca: { id: createLoteDto.marcaId },
    });
    return this.loterepository.save(lote);
  }

  async findAll() {
    return this.loterepository
      .createQueryBuilder('lote')
      .leftJoinAndSelect('lote.produto', 'produto')
      .leftJoinAndSelect('lote.marca', 'marca')
      .leftJoinAndSelect('lote.deposito', 'deposito')
      .leftJoinAndSelect('lote.fornecedor', 'fornecedor')
      .select([
        'lote.id',
        'lote.precoCusto',
        'lote.precoVenda',
        'lote.quantidade',
        'lote.dataValidade',
        'lote.codigoBarra',
        'lote.codigoLote',

        'produto.id',
        'produto.nome',

        'marca.id',
        'marca.nome',

        'deposito.id',
        'deposito.corredor',

        'fornecedor.id',
        'fornecedor.nome',
      ])
      .getMany();
  }

  async findOne(id: string) {
    const lote = await this.loterepository.findOne({
      where: { id },
    });

    if (!lote) {
      throw new NotFoundException('Lote não encontrado');
    }

    return lote;
  }

  async update(id: string, updateLoteDto: UpdateLoteDto) {
    const lote = await this.findOne(id);

    Object.assign(lote, updateLoteDto);

    return this.loterepository.save(lote);
  }

  async remove(id: string) {
    const lote = await this.findOne(id);

    await this.loterepository.remove(lote);
  }
}
