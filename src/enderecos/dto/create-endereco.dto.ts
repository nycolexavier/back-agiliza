import { IsString, IsUUID } from 'class-validator';

export class CreateEnderecoDto {
  @IsUUID()
  userId: string;

  @IsString()
  cep: string;

  @IsString()
  logradouro: string;

  @IsString()
  complemento: string;

  @IsString()
  bairro: string;

  @IsString()
  localidade: string;

  @IsString()
  estado: string;
}
