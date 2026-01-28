/* eslint-disable */

import { IsEnum, IsString } from "class-validator"
import { CargoUsuario } from "../enums/cargoUsuario"


export class CreateUserDTO{
    @IsString()
   readonly name: string

      @IsString()
   readonly email: string

   @IsEnum(CargoUsuario)
   cargo: CargoUsuario

   @IsString()
   telefone: string
}