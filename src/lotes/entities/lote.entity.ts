/* eslint-disable */

import { Marca } from '../../marcas/entities/marca.entity';
import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

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

    @Column({ unique: true, type: 'varchar', length: 50})
    codigoLote: string;

    @ManyToOne(() => Marca, (marca) => marca.lotes, {nullable: true})
  @JoinColumn({ name: 'marca_id' })
  marca: Marca;

    @CreateDateColumn({type: 'timestamp'})
    criadoEm:Date
      
    @UpdateDateColumn({type: 'timestamp'})
    atualizadoEm: Date
}