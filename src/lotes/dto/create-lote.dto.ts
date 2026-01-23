/* eslint-disable */
import { IsNumber, IsNotEmpty, IsDateString, IsString, Length } from "class-validator";

export class CreateLoteDto {
      @IsNumber()
  @IsNotEmpty()
  precoCusto: string;

    @IsNumber()
  @IsNotEmpty()
  precoVenda: string;

    @IsNumber()
  @IsNotEmpty()
  quantidade: string;

  
  @IsDateString()
  @IsNotEmpty()
  dataValidade: string;

    @IsString()
  @Length(1, 13)
  @IsNotEmpty()
  codigoBarra: string;

  @IsString()
  @IsNotEmpty()
  codigoLote: string;
}
