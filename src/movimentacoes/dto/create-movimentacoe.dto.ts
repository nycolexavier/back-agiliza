/* eslint-disable */
import { IsNotEmpty, IsDateString, IsEnum, IsUUID, IsNumber, Min } from 'class-validator';

export class CreateMovimentacaoDto {
  @IsEnum(['entrada', 'saida'])
  @IsNotEmpty()
  tipo: 'entrada' | 'saida';

  @IsUUID()
  @IsNotEmpty()
  loteId: string; 

  @IsNumber()
  @Min(1)
  @IsNotEmpty()
  quantidade: number; 

  @IsDateString()
  @IsNotEmpty()
  dataMovimentacao: string; 

  @IsUUID()
  criadoPorId?: string;
}
