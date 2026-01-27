/* eslint-disable */
import { IsNumber, IsNotEmpty, IsDateString, IsString, Length, IsUUID } from "class-validator";

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

   @IsUUID()
  produtoId: string;

   @IsUUID()
  marcaId: string;

   @IsUUID()
  depositoId: string;

  @IsUUID()
  fornecedorId: string;
  
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

   @IsString()
  status: string
}
