import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  async create(createCategoriaDto: CreateCategoriaDto) {
    const existeCategoria = await this.categoriaRepository.findOne({
      where: { nome: createCategoriaDto.nome },
    });

    if (existeCategoria) {
      throw new BadRequestException('Categoria já existe');
    }

    const categoria = this.categoriaRepository.create({
      ...createCategoriaDto,
    } as Categoria);

    return this.categoriaRepository.save(categoria);
  }

  async findAll() {
    return this.categoriaRepository.find();
  }

  async findOne(id: string) {
    const categoria = await this.categoriaRepository.findOne({
      where: { id: id },
    });

    if (!categoria) {
      throw new NotFoundException('Categoria não encontrado');
    }

    return categoria;
  }

  async update(id: string, updateCategoriaDto: UpdateCategoriaDto) {
    const categoria = await this.findOne(id);

    Object.assign(categoria, updateCategoriaDto);

    return this.categoriaRepository.save(categoria);
  }

  async remove(id: string) {
    const categoria = await this.findOne(id);

    await this.categoriaRepository.remove(categoria);
  }
}
