/* eslint-disable */
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovimentacaoDto } from './create-movimentacoe.dto';

export class UpdateMovimentacoeDto extends PartialType(CreateMovimentacaoDto) {}
