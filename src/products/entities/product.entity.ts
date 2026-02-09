// import { Categoria } from 'src/categorias/entities/categoria.entity';
import { Categoria } from '../../categorias/entities/categoria.entity';
import { Status } from '../../enums/status.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  isPerecivel: boolean;

  @Column({ unique: true, type: 'varchar', length: 60 })
  nome: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  descricao: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  sku: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ATIVO,
  })
  status: Status;

  @ManyToOne(() => Categoria)
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categoria;

  @CreateDateColumn({ type: 'timestamp' })
  criadoEm: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  atualizadoEm: Date;
}
