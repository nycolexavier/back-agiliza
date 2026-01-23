import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateLote1769177592004 implements MigrationInterface {
    name = 'CreateLote1769177592004'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Lotes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "precocusto" numeric NOT NULL, "precoVenda" numeric NOT NULL, "quanitdade" numeric NOT NULL, "dataValidade" TIMESTAMP NOT NULL, "codigoBarra" character varying(13) NOT NULL, "codigolote" character varying NOT NULL, "criadoEm" TIMESTAMP NOT NULL DEFAULT now(), "atualizadoEm" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_f31e781d459feda69cbcec9a4d5" UNIQUE ("codigoBarra"), CONSTRAINT "PK_28f3bf00d21d0d3c6dbcf576ced" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Lotes"`);
    }

}
