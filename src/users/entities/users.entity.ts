import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CargoUsuario } from '../enums/cargoUsuario';
import { Status } from '../../enums/status.enum';
import { Enderecos } from '../../enderecos/entities/endereco.entity';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: CargoUsuario,
    default: CargoUsuario.FUNCIONARIO,
  })
  cargo: CargoUsuario;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ATIVO,
  })
  status: Status;

  @Column()
  email: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  telefone: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @OneToMany(() => Enderecos, (enderecos) => enderecos.usuario, {
    cascade: true,
  })
  endereco: Enderecos[];
}
