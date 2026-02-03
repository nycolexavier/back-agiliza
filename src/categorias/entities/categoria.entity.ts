import { Lote } from '../../lotes/entities/lote.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('categorias')
export class Categoria {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  nome: string;

  @Column({ nullable: true })
  logo: string;

  @OneToMany(() => Lote, (lote) => lote.marca)
  lotes: Lote[];

  @CreateDateColumn({ type: 'timestamp' })
  criadoEm: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  atualizadoEm: Date;
}
