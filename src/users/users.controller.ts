/* eslint-disable */


import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() CreateUserDTO: CreateUserDTO){
    return this.usersService.create(CreateUserDTO);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateUserDTO: UpdateUserDTO){
    return this.usersService.update(id, UpdateUserDTO);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string){
    return this.usersService.remove(id);
  }
}
