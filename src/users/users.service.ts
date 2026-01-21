/* eslint-disable */

import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Users } from './entities/users.entity';
import {Repository} from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './entities/tags.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,

        @InjectRepository(Users)
    private readonly tagRepository: Repository<Tag>
  ) {}

 async findAll(){
    return this.userRepository.find({
      relations: ['tags'],
    })
  }

 async findOne(id:string){
    const user = await this.userRepository.findOne({
      where: {
        id : id,
      },
      relations: ['tags']
    })
    if(!user){
        throw new NotFoundException(`Usuário ID ${id} não encontrado`)
    }
    return user
  }

 async create(createUserDTO: CreateUserDTO){
  const tags = await Promise.all(
    createUserDTO.tags.map(name => this.preloadTagByName(name))
  )
    const user = this.userRepository.create({
      ...createUserDTO,
      tags,
    })
    return this.userRepository.save(user)
  }

 async update(id:string, updateUserDTO: UpdateUserDTO){

  const tags = updateUserDTO.tags && (await Promise.all(
    updateUserDTO.tags.map(name => this.preloadTagByName(name))
  ))

const user =updateUserDTO.tags &&  await this.userRepository.preload({
  ...updateUserDTO,
  id:id,
  tags,
})
if(!user){
   throw new NotFoundException(`Usuário ID ${id} não encontrado`)
}
return this.userRepository.save(user)
  }



 async remove(id:string){
   const user = await this.userRepository.findOne({
    where: {
      id: id
    }
   })
   if(!user){
   throw new NotFoundException(`Usuário ID ${id} não encontrado`)
}
return this.userRepository.remove(user)
  }

  private async preloadTagByName(name: string): Promise<Tag>{
    const tag = await this.tagRepository.findOne({
      where: {
        name
      }
    })
    if(tag){
      return tag
    }

    return this.tagRepository.create({
      name
    })
  }
}
