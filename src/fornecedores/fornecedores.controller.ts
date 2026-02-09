/* eslint-disable */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FornecedoresService } from './fornecedores.service';
import { CreateFornecedoresDto } from './dto/create-fornecedores.dto';
import { UpdateFornecedoreDto } from './dto/update-fornecedores.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/strategies/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('fornecedores')
export class FornecedoresController {
  constructor(private readonly fornecedoresService: FornecedoresService) {}

  @Post()
  create(@Body() createFornecedoresDto: CreateFornecedoresDto) {
    return this.fornecedoresService.create(createFornecedoresDto);
  }

  @Get()
  findAll() {
    return this.fornecedoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fornecedoresService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFornecedoreDto: UpdateFornecedoreDto) {
    return this.fornecedoresService.update(id, updateFornecedoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fornecedoresService.remove(id);
  }
}
