import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateDepositoDto {
  @IsString()
  @IsNotEmpty()
  corredor: string;

  @IsBoolean()
  temProduto: boolean;
}
