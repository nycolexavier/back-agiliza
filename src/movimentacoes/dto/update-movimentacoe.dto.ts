/* eslint-disable */
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovimentacoesDto } from './create-movimentacoe.dto';

export class UpdateMovimentacoeDto extends PartialType(CreateMovimentacoesDto) {}
