import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const nomeNormalizado = createProductDto.nome.trim().toLocaleLowerCase();

    const existeNome = await this.productRepository.findOne({
      where: {
        nome: nomeNormalizado,
      },
    });

    if (existeNome) {
      throw new NotFoundException('Nome de produto já existe');
    }

    const existeSku = await this.productRepository.findOne({
      where: {
        sku: createProductDto.sku,
      },
    });

    if (existeSku) {
      throw new NotFoundException('SKU já existe');
    }

    const produto = this.productRepository.create({
      ...createProductDto,
      nome: nomeNormalizado,
    });

    return this.productRepository.save(produto);
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: string): Promise<Product> {
    const produto = await this.productRepository.findOne({
      where: { id },
    });

    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }

    return produto;
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const produto = await this.findOne(id);

    Object.assign(produto, updateProductDto);

    return this.productRepository.save(produto);
  }

  async remove(id: string) {
    const produto = await this.findOne(id);
    await this.productRepository.remove(produto);
  }
}
