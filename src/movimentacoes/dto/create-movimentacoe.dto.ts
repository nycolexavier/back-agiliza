/* eslint-disable */
import { IsDateString, IsEnum, IsNumber } from "class-validator";

export class CreateMovimentacoesDto {


    @IsNumber()
    quantidade: number;

    @IsDateString()
    dataMovimentacao: Date;

    @IsEnum(['entrada', 'saida'])
    tipo: 'entrada' | 'saida'

}
