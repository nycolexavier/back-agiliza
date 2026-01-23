/* eslint-disable */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovimentacoesDto } from './dto/create-movimentacoe.dto';
import { UpdateMovimentacoeDto } from './dto/update-movimentacoe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MovimentacaoEstoque } from './entities/movimentacoe.entity';
import { Repository } from 'typeorm'

@Injectable()
export class MovimentacoesService {

  constructor(@InjectRepository(MovimentacaoEstoque) private readonly movimentacaoRepository: Repository<MovimentacaoEstoque>){}


 async create(createMovimentacoesDto: CreateMovimentacoesDto) {
    const movimentacao = this.movimentacaoRepository.create(createMovimentacoesDto);
    
    return this.movimentacaoRepository.save(movimentacao)
  }

 async findAll() {
return this.movimentacaoRepository.find() 
  }

 async findOne(id: string) {
   const movimentacao = await this.movimentacaoRepository.findOne({
    where: {id}
   })

   if(!movimentacao){
    throw new NotFoundException("Movimentação não encontrado")
   }

   return movimentacao
  }

 async update(id: string, updateMovimentacoeDto: UpdateMovimentacoeDto) {
   const movimentacao = await this.findOne(id)

   Object.assign(movimentacao, updateMovimentacoeDto)

   return this.movimentacaoRepository.save(movimentacao)
  }

 async remove(id: string) {
    const movimentacao = await this.findOne(id)
    await this.movimentacaoRepository.remove(movimentacao)
  }
}
