import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCategorias1770140114555 implements MigrationInterface {
    name = 'AddCategorias1770140114555'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categorias" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "logo" character varying, "criadoEm" TIMESTAMP NOT NULL DEFAULT now(), "atualizadoEm" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_de8a2d8979f7820616e31dc1e15" UNIQUE ("nome"), CONSTRAINT "PK_3886a26251605c571c6b4f861fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Lotes" DROP COLUMN "isPerecivel"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lotes" ADD "isPerecivel" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`DROP TABLE "categorias"`);
    }

}
