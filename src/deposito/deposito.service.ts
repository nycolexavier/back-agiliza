import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepositoDto } from './dto/create-deposito.dto';
import { UpdateDepositoDto } from './dto/update-deposito.dto';
import { Deposito } from './entities/deposito.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DepositoService {
  constructor(
    @InjectRepository(Deposito)
    private readonly depositoRepository: Repository<Deposito>,
  ) {}

  async create(createDepositoDto: CreateDepositoDto) {
    const corredorNormalizado = createDepositoDto.corredor
      .trim()
      .toLocaleLowerCase();

    const existeCorredor = await this.depositoRepository.findOne({
      where: { corredor: corredorNormalizado },
    });

    if (existeCorredor) {
      throw new NotFoundException('Corredor já foi cadastrado!');
    }
    const deposito = this.depositoRepository.create(createDepositoDto);

    return this.depositoRepository.save(deposito);
  }

  async findAll() {
    return this.depositoRepository.find();
  }

  async findOne(id: string) {
    const deposito = await this.depositoRepository.findOne({
      where: { id: id },
    });

    if (!deposito) {
      throw new NotFoundException('Deposito não encontrado');
    }

    return deposito;
  }

  async findDisponiveis() {
    return this.depositoRepository.find({
      where: {
        temProduto: false,
      },
    });
  }

  async update(id: string, updateDepositoDto: UpdateDepositoDto) {
    const deposito = await this.findOne(id);

    Object.assign(deposito, updateDepositoDto);

    return this.depositoRepository.save(deposito);
  }

  async remove(id: string) {
    const deposito = await this.findOne(id);

    await this.depositoRepository.remove(deposito);
  }
}
