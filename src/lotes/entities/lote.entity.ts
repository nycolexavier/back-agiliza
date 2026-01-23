/* eslint-disable */

import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

@Entity('Lotes')
export class Lote {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    precoCusto: string

    @Column()
    precoVenda: string

    @Column()
    quantidade: string

    @Column()
    dataValidade: Date

    @Column({length: 13, unique: true})
    codigoBarra: string

    @Column({type: 'varchar', length: 50})
    codigoLote: string

    @CreateDateColumn({type: 'timestamp'})
    criadoEm:Date
      
    @UpdateDateColumn({type: 'timestamp'})
    atualizadoEm: Date
}