import { IsEnum, IsString, MinLength } from 'class-validator';
import { CargoUsuario } from '../enums/cargoUsuario';
import { Status } from '../../enums/status.enum';

export class CreateUserDTO {
  @IsString()
  readonly name: string;

  @IsString()
  readonly email: string;

  @IsString()
  status: Status;

  @IsEnum(CargoUsuario)
  cargo: CargoUsuario;

  @IsString()
  telefone: string;

  @IsString()
  @MinLength(6)
  senha: string;
}
