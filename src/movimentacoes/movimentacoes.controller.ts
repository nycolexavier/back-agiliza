/* eslint-disable */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovimentacoesService } from './movimentacoes.service';
import { CreateMovimentacoesDto } from './dto/create-movimentacoe.dto';
import { UpdateMovimentacoeDto } from './dto/update-movimentacoe.dto';

@Controller('movimentacoes')
export class MovimentacoesController {
  constructor(private readonly movimentacoesService: MovimentacoesService) {}

  @Post()
  create(@Body() createMovimentacoesDto: CreateMovimentacoesDto) {
    return this.movimentacoesService.create(createMovimentacoesDto);
  }

  @Get()
  findAll() {
    return this.movimentacoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movimentacoesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovimentacoeDto: UpdateMovimentacoeDto) {
    return this.movimentacoesService.update(id, updateMovimentacoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movimentacoesService.remove(id);
  }
}
