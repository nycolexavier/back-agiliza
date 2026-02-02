/* eslint-disable */
import { CargoUsuario } from '../../users/enums/cargoUsuario';
import { Status } from '../../enums/status.enum';
import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

@Entity('fornecedores')
export class Fornecedor {
    @PrimaryGeneratedColumn('uuid')
    id: string;

      @Column({
        type: 'enum',
        enum: Status,
        default: Status.ATIVO
      })
      status:Status;

          @Column({
          type: 'enum',
          enum: CargoUsuario,
          default: CargoUsuario.FORNECEDOR,
        })
        cargo: CargoUsuario;

    @Column({ length: 100, unique: true })
  nome: string;

    @Column({
      type: 'varchar',
      nullable: true,
    })
    email?: string | null;

      @Column({
        type: 'varchar',
        length: 20,
        nullable: true
      })
      telefone: string | null;

      @CreateDateColumn({type: 'timestamp'})
    criadoEm:Date

    @UpdateDateColumn({type: 'timestamp'})
    atualizadoEm: Date
}
