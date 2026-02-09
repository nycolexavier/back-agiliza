import { IsBoolean, IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  nome: string;

  @IsBoolean()
  isPerecivel?: boolean;

  @IsString()
  @MaxLength(255)
  sku: string;

  @IsString()
  @MaxLength(500)
  descricao: string;

  @IsUUID()
  categoriaId: string;
}
