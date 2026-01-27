/* eslint-disable */

import { IsString } from "class-validator"


export class CreateUserDTO{
    @IsString()
   readonly name: string

      @IsString()
   readonly email: string

    @IsString()
   readonly description: string

    @IsString({each: true}) // verifica se cada item do array é string
   readonly tags: string[]
}