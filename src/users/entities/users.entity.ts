/* eslint-disable */

import {BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm'
import { Tag } from './tags.entity';
import { randomUUID } from 'node:crypto';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @JoinTable()
  @ManyToMany(() => Tag, tag => tag.users, {
    cascade: true,
  })
  tags: Tag[];

  @CreateDateColumn({type: 'timestamp'})
  created_at: Date

  @BeforeInsert()
  generatedId(){
    if(this.id){
      return    }

      this.id = randomUUID();
  }
}
