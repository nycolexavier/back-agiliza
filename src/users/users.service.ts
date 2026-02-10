import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async findByEmailWithPassword(email: string) {
    const emailNormalizado = email.toLowerCase().trim();

    return this.userRepository
      .createQueryBuilder('user')
      .addSelect('user.senha')
      .where('user.email = :email', { email: emailNormalizado })
      .getOne();
  }

  async findAll() {
    return this.userRepository.find({});
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new NotFoundException(`Usuário ID ${id} não encontrado`);
    }
    return user;
  }

  async create(createUserDTO: CreateUserDTO) {
    const emailNormalizado = createUserDTO.email
      .toLocaleLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    const existeUsuario = await this.userRepository.findOne({
      where: { email: emailNormalizado },
    });

    if (existeUsuario) {
      throw new BadRequestException(
        'Não é possível cadastrar com esse email. Tente outro.',
      );
    }

    const senhaHash = await bcrypt.hash(createUserDTO.senha, 10);

    const user = this.userRepository.create({
      ...createUserDTO,
      email: emailNormalizado,
      senha: senhaHash,
    });

    return this.userRepository.save(user);
  }

  async update(id: string, updateUserDTO: UpdateUserDTO) {
    const dadosAtualizados = {
      ...updateUserDTO,
    };

    if (dadosAtualizados.email) {
      dadosAtualizados.email = dadosAtualizados.email
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    }

    if (dadosAtualizados.senha) {
      dadosAtualizados.senha = await bcrypt.hash(dadosAtualizados.senha, 10);
    }

    const user = await this.userRepository.preload({
      ...dadosAtualizados,
      id,
    });

    if (!user) {
      throw new NotFoundException(`Usuário ID ${id} não encontrado`);
    }

    return this.userRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.userRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new NotFoundException(`Usuário ID ${id} não encontrado`);
    }
    return this.userRepository.remove(user);
  }
}
