/* eslint-disable */
import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

@Entity('fornecedores')
export class Fornecedor {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 100, unique: true })
  nome: string;

      @CreateDateColumn({type: 'timestamp'})
    criadoEm:Date

    @UpdateDateColumn({type: 'timestamp'})
    atualizadoEm: Date
}
