/* eslint-disable */

import { Lote } from '../../lotes/entities/lote.entity';
import {BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

@Entity('marcas')
export class Marca {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    nome: string;

@Column({ nullable: true })
logo: string;

  @OneToMany(() => Lote, (lote) => lote.marca)
  lotes: Lote[];

    @CreateDateColumn({type: 'timestamp'})
    criadoEm:Date
      
    @UpdateDateColumn({type: 'timestamp'})
    atualizadoEm: Date
}
