import { Users } from '../../users/entities/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('enderecos')
export class Enderecos {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 9 })
  cep: string;

  @Column()
  logradouro: string;

  @Column({ nullable: true })
  complemento: string;

  @Column()
  bairro: string;

  @Column()
  localidade: string;

  @Column()
  estado: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Users, (users) => users.endereco)
  usuario: Users;
}
