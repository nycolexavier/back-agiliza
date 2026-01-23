/* eslint-disable */
import { IsNotEmpty, IsString } from "class-validator";

export class CreateMarcaDto {

      @IsString()
  @IsNotEmpty()
    nome: string
}
