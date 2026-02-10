# 🧱 Backend — Sistema de Controle de Estoque

Este projeto corresponde ao **backend** de um sistema de controle de estoque, desenvolvido em **NestJS**.  
Ele é responsável por centralizar regras de negócio, persistência de dados e fornecer uma API REST para o frontend.

Projeto desenvolvido como parte de um **desafio de estágio**.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- NestJS
- TypeORM
- PostgreSQL
- class-validator
- class-transformer

---

## 📂 Estrutura do Projeto

```bash
src/
├─ dashboard/        # Resumo geral do sistema
├─ produtos/         # Produtos
├─ fornecedores/     # Fornecedores
├─ marcas/           # Marcas
├─ deposito/         # Depósitos / corredores
├─ lotes/            # Lotes de produtos
├─ movimentacoes/    # Entrada e saída de estoque
├─ users/            # Usuários
└─ main.ts

# 1️⃣ Instalar dependências
npm install

# 2️⃣ Criar arquivo .env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=senha
DB_NAME=estoque

# 3️⃣ Rodar a aplicação
npm run start:dev
