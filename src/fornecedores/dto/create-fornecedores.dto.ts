/* eslint-disable */
import { IsString, IsNotEmpty, IsEnum } from "class-validator";

export class CreateFornecedoresDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
     email: string
  
   @IsString()
   telefone: string
}
