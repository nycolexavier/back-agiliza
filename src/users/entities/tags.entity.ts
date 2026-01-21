/* eslint-disable */

import {BeforeInsert, Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm"
import { Users } from "./users.entity"
import { randomUUID } from "node:crypto"

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

    @Column()
    name: string

    @ManyToMany(() => Users, users => users.tags)
    users: Users[]

      @CreateDateColumn({type: 'timestamp'})
      created_at: Date
    
      @BeforeInsert()
      generatedId(){
        if(this.id){
          return    }
    
          this.id = randomUUID();
      }
}