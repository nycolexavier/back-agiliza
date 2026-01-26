/* eslint-disable */
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lote } from './entities/lote.entity';
import { Repository } from 'typeorm'

@Injectable()
export class LotesService {

  constructor(@InjectRepository(Lote) private readonly loterepository: Repository<Lote>){}  

 async create(createLoteDto: CreateLoteDto) {
  
  const existeCodigoLote = await this.loterepository.findOne({
    where: {
      codigoLote: createLoteDto.codigoLote
    }
  })

   if(existeCodigoLote){
    throw new BadRequestException("Código de lote já existe")
  }

    const existeCodigoBarra = await this.loterepository.findOne({
    where: {
      codigoBarra: createLoteDto.codigoBarra
    }
  })

   if(existeCodigoBarra){
    throw new BadRequestException("Código de barra já existe")
  }

  
    const lote = this.loterepository.create(createLoteDto)
      return this.loterepository.save(lote)
  }

 async findAll() {
    return this.loterepository.find()
  }

 async findOne(id: string) {
   const lote = await this.loterepository.findOne({
    where: {id}
   })

   if(!lote)
   {
    throw new NotFoundException("Lote não encontrado")
   }

   return lote
  }

 async update(id: string, updateLoteDto: UpdateLoteDto) {
  const lote = await this.findOne(id)

  Object.assign(lote, updateLoteDto)

  return this.loterepository.save(lote)
  }

 async remove(id: string) {
    const lote = await this.findOne(id)

    await this.loterepository.remove(lote)
  }
}
