/* eslint-disable */
import { Status } from '../../enums/status.enum';
import {BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

@Entity('products')
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true, type: 'varchar', length: 60})
    nome: string

    @Column({type:'varchar', length: 500, nullable: true})
    descricao: string
    
    @Column({type: 'varchar', length: 255, nullable: true})
    sku: string

      @Column({
    type: 'enum',
    enum: Status,
    default: Status.ATIVO,
  })
  status: Status;

    @CreateDateColumn({type: 'timestamp'})
    criadoEm:Date

    @UpdateDateColumn({type: 'timestamp'})
    atualizadoEm: Date

}
