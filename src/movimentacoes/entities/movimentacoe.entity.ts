/* eslint-disable */

import {BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

@Entity('movimentacoes')
export class MovimentacaoEstoque {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'numeric'})
    
      @Column({ type: 'varchar' })
  tipo: 'entrada' | 'saida';

    @Column({type: 'date'})
    dataMovimentacao:Date

    @CreateDateColumn({type: 'timestamp'})
    criadoEm:Date
    
    @UpdateDateColumn({type: 'timestamp'})
    atualizadoEm: Date
}
