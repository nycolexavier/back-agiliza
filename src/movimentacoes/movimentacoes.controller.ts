/* eslint-disable */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovimentacoesService } from './movimentacoes.service';
import { CreateMovimentacaoDto } from './dto/create-movimentacoe.dto';
import { UpdateMovimentacoeDto } from './dto/update-movimentacoe.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/strategies/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('movimentacoes')
export class MovimentacoesController {
  constructor(private readonly movimentacoesService: MovimentacoesService) {}

  @Post()
  create(@Body() createMovimentacoesDto: CreateMovimentacaoDto) {
    return this.movimentacoesService.create(createMovimentacoesDto);
  }

  @Get()
  findAll() {
    return this.movimentacoesService.findAll();
  }

  @Get('lote/:loteId')
findByLote(@Param('loteId') loteId: string) {
  return this.movimentacoesService.findByLote(loteId);
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
