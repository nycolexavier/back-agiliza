import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { FornecedoresModule } from './fornecedores/fornecedores.module';
import { MovimentacoesModule } from './movimentacoes/movimentacoes.module';
import { DepositoModule } from './deposito/deposito.module';
import { LotesModule } from './lotes/lotes.module';
import { MarcasModule } from './marcas/marcas.module';
import { RelatoriosModule } from './relatorios/relatorios.module';
import { CategoriasModule } from './categorias/categorias.module';
import { EnderecosModule } from './enderecos/enderecos.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    DatabaseModule,
    ProductsModule,
    FornecedoresModule,
    MovimentacoesModule,
    DepositoModule,
    LotesModule,
    MarcasModule,
    RelatoriosModule,
    CategoriasModule,
    EnderecosModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
