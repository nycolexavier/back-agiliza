/* eslint-disable */

import {BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm'
import { randomUUID } from 'node:crypto';
import { CargoUsuario } from '../enums/cargoUsuario';
import { Status } from '../../enums/status.enum';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

    @Column({
    type: 'enum',
    enum: CargoUsuario,
    default: CargoUsuario.FUNCIONARIO,
  })
  cargo: CargoUsuario;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ATIVO
  })
  status:Status;

  @Column()
  email: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  telefone: string;

  @CreateDateColumn({type: 'timestamp'})
  created_at: Date

  @BeforeInsert()
  generatedId(){
    if(this.id){
      return    }

      this.id = randomUUID();
  }
}
