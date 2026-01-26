import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDepositoDto {
  @IsString()
  @IsNotEmpty()
  corredor: string;

  @IsString()
  @IsNotEmpty()
  prateleira: string;

  @IsString()
  @IsNotEmpty()
  sessao: string;

  @IsString()
  quantidadeMaxima: string;
}
