import { Module } from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { EnderecosController } from './enderecos.controller';
import { Users } from 'src/users/entities/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enderecos } from './entities/endereco.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Enderecos, Users])],
  controllers: [EnderecosController],
  providers: [EnderecosService],
})
export class EnderecosModule {}
