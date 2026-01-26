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

  @Column({ length: 20 })
  corredor: string;

  @Column({ length: 20 })
  prateleira: string;

  @Column({ length: 20 })
  sessao: string;

  @Column()
  quantidadeMaxima: string;

  @CreateDateColumn({
    type: 'timestamptz',
  })
  criadoEm: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
  })
  atualizadoEm: Date;
}
