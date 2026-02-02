/* eslint-disable */
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Marca } from './entities/marca.entity';
import { Repository } from 'typeorm'

@Injectable()
export class MarcasService {

  constructor(@InjectRepository(Marca)
  private readonly marcaRepository: Repository<Marca>
){}

 async create(createMarcaDto: CreateMarcaDto) {
     const existeMarca = await this.marcaRepository.findOne({
    where: {nome: createMarcaDto.nome}
   })

   if(existeMarca){
     throw new BadRequestException("Marca já existe")
   }

    const marca = this.marcaRepository.create({...createMarcaDto} as Marca)

   return this.marcaRepository.save(marca);
  }

 async findAll() {
   return this.marcaRepository.find()
  }

 async findOne(id: string) {
   const marca = await this.marcaRepository.findOne({
    where: {id}
   })

   if(!marca){
    throw new NotFoundException("Marca não encontrado")
   }

   return marca;
  }

 async update(id: string, updateMarcaDto: UpdateMarcaDto) {
    const marca = await this.findOne(id)

    Object.assign(marca, updateMarcaDto)

    return this.marcaRepository.save(marca)
  }

 async remove(id: string) {
    const marca = await this.findOne(id)

    await this.marcaRepository.remove(marca)
  }
}
