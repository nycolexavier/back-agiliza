import { Lote } from '../../lotes/entities/lote.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('movimentacoes')
export class MovimentacaoEstoque {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  tipo: 'entrada' | 'saida';

  @Column({ type: 'date' })
  dataMovimentacao: Date;

  @Column({ type: 'numeric' })
  quantidade: number;

  @ManyToOne(() => Lote, { eager: true })
  @JoinColumn({ name: 'lote_id' })
  lote: Lote;

  @CreateDateColumn({ type: 'timestamp' })
  criadoEm: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  atualizadoEm: Date;
}
