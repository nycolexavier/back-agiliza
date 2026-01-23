/* eslint-disable */
import { IsString, IsNotEmpty } from "class-validator";

export class CreateFornecedoresDto {
      @IsString()
  @IsNotEmpty()
  nome: string;
}
