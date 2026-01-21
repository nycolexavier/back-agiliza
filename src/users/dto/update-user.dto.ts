/* eslint-disable */

import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDTO } from "./create-user.dto";

// extende parcialmente
export class UpdateUserDTO extends PartialType(CreateUserDTO){
 
}