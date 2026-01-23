import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

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

  @IsNumber()
  quantMax: string;
}
