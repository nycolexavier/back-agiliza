/* eslint-disable */

import {BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
export class Marca {
      @PrimaryGeneratedColumn('uuid')
      id: string;
    
      @Column()
      name: string;

          @CreateDateColumn({type: 'timestamp'})
          criadoEm:Date
      
          @UpdateDateColumn({type: 'timestamp'})
          atualizadoEm: Date
}
