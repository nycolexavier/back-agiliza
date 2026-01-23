import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFornecedores1769188369365 implements MigrationInterface {
    name = 'CreateFornecedores1769188369365'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "fornecedores" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "criadoEm" TIMESTAMP NOT NULL DEFAULT now(), "atualizadoEm" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_cafd6e2a65a2345be70ad2b9994" UNIQUE ("nome"), CONSTRAINT "PK_6ba3f90e4a18a597d11b763fc02" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "fornecedores"`);
    }

}
