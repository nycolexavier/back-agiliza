/* eslint-disable */

import { Product } from '../../products/entities/product.entity';
import { Marca } from '../../marcas/entities/marca.entity';
import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
import { Deposito } from '../../deposito/entities/deposito.entity';
import { Fornecedor } from '../../fornecedores/entities/fornecedor.entity';

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

      @ManyToOne(() => Product)
  @JoinColumn({ name: 'produto_id' })
  produto: Product;

  @ManyToOne(() => Deposito)
  @JoinColumn({ name: 'deposito_id' })
  deposito: Deposito;

  @ManyToOne(() => Fornecedor)
  @JoinColumn({ name: 'fornecedor_id' })
  fornecedor: Fornecedor;

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