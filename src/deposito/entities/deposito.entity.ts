/* eslint-disable */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('deposito')
export class Deposito {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({unique: true, length: 20 })
  corredor: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  temProduto: boolean;

  @CreateDateColumn({
    type: 'timestamptz',
  })
  criadoEm: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
  })
  atualizadoEm: Date;
}
