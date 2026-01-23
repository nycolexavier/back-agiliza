/* eslint-disable */

import {BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

@Entity('marcas')
export class Marca {
      @PrimaryGeneratedColumn('uuid')
      id: string;
    
      @Column()
      nome: string;

          @CreateDateColumn({type: 'timestamp'})
          criadoEm:Date
      
          @UpdateDateColumn({type: 'timestamp'})
          atualizadoEm: Date
}
