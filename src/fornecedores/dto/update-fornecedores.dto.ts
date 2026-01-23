import { PartialType } from '@nestjs/mapped-types';
import { CreateFornecedoresDto } from './create-fornecedores.dto';

export class UpdateFornecedoreDto extends PartialType(CreateFornecedoresDto) {}
