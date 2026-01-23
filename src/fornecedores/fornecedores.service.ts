/* eslint-disable */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFornecedoresDto } from './dto/create-fornecedores.dto';
import { UpdateFornecedoreDto } from './dto/update-fornecedores.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Fornecedor } from './entities/fornecedor.entity';
import { Repository } from 'typeorm'

@Injectable()
export class FornecedoresService {

  constructor(@InjectRepository(Fornecedor) private readonly fornecedorRepository: Repository<Fornecedor> ){}

async create(createFornecedoresDto: CreateFornecedoresDto) {
  const fornecedor = this.fornecedorRepository.create(createFornecedoresDto)  
  
  return this.fornecedorRepository.save(fornecedor)
  }

 async findAll() {
  return this.fornecedorRepository.find()
  }

async  findOne(id: string) {
   const fornecedor = await this.fornecedorRepository.findOne({
    where: {id}
   })
  
   if(!fornecedor){
    throw new NotFoundException("Fornecedor não encontrado")
   }

   return fornecedor

  }

 async update(id: string, updateFornecedoresDto: UpdateFornecedoreDto) {
    const fornecedor = await this.findOne(id)

    Object.assign(fornecedor, updateFornecedoresDto)

    return this.fornecedorRepository.save(fornecedor)
  }

 async remove(id: string) {
    const fornecedor = await this.findOne(id)

    await this.fornecedorRepository.remove(fornecedor)
  }
}
