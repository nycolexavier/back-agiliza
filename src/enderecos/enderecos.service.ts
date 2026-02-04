import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { Enderecos } from './entities/endereco.entity';

@Injectable()
export class EnderecosService {
  constructor(
    @InjectRepository(Enderecos)
    private readonly enderecoRepository: Repository<Enderecos>,

    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async create(createEnderecoDto: CreateEnderecoDto) {
    const usuario = await this.userRepository.findOne({
      where: { id: createEnderecoDto.userId },
    });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado.');
    }

    const endereco = this.enderecoRepository.create({
      ...createEnderecoDto,
      usuario,
    });

    return this.enderecoRepository.save(endereco);
  }

  async findAll() {
    return this.enderecoRepository.find({
      relations: ['usuario'],
    });
  }

  async findOne(id: string) {
    const endereco = await this.enderecoRepository.findOne({
      where: { id },
    });

    if (!endereco) {
      throw new NotFoundException('Endereço não encontrado');
    }

    return endereco;
  }

  async update(id: string, updateEnderecoDto: UpdateEnderecoDto) {
    const endereco = await this.findOne(id);

    Object.assign(endereco, updateEnderecoDto);

    return this.enderecoRepository.save(endereco);
  }

  async remove(id: string) {
    const endereco = await this.findOne(id);

    await this.enderecoRepository.remove(endereco);
  }
}
