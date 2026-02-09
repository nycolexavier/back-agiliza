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
    return this.userRepository
      .createQueryBuilder('user')
      .addSelect('user.senha')
      .where('user.email = :email', { email })
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
    const existeUsuario = await this.userRepository.findOne({
      where: { email: createUserDTO.email },
    });

    if (existeUsuario) {
      throw new BadRequestException(
        'Não é possível cadastrar com esse email. Tente outro.',
      );
    }

    const senhaHash = await bcrypt.hash(createUserDTO.senha, 10);

    const user = this.userRepository.create({
      ...createUserDTO,
      senha: senhaHash,
    });

    return this.userRepository.save(user);
  }

  async update(id: string, updateUserDTO: UpdateUserDTO) {
    const user =
      updateUserDTO &&
      (await this.userRepository.preload({
        ...updateUserDTO,
        id: id,
      }));
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
